"use client";
import Footer from "@/components/Footer";
import { MainNavbar } from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";
import galery1 from "@/assets/galery-1.png";
import gif1 from "@/assets/video/program1-gif.gif";
import ReactPlayer from "react-player";
import React, { useRef } from "react";
import {
  CardProgram,
  CardProgramLeft,
  CardProgramRight,
} from "@/components/Card";
import jsonData from "@/data/program.js";
export default function Page() {
  //get program data 1 from jsonData
  const parsedData = JSON.parse(jsonData);
  const program1 = parsedData.find((program) => program.id === 1);

  console.log(program1);
  return (
    <div>
      <MainNavbar />
      <main>
        <div
          id="banner"
          className="w-full  bg-gradient-to-r from-fuchsia-500 to-cyan-500 h-52 px-5 flex justify-center items-center lg:px-20"
        >
          <h1 className="text-[42px] text-white ">PROGRAM</h1>
        </div>
        <div className="max-w-[1520px] m-auto px-5 lg:px-20">
          <CardProgramLeft {...program1} />
          <CardProgramRight {...program1} />
          <CardProgramLeft {...program1} />
          <div className="h-96 w-0.5 rounded-full bg-gray-400  m-auto"></div>
          <h5 className="text-center text-sm md:text-base font-medium text-gray-400  my-10 w-full md:w-[500px]  m-auto">
            Exciting news! A new and improved program is on the horizon,
            offering an even better experience for all!
          </h5>
        </div>
      </main>
      <Footer />
    </div>
  );
}
