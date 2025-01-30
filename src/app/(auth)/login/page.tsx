// import { useActionState } from "react";
"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { login } from "@/actions/user.actions";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

export default function AdminLoginPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof LoginSchema>) {
    const res = await login(data);
    console.log(res);

    if (res.success) {
      router.push("/");
    } else {
      toast({
        description: res.message,
        variant: "destructive",
      });
    }
  }
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="flex justify-center">
          <Image
            src="https:isuzu.sa/wp-content/uploads/2024/09/Isuzu-New-East-Saudi-Logo_192x45.svg"
            width={200}
            height={150}
            alt={"logo"}
          />
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2"></div>
            <div className="my-2 flex items-center justify-center gap-2">
              <div className="h-[0.5px] w-full bg-primary" />
              <span className="text-sm text-gray-500">OR</span>
              <div className="h-[0.5px] w-full bg-primary" />
            </div>
            <p className="my-2 text-center text-sm text-gray-500">
              Sign in with your email and password
            </p>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
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
                  <Button
                    type="button"
                    onClick={() => {
                      window.location.replace("/signup"); // will cause a full page reload
                    }}
                    className="px-0 text-gray-500 underline"
                    variant={"link"}
                  >
                    Don{"'"}t have an account? Sign up
                  </Button>
                </div>
                <Button type="submit">Login</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
