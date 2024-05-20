"use client";

import { newVerification } from "@/actions/new-verification";
import { CardWrapper } from "@/components/auth/card-wrapper";
import { FormError } from "@/components/auth/form-error";
import { FormSuccess } from "@/components/auth/form-success";
import { useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Token inválido.");
      return;
    }

    newVerification(token as string)
      .then((data) => {
        if (data) {
          setError(data.error);
          setSuccess(data.success);
          return;
        }
      })
      .catch(() => {
        setError("Erro ao confirmar o email. Tente novamente mais tarde.");
      });
  }, [token, error, success]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <CardWrapper
      headerLabel="Confirmação de email"
      backButtonHref="/auth/login"
      backButtonLabel="Voltar para o login"
    >
      <div className="flex items-center w-full justify-center">
        {!error && !success && <BeatLoader color="rgb(0, 0, 0, .5)" />}
        <FormSuccess message={success} />
        {!success && error && <FormError message={error} />}
      </div>
    </CardWrapper>
  );
};
