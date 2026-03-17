import { RiArrowRightDownLongLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="mt-15 flex justify-center   ">
      <div className=" flex gap-12 flex-col">
        <img src="/images/text & border.png" alt="" className="h-100 w-230" />
        <div className=" text-lg font-normal font-lexend flex flex-row items-center mb-5 justify-center gap-10">
          <p>
            <span className="text-White1">modern </span>
            <span className="text-Brown1">problem </span>
            <span className="text-White1">requires modern </span>
            <span className="text-Brown1">solution </span>
          </p>
          <button className=" text-White1 bg-Brown1 flex flex-row items-center px-4 py-1 rounded-full gap-2">
            let’s connect
            <RiArrowRightDownLongLine className="text-[26px] font-bold " />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
