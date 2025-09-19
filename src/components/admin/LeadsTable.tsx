import { Lead } from "@/lib/types";

interface LeadsTableProps {
  leads: Lead[];
}

export function LeadsTable({ leads }: LeadsTableProps) {
  const satisfactionMap: { [key: string]: string } = {
    'nao-se-aplica': 'Não se aplica',
    'frustrantes': 'Frustrantes',
    'parciais': 'Resultados Parciais',
    'otimos': 'Ótimos Resultados'
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-700">
      <table className="min-w-full divide-y divide-gray-700">
        <thead className="bg-gray-800">
          <tr>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Data</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Empresa</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Investimento</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Investimento Prévio</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Satisfação Anterior</th>
            <th scope="col" className="py-3.5 px-4 text-left text-sm font-semibold text-white">Objetivos</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-800 bg-gray-900">
          {leads.map((lead) => (
            <tr key={lead.id}>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{new Date(lead.created_at).toLocaleDateString('pt-BR')}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm font-medium text-white">{lead.company_name}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">{lead.investment_value}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300 capitalize">{lead.has_invested_before}</td>
              <td className="whitespace-nowrap py-4 px-4 text-sm text-gray-300">
                {lead.was_satisfied ? satisfactionMap[lead.was_satisfied] || lead.was_satisfied : '-'}
              </td>
              <td className="py-4 px-4 text-sm text-gray-300 max-w-xs break-words">{lead.marketing_goals}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
); }