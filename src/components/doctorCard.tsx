// components/DoctorCard.tsx
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface DoctorCardProps {
  name: string;
  specialty: string;
  description: string;
  image: string;
  className?: string;
}

export function DoctorCard({ name, specialty, description, image, className }: DoctorCardProps) {
  return (
    <Card className={`rounded-3xl p- flex flex-col items-center text-center ${className}`}>
      <div className="mb-2">
        <Image
          src={image}
          alt={`Foto da ${name}`}
          width={200}
          height={200}
          className="rounded-full object-cover border-4 shadow-lg"
          style={{ width: "200px", height: "200px" }}
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-lg font-medium">{name}</h3>
        <p className="mt-1 text-sm font-medium">{specialty}</p>
        <p className="mt-2 text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
