"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/pages/Menu", label: "Menu" },
    { href: "/pages/About", label: "About" },
    { href: "/pages/Contact", label: "Contact" },
  ];

  return (
    <nav className="bg-black p-7 px-4 md:px-16">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" height={40} width={40} />
          <h1 className="text-white text-xl px-1">Ehpicode</h1>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-6">
          <ul className="flex space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? "text-white" : "text-gray-300"
                  }
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button className="bg-[#01FFC3] text-black hover:bg-[#01FFC3] hover:shadow-[0_0_20px_#10B981] hover:scale-105 transition-all duration-300">
            Get free strategy call
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <span className="sr-only">Toggle menu</span>
          {/* Simple hamburger icon */}
          <div className="space-y-1.5">
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
            <span className="block h-0.5 w-6 bg-white"></span>
          </div>
        </button>
      </div>

      {/* Mobile dropdown */}
      {isOpen && (
        <div className="mt-4 md:hidden border-t border-gray-700 pt-4">
          <ul className="flex flex-col space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    pathname === link.href ? "text-white" : "text-gray-300"
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <Button className="w-full bg-[#01FFC3] text-black hover:bg-[#01FFC3] hover:shadow-[0_0_20px_#10B981] hover:scale-105 transition-all duration-300">
              Get free starategy call
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
