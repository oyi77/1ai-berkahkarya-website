import type { NextApiRequest, NextApiResponse } from 'next';
import { getAdSet, updateAdSet, deleteAdSet } from '@/lib/meta-ads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const adsetId = String(id);

  try {
    if (req.method === 'GET') {
      const adset = await getAdSet(adsetId);
      return res.status(200).json({ adset });
    }

    if (req.method === 'PATCH') {
      const result = await updateAdSet(adsetId, req.body);
      return res.status(200).json(result);
    }

    if (req.method === 'DELETE') {
      const result = await deleteAdSet(adsetId);
      return res.status(200).json(result);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
