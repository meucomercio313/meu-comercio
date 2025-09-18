import { Lead } from "@/lib/types";

interface LeadsTableProps {
  leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Empresa</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Investimento</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Já Investiu?</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Satisfeito?</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Data</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Objetivos</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800 bg-gray-900">
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="whitespace-nowrap py-4 px-4 text-sm font-medium text-white">{lead.company_name}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{lead.investment_value}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{lead.has_invested_before ? 'Sim' : 'Não'}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{lead.was_satisfied === null ? '-' : lead.was_satisfied ? 'Sim' : 'Não'}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{new Date(lead.created_at).toLocaleDateString('pt-BR')}</td>
              <td className="whitespace-normal py-4 px-4 text-sm text-gray-300 max-w-xs">{lead.marketing_goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
); }