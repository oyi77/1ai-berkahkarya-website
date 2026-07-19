// =====================================================
// Meta Ads Manager — Meta Marketing API v22.0 Client
// =====================================================
// Wraps graph.facebook.com/v22.0/{ad-account-id}/
// for campaign, ad set, ad CRUD + insights
// =====================================================

const API_VERSION = 'v22.0';
const BASE = `https://graph.facebook.com/${API_VERSION}`;

// ─── Types ───────────────────────────────────────────

export interface Campaign {
  id: string;
  name: string;
  objective: string;
  status: 'ACTIVE' | 'PAUSED' | 'ARCHIVED' | 'DELETED';
  buying_type: string;
  daily_budget: number | null;
  lifetime_budget: number | null;
  created_time: string;
  start_time: string | null;
  stop_time: string | null;
  special_ad_categories: string[];
  bid_strategy: string | null;
  configured_status: string;
  effective_status: string;
}

export interface AdSet {
  id: string;
  name: string;
  campaign_id: string;
  status: 'ACTIVE' | 'PAUSED' | 'ARCHIVED';
  daily_budget: number | null;
  lifetime_budget: number | null;
  bid_amount: number | null;
  billing_event: string;
  optimization_goal: string;
  targeting: Record<string, unknown>;
  start_time: string | null;
  end_time: string | null;
  created_time: string;
  configured_status: string;
  effective_status: string;
  promoted_object: { page_id?: string; pixel_id?: string } | null;
}

export interface Ad {
  id: string;
  name: string;
  adset_id: string;
  status: 'ACTIVE' | 'PAUSED' | 'ARCHIVED' | 'DELETED';
  creative: {
    id: string;
    title?: string;
    body?: string;
    image_url?: string;
    call_to_action_type?: string;
    link_url?: string;
    object_story_spec?: Record<string, unknown>;
  };
  created_time: string;
  configured_status: string;
  effective_status: string;
}

export interface Insights {
  reach: number;
  impressions: number;
  frequency: number;
  cpm: number;
  cpp: number;
  ctr: number;
  cpc: number;
  spend: number;
  clicks: number;
  conversions: number;
  cost_per_conversion: number;
  roas: number | null;
  date_start: string;
  date_stop: string;
}

export interface CampaignCreateParams {
  name: string;
  objective: 'OUTCOME_TRAFFIC' | 'OUTCOME_SALES' | 'OUTCOME_LEADS' | 'OUTCOME_AWARENESS' | 'OUTCOME_ENGAGEMENT';
  status?: 'ACTIVE' | 'PAUSED';
  daily_budget?: number;   // in cents
  lifetime_budget?: number;
  bid_strategy?: 'LOWEST_COST_WITHOUT_CAP' | 'LOWEST_COST_WITH_BID_CAP' | 'COST_CAP';
  special_ad_categories?: string[];
  start_time?: string;
}

export interface AdSetCreateParams {
  name: string;
  campaign_id: string;
  daily_budget?: number;
  lifetime_budget?: number;
  bid_amount?: number;
  billing_event?: 'IMPRESSIONS' | 'LINK_CLICKS' | 'APP_INSTALLS' | 'PAGE_LIKES';
  optimization_goal: 'REACH' | 'IMPRESSIONS' | 'LINK_CLICKS' | 'CONVERSIONS' | 'VALUE' | 'LANDING_PAGE_VIEWS' | 'LEAD' | 'QUALITY_LEAD' | 'REPLIES';
  targeting: Record<string, unknown>;
  status?: 'ACTIVE' | 'PAUSED';
  start_time?: string;
  end_time?: string;
  promoted_object?: { page_id?: string; pixel_id?: string };
}

export interface AdCreateParams {
  name: string;
  adset_id: string;
  creative: {
    title?: string;
    body?: string;
    image_hash?: string;
    image_url?: string;
    link_url?: string;
    call_to_action_type?: string;
    object_story_spec?: Record<string, unknown>;
    template_url?: string;
    template_url_spec?: Record<string, unknown>;
    url_tags?: string;
  };
  status?: 'ACTIVE' | 'PAUSED';
}

// ─── Helpers ─────────────────────────────────────────

