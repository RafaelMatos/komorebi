import { Button } from "@/_components/shadcn/ui/button";
import { ArrowDown } from "lucide-react";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"] })

const Hero = () => {
  return ( 
    <div className="flex  px-5 flex-col w-full h-[100vh] justify-center items-center bg-hero-image bg-no-repeat bg-cover gap-8">
      <div className="flex flex-col max-w-[40rem] justify-center gap-4">
        <h1 className="text-5xl font-semibold text-center text-border">Faça a manhã de quem ama mais viva</h1>     
        <p className="text-xl text-center">Preparamos o café da manhã ideal para seu momento especial</p>
        
      </div>
      <p className="text-2xl">Viva, sinta , seja luz, seja <span className={`font-bold text-[#343d2a] text-4xl ${cinzel.className}`}>Komorebi</span></p>
      <Button variant='outline' className="text-xl mt-8 group bg-lime-900 gap-4 bg-opacity-10  backdrop-filter backdrop-blur-sm ">
        Conheça nossos produtos
        <ArrowDown className="animate-pulse group-hover:animate-bounce"/>
      </Button>
    </div>
   );
}
 
export default Hero;