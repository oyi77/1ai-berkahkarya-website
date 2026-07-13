import { GetStaticPaths, GetStaticProps } from 'next';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts';
import Layout from '@/components/Layout';
import { transparencyData } from '@/data/transparencyData';

type Locale = 'id' | 'en';

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [{ params: { locale: 'id' } }, { params: { locale: 'en' } }],
  fallback: false,
});

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: { locale: (params?.locale as Locale) || 'id' },
});

interface RevenueChartDataPoint {
  month: string;
  mrr: number;
}

function RevenueChart({ data, locale }: { data: readonly RevenueChartDataPoint[]; locale: Locale }) {
  const isId = locale === 'id';
  return (
    <div style={{ width: '100%', height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--teal-primary)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--teal-primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="var(--text-white-40)"
            fontSize={12}
            fontFamily="var(--font-body)"
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tick={{ fill: 'var(--text-white-50)' }}
          />
          <YAxis
            stroke="var(--text-white-40)"
            fontSize={12}
            fontFamily="var(--font-body)"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'var(--text-white-50)' }}
            tickFormatter={(value) => isId ? `Rp ${(value/1000).toFixed(1)}M` : `$${(value/1000).toFixed(1)}K`}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--dark-card)',
              border: '1px solid var(--dark-border)',
              borderRadius: '8px',
              boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            }}
            labelStyle={{ color: 'var(--text-white)', fontFamily: 'var(--font-body)' }}
            itemStyle={{ color: 'var(--teal-primary)', fontWeight: 700 }}
            formatter={(value: number) => [isId ? `Rp ${(value/1000).toFixed(1)}M` : `$${(value/1000).toFixed(1)}K`, 'MRR']}
          />
          <Area
            type="monotone"
            dataKey="mrr"
            stroke="var(--teal-primary)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#revenueGradient)"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 2, stroke: 'var(--teal-primary)', fill: 'var(--dark-hero)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function MetricCard({ label, value, description, color }: { label: string; value: string; description?: string; color?: string }) {
  return (
    <div className="metric-card" style={{ borderLeft: color ? `4px solid ${color}` : 'none' }}>
      <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-white-40)', marginBottom: '0.5rem' }}>
        {label}
      </p>
      <p style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-white)', lineHeight: 1.2, marginBottom: '0.25rem' }}>
        {value}
      </p>
      {description && (
        <p style={{ fontSize: '0.8rem', color: 'var(--text-white-50)', fontStyle: 'italic' }}>
          {description}
        </p>
      )}
    </div>
  );
}

function RevenueStreamCard({ stream }: { stream: typeof transparencyData.id.metrics.revenueStreams[0] }) {
  return (
    <div className="stream-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
        <div>
          <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.25rem' }}>
            {stream.name}
          </h4>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-white-50)' }}>{stream.description}</p>
        </div>
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            padding: '0.25rem 0.5rem',
            borderRadius: '9999px',
            background: `${stream.color}20`,
            color: stream.color,
            textTransform: 'uppercase',
          }}
        >
          {stream.status === 'active' ? 'Live' : 'Planned'}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)' }}>{stream.monthlyRevenue}</p>
        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--success)' }}>+{stream.growth} MoM</span>
      </div>
    </div>
  );
}

