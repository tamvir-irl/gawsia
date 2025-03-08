import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="p-4 w-full h-full">
      <div className="mt-28 w-full h-full">
        <img src="/B1.jpg" alt="" />
        <div className="w-full h-full flex">
          <div className="w-1/4 h-full flex flex-col items-center px-2 py-2">
            <div className="w-full  flex flex-col py-5 border">
              <h1 className="w-full text-2xl border-l-4 border-yellow-400 p-4">
                Our Products
              </h1>
              <div className="w-full px-6 uppercase">
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">1. Single Jersey Machines</Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">2. Double Jersey Machines</Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">3. Electronic Jacquard Machines</Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">4. Circular Knitting Machines SPare Parts</Link>
                </div>
              </div>
            </div>
            <div className="w-full  flex flex-col py-5 border">
              <h3 className="w-full text-2xl border-l-4 border-yellow-400 p-4">Contact</h3>
              <div className="w-full px-6 uppercase">
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">
                    <span className="text-sm hover:text-white">
                    Add: 4th Floor, Navana Tower, 45 Gulshan Ave<br/>
                    Dhaka-1212, Bangladesh.
                  </span>
                    </Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="flex flex-col" href="/products/knitting-machine">
                    <span className="text-sm hover:text-white">Phone: +8801995767752, +8801929969797</span>
                    <span className="text-sm hover:text-white pl-[3.6rem]">+8801990009039, +8801910519200</span>
                    </Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine"><span className="text-sm hover:text-white">Hotline: +8801886610800</span></Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine"><span className="text-sm hover:text-white">WeChat: +8801995767752</span></Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine"><span className="text-sm hover:text-white">Email: <span className="lowercase">info@git.com</span></span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-full p-4">
            <h1 className="text-4xl font-bold py-6">About Us</h1>
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
  );
};

export default AboutUs;
