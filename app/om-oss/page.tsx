// app/page.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, Battery, Sun, Wrench, Users, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Luminos Energi AB
          </h1>
          <p className="text-xl opacity-90">
            Formar framtidens hållbara energilösningar
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Om Oss Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Om Oss</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-700">
                Luminos Energi AB, grundades år 2022 av Christian von Koch och
                är en passionerad aktör inom den hållbara energibranschen. Med
                huvudkontor i Stockholm och en dedikerad personal om sex
                personer (oktober 2024) strävar vi efter att vara föregångare
                inom förnybar energi och bidra till en grönare framtid för
                kommande generationer.
              </p>
            </div>
            <Card>
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
          <h2 className="text-3xl font-bold mb-6">
            Våra Produkter och Tjänster
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sun className="h-6 w-6 text-amber-400" />
                  Solpanelsanläggningar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Vi levererar solpanelsanläggningar på både mark och tak över
                  hela Sverige.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Battery className="h-6 w-6 text-amber-400" />
                  Batterilösningar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Nyckelfärdiga batterilösningar för lagring och stödtjänster
                  mot Svenska Kraftnät.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-6 w-6 text-amber-400" />
                  Takomläggningar
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Professionell takomläggning inför solpanelsinstallationer.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Service och Underhåll */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Serviceavtal</h2>
          <Card>
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
          <h2 className="text-3xl font-bold mb-6">Varför Luminos Energi?</h2>
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
              <Card key={index}>
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
          <h2 className="text-3xl font-bold mb-6">Kontakta Oss</h2>
          <p className="text-xl text-gray-700 mb-4">
            Forma en hållbar energiframtid för ditt företag med Luminos Energi
          </p>
          <div className="flex justify-center">
            <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full transition-colors">
              <Phone className="h-6 w-6 text-white" />
              Kontakta oss idag
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}
