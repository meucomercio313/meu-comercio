'use client';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { OnboardingForm } from '../forms/OnboardingForm';
import { handleScroll } from '@/lib/scroll';

export function Hero() {
  return (
    <section id="inicio" className="container mx-auto flex flex-col items-center justify-center text-center min-h-[80vh] px-4">
      <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Decole Suas <span className="text-brand-green">VENDAS</span>
        <br />
        Para o Espaço
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-gray-300">
        340% de ROI médio. Transformamos empresas comuns em máquinas de vendas espaciais através de estratégias de marketing digital que REALMENTE funcionam.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="lg">🚀 Quero Decolar Agora</Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none p-0">
            <OnboardingForm />
          </DialogContent>
        </Dialog>

        <Button size="lg" variant="outline" onClick={(e) => handleScroll(e, '#depoimentos')}>
          Ver Casos de Sucesso
        </Button>
      </div>
    </section>
); }