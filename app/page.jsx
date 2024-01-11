"use client";
import Image from "next/image";
import hero1 from "@/assets/hero-1.png";
import hero2 from "@/assets/hero-2.png";
// import VideoPlayer from '@/components/VideoPlayer'
import aboutImage from "@/assets/about-item-1.png";
import dynamic from "next/dynamic";
import { CardAbout, CardActivity, CardProduct } from "@/components/Card";
import { Arrow, ArrowDown, ArrowLeft, ArrowRight } from "@/components/Icons";
import galery1 from "@/assets/galery-1.png";
import galery2 from "@/assets/galery-2.png";
import galery3 from "@/assets/galery-3.png";
import galery4 from "@/assets/galery-4.png";
import galery5 from "@/assets/galery-5.png";
import galery6 from "@/assets/galery-6.png";
import galery7 from "@/assets/galery-7.png";
import Marquee from "react-fast-marquee";
import map from "@/assets/map.png";
import Link from "next/link";
import { MainNavbar } from "@/components/Navbar";
import hero3 from "@/assets/hero-3.png";
import heroArrow from "@/assets/icons/arrow-hero.png";
import { TypeAnimation } from "react-type-animation";

import Footer from "@/components/Footer";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});

const aboutItems = [
  {
    id: 1,
    title: "Innovation",

    desc: "S-Cube Center is dedicated to fostering innovation in various domains, including technology, education, and business. ",
    image: aboutImage,
    color: "#FF9BD2",
  },
  {
    id: 2,
    title: "Collaboration",
    desc: "The collaboration between SNU, Samick, and a focus on sustainability underscores the importance of partnerships.",
    image: aboutImage,
  },
  {
    id: 3,
    title: "Sustainability",
    desc: " The center recognizes the importance of long-term impact and responsible practices in technology, education, business, and other areas. ",
    image: aboutImage,
  },
  {
    id: 4,
    title: "Social Empowerment",
    desc: "This value reflects a commitment to using innovation and collaboration to positively influence and uplift communities. ",
    image: aboutImage,
  },
];

const productItems = [
  {
    id: 1,
    title: "Innovation",

    price: "120.000",
    image: aboutImage,
  },
  {
    id: 2,
    title: "Collaboration",
    price: "120.000",
    image: aboutImage,
  },
  {
    id: 3,
    title: "Sustainability",
    price: "120.000",
    image: aboutImage,
  },
  {
    id: 4,
    title: "Social Empowerment",
    price: "120.000",
    image: aboutImage,
  },
  {
    id: 1,
    title: "Innovation",

    price: "120.000",
    image: aboutImage,
  },
  {
    id: 2,
    title: "Collaboration",
    price: "120.000",
    image: aboutImage,
  },
  {
    id: 3,
    title: "Sustainability",
    price: "120.000",
    image: aboutImage,
  },
  {
    id: 4,
    title: "Social Empowerment",
    price: "120.000",
    image: aboutImage,
  },
];

const activityItems = [
  {
    id: 1,
    title: "SNU",
    date: "12/12/2021",
    image: galery1,
    link: "/",
  },
  {
    id: 2,
    title: "Samick",
    date: "12/12/2021",
    image: aboutImage,
    link: "/",
  },
  {
    id: 3,
    title: "Sustainability",
    date: "12/12/2021",
    image: aboutImage,
    link: "/",
  },
  {
    id: 4,
    title: "Sustainability",
    date: "12/12/2021",
    image: aboutImage,
    link: "/",
  },
  {
    id: 5,
    title: "Sustainability",
    date: "12/12/2021",
    image: aboutImage,
    link: "/",
  },
];

