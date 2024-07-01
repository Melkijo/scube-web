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
import bagan from "@/assets/bagan.png";
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
        className="flex items-center justify-center w-full px-5 pt-20 bg-gradient-to-r from-green-200 via-green-400 to-green-500 h-52 md:px-20"
      >
        <h1 className="text-[42px] text-white text">ABOUT</h1>
      </div>

      <div
        id="about"
        className="max-w-[1520px] m-auto px-5 lg:px-20 pb-10 font-primary"
      >
        <div className="relative z-10 pt-20 m-auto bg-white rounded-lg ">
          <VideoPlayer />
          <small>inauguration of the scube center and cultural stage</small>
        </div>
        <div className="py-8">
          <h2 className="text-center  text-2xl md:text-[38px] font-bold mb-4">
            What is S-Cube Center?
          </h2>
          <p className="text-base text-center">
            S-CUBE Center means 3S, which are SNU, Samick, and Sustainability.
            S-Cube is an innovation center that focuses on developing
            sustainable social empowerment programs in technology, education,
            business, and others.
          </p>
        </div>
        <div className=" hidden lg:grid grid-cols-3 items-center justify-center gap-[50px] px-0 md:px-32">
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
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          <CardAbout {...aboutItems[0]} />
          <CardAbout {...aboutItems[1]} />

          <CardAbout {...aboutItems[2]} />
          <CardAbout {...aboutItems[3]} />
        </div>

        <div className="grid grid-cols-1 gap-8 mt-10 md:grid-cols-2">
          <div className="w-full">
            <ExportedImage
              src={galery1}
              width={500}
              height={500}
              className="object-cover w-full h-full lg:h-80"
            />
          </div>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-center md:text-left  text-2xl md:text-[38px] font-bold mb-4">
              History
            </h2>
            <p className="text-base text-justify md:text-left">
              Mataram University (UNRAM), in collaboration with Seoul National
              University Social Responsibility (SNU SR) and Samick, is launching
              the SCUBE Center. Inaugurated in 2022, the SCUBE Center is set to
              offer a range of training programs including Korean language and
              graphic design, providing valuable educational opportunities for
              students and enthusiasts alike. Furthermore, SNU SR and Unram's
              LPPM have decided to help community service activities in
              economically promising area like villages with new startups or
              potential small businesses. This marks the beginning of the Global
              Real Work Experience or Kuliah Kerja Nyata (KKN) program
              implementation.
            </p>
          </div>
        </div>
      </div>

      <div className="my-10 bg-red-100 md:my-20">
        <div className="max-w-[1520px] m-auto py-10 px-5 lg:px-20">
          <h2 className="text-2xl md:text-[38px] font-bold mb-7 text-center  ">
            Our Vision and Goals
          </h2>
          <div className="grid grid-cols-2 gap-5 mb-5 ">
            <div className=" text-center place-self-end h-full max-w-[400px] bg-red-400 py-3 px-4 rounded-lg text-white font-semibold">
              <p>Realizing the effective social contribution</p>
            </div>
            <div className="text-center max-w-[400px]  h-full bg-red-400 py-3 px-4 rounded-lg text-white font-semibold">
              <p>Creating sustainable social development</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-3">
            <div className="text-center place-self-end h-full max-w-[400px] bg-red-500 py-3 px-4 rounded-lg text-white font-semibold">
              <p>Increase the capacity and economic level of the community</p>
            </div>
            <div className="text-center place-self-center h-full max-w-[400px] bg-red-500 py-3 px-4 rounded-lg text-white font-semibold">
              <p>Disseminate global knowledge and resources</p>
            </div>
            <div className="text-center  max-w-[400px] h-full bg-red-500 py-3 px-4 rounded-lg text-white font-semibold">
              <p>As a model of sustainable social contribution</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-0 md:mt-20 max-w-[1520px] m-auto py-10 px-5 lg:px-20">
        <h2 className="text-center  text-2xl md:text-[38px] font-bold mb-8">
          Our Teams
        </h2>
        <div className="flex justify-center">
          <ExportedImage src={bagan} width={500} height={500} />
        </div>
        <div className="w-full lg:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col items-center gap-3">
            <ExportedImage
              src={team1}
              width={500}
              height={500}
              className="object-fill w-60 h-60"
            />
            <div>
              <h3 className="text-lg font-bold">Prof Jun-Seok Hwang</h3>
              <p className="text-base text-center">Advisory</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ExportedImage
              src={team3}
              width={500}
              height={500}
              className="object-fill w-60 h-60"
            />
            <div>
              <h3 className="text-lg font-bold">Budi Irmawati</h3>
              <p className="text-base text-center">General Manager</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ExportedImage
              src={team4}
              width={500}
              height={500}
              className="object-fill w-60 h-60"
            />
            <div>
              <h3 className="text-lg font-bold">Ida Bagus Ketut Widiartha</h3>
              <p className="text-base text-center">Deputy Manager</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <ExportedImage
              src={team2}
              width={500}
              height={500}
              className="object-fill w-60 h-60"
            />
            <div>
              <h3 className="text-lg font-bold">I Wayan Agus Arimbawa</h3>
              <p className="text-base text-center">Program and Cooperation</p>
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
          <div className="flex flex-col gap-5 lg:flex-row">
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
                className="w-full transition-all duration-500 ease-in-out hover:scale-105"
              />
            </Link>

            <div className="flex flex-col gap-5">
              <div>
                <h3 className="text-xl font-bold">Location</h3>
                <p>
                  Building A Level 3 Faculty of Engineering, University of
                  Mataram
                </p>
              </div>
              <div className="flex flex-row justify-between gap-5 md:flex-col">
                <div>
                  <h3 className="text-xl font-bold">Number</h3>
                  <p>+6281775262221</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
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
