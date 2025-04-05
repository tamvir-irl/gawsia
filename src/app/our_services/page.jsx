import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";

const OurServices = () => {
  return (
    <>
    <div className="py-4  w-full h-full">
      <img className="mt-28" src="/B1.jpg" alt="" />
      <div className="mt-2 px-[12.4rem] w-full h-full">
        <div className="w-full h-full flex">
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
            <div className="w-full  flex flex-col py-5 border">
              <h3 className="w-full text-2xl border-l-4 border-slate-900 p-4 font-bold">
                Contact
              </h3>
              <div className="w-full px-6 uppercase">
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine">
                    <span className=" ">
                      ADD:{" "}
                      <span className="hover:text-gray-500 hover:underline">
                        4th Floor, Navana Tower, 45 Gulshan Ave Dhaka-1212,
                        Bangladesh.
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link
                    className="flex flex-col"
                    href="/products/knitting-machine"
                    >
                    <span>
                      Phone:{" "}
                      <span className=" hover:text-gray-500 hover:underline">
                        +8801995767752
                      </span>
                      ,{" "}
                      <span className=" hover:text-gray-500 hover:underline">
                        +8801929969797
                      </span>
                    </span>
                    <span className=" pl-[4.1rem]">
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
                  <Link className="" href="/products/knitting-machine">
                    Hotline:{" "}
                    <span className=" hover:text-gray-500 hover:underline">
                      +8801886610800
                    </span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine">
                    WeChat:{" "}
                    <span className=" hover:text-gray-500 hover:underline">
                      +8801995767752
                    </span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine">
                    Email:{" "}
                    <span className=" hover:text-gray-500 hover:underline">
                      <span className="lowercase">
                        gawsiainternationaltrade@gmail.com
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full py-8 px-10">
            <h1 className="text-4xl font-bold py-6 w-full border-b">
              Our Services
            </h1>
            <br />
            <div className="text-justify text-xl ">
              In the world of revolution, we want to serve the best quality
              circular knitting machine (Buen-Knit) in Bangladesh. We always try
              to be connected with our clients and give the best service. We
              have high production capacity, good machine performance, a
              professional technical team, best competitive pricing and 1-year
              warranty support.
              <br />
              <br />
              1. <span className="font-bold">Pre-sale Service:</span> We can
              provide you with fabric samples and product brochures for free,
              inclusive of freight.
              <br /><br />
              2. <span className="font-bold">Selling Service:</span>
              <p className="ml-6">
                a) The delivery time of our products is approximately 70-90 days
                after we have received the deposit or letter of credit.
              </p>
              <p className="ml-6">
                b) There is no service for quick-wear parts.
              </p>
              <br />
              3. <span className="font-bold">After-sale Service:</span>
              <p className="ml-6">
                a) The warranty of machines is 1 year. We will freely replace
                any parts with quality problems under warranty, except
                quick-wear parts.
              </p>
              <p className="ml-6">b) If you need technical support, technicians will be instantly
                arranged to give a hand.</p>
              <p className="ml-6">c) Only when the machines and parts pass
                the tightened inspection will we deliver them.</p>
              <br />
              4. <span className="font-bold">Other Service:</span> Our
              technicians may install machinery equipment for you. A free
              training service is available if necessary.
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default OurServices;
