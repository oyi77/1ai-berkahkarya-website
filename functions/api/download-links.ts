/**
 * Download links — Cloudflare Pages Function.
 *
 * Set one secret (plain text env var, not a secret is fine):
 *   DOWNLOAD_LINKS_JSON = {
 *     "digital-products-starter": [
 *       { "label": "Prompt Pack AI — PDF", "url": "https://drive.google.com/..." }
 *     ],
 *     "digital-products-professional": [ ... ],
 *     "digital-products-enterprise": [ ... ]
 *   }
 *
 * Links live server-side so they can be changed without rebuilding the site.
 * The browser only requests the SKU it paid for (verified via /api/order-status).
 */
interface Env {
  DOWNLOAD_LINKS_JSON?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

interface DownloadLink {
  label: string;
  url: string;
}

export const onRequestGet = async ({ request, env }: HandlerContext): Promise<Response> => {
  const sku = new URL(request.url).searchParams.get('sku') || '';
  if (!/^[a-zA-Z0-9_-]{3,64}$/.test(sku)) {
    return Response.json({ links: [] }, { status: 400 });
  }

  let map: Record<string, DownloadLink[]>;
  try {
    map = JSON.parse(env.DOWNLOAD_LINKS_JSON || '{}') as Record<string, DownloadLink[]>;
  } catch {
    return Response.json({ links: [] }, { status: 503 });
  }

  const raw = Array.isArray(map[sku]) ? map[sku] : [];
  const links = raw
    .filter((l) => l && typeof l.label === 'string' && typeof l.url === 'string')
    .map((l) => ({ label: l.label.slice(0, 120), url: l.url.slice(0, 2048) }))
    .filter((l) => /^https?:\/\//.test(l.url));

  return Response.json({ links }, { headers: { 'Cache-Control': 'no-store' } });
};
