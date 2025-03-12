import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";
import { ProductsItems } from "@/shared/types/productsItems.type";



type ProductsProps = {
  items: ProductsItems[];
};

export default function Products({ items }: ProductsProps) {
  return (
    <section className="w-full py-4">
      <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {items.map((item) => (
          <Card key={item.id}>
            <Image
              src={item.image_url}
              alt="Image"
              width={500}
              height={500}
              className="w-full"
            />
            <CardContent>
              <Link href={`/products/${item.id}`} className="hover:text-blue-500">
                <CardTitle className="text-lg">{item.title.slice(0, 30)}...</CardTitle>
                <p className="mt-3">{item.description.slice(0, 50)}</p>
              </Link>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-lg">Narxi {item.price} USD</span>
              <Button>
                <ShoppingBagIcon />
              </Button>
            </CardFooter>
          </Card>
        ))}

      </div>
    </section>
  );
}
