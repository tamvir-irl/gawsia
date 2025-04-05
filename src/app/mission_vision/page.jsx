import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";

const WhyChooseUs = () => {
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
            <h1 className="text-4xl font-bold py-6 w-full border-b">Mission And Vision</h1>
            <br />
            <div className="text-justify text-xl ">
            Enriching the garments industry of Bangladesh by providing the highest quality circular knitting machines in our country to keep up with the fast-changing world. We want to contribute to the country’s economy and for her people, become a symbol of trust and quality in their everyday lives.
            <br /><br />
By fostering innovation and sustainability, we aim to empower local manufacturers and artisans, enabling them to compete on a global scale. This commitment will not only elevate the garment sector but also create a ripple effect of growth and opportunity throughout the entire community.
<br /><br />
Through collaborative efforts and strategic partnerships, we envision a future where every garment produced tells a story of craftsmanship and community pride. Together, we can build a resilient ecosystem that champions ethical practices while meeting the evolving needs of consumers everywhere.
<br /> <br />
This vision requires a collective mindset focused on sustainability and innovation, ensuring that as we grow, we also protect the environment and empower our workforce. By prioritizing these values, we can inspire a new generation of consumers who appreciate not just the products they buy, but the artisans behind them.


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
