import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Button>FSW</Button>
      <Input type="text" placeholder="Enter your name" />
    </div>

  );
}
