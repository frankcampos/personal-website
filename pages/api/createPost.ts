import axios, { AxiosInstance } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";
import { UserBlogPostData } from "@/lib/types";

export const api: AxiosInstance = axios.create({
  baseURL: process.env.STRAPI_URL,
  headers: {
    "Authorization": `Bearer ${process.env.STRAPI_TOKEN}`
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { password, postData }: { password: string, postData: UserBlogPostData } = req.body;
      if (password === process.env.ADMIN_PASSWORD) {
        const reqData = { data: { ...postData } };
        const response = await api.post('api/blogs', reqData);
        res.status(200).json(response.data.data);
      } else {
        res.status(401).json({ message: 'Password incorrect' });
      }
    } catch (error) {
      console.error('Error creating post', error);
      res.status(500).json({ message: "Failed to create post" });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}