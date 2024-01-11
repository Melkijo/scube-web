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
import instagram from "@/assets/icons/arcticons_instagram.png";
import linkedin from "@/assets/icons/arcticons_linkedin.png";
import tiktok from "@/assets/icons/arcticons_tiktok.png";

const VideoPlayer = dynamic(() => import("@/components/VideoPlayer"), {
  ssr: false,
});

const aboutItems = [
  {
    id: 1,
    title: "Innovation",

    desc: "S-Cube Center is dedicated to fostering innovation in various domains, including technology, education, and business. ",
    image: aboutImage,
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
      <div className="relative z-10">
        <MainNavbar />
      </div>
      <main>
        <div id="hero" className=" max-w-[1520px] m-auto  overflow-hidden">
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
              className="absolute right-0 top-52 animate-bounce-slow w-[300px] md:w-[500px] h-[300px] md:h-[500px]  object-cover"
            />
            <h1 className="pt-32 px-10 font-medium uppercase text-[24px] md:text-[56px] text-center w-full md:w-[800px]  leading-normal md:leading-[85px]  m-auto">
              Where <span className="text-[#FFDA57] underline">Ideas</span> Take
              Flight and Knowledge Knows No Bounds
            </h1>
            <div>
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
            <div className=" mr-5 font-black text-xl">
              SEOUL NATIONAL UNIVERISITY
            </div>
            <div className=" mr-5 font-black text-xl">MATARAM UNIVERSITY</div>
            <div className=" mr-5 font-black text-xl">SAMIC</div>
          </Marquee>
        </div>

        <div id="about" className="max-w-[1520px] m-auto px-5 md:px-20 pb-10">
          <div className=" rounded-lg  relative z-10 pt-20 bg-white">
            <VideoPlayer />
          </div>
          <div className="py-5">
            <h1 className="text-center  text-2xl md:text-[48px] font-bold mb-3">
              What is S-Cube Center
            </h1>
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
          <div className=" md:hidden flex flex-col items-center justify-center gap-3 ">
            <div className="flex gap-3">
              <CardAbout {...aboutItems[0]} />
              <CardAbout {...aboutItems[1]} />
            </div>
            <div className="flex gap-3">
              <CardAbout {...aboutItems[2]} />
              <CardAbout {...aboutItems[3]} />
            </div>
            <div></div>
          </div>
        </div>

        <div id="program" className="bg-[#F8FFEC] py-10">
          <div className="max-w-[1520px] m-auto px-5 md:px-20">
            <div className="mb-5">
              <h1 className="text-center text-[48px] font-bold">Program</h1>
              <p className="text-center">Program</p>
            </div>

            <div className="flex  flex-wrap gap-10">
              {aboutItems.map((item) => (
                <CardAbout {...item} />
              ))}
            </div>
            <div className="flex justify-center">
              <Link href="/programs" className=" mt-5">
                <button className="border-black border rounded-full px-5 ">
                  <Arrow />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="product" className="max-w-[1520px] m-auto px-5 md:px-20 py-10">
          <h1 className="text-center text-[48px] font-bold">Product</h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
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
          <h1 className="text-center text-[48px] font-bold">Gallery</h1>
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
            <div className=" max-w-[1520px] m-auto flex justify-between px-5 md:px-20">
              <h1 className="text-center text-[48px] font-bold">Activity</h1>
              <div className="flex gap-5">
                <button>
                  <ArrowLeft />
                </button>
                <button>
                  <ArrowRight />
                </button>
              </div>
            </div>
            <div className="flex w-full gap-5 overflow-x-auto">
              {activityItems.map((item) => (
                <CardActivity {...item} />
              ))}
            </div>
            <div className="flex justify-center mt-5">
              <Link href="/activities">
                <button className="border-black border rounded-full px-5 ">
                  <Arrow />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div id="contact" className="max-w-[1520px] m-auto px-5 md:px-20 py-10">
          <h1 className="text-center text-[48px] font-bold">Contact</h1>
          <div className="flex flex-col md:flex-row gap-5">
            <Image src={map} alt="hero" width={700} height={500} />
            <div className="flex flex-col gap-5">
              <div>
                <h3>Location</h3>
                <p>Samick Music Corporation</p>
              </div>
              <div className="flex justify-between">
                <div>
                  <h3>Number</h3>
                  <p>081775262222</p>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>scube@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="footer"
          className="bg-[#0F1035] pt-10 pb-5 px-5 md:px-20 text-white"
        >
          <div className="flex flex-col  gap-10 md:justify-between">
            <div>
              <h1 className="text-white">S-CUBE CENTER</h1>
              <p className="text-white">S-CUBE CENTER</p>
            </div>

            <div className=" hidden md:block ">
              <h5 className="font-bold text-lg  mb-3">Navigation</h5>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link
                    href="/"
                    className=" hover:underline hover:underline-offset-4"
                  >
                    - Home
                  </Link>{" "}
                </li>
                <li>
                  <Link
                    href="/"
                    className=" hover:underline hover:underline-offset-4"
                  >
                    - Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className=" hover:underline hover:underline-offset-4"
                  >
                    - Product
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className=" hover:underline hover:underline-offset-4"
                  >
                    - Galery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className=" hover:underline hover:underline-offset-4"
                  >
                    - Activity
                  </Link>
                </li>
              </ul>
            </div>

            <div className=" hidden md:block ">
              <h5 className="font-bold text-lg  mb-3">Contact</h5>
              <div className="flex flex-col gap-3">
                <p>Location</p>
                <p>Number</p>
                <p>Email</p>
              </div>
            </div>

            <div className="flex gap-10 md:hidden">
              <div className=" ">
                <h5 className="font-bold text-lg  mb-3">Navigation</h5>
                <ul className="flex flex-col gap-3">
                  <li>
                    <Link
                      href="/"
                      className=" hover:underline hover:underline-offset-4"
                    >
                      - Home
                    </Link>{" "}
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" hover:underline hover:underline-offset-4"
                    >
                      - Program
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" hover:underline hover:underline-offset-4"
                    >
                      - Product
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" hover:underline hover:underline-offset-4"
                    >
                      - Galery
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/"
                      className=" hover:underline hover:underline-offset-4"
                    >
                      - Activity
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h5 className="font-bold text-lg  mb-3">Contact</h5>
                <div className="flex flex-col gap-3">
                  <p>Location</p>
                  <p>Number</p>
                  <p>Email</p>
                </div>
              </div>
            </div>
            <div>
              <h5 className="font-bold text-lg  mb-3">Follow Us</h5>
              <div className="flex gap-5">
                <Link
                  href="https://www.instagram.com/scubecenter/"
                  className="bg-white p-2 hover:bg-red-400"
                  target="_blank"
                >
                  <Image src={instagram} alt="instagram" className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/unram-scube-center/"
                  className="bg-white p-2 hover:bg-blue-400"
                  target="_blank"
                >
                  <Image src={linkedin} alt="instagram" className="w-6 h-6" />
                </Link>
                <Link
                  href="https://www.tiktok.com/@kkn.unramxsnu"
                  className="bg-white p-2 hover:bg-yellow-400"
                  target="_blank"
                >
                  <Image src={tiktok} alt="instagram" className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#000000] py-5 px-5 md:px-20">
          <p className="text-center md:text-end text-white text-sm font-light">
            © 2024 S-CUBE CENTER. All Rights Reserved.
          </p>
        </div>
      </main>
    </>
  );
}
