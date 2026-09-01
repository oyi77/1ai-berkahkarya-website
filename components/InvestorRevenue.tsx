'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import styles from './InvestorPage.module.css';

interface RevenueData {
  month: string;
  amount: number;
}

interface Props {
  data: RevenueData[];
  locale: 'id' | 'en';
}

export default function InvestorRevenue({ data, locale }: Props) {
  const label = locale === 'id' ? 'Pertumbuhan Revenue Bulanan' : 'Monthly Revenue Growth';
  const subtitle = locale === 'id' ? 'Dalam USD — 12 bulan terakhir' : 'In USD — Last 12 months';

  return (
    <section className={styles.revenue} aria-labelledby="revenue-title">
      <div className={styles.container}>
        <h2 id="revenue-title" className={styles.sectionHeading}>{label}</h2>
        <p className={styles.sectionSubheading}>{subtitle}</p>
        <div className={styles.chartCard}>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="var(--margin-red)" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="var(--margin-red)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--rule-light)" />
              <XAxis
                dataKey="month"
                stroke="var(--ink-soft)"
                fontSize={12}
                tickLine={false}
              />
              <YAxis
                stroke="var(--ink-soft)"
                fontSize={12}
                tickLine={false}
                tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
              />
              <Tooltip
                formatter={(value: number) => [`$${value.toLocaleString()}`, 'Revenue']}
                contentStyle={{
                  background: 'var(--paper)',
                  border: '1px solid var(--rule-light)',
                  borderRadius: '8px',
                  fontSize: '0.85rem',
                }}
              />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="var(--margin-red)"
                strokeWidth={2}
                fill="url(#colorRevenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
