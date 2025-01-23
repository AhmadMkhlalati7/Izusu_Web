import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
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

// Define the validation schema using Zod
const formQuotationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "company must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  message: z.string().min(20, "message must be at least 20 characters"),
  zip: z.string().min(4, "zip must be at least 4 characters"),
});

interface QuotationFormType {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  zip: string;
}

export default function CarPaymentForm() {
  const formQuotation = useForm<QuotationFormType>({
    resolver: zodResolver(formQuotationSchema),
  });

  const onSubmit = (data: QuotationFormType) => {
    console.log("Form Data:", data);
    alert("Payment processed successfully!");
  };

  return (
    <Form {...formQuotation}>
      <form onSubmit={formQuotation.handleSubmit(onSubmit)}>
        <div className="my-4">
          <FormField
            control={formQuotation.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>name</FormLabel>
                <FormControl>
                  <Input {...field} id="name" placeholder="Enter your name" />
                </FormControl>{" "}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-4">
          <FormField
            control={formQuotation.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                  />
                </FormControl>{" "}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="my-4">
          <FormField
            control={formQuotation.control}
            name="zip"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP Code</FormLabel>
                <FormControl>
                  <Input {...field} id="zip" placeholder="Enter your zip" />
                </FormControl>{" "}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-4">
          <FormField
            control={formQuotation.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input {...field} id="phone" placeholder="Enter your Phone" />
                </FormControl>{" "}
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-4">
          <FormField
            control={formQuotation.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>company</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    id="company"
                    placeholder="Enter your company"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-4">
          <FormField
            control={formQuotation.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>message</FormLabel>
                <FormControl>
                  <Textarea
                    rows={5}
                    {...field}
                    id="message"
                    placeholder="Enter your message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="my-4">
          <Button type="submit" variant={"destructive"} className="w-full">
            Submit <Send></Send>
          </Button>
        </div>
      </form>
    </Form>
  );
}
