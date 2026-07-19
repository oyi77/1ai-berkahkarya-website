import type { NextApiRequest, NextApiResponse } from 'next';
import { listAdSets, createAdSet } from '@/lib/meta-ads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const { campaign_id } = req.query;
      const adsets = await listAdSets(campaign_id ? String(campaign_id) : undefined);
      return res.status(200).json({ adsets });
    }

    if (req.method === 'POST') {
      const { name, campaign_id, daily_budget, lifetime_budget, bid_amount,
        billing_event, optimization_goal, targeting, status, start_time, end_time, promoted_object } = req.body;
      if (!name || !campaign_id || !optimization_goal) {
        return res.status(400).json({ error: 'name, campaign_id, and optimization_goal required' });
      }
      const result = await createAdSet({
        name, campaign_id, daily_budget, lifetime_budget, bid_amount,
        billing_event, optimization_goal, targeting, status, start_time, end_time, promoted_object,
      });
      return res.status(201).json({ adset_id: result.id });
    }

    return res.status(405).json({ error: 'Method not allowed' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
