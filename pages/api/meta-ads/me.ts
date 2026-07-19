import type { NextApiRequest, NextApiResponse } from 'next';
import { getAccountInfo, validateToken } from '@/lib/meta-ads';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const [info, tokenInfo] = await Promise.all([
      getAccountInfo().catch(() => null),
      validateToken().catch(() => null),
    ]);

    res.status(200).json({
      account: info ? {
        id: info.id,
        name: info.name,
        account_status: info.account_status,
        currency: info.currency,
        balance: info.balance,
        amount_spent: info.amount_spent,
      } : null,
      token: tokenInfo,
      configured: !!process.env.META_ADS_ACCOUNT_ID && !!process.env.META_ADS_ACCESS_TOKEN,
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
}
