"use client"

import { MenuIcon, MoonIcon, SunIcon } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Button } from "./shadcn/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./shadcn/ui/dropdown-menu";


const Header = () => {
  const { setTheme } = useTheme()
  return ( <header className="flex justify-between w-full bg-primary items-center px-5">
 <Image
  src='/logo_no_bg.svg'
  alt="Galeria Komorebi"
  height={30}
  width={100}
 />
 <Button size='icon' variant='outline' className="bg-primary hover:bg-secondary-foreground/20 text-primary-foreground" >
  <MenuIcon />
 </Button>
  <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  </header> );
}
 
export default Header;