"use client";
import { CardAbout } from "@/components/Card";
import Footer from "@/components/Footer";
import { MainNavbar } from "@/components/Navbar";
import galery1 from "@/assets/galery-1.png";
import {
  innovation,
  collaboration,
  sustainability,
  socialEmpowerment,
} from "@/components/Icons";
import map from "@/assets/map.png";

import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.png";
import team3 from "@/assets/team-3.png";
import team4 from "@/assets/team-4.png";

import dynamic from "next/dynamic";
import Link from "next/link";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});
const aboutItems = [
  {
    id: 1,
    title: "Innovation",
    desc: "Dedicated to fostering innovation in various domains",
    image: innovation,
    color: "F4F27E",
  },
  {
    id: 2,
    title: "Collaboration",
    desc: "Collaboration between SNU, Samick, and a focus on sustainability",
    image: collaboration,
    color: "00A9FF",
  },
  {
    id: 3,
    title: "Sustainability",
    desc: " The center recognizes the importance of long-term impact and responsible  ",
    image: sustainability,
    color: "00A9FF",
  },
  {
    id: 4,
    title: "Social Empowerment",
    desc: "Commitment to using innovation and collaboration to positively influence communities. ",
    image: socialEmpowerment,
    color: "F4F27E",
  },
];

export default function Page() {
  return (
    <>
      <div className="fixed z-20 w-full ">
        <MainNavbar />
      </div>
      <div
        id="banner"
        className="w-full  bg-gradient-to-r from-green-200 via-green-400 to-green-500 h-52 px-5 flex justify-center items-center md:px-20"
      >
        <h1 className="text-[42px] text-white text">ABOUT</h1>
      </div>

      <div
        id="about"
        className="max-w-[1520px] m-auto px-5 lg:px-20 pb-10 font-primary"
      >
        <div className=" rounded-lg m-auto relative z-10 pt-20 bg-white">
          <VideoPlayer />
          <small>inauguration of the scube center and cultural stage</small>
        </div>
        <div className="py-8">
          <h2 className="text-center  text-2xl md:text-[38px] font-bold mb-4">
            What is S-Cube Center?
          </h2>
          <p className="text-center text-base">
            S-CUBE Center means 3S, which are SNU, Samick, and Sustainability.
            S-Cube is an innovation center that focuses on developing
            sustainable social empowerment programs in technology, education,
            business, and others.
          </p>
        </div>
        <div className=" hidden lg:grid grid-cols-3 items-center justify-center gap-[50px] ">
          <div>
            <CardAbout {...aboutItems[0]} />
          </div>
          <div className="flex flex-col gap-[50px]">
            <CardAbout {...aboutItems[1]} />
            <CardAbout {...aboutItems[2]} />
          </div>
          <div>
            <CardAbout {...aboutItems[3]} />
          </div>
        </div>
        <div className=" lg:hidden grid grid-cols-2  gap-3 ">
          <CardAbout {...aboutItems[0]} />
          <CardAbout {...aboutItems[1]} />

          <CardAbout {...aboutItems[2]} />
          <CardAbout {...aboutItems[3]} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-8">
          <div className="w-full">
            <ExportedImage
              src={galery1}
              width={500}
              height={500}
              className="w-full h-80 object-cover"
            />
          </div>
          <div className="h-full flex flex-col justify-center">
            <h2 className="text-left  text-2xl md:text-[38px] font-bold mb-4">
              History
            </h2>
            <p className="text-left text-base">
              S-CUBE Center is committed to using innovation and collaboration
              to positively influence communities. The center recognizes the
              importance of long-term impact and responsible innovation and
              therefore strives to develop sustainable social empowerment
              programs in technology, education, business, and others.
            </p>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-center  text-2xl md:text-[38px] font-bold mb-8">
            Our Team
          </h2>
          <div className="w-full lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex flex-col items-center gap-3">
              <ExportedImage
                src={team1}
                width={500}
                height={500}
                className="w-60 h-60 object-fill"
              />
              <div>
                <h3 className="font-bold text-lg">Prof Jun-Seok Hwang</h3>
                <p className="text-center text-base">Advisory</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ExportedImage
                src={team3}
                width={500}
                height={500}
                className="w-60 h-60 object-fill"
              />
              <div>
                <h3 className="font-bold text-lg">Budi Irmawati</h3>
                <p className="text-center text-base">General Manager</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ExportedImage
                src={team4}
                width={500}
                height={500}
                className="w-60 h-60 object-fill"
              />
              <div>
                <h3 className="font-bold text-lg">Ida Bagus Ketut Widiartha</h3>
                <p className="text-center text-base">Deputy Manager</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-3">
              <ExportedImage
                src={team2}
                width={500}
                height={500}
                className="w-60 h-60 object-fill"
              />
              <div>
                <h3 className="font-bold text-lg">I Wayan Agus Arimbawa</h3>
                <p className="text-center text-base">Program and Cooperation</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#F8FFEC] font-primary">
        <div
          id="contact"
          className="max-w-[1520px] m-auto px-5 lg:px-20 pt-5 pb-10"
        >
          <h2 className="text-center text-3xl  md:text-[38px] font-bold mb-3 md:mb-7">
            Contact
          </h2>
          <div className="flex flex-col lg:flex-row gap-5">
            <Link
              href="https://maps.app.goo.gl/pvaBZtr3xfrjYJF37"
              className="w-full lg:w-[700px] overflow-hidden"
              target="_blank"
            >
              <ExportedImage
                src={map}
                alt="hero"
                width={700}
                height={500}
                className="w-full hover:scale-105 transition-all duration-500 ease-in-out"
              />
            </Link>

            <div className="flex flex-col gap-5">
              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p>
                  Building A Level 3 Faculty of Engineering, University of
                  Mataram
                </p>
              </div>
              <div className="flex md:flex-col gap-5 flex-row  justify-between">
                <div>
                  <h3 className="font-bold text-xl">Number</h3>
                  <p>081775262222</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p>scube@unram.ac.id</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
