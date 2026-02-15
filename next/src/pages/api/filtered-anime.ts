import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { genres, status, type, rating } = req.query;

  try {
    const params = new URLSearchParams();
    if (genres) params.append("genres", genres as string);
    if (status) params.append("status", status as string);
    if (type) params.append("type", type as string);
    if (rating) params.append("rating", rating as string);

    const response = await fetch(
      `https://api.jikan.moe/v4/anime?${params.toString()}`,
    );
    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch anime" });
  }
}
