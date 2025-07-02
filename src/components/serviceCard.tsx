import Image from "next/image";

interface ServiceCardProps {
  title: string;
  description: string;
  img: string;
  className?: string;
}

export function ServiceCard({ title, description, img, className }: ServiceCardProps) {
  return (
    <div className={`w-[270px] md:w-[300px] rounded-3xl shadow-none border-0 ${className} flex flex-col items-center py-8`}>
      <Image
        src={img}
        alt={title}
        width={110}
        height={110}
        className="mb-4 object-contain"
      />
      <div className="text-center">
        <div className="font-bold text-lg md:text-xl mb-2">{title}</div>
        <div className="text-base opacity-90">{description}</div>
      </div>
    </div>
  );
}