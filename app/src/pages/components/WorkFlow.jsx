import React, { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";

const WorkFlow = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const data = [
    { id: 1, title: "CONCEPT" },
    { id: 2, title: "BUDGET" },
    { id: 3, title: "DOWNLOAD" },
  ];

  return (
    <div className="flex flex-col gap-50 w-full">
      {/* Header */}
      <div className="relative max-w-6xl mx-auto">
        <img src="/images/OUR workflow.png" alt="" className="w-full h-auto" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center">
            <span className="text-White1">OUR </span>
            <span className="text-Brown1 ">WORKFLOW</span>
          </h1>
        </div>
      </div>

      {/* Accordion */}
      <div className="flex flex-col items-center rotate-15 w-[97%]">
        {data.map((item, index) => (
          <div
            key={item.id}
            className="border-b-2 border-Gray1 w-full flex justify-center"
          >
            <div className="w-[80%] py-4 flex flex-col">
              {/* Title */}
              <h1
                className="group text-White1  hover:text-Brown1 text-3xl md:text-5xl font-bold cursor-pointer"
                onClick={() => toggle(index)}
              >
                <span className="text-Brown1  group-hover:text-White1  ">
                  {String(item.id).padStart(2, "0")}
                </span>{" "}
                {item.title}
              </h1>

              {/* Content */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === index ? "max-h-[400px] mt-4" : "max-h-0"
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-3">
                  {/* Text */}
                  <div className="flex flex-col max-w-md">
                    <p className="text-xs text-Gray1">
                      Figma ipsum component variant main layer. Link object
                      connection duplicate overflow distribute. Strikethrough
                      align blur asset layer ipsum rotate...
                    </p>

                    <button className="flex items-center gap-1 mt-2 self-end bg-Brown1 px-3 py-1 rounded-full text-White1 text-sm hover:bg-Gray1">
                      Read More
                      <LuArrowDownRight />
                    </button>
                  </div>

                  {/* Image */}
                  <img
                    src="/images/Group 5.png"
                    alt=""
                    className="h-40 w-40 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkFlow;
