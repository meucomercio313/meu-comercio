import { LeadsTable } from "@/components/admin/LeadsTable";
import { supabase } from "@/lib/supabase";
import { Lead } from "@/lib/types";

export const dynamic = 'force-dynamic';

async function getLeads(): Promise<Lead[]> {
  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Erro ao buscar leads:", error);
    return [];
  }

  return data || [];
}

export default async function AdminPage() {
  const leads = await getLeads();

  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-brand-green">Painel de Leads</h1>
        <p className="text-gray-400 mt-2">Leads recebidos através do formulário da landing page.</p>
      </header>

      <main>
        {leads.length > 0 ? (
          <LeadsTable leads={leads} />
        ) : (
          <p className="text-center text-gray-500 py-10">Nenhum lead encontrado.</p>
        )}
      </main>
    </div>
); }