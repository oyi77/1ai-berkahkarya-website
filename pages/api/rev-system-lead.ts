import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * Legacy Next.js API route. This project uses `output: 'export'`, so this
 * route is not part of the deployed static site. It used to console.log the
 * submission and return success — a lead that was silently thrown away.
 *
 * Kept as an explicit failure so no caller mistakes it for a working endpoint.
 * Use `/api/lead` (Cloudflare Pages Function) for real lead capture.
 */
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  return res.status(501).json({
    success: false,
    message:
      'This endpoint is not available on the static site. Use /api/lead or WhatsApp instead.',
  });
}
