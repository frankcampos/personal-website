"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import slugify from "react-slugify";
import dynamic from "next/dynamic";
import Image from "next/image";
import { uploadImage } from "@/lib/api";
import { toast } from "react-hot-toast";

// Dynamically import MarkdownEditor with no SSR
const MarkdownEditor = dynamic(() => import("@uiw/react-markdown-editor"), {
  ssr: false,
});

const WritePost = () => {
  const [markdownContent, setMarkdownContent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [postId, setPostID] = useState<number | null>(null);
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedImage = e.target.files[0];
      setCoverImage(selectedImage);
      setImagePreview(URL.createObjectURL(selectedImage));
    }
  };

  const handleSubmit = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const postSlug = slugify(title);
      const postData = {
        title,
        description,
        slug: postSlug,
        content: markdownContent,
      };

      const response = await fetch('/api/createPost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password, postData }),
      });

      if (response.ok) {
        const postResponse = await response.json();
        setPostID(postResponse.id)
      }

      if (coverImage) {
        if (postId !== null) {
          await uploadImage(coverImage, postId);
        }
      }

      router.push(`/blogs/${postSlug}`);
      toast.success("Post created successfully!");
    } catch (err) {
      setError("Failed to create post. Please try again.");
      toast.error("Failed to create post.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto p-6 bg-gray-900 text-gray-100 rounded-lg shadow-lg">
      <button
        onClick={() => router.back()}
        className="text-tennessee-orange hover:text-gray-200 mb-6 flex items-center space-x-2"
      >
        <FaArrowLeft /> <span>Back</span>
      </button>

      <h1 className="text-3xl font-bold mb-6 text-center text-gray-200">
        Create New Post
      </h1>

      {error && (
        <div className="mb-4 p-3 bg-red-600 text-white rounded-md">{error}</div>
      )}

      {/* Title */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Title</label>
        <input
          type="text"
          placeholder="Enter a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Description</label>
        <textarea
          placeholder="Enter a short description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Password</label>
        <input
          type="password"
          placeholder="Enter admin password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-md bg-gray-800 text-gray-100 border border-gray-700 focus:border-blue-500 focus:outline-none"
        />
      </div>

      {/* Image Upload */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2">Cover Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full p-2 bg-gray-800 rounded-md text-gray-400"
        />
        {imagePreview && imagePreview.trim() !== '' && (
          <Image
            src={imagePreview}
            alt="Preview"
            width={400}
            height={200}
            className="mt-4 rounded-md"
          />
        )}
      </div>

      {/* Markdown Editor */}
      <div className="mb-6">
        <label className="block text-lg font-medium mb-2">Content</label>
        <MarkdownEditor
          value={markdownContent}
          onChange={(value) => setMarkdownContent(value)}
          height="300px"
          className="rounded-md"
        />
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        disabled={isLoading || !password || !title}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md text-lg transition duration-300 disabled:bg-gray-600"
      >
        {isLoading ? "Posting..." : "Create Post"}
      </button>
    </div>
  );
};

export default WritePost;
