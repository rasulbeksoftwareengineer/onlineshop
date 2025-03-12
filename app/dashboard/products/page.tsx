import { createClient } from "@/utils/supabase/server";
import DataTable from "./data-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page() {
  const supabase = await createClient();
  const { data: productItems } = await supabase.from('products').select('*').order('created_at', { ascending: true });

  return (
    <div>
      <div className="flex items-center justify-between">
        <h3>Products List</h3>
        <Link href='products/create'>
          <Button>
            Add Product
          </Button>
        </Link>
      </div>
      <DataTable items={productItems} />
    </div>
  )
}