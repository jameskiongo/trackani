import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { page = 1, limit = 5 } = req.query;

  try {
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?page=${page}&limit=${limit}`,
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch data" });
  }
}
