"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"


const formSchema = z.object({
    title: z.string().min(2).max(50),
    description: z.string().min(2).max(200),
    price: z.string().min(2).max(50),
    image_url: z.string().url().url(),
})

export type ProductsFormValues = z.infer<typeof formSchema>;

type productsFormProps = {
    onSubmit: (values: ProductsFormValues) => void;
    defaultValues?: ProductsFormValues;
    isEdit?: boolean;
}

export default function ProductForm({ onSubmit, defaultValues, isEdit }: productsFormProps) {
    const router = useRouter();
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: defaultValues || {
            title: '',
            description: '',
            price: '',
            image_url: '',
        },
    })

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    name="title"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Title" {...field} />
                            </FormControl>
                            <FormDescription>
                                The is the title of the products item.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    name="description"
                    control={form.control}
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Description</FormLabel>
                            <FormControl>
                                <Input placeholder="Description" {...field} />
                            </FormControl>
                            <FormDescription>
                                The is the description of the products item.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        name="price"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder="Description" type="number" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The is the cta text of the products item.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="image_url"
                        control={form.control}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Image Link</FormLabel>
                                <FormControl>
                                    <Input placeholder="Img url" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The is the cta link of the products item.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-end gap-4">
                    <Button type="button" variant='outline' onClick={() => router.push('/dashboard/products')}>Cancel</Button>
                    <Button type="submit">{isEdit ? 'Update' : 'Create'}</Button>
                </div>
            </form>
        </Form>
    )
}