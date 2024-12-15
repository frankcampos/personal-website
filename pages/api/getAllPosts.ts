import axios, { AxiosInstance } from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export const api: AxiosInstance = axios.create({
  baseURL: `${process.env.STRAPI_URL}`,
  headers: {
    'Authorization': `Bearer ${process.env.STRAPI_TOKEN}`
  },
});

type ResponseData = {
  posts?: any[];
  pagination?: any;
  message?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method === 'GET') {
    try {
      const { page = 1, searchQuery = "" } = req.query;
      const searchFilter = searchQuery
        ? `&filters[title][$containsi]=${searchQuery}`
        : "";
      const response = await api.get(
        `api/blogs?populate=*&pagination[page]=${page}&pagination[pageSize]=${process.env.PAGE_LIMIT}${searchFilter}`
      );
      res.status(200).json({
        posts: response.data.data,
        pagination: response.data.meta.pagination,
      });
    } catch (error) {
      console.error("Error fetching blogs:", error);
      res.status(500).json({ message: "Server error" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}