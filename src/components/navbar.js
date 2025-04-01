"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Dropdown from "./dropdown";
import { products } from "@/app/utils/products";
import Link from "next/link";
export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [hidden, setHidden] = useState(false);

  const units = ["Circular Knitting Machine"];
  const unitPaths = ["/circular_knitting_machine"];

  const about = [
    "ABOUT US",
    "OUR SERVICES",
    "MISSION & VISION",
    "WHY CHOOSE US",
    "ABOUT BUEN-KNIT",
    "LEADERSHIP TEAM",
    "AWARDS AND ACHIEVEMENTS",
  ];
  const aboutPaths = [
    "/about",
    "/our_services",
    "/mission_vision",
    "/why_choose_us",
    "/about_buen_knit",
    "/leadership_team",
    "/awards_achievements",
  ];

  const productPaths = [
    "/single_jersey_machines",
    "/double_jersey_machines",
    "/electronic_jacquard_machines",
    "/circular_knitting_machines_spare_parts",
  ];

  const connect = ["CONTACT US", "NEWS AND UPDATES", "FEEDBACK"];
  const connectPaths = ["/contact", "/news_updates", "/feedback"];

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > 100 && !hidden) {
      setHidden(true);
    } else if (currentScrollY <= 100 && hidden) {
      setHidden(false);
    }
    setScrollPosition(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hidden]);
/**
 * ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }
 */
  return (
    <nav
      className={`w-screen p-4 flex justify-around items-center fixed bg-[rgba(255,255,255,0.6)] backdrop-blur transition-transform duration-300  z-50`}
    >
      <Image className="ml-0" src={"/logo.png"} width={120} height={120} />
      <ul className="flex gap-10 text-gray-600 mr-10 uppercase font-bold">
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Link href="/">Home</Link>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Dropdown title={"WHO WE ARE"} items={about} paths={aboutPaths} />
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Dropdown title={"Business Unit"} items={units} paths={unitPaths} />
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Dropdown title={"Products"} items={products} paths={productPaths} isLink={true} />
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <a href="/clients">Clients</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <a href="/gallery">Gallery</a>
        </li>
        <li className="hover:text-black hover:underline hover:underline-offset-4 duration-50">
          <Dropdown title={"CONNECT"} items={connect} paths={connectPaths} />
        </li>
      </ul>
    </nav>
  );
}
