import type { ComponentType } from 'react';

type LPComponent = ComponentType<{ locale?: string }>;

// ─── Registry data ───
const REGISTRY: Record<string, Record<string, LPComponent>> = {};

function register(service: string, id: string, component: LPComponent) {
  (REGISTRY[service] ??= {})[id] = component;
}

// ══════════════════════════════════════
// AI Video Studio LPs
// ══════════════════════════════════════
import LP1Video from './LP1';
import LP2Video from './LP2';
import LP3Video from './LP3';
import LP4Video from './LP4';
import LP5Video from './LP5';
import LP6Video from './LP6';

register('ai-video-studio', '1', LP1Video);
register('ai-video-studio', '2', LP2Video);
register('ai-video-studio', '3', LP3Video);
register('ai-video-studio', '4', LP4Video);
register('ai-video-studio', '5', LP5Video);
register('ai-video-studio', '6', LP6Video);

// ══════════════════════════════════════
// Jasa Konstruksi LPs
// ══════════════════════════════════════
import JasaKonstruksiLP1 from './jasa-konstruksi/LP1';
import JasaKonstruksiLP2 from './jasa-konstruksi/LP2';

register('jasa-konstruksi', '1', JasaKonstruksiLP1);
register('jasa-konstruksi', '2', JasaKonstruksiLP2);

// ══════════════════════════════════════
// Trading LPs
// ══════════════════════════════════════
import TradingLP1 from './trading/LP1';

register('trading', '1', TradingLP1);

// ══════════════════════════════════════
// Jasa Design LPs
// ══════════════════════════════════════
import JasaDesignLP1 from './jasa-design/LP1';

register('jasa-design', '1', JasaDesignLP1);

// ─── Metadata per service ───
export interface ServiceMeta {
  service: string;
  icon: string;
  displayName: { id: string; en: string };
  description: { id: string; en: string };
  lps: string[];
}

export const SERVICE_METADATA: ServiceMeta[] = [
  {
    service: 'ai-video-studio',
    icon: '🎬',
    displayName: { id: 'AI Video Studio', en: 'AI Video Studio' },
    description: { id: 'Buat video AI dari teks — cinemagraph, avatar, animasi karakter, lip-sync, dan lainnya.', en: 'Create AI videos from text — cinemagraph, avatar, character animation, lip-sync, and more.' },
    lps: ['1', '2', '3', '4', '5', '6'],
  },
  {
    service: 'jasa-konstruksi',
    icon: '🏗️',
    displayName: { id: 'Jasa Konstruksi', en: 'Construction Services' },
    description: { id: 'Jasa konstruksi bangunan — rumah, ruko, gedung komersial. Proses transparan, hasil terjamin.', en: 'Building construction services — homes, shophouses, commercial buildings. Transparent process, guaranteed results.' },
    lps: ['1', '2'],
  },
  {
    service: 'trading',
    icon: '📈',
    displayName: { id: 'Trading', en: 'Trading' },
    description: { id: 'Sinyal dan bot trading otomatis berbasis AI. XAUUSD, Forex, Crypto.', en: 'AI-powered automated trading signals and bots. XAUUSD, Forex, Crypto.' },
    lps: ['1'],
  },
  {
    service: 'jasa-design',
    icon: '🏛️',
    displayName: { id: 'Jasa Design', en: 'Design Services' },
    description: { id: 'Jasa design arsitektur & interior — gambar kerja, 3D visualisasi, RAB detail.', en: 'Architecture & interior design services — working drawings, 3D visualization, detailed RAB.' },
    lps: ['1'],
  },
];

// ─── Exports ───
export function getComponent(service: string, id: string): LPComponent | undefined {
  return REGISTRY[service]?.[id];
}

export function getStaticPathsData() {
  return Object.entries(REGISTRY).flatMap(([service, ids]) =>
    Object.keys(ids).map((id) => ({ params: { service, id } }))
  );
}
