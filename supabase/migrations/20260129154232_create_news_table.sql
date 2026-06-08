/*
  # Create News/Actualités Table

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title` (text) - Title of the news article
      - `content` (text) - Main content/description
      - `image_url` (text, optional) - URL of the news image
      - `video_url` (text, optional) - URL of the news video
      - `published` (boolean) - Whether the news is published
      - `publish_date` (timestamp) - Publication date
      - `created_at` (timestamp) - Record creation date
      - `updated_at` (timestamp) - Last update date
  
  2. Security
    - Enable RLS on `news` table
    - Add policy for public to read published news
    - Add policy for authenticated admins to manage all news
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  image_url text,
  video_url text,
  published boolean DEFAULT false,
  publish_date timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view published news"
  ON news FOR SELECT
  USING (published = true);

CREATE POLICY "Authenticated users can view all news"
  ON news FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert news"
  ON news FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update news"
  ON news FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete news"
  ON news FOR DELETE
  TO authenticated
  USING (true);