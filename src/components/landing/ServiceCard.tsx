import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Check } from "lucide-react";
import type { LucideIcon } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { OnboardingForm } from '../forms/OnboardingForm';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon: Icon, title, description, features }: ServiceCardProps) {
  return (
    <div className={cn(
      "bg-brand-dark/50 border border-white/10 rounded-lg p-6 flex flex-col h-full relative group transition-colors duration-300 hover:border-brand-green/50"
    )}>
      <div className="flex justify-between items-start mb-4">
        <div className="bg-brand-dark p-3 rounded-lg border border-white/10">
          <Icon className="w-6 h-6 text-brand-green" />
        </div>
        <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-brand-green transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
      </div>

      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4 flex-grow">{description}</p>

      <ul className="space-y-2 text-sm mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="w-4 h-4 text-brand-green" />
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Saber Mais
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-transparent border-none p-0">
            <OnboardingForm />
          </DialogContent>
        </Dialog>
      </div>
    </div>
); }