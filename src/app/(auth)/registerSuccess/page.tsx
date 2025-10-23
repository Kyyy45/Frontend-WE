"use client";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const RegisterSuccessPage = () => {
  const router = useRouter();
  return (
    <BackgroundLines>
      <div className="flex min-h-screen w-full items-center justify-center px-4">
        <div className="flex flex-col items-center justify-center p-6 backdrop-blur-xs md:p-10">
          <Image
            src="/illustrations/email-send.png"
            alt="email"
            width={500}
            height={500}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            priority
          />

          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-3xl font-bold text-amber-400">
              Create Account Success
            </h1>
            <p className="text-xl font-semibold text-stone-300">
              Check your email for account activation
            </p>
            <Button
              className="mt-4 w-fit bg-amber-400 font-bold hover:bg-amber-500"
              onClick={() => router.push("/")}
            >
              Back to home
            </Button>
          </div>
        </div>
      </div>
    </BackgroundLines>
  );
};
export default RegisterSuccessPage;
