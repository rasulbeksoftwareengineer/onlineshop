import { createClient } from "@/utils/supabase/server";
import EditForm from "./edit-form";

type productsEditProps = {
    params: Promise<{ id: string }>
}

export default async function ProductEdit({ params }: productsEditProps) {

    const { id } = await params;
    const supabase = await createClient();
    const { data: productsItem } = await supabase.from('products').select('*').eq('id', id).single();

    return (
        <div>
            <h3 className="mb-4 text-xl font-bold">Edit products item</h3>
            <EditForm defaultValues={productsItem} />
        </div>
    )
}