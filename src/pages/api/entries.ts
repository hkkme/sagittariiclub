// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  entries: any
}

const entries = [
  {
    id: '0000000000000001',
    status: 'active',
  },
  {
    id: '0000000000000002',
    status: 'active',
  },

];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(entries);
}
