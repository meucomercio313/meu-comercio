import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  const navLinks = [
    { href: '#inicio', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <header className="py-4 px-4 md:px-6 sticky top-0 z-50 bg-brand-dark/80 backdrop-blur-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Meu Comércio Logo" width={120} height={120} className="rounded-md" />
          <span className="font-bold text-lg hidden sm:inline"></span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-md font-medium text-gray-300 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <Button className="hidden md:flex">
          🚀 Decolar Agora
        </Button>
      </div>
    </header>
); }