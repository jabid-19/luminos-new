"use client";

import { useEffect } from "react";
import { Building2, Zap, MapPin, GalleryVertical, Clock } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  power: string;
  location: string;
  panels?: string;
  capacity?: string;
  type: "Solcellsanläggning" | "Batterilager";
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  power,
  location,
  panels,
  capacity,
  type,
  image,
}) => (
  <div className="bg-white rounded-lg border p-4 sm:p-6 mb-2 w-full">
    <div className="flex items-center mb-2">
      <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500 mr-2" />
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 text-sm sm:text-base">{subtitle}</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
      <div className="flex items-center">
        <span className="flex items-center font-normal gap-1 mr-2 text-yellow-500 text-sm sm:text-base">
          <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
          Effekt
        </span>
        <span className="text-sm sm:text-base">{power}</span>
      </div>
      <div className="flex items-center">
        <span className="flex items-center font-normal gap-1 mr-2 text-yellow-500 text-sm sm:text-base">
          <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
          Plats
        </span>
        <span className="text-sm sm:text-base">{location}</span>
      </div>
      {panels && (
        <div className="flex items-center col-span-1 sm:col-span-2">
          <span className="flex items-center font-normal gap-1 mr-2 text-yellow-500 text-sm sm:text-base">
            <GalleryVertical className="w-4 h-4 sm:w-5 sm:h-5" />
            Antal paneler
          </span>
          <span className="text-sm sm:text-base">{panels}</span>
        </div>
      )}
      {capacity && (
        <div className="flex items-center col-span-1 sm:col-span-2">
          <span className="flex items-center font-normal gap-1 mr-2 text-yellow-500 text-sm sm:text-base">
            <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            Kapacitet
          </span>
          <span className="text-sm sm:text-base">{capacity}</span>
        </div>
      )}
    </div>
    <div className="flex space-x-2 mb-4">
      <span className="bg-blue-100 text-blue-800 text-xs font-normal px-2.5 py-0.5 rounded">
        {type}
      </span>
    </div>
    <div className="relative w-full aspect-[4/3]">
      <Image
        src={image}
        alt={`Project image for ${title}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        style={{ objectFit: "cover" }}
        className="rounded"
      />
    </div>
  </div>
);

export default function CompletedProjects() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects: ProjectCardProps[] = [
    {
      title: "Fordonskoncern",
      subtitle: "Solcellsanläggning för fordonsindustri",
      power: "420 kWp",
      location: "Växjö",
      panels: "724 st.",
      type: "Solcellsanläggning",
      image: "/images/projects/ref1.jpg",
    },
    {
      title: "Fastighetsbolag",
      subtitle: "Solcellsanläggning för fastighetsbolag",
      power: "493 kWp",
      location: "Eslöv",
      panels: "850 st.",
      type: "Solcellsanläggning",
      image: "/images/projects/ref3.jpg",
    },
    {
      title: "Industrikoncern",
      subtitle: "Solcellsanläggning för industri",
      power: "252 kWp",
      location: "Norrköping",
      panels: "441 st.",
      type: "Solcellsanläggning",
      image: "/images/projects/ref5.jpg",
    },
    {
      title: "Industriföretag",
      subtitle: "Batterilager för industriföretag",
      power: "200 kW",
      location: "Tierp",
      capacity: "200 kWh",
      type: "Batterilager",
      image: "/images/projects/ref7.jpg",
    },
    {
      title: "Fordonskoncern",
      subtitle: "Batterilager för fordonsindustri",
      power: "200 kW",
      location: "Växjö",
      capacity: "200 kWh",
      type: "Batterilager",
      image: "/images/projects/ref2.jpeg",
    },
    {
      title: "Industriföretag",
      subtitle: "Batterilager för industriföretag",
      power: "100 kW",
      location: "Östhammar",
      capacity: "100 kWh",
      type: "Batterilager",
      image: "/images/projects/ref4.jpeg",
    },
    {
      title: "Gummiindustri",
      subtitle: "Batterilager för metallindustri",
      power: "300 kW",
      location: "Örebro",
      capacity: "696 kWh",
      type: "Batterilager",
      image: "/images/projects/ref8.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <div>
        <section
          className="text-center mb-8 sm:mb-16 bg-cover bg-center py-12 sm:py-20 px-4 sm:px-6 h-[300px] sm:h-[400px] flex items-center justify-center flex-col"
          style={{ backgroundImage: "url('/images/solar3.jpg')" }}
        >
          <h2
            data-aos="fade-down"
            className="text-2xl sm:text-4xl font-normal text-white mb-4 max-w-4xl"
          >
            ETT URVAL AV LUMINOS ENERGIS SLUTFÖRDA PROJEKT
          </h2>
          <p
            data-aos="fade-down"
            className="text-xl sm:text-2xl font-medium text-white"
          >
            Våra referensprojekt
          </p>
        </section>

        <div className="container mx-auto px-4 sm:px-8">
          <p className="mb-8 text-sm sm:text-base" data-aos="fade-up">
            Luminos Energi har stor erfarenhet av olika typer av projekt
            innefattande solceller och batterilager. Nedan följer ett axplock av
            våra slutförda projekt.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
