"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Shield, Lock, Eye, RefreshCw, Users, FileCheck } from "lucide-react";

export default function PrivacyPage() {
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
      <div className="text-yellow-800 bg-gradient-to-b from-amber-500 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-4" data-aos="fade-right">
            <Shield className="h-8 w-8" />
            <h1 className="text-4xl font-bold">Säkerhet och Sekretess</h1>
          </div>
          <p
            className="text-xl opacity-90 max-w-3xl"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            På Luminos Energi AB värdesätter vi säkerheten och sekretessen för
            våra kunders information.
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Introduction Alert */}
        <Alert className="mb-12 border-blue-200 bg-blue-50" data-aos="fade-up">
          <Shield className="h-4 w-4" />
          <AlertTitle>GDPR-Compliance och Kundregisteransvar</AlertTitle>
          <AlertDescription>
            Vi är dedikerade till att aktivt arbeta med GDPR-frågor för att
            säkerställa att all behandling av personuppgifter uppfyller de
            högsta standarderna för integritet och lagstiftning.
          </AlertDescription>
        </Alert>

        {/* Main Content */}
        <div className="space-y-12">
          {/* Våra Åtaganden Section */}
          <section>
            <h2
              className="text-3xl font-bold mb-6 flex items-center gap-2"
              data-aos="fade-right"
            >
              <FileCheck className="h-8 w-8 text-yellow-500" />
              Våra Åtaganden
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card
                className="shadow-none"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Lock className="h-5 w-5 text-yellow-500" />
                    GDPR-Compliance
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Vi har implementerat omfattande åtgärder för att säkerställa
                    efterlevnad av GDPR (General Data Protection Regulation).
                    Detta innebär att varje steg i hanteringen av
                    personuppgifter sker i enlighet med de regler och
                    bestämmelser som fastställts av EU, för att skydda dina
                    rättigheter och din integritet.
                  </p>
                </CardContent>
              </Card>

              <Card
                className="shadow-none"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-yellow-500" />
                    Ansvarsfull Hantering av Kundregister
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    Utöver att uppfylla lagstadgade krav, strävar vi efter att
                    säkerställa en hög standard inom kund- och registervård.
                    Detta innefattar säkra och effektiva system för insamling,
                    lagring och användning av kundinformation för att garantera
                    att dina uppgifter behandlas med största omsorg och respekt.
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Hur Vi Skyddar Section */}
          <section>
            <h2
              className="text-3xl font-bold mb-6 flex items-center gap-2"
              data-aos="fade-right"
            >
              <Shield className="h-8 w-8 text-yellow-500" />
              Hur Vi Skyddar Dina Uppgifter
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Lock,
                  title: "Säker Informationshantering",
                  content:
                    "Vi använder avancerade teknologiska plattformar och system för att skydda alla insamlade uppgifter från obehörig åtkomst, förlust och missbruk.",
                },
                {
                  icon: RefreshCw,
                  title: "Kontinuerlig Övervakning",
                  content:
                    "Vi genomför regelbundna revisioner och uppdateringar av våra säkerhetsprotokoll för att säkerställa att de är i linje med de senaste säkerhetsstandarderna.",
                },
                {
                  icon: Eye,
                  title: "Transparens",
                  content:
                    "Vi informerar och engagerar våra kunder om hur deras personuppgifter behandlas, och vi uppmuntrar öppen kommunikation för att upprätthålla en hög nivå av förtroende.",
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
                      <item.icon className="h-5 w-5 text-yellow-500" />
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

          {/* Contact Section */}
          <section
            className="mt-12 bg-gray-50 rounded-lg p-8"
            data-aos="fade-up"
          >
            <div className="text-center max-w-2xl mx-auto">
              <h2
                className="text-2xl font-bold mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                Har du frågor om vår dataskydd?
              </h2>
              <p
                className="text-gray-700 mb-6"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                På Luminos Energi AB är vi fast beslutna att våra kunder ska
                känna sig trygga med att deras personuppgifter hanteras på ett
                professionellt och ansvarsfullt sätt.
              </p>
              <button
                className="bg-primary rounded-full text-white px-6 py-3 hover:bg-yellow-700 transition-colors"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                Kontakta oss
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
