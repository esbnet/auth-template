"use client";

import { useState, useTransition } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useForm } from "react-hook-form";

import CardWrapper from "@/src/components/auth/card-wrapper";
import { FormError } from "@/src/components/auth/form-error";
import { FormSuccess } from "@/src/components/auth/form-success";
import { Button } from "@/src/components/ui/button";

import { ImSpinner3 } from "react-icons/im";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/src/components/ui/form";
import { Input } from "@/src/components/ui/input";

import { login } from "@/src/actions/login";
import { LoginSchema } from "@/src/schemas";

export const LoginForm = () => {
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");

    startTransition(async () => {
      login(values).then((data) => {
        console.log("***** DADOS :", data);
        if (data?.error !== undefined) {
          setError(data?.error as string);
        } else if (data?.success !== undefined) {
          setSuccess(data?.success as string);
        }
      });
    });
  };

  return (
    <CardWrapper
      headerLabel="Bem vindo!"
      backButtonLabel="Não tem uma conta?"
      backButtonHref="/auth/register"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="email"
                      placeholder="john.doe@exemple.com"
                      className="input-bordered input w-full"
                    />
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
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      type="password"
                      placeholder="******"
                      className="input-bordered input w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormError message={error} />
          <FormSuccess message={success} />

          <Button disabled={isPending} type="submit" className="w-full">
            {isPending ? <ImSpinner3 className="animate-spin" /> : "Entrar"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
