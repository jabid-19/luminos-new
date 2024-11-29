import Link from "next/link";
import { Badge } from "../ui/badge";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Luminos Energi AB</h3>
            <p>Box 50385,</p>
            <p>102 48 Stockholm Sweden</p>
            <p>VAT number: 556428-8578</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <p>info@luminosenergi.se</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Följ Oss</h3>
            <div className="flex gap-4">
              <Link href="https://www.linkedin.com/company/luminos-energi-ab/?viewAsMember=true">
                {" "}
                <Badge variant="secondary">LinkedIn</Badge>
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; 2024 Luminos Energi AB. Alla rättigheter förbehållna.</p>
        </div>
      </div>
    </footer>
  );
}
