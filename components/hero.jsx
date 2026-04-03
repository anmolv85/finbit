"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { useEffect, useRef } from "react";

const Herosection = () => {

const imageRef = useRef();

useEffect(() => {
    const imageElement = imageRef.current;

    const handleScroll=()=>{
        const scrollPosition = window.scrollY;
        const scrollThreshold = 100;

        if(scrollPosition>scrollThreshold) {
            imageElement.classList.add("scrolled");
        } else {
            imageElement.classList.remove("scrolled");
        }
    };

    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, [])

  return (
    <div className="pb-20 px-4">
        <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title">
                Manage Your Finances <br /> with Intelligence
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xlmx-auto">
                An AI-powered personal finance management platform that helps you track,
               analyze, and optimize your spending habits, providing personalized real-time insights.
               </p> 
            <div>
                <a href="/dashboard">
                <Button className="px-8 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition duration-300 ease-in-out">
                    Get Started
                </Button>
                </a>
            </div>
            <div className="hero-image-wrapper">
                <div ref={imageRef} className="hero-image">
                    <Image 
                    src="/banner.png" 
                    width={1280} 
                    height={720}
                    alt="Dashboard Preview"
                    className="rounded-lg shadow-2xl border mx-auto"
                    priority/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default  Herosection;
