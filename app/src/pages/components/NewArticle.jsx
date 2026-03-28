import React from "react";

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
            <div className="row-span-2 col-span-2 overflow-hidden">
              <img src="/images/Article1.jpg" alt="" />
            </div>
            {/* row-1 second pic */}
            <div className="col-span-2  overflow-hidden">
              <img src="/images/Article2.jpg" alt="" />
            </div>
            {/* row-2 third pic */}
            <div className="col-span-1 overflow-hidden ">
              <img src="/images/Article3.jpg" alt="" />
            </div>
            {/* middle pic */}
            <div className="col-span-1 overflow-hidden ">
              <img src="/images/Article4.jpg" alt="" />
            </div>
            {/* last left-pic */}
            <div className="col-span-2  row-span-2 overflow-hidden">
              <img src="/images/Article7.jpg" alt="" />
            </div>
            {/* last row second pic */}
            <div className="col-span-1 overflow-hidden ">
              <img src="/images/Article5.jpg" alt="" />
            </div>
            {/* last right pic */}
            <div className="col-span-2 overflow-hidden ">
              <img src="/images/Article6.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArticle;
