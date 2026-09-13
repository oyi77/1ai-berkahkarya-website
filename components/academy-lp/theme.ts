export const COLORS = {
  primary: '#1B1B3A',
  'primary-light': '#3B3B6A',
  accent: '#F5A623',
  'accent-hover': '#E09500',
  'accent-light': '#FFF8E1',
  surface: '#FFFFFF',
  'bg-alt': '#F7F7FC',
  'bg-warm': '#FFFAF0',
  'text-primary': '#1B1B3A',
  'text-secondary': '#555577',
  'text-muted': '#8888AA',
  border: '#E8E8F0',
  'border-light': '#F0F0F5',
  shadow: 'rgba(27,27,58,0.08)',
  'shadow-lg': 'rgba(27,27,58,0.12)',
  success: '#10B981',
  'card-radius': '20px',
  'btn-radius': '50px',
  'section-spacing': '100px',
} as const;

export const sectionBase: React.CSSProperties = {
  padding: '100px 0',
};

export const innerBase: React.CSSProperties = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 24px',
};

export const headingStyle: React.CSSProperties = {
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
  fontWeight: '800',
  color: COLORS['text-primary'],
  lineHeight: 1.2,
};
