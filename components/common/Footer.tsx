import Link from "next/link";
import { Badge } from "../ui/badge";

// Utility function to encode contact information
const encodeContactInfo = (text: string): string => {
  return text
    .split("")
    .map((char) => `&#${char.charCodeAt(0)};`)
    .join("");
};

export default function Footer() {
  const email = "info@luminos.se";
  const phone = "08-490 099 29";

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Luminos Energi AB</h3>
            <p>Box 5385</p>
            <p>102 48 Stockholm, Sweden</p>
            <p>Org.nr: 556428-8578</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <a
              href={`mailto:${email}`}
              className="block hover:text-[#fab300] transition-colors duration-200"
            >
              <p
                dangerouslySetInnerHTML={{ __html: encodeContactInfo(email) }}
              />
            </a>
            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="block hover:text-[#fab300] transition-colors duration-200"
            >
              <p
                dangerouslySetInnerHTML={{ __html: encodeContactInfo(phone) }}
              />
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Följ Oss</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.linkedin.com/company/luminos-energi-ab/?viewAsMember=true"
                target="_blank"
              >
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
