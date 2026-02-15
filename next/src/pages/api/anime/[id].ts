import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { id } = req.query;

  if (!id || typeof id !== "string") {
    return res.status(400).json({ error: "Invalid anime ID" });
  }

  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch anime" });
    }

    const data = await response.json();

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch anime details" });
  }
}
