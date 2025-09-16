'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { OnboardingFormSchema, OnboardingFormValues } from '@/lib/types';
import { submitOnboardingForm } from '@/lib/actions';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export function OnboardingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control, // para o Select
  } = useForm<OnboardingFormValues>({
    resolver: zodResolver(OnboardingFormSchema),
  });

  const hasInvested = watch('hasInvestedBefore');

  const onSubmit = async (data: OnboardingFormValues) => {
    setIsSubmitting(true);
    const result = await submitOnboardingForm(data);
    setIsSubmitting(false);

    if (result.success) {
      alert(result.message); // Idealmente, substitua por um toast/notificação
      // Resetar form ou fechar modal aqui
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="bg-brand-dark/80 backdrop-blur-sm border border-brand-green/20 p-8 rounded-lg max-w-lg w-full">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-brand-green">Decolagem Digital</h2>
        <p className="text-gray-300 mt-2">Transforme seu negócio em uma máquina de vendas espacial!</p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="companyName">Nome da sua empresa *</Label>
          <Input id="companyName" {...register('companyName')} placeholder="Digite o nome da sua empresa" />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
        </div>

        {/* ... Adapte os Selects para usar react-hook-form's Controller ... */}

        <div>
          <Label htmlFor="marketingGoals">O que você gostaria de melhorar no marketing da sua empresa? *</Label>
          <Textarea id="marketingGoals" {...register('marketingGoals')} placeholder="Descreva suas principais necessidades e objetivos..." />
          {errors.marketingGoals && <p className="text-red-500 text-sm mt-1">{errors.marketingGoals.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Iniciar Jornada Espacial'}
        </Button>
      </form>
    </div>
); }