import CardWrapper from "@/src/components/auth/card-wrapper";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <CardWrapper
      headerLabel="Opa! Algo deu errado!"
      backButtonHref="/auth/login"
      backButtonLabel="Voltar para o login"
    >
      <div className="flex justify-center items-center text-destructive w-full">
        <ExclamationTriangleIcon className="h-12 w-12 text-destructive" />
      </div>
    </CardWrapper>
  );
};
