"use client";

import { useEffect } from "react";
import { Building2, Zap, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  power: string;
  location: string;
  panels?: string;
  type: "Solcellsanläggning" | "Batterilager";
  image: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  subtitle,
  power,
  location,
  panels,
  type,
  image,
}) => (
  <div className="bg-white rounded-lg border p-6 mb-2">
    <div className="flex items-center mb-2">
      <Building2 className="w-6 h-6 text-yellow-500 mr-2" />
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4">{subtitle}</p>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div className="flex items-center">
        <Zap className="w-5 h-5 text-yellow-500 mr-2" />
        <span>{power}</span>
      </div>
      <div className="flex items-center">
        <MapPin className="w-5 h-5 text-yellow-500 mr-2" />
        <span>{location}</span>
      </div>
      {panels && (
        <div className="flex items-center col-span-2">
          <Calendar className="w-5 h-5 text-yellow-500 mr-2" />
          <span>{panels}</span>
        </div>
      )}
    </div>
    <div className="flex space-x-2 mb-4">
      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
        {type}
      </span>
    </div>
    <div className="relative w-full h-[200px]">
      <Image
        src={image}
        alt={`Project image for ${title}`}
        fill
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
      type: "Batterilager",
      image: "/images/projects/ref4.jpeg",
    },
    {
      title: "Fordonskoncern",
      subtitle: "Batterilager för fordonsindustri",
      power: "200 kW",
      location: "Växjö",
      type: "Batterilager",
      image: "/images/projects/ref2.jpeg",
    },
    {
      title: "Industriföretag",
      subtitle: "Batterilager för industriföretag",
      power: "100 kW",
      location: "Östhammar",
      type: "Batterilager",
      image: "/images/projects/ref7.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      <div>
        <section
          className="text-center mb-16 bg-cover bg-center py-20 px-6 h-[400px] flex items-center justify-center flex-col"
          style={{ backgroundImage: "url('/images/solar-panel.jpg')" }}
        >
          <h2
            data-aos="fade-down"
            className="text-4xl font-semibold text-white mb-4 max-w-4xl"
          >
            ETT URVAL AV LUMINOS ENERGIS SLUTFÖRDA PROJEKT
          </h2>
          <p data-aos="fade-down" className="text-2xl font-medium text-white">
            Våra Referensprojekt
          </p>
        </section>

        <div className="container mx-auto p-8">
          <p className="text-gray-700 mb-8" data-aos="fade-up">
            Luminos Energi har stor erfarenhet av olika typer av projekt
            innefattande solceller och batterilager. Nedan följer ett axplock av
            våra slutförda projekt.
          </p>

          <div className="grid md:grid-cols-3 gap-4">
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
