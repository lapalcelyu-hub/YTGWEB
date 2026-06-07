export interface Founder {
  id: string;
  name: string;
  role: string;
  bio: string;
  detailBio: string;
  quote: string;
  image: string;
}

export interface ProductParam {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  materialType: 'huanghuali' | 'zitan' | 'suanzhi';
  name: string;
  tagline: string;
  description: string;
  parameters: ProductParam[];
  materialDetail: string;
  highlightSpecs: string[];
  colors: string[];
  image: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  snippet: string;
  date: string;
  content: string;
  image: string;
  readTime: string;
}
