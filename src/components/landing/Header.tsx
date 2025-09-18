'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import React from 'react';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#services', label: 'Serviços' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contact', label: 'Contato' },
];

export function Header() {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
  }); } };

  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#inicio" onClick={(e) => handleScroll(e, '#inicio')} className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Meu Comércio Logo" width={40} height={40} className="rounded-md" />
          <span className="font-bold text-lg hidden sm:inline">Meu Comércio</span>
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
        <Button className="hidden md:flex">
          Decolar Agora
        </Button>
      </div>
    </header>
); }