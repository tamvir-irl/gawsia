import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";
import CarouselPlugin from "@/components/slide2";
const AboutUs = () => {
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
            <h1 className="text-4xl font-bold py-6 w-full border-b">Photos</h1>
            <br />
            <div className="flex gap-4 w-full">
            <CarouselPlugin from={1} dir="slides3" length={4} w="1/2" captions={"Our honorable Managing Director and Chief Executive Officer (CEO) visited the DTG Exhibition 2025."}/>
            <CarouselPlugin from={1} dir="slides2" length={6} w="1/2" captions={"Our honorable Managing Director attended the Doa and Iftar Mahfil organized by the Bangladesh Knitting Owners Association - 2025"}/>
            </div>
            <h1 className="text-4xl font-bold py-6 w-full border-b">Videos</h1>
            <br />
            <div className="flex gap-4 w-full">
            <div className="rounded-xl w-1/2 aspect-video overflow-hidden">
            <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbuenknitbd%2Fvideos%2F672520949005239%2F&show_text=false&width=560&t=0"
        width="100%"
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
            </div>
            <div className="rounded-xl w-1/2 aspect-video overflow-hidden">
            <iframe
        src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Fbuenknitbd%2Fvideos%2F974326674883043%2F&show_text=false&width=560&t=0"
        width="100%"
        height="100%"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
