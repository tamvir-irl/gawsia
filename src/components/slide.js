"use client";

import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function CarouselPlugin({ from }) {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: false }));
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      {/* Image Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
          <button
            className="absolute top-4 right-4 text-white text-3xl"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
          <img src={selectedImage} className="max-w-[90%] max-h-[90%] object-contain" alt="Zoomed" />
        </div>
      )}

      {/* Carousel */}
      <Carousel plugins={[plugin.current]} className="w-1/2 rounded-lg overflow-hidden">
        <CarouselContent className="rounded-lg">
          {Array.from({ length: 6 }).map((_, index) => {
            const imageUrl = `/slides/${from + index}.jpg`;

            return (
              <CarouselItem key={index + from}>
                <div className="rounded-lg">
                  <Card className="border-none rounded-lg">
                    <CardContent
                      className="aspect-video rounded-lg overflow-hidden cursor-pointer"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      onClick={() => setSelectedImage(imageUrl)}
                    />
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </>
  );
}
