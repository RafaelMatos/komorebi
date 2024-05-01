import { Button } from "@/_components/shadcn/ui/button";
import Hero from "./_component/hero";

import ProductItem from "@/_components/product-item";
import { ProductProps} from "@/constants/products";

const products : ProductProps[] = [
  {
    title:"Cesta Pequena",
    imageUrl:"/cestas/Cesta_P.svg",
    description:"São nas pequenas cestas que possuem os melhores cafés da manhã!",
    formUrl:"https://forms.gle/Md2VJMRZRSmZ8zEQ8",
    price: 170
  },
  {
    title:"Cesta Média",
    imageUrl:"/cestas/Cesta_M.svg",
    description:"Nada de café mediano! Aqui seu café será esplendido!",
    formUrl:"https://forms.gle/Md2VJMRZRSmZ8zEQ8",
    price: 200
  },
  {
    title:"Cesta Grande",
    imageUrl:"/cestas/Cesta_G.svg",
    description:"Sei que você gosta de um café bem farto, daqueles de novela. Pois esse é o que você procura!",
    formUrl:"https://forms.gle/Md2VJMRZRSmZ8zEQ8",
    price: 220
  },
]

export default function Home() {
  return (
    <div className="flex flex-col w-full h-full justify-center items-center">
      <Hero />

      <div id='products' className=" justify-center flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 my-20 gap-16">
       {products.map(product =>{
        return(
          <ProductItem key={product.title} product={product} />          
        )
       })}
      </div>
    </div>
  );
}
