'use server';

import { createClient } from '@/utils/supabase/server';
import { ProductsFormValues } from '../../form';

export async function UpdateproductsItem(id: number, values: ProductsFormValues) {
  const supabase = await createClient();
  const { error } = await supabase.from('products').update(values).eq('id', id);
  if (error) {
    return { success: false, error: error.message };
  }
  return { success: true };
}