// import { useState } from "react";
import { HomeIcon } from "lucide-react";
// import Image from "/public/weather.png/sun.webp";
import { Container } from "../components/Container";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="flex h-screen w-screen">
        <div className="flex-1 bg-[#F3F4F6] flex items-center justify-center">
          <Container />
          {/* <HomeIcon /> */}
        </div>
        <div className="flex-1 bg-[#0F141E] flex items-center justify-center"></div>
      </div>
    </div>
  );
}
