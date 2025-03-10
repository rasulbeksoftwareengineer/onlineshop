import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";

type ProductsItems = {
  id: number;
  created_at: string;
  title: string;
  price: string;
  description: string;
  image_url: string;
};

type ProductsProps = {
  items: ProductsItems[];
};

export default function Products({ items }: ProductsProps) {
  return (
    <section className="w-full py-4">
      <div className="container mx-auto grid grid-cols-4 gap-3">
        {items.map((item) => (
          <Card key={item.id}>
            <Image
              src={item.image_url}
              alt="Image"
              width={500}
              height={500}
            />
            <CardContent>
              <Link href={`products/${item.id}`} className="hover:text-blue-500">
                <CardTitle>{item.title}</CardTitle>
              </Link>
            </CardContent>
            <CardFooter className="flex justify-between">
              <span className="text-xl">Narxi {item.price} USD</span>
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
