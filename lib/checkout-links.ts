/**
 * Checkout link config — all Scalev payment URLs in one place.
 *
 * Replace these with actual Scalev checkout URLs before go-live.
 * Currently points to the live Vilona Crypto Trading Assistant product
 * where users select their variant at checkout.
 */
export const SCALEV_CHECKOUT_URL =
  process.env.NEXT_PUBLIC_SCALEV_CHECKOUT_URL ||
  'https://jasahub.id/p/vilona-crypto-trading-assistant';

/** Varian name → direct checkout if Scalev supports SKU-based links */
export const SCALEV_VARIANT_MAP: Record<string, { tier: string; label: string }> = {
  'Chanel Signal Crypto': { tier: 'signal_channel', label: 'Signal Channel' },
  'Bot Crypto': { tier: 'auto_bot', label: 'Auto Bot' },
  'Nexus Data Intelegent': { tier: 'nexus_terminal', label: 'Nexus Terminal' },
};
