import React from "react";
import Slider from "react-slick";

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
    speed: 2000,
    autoplaySpeed: 2000,
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
      <div className=" flex flex-col justify-center mt-40 gap-20 items-center">
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
                        <h3 className=" text-LigntGray1 text-sm">
                          {item.professional}
                        </h3>
                      </div>
                      <p className=" text-sm">{item.message}</p>
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
      </div>
    </>
  );
};

export default ClientAbout;
