import React from "react";
import Slider from "react-slick";
import { LuArrowDownRight } from "react-icons/lu";

const ClientAbout = () => {
  const LogoList = [
    {
      id: "1",
      img: "/images/COffee1.png",
    },
    {
      id: "2",
      img: "/images/COffee2.png",
    },
    {
      id: "3",
      img: "/images/COffee3.png",
    },
    {
      id: "4",
      img: "/images/COffee4.png",
    },
    {
      id: "5",
      img: "/images/COffee5.png",
    },
  ];
  const TestimonialList = [
    {
      id: "1",
      img: "/images/img3.png",
      name: "JOSH",
      rating: "3",
      professional: "Content writer",
      message:
        "Figma ipsum component variant main layer. Mask flows style bullet clip frame. Style edit variant object bullet layout.",
    },
    {
      id: "2",
      img: "/images/img2.png",
      name: "OLIVIA",
      rating: "2",
      professional: "Business Women",
      message:
        "Figma ipsum component variant main layer. Mask flows style bullet clip frame. Style edit variant object bullet layout.",
    },
    {
      id: "3",
      img: "/images/img3.png",
      name: "DAVID",
      rating: "4",
      professional: "Graphic Designer",
      message:
        "Figma ipsum component variant main layer. Mask flows style bullet clip frame. Style edit variant object bullet layout.",
    },
    {
      id: "4",
      img: "/images/img2.png",
      name: "OLIVIA",
      rating: "3",
      professional: "Teacher",
      message:
        "Figma ipsum component variant main layer. Mask flows style bullet clip frame. Style edit variant object bullet layout.",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const settings_logo = {
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 5,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <>
      {/* clint say about us */}
      <div className=" flex flex-col justify-center mt-10 gap-20 items-center">
        <div className="w-80% px-4 sm:px-6 md:px-10 py-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-10">
            {/* Text Section */}
            <h1
              className="font-extrabold uppercase text-white font-lexend
                 text-4xl sm:text-5xl md:text-8xl
                 leading-[0.85] tracking-tight"
            >
              <span className="text-white">WHAT </span>
              <span className="text-orange-500">CLIENTS</span>

              <br />

              <span className="text-white">SAY </span>
              <span className="text-orange-500">ABOUT </span>
              <span className="text-white">US</span>
            </h1>

            {/* Question Mark */}
            <h1
              className="font-extrabold text-orange-500 font-lexend
                 text-5xl sm:text-7xl md:text-[150px]
                 leading-none self-end md:self-auto"
            >
              ?
            </h1>
          </div>

          {/* Bottom Text */}
          <p className="text-gray-400 text-xs sm:text-sm mt-4 text-right">
            MESSAGES FROM OUR CLIENTS
          </p>
        </div>
        {/* Testimonial section */}
        <div className=" w-[90%]">
          <div className="slider-container">
            <Slider {...settings}>
              {TestimonialList.map((item) => (
                <div key={item.id} className=" w-[80%] ">
                  <div className="bg-[url('/images/Vector.png')] bg-cover h-70  w-88 flex flex-row pt-8  ">
                    <img
                      src={item.img}
                      alt=""
                      className=" rounded-bl-3xl font-lexend "
                    />
                    <div className="text-White1 flex flex-col justify-between py-9 px-2">
                      <div className="">
                        <h1 className=" font-bold text-3xl">{item.name}</h1>
                        <h3 className=" text-LigntGray1 text-sm font-semibold">
                          {item.professional}
                        </h3>
                      </div>
                      <p className=" text-sm ">{item.message}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* company logo */}
        <div className="w-full mx-auto mt-20">
          <div className="slider-container">
            <Slider {...settings_logo}>
              {LogoList.map((item) => (
                <div key={item.id} className="px-4">
                  <img
                    src={item.img}
                    alt=""
                    className="h-16 sm:h-14 xs:h-12 w-auto object-contain mx-auto"
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
        {/* Creative Team */}
        <div className=" min-h-screen flex items-center justify-center   p-6">
          <div className="grid grid-cols-3 auto-rows-[170px] gap-5 max-w-6xl w-full">
            {/* TEXT */}
            <div className="col-span-2 font-lexend  ">
              <h1 className=" text-White1 text-5xl font-bold "> THE MINDS</h1>
              <h2 className=" text-5xl font-bold text-Brown1">BEHIND</h2>

              <div className=" flex flex-row gap-8 items-center">
                <p className=" text-3xl text-gray-300">
                  OUR <span className="text-Brown1  font-bold">CREATIVE</span>{" "}
                  TEAM
                </p>
                <button className=" flex flex-row items-center gap-1 hover:bg-Orange1 bg-Brown1 px-3 py-2 rounded-full text-White1">
                  Explore More
                  <LuArrowDownRight />
                </button>
              </div>
            </div>

            {/* TOP RIGHT IMAGE */}
            <div className="row-span-1 flex justify-end overflow-hidden p-1">
              <img
                src="/images/grid_img2.jpg"
                alt="
            "
                className="w-50 h-full object-cover rounded-tr-4xl  rounded-bl-4xl  rounded-tl-4xl"
              />
            </div>

            {/* LEFT BIG IMAGE */}
            <div className="row-span-2 rounded-4xl overflow-hidden">
              <img
                src="/images/Largeimg.jpg"
                alt=""
                className="w-full h-full rounded-4xl object-cover"
              />
            </div>

            {/* CENTER CIRCLE IMAGE */}
            <div className="flex items-center justify-center row-span-1">
              <img
                src="/images/grid_img3.jpg"
                alt=""
                className="w-50 h-50 rounded-full object-cover"
              />
            </div>

            {/* RIGHT SMALL IMAGE */}
            <div className=" overflow-hidden pt-2 flex justify-end">
              <img
                src="/images/grid_img4.jpg"
                alt=""
                className="w-40 h-40  rounded-tr-4xl  rounded-bl-4xl  "
              />
            </div>

            {/* BOTTOM WIDE IMAGE */}
            <div className="col-span-2  flex justify-center items-center overflow-hidden">
              <img
                src="/images/grid_img5.jpg"
                alt=""
                className="w-[60%] h-[70%] rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientAbout;
