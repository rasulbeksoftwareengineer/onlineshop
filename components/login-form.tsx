"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle, } from "@/components/ui/alert"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ComponentPropsWithoutRef, FormEvent, useState } from "react";
import { AlertCircle } from "lucide-react";

interface LoginFormProps extends ComponentPropsWithoutRef<'div'> {
  onFormSubmit: (email: string, password: string) => void;
  errorMessage?: string;
}

export function LoginForm({ className, onFormSubmit, errorMessage, ...props }: LoginFormProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFormSubmit(email, password)
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required
                />
              </div>

              <div className="grid gap-2">

                <div className="flex items-center">

                  <Label htmlFor="password">Password</Label>

                  <a href="#" className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </a>

                </div>

                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />

              </div>

              <Button type="submit" className="w-full">
                Login
              </Button>

            </div>

            <div className="my-4 text-center text-sm">
              Hisobingiz yo&apos;qmi?{" "}
              <a href="#" className="underline underline-offset-4">
                Sign up
              </a>
            </div>
            {errorMessage && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  {errorMessage}
                </AlertDescription>
              </Alert>
            ) || ''}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
