import type { NextApiRequest, NextApiResponse } from 'next';

type Handler = (req: NextApiRequest, res: NextApiResponse) => unknown | Promise<unknown>;

/** Require a specific HTTP method; returns 405 on mismatch */
export function requireMethod(method: string, handler: Handler): Handler {
  return (req, res) => {
    if (req.method !== method) {
      return res.status(405).json({ success: false, error: `Method ${req.method} not allowed` });
    }
    return handler(req, res);
  };
}

/** Parse JSON body fields into typed record */
export function parseBody<T extends Record<string, unknown>>(req: NextApiRequest, keys: (keyof T)[]): Partial<T> {
  const out: Record<string, unknown> = {};
  for (const key of keys) {
    const v = req.body[key as string];
    if (v !== undefined) out[key as string] = v;
  }
  return out as Partial<T>;
}
