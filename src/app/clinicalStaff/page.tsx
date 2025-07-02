"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { NavigationMenuDemo } from "@/components/navigation-menu";

import { DoctorCard } from "@/components/doctorCard";
import Footer from "@/components/footer"; // <-- Adicione este import


const doctors = [
	{
		name: "Dr. Fernando Loureiro",
		specialty: "Ginecologia e Obstetrícia",
		description: "Gravidez de risco, menopausa, contracepção",
		image: "/clinicalStaff/drloureiro.png",
		className: "bg-[#042553] text-[#f0b0a8]",
	},
	{
		name: "Dra. Maria do Céu Almeida",
		specialty: "Ginecologia e Obstetrícia",
		description: "Gravidez de risco, menopausa, contracepção",
		image: "/clinicalStaff/dramariadoceu.png",
		className: "bg-[#ffbdb7] text-[#042553]",
	},
	{
		name: "Dr. Carlos Barata",
		specialty: "Ginecologia e Obstetrícia",
		description: "Gravidez de risco, menopausa, contracepção",
		image: "/clinicalStaff/drbarata.png",
		className: "bg-[#042553] text-[#ffbdb7]",
	},
	{
		name: "Dra. Joana Mesquita",
		specialty: "Pediatria",
		description: "Cuidados infantis, desenvolvimento infantil, nutrição pediátrica",
		image: "/clinicalStaff/drajoana.png",
		className: "bg-[#ffbdb7] text-[#042553]",
	},
	{
		name: "Dr. Luís Matos",
		specialty: "Ginecologia e Obstetrícia",
		description: "Gravidez de risco, menopausa, contracepção",
		image: "/clinicalStaff/draana.png",
		className: "bg-[#042553] text-[#ffbdb7]",
	},
	{
		name: "Dr. Paulo Aldinhas Santos",
		specialty: "Ginecologia e Obstetrícia",
		description: "Gravidez de risco, menopausa, contracepção",
		image: "/clinicalStaff/draana.png",
		className: "bg-[#ffbdb7] text-[#042553]",
	},
];

export default function CorpoClinico() {
	const [sliderRef, instanceRef] = useKeenSlider({
		slides: { perView: 1, spacing: 12 },
		breakpoints: {
			"(min-width: 768px)": { slides: { perView: 2, spacing: 5 } },
			"(min-width: 1024px)": { slides: { perView: 3, spacing: 5 } },
			"(min-width: 1280px)": { slides: { perView: 4, spacing: 10 } },
		},
	});

	return (
		<div className="min-h-screen bg-[#fde4e1] flex flex-col">
			{/* Topo com logo e menu */}
			<NavigationMenuDemo />
			<div className="mt-8 mb-2 px-10">
				<h1 className="text-4xl md:text-6xl font-bold text-[#042553]">
					Corpo Clínico
				</h1>
				<h2 className="text-xl md:text-2xl text-[#042553]">
					Conheça os especialistas que cuidam da sua saúde com dedicação e
					excelência.
				</h2>
			</div>
			{/* Carrossel de staff */}
			<div className="flex flex-1 items-center justify-center mt-8 min-h-[400px]">
				<div className="relative px-4 w-full flex flex-col items-center">
					<div ref={sliderRef} className="keen-slider">
						{doctors.map((doc, i) => (
							<div className="keen-slider__slide flex justify-center" key={i}>
								<DoctorCard {...doc} />
							</div>
						))}
					</div>
					{/* Botões de navegação */}
					<div className="flex justify-center gap-4 mt-2 mb-56">
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
			
			</div>
			<Footer /> {/* <-- Adicione o Footer aqui */}
		</div>
	);
}
