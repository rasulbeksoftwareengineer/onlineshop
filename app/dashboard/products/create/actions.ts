'use server';

import { createClient } from '@/utils/supabase/server';
import { ProductsFormValues } from '../form';

export async function CreateProductsItem(values: ProductsFormValues) {
  const supabase = await createClient();
  const { error } = await supabase.from('products').insert(values);
  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}