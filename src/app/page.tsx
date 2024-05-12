import { Poppins } from "next/font/google";
import { PiLockKeyDuotone } from "react-icons/pi";

import LoginButton from "@/src/components/auth/login-button";
import { Button } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400  to-blue-900">
      <div className="space-y-6 text-center">
        <h1
          className={`${cn(
            poppins.className
          )} flex  flex-row justify-center text-6xl font-semibold text-white  drop-shadow-md text-center gap-2`}
        >
          <PiLockKeyDuotone className="inline" />
          Auth
        </h1>
        <p className="text-lg text-white">Um simples serviço de autenticação</p>
        <div>
          <LoginButton>
            <Button variant="secondary" size={"lg"}>
              Entrar
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
