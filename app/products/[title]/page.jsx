"use client";
import Footer from "@/components/Footer";
import { MainNavbar } from "@/components/Navbar";
import jsonData from "@/data/products";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CardProduct } from "@/components/Card";
export default function Page({ params }) {
  const router = useRouter();
  const [size, setSize] = useState("M");

  const handleSizeChange = (newSize) => {
    setSize(newSize);
  };

  const parsedData = JSON.parse(jsonData);
  const selectedProduct = parsedData.find(
    (product) => product.title === params.title
  );
  const modifiedTitle = selectedProduct.title.replace(/\s+/g, "%20");
  const excludeProduct = parsedData
    .filter((program) => program.id !== selectedProduct.id)
    .slice(0, 3);
  // Check if a program with the specified id was found

  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };

  // Assuming excludeProgram is an array of programs and targetId is the ID to exclude
  const shuffledProducts = shuffleArray(excludeProduct);

  // Exclude the targetId
  const filteredProducts = shuffledProducts.filter(
    (program) => program.id !== selectedProduct.id
  );

  const handleBuyNow = () => {
    // alert(`${size} ${selectedProduct.title}`);
    router.push(
      `https://wa.me/6281775262221?text=I%20want%20to%20buy%20your%20Cloth%20${modifiedTitle}%20with%20size%20${size}`
    );

    // window.open(
    //   `https://wa.me/6281775262221?text=I%20want%20to%20buy%20your%20Cloth%20${modifiedTitle}%20with%20size%20${size}`,
    //   "_blank"
    // );
  };
  return (
    <>
      <MainNavbar />
      <div className="max-w-[1520px] m-auto px-5 lg:px-20 pt-8 pb-14">
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-[1400px] bg-yellow-100">
            <img
              src={selectedProduct.image}
              alt="logo"
              key={selectedProduct.id}
              width="500"
              height="500"
              className="w-full h-64 md:h-[500px] object-contain pt-2 pb-4 md:pb-8"
            />
          </div>
          <div className="w-full">
            <h1 className="text-[28px] md:text-[42px] mb-3">
              {selectedProduct.title.replace(/-/g, " ")}
            </h1>
            <p className="text-lg">Rp. {selectedProduct.price}</p>
            <div className="pt-5 pb-8">
              <h5 className="font-bold text-xl mb-2">Size</h5>
              <div className="grid grid-cols-5 gap-5">
                <button
                  className={`btn btn-outline rounded-sm w-full  ${
                    size === "S" ? "btn-active" : ""
                  }`}
                  onClick={() => handleSizeChange("S")}
                >
                  S
                </button>
                <button
                  className={`btn btn-outline rounded-sm w-full   ${
                    size === "M" ? "btn-active" : ""
                  }`}
                  onClick={() => handleSizeChange("M")}
                >
                  M
                </button>
                <button
                  className={`btn btn-outline rounded-sm w-full    ${
                    size === "L" ? "btn-active" : ""
                  }`}
                  onClick={() => handleSizeChange("L")}
                >
                  L
                </button>
                <button
                  className={`btn btn-outline rounded-sm w-full ${
                    size === "XL" ? "btn-active" : ""
                  }`}
                  onClick={() => handleSizeChange("XL")}
                >
                  XL
                </button>
                <button
                  className={`btn btn-outline rounded-sm w-full ${
                    size === "XXL" ? "btn-active" : ""
                  }`}
                  onClick={() => handleSizeChange("XXL")}
                >
                  XXL
                </button>
              </div>
            </div>
            {/* <Link
              href={`https://wa.me/6281775262221?text=I%20want%20to%20buy%20your%20Cloth%20${modifiedTitle}%20with%20size%20${size}`}
              target="_blank"
            > */}
            <button
              className="btn btn-outline rounded-sm w-full mb-5"
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
            {/* </Link> */}

            <p>{selectedProduct.description}</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-yellow-200">
        <div className="max-w-[1520px] m-auto px-5 lg:px-20 pt-10 pb-16">
          <h2 className="text-[28px] md:text-[36px] text-center font-bold pb-5">
            OTHER PRODUCT
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3  gap-5 ">
            {filteredProducts.slice(0, 3).map((product) => (
              <CardProduct key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
