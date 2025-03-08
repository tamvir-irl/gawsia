"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "./dropdown";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hidden, setHidden] = useState(false);

  const units = ["Circular Knitting Machine"];
  const about = ["ABOUT US" , "MISSION & VISION", "WHY CHOOSE US", "CERTIFICATES"];
  const products = [
    "Single Jersey Machines",
    "Double Jersey Machines",
    "Electronic Jacquard Machines",
    "CIRCULAR KNITTING MACHINES SPARE PARTS"
  ];
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 100 && !hidden) {
      setHidden(true);
    }
    else if (currentScrollY <= 100 && hidden) {
      setHidden(false);
    }
    setScrollPosition(currentScrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the scroll event listener
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hidden]);

  return (
    <nav
      className={`w-screen p-4 flex justify-around items-center fixed bg-[rgba(255,255,255,0.6)] backdrop-blur transition-transform duration-300 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } z-50`}
    >
      <Image className="ml-0" src={"/logo.png"} width={120} height={120} />
      <ul className="flex gap-10 text-gray-600 mr-10 uppercase font-bold">
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Dropdown title={"WHO WE ARE"} items={about} />
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Dropdown title={"Business Unit"} items={units} />
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Dropdown title={"Products"} items={products} />
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <a href="#">Clients</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <a href="#">Gallery</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
        <Dropdown title={"CONNECT"} items={["CONTACT US", "LEADERSHIP TEAM", "NEWS AND UPDATES", "FEEDBACK"]} />
        </li>
      </ul>
    </nav>
  );
}
