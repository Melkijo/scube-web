"client side";
import { CardProgram } from "@/components/Card";
import Footer from "@/components/Footer";
import { MainNavbar } from "@/components/Navbar";
import jsonData from "@/data/program.js";
import Image from "next/image";

export default function Page({ params }) {
  const parsedData = JSON.parse(jsonData);

  // Convert params.id to a number
  const targetId = parseInt(params.id, 10);

  // Find the program with the matching id
  const selectedProgram = parsedData.find((program) => program.id === targetId);
  const excludeProgram = parsedData
    .filter((program) => program.id !== targetId)
    .slice(0, 3);
  // Check if a program with the specified id was found
  if (!selectedProgram) {
    return <div>No program found for the specified id</div>;
  }

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
  const shuffledPrograms = shuffleArray(excludeProgram);

  // Exclude the targetId
  const filteredPrograms = shuffledPrograms.filter(
    (program) => program.id !== targetId
  );

  console.log(selectedProgram);

  return (
    <>
      <MainNavbar />
      <div className="max-w-[1520px] m-auto px-5 md:px-64 pt-8 pb-14">
        <h1 className="text-[28px] md:text-[56px]">{selectedProgram.title}</h1>
        <Image
          src={selectedProgram.thumbnail}
          alt="logo"
          key={selectedProgram.id}
          width="500"
          height="500"
          className="w-full h-64 md:h-96 object-cover pt-2 pb-4 md:pb-8"
        />
        <p>{selectedProgram.description}</p>

        <h3 className="text-xl font-semibold mt-10 mb-5">Documentation</h3>
        <div className="grid grid-cols-2 gap-3 overflow-hidden">
          {selectedProgram.arrayImage.map((image) => (
            <Image
              src={image}
              alt="logo"
              key="1"
              width="500"
              height="500"
              className="w-42 md:w-full h-36 md:h-64 object-cover"
            />
          ))}
        </div>
      </div>
      <div className="w-full bg-yellow-200">
        <div className="max-w-[1520px] m-auto px-5 md:px-64 pt-10 pb-16">
          <h2 className="text-[28px] md:text-[36px] text-center font-bold pb-10">
            OTHER PROGRAM
          </h2>
          <div className="flex flex-col md:flex-row   gap-5 ">
            {filteredPrograms.slice(0, 2).map((program) => (
              <CardProgram key={program.id} {...program} />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
