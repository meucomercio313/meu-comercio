import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Services } from '@/components/landing/Services';
import { Stats } from '@/components/landing/Stats';
import { Testimonials } from '@/components/landing/Testimonials';

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
); }