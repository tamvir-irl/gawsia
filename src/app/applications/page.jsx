"use client";

import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { applications } from "@/app/utils/applications";

import Link from "next/link";
import Footer from "@/components/footer";

export default function ProductGrid() {
  return (
    <>
      <div className="w-full flex justify-center items-center -ml-4">
        <div className="w-3/4">
          <br /><br /><br /><br /><br /><br />

              <div>
                <h2 className="text-2xl font-bold mb-4">Applications</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pb-4">
                  
                {applications.map((product, idx) => (

                    <Link key={idx} href={`/applications/${idx + 1}`}>
                      <Card className="shadow-lg hover:shadow-xl transition cursor-pointer">
                        <CardContent className="p-4">
                          <img
                            src={`${product.path}/img.jpg`}
                            alt={product.name}
                            className="w-full h-full object-cover rounded-lg"
                          />
                          <CardTitle className="mt-3 text-center leading-tight text-lg font-bold">
                            {product.name}
                          </CardTitle>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}

                </div>
                <br />
                <br />
              </div>
              

        </div>
      </div>
      <Footer />
    </>
  );
}
