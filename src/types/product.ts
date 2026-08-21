export type Product = {
  slug: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  accent: 'blue' | 'teal' | 'navy';
  image?: string;
  imageAlt?: string;
};
