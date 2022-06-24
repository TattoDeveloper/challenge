export interface QueryParams {
  category?: string;
  lang?: string;
  page?: number;
  limit?: number;
  order?: string;
  filters?: Record<string, string>;
}
