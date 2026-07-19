import type { NextApiRequest, NextApiResponse } from 'next';
import { getCampaign, updateCampaign, deleteCampaign } from '@/lib/meta-ads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const campaignId = String(id);

  try {
    if (req.method === 'GET') {
      const campaign = await getCampaign(campaignId);
      return res.status(200).json({ campaign });
    }

    if (req.method === 'PATCH') {
      const result = await updateCampaign(campaignId, req.body);
      return res.status(200).json(result);
    }

    if (req.method === 'DELETE') {
      const result = await deleteCampaign(campaignId);
      return res.status(200).json(result);
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
