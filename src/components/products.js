import ProductCard from "@/components/productcard";
export default function Home() {
  const descriptions = {
    product1: "The Single Jersey Machine features closed track cams and a central stitch control system for easy fabric density adjustment. It comes with interchangeable cylinder gauges to meet diverse knitting needs.",
    product2: "The Double Jersey Machine, with 2-track dial cams and 4-track cylinder cams, knits various fabrics like twill, pique, and jacquard. A unified clock control adjusts cam positions easily.",
    product3: "The electronic jacquard machine supports USB pattern input, three-position needle selection, and durable heat-treated components."
  }
  return (
    <div className="w-full h-[110%] p-6 bg-white flex flex-col items-center">
        <h1 className="text-gray-900 text-6xl font-black text-center uppercase">Products</h1>
        <hr className="w-1/2 hbar"/>
        <div className="w-full h-full bg-white grid grid-cols-3">
        <div className="w-full h-full p-6 flex flex-col items-center justify-center">
      <ProductCard title={"SINGLE JERSEY CIRCULAR KNITTING MACHINES"} description={descriptions.product1} bg={"/p3.png"}/>
      </div>
      <div className="w-full h-full p-6 flex flex-col items-center justify-center">
        <ProductCard title={"DOUBLE JERSEY CIRCULAR KNITTING MACHINES"} description={descriptions.product2} bg={"/p1.png"}/>
      </div>
      <div className="w-full h-full p-6 flex flex-col items-center justify-center">
      <ProductCard title={"COMPUTERIZED/ELECTRONIC JACQUARD CIRCULAR KNITTING MACHINES"} description={descriptions.product3} bg={"/p2.png"}/>
      </div>
      
    </div>
    
    </div>
  );
}
