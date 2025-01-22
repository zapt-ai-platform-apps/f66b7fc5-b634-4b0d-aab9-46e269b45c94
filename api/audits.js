import { authenticateUser } from './_apiUtils.js';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { eq, and } from 'drizzle-orm';
import { audits, audit_sections, audit_questions, action_items } from '../drizzle/schema.js';
import * as Sentry from '@sentry/node';

export default async function handler(req, res) {
  try {
    const user = await authenticateUser(req);
    const client = postgres(process.env.COCKROACH_DB_URL);
    const db = drizzle(client);

    if (req.method === 'GET') {
      const auditList = await db.select()
        .from(audits)
        .where(eq(audits.user_id, user.id))
        .orderBy(audits.created_at);
      
      return res.status(200).json(auditList);
    }

    if (req.method === 'POST') {
      const newAudit = await db.insert(audits)
        .values({
          round_name: req.body.round_name,
          site_name: req.body.site_name,
          status: 'draft',
          user_id: user.id
        })
        .returning();

      return res.status(201).json(newAudit[0]);
    }

    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    Sentry.captureException(error);
    console.error('Audits API error:', error);
    res.status(500).json({ error: error.message || 'Internal server error' });
  }
}
