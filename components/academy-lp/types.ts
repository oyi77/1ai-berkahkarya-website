export type Locale = 'id' | 'en';

export interface Course {
  id: string;
  emoji: string;
  title: string;
  tagline: string;
  description: string;
  topics: string[];
  audience: string[];
  outcomes: string[];
  price: string;
  waText: string;
  color: string;
  colorBg: string;
  iconBg: string;
  duration: string;
  badge: string;
}

export interface ValueProp {
  icon: string;
  title: string;
  desc: string;
  color: string;
  colorBg: string;
}
