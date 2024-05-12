import { cn } from "@/src/lib/utils";
import { Poppins } from "next/font/google";
import { PiLockKeyDuotone } from "react-icons/pi";
const font = Poppins({ subsets: ["latin"], weight: ["600"] });

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="flex w-full flex-col gap-y-4 items-center justify-between">
      <h1 className={cn("text-3xl font-semibold", font.className)}>
        <PiLockKeyDuotone className="inline" />
        Auth
      </h1>
      <p className="text-mute-foreground text-sm">{label}</p>
    </div>
  );
};
