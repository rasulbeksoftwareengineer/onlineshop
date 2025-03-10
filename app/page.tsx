import Footer from "@/components/page/footer";
import Navbar from "@/components/page/navbar";
import Products from "@/components/page/products";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: productItems } = await supabase.from("products").select();

  return (
    <>
      <Navbar />

      {productItems && <Products items={productItems} />}

      <Footer />
    </>
  );
}
