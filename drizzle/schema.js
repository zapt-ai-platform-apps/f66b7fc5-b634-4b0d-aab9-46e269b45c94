import { pgTable, serial, text, timestamp, uuid, numeric, integer, boolean, date, pgEnum } from 'drizzle-orm/pg-core';

export const audits = pgTable('audits', {
  id: serial('id').primaryKey(),
  round_name: text('round_name').notNull(),
  site_name: text('site_name').notNull(),
  status: text('status').notNull(),
  score: numeric('score', { precision: 5, scale: 2 }),
  critical_issues: integer('critical_issues').default(0),
  user_id: uuid('user_id').notNull(),
  created_at: timestamp('created_at').defaultNow(),
  updated_at: timestamp('updated_at').defaultNow(),
});

export const audit_sections = pgTable('audit_sections', {
  id: serial('id').primaryKey(),
  audit_id: integer('audit_id').references(() => audits.id, { onDelete: 'cascade' }),
  section_name: text('section_name').notNull(),
  section_order: integer('section_order').notNull(),
});

export const audit_questions = pgTable('audit_questions', {
  id: serial('id').primaryKey(),
  section_id: integer('section_id').references(() => audit_sections.id, { onDelete: 'cascade' }),
  question_text: text('question_text').notNull(),
  risk_rating: text('risk_rating'),
  response: text('response'),
  notes: text('notes'),
  photo_urls: text('photo_urls').array(),
  non_conformance: boolean('non_conformance').default(false),
});

export const action_items = pgTable('action_items', {
  id: serial('id').primaryKey(),
  audit_id: integer('audit_id').references(() => audits.id, { onDelete: 'cascade' }),
  question_id: integer('question_id').references(() => audit_questions.id, { onDelete: 'set null' }),
  description: text('description').notNull(),
  due_date: date('due_date').notNull(),
  status: text('status').notNull(),
  assigned_to: text('assigned_to'),
  completed_at: timestamp('completed_at'),
  evidence_urls: text('evidence_urls').array(),
});