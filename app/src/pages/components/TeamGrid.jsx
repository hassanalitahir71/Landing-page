import React from "react";

const TeamGrid = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-6">
      <div className="grid grid-cols-3 auto-rows-[150px] gap-6 max-w-5xl w-full">
        {/* TEXT */}
        <div className="col-span-2 text-white">
          <h1 className="text-5xl font-bold">THE MINDS</h1>
          <h1 className="text-5xl font-bold text-orange-500">BEHIND</h1>
          <p className="mt-2 text-gray-300">
            OUR <span className="text-orange-500 font-semibold">CREATIVE</span>{" "}
            TEAM
          </p>

          <button className="mt-4 bg-orange-500 px-4 py-2 rounded-full">
            Explore More →
          </button>
        </div>

        {/* TOP RIGHT IMAGE */}
        <div className="row-span-1 rounded-3xl overflow-hidden">
          <img
            src="/images/img1.png"
            alt="
            "
            className="w-full h-full object-cover"
          />
        </div>

        {/* LEFT BIG IMAGE */}
        <div className="row-span-3 rounded-3xl overflow-hidden">
          <img
            src="/images/img2.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* CENTER CIRCLE IMAGE */}
        <div className="flex items-center justify-center row-span-2">
          <img
            src="/images/img3.jpg"
            alt=""
            className="w-36 h-36 rounded-full object-cover"
          />
        </div>

        {/* RIGHT SMALL IMAGE */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src="/images/img4.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* BOTTOM WIDE IMAGE */}
        <div className="col-span-2 rounded-3xl overflow-hidden">
          <img
            src="/images/img5.jpg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
