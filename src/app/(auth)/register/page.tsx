"use client";

import Image from "next/image";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader2Icon } from "lucide-react";
import useRegister from "./useRegister";
import Link from "next/link";
import { Controller } from "react-hook-form";

interface FormField {
  id: "fullName" | "username" | "email" | "password" | "confirmPassword";
  label: string;
  type: "text" | "email" | "password";
  placeholder: string;
}

const RegisterPage = () => {
  const {
    visiblePassword,
    handleVisiblePassword,
    control,
    handleSubmit,
    handleRegister,
    isPendingRegister,
    errors,
  } = useRegister();

  const formFields: FormField[] = [
    {
      id: "fullName",
      label: "Nama Lengkap",
      type: "text",
      placeholder: "Budi Santoso",
    },
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "budi123",
    },
    {
      id: "email",
      label: "Email",
      type: "email",
      placeholder: "budi@email.com",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Minimal 8 karakter",
    },
    {
      id: "confirmPassword",
      label: "Konfirmasi Password",
      type: "password",
      placeholder: "Ulangi password",
    },
  ];

  // Fungsi untuk mengecek visibilitas password
  const isPasswordVisible = (fieldId: FormField["id"]): boolean =>
    (fieldId === "password" && visiblePassword.password) ||
    (fieldId === "confirmPassword" && visiblePassword.confirmPassword);

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-8 md:px-8">
      {/* Toggle tema */}
      <div className="flex w-full max-w-6xl justify-end px-0 pb-4">
        <ThemeToggle />
      </div>

      <div className="flex w-full max-w-6xl flex-col items-center justify-center gap-4 md:flex-row">
        {/* Ilustrasi */}
        <div className="hidden items-center justify-center md:flex md:w-1/2">
          <Image
            src="/illustrations/register.png"
            alt="Register Illustration"
            width={1024}
            height={1024}
          />
        </div>

        {/* Card Form Registrasi */}
        <Card className="w-full border-0 md:w-1/2 md:border">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-2xl font-bold text-amber-400 md:text-3xl">
              Registrasi
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base">
              Buat akun untuk menggunakan platform worldpedia education
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 md:px-6">
            <form
              onSubmit={handleSubmit(handleRegister)}
              className="flex flex-col gap-4"
            >
              {formFields.map((field) => (
                <div key={field.id} className="grid gap-2">
                  <Label htmlFor={field.id} className="text-sm">
                    {field.label}
                  </Label>

                  <Controller
                    name={field.id}
                    control={control}
                    render={({ field: controllerField }) =>
                      field.type === "password" ? (
                        <div className="relative">
                          <Input
                            {...controllerField}
                            id={field.id}
                            type={
                              isPasswordVisible(field.id) ? "text" : "password"
                            }
                            placeholder={field.placeholder}
                            autoComplete="off"
                            required
                            className="pr-10 text-sm md:text-base md:placeholder:text-sm"
                          />
                          <button
                            type="button"
                            onClick={() =>
                              handleVisiblePassword(
                                field.id as "password" | "confirmPassword",
                              )
                            }
                            className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
                          >
                            {isPasswordVisible(field.id) ? (
                              <EyeOff size={18} />
                            ) : (
                              <Eye size={18} />
                            )}
                          </button>
                        </div>
                      ) : (
                        <Input
                          {...controllerField}
                          id={field.id}
                          type={field.type}
                          placeholder={field.placeholder}
                          autoComplete="off"
                          required
                          className="text-sm md:text-base md:placeholder:text-sm"
                        />
                      )
                    }
                  />
                  {errors[field.id] && (
                    <p className="text-xs text-red-500">
                      {String(errors[field.id]?.message)}
                    </p>
                  )}
                </div>
              ))}
              <Button
                type="submit"
                className="w-full bg-amber-400 font-semibold text-black hover:bg-amber-500"
              >
                {isPendingRegister ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  "Buat Akun"
                )}
              </Button>
              <p className="text-muted-foreground text-center text-sm">
                Kamu sudah memiliki akun?{" "}
                <Link
                  href="/login"
                  className="font-semibold text-amber-400 hover:underline"
                >
                  Masuk
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegisterPage;
