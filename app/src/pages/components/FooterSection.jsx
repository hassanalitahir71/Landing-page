import React from "react";
import { RiInstagramLine } from "react-icons/ri";
import { BsFacebook, BsSendFill } from "react-icons/bs";
import { FaYoutube, FaLinkedin } from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="flex justify-center mt-20 py-4 px-6">
      <div className="flex flex-col md:flex-row w-full md:w-[85%] gap-10 md:gap-2 justify-between">
        {/* logo section */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <img src="/images/logo.png" alt="logo" className="h-20 md:h-25" />

          <div className="flex gap-4 text-2xl md:text-3xl text-Brown1">
            <RiInstagramLine />
            <BsFacebook />
            <FaYoutube />
            <FaLinkedin />
          </div>
        </div>

        {/* location and contact */}
        <div className="flex flex-col gap-6 text-center md:text-left">
          <div className="font-lexend">
            <h1 className="text-Brown1 font-bold text-xl md:text-2xl">
              LOCATION
            </h1>
            <p className="text-Gray1 text-sm">
              2096 New Market, New Road
              <br />
              North Carolina, USA
            </p>
          </div>

          <div className="font-lexend">
            <h1 className="text-Brown1 font-bold text-xl md:text-2xl">
              CONTACT US
            </h1>
            <p className="text-Gray1 text-sm">
              support@rstheme.com
              <br />
              (+880)155-69569
            </p>
          </div>
        </div>

        {/* services */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-Brown1 font-lexend text-xl md:text-2xl font-bold">
            SERVICES
          </h1>

          <div className="flex flex-col font-lexend text-Gray1 text-sm text-center md:text-left">
            <a href="" className="hover:text-LightGray1">
              Web Design
            </a>
            <a href="" className="hover:text-LightGray1">
              PR campaign
            </a>
            <a href="" className="hover:text-LightGray1">
              UI / UX Design
            </a>
            <a href="" className="hover:text-LightGray1">
              Event management
            </a>
            <a href="" className="hover:text-LightGray1">
              Social Media Strategy
            </a>
            <a href="" className="hover:text-LightGray1">
              Mobile App Development
            </a>
            <a href="" className="hover:text-LightGray1">
              Video creation and promotion
            </a>
            <a href="" className="hover:text-LightGray1">
              Online Reputation Management
            </a>
          </div>
        </div>

        {/* subscribe */}
        <div className="flex flex-col items-center md:items-start gap-3 font-lexend">
          <h1 className="text-Brown1 text-xl md:text-2xl font-bold">
            SUBSCRIBE
          </h1>

          <div className="flex items-center rounded-3xl bg-White1 overflow-hidden">
            <input
              type="text"
              placeholder="youremail@gmail.com"
              className="text-Brown1 px-4 py-2 focus:outline-none w-[180px] md:w-[220px]"
            />

            <div className="p-3 bg-Brown1 flex items-center">
              <BsSendFill className="text-White1 text-xl md:text-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
