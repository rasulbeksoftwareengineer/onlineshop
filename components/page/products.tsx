import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import Link from "next/link";
import { ShoppingBagIcon } from "lucide-react";
import { Button } from "../ui/button";

export default function Products() {
  return (
    <section className="w-full py-4">
      <div className="container mx-auto grid grid-cols-4 gap-3">
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <Image
            src="https://openshop.uz/storage/uploads/products/thumbnail/202403/YpiKaRl6X6ryp2oltOFKYqbxAjFIDXok9xZ4IiWA.jpg"
            alt="Image"
            width={500}
            height={500}
          />
          <CardContent>
            <Link href="/" className="hover:text-blue-500">
              <CardTitle>Samsung Galaxy A35 8/128 gb</CardTitle>
            </Link>
          </CardContent>
          <CardFooter className="flex justify-between">
            <span className="text-xl">250 USD</span>
            <Button>
              <ShoppingBagIcon />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
