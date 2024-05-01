export interface ProductProps {
  title:string,
  imageUrl:string,
  description:string,
  formUrl:string,
  price: number
}
export const products : ProductProps[] = [
  {
    title:"Cesta Pequena",
    imageUrl:"/cestas/Cesta_P.svg",
    description:"São nas pequenas cestas que possuem os melhores cafés da manhã!",
    formUrl:"https://forms.gle/Md2VJMRZRSmZ8zEQ8",
    price: 180
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