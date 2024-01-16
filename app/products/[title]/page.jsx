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

  console.log(itemsWithIds);

  return itemsWithIds;
}
export default function Page({ params }) {
  console.log(params);
  return (
    <>
      <Product {...params} />
    </>
  );
}
