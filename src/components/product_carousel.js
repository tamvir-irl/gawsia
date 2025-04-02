"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils"; // ShadCN utility for styling

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
];

export default function ImageCarousel() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Image Thumbnails */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="h-24 w-24 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                onClick={() => setSelectedImage(image)}
              />
            </DialogTrigger>
            <DialogContent className="max-w-3xl bg-black/80 border-none shadow-lg flex justify-center items-center">
              <img src={selectedImage} alt="Zoomed Image" className="max-h-[80vh] max-w-full rounded-lg" />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
