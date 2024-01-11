import Image from "next/image";
import Link from "next/link";
const CardAbout = (props) => {
  return (
    <div
      className=" border border-[#B8B8B8] rounded-lg pt-5 px-5 bg-white w-full "
      key={props.id}
    >
      <Image
        src={props.image}
        alt="hero"
        width={500}
        height={300}
        className="h-auto md:h-48  object-cover"
      />
      <div className="pt-3 pb-5  text-center">
        <h2 className="text-lg md:text-2xl font-semibold">{props.title}</h2>
        <p className="text-sm md:text-base">{props.desc}</p>
      </div>
    </div>
  );
};

const CardProduct = (props) => {
  return (
    <div className=" border border-black bg-white" key={props.id}>
      <Image
        src={props.image}
        alt="hero"
        width={500}
        height={500}
        className="h-56 object-cover"
      />
      <div className="flex justify-between flex-wrap border-t-2 border-black">
        <h2>{props.title}</h2>
        <p>{props.price}</p>
      </div>
    </div>
  );
};

const CardActivity = (props) => {
  return (
    <div
      className="flex-none border border-black bg-white w-64 md:w-72"
      key={props.id}
    >
      <Image
        src={props.image}
        alt="hero"
        width={500}
        height={500}
        className="h-56 object-cover"
      />
      <div className=" border-t-2 border-black px-3 py-5">
        <h2>{props.title}</h2>
        <div className="flex justify-between">
          <p>{props.date}</p>
          <Link href={props.link}>view more</Link>
        </div>
      </div>
    </div>
  );
};

export { CardAbout, CardProduct, CardActivity };
