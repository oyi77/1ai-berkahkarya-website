import type { ComponentType } from 'react';
import ServiceLP from './ServiceLP';
import type { LPContent } from './ServiceLP';

type LPComponent = ComponentType<{ locale?: string }>;

// ─── Registry data ───
const REGISTRY: Record<string, Record<string, LPComponent>> = {};

function register(service: string, id: string, component: LPComponent) {
  (REGISTRY[service] ??= {})[id] = component;
}

// Helper to create data-driven LPs using the ServiceLP template
function createDataLP(data: LPContent): LPComponent {
  function DataLP({ locale = 'id' }: { locale?: string }) {
    return <ServiceLP content={data} locale={locale} />;
  }
  DataLP.displayName = `LP-${data.serviceName}`;
  return DataLP;
}

// ══════════════════════════════════════
// DATA-DRIVEN LP CONTENT IMPORTS
// ══════════════════════════════════════
import {
  oneAiData, adforgeAiData, aiAgentProData, aiAutomationData,
} from './lp-data/ai-services';
import {
  websiteDevelopmentData, videoProductionData, socialMediaManagementData, securityAuditData,
} from './lp-data/digital-services';
import {
  customDocumentsData, deepResearchData, certificateDesignData, digitalProductsData,
} from './lp-data/doc-design-services';
import {
  jasaOpenclawData, jasaSosmedData, jasaVideoAiData, jasaWebsiteData,
  jasaContentPlannerData, jasaFotoProdukData, revSystemData,
} from './lp-data/jasa-services';

// ══════════════════════════════════════
// AI Video Studio LPs (custom)
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
// Jasa Konstruksi LPs (custom)
// ══════════════════════════════════════
import JasaKonstruksiLP1 from './jasa-konstruksi/LP1';
import JasaKonstruksiLP2 from './jasa-konstruksi/LP2';

register('jasa-konstruksi', '1', JasaKonstruksiLP1);
register('jasa-konstruksi', '2', JasaKonstruksiLP2);

// ══════════════════════════════════════
// Trading LP (custom)
// ══════════════════════════════════════
import TradingLP1 from './trading/LP1';
register('trading', '1', TradingLP1);

// ══════════════════════════════════════
// Jasa Design LP (custom)
// ══════════════════════════════════════
import JasaDesignLP1 from './jasa-design/LP1';
register('jasa-design', '1', JasaDesignLP1);

// ══════════════════════════════════════
// VilonaFX LP (custom)
// ══════════════════════════════════════
import VilonaFXLP1 from './vilonafx/LP1';
register('vilonafx', '1', VilonaFXLP1);

// ══════════════════════════════════════
// Jasa Kontraktor LP (custom)
// ══════════════════════════════════════
import JasaKontraktorLP1 from './jasa-kontraktor/LP1';
register('jasa-kontraktor', '1', JasaKontraktorLP1);

