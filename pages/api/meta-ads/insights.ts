import type { NextApiRequest, NextApiResponse } from 'next';
import { getInsights } from '@/lib/meta-ads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const {
      level, date_preset, since, until,
      campaign_ids, adset_ids, ad_ids,
    } = req.query;

    const insights = await getInsights({
      level: level as any || 'campaign',
      date_preset: date_preset as any || 'last_30d',
      time_range: since && until ? { since: String(since), until: String(until) } : undefined,
      campaign_ids: campaign_ids ? String(campaign_ids).split(',') : undefined,
      adset_ids: adset_ids ? String(adset_ids).split(',') : undefined,
      ad_ids: ad_ids ? String(ad_ids).split(',') : undefined,
    });

    // Summary
    const total = insights.reduce((acc, i) => ({
      reach: acc.reach + i.reach,
      impressions: acc.impressions + i.impressions,
      spend: acc.spend + i.spend,
      clicks: acc.clicks + i.clicks,
      conversions: acc.conversions + i.conversions,
    }), { reach: 0, impressions: 0, spend: 0, clicks: 0, conversions: 0 });

    res.status(200).json({ insights, summary: total });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
