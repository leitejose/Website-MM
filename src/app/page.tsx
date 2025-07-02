"use client";
import { NavigationMenuDemo } from "@/components/navigation-menu";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Phone } from "lucide-react";


export default function Home() {
  return (
    <div
      className="flex flex-col min-h-screen z-10 relative bg-none lg:bg-[url('/mulher-gravida-home.png')] "
      style={{
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right ",
        backgroundSize: "auto 100vh",
      }}
    >
      {/* Navigation bar com logo + menu responsivo */}
      <NavigationMenuDemo />

      <main className="flex flex-1 items-center justify-center px-4 h-full">
        <div className="max-w-3xl w-full text-center mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-[#ffbdb7]">
            Há mais de{" "}
            <span className="text-[#042553] font-extrabold">25 anos</span> dedicados à saúde da mulher.
          </h1>
          <p className="mt-4 text-[#042553] text-lg">
            Experiência, confiança e cuidado centrado em si.
          </p>
          <div className="mt-6 flex justify-center w-full">
            <Button className="bg-[#ffbdb7] hover:bg-[#ff8e83] text-[#042553] font-semibold text-base px-6 py-3 rounded-full">
              <Phone className="mr-2 h-5 w-5" />
              Agendar Consulta
            </Button>
          </div>
          <div className="mt-6 flex justify-center gap-4 w-full text-[#ffbdb7]">
            <a
              href="https://www.instagram.com/medicinadamulher.pt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="h-6 w-6 cursor-pointer hover:text-[#ff8e83]" />
            </a>
            <a
              href="https://www.instagram.com/medicinadamulher.pt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="h-6 w-6 cursor-pointer hover:text-[#ff8e83]" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
