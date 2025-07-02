"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { NavigationMenuDemo } from "@/components/navigation-menu";
import { ServiceCard } from "@/components/serviceCard";
import Footer from "@/components/footer";

const services = [
	{
		title: "Consultas de Obstetrícia",
		description:
			"Acompanhamento médico da gravidez com enfoque no bem-estar da mãe e do bebê, desde a conceção ao pós-parto.",
		img: "/imageService/consultaObstetricia.png",
		className: "bg-[#042553] text-[#f0b0a8]",
	},
	{
		title: "Consultas de Ginecologia",
		description:
			"Avaliação, rastreio e tratamento de patologias ginecológicas com atenção à saúde reprodutiva e qualidade de vida da mulher.",
		img: "/imageService/consultaGinecologica.png",
		className: "bg-[#f0b0a8] text-[#042553]",
	},
	{
		title: "Ecografias Obstétricas",
		description: "1º, 2º e 3º Trimestres, Morfológicas, Precoces e 3D.",
		img: "/imageService/ecografiaObstetricia.png",
		className: "bg-[#042553] text-[#f0b0a8]",
	},
	{
		title: "Ecografias Ginecológicas",
		description: "Avaliação detalhada do aparelho reprodutor feminino.",
		img: "/imageService/ecografiaGinecologica.png",
		className: "bg-[#f0b0a8] text-[#042553]",
	},
	{
		title: "Dispositivos Intra-Uterinos",
		description: "Introdução e remoção de DIU com acompanhamento especializado.",
		img: "/imageService/DIU.png",
		className: "bg-[#042553] text-[#f0b0a8]",
	},
	{
		title: "Colposcopia",
		description: "Exame detalhado do colo do útero para diagnóstico precoce.",
		img: "/imageService/colposcopia.png",
		className: "bg-[#f0b0a8] text-[#042553]",
	},
];

export default function ClinicalService() {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: { perView: 1, spacing: 12 },
		breakpoints: {
			"(min-width: 768px)": { slides: { perView: 2, spacing: 5 } },
			"(min-width: 1024px)": { slides: { perView: 3, spacing: 5 } },
			"(min-width: 1280px)": { slides: { perView: 4, spacing: 5 } },
		},
	});

	return (
		<div className="min-h-screen flex flex-col bg-[#fde4e1]">
			{/* Topo com logo e menu */}
			<NavigationMenuDemo />
			<div className="mt-8 mb-2 px-10">
				<h1 className="text-4xl md:text-6xl font-bold text-[#042553]">
					Os nossos serviços
				</h1>
				<h2 className="text-xl md:text-2xl text-[#042553]">
					Cada serviço é pensado para responder às necessidades específicas da
					saúde da mulher
				</h2>
			</div>
			{/* Centraliza o carrossel verticalmente */}
			<main className="flex-1 flex items-center justify-center mt-10 mb-8">
				<div className="relative px-4 w-full flex flex-col items-center">
					<div ref={sliderRef} className="keen-slider">
						{services.map((service, i) => (
							<div className="keen-slider__slide flex justify-center" key={i}>
								<ServiceCard {...service} />
							</div>
						))}
					</div>
					{/* Botões de navegação */}
					<div className="flex justify-center gap-4 mt-6">
						<button
							className="bg-[#ffbdb7] hover:bg-[#ff8e83] text-[#042553] rounded-full p-2"
							onClick={() => instanceRef.current?.prev()}
							aria-label="Anterior"
						>
							&#8592;
						</button>
						<button
							className="bg-[#ffbdb7] hover:bg-[#ff8e83] text-[#042553] rounded-full p-2"
							onClick={() => instanceRef.current?.next()}
							aria-label="Próximo"
						>
							&#8594;
						</button>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}