"use client";
import { MainNavbar } from "@/components/Navbar";
import Link from "next/link";
import jsonData from "@/data/products";
import { CardProduct } from "@/components/Card";
import Footer from "@/components/Footer";
import { useState } from "react";
export default function Page() {
  const parsedData = JSON.parse(jsonData);

  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the items to display on the current page
  const currentItems = parsedData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(parsedData.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <>
      <div className="fixed z-20 w-full ">
        <MainNavbar />
      </div>
      <div
        id="banner"
        className="w-full  bg-gradient-to-r from-red-500 to-orange-500 h-52 px-5 flex justify-center items-center md:px-20"
      >
        <h1 className="text-[42px] text-white text">PRODUCT</h1>
      </div>
      <div className="max-w-[1520px] m-auto pt-10 pb-16 px-5 lg:px-20">
        <h2 className=" text-2xl md:text-[36px] font-bold mb-5">View All</h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 mb-5 gap-3 md:gap-10">
          {currentItems.map((item) => (
            <CardProduct {...item} />
          ))}
        </div>

        <div className="flex justify-end">
          <div className="join ">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                className={`join-item btn ${
                  currentPage === page + 1 ? "btn-active" : ""
                }`}
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
