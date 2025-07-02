import Footer from "@/components/footer";
import { NavigationMenuDemo } from "@/components/navigation-menu";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fde4e1] lg:flex-wrap">
      {/* Topo com logo e menu */}
      <NavigationMenuDemo />

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col items-start  px-4 py-5">
        {/* Título e subtítulo centralizados */}
        <div className="flex flex-col mx-auto max-w-4xl w-full ">
          <h1 className="text-4xl md:text-6xl font-bold text-[#042553] ">
            A Medicina da Mulher
          </h1>
          <h2 className="text-2xl md:text-1xl text-[#042553] ">
            Cuidamos da saúde feminina com dedicação e excelência desde 1997
          </h2>
        </div>

        {/* Imagem e texto centralizados e maiores */}
        <div className="flex flex-wrap items-center justify-center gap-5 w-full mt-10 lg:mt-20 lg:mb-45">
          {/* Imagem principal maior */}
          <div className="relative">
            <Image
              src="/imageabout.png"
              alt="Ecografia"
              width={700}
              height={700}
              className="rounded-lg object-cover"
            />
          </div>
          {/* Texto maior */}
          <div className="max-w-2xl text-[#042553] text-lg md:text-xl leading-relaxed text-justify flex justify-center flex-col">
            <p className="mb-8">
              Desde 1997, a MM Medicina da Mulher dedica-se exclusivamente ao
              cuidado da saúde feminina, oferecendo um espaço seguro, acolhedor e
              especializado para as mulheres de Coimbra e região.
              <br />
              <br />
              Com uma abordagem centrada na pessoa, integramos conhecimento
              médico, experiência clínica e empatia para responder às
              necessidades ginecológicas e obstétricas das nossas utentes. A
              nossa equipa é composta por médicos especialistas com sólida
              formação e compromisso com um atendimento ético, atualizado e
              humano.
            </p>
            <div className="flex justify-center w-full">
              <Button className="bg-[#ffbdb7] hover:bg-[#ff8e83] text-blue-900 font-semibold text-base px-6 py-3 rounded-full">
                <Phone className="h-5 w-5" />
                Agendar Consulta
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}