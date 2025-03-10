"use client"

import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card"; // Make sure you have ShadCN installed

export default function Home({ title, description, bg }) {
  const [isZoomed, setIsZoomed] = useState(false); // State to track zoom status

  const descriptions = {
    about: "Gawsia International Trade believes in serving the people and the country, not only in doing business and making profit. Our concern is to offer the best possible services and provide products to customers for attaining their full satisfaction. We, Gawsia International Trade, provide the best quality circular knitting machine. We are the only authorised dealer of Quanzhou Buen-Knit Machinery Co., Limited in Bangladesh.",
    services: "In the world of revolution, we want to serve the best quality circular knitting machine (Buen-Knit) in Bangladesh. We always try to be connected with our clients and give the best service. We have high production capacity, good machine performance, a professional technical team, competitive pricing and 1-year warranty support."
  };

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleCloseClick = () => {
    setIsZoomed(false);
  };

  return (
    <div className="w-11/12 flex justify-center items-center relative">
      <Card className="w-full bg-white rounded-2xl shadow-lg overflow-hidden p-0">
        <div className="w-full flex justify-center items-center py-12">
          <img
            src={bg}
            alt="Background"
            className="w-2/3 aspect-square object-cover transform transition duration-200 hover:scale-110 cursor-pointer"
            onClick={handleImageClick} // Open the zoomed-in image when clicked
          />
        </div>
        <CardContent className="p-4">
          <h1 className="text-gray-700 text-lg font-black uppercase">{title}</h1>
          <p className="text-gray-700 text-xl text-justify">{description}</p>
        </CardContent>
        <CardFooter className="w-full flex justify-end">
          <a
            href="#"
            className="text-lg text-white bg-gray-800 px-8 py-3 text-center rounded hover:bg-gray-700 transition duration-200 hover:scale-90"
          >
            Learn More
          </a>
        </CardFooter>
      </Card>

      {/* Modal for the zoomed image */}
      {isZoomed && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 backdrop-blur flex justify-center items-center z-50"
          onClick={handleCloseClick} // Close the modal when clicked outside of the image
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking the image itself
          >
            <img
              src={bg}
              alt="Zoomed Image"
              className="w-[80vw] h-[80vh] object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold"
              onClick={handleCloseClick} // Close button to hide the zoomed image
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
