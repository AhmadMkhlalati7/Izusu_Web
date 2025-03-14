"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ProductSchema } from "@/lib/zod";

interface ProductFormProps {
  onSubmit: (data: z.infer<typeof ProductSchema>) => void;
}

export function ProductForm({ onSubmit }: ProductFormProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof ProductSchema>>({
    resolver: zodResolver(ProductSchema),
  });

  function onSubmitForm(values: z.infer<typeof ProductSchema>) {
    console.log(values);
    setOpen(false);
    form.reset();
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">Create Product</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Create Product</DialogTitle>
          <DialogDescription>
            Enter the details of the new product here. Click save when you're
            done.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmitForm)}
            className="space-y-8"
          >
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Product title" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Product description" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Product category" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="gvw"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GVW</FormLabel>
                    <FormControl>
                      <Input placeholder="Gross Vehicle Weight" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="engine"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engine</FormLabel>
                    <FormControl>
                      <Input placeholder="Engine details" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="axle_capacity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engine</FormLabel>
                    <FormControl>
                      <Input placeholder="Alex Capacity" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="drivingSystem"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engine</FormLabel>
                    <FormControl>
                      <Input placeholder="Driving System" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="powerPSRPM"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engine</FormLabel>
                    <FormControl>
                      <Input placeholder="Power PS/RPM" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="torqueKgMRPM"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engine</FormLabel>
                    <FormControl>
                      <Input placeholder="Torque Kg / MRPM" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="transmission"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Engine</FormLabel>
                    <FormControl>
                      <Input placeholder="Transmission" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <DialogFooter>
              <Button
                type="submit"
                className="h-7 w-full"
                variant={"destructive"}
              >
                Save changes
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
