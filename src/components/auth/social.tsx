"use client";

import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../ui/button";

export const Social = () => {
  return (
    <div className="flex w-full items-center gap-x-2">
      <Button
        variant="outline"
        size="lg"
        className="w-1/2"
        onClick={() => console.log("Google")}
      >
        <FcGoogle className="h-5 w-5" />
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="w-1/2"
        onClick={() => console.log("Google")}
      >
        <FaGithub className="h-5 w-5" />
      </Button>
    </div>
  );
};
