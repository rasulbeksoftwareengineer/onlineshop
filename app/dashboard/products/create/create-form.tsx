'use client';

import { useRouter } from 'next/navigation';
import CoruselForm, { ProductsFormValues } from '../form';
import { CreateProductsItem } from './actions';
import { toast } from 'sonner';

export default function CreateForm() {
    const router = useRouter();
    const handleCreate = async (values: ProductsFormValues) => {
        const result = await CreateProductsItem(values);
        if (result.success) {
            toast("Success")
            router.push('/dashboard/products');
        } else {
            toast("Error")
        }
    };
    return <CoruselForm onSubmit={handleCreate} />;
}