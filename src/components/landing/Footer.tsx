'use client';

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, ChevronRight, Rocket } from "lucide-react";
import { handleScroll } from "@/lib/scroll";
import React from "react";

const servicesLinks = [
  { href: "#services", label: "Tráfego Pago" },
  { href: "#services", label: "Gestão de Mídias Sociais" },
  { href: "#services", label: "Criação de Software" },
  { href: "#services", label: "Métricas e Analytics" },
  { href: "#services", label: "E-mail Marketing" },
];

const quickLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contact", label: "Contato" },
];

export function Footer() {
  return (
    <footer id="footer" className="relative bg-brand-dark text-white pt-20 pb-8 px-4">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: "url('/footer-bg.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent"></div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Image
              src="/logo.jpg"
              alt="Meu Comércio Logo"
              width={160}
              height={40}
              className="rounded-md mb-4"
            />
            <p className="text-gray-400 max-w-md mb-6">
              A MEU COMÉRCIO é a agência de marketing digital que está revolucionando a forma como empresas vendem. Transformamos negócios comuns em máquinas de vendas espaciais.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:ismailfilho01@gmail.com" className="flex items-center gap-3 hover:text-brand-green transition-colors">
                <Mail className="w-4 h-4 text-brand-green" />
                <span>ismailfilho01@gmail.com</span>
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-3 hover:text-brand-green transition-colors">
                <Phone className="w-4 h-4 text-brand-green" />
                <span>+55 (11) 99999-9999</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-green" />
                <span>Brasília, Brasil</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Nossos Serviços</h4>
            <ul className="space-y-2">
              {servicesLinks.map(link => (
                <li key={link.label}>
                  <Link href={link.href} className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-green"/>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.label}>
                  <a href={link.href} onClick={(e) => handleScroll(e, link.href)} className="flex items-center gap-2 text-gray-400 hover:text-brand-green transition-colors">
                    <ChevronRight className="w-4 h-4 text-brand-green"/>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p className="flex items-center gap-2 mb-4 md:mb-0">
            © {new Date().getFullYear()} MEU COMÉRCIO. Todos os direitos reservados.
            <Rocket className="w-4 h-4 text-brand-green" />
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidade</Link>
            <Link href="#" className="hover:text-white transition-colors">Termos de Uso</Link>
          </div>
        </div>
      </div>
    </footer>
); }