import Link from "next/link";
import { Button } from "../ui/button";
import { User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="h-20 bg-slate-300 flex items-center">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-medium">
          OnlineShop
        </Link>
        <nav className="flex items-center gap-10 text-xl">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/login">
            <Button>
              <User />
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