function getConfig() {
  const accountId = process.env.META_ADS_ACCOUNT_ID || '';
  const token = process.env.META_ADS_ACCESS_TOKEN || '';
  if (!accountId || !token) {
    throw new Error('META_ADS_ACCOUNT_ID and META_ADS_ACCESS_TOKEN required in env');
  }
  const adAccount = accountId.startsWith('act_') ? accountId : `act_${accountId}`;
  return { accountId: adAccount, token };
}

async function apiFetch<T>(
  path: string,
  options: { method?: string; params?: Record<string, unknown>; body?: Record<string, unknown> } = {},
): Promise<T> {
  const { accountId, token } = getConfig();
  const method = options.method || 'GET';
  const params = new URLSearchParams({ access_token: token });

  // Spread body into params for POST (Meta uses form-encoded POST)
  if (options.body) {
    for (const [k, v] of Object.entries(options.body)) {
      if (v !== undefined && v !== null) {
        params.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
      }
    }
  }

  // Additional query params
  if (options.params) {
    for (const [k, v] of Object.entries(options.params)) {
      if (v !== undefined && v !== null) {
        params.set(k, String(v));
      }
    }
  }

  const url = `${BASE}/${accountId}/${path}?${params}`;

  const res = await fetch(url, { method });
  const data = await res.json();

  if (!res.ok) {
    const msg = data?.error?.message || JSON.stringify(data);
    throw new Error(`Meta API error (${res.status}): ${msg}`);
  }

  return data as T;
}

// ─── Campaigns ───────────────────────────────────────

export async function listCampaigns(fields?: string[]): Promise<Campaign[]> {
  const defaultFields = ['id', 'name', 'objective', 'status', 'buying_type', 'daily_budget', 'lifetime_budget',
    'created_time', 'start_time', 'stop_time', 'special_ad_categories', 'bid_strategy',
    'configured_status', 'effective_status'];
  const f = fields || defaultFields;
  const data = await apiFetch<{ data: Campaign[] }>('campaigns', {
    params: { fields: f.join(','), limit: 100 },
  });
  return data.data;
}

export async function getCampaign(campaignId: string, fields?: string[]): Promise<Campaign> {
  const defaultFields = ['id', 'name', 'objective', 'status', 'buying_type', 'daily_budget', 'lifetime_budget',
    'created_time', 'start_time', 'stop_time', 'special_ad_categories'];
  const f = fields || defaultFields;
  return await apiFetch<Campaign>(campaignId, {
    params: { fields: f.join(',') },
  });
}

export async function createCampaign(params: CampaignCreateParams): Promise<{ id: string }> {
  return await apiFetch<{ id: string }>('campaigns', {
    method: 'POST',
    body: {
      name: params.name,
      objective: params.objective,
      status: params.status || 'PAUSED',
      special_ad_categories: params.special_ad_categories || [],
      bid_strategy: params.bid_strategy || 'LOWEST_COST_WITHOUT_CAP',
      daily_budget: params.daily_budget,
      lifetime_budget: params.lifetime_budget,
      start_time: params.start_time,
    },
  });
}

export async function updateCampaign(campaignId: string, updates: Partial<CampaignCreateParams>): Promise<{ success: boolean }> {
  return await apiFetch<{ success: boolean }>(campaignId, {
    method: 'POST',
    body: updates as Record<string, unknown>,
  });
}

export async function deleteCampaign(campaignId: string): Promise<{ success: boolean }> {
  return await apiFetch<{ success: boolean }>(campaignId, { method: 'DELETE' });
}

// ─── Ad Sets ─────────────────────────────────────────

export async function listAdSets(campaignId?: string, fields?: string[]): Promise<AdSet[]> {
  const defaultFields = ['id', 'name', 'campaign_id', 'status', 'daily_budget', 'lifetime_budget',
    'bid_amount', 'billing_event', 'optimization_goal', 'targeting', 'start_time', 'end_time',
    'created_time', 'configured_status', 'effective_status', 'promoted_object'];
  const f = fields || defaultFields;
  const path = campaignId ? `${campaignId}/adsets` : 'adsets';
  const data = await apiFetch<{ data: AdSet[] }>(path, {
    params: { fields: f.join(','), limit: 100 },
  });
  return data.data;
}

