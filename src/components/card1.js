import { useEffect, useRef, useState } from "react";

export default function Home({ title, description, bg, reversed }) {
  const [hasFadedIn, setHasFadedIn] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFadedIn) {
          setHasFadedIn(true); // Trigger fade-in once
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasFadedIn]); // Make sure it only re-runs when `hasFadedIn` changes

  return (
    <div
      ref={ref}
      className={`w-full h-auto bg-gray-100 grid grid-cols-1 gap-8 place-items-center p-16 transition-all duration-700 ease-out transform ${
        hasFadedIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
      }`}
    >
      {reversed ? (
        <div className="col-span-1 h-full flex justify-center">
          <div className="w-full bg-white rounded-lg shadow-md p-20 gap-20 flex">
          <div
              className={`w-1/2 aspect-video  rounded-lg shadow-lg overflow-hidden`}
            >
              <div style={{ backgroundImage: `url('${bg}')` }} className="w-full h-full bg-center bg-cover hover:scale-110 duration-200">

              </div>
            </div>
            <div className="w-1/2 pl-8 flex flex-col justify-center">
              <h1 className="text-gray-800 text-5xl font-bold leading-tight text-center uppercase tracking-wider">
                {title}
              </h1>
              <p className="text-gray-600 text-lg text-justify mt-6">
                {description}
              </p>
              <div className="grid place-content-center mt-8">
                <a
                  href="#"
                  className="text-lg text-white bg-gradient-to-r from-gray-800 to-gray-600 px-8 py-4 text-center rounded-md shadow-md transform transition duration-300 hover:scale-95 hover:from-gray-700 hover:to-gray-500"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="col-span-1 h-full flex justify-center">
          <div className="w-full bg-white rounded-lg shadow-md p-20 gap-20 flex">
            <div className="w-1/2 pr-8 flex flex-col justify-center">
              <h1 className="text-gray-800 text-5xl font-bold leading-tight text-center uppercase tracking-wider">
                {title}
              </h1>
              <p className="text-gray-600 text-lg text-justify mt-6">
                {description}
              </p>
              <div className="grid place-content-center mt-8">
                <a
                  href="#"
                  className="text-lg text-white bg-gradient-to-r from-gray-800 to-gray-600 px-8 py-4 text-center rounded-md shadow-md transform transition duration-300 hover:scale-95 hover:from-gray-700 hover:to-gray-500"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div
              className={`w-1/2 aspect-video  rounded-lg shadow-lg overflow-hidden`}
            >
              <div style={{ backgroundImage: `url('${bg}')` }} className="w-full h-full bg-center bg-cover hover:scale-110 duration-200">

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
