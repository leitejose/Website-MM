import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = ({
  clinicName = "MM Medicina da Mulher",
  description = "",
  address = {
    street: "Edifício Cruzeiro - Av. Calouste Gulbenkian, nº 4 - 1º Andar, Sala 14",
    city: "Coimbra, Portugal",
    zip: "CEP 3000-090",
  },
  contact = {
    phone: "(00) 1234-5678",
    whatsapp: "(00) 91234-5678",
    email: "contato@clinicasaude.com",
  },
  schedule = {
    weekdays: "Seg à Sex: 08h – 18h",
    saturday: "Sábados: 08h – 12h",
    sunday: "Domingos: Fechado",
  },
  social = {
    instagram: "https://www.instagram.com/medicinadamulher.pt/",
    facebook: "https://www.facebook.com/medicinadamulher.pt/",
    linkedin: "https://www.linkedin.com/", // coloque o link real se tiver
  },
}) => {
  return (
    <footer className="bg-[#ffbdb7] text-gray-700 px-6 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Sobre */}
        <div>
          <h2 className="text-xl font-semibold mb-4">{clinicName}</h2>
          <p className="text-sm">{description}</p>
          <p className="text-sm mt-2">
            {address.street}<br />
            {address.city}<br />
            {address.zip}
          </p>
        </div>

        {/* Contato */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contato</h3>
          <ul className="text-sm space-y-1">
            <li>Telefone: {contact.phone}</li>
            <li>WhatsApp: {contact.whatsapp}</li>
            <li>Email: {contact.email}</li>
          </ul>
        </div>

        {/* Horários */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Horário de Atendimento</h3>
          <ul className="text-sm space-y-1">
            <li>{schedule.weekdays}</li>
            <li>{schedule.saturday}</li>
            <li>{schedule.sunday}</li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div className="flex flex-col items-center">
          <h3 className="text-lg text-[#042553] font-semibold mb-3">Mídias Sociais</h3>
          <div className="flex space-x-4 text-[#042553] text-xl">
            <a href={social.instagram} aria-label="Instagram"><FaInstagram /></a>
            <a href={social.facebook} aria-label="Facebook"><FaFacebookF /></a>
            <a href={social.linkedin} aria-label="LinkedIn"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} {clinicName}. Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
