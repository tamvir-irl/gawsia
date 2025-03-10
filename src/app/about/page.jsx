import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";
const AboutUs = () => {
  return (
    <>
    <div className="py-4  w-full h-full">
      <img className="mt-28" src="/B1.jpg" alt="" />
      <div className="mt-2 px-[12.4rem] w-full h-full">

        <div className="w-full h-full flex">
          <div className="w-1/3 h-full flex flex-col items-center px-2 py-2 sticky top-28">
            <div className="w-full  flex flex-col py-5 border">
              <h1 className="w-full text-2xl font-bold border-l-4 border-slate-900 p-4">
                Our Products
              </h1>
              <div className="w-full px-6 uppercase">
                {products.map((product) => {
                  return (
                    <div className="w-full border-b py-2" key={product}>
                      <Link href={`/products/${product}`}>
                        {products.indexOf(product) + 1}. <span className="hover:underline hover:text-gray-500">{product}</span>
                      </Link>
                    </div> 
                  )
                })}
                
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
            <h1 className="text-4xl font-bold py-6 w-full border-b">About Us</h1>
            <br />
            <p className="text-justify text-xl ">
              Gawsia International Trade believes in serving the people and the
              country, not only in doing business and making profit. Our concern
              is to offer the best possible services and provide products to
              customers for attaining their full satisfaction. We, Gawsia
              International Trade, provide the best quality circular knitting
              machine. We are the only authorized agent of Quanzhou Buen-Knit
              Machinery Co., Limited in Bangladesh.
              <br />
              <br />
              Our collaboration with Quanzhou Buen-Knit Machinery Co., Limited
              allows us to deliver high speed circular knitting machines
              technology and reliable machinery to the local market. By
              prioritizing quality and customer service, we aim to contribute to
              the growth of the textile industry in Bangladesh while fostering
              strong relationships with our clients.
              <br />
              <br />
              Our dedicated team is always ready to assist with any inquiries,
              ensuring that our customers receive timely support and guidance.
              We believe that by investing in our clients’ success, we can
              collectively elevate standards in the textile sector and drive
              innovation forward.
              <br />
              <br />
              By prioritizing these values, we aim to inspire others to join us
              in creating a more responsible future. Together, we can foster
              innovation that supports long-term growth while protecting the
              planet for generations to come.
            </p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
