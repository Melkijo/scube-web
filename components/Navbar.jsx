"use client";
import Link from "next/link";
// import Image from "next/image";
import ExportedImage from "next-image-export-optimizer";

import instagram from "@/assets/icons/arcticons_instagram.png";
import linkedin from "@/assets/icons/arcticons_linkedin.png";
import tiktok from "@/assets/icons/arcticons_tiktok.png";
import { usePathname } from "next/navigation";

const MainNavbar = () => {
  const pathname = usePathname();
  return (
    <div className="navbar  bg-base-100 px-5 lg:px-20 font-primary">
      <div className="navbar max-w-[1520px] mx-auto">
        <div className=" justify-between w-full lg:justify-start lg:w-[50%]">
          <Link href="/" className="text-xl font-bold">
            S-CUBE CENTER
          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/programs">Program</Link>
              </li>
              <li>
                <Link href="/products">Product</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <h5 className="font-bold pt-3">Follow Us</h5>
                <div className="flex gap-5">
                  <Link
                    href="https://www.instagram.com/scubecenter/"
                    className="bg-white p-2 hover:bg-red-400"
                    target="_blank"
                  >
                    <ExportedImage
                      placeholder="empty"
                      src={instagram}
                      alt="instagram"
                      className="w-6 h-6 object-cover"
                    />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/company/unram-scube-center/"
                    className="bg-white p-2 hover:bg-blue-400"
                    target="_blank"
                  >
                    <ExportedImage
                      src={linkedin}
                      alt="instagram"
                      className="w-6 h-6"
                    />
                  </Link>
                  <Link
                    href="https://www.tiktok.com/@kkn.unramxsnu"
                    className="bg-white p-2 hover:bg-yellow-400"
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
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" flex gap-5 px-1  ">
            <li>
              <Link
                href="/"
                className={`text-base hover:underline ${
                  pathname === "/" ? "underline" : "no-underline"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/programs"
                className={`text-base hover:underline ${
                  pathname === "/programs" ? "underline" : "no-underline"
                }`}
              >
                Program
              </Link>
            </li>
            <li>
              <Link
                href="/products"
                className={`text-base hover:underline ${
                  pathname === "/products" ? "underline" : "no-underline"
                }`}
              >
                Product
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`text-base hover:underline ${
                  pathname === "/about" ? "underline" : "no-underline"
                }`}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex">
          <div className="flex gap-5">
            <Link
              href="https://www.instagram.com/scubecenter/"
              className="bg-white p-2 hover:bg-red-400"
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
              className="bg-white p-2 hover:bg-blue-400"
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
              className="bg-white p-2 hover:bg-yellow-400"
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
  );
};

export { MainNavbar };
