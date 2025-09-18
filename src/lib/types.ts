import { z } from 'zod';

export const OnboardingFormSchema = z.object({
  companyName: z.string().min(1, { message: 'Nome da empresa é obrigatório.' }),
  investmentValue: z.string().min(1, { message: 'Por favor, selecione um valor.' }),
  hasInvestedBefore: z.string().min(1, { message: 'Por favor, selecione uma opção.' }),
  wasSatisfied: z.string().optional(),
  marketingGoals: z.string().min(10, { message: 'Descreva seus objetivos em pelo menos 10 caracteres.' }).optional(),
});

export type OnboardingFormValues = z.infer<typeof OnboardingFormSchema>;

export type Lead = {
  id: string;
  company_name: string;
  investment_value: string;
  has_invested_before: boolean;
  was_satisfied: boolean | null;
  marketing_goals: string | null;
  created_at: string;
};