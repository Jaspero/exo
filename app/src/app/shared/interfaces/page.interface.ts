export interface Page {
  showcaseTitle: string;
  showcaseBackground: string;
  meta?: {
    title?: string;
    description?: string;
    keywords?: string;
  },
  blocks?: any[];
}
