"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    title: "Single Knitting Machines",
    products: [
      { name: "Single Jersey Machine", image: "/images/single1.jpg" },
      { name: "Stockinette Mutton Cloth Machine", image: "/images/single2.jpg" },
      { name: "Basic Circular Knitting", image: "/images/single3.jpg" },
    ],
  },
  {
    title: "Double Knitting Machines",
    products: [
      { name: "Double Face Loop Terry", image: "/images/double1.jpg" },
      { name: "Double Jersey Circular", image: "/images/double2.jpg" },
      { name: "Rib Knitting Machine", image: "/images/double3.jpg" },
    ],
  },
  {
    title: "Electronic Knitting Machines",
    products: [
      { name: "Electronic Jacquard", image: "/images/electronics1.jpg" },
      { name: "Mattress Ticking Jacquard", image: "/images/electronics2.jpg" },
      { name: "Rib Mesh Transferred", image: "/images/electronics3.jpg" },
    ],
  },
  {
    title: "Spare Parts",
    products: [
      { name: "Circular Knitting Cylinders", image: "/images/spare1.jpg" },
      { name: "Positive Yarn Feeders", image: "/images/spare2.jpg" },
      { name: "Circular Knitting CAM", image: "/images/spare3.jpg" },
    ],
  },
];

export default function ProductGrid() {
  return (
    <>
    <div className="w-full h-full flex justify-center items-center -ml-4">
    <div className="w-3/4 h-full">
        <br /><br />
        <br /><br />
        <br /><br />
      {categories.map((category, index) => (
        <div key={index}>
          <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
          <div className="flex justify-between gap-6 overflow-x-auto pb-4">
            {category.products.map((product, idx) => (
              <Card key={idx} className="w-full shadow-lg hover:shadow-xl transition">
                <CardContent className="p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-36 object-cover rounded-lg"
                  />
                  <CardTitle className="mt-3 text-center">{product.name}</CardTitle>
                </CardContent>
              </Card>
            ))}
            <div className="w-full flex justify-end items-center">
            <Button className="w-1/2 p-8 text-center rounded-full">View All</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
  );
}
