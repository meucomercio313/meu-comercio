import { ServiceCard } from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { Star, Target, Users, Code, ChartSpline, Mail, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { OnboardingForm } from '../forms/OnboardingForm';

const servicesData = [
  {
    icon: Target,
    title: "Tráfego Pago",
    description: "Acelere seu crescimento com campanhas de alta conversão no Google Ads, Facebook e Instagram. ROI garantido.",
    features: ["Google Ads", "Facebook Ads", "Instagram Ads", "YouTube Ads"],
    isFeatured: false,
  },
  {
    icon: Users,
    title: "Gestão de Mídias Sociais",
    description: "Transforme seguidores em clientes com estratégias de conteúdo que geram engajamento e vendas.",
    features: ["Criação de Conteúdo", "Gestão de Comunidade", "Stories e Reels", "Relatórios"],
    isFeatured: false,
  },
  {
    icon: Code,
      title: "Criação de Software",
      description: "Desenvolvimento de aplicações personalizadas para automatizar e escalar seu negócio digitalmente.",
      features: ["Apps Mobile", "Sistemas Web", "E-commerce", "Integrações"],
      isFeatured: true,
  },
  {
    icon: ChartSpline,
    title: "Métricas e Analytics",
    description: "Dados precisos para decisões inteligentes. Monitore, analise e otimize seus resultados em tempo real.",
    features: ["Dashboard Personalizado", "Relatórios", "KPIs", "Análise de ROI"],
    isFeatured: false,
  },
  {
    icon: Mail,
    title: "E-mail Marketing",
    description: "Automatize sua comunicação e aumente vendas com campanhas de e-mail que convertem.",
    features: ["Automação", "Segmentação", "Templates", "A/B Testing"],
    isFeatured: true,
}, ];


export function Services() {
  return (
    <section id="servicos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Star className="w-8 h-8 text-brand-green" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Serviços que <span className="text-brand-green">Transformam</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400">
            Nossa tecnologia espacial de marketing digital vai revolucionar a forma como sua empresa vende. Prepare-se para uma decolagem épica!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>

        <div className="mt-20 text-center bg-brand-dark/50 border border-white/10 rounded-lg p-10 max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Pronto para uma Transformação Espacial?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Não perca mais tempo com estratégias que não funcionam. Decole para o sucesso hoje mesmo!
          </p>
          
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg">
                Iniciar Minha Jornada
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-transparent border-none p-0">
              <OnboardingForm />
            </DialogContent>
          </Dialog>
        </div>

      </div>
    </section>
); }