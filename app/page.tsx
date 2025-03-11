import Footer from "@/components/page/footer";
import Navbar from "@/components/page/navbar";
import Products from "@/components/page/products";
import { Toaster } from "@/components/ui/sonner";
import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = await createClient();
  const { data: productItems } = await supabase.from("products").select();

  return (
    <>
      <Navbar />

      {(productItems && <Products items={productItems} />) || (
        <section className="w-full h-[calc(100vh-120px)] flex items-center justify-center">
          <h1 className="text-3xl">Bizda xatolik ! 404</h1>
        </section>
      )}

      <Footer />
      <Toaster />
    </>
  );
}
