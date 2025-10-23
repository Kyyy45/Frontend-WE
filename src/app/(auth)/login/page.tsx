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
import { Eye, EyeOff } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import useLogin from "./useLogin";
import Link from "next/link";
import { Controller } from "react-hook-form";
import { Suspense } from "react";

interface FormField {
  id: "identifier" | "password";
  label: string;
  type: "text" | "password";
  placeholder: string;
}

const LoginForm = () => {
  const {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  } = useLogin();

  const formFields: FormField[] = [
    {
      id: "identifier",
      label: "Email or Username",
      type: "text",
      placeholder: "budi123@gmail.com",
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Masukkan password Anda",
    },
  ];

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
            src="/illustrations/Login.png"
            alt="Login Illustration"
            width={1024}
            height={1024}
          />
        </div>

        {/* Card Form Login */}
        <Card className="w-full border-0 md:w-1/2 md:border">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-2xl font-bold text-amber-400 md:text-3xl">
              Login
            </CardTitle>
            <CardDescription className="text-muted-foreground text-base">
              Selamat datang di platform Worldpedia Education
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 md:px-6">
            <form
              onSubmit={handleSubmit(handleLogin)}
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
                              isVisible ? "text" : "password"
                            }
                            placeholder={field.placeholder}
                            autoComplete="off"
                            required
                            className="pr-10 text-sm md:text-base md:placeholder:text-sm"
                          />
                          <button
                            type="button"
                            onClick={toggleVisibility}
                            className="text-muted-foreground absolute top-1/2 right-3 -translate-y-1/2"
                          >
                            {isVisible ? (
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
                disabled={isPendingLogin}
                className="w-full bg-amber-400 font-semibold text-black hover:bg-amber-500"
              >
                {isPendingLogin ? (
                    <>
                  <Spinner className="mr-2 h-4 w-4 text-foreground" />
                  Sedang Login...
                  </>
                ) : (
                  "Login"
                )}
              </Button>
              <p className="text-muted-foreground text-center text-sm">
                Anda belum memiliki akun?{" "}
                <Link
                  href="/register"
                  className="font-semibold text-amber-400 hover:underline"
                >
                  Registrasi
                </Link>
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const LoginPage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
};

export default LoginPage;
