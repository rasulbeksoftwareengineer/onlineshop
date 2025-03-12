'use server';

import { createClient } from '@/utils/supabase/server';
import { revalidatePath } from 'next/cache';

export const deleteProductsItem = async (id: number) => {
  const supabase = await createClient();
  const { error } = await supabase.from('products').delete().eq('id', id);
  if (error) {
    return { success: false, error: error.message };
  }
  revalidatePath('/dashboard/products');
  return { success: true };
};