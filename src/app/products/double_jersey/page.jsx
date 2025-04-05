"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { categories } from "@/app/utils/all_products";

import Link from "next/link";
import Footer from "@/components/footer";

export default function ProductGrid() {
    const category = categories.find(machine => machine.name === "DOUBLE JERSEY CIRCULAR KNITTING MACHINES");
    console.log(category)
  return (
    <>
        <div className="w-full flex justify-center items-center -ml-4">
            <div className="w-3/4">
                <br /><br />
                <br /><br />
                <br /><br />

                <div>
                    <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
                    {category.products.map((product, idx) => (
                        <Link key={idx} href={`/products/double_jersey/${idx + 1}`}>
                            <Card  className="shadow-lg hover:shadow-xl transition cursor-pointer">
                            <CardContent className="p-4">
                            <img
                            src={`${product.path}/1.jpg`}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                            />
                            <CardTitle className="mt-3 text-center leading-tight text-lg font-bold">{product.name}</CardTitle>
                            <CardFooter className="mt-4 text-justify leading-tight">{product.model}</CardFooter>
                        </CardContent>
                        </Card>
                        </Link>
                    ))}
                    </div>
                </div>

            </div>
        </div>
        <Footer />
    </>
  );
}
