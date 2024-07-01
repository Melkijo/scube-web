"use client";
import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
import dynamic from "next/dynamic";
import { CardAbout, CardProgram } from "@/components/Card";
import {
  Arrow,
  ArrowDownHero,
  innovation,
  collaboration,
  sustainability,
  socialEmpowerment,
} from "@/components/Icons";
import galery1 from "@/assets/galery-1.png";
import galery2 from "@/assets/galery-2.png";
import galery3 from "@/assets/galery-3.png";
import galery4 from "@/assets/galery-4.png";
import galery5 from "@/assets/galery-5.png";
import galery6 from "@/assets/galery-6.png";
import galery7 from "@/assets/galery-7.png";
import testimoni1 from "@/assets/testimoni-1.jpg";
import testimoni2 from "@/assets/team-2.png";
import Marquee from "react-fast-marquee";
import map from "@/assets/map.png";
import Link from "next/link";
import { MainNavbar } from "@/components/Navbar";
import hero3 from "@/assets/hero-3.png";
import { TypeAnimation } from "react-type-animation";
import Footer from "@/components/Footer";
import jsonData from "@/data/program.js";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

export default function Home() {
  const parsedData = JSON.parse(jsonData);
  return (
    <>
      <div className="fixed z-20 w-full ">
        <MainNavbar />
      </div>

      <main className="font-primary">
        <div
          id="hero"
          className=" max-w-[1520px] m-auto  overflow-hidden pt-16"
        >
          <div className="h-[500px] md:h-[620px] relative">
            <ExportedImage
              placeholder="empty"
              src={hero1}
              alt="hero"
              width={500}
              height={500}
              className="absolute animate-slow-left  w-[250px] md:w-[500px] h-[250px] md:h-[500px]  object-cover"
            />
            <ExportedImage
              placeholder="empty"
              src={hero2}
              alt="hero"
              width={500}
              height={500}
              className="absolute right-0 top-60 md:top-32 animate-slow-right w-[300px] md:w-[500px] h-[300px] md:h-[500px]  object-cover"
            />
            <h1 className="relative z-10 font-display pt-40 md:pt-32 px-10 font-medium uppercase text-[22px] md:text-[48px] text-center w-full lg:w-[1000px]  leading-normal md:leading-[85px]  m-auto">
              Where{" "}
              <span className="text-[#FFDA57] underline">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Ideas",
                    1500, // wait 1s before replacing "Mice" with "Hamsters"
                    "Student",
                    1500,
                    "Spirits",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>{" "}
              Take Flight and Knowledge Knows No Bounds
            </h1>

            <div className="relative">
              <Link
                href="#about"
                className="animate-bounce hidden md:block absolute z-10 top-12 md:top-16 left-0 right-0 mx-auto w-[30px] md:w-[50px] h-[30px] md:h-[50px]"
              >
                <ArrowDownHero />
              </Link>
              <ExportedImage
                placeholder="empty"
                src={hero3}
                alt="hero"
                width={500}
                height={500}
                className="relative left-0 right-0 z-0 mx-auto top-10"
              />
            </div>
          </div>
        </div>

        <div id="marquee" className="relative z-10 py-3 text-white bg-black">
          <Marquee autoFill>
            <div className="mr-5 text-xs font-black md:text-xl">
              SEOUL NATIONAL UNIVERSITY
            </div>
            <div className="mr-5 text-xs font-black md:text-xl">
              MATARAM UNIVERSITY
            </div>
            <div className="mr-5 text-xs font-black md:text-xl">SAMIC</div>
          </Marquee>
        </div>

        <div id="about" className="max-w-[1520px] m-auto px-5 lg:px-20 pb-10">
          <div className="relative z-10 pt-20 m-auto bg-white rounded-lg ">
            <VideoPlayer />
            <small>inauguration of the scube center and cultural stage</small>
          </div>
          <div className="flex flex-col items-center justify-center py-8">
            <h2 className="text-center  text-2xl md:text-[38px] font-bold mb-4">
              What is S-Cube Center?
            </h2>
            <p className="text-base text-center w-full lg:w-[700px]">
              S-CUBE Center means 3S, which are SNU, Samick, and Sustainability.
              S-Cube is an innovation center that focuses on developing
              sustainable social empowerment programs in technology, education,
              business, and others.
            </p>
          </div>
          <div className=" hidden lg:grid grid-cols-3 items-center justify-center gap-[50px] px-0 md:px-32 ">
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
        </div>

        <div className="max-w-[1520px] m-auto pt-10 px-5 flex flex-col justify-center items-center gap-7 md:px-20 pb-10 w-full lg:w-[1200px]">
          <Carousel
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={4000}
            stopOnHover={true}
            className="w-full"
          >
            <div>
              <h2 className="font-black text-[24px] md:text-[36px] text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                "I recently had the pleasure of experiencing the wonders of
                Scube Center, and I must say, it exceeded all my expectations."
              </h2>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="overflow-hidden border border-black rounded-full max-w-14 md:max-w-16">
                  <ExportedImage
                    placeholder="empty"
                    src={testimoni1}
                    width={200}
                    height={200}
                    className="object-cover"
                  />
                </div>
                <div className="">
                  <h5 className="text-sm font-black text-left md:text-lg">
                    Melki Jonathan Andara
                  </h5>
                  <p className="text-xs text-left md:text-base">
                    Voluteer KKN Winter 2023
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-black text-[24px] md:text-[36px] text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                "Scube Center isn't just a facility, it's a hub of creativity,
                collaboration, and cutting-edge technology"
              </h2>
              <div className="flex items-center justify-center gap-3 mt-5">
                <div className="overflow-hidden border border-black rounded-full max-w-14 md:max-w-16">
                  <ExportedImage
                    placeholder="empty"
                    src={testimoni2}
                    width={200}
                    height={200}
                    className="object-cover "
                  />
                </div>
                <div className="">
                  <h5 className="text-sm font-black text-left md:text-lg">
                    I Wayan Agus Arimbawa
                  </h5>
                  <p className="text-xs text-left md:text-base">
                    Program and Cooperation
                  </p>
                </div>
              </div>
            </div>
          </Carousel>
        </div>

        <div id="program" className="bg-[#F8FFEC] py-10">
          <div className="max-w-[1520px] m-auto px-5 lg:px-20">
            <div className="mb-5">
              <h2 className="text-center text-3xl md:text-[38px] font-bold mb-3 md:mb-5">
                Program
              </h2>
              <p className="text-center">Collaboration with spirit</p>
            </div>

            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-10">
              {parsedData.slice(0, 3).map((item) => (
                <CardProgram key={item.id} {...item} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/programs" className=" mt-7">
                <button className="px-5 border border-black rounded-full hover:bg-black">
                  <Arrow />
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* <div id="product" className="max-w-[1520px] m-auto px-5 lg:px-20 py-10">
          <h2 className="text-center text-3xl md:text-[38px] font-bold mb-3 md:mb-7">
            Product
          </h2>

          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-10">
            {parsedProducts.map((item) => (
              <CardProduct {...item} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/products" className="mt-5 ">
              <button className="px-5 border border-black rounded-full ">
                <Arrow />
              </button>
            </Link>
          </div>
        </div> */}

        <div id="galery" className="max-w-[1520px] m-auto px-5 lg:px-20 py-10">
          <h2 className="text-center text-3xl md:text-[38px] font-bold mb-3 md:mb-7">
            Gallery
          </h2>
          <div className="flex flex-col gap-2 md:gap-5">
            <div className="flex gap-2 md:gap-5">
              <div>
                <ExportedImage
                  placeholder="empty"
                  src={galery1}
                  alt="hero"
                  width={500}
                  height={500}
                  className="w-[1000px] h-full object-cover"
                />
              </div>
              <div>
                <ExportedImage
                  placeholder="empty"
                  src={galery2}
                  alt="hero"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex gap-2 md:gap-5">
              <div>
                <ExportedImage
                  placeholder="empty"
                  src={galery3}
                  alt="hero"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <ExportedImage
                  placeholder="empty"
                  src={galery4}
                  alt="hero"
                  width={500}
                  height={500}
                />
              </div>
              <div>
                <ExportedImage
                  placeholder="empty"
                  src={galery5}
                  alt="hero"
                  width={500}
                  height={500}
                />
              </div>
            </div>
            <div className="flex gap-2 md:gap-5">
              <div>
                <ExportedImage
                  placeholder="empty"
                  src={galery6}
                  alt="hero"
                  width={600}
                  height={500}
                />
              </div>
              <div>
                <ExportedImage
                  placeholder="empty"
                  src={galery7}
                  alt="hero"
                  width={1000}
                  height={500}
                  className="w-[1000px] h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-[#F8FFEC]">
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
                  placeholder="empty"
                  src={map}
                  alt="hero"
                  width={700}
                  height={500}
                  className="w-full transition-all duration-500 ease-in-out hover:scale-105"
                />
              </Link>

              <div className="flex flex-col gap-5">
                <div>
                  <h3 className="mb-2 text-xl font-bold">Location</h3>
                  <p>
                    Building A Level 3 Faculty of Engineering, University of
                    Mataram
                  </p>
                </div>
                <div className="flex flex-row justify-between gap-5 md:flex-col">
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Number</h3>
                    <p>+6281775262221</p>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold">Email</h3>
                    <p>scube@unram.ac.id</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </main>
    </>
  );
}