function TimelineEvent({ event, index, total, locale }: { event: typeof transparencyData.id.timeline.events[0]; index: number; total: number; locale: Locale }) {
  const isLast = index === total - 1;
  const typeColors: Record<string, string> = {
    milestone: 'var(--teal-primary)',
    launch: 'var(--violet)',
    planned: 'var(--gold)',
  };
  const color = typeColors[event.type] || 'var(--text-white-40)';

  return (
    <div className="timeline-item" style={{ position: 'relative', paddingLeft: '2rem', paddingBottom: isLast ? 0 : '2.5rem' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: color,
          border: '3px solid var(--dark-hero)',
          boxShadow: `0 0 0 2px ${color}`,
          zIndex: 2,
        }}
      />
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            left: '5px',
            top: '12px',
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, var(--dark-border), transparent)',
          }}
        />
      )}
      <div style={{ marginBottom: '0.5rem' }}>
        <span
          style={{
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: color,
            marginRight: '1rem',
          }}
        >
          {event.date}
        </span>
        <span
          style={{
            fontSize: '0.65rem',
            fontWeight: 700,
            padding: '0.15rem 0.5rem',
            borderRadius: '9999px',
            background: `${color}20`,
            color: color,
            textTransform: 'uppercase',
          }}
        >
          {event.type === 'milestone' ? 'Milestone' : event.type === 'launch' ? 'Launch' : 'Planned'}
        </span>
      </div>
      <h4 style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.25rem' }}>
        {event.title}
      </h4>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-white-60)', lineHeight: 1.5 }}>
        {event.description}
      </p>
    </div>
  );
}

function FounderProofItem({ item }: { item: typeof transparencyData.id.founder.proof[0] }) {
  return (
    <div className="proof-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '0.25rem' }}>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-white-50)', fontWeight: 500 }}>{item.label}</span>
        <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--teal-primary)' }}>{item.value}</span>
      </div>
      <p style={{ fontSize: '0.8rem', color: 'var(--text-white-40)', margin: 0 }}>{item.detail}</p>
    </div>
  );
}

