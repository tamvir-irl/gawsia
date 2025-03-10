"use client"
import { useState } from "react";
import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";
import CarouselPlugin from "@/components/slide";
import VideoCarousel from "@/components/videocarousel";

const AboutBuenKnit = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        {/* Clickable Image */}
        <img
          className="mt-28 cursor-pointer"
          src="/B1.jpg"
          alt="Main"
          onClick={() => setSelectedImage("/B1.jpg")}
        />

        <div className="mt-2 px-[12.4rem] w-full h-full">
          <div className="w-full h-full flex">
            <div className="w-1/3 h-full flex flex-col items-center px-2 py-2 sticky top-28">
              <div className="w-full flex flex-col py-5 border">
                <h1 className="w-full text-2xl font-bold border-l-4 border-slate-900 p-4">
                  Our Products
                </h1>
                <div className="w-full px-6 uppercase">
                  {products.map((product) => (
                    <div className="w-full border-b py-2" key={product}>
                      <Link href={`/products/${product}`}>
                      {products.indexOf(product) + 1}. <span className="hover:underline hover:text-gray-500">{product}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full flex flex-col py-5 border">
                <h3 className="w-full text-2xl border-l-4 border-slate-900 p-4 font-bold">
                  Contact
                </h3>
                <div className="w-full px-6 uppercase">
                  <div className="w-full border-b py-2">
                    <Link href="/products/knitting-machine">
                      <span>
                        ADD:{" "}
                        <span className="hover:text-gray-500 hover:underline">
                          4th Floor, Navana Tower, 45 Gulshan Ave Dhaka-1212,
                          Bangladesh.
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="w-full border-b py-2">
                    <Link href="/products/knitting-machine">
                      Phone:{" "}
                      <span className="hover:text-gray-500 hover:underline">
                        +8801995767752
                      </span>
                    </Link>
                  </div>
                  <div className="w-full border-b py-2">
                    <Link href="/products/knitting-machine">
                      Email:{" "}
                      <span className="hover:text-gray-500 hover:underline">
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
                About Buen-Knit
              </h1>
              <br />
              <p className="text-justify text-xl ">
                <span className="font-bold">
                  Quanzhou Buen-knit Machinery Co., Limited
                </span>{" "}
                has more than 30 years of experience in the design and
                production of circular knitting machines and their parts. We
                have a large group of qualified technicians and a
                high-efficiency production team. We import much high-precision
                equipment for production (CNC, large CNC computerized milling
                machine, large milling machine gear etc.) to improve
                productivity, control the quality of products and meet customer
                demand.
                <br />
                <br />
                We have cooperated with a professional production team from
                Taiwan that has more than 30 years of experience in designing
                and manufacturing circular knitting machines. We developed many
                kinds of knitting machines and multiple patented products. Our
                advanced technology keeps up with the international trend
                “Energy-Saving and Emission-Reduction.” It saves your factory
                space and also saves your investment cost on machines.
                <br />
                <br />
                Our circular knitting machines mainly include single/double
                jersey electronic jacquard, links-links electronic jacquard, rib
                transfer mesh electronic jacquard, 4 tracks single jersey, 3
                thread fleece, single/double terry, single/double jersey open
                width, double jersey interlock, rib, body size machine, etc.
                <br />
                <br />
                After many years of development, our company has become one of
                the largest textile machine suppliers in the domestic and all
                over the world. We have launched the office of after-sales
                services in many appointments in China and also sell machines in
                many countries like Bangladesh, Brazil, Argentina, Mexico, Peru,
                Ecuador, Iran, Syria, Egypt, India, Turkey, Vietnam, Pakistan,
                Zambia, South Korea etc.
                <br />
                <br />
                By the professional technique and a good continuous service, our
                goal is to establish{" "}
                <span className="font-bold">Buen-Knit</span> as one of the top
                famous brand circular machines in the world.
              </p>

              <h1 className="text-4xl font-bold py-6 w-full border-b">
                Buen-Knit Factory
              </h1>
              <br />
              <VideoCarousel />
                <br />
              <div className="w-full flex gap-2 rounded-lg overflow-hidden">
                <CarouselPlugin from={1} />
                <CarouselPlugin from={7} />
              </div>

              <h1 className="text-4xl font-bold py-6 w-full border-b">
                Certificates
              </h1>
                  <br />
              {/* Clickable Certificate Image */}
              <img
                src="/bkcer.jpg"
                className="w-1/2 cursor-pointer"
                alt="Certificate"
                onClick={() => setSelectedImage("/bkcer.jpg")}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutBuenKnit;
