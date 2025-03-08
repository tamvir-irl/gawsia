import Link from "next/link";

const OurServices = () => {
  return (

    <div className="py-4  w-full h-full">
        <img className="mt-28" src="/B1.jpg" alt="" />
      <div className="mt-2 px-[12.4rem] w-full h-full">
        
        <div className="w-full h-full flex">
          <div className="w-1/4 h-full flex flex-col items-center px-2 py-2">
            <div className="w-full  flex flex-col py-5 border">
              <h1 className="w-full text-2xl font-bold border-l-4 border-slate-900 p-4">
                Our Services
              </h1>
              <div className="w-full px-6 uppercase">
                <div className="w-full border-b py-2">
                    <Link className="hover:text-gray-500 hover:underline" href="/products/knitting-machine">1. Single Jersey Machines</Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="hover:text-gray-500 hover:underline" href="/products/knitting-machine">2. Double Jersey Machines</Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="hover:text-gray-500 hover:underline" href="/products/knitting-machine">3. Electronic Jacquard Machines</Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="hover:text-gray-500 hover:underline" href="/products/knitting-machine">4. Circular Knitting Machines SPare Parts</Link>
                </div>
              </div>
            </div>
            <div className="w-full  flex flex-col py-5 border">
              <h3 className="w-full text-2xl border-l-4 border-slate-900 p-4 font-bold">Contact</h3>
              <div className="w-full px-6 uppercase">
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">
                    <span className="text-sm ">
                    ADD: <span className="hover:text-gray-500 hover:underline">4th Floor, Navana Tower, 45 Gulshan Ave
                    Dhaka-1212, Bangladesh.</span>
                  </span>
                    </Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="flex flex-col" href="/products/knitting-machine">
                    <span>Phone: <span className="text-sm hover:text-gray-500 hover:underline">+8801995767752</span>, <span className="text-sm hover:text-gray-500 hover:underline">+8801929969797</span></span>
                    <span className="text-sm pl-[4.1rem]"><span className="hover:text-gray-500 hover:underline">+8801990009039</span>, <span className="hover:text-gray-500 hover:underline">+8801910519200</span></span>
                    </Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">Hotline: <span className="text-sm hover:text-gray-500 hover:underline">+8801886610800</span></Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">WeChat: <span className="text-sm hover:text-gray-500 hover:underline">+8801995767752</span></Link>
                </div>
                <div className="w-full border-b py-2">
                    <Link className="" href="/products/knitting-machine">Email: <span className="text-sm hover:text-gray-500 hover:underline"><span className="lowercase">gawsiainternationaltrade@gmail.com</span></span></Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/4 h-full py-8 px-10">
            <h1 className="text-4xl font-bold py-6 w-full border-b">Our Services</h1>
            <br />
            <p className="text-justify text-xl ">
            In the world of revolution, we want to serve the best quality circular knitting machine (Buen-Knit) in Bangladesh. We always try to be connected with our clients and give the best service. We have high production capacity, good machine performance, a professional technical team, best competitive pricing and 1-year warranty support.
            <br />
            <br />
1. Pre-sale Service: We can provide you with fabric samples and product brochures for free, inclusive of freight.
<br />
2. Selling Service: a) The delivery time of our products is approximately 70-90 days after we have received the deposit or letter of credit.
b) There is no service for quick-wear parts.
<br />
3. After-sale Service: a) The warranty of machines is 1 year. We will freely replace any parts with quality problems under warranty, except quick-wear parts.
b) If you need technical support, technicians will be instantly arranged to give a hand.
c) Only when the machines and parts pass the tightened inspection will we deliver them.
<br />
4. Other Service: Our technicians may install machinery equipment for you. A free training service is available if necessary. 

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
