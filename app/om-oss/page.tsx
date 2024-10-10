"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Battery, Sun, Wrench, Users, Phone } from "lucide-react";

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="text-yellow-800 bg-gradient-to-b from-amber-500 to-white py-20">
        <div className="container mx-auto px-4">
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            data-aos="fade-down"
          >
            Luminos Energi AB
          </h1>
          <p
            className="text-xl opacity-90"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Formar framtidens hållbara energilösningar
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-20">
        {/* Om Oss Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Om Oss
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4" data-aos="fade-up">
              <p className="text-gray-700">
                Luminos Energi AB, grundades år 2022 av Christian von Koch och
                är en passionerad aktör inom den hållbara energibranschen. Med
                huvudkontor i Stockholm och en dedikerad personal om sex
                personer (oktober 2024) strävar vi efter att vara föregångare
                inom förnybar energi och bidra till en grönare framtid för
                kommande generationer.
              </p>
            </div>
            <Card
              className="shadow-none"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-6 w-6 text-amber-400" />
                  Vårt Team
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-1">
                  <li>Christian von Koch - Grundare</li>
                  <li>Gabriel Eriksson</li>
                  <li>Severin Martinov</li>
                  <li>Ola Hörnelius</li>
                  <li>Fredrik Johansson</li>
                  <li>Henrik Parksjö</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Produkter och Tjänster */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Våra Produkter och Tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Sun,
                title: "Solpanelsanläggningar",
                content:
                  "Vi levererar solpanelsanläggningar på både mark och tak över hela Sverige.",
              },
              {
                icon: Battery,
                title: "Batterilösningar",
                content:
                  "Nyckelfärdiga batterilösningar för lagring och stödtjänster mot Svenska Kraftnät.",
              },
              {
                icon: Building2,
                title: "Takomläggningar",
                content:
                  "Professionell takomläggning inför solpanelsinstallationer.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="shadow-none"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <item.icon className="h-6 w-6 text-amber-400" />
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Service och Underhåll */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Serviceavtal
          </h2>
          <Card className="shadow-none" data-aos="fade-up">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-6 w-6 text-amber-400" />
                Omfattande Servicelösningar
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Vi erbjuder serviceavtal för underhåll av solpanelsanläggningar
                och batterisystem. Hos Luminos strävar vi efter att skapa en
                komplett och långsiktig lösning för våra kunder.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Varför Luminos */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-right">
            Varför Luminos Energi?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Senaste teknologiska framstegen",
                description:
                  "Vi omfamnar de senaste teknologiska framstegen för att säkerställa att våra kunder har tillgång till de mest avancerade och effektiva solcellslösningarna.",
              },
              {
                title: "Anpassade Tillvägagångssätt",
                description:
                  "Vår expertis möjliggör skräddarsydda lösningar baserade på dina specifika behov och krav.",
              },
              {
                title: "Framtidsinriktad Vision",
                description:
                  "På Luminos Energi ser vi fram emot en grönare framtid och strävar efter att ligga i framkant av solcell och batteriteknikens utveckling.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="shadow-none"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Kontakt Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">
            Kontakta Oss
          </h2>
          <p
            className="text-xl text-gray-700 mb-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Forma en hållbar energiframtid för ditt företag med Luminos Energi
          </p>
          <div
            className="flex justify-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full transition-colors hover:bg-primary/90">
              <Phone className="h-6 w-6 text-white" />
              Kontakta oss idag
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
