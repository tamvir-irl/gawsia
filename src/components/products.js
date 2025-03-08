import ProductCard from "@/components/productcard";
export default function Home() {
  const descriptions = {
    product1: "Installing closed tracks cams including knit, tuck and miss cams, the Single Jersey Machine is designed with a central stitch control system to adjust different levels of fabric density easily and conveniently, equipped as standard with different gauges of cylinders which are easy to change from the machine and are able meet the different kinds requirements of the demanding knitting market.",
    product2: "Installing closed 2 tracks cam in dial and 4 tracks cams in cylinder, the double jersey machine can knit many kinds of fabric such as twill, interling fabric, air layer fabric, little jacquard interlayer gasket, bubble-bubble, crape, knitting cloth, pique fabric etc. The 2 dial CAM or 4 cylinder CAM can be control by one clock totally, which can move the each CAM position easier in same level",
    product3: "Various of jacquard patterns can be input to the machine by USB device, electronic jacquard machine aims to keep up with current fashion trends. The computer selection system can be made a circle needle, tuck and float three power position needle selection system Components and parts for driving system of electronic jacquard machine is made by superior material through high efficient heat treatment."
  }
  return (
    <div className="w-full h-[110%] p-6 bg-white flex flex-col items-center">
        <h1 className="text-gray-900 text-6xl font-black text-center uppercase">Products</h1>
        <hr className="w-1/2 hbar"/>
        <div className="w-full h-full bg-white grid grid-cols-3">
        <div className="w-full h-full p-6 flex flex-col items-center justify-center">
      <ProductCard title={"Single Jersey Machines"} description={descriptions.product1.substring(0, 243) + "..."} bg={"/p3.png"}/>
      </div>
      <div className="w-full h-full p-6 flex flex-col items-center justify-center">
        <ProductCard title={"Double Jersey Machines"} description={descriptions.product2.substring(0, 225) + "..."} bg={"/p1.png"}/>
      </div>
      <div className="w-full h-full p-6 flex flex-col items-center justify-center">
      <ProductCard title={"Electronic Jacquard Machines"} description={descriptions.product3.substring(0, 228) + "..."} bg={"/p2.png"}/>
      </div>
      
    </div>
    
    </div>
  );
}
