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
}
