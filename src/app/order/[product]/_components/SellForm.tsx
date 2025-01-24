import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Define the validation schema using Zod
const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  amount: z
    .number({ invalid_type_error: "Amount must be a number" })
    .positive("Amount must be greater than zero"),
});

export default function CarPaymentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Payment processed successfully!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="my-4">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          placeholder="Enter your name"
        />
      </div>

      <div className="my-4">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          placeholder="Enter your email"
        />
      </div>

      <div className="my-4">
        <Label htmlFor="zip">ZIP Code</Label>
        <Input
          id="zip"
          type="zip"
          {...register("zip")}
          placeholder="Enter your zip"
        />
      </div>

      <div className="my-4">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="text"
          {...register("phone")}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="my-4">
        <Label htmlFor="amount">Payment Amount</Label>
        <Input
          id="amount"
          type="number"
          {...register("amount", { valueAsNumber: true })}
          placeholder="Enter amount"
        />
      </div>
      <div className="my-4">
        <Button type="submit" variant={"destructive"} className="w-full">
          Submit Payment
        </Button>
      </div>
    </form>
  );
}
