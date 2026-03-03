"use client"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import Header from "@/components/header"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Header/>
      <main className="mx-auto  px-6 py-0.5 mt-0">
    <InputGroup className="max-w-screen">
      <InputGroupInput placeholder="Search..." className="text-[#3a77ff]"/>
      <InputGroupAddon align="inline-end"><Search className="text-[#3a77ff]"/></InputGroupAddon>
    </InputGroup>
  </main>

    </div>
  );

}