export async function getAdSet(adSetId: string): Promise<AdSet> {
  return await apiFetch<AdSet>(adSetId, {
    params: { fields: ['id', 'name', 'campaign_id', 'status', 'daily_budget', 'lifetime_budget',
      'bid_amount', 'billing_event', 'optimization_goal', 'targeting', 'start_time', 'end_time',
      'created_time', 'configured_status', 'effective_status', 'promoted_object'].join(',') },
  });
}

export async function createAdSet(params: AdSetCreateParams): Promise<{ id: string }> {
  return await apiFetch<{ id: string }>('adsets', {
    method: 'POST',
    body: {
      name: params.name,
      campaign_id: params.campaign_id,
      status: params.status || 'PAUSED',
      daily_budget: params.daily_budget,
      lifetime_budget: params.lifetime_budget,
      bid_amount: params.bid_amount,
      billing_event: params.billing_event || 'LINK_CLICKS',
      optimization_goal: params.optimization_goal,
      targeting: params.targeting,
      start_time: params.start_time,
      end_time: params.end_time,
      promoted_object: params.promoted_object,
    },
  });
}

export async function updateAdSet(adSetId: string, updates: Partial<AdSetCreateParams>): Promise<{ success: boolean }> {
  return await apiFetch<{ success: boolean }>(adSetId, {
    method: 'POST',
    body: updates as Record<string, unknown>,
  });
}

export async function deleteAdSet(adSetId: string): Promise<{ success: boolean }> {
  return await apiFetch<{ success: boolean }>(adSetId, { method: 'DELETE' });
}

// ─── Ads ─────────────────────────────────────────────

export async function listAds(adSetId?: string, fields?: string[]): Promise<Ad[]> {
  const defaultFields = ['id', 'name', 'adset_id', 'status', 'creative{id,title,body,image_url,call_to_action_type,link_url}',
    'created_time', 'configured_status', 'effective_status'];
  const f = fields || defaultFields;
  const path = adSetId ? `${adSetId}/ads` : 'ads';
  const data = await apiFetch<{ data: Ad[] }>(path, {
    params: { fields: f.join(','), limit: 100 },
  });
  return data.data;
}

export async function getAd(adId: string): Promise<Ad> {
  return await apiFetch<Ad>(adId, {
    params: { fields: ['id', 'name', 'adset_id', 'status',
      'creative{id,title,body,image_url,call_to_action_type,link_url}',
      'created_time', 'configured_status', 'effective_status'].join(',') },
  });
}

export async function createAd(params: AdCreateParams): Promise<{ id: string }> {
  const body: Record<string, unknown> = {
    name: params.name,
    adset_id: params.adset_id,
    status: params.status || 'PAUSED',
  };

  // Build creative spec depending on what's provided
  if (params.creative.object_story_spec) {
    body.creative = JSON.stringify({ object_story_spec: params.creative.object_story_spec });
  } else if (params.creative.image_hash || params.creative.image_url) {
    body.creative = JSON.stringify({
      title: params.creative.title,
      body: params.creative.body,
      image_hash: params.creative.image_hash,
      image_url: params.creative.image_url,
      object_story_spec: params.creative.link_url ? {
        link_data: {
          link: params.creative.link_url,
          call_to_action: { type: params.creative.call_to_action_type || 'LEARN_MORE' },
          image_hash: params.creative.image_hash,
        },
        page_id: '', // requires FB page
      } : undefined,
      call_to_action_type: params.creative.call_to_action_type,
      link_url: params.creative.link_url,
      url_tags: params.creative.url_tags,
      template_url: params.creative.template_url,
      template_url_spec: params.creative.template_url_spec,
    });
  } else {
    body.creative = JSON.stringify({
      title: params.creative.title,
      body: params.creative.body,
      call_to_action_type: params.creative.call_to_action_type,
      link_url: params.creative.link_url,
      url_tags: params.creative.url_tags,
    });
  }

  return await apiFetch<{ id: string }>('ads', { method: 'POST', body });
}

export async function updateAd(adId: string, updates: Partial<AdCreateParams>): Promise<{ success: boolean }> {
  const body = { ...updates } as Record<string, unknown>;
  if (updates.creative) {
    body.creative = JSON.stringify(updates.creative);
  }
  return await apiFetch<{ success: boolean }>(adId, { method: 'POST', body });
}

