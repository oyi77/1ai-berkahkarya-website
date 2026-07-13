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
              <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3} />
              <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
          <XAxis
            dataKey="month"
            stroke="var(--text-inverse-subtle)"
            fontSize={12}
            fontFamily="var(--font-ui)"
            tickLine={false}
            axisLine={{ stroke: 'rgba(255,255,255,0.1)' }}
            tick={{ fill: 'var(--text-inverse-muted)' }}
          />
          <YAxis
            stroke="var(--text-inverse-subtle)"
            fontSize={12}
            fontFamily="var(--font-ui)"
            tickLine={false}
            axisLine={false}
            tick={{ fill: 'var(--text-inverse-muted)' }}
            tickFormatter={(value) => isId ? `Rp ${(value/1000).toFixed(1)}M` : `$${(value/1000).toFixed(1)}K`}
          />
          <Tooltip
            contentStyle={{
              background: 'var(--surface-2)',
              border: '1px solid var(--border-default)',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
            }}
            labelStyle={{ color: 'var(--text-inverse)', fontFamily: 'var(--font-ui)' }}
            itemStyle={{ color: 'var(--color-primary)', fontWeight: 700 }}
            formatter={(value: number) => [isId ? `Rp ${(value/1000).toFixed(1)}M` : `$${(value/1000).toFixed(1)}K`, 'MRR']}
          />
          <Area
            type="monotone"
            dataKey="mrr"
            stroke="var(--color-primary)"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#revenueGradient)"
            dot={false}
            activeDot={{ r: 6, strokeWidth: 2, stroke: 'var(--color-primary)', fill: 'var(--surface-0)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

function MetricCard({ label, value, description, color }: { label: string; value: string; description?: string; color?: string }) {
  return (
    <div style={{ borderLeft: color ? `4px solid ${color}` : 'none' }} className="metric-card">
      <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-inverse-ghost)', marginBottom: 'var(--space-2)' }}>
        {label}
      </p>
      <p style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', lineHeight: 1.2, marginBottom: 'var(--space-1)' }}>
        {value}
      </p>
      {description && (
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-inverse-subtle)', fontStyle: 'italic' }}>
          {description}
        </p>
      )}
    </div>
  );
}

function RevenueStreamCard({ stream }: { stream: typeof transparencyData.id.metrics.revenueStreams[0] }) {
  return (
    <div className="stream-card">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-4)' }}>
        <div>
          <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-inverse)', marginBottom: 'var(--space-1)' }}>
            {stream.name}
          </h4>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-inverse-muted)' }}>{stream.description}</p>
        </div>
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            padding: 'var(--space-1) var(--space-2)',
            borderRadius: 'var(--radius-full)',
            background: `${stream.color}20`,
            color: stream.color,
            textTransform: 'uppercase',
          }}
        >
          {stream.status === 'active' ? 'Live' : 'Planned'}
        </span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--text-inverse)' }}>{stream.monthlyRevenue}</p>
        <span style={{ fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--color-success)' }}>+{stream.growth} MoM</span>
      </div>
    </div>
  );
}

function TimelineEvent({ event, index, total, locale }: { event: typeof transparencyData.id.timeline.events[0]; index: number; total: number; locale: Locale }) {
  const isLast = index === total - 1;
  const typeColors: Record<string, string> = {
    milestone: 'var(--color-primary)',
    launch: 'var(--color-secondary)',
    planned: 'var(--color-accent)',
  };
  const color = typeColors[event.type] || 'var(--text-inverse-subtle)';
  const isId = locale === 'id';

  return (
    <div className="timeline-item" style={{ position: 'relative', paddingLeft: 'var(--space-8)', paddingBottom: isLast ? 0 : 'var(--space-10)' }}>
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          background: color,
          border: '3px solid var(--surface-0)',
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
            background: 'linear-gradient(180deg, var(--border-default), transparent)',
          }}
        />
      )}
      <div style={{ marginBottom: 'var(--space-2)' }}>
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: color,
            marginRight: 'var(--space-3)',
          }}
        >
          {event.date}
        </span>
        <span
          style={{
            fontSize: '0.6rem',
            fontWeight: 700,
            padding: '2px 8px',
            borderRadius: 'var(--radius-full)',
            background: `${color}20`,
            color: color,
            textTransform: 'uppercase',
          }}
        >
          {event.type === 'milestone' ? 'Milestone' : event.type === 'launch' ? 'Launch' : 'Planned'}
        </span>
      </div>
      <h4 style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-inverse)', marginBottom: 'var(--space-1)' }}>
        {event.title}
      </h4>
      <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-inverse-muted)', lineHeight: 1.5 }}>
        {event.description}
      </p>
    </div>
  );
}

