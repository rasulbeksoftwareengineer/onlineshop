'use client'

import { LoginForm } from "@/components/login-form"

import { login } from './actions'
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Page() {

  const [errorMessage, setErrorMessage] = useState<string>();

  const handleFormSubmit = async (email: string, password: string) => {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const result = await login(formData)
    if (result.success) {
      redirect('/');
    } else {
      setErrorMessage(result.error);
    }
  }

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm onFormSubmit={handleFormSubmit} errorMessage={errorMessage} />
      </div>
    </div>
  )
}
