"use client";

import { useActionState } from "react";
import Image from "next/image";
import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { login } from "./actions";

export default function AdminLoginPage() {
  const [state, loginAction] = useActionState(login, undefined);
  const { pending } = useFormStatus();

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
        <form action={loginAction} className="">
          <Card className="mx-auto max-w-sm rounded-sm">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold">Login</CardTitle>
              <CardDescription>
                Enter your email and password to login to your account
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="m@example.com"
                    required
                  />
                  {state?.errors?.email && (
                    <p className="text-red-500">{state.errors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                  />
                  {state?.errors?.password && (
                    <p className="text-red-500">{state.errors.password}</p>
                  )}
                </div>
                <Button
                  disabled={pending}
                  type="submit"
                  className="w-full"
                  variant={"destructive"}
                >
                  Login
                </Button>
              </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
}