export default function Home() {
  return (
    <>
      <div className="fixed z-20 w-full ">
        <MainNavbar />
      </div>

      <main>
        <div
          id="hero"
          className=" max-w-[1520px] m-auto  overflow-hidden pt-16"
        >
          <div className="h-[500px] md:h-[620px] relative">
            <Image
              src={hero1}
              alt="hero"
              width={500}
              height={500}
              className="absolute animate-slow-left  w-[250px] md:w-[500px] h-[250px] md:h-[500px]  object-cover"
            />
            <Image
              src={hero2}
              alt="hero"
              width={500}
              height={500}
              className="absolute right-0 top-60 md:top-32 animate-slow-right w-[300px] md:w-[500px] h-[300px] md:h-[500px]  object-cover"
            />
            <h1 className="relative z-10 font-display pt-40 md:pt-32 px-10 font-medium uppercase text-[22px] md:text-[48px] text-center w-full md:w-[1000px]  leading-normal md:leading-[85px]  m-auto">
              Where{" "}
              <span className="text-[#FFDA57] underline">
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "Ideas",
                    4000, // wait 1s before replacing "Mice" with "Hamsters"
                    "Student",
                    4000,
                    "Spirits",
                    4000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>{" "}
              Take Flight and Knowledge Knows No Bounds
            </h1>

            <div className="relative">
              <Link href="#about">
                <Image
                  src={heroArrow}
                  alt="hero"
                  width={100}
                  height={100}
                  className="animate-bounce absolute z-10 top-12 md:top-16 left-0 right-0 mx-auto w-[30px] md:w-[50px] h-[30px] md:h-[50px]  object-cover"
                />
              </Link>
              <Image
                src={hero3}
                alt="hero"
                width={500}
                height={500}
                className="relative top-10 z-0 right-0 left-0 mx-auto"
              />
            </div>
          </div>
        </div>

        <div id="marquee" className="bg-black py-3 relative z-10 text-white">
          <Marquee autoFill>
            <div className=" mr-5 font-black text-xs">
              SEOUL NATIONAL UNIVERSITY
            </div>
            <div className=" mr-5 font-black text-xs">MATARAM UNIVERSITY</div>
            <div className=" mr-5 font-black text-xs">SAMIC</div>
          </Marquee>
        </div>

        <div id="about" className="max-w-[1520px] m-auto px-5 md:px-20 pb-10">
          <div className=" rounded-lg  relative z-10 pt-20 bg-white">
            <VideoPlayer />
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
          <div className=" hidden md:flex items-center justify-center gap-[50px] ">
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
          <div className=" md:hidden grid grid-cols-2  gap-3 ">
            <CardAbout {...aboutItems[0]} />
            <CardAbout {...aboutItems[1]} />

            <CardAbout {...aboutItems[2]} />
            <CardAbout {...aboutItems[3]} />
          </div>
        </div>

        <div className="max-w-[1520px] m-auto pt-10 px-5 flex flex-col justify-center items-center gap-7 md:px-20 pb-10 w-full md:w-[1200px]">
          <h2 className="font-black text-[24px] md:text-[36px] text-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            "I recently had the pleasure of experiencing the wonders of Scube
            Center, and I must say, it exceeded all my expectations."
          </h2>
          <div className="flex gap-3 items-center">
            <Image
              src={galery2}
              width={100}
              height={100}
              className="h-14 md:h-24 w-14 md:w-24 rounded-full object-cover"
            />
            <div>
              <h5 className="font-black text-sm md:text-lg">
                Melki Jonathan Andara
              </h5>
              <p className="text-xs md:text-base">CEO of MejoTech</p>
            </div>
          </div>
        </div>

        <div id="program" className="bg-[#F8FFEC] py-10">
          <div className="max-w-[1520px] m-auto px-5 md:px-20">
            <div className="mb-5">
              <h2 className="text-center text-3xl md:text-[38px] font-bold mb-3 md:mb-5">
                Program
              </h2>
              <p className="text-center">Collaboration with spirit</p>
            </div>

            <div className="flex flex-col md:flex-row   gap-5 md:gap-10">
              {aboutItems.map((item) => (
                <CardAbout {...item} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/programs" className=" mt-7">
                <button className="border-black border rounded-full px-5 hover:bg-black">
                  <Arrow />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="product" className="max-w-[1520px] m-auto px-5 md:px-20 py-10">
          <h2 className="text-center text-3xl md:text-[38px] font-bold mb-3 md:mb-7">
            Product
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-10">
            {productItems.map((item) => (
              <CardProduct {...item} />
            ))}
          </div>
          <div className="flex justify-center">
            <Link href="/products" className=" mt-5">
              <button className="border-black border rounded-full px-5 ">
                <Arrow />
              </button>
            </Link>
          </div>
        </div>

        <div id="galery" className="max-w-[1520px] m-auto px-5 md:px-20 py-10">
          <h2 className="text-center text-3xl md:text-[38px] font-bold mb-3 md:mb-7">
            Gallery
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div>
                <Image
                  src={galery1}
                  alt="hero"
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <Image src={galery2} alt="hero" width={600} height={500} />
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <Image src={galery3} alt="hero" width={500} height={500} />
              </div>
              <div>
                <Image src={galery4} alt="hero" width={500} height={500} />
              </div>
              <div>
                <Image src={galery5} alt="hero" width={500} height={500} />
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <Image src={galery6} alt="hero" width={600} height={500} />
              </div>
              <div>
                <Image
                  src={galery7}
                  alt="hero"
                  width={1000}
                  height={500}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div id="activity" className="bg-[#F8FFEC]">
          <div className="py-10">
            <div className=" max-w-[1520px] mb-7 m-auto flex justify-between items-center px-5 md:px-20">
              <h2 className=" text-3xl  md:text-[38px] font-bold ">Activity</h2>

              <Link href="/activities">
                <button className="border-black border rounded-full px-5 ">
                  <Arrow />
                </button>
              </Link>
            </div>
            <div className="flex w-full gap-5 overflow-x-auto pb-3">
              {activityItems.map((item) => (
                <CardActivity {...item} />
              ))}
            </div>
          </div>
        </div>

        <div id="contact" className="max-w-[1520px] m-auto px-5 md:px-20 py-10">
          <h2 className="text-center text-3xl  md:text-[38px] font-bold mb-3 md:mb-7">
            Contact
          </h2>
          <div className="flex flex-col md:flex-row gap-5">
            <Image src={map} alt="hero" width={700} height={500} />
            <div className="flex flex-col gap-5">
              <div>
                <h3 className="font-bold text-xl">Location</h3>
                <p>Samick Music Corporation</p>
              </div>
              <div className="flex md:flex-col gap-5 flex-row  justify-between">
                <div>
                  <h3 className="font-bold text-xl">Number</h3>
                  <p>081775262222</p>
                </div>
                <div>
                  <h3 className="font-bold text-xl">Email</h3>
                  <p>scube@gmail.com</p>
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
