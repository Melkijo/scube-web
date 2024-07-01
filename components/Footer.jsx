import Link from "next/link";
import instagram from "@/assets/icons/arcticons_instagram.png";
import linkedin from "@/assets/icons/arcticons_linkedin.png";
import tiktok from "@/assets/icons/arcticons_tiktok.png";
import ExportedImage from "next-image-export-optimizer";

import logo from "@/assets/logo.png";
export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className=" bg-[#0F1035] pt-10 pb-5 px-5 lg:px-20 text-white font-primary"
      >
        <div className="max-w-[1520px]   m-auto flex md:flex-row flex-col  gap-10 md:justify-between">
          <div className="flex flex-row items-center gap-5 md:flex-col md:items-start">
            <ExportedImage
              src={logo}
              alt="logo"
              placeholder="empty"
              className="w-24 h-24"
            />
            <div>
              <h2 className="text-2xl font-bold text-white ">S-CUBE CENTER</h2>
              <p className="text-white">SNU Samick Sustainability</p>
            </div>
          </div>

          <div className="hidden md:block">
            <h5 className="mb-3 text-lg font-bold">Navigation</h5>
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
                  href="/programs"
                  className=" hover:underline hover:underline-offset-4"
                >
                  - Program
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className=" hover:underline hover:underline-offset-4"
                >
                  - About
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block">
            <h5 className="mb-3 text-lg font-bold">Contact</h5>
            <div className="flex flex-col gap-3">
              <p className="w-72">
                Building A Level 3 Faculty of Engineering, University of Mataram
              </p>
              <p>+6281775262221</p>
              <p>scube@unram.ac.id</p>
            </div>
          </div>

          <div className="flex gap-10 md:hidden">
            <div className="">
              <h5 className="mb-3 text-lg font-bold">Navigation</h5>
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
                    href="/programs"
                    className=" hover:underline hover:underline-offset-4"
                  >
                    - Program
                  </Link>
                </li>

                <li>
                  <Link
                    href="/about"
                    className=" hover:underline hover:underline-offset-4"
                  >
                    - About
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="mb-3 text-lg font-bold">Contact</h5>
              <div className="flex flex-col gap-3">
                <p>
                  Building A Level 3 Faculty of Engineering, University of
                  Mataram
                </p>
                <p>+6281775262221</p>
                <p>scube@unram.ac.id</p>
              </div>
            </div>
          </div>
          <div>
            <h5 className="mb-3 text-lg font-bold">Follow Us</h5>
            <div className="flex gap-5">
              <Link
                href="https://www.instagram.com/scubecenter/"
                className="p-2 bg-white hover:bg-red-400"
                target="_blank"
              >
                <ExportedImage
                  placeholder="empty"
                  src={instagram}
                  alt="instagram"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/company/unram-scube-center/"
                className="p-2 bg-white hover:bg-blue-400"
                target="_blank"
              >
                <ExportedImage
                  placeholder="empty"
                  src={linkedin}
                  alt="instagram"
                  className="w-6 h-6"
                />
              </Link>
              <Link
                href="https://www.tiktok.com/@kkn.unramxsnu"
                className="p-2 bg-white hover:bg-yellow-400"
                target="_blank"
              >
                <ExportedImage
                  placeholder="empty"
                  src={tiktok}
                  alt="instagram"
                  className="w-6 h-6"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#000000] font-primary ">
        <div className="max-w-[1520px] mx-auto flex flex-col-reverse items-center gap-5  py-5 md:flex-row md:justify-between ">
          <Link
            href="https://mejodev.vercel.app/"
            className="text-gray-800 underline hover:text-green-400"
            target="_blank"
          >
            behind the scene?
          </Link>
          <p className="text-xs font-light text-center text-white md:text-end md:text-sm">
            © 2024 S-CUBE CENTER. All Rights Reserved.
          </p>
        </div>
      </div>
    </>
  );
}
