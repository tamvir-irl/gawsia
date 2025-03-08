"use client"
import Navbar from "@/components/navbar";
import Carousel from "@/components/carousel";
import Section1 from "@/components/card1";
import Footer from "@/components/footer";
import Products from "@/components/products"
import Carousel2 from "@/components/carousel2"
export default function Home() {
  const descriptions = {
    about: "Gawsia International Trade believes in serving the people and the country, not only in doing business and making profit. Our concern is to offer the best possible services and provide products to customers for attaining their full satisfaction. We, Gawsia International Trade, provide the best quality circular knitting machine. We are the only authorised agent of Quanzhou Buen-Knit Machinery Co., Limited in Bangladesh.",
    services : "In the world of revolution, we want to serve the best quality circular knitting machine (Buen-Knit) in Bangladesh. We always try to be connected with our clients and give the best service. We have high production capacity, good machine performance, a professional technical team, best competitive pricing and 1-year warranty support."
  }
  return (
    <div className="w-full h-screen">
      <Navbar />
      <Carousel />
      <Section1 title={"About Us"} description={descriptions.about} bg={'/about.jpg'}/>
      <Section1 title={"Our Services"} description={descriptions.services} bg={'/2.jpg'} reversed={true}/>
      <br />
      <br />
      <br />
      <br />
      <Products />
      <br />
      <br />
      <br />
      <br />
      <Carousel2 />
      <Footer />
    </div>
  );
}
