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

export type GalleryCategory = '全部' | '客厅沙发' | '餐厅饭桌' | '书房' | '卧室';

export interface GalleryItem {
  id: string;
  category: GalleryCategory;
  name: string;
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
  imageCaption?: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
}
