import type { NextApiRequest, NextApiResponse } from 'next';
import { listAds, createAd } from '@/lib/meta-ads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { adset_id } = req.query;
      const ads = await listAds(adset_id ? String(adset_id) : undefined);
      return res.status(200).json({ ads });
    }

    if (req.method === 'POST') {
      const { name, adset_id, creative, status } = req.body;
      if (!name || !adset_id || !creative) {
        return res.status(400).json({ error: 'name, adset_id, and creative required' });
      }
      const result = await createAd({ name, adset_id, creative, status });
      return res.status(201).json({ ad_id: result.id });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
