import { z } from 'zod';

export const OnboardingFormSchema = z.object({
  companyName: z.string().min(2, { message: 'Nome da empresa é obrigatório.' }),
  investmentValue: z.string({ required_error: 'Selecione um valor.' }),
  hasInvestedBefore: z.string({ required_error: 'Selecione uma opção.' }),
  wasSatisfied: z.string().optional(),
  marketingGoals: z.string().min(10, { message: 'Descreva seus objetivos.' }).optional(),
});

export type OnboardingFormValues = z.infer<typeof OnboardingFormSchema>;