'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { OnboardingForm } from '../forms/OnboardingForm';
import { handleScroll } from '@/lib/scroll';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

export function Header() {
  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Meu Comércio Logo" width={120} height={120} className="rounded-md" />
          <span className="font-bold text-lg hidden sm:inline"></span>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="hidden md:flex">
              🚀 Decolar Agora
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none p-0">
            <OnboardingForm />
          </DialogContent>
        </Dialog>
      </div>
    </header>
); }