// ══════════════════════════════════════
// DATA-DRIVEN LP REGISTRATIONS
// ══════════════════════════════════════
register('one-ai', '1', createDataLP(oneAiData));
register('adforge-ai', '1', createDataLP(adforgeAiData));
register('ai-agent-pro', '1', createDataLP(aiAgentProData));
register('ai-automation', '1', createDataLP(aiAutomationData));
register('website-development', '1', createDataLP(websiteDevelopmentData));
register('video-production', '1', createDataLP(videoProductionData));
register('social-media-management', '1', createDataLP(socialMediaManagementData));
register('security-audit', '1', createDataLP(securityAuditData));
register('custom-documents', '1', createDataLP(customDocumentsData));
register('deep-research', '1', createDataLP(deepResearchData));
register('certificate-design', '1', createDataLP(certificateDesignData));
register('digital-products', '1', createDataLP(digitalProductsData));
register('jasa-openclaw', '1', createDataLP(jasaOpenclawData));
register('jasa-sosmed', '1', createDataLP(jasaSosmedData));
register('jasa-video-ai', '1', createDataLP(jasaVideoAiData));
register('jasa-website', '1', createDataLP(jasaWebsiteData));
register('jasa-content-planner', '1', createDataLP(jasaContentPlannerData));
register('jasa-foto-produk', '1', createDataLP(jasaFotoProdukData));
register('rev-system', '1', createDataLP(revSystemData));

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
    service: 'one-ai',
    icon: '🧠',
    displayName: { id: '1AI Gateway', en: '1AI Gateway' },
    description: { id: 'Gateway AI untuk akses ChatGPT, Gemini, Claude, dan 50+ model AI — satu API, semua model.', en: 'AI gateway for ChatGPT, Gemini, Claude, and 50+ AI models — one API, all models.' },
    lps: ['1'],
  },
  {
    service: 'adforge-ai',
    icon: '📢',
    displayName: { id: 'AdForge AI', en: 'AdForge AI' },
    description: { id: 'Buat iklan digital dengan AI — copy, visual, targeting. 10x lebih cepat.', en: 'Create digital ads with AI — copy, visual, targeting. 10x faster.' },
    lps: ['1'],
  },
  {
    service: 'ai-agent-pro',
    icon: '🤖',
    displayName: { id: 'AI Agent Pro', en: 'AI Agent Pro' },
    description: { id: 'Agen AI kustom untuk otomatisasi bisnis — customer service, lead gen, workflow.', en: 'Custom AI agents for business automation — customer service, lead gen, workflow.' },
    lps: ['1'],
  },
  {
    service: 'ai-automation',
    icon: '⚡',
    displayName: { id: 'AI Automation', en: 'AI Automation' },
    description: { id: 'Otomatisasi proses bisnis dengan AI — hemat 90% waktu, 10x lipat produktivitas.', en: 'Business process automation with AI — save 90% time, 10x productivity.' },
    lps: ['1'],
  },
  {
    service: 'website-development',
    icon: '🌐',
    displayName: { id: 'Website Development', en: 'Website Development' },
    description: { id: 'Jasa pembuatan website profesional — company profile, toko online, landing page.', en: 'Professional website development — company profile, online store, landing page.' },
    lps: ['1'],
  },
  {
    service: 'video-production',
    icon: '🎥',
    displayName: { id: 'Video Production', en: 'Video Production' },
    description: { id: 'Produksi video komersial, korporat, dan konten sosial media berkualitas tinggi.', en: 'Commercial, corporate, and social media video production.' },
    lps: ['1'],
  },
  {
    service: 'social-media-management',
    icon: '📱',
    displayName: { id: 'Social Media Management', en: 'Social Media Management' },
    description: { id: 'Kelola sosial media bisnis Anda — konten harian, engagement, growth organik.', en: 'Manage your business social media — daily content, engagement, organic growth.' },
    lps: ['1'],
  },
  {
    service: 'security-audit',
    icon: '🔒',
    displayName: { id: 'Security Audit', en: 'Security Audit' },
    description: { id: 'Audit keamanan sistem & penetration testing — temukan celah sebelum hacker.', en: 'System security audit & penetration testing — find vulnerabilities before hackers do.' },
    lps: ['1'],
  },
  {
    service: 'custom-documents',
    icon: '📄',
    displayName: { id: 'Custom Documents', en: 'Custom Documents' },
    description: { id: 'Pembuatan dokumen bisnis custom — proposal, SOP, laporan keuangan, kontrak.', en: 'Custom business document creation — proposals, SOPs, financial reports, contracts.' },
    lps: ['1'],
  },
  {
    service: 'deep-research',
    icon: '🔬',
    displayName: { id: 'Deep Research', en: 'Deep Research' },
    description: { id: 'Riset mendalam dengan AI — market research, competitor analysis, academic research.', en: 'Deep research with AI — market research, competitor analysis, academic research.' },
    lps: ['1'],
  },
  {
    service: 'certificate-design',
    icon: '🏅',
    displayName: { id: 'Certificate Design', en: 'Certificate Design' },
    description: { id: 'Desain sertifikat & piagam profesional — kursus, penghargaan, acara.', en: 'Professional certificate & award design — courses, awards, events.' },
    lps: ['1'],
  },
  {
    service: 'digital-products',
    icon: '💳',
    displayName: { id: 'Digital Products', en: 'Digital Products' },
    description: { id: 'Produk digital AI — prompt packs, templates, AI tools. Mulai Rp 49K.', en: 'AI digital products — prompt packs, templates, AI tools. Starting at $3.' },
    lps: ['1'],
  },
  {
    service: 'jasa-konstruksi',
    icon: '🏗️',
    displayName: { id: 'Jasa Konstruksi', en: 'Construction Services' },
    description: { id: 'Jasa konstruksi bangunan — rumah, ruko, gedung komersial. Proses transparan, hasil terjamin.', en: 'Building construction services — homes, shophouses, commercial buildings.' },
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
    description: { id: 'Jasa design arsitektur & interior — gambar kerja, 3D visualisasi, RAB detail.', en: 'Architecture & interior design services — working drawings, 3D visualization.' },
    lps: ['1'],
  },
  {
    service: 'vilonafx',
    icon: '🤖',
    displayName: { id: 'Vilona Trade FX', en: 'Vilona Trade FX' },
    description: { id: 'AI Trading Assistant — sinyal trading akurat, auto-eksekusi, whitelabel.', en: 'AI Trading Assistant — accurate signals, auto-execution, whitelabel platform.' },
    lps: ['1'],
  },
  {
    service: 'jasa-kontraktor',
    icon: '🏗️',
    displayName: { id: 'Jasa Kontraktor', en: 'Contractor Services' },
    description: { id: 'Jasa kontraktor & desain bangunan — rumah, kantor, hotel, interior.', en: 'Professional contractor & building design services.' },
    lps: ['1'],
  },
  {
    service: 'jasa-openclaw',
    icon: '⚙️',
    displayName: { id: 'Jasa OpenClaw', en: 'OpenClaw Setup' },
    description: { id: 'Setup & kustomisasi OpenClaw AI Agent — untuk bisnis dan personal.', en: 'OpenClaw AI Agent setup & customization — for business and personal use.' },
    lps: ['1'],
  },
  {
    service: 'jasa-sosmed',
    icon: '📱',
    displayName: { id: 'Jasa Sosmed', en: 'Social Media Service' },
    description: { id: 'Kelola sosial media Anda — konten harian, engagement, growth organik.', en: 'Social media management — daily content, engagement, organic growth.' },
    lps: ['1'],
  },
  {
    service: 'jasa-video-ai',
    icon: '🎬',
    displayName: { id: 'Jasa Video AI', en: 'AI Video Service' },
    description: { id: 'Buat video AI untuk promosi, penjelasan produk, konten viral — tanpa kamera.', en: 'Create AI videos for promotions, product explainers, viral content — no camera needed.' },
    lps: ['1'],
  },
  {
    service: 'jasa-website',
    icon: '🌐',
    displayName: { id: 'Jasa Website', en: 'Website Service' },
    description: { id: 'Jasa pembuatan website profesional — murah, cepat, kualitas terjamin.', en: 'Professional website creation service — affordable, fast, guaranteed quality.' },
    lps: ['1'],
  },
  {
    service: 'jasa-content-planner',
    icon: '📅',
    displayName: { id: 'Jasa Content Planner', en: 'Content Planner Service' },
    description: { id: 'Strategi konten & planning untuk sosial media bisnis Anda.', en: 'Content strategy & planning for your business social media.' },
    lps: ['1'],
  },
  {
    service: 'jasa-foto-produk',
    icon: '📸',
    displayName: { id: 'Jasa Foto Produk', en: 'Product Photography' },
    description: { id: 'Foto produk profesional untuk e-commerce & marketplace — hasil studio quality.', en: 'Professional product photography for e-commerce & marketplace — studio quality.' },
    lps: ['1'],
  },
  {
    service: 'rev-system',
    icon: '💰',
    displayName: { id: 'Rev System', en: 'Rev System' },
    description: { id: 'Sistem revenue automation — pipeline, CRM, billing, laporan otomatis.', en: 'Revenue automation system — pipeline, CRM, billing, automated reports.' },
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
