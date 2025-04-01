"use client"
import Footer from "@/components/footer";
import Link from "next/link";
import { products } from "../utils/products";
import CarouselPlugin from "@/components/slide2";
import { useRouter } from "next/navigation";
const AboutUs = () => {
  const router = useRouter()
  router.push('/')
  return (
    <>
    
    </>
  );
};

export default AboutUs;
