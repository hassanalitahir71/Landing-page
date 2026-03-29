import { RiArrowRightDownLongLine } from "react-icons/ri";

const HeroSection = () => {
  return (
    <div className="mt-10 md:mt-16 flex justify-center px-4">
      <div className="flex flex-col items-center mb-12 gap-8 md:gap-6">
        {/* Image */}
        <img
          src="/images/text & border.png"
          alt=""
          className="w-full max-w-[520px] md:max-w-[720px] lg:max-w-[920px]"
        />

        {/* Text + Button */}
        <div className="text-base md:text-lg font-normal font-lexend flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left">
          <p>
            <span className="text-White1">modern </span>
            <span className="text-Brown1">problem </span>
            <span className="text-White1">requires modern </span>
            <span className="text-Brown1">solution </span>
          </p>

          <button className="text-White1 bg-Brown1 hover:bg-White1 hover:text-Brown1 flex items-center px-4 py-2 cursor-pointer rounded-full gap-2">
            let’s connect
            <RiArrowRightDownLongLine className="text-[22px] md:text-[26px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
