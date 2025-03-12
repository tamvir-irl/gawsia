import TeamSection from "@/components/leader";
import { products } from "../utils/products";
import Link from "next/link";
import Footer from "@/components/footer";
export default function Leadership(){
    return(
        <>
        <div className="py-4  w-full h-full">
      <img className="mt-28" src="/B1.jpg" alt="" />
      <div className="mt-2 px-[12.4rem] w-full h-full">

        <div className="w-full h-full flex">
          
          <div className="w-full h-full py-8 px-10">
            <h1 className="text-4xl font-bold py-6 w-full border-b">Leadership Team</h1>
            <br />
            <TeamSection />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
    )
}