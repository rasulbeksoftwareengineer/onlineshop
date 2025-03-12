'use client';
import Link from 'next/link';
import { Pencil, Trash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, } from '@/components/ui/table';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, } from '@/components/ui/alert-dialog';



import { deleteProductsItem } from './actions';
import { useState } from 'react';
import Image from 'next/image';
import { ProductsItems } from '@/shared/types/productsItems.type';



type DataTableProps = {
  items: ProductsItems[] | null;
};

export default function DataTable({ items }: DataTableProps) {

  const [deleteItem, setDeleteItem] = useState<ProductsItems | null>(null);

  const handleDelete = async () => {

    if (!deleteItem) return;

    const { success, error } = await deleteProductsItem(deleteItem.id);

    if (success) {
      setDeleteItem(null);
    }

    else {
      console.error('Error deleting product item', error);
    }

  };

  return (
    <div className="mt-5 rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>IMG</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Description</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  <Image src={item.image_url} alt={item.title} width={100} height={100} />
                </TableCell>
                <TableCell>
                  <Link href={`/products/${item.id}`} target='_blank' className='text-blue-500 underline hover:text-black hover:no-underline'>
                    {item.title}
                  </Link>
                </TableCell>
                <TableCell>{item.price} USD</TableCell>
                <TableCell>{item.description.slice(0, 50)}...</TableCell>
                <TableCell>{new Date(item.created_at).toLocaleString()}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button variant="outline">
                      <Link href={`/dashboard/products/${item.id}/edit`}>
                        <Pencil />
                      </Link>
                    </Button>
                    <Button variant="destructive" onClick={() => setDeleteItem(item)}>
                      <Trash />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={6} className='text-center'>
                <p>No items found</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <AlertDialog open={Boolean(deleteItem)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your products item.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setDeleteItem(null)}>Cancel</AlertDialogCancel>
            <AlertDialogAction className='bg-red-500' onClick={handleDelete}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}