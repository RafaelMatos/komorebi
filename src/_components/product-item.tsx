import {  ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./shadcn/ui/badge";
import { ProductProps } from "@/constants/products";

interface ProductItemProps {
  product: ProductProps
}

const ProductItem = ({ product }: ProductItemProps) => {
  return ( 
    <div className="min-w-[15rem] max-w-[20rem] ">
          <div className="bg-white shadow-md h-[26rem] border  border-gray-200 rounded-lg  dark:bg-komorebi-700 dark:border-gray-700">
            <div className="relative flex h-[200px] w-full items-center justify-center rounded-lg bg-komorebi-300 shadow-lg">
              <Image
                src={product.imageUrl}
                height={0}
                width={0}
                sizes="100vw"
                className="h-auto max-h-[70%] w-auto max-w-[80%]"
                alt={product.title}
              />

              <Badge className="absolute left-3 top-3 px-2 py-[2px] opacity-75">
                R${product.price},00
              </Badge>
            </div>
            <div className="p-5 ">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">
                  {product.title}
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3 dark:text-gray-400">
                {product.description}
              </p>
              <a
                href={product.formUrl}
                className="text-white bg-primary hover:bg-primary/80 focus:ring-4 focus:ring-komorebi-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center  dark:bg-komorebi-600 dark:hover:bg-komorebi-700 dark:focus:ring-komorebi-800"
              >
                Quero encomendar
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </div>
        </div>
   );
}
 
export default ProductItem;