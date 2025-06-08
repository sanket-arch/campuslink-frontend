"use client";
import { ModeToggle } from "@/components/common/ModeToggle";
import { Button } from "@/components/ui/button";


export default function Home() {
  return (
    <div className="text-center">
      <h1 className="font-extrabold">Welcome to Campus Link</h1>
      <Button className="mt-4" onClick={() => alert("Button Clicked!")}>Click Me</Button>
      <ModeToggle/>
    </div>
  );
}
