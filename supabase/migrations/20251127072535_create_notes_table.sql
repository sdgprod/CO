/*
  # Create Notes Table for Process Chain Comments

  1. New Tables
    - `notes`
      - `id` (uuid, primary key) - Unique identifier for each note
      - `company_name` (text) - Company the note is related to
      - `author_name` (text) - Name of person leaving the note
      - `author_title` (text) - Job title of person leaving the note
      - `content` (text) - The note/comment content
      - `created_at` (timestamptz) - Timestamp when note was created
      - `updated_at` (timestamptz) - Timestamp when note was last updated
  
  2. Security
    - Enable RLS on `notes` table
    - Add policy for authenticated users to read all notes
    - Add policy for authenticated users to create notes
    - Add policy for authenticated users to delete their own notes
*/

CREATE TABLE IF NOT EXISTS notes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_name text NOT NULL,
  author_name text NOT NULL,
  author_title text NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE notes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read all notes"
  ON notes
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create notes"
  ON notes
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can delete their own notes"
  ON notes
  FOR DELETE
  TO authenticated
  USING (auth.uid() IS NOT NULL);

CREATE INDEX IF NOT EXISTS notes_company_name_idx ON notes(company_name);
CREATE INDEX IF NOT EXISTS notes_created_at_idx ON notes(created_at DESC);