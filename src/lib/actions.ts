'use server';

import { supabase } from './supabase';
import { OnboardingFormSchema, OnboardingFormValues } from './types';

export async function submitOnboardingForm(data: OnboardingFormValues) {
  const result = OnboardingFormSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: result.error.flatten().fieldErrors };
  }

  const { companyName, investmentValue, hasInvestedBefore, wasSatisfied, marketingGoals } = result.data;

  const { error } = await supabase.from('leads').insert([
    {
      company_name: companyName,
      investment_value: investmentValue,
      has_invested_before: hasInvestedBefore === 'true',
      was_satisfied: wasSatisfied ? wasSatisfied === 'true' : null,
      marketing_goals: marketingGoals,
  }, ]);

  if (error) {
    console.error('Supabase error:', error.message);
    return { success: false, message: 'Ocorreu um erro. Tente novamente.' };
  }

  return { success: true, message: 'Formulário enviado com sucesso!' };
}