function FounderProofItem({ item }: { item: typeof transparencyData.id.founder.proof[0] }) {
  return (
    <div className="proof-item">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 'var(--space-1)' }}>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--text-inverse-subtle)', fontWeight: 500 }}>{item.label}</span>
        <span style={{ fontSize: 'var(--text-2xl)', fontWeight: 800, color: 'var(--color-primary)' }}>{item.value}</span>
      </div>
      <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-inverse-ghost)', margin: 0 }}>{item.detail}</p>
    </div>
  );
}

function FAQItem({ item, index }: { item: typeof transparencyData.id.faq.items[0]; index: number }) {
  return (
    <details className="faq-item" style={{ borderBottom: '1px solid var(--border-default)' }}>
      <summary style={{ cursor: 'pointer', listStyle: 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--space-5) 0', fontSize: 'var(--text-base)', fontWeight: 600, color: 'var(--text-inverse)' }}>
        {item.q}
        <span style={{ fontSize: 'var(--text-2xl)', color: 'var(--text-inverse-subtle)', transition: 'transform var(--duration-base) var(--ease-out)' }}>+</span>
      </summary>
      <div style={{ paddingBottom: 'var(--space-6)', color: 'var(--text-inverse-muted)', lineHeight: 1.7 }}>
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
      <section className="dark-bg" style={{ padding: 'var(--space-14) var(--space-6) var(--space-16)', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-4)' }}>
            🔓 {isId ? 'Transparansi Radikal' : 'Radical Transparency'}
          </p>
          <h1 style={{ fontSize: 'var(--text-5xl)', fontWeight: 900, lineHeight: 1.1, color: 'var(--text-inverse)', marginBottom: 'var(--space-6)' }}>
            {d.hero.title}
          </h1>
          <p style={{ fontSize: 'var(--text-xl)', color: 'var(--text-inverse-muted)', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto' }}>
            {d.hero.description}
          </p>
        </div>
      </section>

      {/* Key Metrics Totals */}
      <section className="dark-bg" style={{ padding: 'var(--space-10) var(--space-6)', borderTop: '1px solid var(--border-default)' }}>
        <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 'var(--space-6)' }}>
            <MetricCard label={isId ? 'MRR' : 'MRR'} value={d.metrics.totals.mrr} />
            <MetricCard label={isId ? 'ARR' : 'ARR'} value={d.metrics.totals.arr} />
            <MetricCard label={isId ? 'YoY Growth' : 'YoY Growth'} value={d.metrics.totals.yoyGrowth} />
            <MetricCard label={isId ? 'Profit Margin' : 'Profit Margin'} value={d.metrics.totals.profitMargin} />
            <MetricCard label={isId ? 'Runway' : 'Runway'} value={d.metrics.totals.runway} description={isId ? 'Profitable, no burn' : 'Profitable, no burn'} />
          </div>
        </div>
      </section>

      {/* Operational Metrics */}
      <section style={{ padding: 'var(--space-12) var(--space-6)', background: 'var(--surface-1)' }}>
        <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: 'var(--space-3)' }}>
            ⚙️ {isId ? 'Metrik Operasional' : 'Operational Metrics'}
          </p>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-10)' }}>
            {isId ? 'Sistem yang Tak Pernah Tidur' : 'Systems That Never Sleep'}
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 'var(--space-6)' }}>
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
      <section className="dark-bg" style={{ padding: 'var(--space-12) var(--space-6)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', textAlign: 'center' }}>
            📈 {isId ? 'Tren Revenue' : 'Revenue Trend'}
          </p>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-2)', textAlign: 'center' }}>
            {d.revenueChart.title}
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-inverse-muted)', marginBottom: 'var(--space-10)', textAlign: 'center' }}>
            {d.revenueChart.subtitle}
          </p>
          <div style={{ background: 'var(--surface-2)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)' }}>
            <RevenueChart data={d.revenueChart.data} locale={locale} />
          </div>
        </div>
      </section>

      {/* Revenue Streams Breakdown */}
      <section style={{ padding: 'var(--space-12) var(--space-6)', background: 'var(--surface-1)' }}>
        <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)' }}>
            💰 {isId ? 'Breakdown Revenue Stream' : 'Revenue Stream Breakdown'}
          </p>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-2)' }}>
            {d.metrics.title}
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-inverse-muted)', marginBottom: 'var(--space-10)', maxWidth: '600px' }}>
            {d.metrics.subtitle}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {d.metrics.revenueStreams.map((stream, i) => (
              <RevenueStreamCard key={i} stream={stream} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="dark-bg" style={{ padding: 'var(--space-12) var(--space-6)' }}>
        <div style={{ maxWidth: 'var(--container-xl)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'var(--space-14)', alignItems: 'start' }}>
            <div>
              <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-secondary)', marginBottom: 'var(--space-3)' }}>
                👤 {isId ? 'Founder' : 'Founder'}
              </p>
              <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-2)' }}>
                {d.founder.title}
              </h2>
              <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-inverse-subtle)', marginBottom: 'var(--space-6)' }}>
                {d.founder.subtitle}
              </p>
              <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-inverse-muted)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
                {d.founder.bio}
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
                {d.founder.philosophy.map((p, i) => (
                  <span key={i} style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-4)', background: 'var(--surface-2)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-full)', color: 'var(--text-inverse-subtle)' }}>
                    {p}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-inverse)', marginBottom: 'var(--space-6)' }}>
                {isId ? 'Proof of Work' : 'Proof of Work'}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)' }}>
                {d.founder.proof.map((item, i) => (
                  <FounderProofItem key={i} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: 'var(--space-12) var(--space-6)', background: 'var(--surface-1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', textAlign: 'center' }}>
            📅 {isId ? 'Timeline Transparansi' : 'Transparency Timeline'}
          </p>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-2)', textAlign: 'center' }}>
            {d.timeline.title}
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-inverse-muted)', marginBottom: 'var(--space-10)', textAlign: 'center' }}>
            {d.timeline.subtitle}
          </p>
          <div style={{ position: 'relative', paddingLeft: 'var(--space-4)' }}>
            <div
              style={{
                position: 'absolute',
                left: '5px',
                top: 0,
                bottom: 0,
                width: '2px',
                background: 'linear-gradient(180deg, var(--color-primary), var(--color-secondary), var(--color-accent))',
              }}
            />
            {d.timeline.events.map((event, i) => (
              <TimelineEvent key={i} event={event} index={i} total={d.timeline.events.length} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* The Ask */}
      <section className="dark-bg" style={{ padding: 'var(--space-12) var(--space-6)' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent)', marginBottom: 'var(--space-3)', textAlign: 'center' }}>
            🤝 {isId ? 'The Ask' : 'The Ask'}
          </p>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-2)', textAlign: 'center' }}>
            {d.ask.title}
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-inverse-muted)', marginBottom: 'var(--space-6)', textAlign: 'center', maxWidth: '700px', margin: '0 auto var(--space-10)' }}>
            {d.ask.subtitle}
          </p>

          <div style={{ marginBottom: 'var(--space-10)', padding: 'var(--space-8)', background: 'var(--surface-2)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-xl)' }}>
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--text-inverse-muted)', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
              {d.ask.context}
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 'var(--space-6)', marginBottom: 'var(--space-8)' }}>
              <div>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-inverse-ghost)', marginBottom: 'var(--space-2)' }}>
                  {isId ? 'Stage' : 'Stage'}
                </p>
                <p style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-inverse)' }}>{d.ask.stage}</p>
              </div>
              <div>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-inverse-ghost)', marginBottom: 'var(--space-2)' }}>
                  {isId ? 'Target Raise' : 'Target Raise'}
                </p>
                <p style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--text-inverse)' }}>{d.ask.targetRaise}</p>
              </div>
            </div>
          </div>

          {/* Use of Funds */}
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-inverse)', marginBottom: 'var(--space-6)', textAlign: 'center' }}>
              {isId ? 'Use of Funds' : 'Use of Funds'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 'var(--space-6)' }}>
              {d.ask.useOfFunds.map((item, i) => (
                <div key={i} style={{ textAlign: 'center', padding: 'var(--space-6)', background: 'var(--surface-2)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-lg)' }}>
                  <p style={{ fontSize: 'var(--text-4xl)', fontWeight: 900, color: 'var(--color-primary)', marginBottom: 'var(--space-2)' }}>
                    {item.percentage}%
                  </p>
                  <p style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--text-inverse)', marginBottom: 'var(--space-2)' }}>
                    {item.category}
                  </p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-inverse-subtle)' }}>
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Terms */}
          <div style={{ marginBottom: 'var(--space-10)' }}>
            <h3 style={{ fontSize: 'var(--text-2xl)', fontWeight: 700, color: 'var(--text-inverse)', marginBottom: 'var(--space-6)', textAlign: 'center' }}>
              {isId ? 'Term Sheet Ringkas' : 'Key Terms'}
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
              {d.ask.terms.map((term, i) => (
                <div key={i} style={{ padding: 'var(--space-4) var(--space-6)', background: 'var(--surface-2)', border: '1px solid var(--border-default)', borderRadius: 'var(--radius-md)', fontSize: 'var(--text-sm)', color: 'var(--text-inverse-muted)', lineHeight: 1.5 }}>
                  {term}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
            <a
              href={d.ask.cta.primary.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-base)',
                fontWeight: 800,
                padding: 'var(--space-3) var(--space-8)',
                background: 'var(--gradient-primary)',
                color: 'var(--surface-0)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                boxShadow: 'var(--shadow-md), var(--shadow-glow)',
              }}
            >
              {d.ask.cta.primary.text}
            </a>
            <a
              href={d.ask.cta.secondary.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-base)',
                fontWeight: 800,
                padding: 'var(--space-3) var(--space-8)',
                background: 'transparent',
                color: 'var(--color-primary)',
                border: '2px solid var(--color-primary)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
              }}
            >
              {d.ask.cta.secondary.text}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: 'var(--space-12) var(--space-6)', background: 'var(--surface-1)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary)', marginBottom: 'var(--space-3)', textAlign: 'center' }}>
            ❓ {d.faq.title}
          </p>
          <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-10)', textAlign: 'center' }}>
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
      <section className="dark-bg" style={{ padding: 'var(--space-12) var(--space-6)', textAlign: 'center', borderTop: '1px solid var(--border-default)' }}>
        <h2 style={{ fontSize: 'var(--text-3xl)', fontWeight: 800, color: 'var(--text-inverse)', marginBottom: 'var(--space-4)' }}>
          {isId ? 'Siap Membangun Bersama?' : 'Ready to Build Together?'}
        </h2>
        <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-inverse-muted)', marginBottom: 'var(--space-6)', maxWidth: '600px', margin: '0 auto var(--space-6)' }}>
          {isId
            ? 'Kami mencari partner yang paham: Revenue > Funding. Autonomy by design. Code > Pitch. Kalau cocok, mari bicara.'
            : "We're looking for partners who get it: Revenue > Funding. Autonomy by design. Code > Pitch. If that resonates, let's talk."}
        </p>
        <a
          href="/contact?type=partner"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            fontSize: 'var(--text-lg)',
            fontWeight: 800,
            padding: 'var(--space-4) var(--space-10)',
            background: 'var(--gradient-primary-reverse)',
            color: 'var(--text-inverse)',
            borderRadius: 'var(--radius-md)',
            textDecoration: 'none',
            boxShadow: 'var(--shadow-md), var(--shadow-glow-secondary)',
          }}
        >
          {isId ? 'Mulai Percakapan →' : 'Start Conversation →'}
        </a>
      </section>
    </Layout>
  );
}