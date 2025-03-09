import Link from "next/link";

const WhyChooseUs = () => {
  return (

    <div className="py-4  w-full h-full">
      <img className="mt-28" src="/B1.jpg" alt="" />
      <div className="mt-2 px-[12.4rem] w-full h-full">

        <div className="w-full h-full flex">
          <div className="w-1/4 h-full flex flex-col items-center px-2 py-2">
            <div className="w-full  flex flex-col py-5 border">
              <h1 className="w-full text-2xl font-bold border-l-4 border-slate-900 p-4">
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
              <h3 className="w-full text-2xl border-l-4 border-slate-900 p-4 font-bold">Contact</h3>
              <div className="w-full px-6 uppercase">
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine">
                    <span className="text-sm hover:text-gray-500">
                      Add: 4th Floor, Navana Tower, 45 Gulshan Ave
                      Dhaka-1212, Bangladesh.
                    </span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="flex flex-col" href="/products/knitting-machine">
                    <span>Phone: <span className="text-sm hover:text-gray-500">+8801995767752</span>, <span className="text-sm hover:text-gray-500">+8801929969797</span></span>
                    <span className="text-sm pl-[3.6rem]"><span className="hover:text-gray-500">+8801990009039</span>, <span className="hover:text-gray-500">+8801910519200</span></span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine"><span className="text-sm hover:text-gray-500">Hotline: +8801886610800</span></Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine"><span className="text-sm hover:text-gray-500">WeChat: +8801995767752</span></Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine"><span className="text-sm hover:text-gray-500">Email: <span className="lowercase">info@git.com</span></span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-full py-8 px-10">
            <h1 className="text-4xl font-bold py-6 w-full border-b">Why Choose Us</h1>
            <br />
            <div className="text-justify text-xl ">
              <p>We always believe that to doing long time business is to satisfy our customers by proving them good quality machines and best after sales services. The main reasons for choosing us in bellow:</p>
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
  );
};

export default WhyChooseUs;