export async function deleteAd(adId: string): Promise<{ success: boolean }> {
  return await apiFetch<{ success: boolean }>(adId, { method: 'DELETE' });
}

// ─── Insights ────────────────────────────────────────

export interface InsightsParams {
  level?: 'account' | 'campaign' | 'adset' | 'ad';
  date_preset?: 'today' | 'yesterday' | 'last_3d' | 'last_7d' | 'last_14d' | 'last_30d'
    | 'this_month' | 'last_month' | 'maximum' | 'last_quarter' | 'last_year';
  time_range?: { since: string; until: string };
  campaign_ids?: string[];
  adset_ids?: string[];
  ad_ids?: string[];
}

export async function getInsights(params?: InsightsParams): Promise<Insights[]> {
  const defaultFields = ['reach', 'impressions', 'frequency', 'cpm', 'cpp', 'ctr', 'cpc',
    'spend', 'clicks', 'actions', 'cost_per_action_type', 'action_values',
    'date_start', 'date_stop'];

  const body: Record<string, unknown> = {
    fields: defaultFields.join(','),
    level: params?.level || 'campaign',
    date_preset: params?.date_preset || 'last_30d',
    limit: 100,
  };

  if (params?.time_range) {
    body.time_range = params.time_range;
    delete body.date_preset;
  }

  if (params?.campaign_ids) body.filtering = JSON.stringify(params.campaign_ids.map(id => ({
    field: 'campaign.id', operator: 'IN', value: [id],
  })));

  const data = await apiFetch<{ data: Record<string, unknown>[] }>('insights', {
    method: 'GET',
    params: body,
  });

  return data.data.map(r => parseInsightRow(r));
}

function parseInsightRow(row: Record<string, unknown>): Insights {
  const actions = (row.actions as Array<{ action_type: string; value: string }> | undefined) || [];
  const costPerActions = (row.cost_per_action_type as Array<{ action_type: string; value: string }> | undefined) || [];

  const totalConversions = actions
    .filter(a => ['lead', 'leadgen_grouped', 'purchase', 'add_to_cart', 'onsite_conversion']
      .includes(a.action_type))
    .reduce((sum, a) => sum + Number(a.value), 0);

  const costPerConversion = costPerActions
    .filter(a => ['lead', 'leadgen_grouped', 'purchase'].includes(a.action_type))
    .reduce((sum, a) => sum + Number(a.value), 0);

  const spend = Number(row.spend) || 0;
  const purchaseValue = Number(row.action_values?.[0]?.value) || 0;

  return {
    reach: Number(row.reach) || 0,
    impressions: Number(row.impressions) || 0,
    frequency: Number(row.frequency) || 0,
    cpm: Number(row.cpm) || 0,
    cpp: Number(row.cpp) || 0,
    ctr: Number(row.ctr) || 0,
    cpc: Number(row.cpc) || 0,
    spend,
    clicks: Number(row.clicks) || 0,
    conversions: totalConversions,
    cost_per_conversion: costPerConversion || (totalConversions > 0 ? spend / totalConversions : 0),
    roas: purchaseValue > 0 && spend > 0 ? purchaseValue / spend : null,
    date_start: String(row.date_start || ''),
    date_stop: String(row.date_stop || ''),
  };
}

// ─── Account Info ────────────────────────────────────

export async function getAccountInfo(): Promise<{
  id: string;
  name: string;
  account_status: number;
  currency: string;
  balance: number;
  amount_spent: number;
  min_campaign_group_spend_cap: string;
}> {
  return await apiFetch('', {
    params: { fields: ['id', 'name', 'account_status', 'currency', 'balance', 'amount_spent',
      'min_campaign_group_spend_cap'].join(',') },
  });
}

export async function validateToken(): Promise<{
  is_valid: boolean;
  scopes: string[];
  user_id: string;
  app_id: string;
  expires_at: number;
}> {
  const token = process.env.META_ADS_ACCESS_TOKEN || '';
  const res = await fetch(`${BASE}/debug_token?input_token=${token}&access_token=${token}`);
  const data = await res.json();
  return {
    is_valid: data?.data?.is_valid || false,
    scopes: data?.data?.scopes || [],
    user_id: data?.data?.user_id || '',
    app_id: data?.data?.app_id || '',
    expires_at: data?.data?.expires_at || 0,
  };
}
