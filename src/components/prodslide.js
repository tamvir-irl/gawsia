import React, { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { X } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export function ProdCar({ length, path }) {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: false }));
  const [zoomedImgIndex, setZoomedImgIndex] = useState(null);

  const handleThumbnailClick = (index) => {
    setZoomedImgIndex(index);
  };

  return (
    <>
      <Carousel plugins={[plugin.current]} className="w-full h-full rounded-lg overflow-hidden">
        <CarouselContent>
          {Array.from({ length }).map((_, index) => (
            <CarouselItem key={index}>
              <Card className="border-none p-0">
                <CardContent className="flex aspect-square items-center justify-center w-full h-full">
                  <img
                    src={`${path}/${index + 1}.jpg`}
                    alt={`Image ${index + 1}`}
                    className="cursor-pointer object-cover w-full h-full rounded-lg"
                    onClick={() => setZoomedImgIndex(index)}
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      {/* Zoomed Image Modal */}
      {zoomedImgIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col items-center justify-center p-4">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setZoomedImgIndex(null)}
          >
            <X />
          </button>

          {/* Main Zoomed Image */}
          <div className="flex-1 flex items-center justify-center max-h-[80vh]">
            <img
              src={`${path}/${zoomedImgIndex + 1}.jpg`}
              alt="Zoomed"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
          </div>

          {/* Thumbnails */}
          <div className="mt-4 flex gap-2 overflow-x-auto max-w-full py-2 px-4 bg-black bg-opacity-50 rounded">
            {Array.from({ length }).map((_, index) => (
              <img
                key={index}
                src={`${path}/${index + 1}.jpg`}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => handleThumbnailClick(index)}
                className={`w-20 h-20 object-cover rounded cursor-pointer border-2 transition-all duration-200 ${
                  index === zoomedImgIndex
                    ? "border-white scale-105"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
