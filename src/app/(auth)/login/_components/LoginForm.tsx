"use client";

import { redirect } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSession } from "next-auth/react";
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
import { toast } from "@/hooks/use-toast";
import { LoginSchema } from "@/lib/zod";
import { login } from "../actions/actions";

export default function LoginForm() {
  const { data: session } = useSession();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "admin@test.com",
      password: "12345678",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    const res = await login(data);

    if (res.success) {
      if (session?.user.role === "admin") return redirect("/dashboard");
      else return redirect("/");
    } else {
      toast({
        description: res.message,
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <Button type="submit" variant={"destructive"} className="mt-5 w-full">
            Login
          </Button>
        </div>
      </form>
    </Form>
  );
}
