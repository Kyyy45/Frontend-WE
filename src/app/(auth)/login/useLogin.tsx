"use client";

import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ILogin } from "@/types/Auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

const loginSchema = yup.object().shape({
  identifier: yup.string().required("Please enter your full email or username"),
  password: yup.string().required("Please enter your password"),
});

const useLogin = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      identifier: "",
      password: "",
    },
  });

  const loginService = async (payload: ILogin) => {
    const result = await signIn("credentials", {
      ...payload,
      redirect: false,
      callbackUrl,
    });
    if (!result?.ok) {
      // Jika login gagal, lempar error agar ditangkap oleh onError di useMutation
      throw new Error("email or username not match with your password");
    }
    // Jika berhasil, fungsi ini tidak perlu mengembalikan apa-apa.
    // `onSuccess` akan otomatis dijalankan
    return result;
  };

  const { mutate: mutateLogin, isPending: isPendingLogin } = useMutation({
    mutationFn: loginService,
    onSuccess: () => {
      router.push(callbackUrl);
      reset();
    },
    onError(error) {
      setError("root", {
        message: error.message,
      });
    },
  });

  const handleLogin = (data: ILogin) => mutateLogin(data);

  return {
    isVisible,
    toggleVisibility,
    control,
    handleSubmit,
    handleLogin,
    isPendingLogin,
    errors,
  };
};

export default useLogin;
