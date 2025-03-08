import { useState, useEffect } from "react";

export default function Home() {
  const [index, setIndex] = useState(0);
  const urls = ["/1a.jpg", "/2a.jpg", "/3a.jpg"];  // Ensure these are in the /public folder

  const points = [
    {
      title: "Enhancing the Garments Industry",
      description:
        "We are committed to boosting Bangladesh's garments industry with high-quality circular knitting machines that enable better efficiency and production.",
    },
    {
      title: "Adapting to Global Changes",
      description:
        "Keeping pace with the rapidly changing world by providing technology that helps Bangladesh's textile industry stay globally competitive.",
    },
    {
      title: "Building Trust and Quality",
      description:
        "Our mission is to become a trusted name in every Bangladeshi's life, symbolizing reliability and quality, while contributing to the national economy.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % points.length);
    }, 10000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="duration-1000"
      style={{
        backgroundImage: `url(${urls[index]})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        width: "100vw",
        height: "100vh",
      }}
    >
      <div className="bg-[rgba(0,0,0,0.8)] p-6 w-full h-screen flex flex-col justify-center items-center">
        <h1 className="text-white text-6xl font-extrabold text-center uppercase mb-12">
          Mission & Vision
        </h1>

        {/* Loop through points and display based on index */}
        <div className="text-center flex flex-col justify-center items-center">
          <div className="h-24 w-24 p-6 rounded-full border-4 border-white flex justify-center items-center mb-8 animate-pulse">
            <h1 className="text-white text-5xl">{index + 1}</h1>
          </div>
          <h2 className="text-white text-5xl font-bold mb-4 uppercase">
            {points[index].title}
          </h2>
          <p className="text-white text-2xl font-medium leading-relaxed max-w-3xl">
            {points[index].description}
          </p>
        </div>

        {/* Indicators */}
        <div className="flex gap-6 mt-12">
          {points.map((_, i) => (
            <div
              key={i}
              className={`h-4 w-4 rounded-full cursor-pointer ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
