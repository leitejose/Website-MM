import { NavigationMenuDemo } from "@/components/navigation-menu";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook } from "lucide-react";
import Footer from "@/components/footer";

export default function Contact() {
  return (
    <div className="min-h-screen bg-[#fde4e1]">
      {/* Topo com logo e menu */}
      <NavigationMenuDemo />
      {/* Título */}
      <div className="mt-8 mb-2 px-10">
        <h1 className="text-4xl md:text-5xl font-bold text-[#042553]">
          Contacto
        </h1>
        <h2 className="text-xl md:text-2xltext-[#042553] mt-2">
          Estamos à sua disposição para esclarecer dúvidas ou agendar consultas. Fale conosco.
        </h2>
      </div>

      {/* Formulário e mapa */}
      <div className="flex flex-col justify-center md:flex-row gap-8 mt-8 px-8 mb-20  
      ">
        {/* Formulário */}
        <div className="bg-[#ffbdb7] rounded-2xl p-8 flex-1 min-w-[320px] max-w-[900px]">
          <h2 className="text-3xl font-bold text-[#042553] mb-2">Tem alguma dúvida?</h2>
          <div className="font-semibold text-lg text-[#042553] mb-6">Envie-nos uma mensagem:</div>
          <form className="flex flex-col gap-4">
            <label className="text-[#042553] font-semibold">Assunto:
              <Input className="mt-1 rounded-full bg-[#fde4e1] border-none" type="text" />
            </label>
            <label className="text-[#042553] font-semibold">Nome:
              <Input className="mt-1 rounded-full bg-[#fde4e1] border-none" type="text" />
            </label>
            <label className="text-[#042553] font-semibold">Telemóvel:
              <Input className="mt-1 rounded-full bg-[#fde4e1] border-none" type="text" />
            </label>
            <label className="text-[#042553] font-semibold">E-mail:
              <Input className="mt-1 rounded-full bg-[#fde4e1] border-none" type="email" />
            </label>
            <label className="text-[#042553] font-semibold">Mensagem:
              <div className="relative">
                <Textarea
                  className="mt-1 rounded-2xl bg-[#fde4e1] border-none min-h-[100px] pr-12"
                  rows={4}
                />
                <button
                  type="submit"
                  className="absolute bottom-4 right-4 bg-[#042553] hover:bg-[#29406e] text-[#ffbdb7] rounded-full p-3 flex items-center justify-center"
                >
                  <ArrowRight className="w-6 h-6" />
                </button>
              </div>
            </label>
          </form>
        </div>
        
        {/* Informações de contacto e Mapa */}
        <div className="flex-col items-center rounded-2xl flex-1 min-w-[320px] max-w-[900px]">
            {/* Informações de contacto */}
       <div className="bg-[#ffbdb7]  mb-4 px-8 py-6 flex-1 flex-col md:flex-row items-center justify-between gap-6 rounded-2xl">
        <div className="flex items-center gap-2 text-[#042553]">
          <MapPin className="w-6 h-6" />
          <span>
            Edifício Cruzeiro<br />
            Av. Calouste Gulbenkian, nº 4 - 1º Andar, Sala 14<br />
            3000-090 Coimbra
          </span>
        </div>
        <div className="flex items-center gap-2 text-[#042553]">
          <Mail className="w-6 h-6" />
          <span>geral@medicinadamulher.pt</span>
        </div>
        <div className="flex items-center gap-2 text-[#042553]">
          <Phone className="w-6 h-6" />
          <span>+351 239841100</span>
        </div>
        <div className="flex flex-col items-center text-[#042553]">
          <span className="font-semibold">Mídias Sociais</span>
          <div className="flex gap-2 mt-1">
            <a
              href="https://www.instagram.com/medicinadamulher.pt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 cursor-pointer hover:text-[#ff8e83]" />
            </a>
            <a
              href="https://www.facebook.com/medicinadamulher.pt/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6 cursor-pointer hover:text-[#ff8e83]" />
            </a>
          </div>
        </div>
      </div>
      {/*Mapa}*/}
        <div className="flex-1  min-w-[320px] max-w-[1800px] rounded-2xl overflow-hidden">
          <iframe
            title="Mapa"
            src="https://www.google.com/maps?q=Av.+Largo+Cruz+de+Celas,+nº+4,+Coimbra,+Portugal&output=embed"
            className="w-full h-full min-h-[400px] max-w-[900px] clex«« rounded-2xl border-none"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        </div>
      </div>

     
      
      <Footer />
    </div>
  );
}