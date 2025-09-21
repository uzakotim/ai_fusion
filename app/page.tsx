"use client"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function Home() {
  const {setTheme} = useTheme();
  return (
   <div>
    <h2>Home</h2>
    <Button >Button</Button>
    <Button onClick={() => setTheme("light")}>Light</Button>
    <Button onClick={() => setTheme("dark")}>Dark</Button>
   </div> 
  );
}
