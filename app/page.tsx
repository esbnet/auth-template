import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    console.log("Hello");
  }, []);
  return <Button size="lg">Hello</Button>;
}
