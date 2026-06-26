/*
  # Create Approval Workflow Tables

  1. New Tables
    - `approval_applications`
      - `id` (uuid, primary key)
      - `customer_name` (text)
      - `segment` (text) - B2B, B2C, or BULK
      - `requested_credit_limit` (numeric)
      - `requested_by` (text)
      - `start_date` (date)
      - `refinery` (text)
      - `status` (text) - pending, approved, rejected
      - `current_stage` (text) - recommendation, approver_1, approver_2, credit_committee
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `approval_stages`
      - `id` (uuid, primary key)
      - `application_id` (uuid, foreign key to approval_applications)
      - `stage_name` (text) - recommendation, approver_1, approver_2
      - `stage_order` (integer)
      - `approver_role` (text) - Head of Business Segment, MD SDGI, CFO, Credit Committee, Group MD
      - `approver_name` (text)
      - `status` (text) - pending, approved, rejected
      - `comments` (text)
      - `approved_at` (timestamptz)
      - `created_at` (timestamptz)
    
    - `credit_committee_approvals`
      - `id` (uuid, primary key)
      - `application_id` (uuid, foreign key to approval_applications)
      - `stage_id` (uuid, foreign key to approval_stages)
      - `committee_member_name` (text)
      - `member_position` (text)
      - `status` (text) - pending, approved, rejected
      - `comments` (text)
      - `approved_at` (timestamptz)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users to read and create applications
    - Add policies for approvers to update their stages
*/

CREATE TABLE IF NOT EXISTS approval_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text NOT NULL,
  segment text NOT NULL,
  requested_credit_limit numeric NOT NULL,
  requested_by text NOT NULL,
  start_date date DEFAULT CURRENT_DATE,
  refinery text DEFAULT '',
  status text DEFAULT 'pending',
  current_stage text DEFAULT 'recommendation',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS approval_stages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid REFERENCES approval_applications(id) ON DELETE CASCADE,
  stage_name text NOT NULL,
  stage_order integer NOT NULL,
  approver_role text NOT NULL,
  approver_name text DEFAULT '',
  status text DEFAULT 'pending',
  comments text DEFAULT '',
  approved_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS credit_committee_approvals (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  application_id uuid REFERENCES approval_applications(id) ON DELETE CASCADE,
  stage_id uuid REFERENCES approval_stages(id) ON DELETE CASCADE,
  committee_member_name text NOT NULL,
  member_position text NOT NULL,
  status text DEFAULT 'pending',
  comments text DEFAULT '',
  approved_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE approval_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE approval_stages ENABLE ROW LEVEL SECURITY;
ALTER TABLE credit_committee_approvals ENABLE ROW LEVEL SECURITY;

-- Policies for approval_applications
CREATE POLICY "Users can view all applications"
  ON approval_applications FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create applications"
  ON approval_applications FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update applications"
  ON approval_applications FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for approval_stages
CREATE POLICY "Users can view all approval stages"
  ON approval_stages FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create approval stages"
  ON approval_stages FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update approval stages"
  ON approval_stages FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policies for credit_committee_approvals
CREATE POLICY "Users can view committee approvals"
  ON credit_committee_approvals FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Users can create committee approvals"
  ON credit_committee_approvals FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update committee approvals"
  ON credit_committee_approvals FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_approval_applications_status ON approval_applications(status);
CREATE INDEX IF NOT EXISTS idx_approval_applications_segment ON approval_applications(segment);
CREATE INDEX IF NOT EXISTS idx_approval_stages_application_id ON approval_stages(application_id);
CREATE INDEX IF NOT EXISTS idx_approval_stages_status ON approval_stages(status);
CREATE INDEX IF NOT EXISTS idx_credit_committee_approvals_application_id ON credit_committee_approvals(application_id);