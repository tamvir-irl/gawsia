import ImageCarousel from "@/components/product_carousel";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-4">Image Carousel with Zoom</h1>
      <ImageCarousel />
    </main>
  );
}
