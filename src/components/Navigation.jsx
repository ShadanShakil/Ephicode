"use client"; 
import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "./ui/button";

export default function Navigation() {
    const pathname = usePathname();

  const links =[
    { href: "/", label: "Home" },
    { href: "/pages/Menu", label: "Menu" },
    { href: "/pages/About", label: "About" },
    { href: "/pages/Contact", label: "Contact" },
  ];

    return(
        <nav className="bg-black flex items-center justify-between p-7 px-16">
            <div className="flex justiy-center items-center">
                <Image src="/logo.png" alt="Logo" height={40} width={40}/>
                <h1 className="text-white text-xl px-1">Ehpicode</h1>
            </div>
            <div>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={pathname === link.href ? "text-white" : "text-gray-300"}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
            </div>
            <div><Button className="bg-[#01FFC3] text-black hover:bg-[#01FFC3] hover:shadow-[0_0_20px_#10B981] hover:scale-105 transition-all duration-300">Contact us</Button></div>
        </nav>
    );
}
