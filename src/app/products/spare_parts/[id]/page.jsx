"use client";

import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "@/app/utils/products";
import { categories } from "@/app/utils/all_products";
import { useEffect, useState } from "react";
import { ProdCar } from "@/components/prodslide";

const WhyChooseUs = ({ params }) => {
  const id = parseInt(params.id, 10); // Convert id to number
  const [selectedImage, setSelectedImage] = useState(null);
  const singleJerseyProducts = categories.find(
    (category) => category.name === "CIRCULAR KNITTING MACHINES SPARE PARTS"
  )?.products || [];

  const [product, setProduct] = useState(null);
  

  useEffect(() => {
    if (singleJerseyProducts.length > 0 && id > 0 && id <= singleJerseyProducts.length) {
      setProduct(singleJerseyProducts[id - 1]); // Safe update inside useEffect
    }
  }, [id, singleJerseyProducts]);

  if (!product) {
    return <div>Loading...</div>; // Show a loading message until product is set
  }
  console.log(product.imagesCount)
  function formattedText(text) {
    // Replace all \n with <br /> tags
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  }

  return (
    <>
    {/* Image Zoom Modal */}
    {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img src={selectedImage} className="max-w-[90%] max-h-[90%] object-contain" alt="Zoomed" />
        </div>
      )}
      <div className="py-4 w-full h-full">
        <img className="mt-28" src="/B1.jpg" alt="" />
        <div className="mt-2 px-[12.4rem] w-full h-full">
          <div className="w-full h-full flex">
            {/* Left Sidebar */}
            <div className="w-1/3 h-full flex flex-col items-center px-2 py-2 sticky top-28">
            <div className="w-full flex flex-col py-5 border">
                <h1 className="w-full text-2xl font-bold border-l-4 border-slate-900 p-4">
                  Our Products
                </h1>
                <div className="w-full px-6 uppercase">
                  {products.map((product, index) => (
                    <div className="w-full border-b py-2" key={index}>
                      <Link className="" href={`/products/${product.path}`}>
                        {index + 1}.{" "}
                        <span className="hover:underline hover:text-gray-500">
                          {product.name}
                        </span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Section */}
              <div className="w-full flex flex-col py-5 border">
                <h3 className="w-full text-2xl border-l-4 border-slate-900 p-4 font-bold">
                  Contact
                </h3>
                <div className="w-full px-6 uppercase">
                  <div className="w-full border-b py-2">
                    <Link href="/products/knitting-machine">
                      ADD:{" "}
                      <span className="hover:text-gray-500 hover:underline">
                        4th Floor, Navana Tower, 45 Gulshan Ave Dhaka-1212,
                        Bangladesh.
                      </span>
                    </Link>
                  </div>
                  <div className="w-full border-b py-2">
                    <Link className="flex flex-col" href="/products/knitting-machine">
                      <span>
                        Phone:{" "}
                        <span className="hover:text-gray-500 hover:underline">
                          +8801995767752
                        </span>
                        ,{" "}
                        <span className="hover:text-gray-500 hover:underline">
                          +8801929969797
                        </span>
                      </span>
                      <span className="pl-[4.1rem]">
                        <span className="hover:text-gray-500 hover:underline">
                          +8801990009039
                        </span>
                        ,{" "}
                        <span className="hover:text-gray-500 hover:underline">
                          +8801910519200
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="w-full border-b py-2">
                    <Link href="/products/knitting-machine">
                      Hotline:{" "}
                      <span className="hover:text-gray-500 hover:underline">
                        +8801886610800
                      </span>
                    </Link>
                  </div>
                  <div className="w-full border-b py-2">
                    <Link href="/products/knitting-machine">
                      WeChat:{" "}
                      <span className="hover:text-gray-500 hover:underline">
                        +8801995767752
                      </span>
                    </Link>
                  </div>
                  <div className="w-full border-b py-2">
                    <Link href="/products/knitting-machine">
                      Email:{" "}
                      <span className="hover:text-gray-500 hover:underline lowercase">
                        gawsiainternationaltrade@gmail.com
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Product Details */}
            <div className="w-2/3 h-full py-8 px-10">
              <div className="w-full h-[330px] flex">
                <div className="w-1/3 h-full flex flex-col gap-2 items-center">
                  <ProdCar length={product.imagesCount} path={product.path}></ProdCar>
                </div>
                <div className="w-2/3 h-full p-8 flex items-center">
                  <div >
                  <h1 className="text-2xl font-bold text-justify">{product.name}</h1>
                  <br />
                  <span className="text-lg text-gray-700">{product.model}</span>
                  <br />
                  <br />
                  <br />
                  <span>Category: <Link href="/products/spare_parts" className="underline hover:text-gray-500">Spare Parts</Link></span>
                  </div>
                </div>
              </div>
              
              {/* Product Features */}
              {
                product.features && (
                    <div className="w-full h-full py-2 px-10">
                    <h1 className="text-2xl font-bold py-6 w-full border-b">Product Features</h1>
                    <br />
                    <div className="text-justify text-xl">
                        <ul>
                            {
                                product.features.map((desc, index) => {
                                    return (
                                        <li className="mb-4 text-base" key={index}>{index + 1}. {desc}</li>
                                    ) 
                                })
                            }
                        </ul>
                    </div>
                  </div> 
                )
              }
              
              {/* Product PDF */}
              {
                product.pdf && (
                    <div className="w-full h-full py-2 px-10">
                        <a className="mb-4 text-xl hover:underline hover:text-gray-500 flex gap-2 items-center" href={product.pdf}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
</svg>
Download Product PDF</a>
                    </div>
                )
              }
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default WhyChooseUs;
