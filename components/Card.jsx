"use client";
import Image from "next/image";
import Link from "next/link";
import parse from "html-react-parser";
const CardAbout = (props) => {
  //   const iconBackgroundColor = `bg-[${props.color}] flex justify-center items-center h-40`;
  //   console.log(iconBackgroundColor);
  return (
    <div
      className={`border border-[#B8B8B8]   rounded-lg   w-full overflow-hidden`}
      key={props.id}
    >
      {}
      <div
        className={` flex justify-center items-center h-40`}
        style={{ backgroundColor: `#${props.color}` }}
      >
        <props.image width="100" height="100" />
      </div>
      <div className="pt-3 pb-5 px-3  text-center">
        <h2 className="text-lg md:text-2xl font-semibold pb-2">
          {props.title}
        </h2>
        <p className="text-sm  md:text-base">{parse(props.desc)}</p>
      </div>
    </div>
  );
};

const CardProduct = (props) => {
  return (
    <div
      className=" border border-black bg-white rounded-md overflow-hidden"
      key={props.id}
    >
      <Image
        src={props.image}
        alt="hero"
        width={500}
        height={500}
        className="h-36 md:h-56 object-cover"
      />
      <div className="px-3 border-t-2 border-black py-3">
        <div className="flex flex-col sm:flex-row justify-between  mb-3">
          <h2 className="text-sm font-semibold md:text-base line-clamp-1">
            {props.title.replace(/-/g, " ")}
          </h2>
          <p className="line-clamp-3 text-sm md:text-base">Rp. {props.price}</p>
        </div>
        <div>
          <Link href={`/products/${props.title}`}>
            <button className="btn btn-outline rounded-sm w-full ">
              See Detail
            </button>
          </Link>
        </div>
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
const CardProgram = (props) => {
  return (
    <Link
      href={`/programs/${props.id}`}
      className={`border border-[#1a1a1a] hover:border-none rounded-lg   bg-white text-black hover:text-white hover:bg-[#00A9FF] w-full  overflow-hidden`}
      key={props.id}
    >
      <Image
        src={props.thumbnail}
        alt="hero"
        width={500}
        height={300}
        className="w-full h-36 md:h-48  object-cover"
      />
      <div className="pt-3 pb-5 px-3  text-center">
        <h2 className="text-lg md:text-2xl font-semibold mb-3">
          {props.title}
        </h2>
        <p className="text-xs line-clamp-2 md:text-base">{props.excerption}</p>
      </div>
    </Link>
  );
};

const CardProgramLeft = (props) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 my-10 items-center gap-3 md:gap-8 bg-white hover:bg-[#eace4d] hover:text-white">
      <div className="flex w-full flex-col gap-1  bg-white overflow-hidden">
        <Image
          src={props.thumbnail}
          alt="logo"
          width="500"
          height="500"
          className="w-full h-52 md:h-80 object-cover "
        />

        <div className="flex gap-1">
          <Image
            src={props.arrayImage[0]}
            alt="logo"
            width="500"
            height="500"
            className="w-[50%] h-48 object-cover "
          />
          <Image
            src={props.arrayImage[1]}
            alt="logo"
            width="500"
            height="500"
            className="w-[50%] h-48 object-cover "
          />
        </div>
      </div>
      <div className=" pe-5 ps-5 pb-5 md:ps-0 md:pe-10 ">
        <h1 className="text-[24px] mb-3 md:text-[36px]">{props.title}</h1>
        <p className="mb-3 line-clamp-5">{parse(props.excerption)}</p>
        <Link href={`/programs/${props.id}`} className="underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

const CardProgramRight = (props) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 my-10 items-center gap-8 bg-white hover:bg-blue-400 hover:text-white">
      <div className="w-full md:order-first order-last pe-5 ps-5 pb-5 md:ps-6 md:pe-10 ">
        <h1 className="text-[24px] mb-3 md:text-[36px]">{props.title}</h1>
        <p className="mb-3 line-clamp-5">{parse(props.excerption)}</p>
        <Link href={`/programs/${props.id}`} className="underline">
          Read More
        </Link>
      </div>
      <div className="w-full flex flex-col gap-1 bg-white overflow-hidden">
        <Image
          src={props.thumbnail}
          alt="logo"
          width="500"
          height="500"
          className="w-full h-52 md:h-80 object-cover "
        />
        <div className="flex gap-1">
          <Image
            src={props.arrayImage[0]}
            alt="logo"
            width="500"
            height="500"
            className="w-[50%] h-48 object-cover "
          />
          <Image
            src={props.arrayImage[1]}
            alt="logo"
            width="500"
            height="500"
            className="w-[50%] h-48 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export {
  CardAbout,
  CardProduct,
  CardActivity,
  CardProgram,
  CardProgramLeft,
  CardProgramRight,
};
