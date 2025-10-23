"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import authServices from "@/services/auth.service";

export default function ActivationPage() {
  const searchParams = useSearchParams();
  const code = searchParams.get("code") || "";
  const [status, setStatus] = useState<"loading" | "success" | "failed">(
    "loading"
  );

  useEffect(() => {
    const activate = async () => {
      try {
        const result = await authServices.activation({ code });
        console.log("Activation API result:", result?.data);

        if (result?.data?.data) {
          setStatus("success");
        } else {
          setStatus("failed");
        }
      } catch (error) {
        console.error("Activation error:", error);
        setStatus("failed");
      }
    };

    if (code) activate();
    else setStatus("failed");
  }, [code]);

  const title =
    status === "success" ? "Activation Success" : "Activation Failed";
  const description =
    status === "success"
      ? "Your account has been successfully activated. You can now log in and start using our services."
      : "Account activation failed. Please check your activation link or contact support.";
  const imageSrc =
    status === "success"
      ? "/illustrations/success.png"
      : "/illustrations/failed.png";

  return (
    <div className="flex min-h-screen w-full items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center p-6 backdrop-blur-xs md:p-10">
        {status === "loading" ? (
          <p className="text-lg text-stone-300">Activating your account...</p>
        ) : (
          <>
            <Image
              src={imageSrc}
              alt={status}
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md"
              priority
            />

            <div className="flex flex-col items-center gap-2 text-center">
              <h1 className="text-3xl font-bold text-amber-400">{title}</h1>
              <p className="text-xl font-semibold text-stone-300">
                {description}
              </p>

              <Button
                asChild
                className="mt-4 w-fit bg-amber-400 font-bold hover:bg-amber-500"
              >
                <Link href="/">Back to home</Link>
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
