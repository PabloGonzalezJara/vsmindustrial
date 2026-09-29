export type Product = {
  slug: string;
  name: string;
  category: string;
  group?: string;
  description: string;
  features: string[];
  accent: 'blue' | 'teal' | 'navy';
  image?: string;
  imageAlt?: string;
};
