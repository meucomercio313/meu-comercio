'use client';

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, ShieldCheck, Star, Rocket, LineChart, Zap, Users, CreditCard } from "lucide-react";
import { useEffect, useState } from "react";

const mainFeatures = [
  { icon: CheckCircle2, text: "ROI de 340% Garantido" },
  { icon: CheckCircle2, text: "Resultados em 30 dias" },
  { icon: CheckCircle2, text: "Suporte 24/7" },
];

const guarantees = [
  { icon: ShieldCheck, text: "Garantia de 30 dias" },
  { icon: Users, text: "Suporte especializado" },
  { icon: CreditCard, text: "Pagamento seguro" },
];

export function Contact() {
  const calculateTimeLeft = () => {
    const targetTime = new Date().getTime() + (2 * 60 * 60 * 1000) + (15 * 60 * 1000) + (42 * 1000);

    let difference = targetTime - new Date().getTime();

    let timeLeft = {
      hours: '00',
      minutes: '00',
      seconds: '00'
    };

    if (difference > 0) {
      timeLeft = {
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    }; }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });


  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-gradient-to-b from-green-900/20 to-brand-dark border border-brand-green/30 rounded-lg p-8 md:p-12 text-center">

          <div className="flex justify-center items-center gap-4 mb-6">
            <Star className="w-6 h-6 text-brand-green" />
            <Rocket className="w-6 h-6 text-brand-green" />
            <LineChart className="w-6 h-6 text-brand-green" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Não Deixe Seus Concorrentes <span className="text-brand-green">Decolarem Primeiro!</span>
          </h2>

          <p className="flex items-center justify-center gap-2 text-yellow-300 font-semibold mb-8">
            <Zap className="w-5 h-5" />
            ÚLTIMA CHANCE: Apenas 10 vagas restantes para nossa Consultoria Espacial Exclusiva que está transformando empresas comuns em máquinas de vendas.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            {mainFeatures.map((feature, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-gray-300">
                <feature.icon className="w-5 h-5 text-brand-green" />
                <span>{feature.text}</span>
              </div>
            ))}
          </div>

          <Button size="lg" className="w-full md:w-auto mb-8">
            QUERO MINHA VAGA AGORA!
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>

          <div className="mb-8">
            <p className="text-sm text-gray-400 mb-2">Oferta expira em:</p>
            <div className="flex justify-center items-center gap-4 font-mono text-3xl font-bold">
              <div>{timeLeft.hours}<span className="text-sm font-sans text-gray-400 block">HORAS</span></div>
              <span>:</span>
              <div>{timeLeft.minutes}<span className="text-sm font-sans text-gray-400 block">MIN</span></div>
              <span>:</span>
              <div>{timeLeft.seconds}<span className="text-sm font-sans text-gray-400 block">SEG</span></div>
            </div>
          </div>

           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-center justify-center gap-2 text-gray-400">
                <guarantee.icon className="w-4 h-4 text-brand-green" />
                <span>{guarantee.text}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
); }