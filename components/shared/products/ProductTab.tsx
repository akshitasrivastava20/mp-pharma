import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductShowcase from "./ProductShowcase";
import Image from "next/image";

export default function ProductsTab() {
  return (
    <>
     <div className="flex items-center justify-center flex-col">
        <div className="relative z-20 mr-4 flex items-center space-x-2 px-0 my-1 py-1 text-sm font-normal text-black group">
          <Image
            src="/logo.svg"
            alt="logo"
            width={30}
            height={30}
            className="transition-transform duration-1000 group-hover:animate-spin"
            style={{ animationDuration: "0.75s" }}
          />
          <span className="font-semibold text-black dark:text-white">
            MP Pharmaceuticals'
          </span>
        </div>
        <div className="font-medium text-5xl mb-8 text-emerald-800 text-center mx-auto">Featured Products
      
        </div>
      </div>
    <Tabs defaultValue="tab-1" className="px-1 max-w-6xl mx-auto mt-0">
     
      {/* TabsContent sections remain unchanged */}
      
      <ProductShowcase filter="50ML TO 100ML" />
      
    </Tabs>
    </>
  );
}
