CREATE TABLE audits (
  id SERIAL PRIMARY KEY,
  round_name TEXT NOT NULL,
  site_name TEXT NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('draft', 'in_progress', 'qa_review', 'published')),
  score NUMERIC(5,2),
  critical_issues INT DEFAULT 0,
  user_id UUID NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE audit_sections (
  id SERIAL PRIMARY KEY,
  audit_id INT REFERENCES audits(id) ON DELETE CASCADE,
  section_name TEXT NOT NULL,
  section_order INT NOT NULL
);

CREATE TABLE audit_questions (
  id SERIAL PRIMARY KEY,
  section_id INT REFERENCES audit_sections(id) ON DELETE CASCADE,
  question_text TEXT NOT NULL,
  risk_rating TEXT CHECK (risk_rating IN ('low', 'medium', 'high', 'critical')),
  response TEXT,
  notes TEXT,
  photo_urls TEXT[],
  non_conformance BOOLEAN DEFAULT false
);

CREATE TABLE action_items (
  id SERIAL PRIMARY KEY,
  audit_id INT REFERENCES audits(id) ON DELETE CASCADE,
  question_id INT REFERENCES audit_questions(id) ON DELETE SET NULL,
  description TEXT NOT NULL,
  due_date DATE NOT NULL,
  status TEXT NOT NULL CHECK (status IN ('open', 'in_progress', 'completed', 'reopened')),
  assigned_to TEXT,
  completed_at TIMESTAMP,
  evidence_urls TEXT[]
);