export const sectionStyle: React.CSSProperties = {
  padding: '5rem 1.5rem',
  background: '#0a0a1a',
};

export const innerStyle: React.CSSProperties = {
  maxWidth: 1100,
  margin: '0 auto',
};

export const overlayStyle: React.CSSProperties = {
  position: 'fixed',
  inset: '0',
  zIndex: 9999,
  background: 'rgba(0,0,0,0.75)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '1rem',
};

export const modalStyle: React.CSSProperties = {
  background: '#1a1a2e',
  borderRadius: '1.25rem',
  padding: '2rem',
  maxWidth: '600px',
  width: '100%',
  maxHeight: '90vh',
  overflowY: 'auto',
  border: '1px solid rgba(99,102,241,0.2)',
};

export const closeBtnStyle: React.CSSProperties = {
  background: 'none',
  border: 'none',
  color: 'rgba(255,255,255,0.6)',
  fontSize: '1.5rem',
  cursor: 'pointer',
  padding: '0.25rem',
};

export const btnPrimary: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5rem',
  padding: '0.85rem 2rem',
  borderRadius: '999px',
  border: 'none',
  background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
};

export const cardStyle: React.CSSProperties = {
  background: 'rgba(255,255,255,0.03)',
  borderRadius: '1rem',
  border: '1px solid rgba(255,255,255,0.06)',
  padding: '1.75rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
};

export const tagStyle: React.CSSProperties = {
  fontSize: '0.7rem',
  background: 'rgba(99,102,241,0.15)',
  color: '#a5b4fc',
  padding: '0.2rem 0.6rem',
  borderRadius: '999px',
  whiteSpace: 'nowrap',
};
