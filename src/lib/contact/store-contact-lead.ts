import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import type { ContactPayload } from "@/lib/contact/schema";

const DEFAULT_TABLE = "contact_submissions";
const DUPLICATE_WINDOW_DAYS = 30;

type ContactLeadInsert = {
  name: string;
  email: string;
  country: string;
  country_code: string;
  phone: string;
  company: string | null;
  service: string;
  message: string;
  source: string;
};

export type PersistResult =
  | { status: "persisted" }
  | { status: "duplicate"; message: string }
  | { status: "skipped"; reason: string };

const getSupabaseConfig = (): {
  url: string;
  serviceRoleKey: string;
  tableName: string;
} | null => {
  const url = process.env.SUPABASE_URL?.trim();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY?.trim();
  const tableName =
    process.env.SUPABASE_CONTACT_TABLE?.trim() || DEFAULT_TABLE;

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { url, serviceRoleKey, tableName };
};

const getSupabaseClient = (): {
  client: SupabaseClient;
  tableName: string;
} | null => {
  const config = getSupabaseConfig();
  if (!config) return null;

  const client = createClient(config.url, config.serviceRoleKey, {
    auth: { persistSession: false },
  });

  return { client, tableName: config.tableName };
};

const getDuplicateCutoffIso = (): string => {
  const now = Date.now();
  const windowMs = DUPLICATE_WINDOW_DAYS * 24 * 60 * 60 * 1000;
  return new Date(now - windowMs).toISOString();
};

const toInsert = (payload: ContactPayload): ContactLeadInsert => ({
  name: payload.name,
  email: payload.email,
  country: payload.country,
  country_code: payload.countryCode,
  phone: payload.phone,
  company: payload.company?.trim() || null,
  service: payload.service,
  message: payload.message,
  source: "website_contact_form",
});

export const persistContactLead = async (
  payload: ContactPayload
): Promise<PersistResult> => {
  const supabase = getSupabaseClient();
  if (!supabase) {
    return {
      status: "skipped",
      reason:
        "Supabase not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY to enable persistence.",
    };
  }

  const duplicateCutoff = getDuplicateCutoffIso();
  const duplicateQuery = await supabase.client
    .from(supabase.tableName)
    .select("id")
    .eq("email", payload.email)
    .gte("created_at", duplicateCutoff)
    .limit(1);

  if (duplicateQuery.error) {
    throw new Error(
      `[contact-persist] duplicate check failed: ${duplicateQuery.error.message}`
    );
  }

  if ((duplicateQuery.data?.length ?? 0) > 0) {
    return {
      status: "duplicate",
      message:
        "We already received your inquiry recently. We will reply soon, no need to resend.",
    };
  }

  const insertResult = await supabase.client
    .from(supabase.tableName)
    .insert(toInsert(payload));

  if (insertResult.error) {
    throw new Error(
      `[contact-persist] insert failed: ${insertResult.error.message}`
    );
  }

  return { status: "persisted" };
};