function FAQItem({ item, index }: { item: typeof transparencyData.id.faq.items[0]; index: number }) {
  return (
    <details className="faq-item" style={{ borderBottom: '1px solid var(--dark-border)' }}>
      <summary style={{ cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.25rem 0', fontSize: '1rem', fontWeight: 600, color: 'var(--text-white)' }}>
        {item.q}
        <span style={{ fontSize: '1.5rem', color: 'var(--text-white-40)', transition: 'transform 0.2s' }}>+</span>
      </summary>
      <div style={{ paddingBottom: '1.5rem', color: 'var(--text-white-60)', lineHeight: 1.7 }}>
        {item.a}
      </div>
    </details>
  );
}

export default function TransparencyPage({ locale }: { locale: Locale }) {
  const d = transparencyData[locale];
  const isId = locale === 'id';

  return (
    <Layout title={d.meta.title} description={d.meta.description}>
      {/* Hero */}
      <section className="dark-bg" style={{ padding: '8rem 2rem 6rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal-primary)', marginBottom: '1rem' }}>
            🔓 {isId ? 'Transparansi Radikal' : 'Radical Transparency'}
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-white)', marginBottom: '1.5rem' }}>
            {d.hero.title}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-white-60)', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
            {d.hero.description}
          </p>
        </div>
      </section>

      {/* Key Metrics Totals */}
      <section className="dark-bg" style={{ padding: '4rem 2rem', borderTop: '1px solid var(--dark-border)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
            <MetricCard label={isId ? 'MRR' : 'MRR'} value={d.metrics.totals.mrr} />
            <MetricCard label={isId ? 'ARR' : 'ARR'} value={d.metrics.totals.arr} />
            <MetricCard label={isId ? 'YoY Growth' : 'YoY Growth'} value={d.metrics.totals.yoyGrowth} />
            <MetricCard label={isId ? 'Profit Margin' : 'Profit Margin'} value={d.metrics.totals.profitMargin} />
            <MetricCard label={isId ? 'Runway' : 'Runway'} value={d.metrics.totals.runway} description={isId ? 'Profitable, no burn' : 'Profitable, no burn'} />
          </div>
        </div>
      </section>

      {/* Operational Metrics */}
      <section style={{ padding: '6rem 2rem', background: 'var(--dark-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '0.75rem' }}>
            ⚙️ {isId ? 'Metrik Operasional' : 'Operational Metrics'}
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '3rem' }}>
            {isId ? 'Sistem yang Tak Pernah Tidur' : 'Systems That Never Sleep'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '1.5rem' }}>
            <MetricCard label={isId ? 'Uptime' : 'Uptime'} value={d.metrics.operational.uptime} />
            <MetricCard label={isId ? 'Layanan Live' : 'Services Live'} value={d.metrics.operational.servicesLive.toString()} />
            <MetricCard label={isId ? 'Agent Otonom' : 'Autonomous Agents'} value={d.metrics.operational.autonomousAgents.toString()} />
            <MetricCard label={isId ? 'API Calls/Hari' : 'API Calls/Day'} value={d.metrics.operational.apiCallsDaily} />
            <MetricCard label={isId ? 'Avg Response' : 'Avg Response'} value={d.metrics.operational.avgResponseTime} />
            <MetricCard label={isId ? 'Error Rate' : 'Error Rate'} value={d.metrics.operational.errorRate} />
          </div>
        </div>
      </section>

      {/* Revenue Chart */}
      <section className="dark-bg" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', textAlign: 'center' }}>
            📈 {isId ? 'Tren Revenue' : 'Revenue Trend'}
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.5rem', textAlign: 'center' }}>
            {d.revenueChart.title}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-white-60)', marginBottom: '3rem', textAlign: 'center' }}>
            {d.revenueChart.subtitle}
          </p>
          <div style={{ background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '16px', padding: '2rem' }}>
            <RevenueChart data={d.revenueChart.data} locale={locale} />
          </div>
        </div>
      </section>

      {/* Revenue Streams Breakdown */}
      <section style={{ padding: '6rem 2rem', background: 'var(--dark-secondary)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal-primary)', marginBottom: '0.75rem' }}>
            💰 {isId ? 'Breakdown Revenue Stream' : 'Revenue Stream Breakdown'}
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.5rem' }}>
            {d.metrics.title}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-white-60)', marginBottom: '3rem', maxWidth: '600px' }}>
            {d.metrics.subtitle}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {d.metrics.revenueStreams.map((stream, i) => (
              <RevenueStreamCard key={i} stream={stream} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="dark-bg" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--violet)', marginBottom: '0.75rem' }}>
                👤 {isId ? 'Founder' : 'Founder'}
              </p>
              <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.5rem' }}>
                {d.founder.title}
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-white-50)', marginBottom: '2rem' }}>
                {d.founder.subtitle}
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-white-70)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {d.founder.bio}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                {d.founder.philosophy.map((p, i) => (
                  <span key={i} style={{ fontSize: '0.8rem', padding: '0.5rem 1rem', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '9999px', color: 'var(--text-white-60)' }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '2rem' }}>
                {isId ? 'Proof of Work' : 'Proof of Work'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                {d.founder.proof.map((item, i) => (
                  <FounderProofItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '6rem 2rem', background: 'var(--dark-secondary)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal-primary)', marginBottom: '0.75rem', textAlign: 'center' }}>
            📅 {isId ? 'Timeline Transparansi' : 'Transparency Timeline'}
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.5rem', textAlign: 'center' }}>
            {d.timeline.title}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-white-60)', marginBottom: '3rem', textAlign: 'center' }}>
            {d.timeline.subtitle}
          </p>
          <div style={{ position: 'relative', paddingLeft: '1rem' }}>
            <div
              style={{
                position: 'absolute',
                left: '5px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, var(--teal-primary), var(--violet), var(--gold))',
              }}
            />
            {d.timeline.events.map((event, i) => (
              <TimelineEvent key={i} event={event} index={i} total={d.timeline.events.length} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="dark-bg" style={{ padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', textAlign: 'center' }}>
            🤝 {isId ? 'The Ask' : 'The Ask'}
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '0.5rem', textAlign: 'center' }}>
            {d.ask.title}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--text-white-60)', marginBottom: '1.5rem', textAlign: 'center', maxWidth: '700px', margin: '0 auto 3rem' }}>
            {d.ask.subtitle}
          </p>

          <div style={{ marginBottom: '3rem', padding: '2rem', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '16px' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-white-70)', lineHeight: 1.7, marginBottom: '2rem' }}>
              {d.ask.context}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-white-40)', marginBottom: '0.5rem' }}>
                  {isId ? 'Stage' : 'Stage'}
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)' }}>{d.ask.stage}</p>
              </div>
              <div>
                <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-white-40)', marginBottom: '0.5rem' }}>
                  {isId ? 'Target Raise' : 'Target Raise'}
                </p>
                <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)' }}>{d.ask.targetRaise}</p>
              </div>
            </div>
          </div>

          {/* Use of Funds */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '2rem', textAlign: 'center' }}>
              {isId ? 'Use of Funds' : 'Use of Funds'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {d.ask.useOfFunds.map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '1.5rem', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '12px' }}>
                  <p style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--teal-primary)', marginBottom: '0.5rem' }}>
                    {item.percentage}%
                  </p>
                  <p style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '0.5rem' }}>
                    {item.category}
                  </p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-white-50)' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-white)', marginBottom: '1.5rem', textAlign: 'center' }}>
              {isId ? 'Term Sheet Ringkas' : 'Key Terms'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {d.ask.terms.map((term, i) => (
                <div key={i} style={{ padding: '1rem 1.5rem', background: 'var(--dark-card)', border: '1px solid var(--dark-border)', borderRadius: '8px', fontSize: '0.9rem', color: 'var(--text-white-70)', lineHeight: 1.5 }}>
                  {term}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <a
              href={d.ask.cta.primary.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: 800,
                padding: '1rem 2.5rem',
                background: 'linear-gradient(135deg, var(--teal-primary), var(--teal-hover))',
                color: 'var(--dark-hero)',
                borderRadius: '8px',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0,217,255,0.3)',
              }}
            >
              {d.ask.cta.primary.text}
            </a>
            <a
              href={d.ask.cta.secondary.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                fontWeight: 800,
                padding: '1rem 2.5rem',
                background: 'transparent',
                color: 'var(--teal-primary)',
                border: '2px solid var(--teal-primary)',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'background 0.2s, color 0.2s',
              }}
            >
              {d.ask.cta.secondary.text}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '6rem 2rem', background: 'var(--dark-secondary)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--teal-primary)', marginBottom: '0.75rem', textAlign: 'center' }}>
            ❓ {d.faq.title}
          </p>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '3rem', textAlign: 'center' }}>
            {isId ? 'Pertanyaan Umum Investor & Partner' : 'Investor & Partner FAQ'}
          </h2>
          <div>
            {d.faq.items.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="dark-bg" style={{ padding: '6rem 2rem', textAlign: 'center', borderTop: '1px solid var(--dark-border)' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 800, color: 'var(--text-white)', marginBottom: '1rem' }}>
          {isId ? 'Siap Membangun Bersama?' : 'Ready to Build Together?'}
        </h2>
        <p style={{ fontSize: '1.125rem', color: 'var(--text-white-60)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          {isId
            ? 'Kami mencari partner yang paham: Revenue > Funding. Autonomy by design. Code > Pitch. Kalau cocok, mari bicara.'
            : "We're looking for partners who get it: Revenue > Funding. Autonomy by design. Code > Pitch. If that resonates, let's talk."}
        </p>
        <a
          href="/contact?type=partner"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontSize: '1.1rem',
            fontWeight: 800,
            padding: '1.25rem 3rem',
            background: 'linear-gradient(135deg, var(--violet), var(--violet-light))',
            color: 'var(--text-white)',
            borderRadius: '8px',
            textDecoration: 'none',
            boxShadow: '0 4px 24px rgba(124,58,237,0.3)',
          }}
        >
          {isId ? 'Mulai Percakapan →' : 'Start Conversation →'}
        </a>
      </section>
    </Layout>
  );
}