/**
 * Lead capture endpoint — CF Pages Function.
 *
 * Static export can't run Next `/api/*` routes; this Function runs on the
 * CF edge and forwards leads to a Telegram channel (if configured) so the
 * owner gets instant notification without exposing a bot token in the client.
 *
 * Secrets (set via `wrangler pages secret put`):
 *   TELEGRAM_BOT_TOKEN — bot token for notifications
 *   TELEGRAM_CHAT_ID   — owner chat/channel id
 */
interface Env {
  TELEGRAM_BOT_TOKEN?: string;
  TELEGRAM_CHAT_ID?: string;
}

interface LeadBody {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  url?: string;
}

interface HandlerContext {
  request: Request;
  env: Env;
}

export const onRequestPost = async ({ request, env }: HandlerContext): Promise<Response> => {
  try {
    const body = (await request.json()) as LeadBody;
    const name = body.name?.trim() || '';
    const email = body.email?.trim() || '';
    const phone = body.phone?.trim() || '';
    const service = body.service?.trim() || '';
    const message = body.message?.trim() || '';
    const url = body.url?.trim() || '';

    if (!name && !email && !phone) {
      return Response.json({ success: false, error: 'name, email, or phone required' }, { status: 400 });
    }

    const text = [
      '🔔 *New Lead — berkahkarya.org*',
      service ? `*Service:* ${service}` : '',
      name ? `*Name:* ${name}` : '',
      email ? `*Email:* ${email}` : '',
      phone ? `*Phone:* ${phone}` : '',
      message ? `*Message:* ${message}` : '',
      url ? `*Source:* ${url}` : '',
    ]
      .filter(Boolean)
      .join('\n');

    let telegramSent = false;
    if (env.TELEGRAM_BOT_TOKEN && env.TELEGRAM_CHAT_ID) {
      const res = await fetch(
        `https://api.telegram.org/bot${env.TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ chat_id: env.TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' }),
        },
      );
      telegramSent = res.ok;
    }

    return Response.json({ success: true, message: 'Lead captured', telegramSent });
  } catch (e) {
    return Response.json({ success: false, error: 'Invalid request' }, { status: 400 });
  }
};
