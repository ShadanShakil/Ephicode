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
  <header className="pt-6 md:pt-8">
    <div className="mx-auto w-full max-w-5xl px-4 md:px-6">
      <nav
        className="
          sticky top-4 z-30
          rounded-2xl border border-white/10
          bg-white/5
          px-4 py-3 md:px-6 md:py-4
          backdrop-blur-xl backdrop-saturate-150
        "
      >
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Logo" height={40} width={40} />
            <h1 className="text-white text-xl px-1">Ehpicode</h1>
          </div>

          {/* Right: links + button (desktop) */}
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

          {/* Right: mobile hamburger */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="space-y-1.5">
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
              <span className="block h-0.5 w-6 bg-white" />
            </div>
          </button>
        </div>

        {/* Mobile dropdown stays below */}
        {isOpen && (
          <div className="mt-4 md:hidden border-t border-white/10 pt-4">
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
                Get free strategy call
              </Button>
            </div>
          </div>
        )}
      </nav>
    </div>
  </header>
);
}
