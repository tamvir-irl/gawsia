"use client";

import { useRef, useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

export default function CarouselPlugin({ from, length, dir, w, captions }) {
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
      <Carousel
        plugins={[plugin.current]}
        className={`w-${w} rounded-lg overflow-hidden`}
        onMouseEnter={() => plugin.current.stop()}  // Pause on hover
        onMouseLeave={() => plugin.current.play()}  // Resume on leave
      >
        <CarouselContent className="rounded-lg">
          {Array.from({ length: length }).map((_, index) => {
            const imageUrl = `${dir}/${from + index}.jpg`;

            return (
              <CarouselItem key={index + from}>
                <div className="rounded-lg relative">
                  <Card className="border-none rounded-lg">
                    <CardContent
                      className="aspect-video rounded-lg overflow-hidden cursor-pointer relative"
                      style={{
                        backgroundImage: `url(${imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      onClick={() => setSelectedImage(imageUrl)}
                    >
                      {/* Caption Overlay */}
                      <div className="absolute left-0 bottom-0 w-full bg-gradient-to-t from-black/80 via-black/50 to-black/0 text-white text-center px-3 py-4">
                        <p className="mt-8 text-lg font-bold">{captions || "Our honorable Managing Director and Chief Executive Officer (CEO) visited the DTG Exhibition 2025"}</p>
                      </div>
                    </CardContent>
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
