"use client"

import * as React from "react"
import Link from "next/link"
import { Facebook, Instagram, Menu} from "lucide-react"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { SidebarSeparator } from "./ui/sidebar"

export function NavigationMenuDemo() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="flex items-center justify-between w-full px-4 h-20 bg-[#ffffff] shadow-md">
        {/* Logo sempre no canto esquerdo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/logomm.png"
            alt="Logo"
            width={150}
            height={50}
            className="object-contain"
            style={{ maxHeight: 120 }}
          />
        </Link>
        {/* Menu desktop centralizado */}
        <div className="hidden md:flex flex-1 justify-center text-[#042553] font-bold">
          <NavigationMenu
            viewport={false}
            className="list-none font-bold text-[#042553] bg-none flex gap-x-6"
          >
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({ active: pathname === "/" })}
              >
                <Link href="/">Inicio</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({ active: pathname === "/about" })}
              >
                <Link href="/about">A Medicina da Mulher</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({ active: pathname === "/clinicalStaff" })}
              >
                <Link href="/clinicalStaff">Corpo Clínico</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({ active: pathname === "/clinicalService" })}
              >
                <Link href="/clinicalService">Serviços</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle({ active: pathname === "/contact" })}
              >
                <Link href="/contact">Contacto</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenu>
        </div>
        {/* Menu hamburguer só no mobile, à direita */}
        <div className="md:hidden flex items-center justify-end">
          <Sheet>
            <SheetTrigger asChild>
              <button aria-label="Abrir menu" className="p-2">
                <Menu className="w-7 h-7" />
              </button>
            </SheetTrigger>
            <SheetContent
  side="right"
  className="w-64 max-w-[60vw] max-h-[60vh] flex flex-col gap-6 pt-10 font-semibold text-[#042553] bg-[#fde4e1] rounded-lg shadow-md"
>
  <div>
    <Link href="/" className="flex justify-center">
      <img
        src="/logomm.png"
        alt="Logo"
        width={150}
        height={50}
        className="object-contain"
        style={{ maxHeight: 120 }}
      />
    </Link>
  </div>
      <SidebarSeparator className="mx-0" />
  
  <div className="flex flex-col items-center gap-4">

              {/* Links do menu hamburguer */}
              <Link href="/">Inicio</Link>
              <Link href="/about">A Medicina da Mulher</Link>
              <Link href="/clinicalStaff">Corpo Clínico</Link>
              <Link href="/clinicalService">Serviços</Link>
              <Link href="/contact">Contacto</Link>

              {/* Ícones das redes sociais centralizados na base do menu */}
  </div>
       <SidebarSeparator className="mx-0" />
              <div className="mt-auto flex justify-center gap-4 pb-6">
                <a
      href="https://www.instagram.com/medicinadamulher.pt/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
    >
      <Instagram className="h-6 w-6 cursor-pointer hover:text-[#ff8e83]" />
    </a>
    <a
      href="https://www.facebook.com/medicinadamulher.pt/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
    >
      <Facebook className="h-6 w-6 cursor-pointer hover:text-[#ff8e83]" />
    </a>
    
              </div>


            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
