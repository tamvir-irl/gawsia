"use client";

import Footer from "@/components/footer";
import { applications } from "@/app/utils/applications";
import { useEffect, useState } from "react";
import { products } from "@/app/utils/products";
import Link from "next/link";
const ApplicationDetails = ({ params }) => {
  const id = parseInt(params.id, 10); // Convert to number
  const [application, setApplication] = useState(null);

  useEffect(() => {
    if (id > 0 && id <= applications.length) {
      setApplication(applications[id - 1]);
    }
  }, [id]);

  if (!application) {
    return <div className="text-center mt-40 text-lg">Loading...</div>;
  }

  return (
    <>
      <div className="py-4 w-full h-full">
        <img className="mt-28" src="/B1.jpg" alt="" />
        <div className="mt-2 px-[12.4rem] w-full h-full">
          <div className="w-full h-full flex">
            {/* Sidebar */}
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

            {/* Application Details */}
            <div className="w-2/3 h-full py-8 px-10">
              <div className="w-full flex flex-col gap-4">
                <img
                  src={`/Application/${id}/img.jpg`}
                  alt={application.name}
                  className="w-full max-h-[400px] object-contain mb-4"
                />
                <h1 className="text-3xl font-bold">{application.name}</h1>
                <p className="text-lg text-gray-600 italic">
                  {application.application}
                </p>

                <h2 className="text-2xl mt-8 font-semibold border-b pb-2">
                  
                </h2>
                <ul className="mt-4 list-disc list-inside text-lg">
                  {application.features.map((feature, index) => (
                    <li key={index} className="mb-1">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ApplicationDetails;
