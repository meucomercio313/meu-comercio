'use client';

import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { OnboardingFormSchema, OnboardingFormValues } from '@/lib/types';
import { submitOnboardingForm } from '@/lib/actions';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

export function OnboardingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm<OnboardingFormValues>({
    resolver: zodResolver(OnboardingFormSchema),
  });

  const hasInvested = watch('hasInvestedBefore');

  const onSubmit = async (data: OnboardingFormValues) => {
    setIsSubmitting(true);
    const result = await submitOnboardingForm(data);
    setIsSubmitting(false);

    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message || "Ocorreu um erro.");
  } };

  return (
    <div className="bg-brand-dark/80 backdrop-blur-md shadow-lg shadow-brand-green/20 border border-brand-green/20 p-8 rounded-lg max-w-lg w-full">
      <DialogHeader className="text-center mb-8">
        <DialogTitle className="text-3xl font-bold text-brand-green">Decolagem Digital</DialogTitle>
        <DialogDescription className="text-gray-300 mt-2">
          Transforme seu negócio em uma máquina de vendas espacial!
        </DialogDescription>
      </DialogHeader>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div>
          <Label htmlFor="companyName">Nome da sua empresa *</Label>
          <Input id="companyName" {...register('companyName')} placeholder="Digite o nome da sua empresa" />
          {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
        </div>

        <div>
          <Label>Quanto você quer investir em marketing digital? *</Label>
          <Controller
            control={control}
            name="investmentValue"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger><SelectValue placeholder="Selecione o valor" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ate-5k">Até R$5.000/mês</SelectItem>
                  <SelectItem value="5k-15k">De R$5.000 a R$15.000/mês</SelectItem>
                  <SelectItem value="15k-30k">De R$15.000 a R$30.000/mês</SelectItem>
                  <SelectItem value="acima-30k">Acima de R$30.000/mês</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.investmentValue && <p className="text-red-500 text-sm mt-1">{errors.investmentValue.message}</p>}
        </div>

        <div>
          <Label>Você já investiu em marketing digital antes? *</Label>
           <Controller
            control={control}
            name="hasInvestedBefore"
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger><SelectValue placeholder="Selecione uma opção" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="nunca">Nunca investi</SelectItem>
                  <SelectItem value="pouco">Investi pouco</SelectItem>
                  <SelectItem value="moderadamente">Investi moderadamente</SelectItem>
                  <SelectItem value="muito">Investi muito</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.hasInvestedBefore && <p className="text-red-500 text-sm mt-1">{errors.hasInvestedBefore.message}</p>}
        </div>

        {hasInvested && hasInvested !== 'nunca' && (
          <div>
            <Label>Teve resultados satisfatórios? *</Label>
             <Controller
              control={control}
              name="wasSatisfied"
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger><SelectValue placeholder="Selecione uma opção" /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="nao-se-aplica">Não se aplica</SelectItem>
                    <SelectItem value="frustrantes">Não, foram frustrantes</SelectItem>
                    <SelectItem value="parciais">Resultados parciais</SelectItem>
                    <SelectItem value="otimos">Ótimos resultados</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
             {errors.wasSatisfied && <p className="text-red-500 text-sm mt-1">{errors.wasSatisfied.message}</p>}
          </div>
        )}

        <div>
          <Label htmlFor="marketingGoals">O que você gostaria de melhorar no marketing da sua empresa?</Label>
          <Textarea id="marketingGoals" {...register('marketingGoals')} placeholder="Descreva suas principais necessidades e objetivos..." />
          {errors.marketingGoals && <p className="text-red-500 text-sm mt-1">{errors.marketingGoals.message}</p>}
        </div>

        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Iniciar Jornada Espacial'}
        </Button>
      </form>
    </div>
); }