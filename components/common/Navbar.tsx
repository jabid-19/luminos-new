"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const pathname = usePathname();
  const dropdownTimeout = useRef(null);
  const router = useRouter();

  useEffect(() => {
    setShowMenu(false);
    setShowDropdown(false);
    return () => {
      if (dropdownTimeout.current) {
        clearTimeout(dropdownTimeout.current);
      }
    };
  }, [pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeout.current) {
      clearTimeout(dropdownTimeout.current);
    }
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    dropdownTimeout.current = setTimeout(() => {
      setShowDropdown(false);
    }, 150); // Small delay before hiding the dropdown
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Adjust this value based on your navbar height
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = (sectionId: string) => {
    if (pathname === "/") {
      scrollToSection(sectionId);
    } else {
      router.push("/");
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          const offset = 100;
          const elementPosition = section.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);
    }
  };

  return (
    <nav className="fixed top-10 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[1800px] px-4 mx-auto rounded-full backdrop-blur-xl bg-white/30">
      <div className="w-full">
        <div className="flex items-center justify-between px-8 py-4 text-base">
          <div>
            <Link href="/" aria-label="Luminos">
              <Image
                width={120}
                height={28}
                src="/images/luminos-logo-pos.svg"
                alt="logo"
                priority={true}
              />
            </Link>
          </div>
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="block cursor-pointer text-[#fab300] lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </div>
          <ul className="hidden items-center gap-9 text-[#1a212d] lg:flex">
            <li>
              <div
                onClick={() => handleNavigation("solar")}
                className="cursor-pointer"
              >
                <p
                  className={`${
                    pathname === "/solpaneler"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Solpaneler
                </p>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("battery")}
                className="cursor-pointer"
              >
                <p
                  className={`${
                    pathname === "/batterier"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Batterier
                </p>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("references")}
                className="cursor-pointer"
              >
                <p
                  className={`${
                    pathname === "/referenser"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base`}
                >
                  Referenser
                </p>
              </div>
            </li>

            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div
                className={`flex items-center gap-1 cursor-pointer ${
                  pathname === "/om-oss" ||
                  pathname === "/kontakt" ||
                  pathname === "/gdpr"
                    ? "text-[#fab300]"
                    : "text-[#1a212d]"
                } text-base`}
              >
                <p>Om Luminos</p>
                <ChevronDown className="w-4 h-4" />
              </div>
              {showDropdown && (
                <div
                  className="absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href="/om-oss">
                    <p
                      className={`${
                        pathname === "/om-oss"
                          ? "text-[#fab300]"
                          : "text-[#1a212d]"
                      } text-base px-4 py-2 hover:bg-gray-100`}
                    >
                      Om Oss
                    </p>
                  </Link>
                  <Link href="/kontakt">
                    <p
                      className={`${
                        pathname === "/kontakt"
                          ? "text-[#fab300]"
                          : "text-[#1a212d]"
                      } text-base px-4 py-2 hover:bg-gray-100`}
                    >
                      Kontakt
                    </p>
                  </Link>
                  <Link href="/gdpr">
                    <p
                      className={`${
                        pathname === "/gdpr"
                          ? "text-[#fab300]"
                          : "text-[#1a212d]"
                      } text-base px-4 py-2 hover:bg-gray-100`}
                    >
                      GDPR
                    </p>
                  </Link>
                </div>
              )}
            </li>
          </ul>
          <div></div>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } w-full bg-white shadow-lg lg:hidden`}
        >
          <ul className="flex flex-col gap-4 p-4 text-[#1a212d]">
            <li>
              <div
                onClick={() => handleNavigation("solar")}
                className="cursor-pointer"
              >
                <p
                  className={`${
                    pathname === "/solpaneler"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Solpaneler
                </p>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("battery")}
                className="cursor-pointer"
              >
                <p
                  className={`${
                    pathname === "/batterier"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Batterier
                </p>
              </div>
            </li>
            <li>
              <div
                onClick={() => handleNavigation("references")}
                className="cursor-pointer"
              >
                <p
                  className={`${
                    pathname === "/referenser"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Referenser
                </p>
              </div>
            </li>

            <li>
              <Link href="/om-oss">
                <p
                  className={`${
                    pathname === "/om-oss" ? "text-[#fab300]" : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Om Oss
                </p>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/kontakt">
                <p
                  className={`${
                    pathname === "/kontakt"
                      ? "text-[#fab300]"
                      : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  Kontakt
                </p>
              </Link>
            </li>
            <li className="ml-4">
              <Link href="/gdpe">
                <p
                  className={`${
                    pathname === "/gdpe" ? "text-[#fab300]" : "text-[#1a212d]"
                  } text-base block py-1 hover:bg-[#fed27f] hover:px-2`}
                >
                  GDPR
                </p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
