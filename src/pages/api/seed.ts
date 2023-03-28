import type { NextApiRequest, NextApiResponse } from 'next';
import getSeedObj from '../../lib/getSeedObj';

export default async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const seed = req.body ? JSON.parse(req.body).seed : 'none';
  const seedObj = await getSeedObj(seed);

  res.status(200).json(seedObj);
}