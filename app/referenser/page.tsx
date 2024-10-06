import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Sun,
  Battery,
  Zap,
  BarChart,
  CalendarDays,
  MapPin,
} from "lucide-react";

// TypeScript interfaces
interface InstallationDetails {
  power: string;
  completion: string;
  location: string;
  savings: string;
}

interface Installation {
  name: string;
  description: string;
  details: InstallationDetails;
  tags: string[];
}

interface Installations {
  roof: Installation[];
  ground: Installation[];
}

interface StatsCardProps {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function ReferencesPage() {
  const installations: Installations = {
    roof: [
      {
        name: "Stockholms Kontorspark",
        description: "Takbaserad solpanelsanläggning för kontorsbyggnad",
        details: {
          power: "250 kW",
          completion: "2024",
          location: "Stockholm",
          savings: "30%",
        },
        tags: ["Solpaneler", "Batterilagring", "Kommersiellt"],
      },
      {
        name: "Industrihuset Väst",
        description: "Solpaneler på industritak med batterilagring",
        details: {
          power: "500 kW",
          completion: "2023",
          location: "Göteborg",
          savings: "40%",
        },
        tags: ["Industri", "Hybrid System", "Storskalig"],
      },
      {
        name: "Centrum Gallerian",
        description: "Integrerad solcellslösning för köpcentrum",
        details: {
          power: "300 kW",
          completion: "2024",
          location: "Malmö",
          savings: "35%",
        },
        tags: ["Retail", "Smart Styrning", "Integrerad"],
      },
      {
        name: "Logistik Hub Nord",
        description: "Högeffektiv solpanelsinstallation för logistikcenter",
        details: {
          power: "750 kW",
          completion: "2023",
          location: "Uppsala",
          savings: "45%",
        },
        tags: ["Logistik", "Maximal Effekt", "Automation"],
      },
    ],
    ground: [
      {
        name: "Solparken Syd",
        description: "Storskalig markbaserad solpark",
        details: {
          power: "2 MW",
          completion: "2024",
          location: "Skåne",
          savings: "60%",
        },
        tags: ["Utility Scale", "Smart Grid", "Förnybar"],
      },
      {
        name: "Lantbruk Öst",
        description: "Kombinerad sol- och batteripark för lantbruk",
        details: {
          power: "1.5 MW",
          completion: "2023",
          location: "Östergötland",
          savings: "50%",
        },
        tags: ["Agri-Solar", "Hybrid", "Självförsörjande"],
      },
    ],
  };

  const StatsCard: React.FC<StatsCardProps> = ({
    label,
    value,
    icon: Icon,
  }) => (
    <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-sm">
      <div className="p-2 bg-yellow-50 rounded-full">
        <Icon className="h-5 w-5 text-yellow-600" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <p className="font-medium text-gray-600">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-amber-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6 text-center">
            Våra Framgångsrika Projekt
          </h1>
          <p className="text-xl mb-12 text-center max-w-3xl mx-auto opacity-90">
            Upptäck hur vi transformerar Sveriges energilandskap genom
            innovativa solenergi- och batterilösningar
          </p>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <StatsCard
              label="Total Installerad Effekt"
              value="5+ MW"
              icon={Zap}
            />
            <StatsCard
              label="Genomförda Projekt"
              value="50+"
              icon={Building2}
            />
            <StatsCard label="Batterilösningar" value="20+" icon={Battery} />
            <StatsCard
              label="CO₂ Besparing/År"
              value="2000+ ton"
              icon={BarChart}
            />
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="roof" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger
              value="roof"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
            >
              <Building2 className="mr-2 h-4 w-4" />
              Takinstallationer
            </TabsTrigger>
            <TabsTrigger
              value="ground"
              className="data-[state=active]:bg-yellow-500 data-[state=active]:text-white"
            >
              <Sun className="mr-2 h-4 w-4" />
              Markinstallationer
            </TabsTrigger>
          </TabsList>

          {(
            Object.keys(installations) as Array<keyof typeof installations>
          ).map((type) => (
            <TabsContent key={type} value={type}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                {installations[type].map((installation, index) => (
                  <Card
                    key={index}
                    className="group hover:shadow-lg transition-shadow"
                  >
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <span className="flex items-center">
                          {type === "roof" ? (
                            <Building2 className="mr-2 h-6 w-6 text-yellow-500" />
                          ) : (
                            <Sun className="mr-2 h-6 w-6 text-yellow-500" />
                          )}
                          {installation.name}
                        </span>
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {installation.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center gap-2">
                          <Zap className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.power}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.completion}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <BarChart className="h-4 w-4 text-yellow-500" />
                          <span className="text-sm">
                            {installation.details.savings} besparing
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {installation.tags.map((tag, i) => (
                          <Badge key={i} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <p className="mt-8 text-gray-700 text-center max-w-2xl mx-auto">
                {type === "roof"
                  ? "Våra takinstallationer har hjälpt företag att minska sina energikostnader med upp till 40% och säkrat deras energiförsörjning för framtiden."
                  : "Våra markinstallationer levererar storskalig förnybar energi som driver Sveriges gröna omställning framåt."}
              </p>
            </TabsContent>
          ))}
        </Tabs>
      </main>
    </div>
  );
}
