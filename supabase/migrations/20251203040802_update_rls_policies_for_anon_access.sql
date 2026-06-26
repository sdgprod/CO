/*
  # Update RLS Policies for Anonymous Access

  This migration updates the RLS policies to allow anonymous users (using anon key)
  to interact with the approval workflow tables, since the application doesn't have
  user authentication yet.

  1. Changes
    - Drop existing restrictive policies
    - Create new policies that allow anon role access
    - Maintain security while allowing the application to function

  2. Security Notes
    - These policies allow anon access for development/demo purposes
    - In production, should be replaced with proper user authentication
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view all applications" ON approval_applications;
DROP POLICY IF EXISTS "Users can create applications" ON approval_applications;
DROP POLICY IF EXISTS "Users can update applications" ON approval_applications;

DROP POLICY IF EXISTS "Users can view all approval stages" ON approval_stages;
DROP POLICY IF EXISTS "Users can create approval stages" ON approval_stages;
DROP POLICY IF EXISTS "Users can update approval stages" ON approval_stages;

DROP POLICY IF EXISTS "Users can view committee approvals" ON credit_committee_approvals;
DROP POLICY IF EXISTS "Users can create committee approvals" ON credit_committee_approvals;
DROP POLICY IF EXISTS "Users can update committee approvals" ON credit_committee_approvals;

-- Create new policies for anon access

-- approval_applications policies
CREATE POLICY "Allow anon to view applications"
  ON approval_applications FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow anon to create applications"
  ON approval_applications FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anon to update applications"
  ON approval_applications FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- approval_stages policies
CREATE POLICY "Allow anon to view stages"
  ON approval_stages FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow anon to create stages"
  ON approval_stages FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anon to update stages"
  ON approval_stages FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);

-- credit_committee_approvals policies
CREATE POLICY "Allow anon to view committee approvals"
  ON credit_committee_approvals FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow anon to create committee approvals"
  ON credit_committee_approvals FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow anon to update committee approvals"
  ON credit_committee_approvals FOR UPDATE
  TO anon, authenticated
  USING (true)
  WITH CHECK (true);