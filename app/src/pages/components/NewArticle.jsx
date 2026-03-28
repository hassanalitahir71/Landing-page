import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const NewArticle = () => {
  return (
    <>
      <div className=" flex flex-col  mt-30 w-full gap-6">
        {/* whats our new article ....text */}
        <div className="flex flex-col justify-center items-center text-White1 font-lexend font-bold text-7xl">
          <h1 className="">WHATS OUR NEW</h1>
          <p className="">
            <span className="text-Brown1">ARTICLE </span>?
          </p>
        </div>
        <div className="w-full  flex items-center justify-center">
          <div className="grid grid-cols-5 auto-rows-[170px]   w-full">
            {/* Left top pic */}
            <div className="row-span-2 col-span-2 overflow-hidden ">
              <img
                src="/images/Article1.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* row-1 second pic */}
            <div className="col-span-2  overflow-hidden ">
              <img
                src="/images/Article2.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* row-2 third pic */}
            <div className="col-span-1 overflow-hidden ">
              <img
                src="/images/Article3.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* middle pic */}
            <div className="col-span-1 overflow-hidden ">
              <img
                src="/images/Article4.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* last right-pic */}
            <div className="col-span-2 row-span-2 overflow-hidden bg-[url('/images/Article7.jpg')] bg-cover bg-center">
              <div className="bg-Bleck1/85 h-full w-full flex flex-col justify-center items-center gap-3 p-4 md:p-8 text-center">
                <h1 className="text-White1 font-bold font-lexend text-lg md:text-xl lg:text-2xl">
                  CURRENT UI TRENDS
                </h1>

                <p className="text-Gray1 font-lexend text-xs md:text-sm leading-relaxed max-w-[90%] md:max-w-full">
                  Figma ipsum component variant main layer. Pencil style
                  scrolling shadow blur scrolling list. Undo thumbnail vector
                  outline ellipse. Content polygon layout shadow distribute
                  scale. Style variant move component follower pen layout.
                </p>

                <button className="flex items-center gap-1 hover:bg-Orange1 bg-Brown1 px-3 py-2 rounded-full text-White1 text-sm md:text-base">
                  Read More
                  <LuArrowDownRight />
                </button>
              </div>
            </div>
            {/* last row second pic */}
            <div className="col-span-1 overflow-hidden ">
              <img
                src="/images/Article5.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            {/* last left pic */}
            <div className="col-span-2 overflow-hidden ">
              <img
                src="/images/Article6.jpg"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArticle;
