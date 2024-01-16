import { CardProduct } from "@/components/Card";
import Footer from "@/components/Footer";
import { MainNavbar } from "@/components/Navbar";
import Product from "@/components/Product";
import jsonData from "@/data/products";

export async function generateStaticParams() {
  const parsedData = await JSON.parse(jsonData);
  // Create an empty array to store the objects with ids
  const itemsWithIds = [];

  // Iterate through the parsedData and create objects with ids
  for (const item of parsedData) {
    if (item.hasOwnProperty("title")) {
      // Check if the item has a 'title' property
      itemsWithIds.push({ title: item.title });
    }
  }

  //   console.log(itemsWithIds);

  return itemsWithIds;
}
export default function Page({ params }) {
  const parsedData = JSON.parse(jsonData);
  const selectedProduct = parsedData.find(
    (product) => product.title === params.title
  );
  const excludeProduct = parsedData
    .filter((program) => program.id !== selectedProduct.id)
    .slice(0, parsedData.length - 1);
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
  //   console.log(params);
  return (
    <>
      <div className="fixed z-20 w-full ">
        <MainNavbar />
      </div>
      <Product {...params} />
      <div className="w-full bg-yellow-200 font-primary">
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
