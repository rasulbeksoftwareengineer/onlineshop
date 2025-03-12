'use client';

import { ProductsItems } from '@/shared/types/productsItems.type';
import ProductForm, { ProductsFormValues } from '../../form';
import { UpdateproductsItem } from './actions';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

type EditFormProps = {
    defaultValues: ProductsItems;
};

export default function EditForm({ defaultValues }: EditFormProps) {
    const router = useRouter();
    const handleUpdate = async (values: ProductsFormValues) => {
        const result = await UpdateproductsItem(defaultValues.id, values);
        if (result.success) {
            toast("Success")
            router.push('/dashboard/products');
        } else {
            toast("Error")
        }
    };

    return <ProductForm onSubmit={handleUpdate} defaultValues={defaultValues} isEdit />;
}