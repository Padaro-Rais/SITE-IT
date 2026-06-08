/*
  # ITLA Academy Database Schema

  1. New Tables
    - `course_registrations`
      - `id` (uuid, primary key)
      - `first_name` (text) - Student's first name
      - `last_name` (text) - Student's last name
      - `phone` (text) - Contact phone number
      - `email` (text) - Email address
      - `center` (text) - Selected center location
      - `level` (text) - Course level (A1, A2, B1, B2)
      - `mode` (text) - Learning mode (Présentiel or En ligne)
      - `created_at` (timestamptz) - Registration date
      - `status` (text) - Registration status (pending, confirmed, cancelled)
    
    - `ecl_registrations`
      - `id` (uuid, primary key)
      - `first_name` (text) - Student's first name
      - `last_name` (text) - Student's last name
      - `phone` (text) - Contact phone number
      - `email` (text) - Email address
      - `ecl_level` (text) - ECL exam level
      - `exam_center` (text) - Exam center location
      - `created_at` (timestamptz) - Registration date
      - `status` (text) - Registration status (pending, confirmed, cancelled)
    
    - `contact_messages`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `phone` (text) - Contact phone
      - `subject` (text) - Message subject
      - `message` (text) - Message content
      - `created_at` (timestamptz) - Message date
      - `is_read` (boolean) - Read status

  2. Security
    - Enable RLS on all tables
    - Add policies for public access to insert (registrations and contact)
    - Add policies for authenticated users to read all data (admin access)
*/

-- Create course_registrations table
CREATE TABLE IF NOT EXISTS course_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  center text NOT NULL,
  level text NOT NULL CHECK (level IN ('A1', 'A2', 'B1', 'B2')),
  mode text NOT NULL CHECK (mode IN ('Présentiel', 'En ligne')),
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create ecl_registrations table
CREATE TABLE IF NOT EXISTS ecl_registrations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  ecl_level text NOT NULL,
  exam_center text NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'cancelled')),
  created_at timestamptz DEFAULT now()
);

-- Create contact_messages table
CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE course_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE ecl_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policies for course_registrations
CREATE POLICY "Anyone can insert course registrations"
  ON course_registrations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all course registrations"
  ON course_registrations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update course registrations"
  ON course_registrations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete course registrations"
  ON course_registrations FOR DELETE
  TO authenticated
  USING (true);

-- Policies for ecl_registrations
CREATE POLICY "Anyone can insert ECL registrations"
  ON ecl_registrations FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all ECL registrations"
  ON ecl_registrations FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update ECL registrations"
  ON ecl_registrations FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete ECL registrations"
  ON ecl_registrations FOR DELETE
  TO authenticated
  USING (true);

-- Policies for contact_messages
CREATE POLICY "Anyone can insert contact messages"
  ON contact_messages FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can view all contact messages"
  ON contact_messages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can update contact messages"
  ON contact_messages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete contact messages"
  ON contact_messages FOR DELETE
  TO authenticated
  USING (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_course_registrations_created_at ON course_registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_course_registrations_status ON course_registrations(status);
CREATE INDEX IF NOT EXISTS idx_ecl_registrations_created_at ON ecl_registrations(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_ecl_registrations_status ON ecl_registrations(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contact_messages_is_read ON contact_messages(is_read);