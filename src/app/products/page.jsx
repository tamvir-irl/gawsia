"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { categories } from "@/app/utils/all_products";

import Link from "next/link";
import Footer from "@/components/footer";

export default function ProductGrid() {
  return (
    <>
      <div className="w-full flex justify-center items-center -ml-4">
        <div className="w-3/4">
          <br /><br /><br /><br /><br /><br />

          {categories.map((category, index) => {
            const displayedProducts = category.products.slice(0, 3); // only 3 products
            return (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-4">{category.name}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
                  
                  {displayedProducts.map((product, idx) => (
                    <Link key={idx} href={`/products/spare_parts/${idx + 1}`}>
                      <Card className="shadow-lg hover:shadow-xl transition cursor-pointer">
                        <CardContent className="p-4">
                          <img
                            src={`${product.path}/1.jpg`}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <CardTitle className="mt-3 text-center leading-tight text-lg font-bold">
                            {product.name}
                          </CardTitle>
                          <CardFooter className="mt-4 text-justify leading-tight">
                            {product.model}
                          </CardFooter>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}

                  {/* View More Card as 4th Item */}
                  
                  <Card className="flex items-center justify-center text-center shadow-lg hover:shadow-xl transition cursor-pointer">
                      <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                      <Link href={`/products/${category.link}`} className="py-2 px-8 bg-slate-800 text-white rounded-full hover:scale-110 duration-200" >
                        <span className=" font-semibold">View More</span>
                      </Link>
                        
                      </CardContent>
                    </Card>

                </div>
                <br />
                <br />
              </div>
              
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}
