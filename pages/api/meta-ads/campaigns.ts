import type { NextApiRequest, NextApiResponse } from 'next';
import { listCampaigns, createCampaign } from '@/lib/meta-ads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const campaigns = await listCampaigns();
      return res.status(200).json({ campaigns });
    }

    if (req.method === 'POST') {
      const { name, objective, status, daily_budget, lifetime_budget, bid_strategy, special_ad_categories, start_time } = req.body;
      if (!name || !objective) {
        return res.status(400).json({ error: 'name and objective are required' });
      }
      const result = await createCampaign({
        name,
        objective,
        status,
        daily_budget,
        lifetime_budget,
        bid_strategy,
        special_ad_categories,
        start_time,
      });
      return res.status(201).json({ campaign_id: result.id });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
