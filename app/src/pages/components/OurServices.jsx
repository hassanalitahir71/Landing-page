import React from "react";
import { LuArrowDownRight } from "react-icons/lu";

const OurServices = () => {
  const ServicesList = [
    {
      id: 1,
      number: "01",
      name: "social media strategy",
      content:
        "Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough.",
    },
    {
      id: 2,
      number: "02",
      name: "online reputation management",
      content:
        "Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough.",
    },
    {
      id: 3,
      number: "03",
      name: "UI/UX design",
      content:
        "Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough.",
    },
    {
      id: 4,
      number: "04",
      name: "web design",
      content:
        "Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough.",
    },
    {
      id: 5,
      number: "05",
      name: "mobile apps development",
      content:
        "Figma ipsum component variant main layer. Community list underline style move. Pixel hand bullet layout main line align.Figma ipsum component variant main layer. Create auto create scrolling strikethrough slice background. Slice share rotate component bullet overflow arrow image object. Outline prototype font hand content rectangle reesizing pen strikethrough.",
    },
  ];

  return (
    <div className="flex flex-col gap-16 md:gap-24 px-4 md:px-10">
      {/* Header Image */}
      <div className="w-full max-w-3xl mx-auto mt-10 md:mt-20">
        <img
          src="/images/our services (1).png"
          alt=""
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Section 1 */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 max-w-4xl mx-auto">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {ServicesList.slice(0, 2).map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-2">
                <h1 className="text-Brown1 text-xl md:text-2xl font-bold">
                  {item.number}
                </h1>
                <h3 className="text-White1 text-sm md:text-base">
                  {item.name}
                </h3>
              </div>

              <p className="text-Gray1 text-sm mt-2">{item.content}</p>

              <LuArrowDownRight className="text-Brown1 text-2xl md:text-3xl ml-auto mt-2" />
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/images/Group 3.png"
            alt=""
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 max-w-4xl mx-auto">
        {/* Image */}
        <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-none">
          <img
            src="/images/Group 4.png"
            alt=""
            className="w-full max-w-sm md:max-w-md lg:max-w-lg h-auto"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          {ServicesList.slice(2).map((item) => (
            <div key={item.id}>
              <div className="flex items-center gap-2">
                <h1 className="text-Brown1 text-xl md:text-2xl font-bold">
                  {item.number}
                </h1>
                <h3 className="text-White1 text-sm md:text-base">
                  {item.name}
                </h3>
              </div>

              <p className="text-Gray1 text-sm mt-2">{item.content}</p>

              <LuArrowDownRight className="text-Brown1 text-2xl md:text-3xl ml-auto mt-2" />
            </div>
          ))}
        </div>
      </div>

      {/* Workflow Section */}
      <div className="relative max-w-6xl mx-auto">
        <img src="/images/OUR workflow.png" alt="" className="w-full h-auto bg-Bleck1" />

        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-7xl font-bold text-center">
            <span className="text-White1">OUR </span>
            <span className="text-Brown1">WORKFLOW</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
