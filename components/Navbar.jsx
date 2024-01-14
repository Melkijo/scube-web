import Link from "next/link";
import Image from "next/image";
import instagram from "@/assets/icons/arcticons_instagram.png";
import linkedin from "@/assets/icons/arcticons_linkedin.png";
import tiktok from "@/assets/icons/arcticons_tiktok.png";

const MainNavbar = () => {
  return (
    <div className="navbar  bg-base-100 max-w-[1520px] m-auto px-5 md:px-20">
      <div className=" justify-between w-full md:justify-start md:w-[50%]">
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
              <Link href="/">Activity</Link>
            </li>
            <li>
              <h5 className="font-bold pt-3">Follow Us</h5>
              <div className="flex gap-5">
                <Link
                  href="https://www.instagram.com/scubecenter/"
                  className="bg-white p-2 hover:bg-red-400"
                  target="_blank"
                >
                  <Image
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
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex gap-5 px-1  ">
          <li>
            <Link href="/" className="text-base no-underline hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/programs"
              className="text-base no-underline hover:underline"
            >
              Program
            </Link>
          </li>
          <li>
            <Link
              href="/products"
              className="text-base no-underline hover:underline"
            >
              Product
            </Link>
          </li>
          <li>
            <Link href="/" className="text-base no-underline hover:underline">
              Activity
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
  );
};

export { MainNavbar };
