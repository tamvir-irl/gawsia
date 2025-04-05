import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";

const WhyChooseUs = () => {
  return (
    <>
    <div className="py-4  w-full h-full">
      <img className="mt-28" src="/B1.jpg" alt="" />
      <div className="mt-2 px-[12.4rem] w-full h-full">

        <div className="w-full h-[200%] flex">
          <div className="w-1/3 h-[200%] flex flex-col items-center px-2 py-2 sticky top-28">
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
              <h3 className="w-full text-2xl border-l-4 border-slate-900 p-4 font-bold">Contact</h3>
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
            <h1 className="text-4xl font-bold py-6 w-full border-b">Why Choose Us</h1>
            <br />
            <div className="text-justify text-xl ">
              <p>We always believe that to doing long time business is to satisfy our customers by proving them good quality machines and best after sales services. The main reasons for choosing us in bellow:</p>
              <br />
              <p>1.	High Speed Circular Knitting Machines.</p>
              <p>2.	High Production Capacity Circular Knitting Machines.</p>
              <p>3.	Energy Saving Circular Knitting Machines.</p>
              <p>4.	Long Time Legibility Circular Knitting Machines.</p>
              <p>5.	Good Circular Knitting Machines Performance.</p>
              <p>6.	1-Year Warranty Support Circular Knitting Machines.</p>
              <p>7.	Best Competitive Price Circular Knitting Machines.</p>
              <p>8.	Best Professional Technical Team.</p>
              <p>9.	Always in touch with customers.</p>
              <p>10.	Maintaining Good Relations with customers.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default WhyChooseUs;
