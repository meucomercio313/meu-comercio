const statsData = [
  { value: '500+', label: 'Empresas Transformadas' },
  { value: 'R$ 50M+', label: 'Em Vendas Geradas' },
  { value: '340%', label: 'ROI Médio' },
];

export function Stats() {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="bg-brand-dark/50 backdrop-blur-sm border border-white/10 rounded-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl md:text-5xl font-bold text-brand-green">{stat.value}</p>
              <p className="text-sm text-gray-300 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
); }