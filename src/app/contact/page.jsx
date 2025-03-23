"use client"
import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";
import { useState } from "react";

const AboutUs = () => {
  const [result, setResult] = useState("");
  const [resultColor, setResultColor] = useState("text-blue-400");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      setResultColor("text-green-400");
      event.target.reset();
      setTimeout(() => {
        setResult(""); 
      }, 2000)
    } else {
      console.log("Error", data);
      setResultColor("text-red-400");
      setResult(data.message);
      setTimeout(() => {
        setResult(""); 
      }, 2000)
    }
    
  };

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
                      ADD: <span className="hover:text-gray-500 hover:underline">
                        4th Floor, Navana Tower, 45 Gulshan Ave Dhaka-1212, Bangladesh.
                      </span>
                    </span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="flex flex-col" href="/products/knitting-machine">
                    <span>
                      Phone: <span className=" hover:text-gray-500 hover:underline">+8801995767752</span>, <span className=" hover:text-gray-500 hover:underline">+8801929969797</span>
                    </span>
                    <span className=" pl-[4.1rem]">
                      <span className="hover:text-gray-500 hover:underline">+8801990009039</span>, <span className="hover:text-gray-500 hover:underline">+8801910519200</span>
                    </span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine">
                    Hotline: <span className=" hover:text-gray-500 hover:underline">+8801886610800</span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine">
                    WeChat: <span className=" hover:text-gray-500 hover:underline">+8801995767752</span>
                  </Link>
                </div>
                <div className="w-full border-b py-2">
                  <Link className="" href="/products/knitting-machine">
                    Email: <span className=" hover:text-gray-500 hover:underline">
                      <span className="lowercase">gawsiainternationaltrade@gmail.com</span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-2/3 h-full py-8 px-10">
            <h1 className="text-4xl font-bold py-6 w-full border-b">Contact Us</h1>
            <br />
            <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center">
              <input type="text" name="name" required placeholder="Your Name" className="border p-2 w-3/4" />
              <input type="email" name="email" required placeholder="Your Email" className="border p-2 w-3/4" />
              <textarea name="message" required placeholder="Your Message" className="border p-2 h-40 w-3/4"></textarea>
              <button type="submit" className="bg-blue-500 text-white p-2 w-3/4 rounded">Submit</button>
            </form>
            <span className={`${resultColor}`}>{result}</span>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default AboutUs;
