export interface News {
  id?: string;
  title: string;
  content: string;
  image_url?: string;
  video_url?: string;
  published: boolean;
  publish_date: string;
  created_at?: string;
  updated_at?: string;
}
