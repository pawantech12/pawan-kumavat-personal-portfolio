import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { IoBriefcaseOutline } from "react-icons/io5";
import Slider from "react-slick";

import {
  services,
  FaLaptopCode,
  GrOptimize,
  GrServers,
  MdDevices,
  MdOutlineStorefront,
  TbSettingsCode,
  TbUserShield,
  TbWorldUpload,
} from "../data/ServiceData";
const ServiceSection = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const iconComponents = {
    FaLaptopCode,
    GrOptimize,
    GrServers,
    MdDevices,
    MdOutlineStorefront,
    TbSettingsCode,
    TbUserShield,
    TbWorldUpload,
  };

  const settings = {
    dots: false,
    // infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 3, // Adjust based on your preference
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section className="my-8 sm:mx-10 lg:mx-20 py-10 bg-white rounded-xl px-5 md:px-10 lg:px-20 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="w-full flex-col flex gap-5">
          <span
            aria-label="Services Badge"
            className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500"
          >
            <IoBriefcaseOutline className="text-[#00BC91] w-3 h-3" />
            Services
          </span>
          <div className="flex items-center justify-between w-full max-[500px]:flex-col max-[500px]:gap-5">
            <div className="w-9/12 max-[500px]:w-full">
              <h1 className="text-3xl font-semibold text-neutral-700">
                My <span className="text-[#00BC91]">Professional Services</span>
              </h1>
              <p className="text-zinc-600 text-[1rem] mt-5">
                I craft seamless web solutions that blend aesthetics with
                functionality. From front-end design to back-end integration, I
                deliver user-centric, scalable results that align with modern
                digital standards.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-emerald-100 text-emerald-600 rounded-md p-2 hover:bg-emerald-400 hover:text-white transition-all ease-in-out duration-200"
                onClick={previous}
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="bg-emerald-100 text-emerald-600 rounded-md p-2 hover:bg-emerald-400 hover:text-white transition-all ease-in-out duration-200"
                onClick={next}
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto overflow-hidden mt-5 max-[500px]:mt-0">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {services.map((service, index) => (
            <article
              key={index}
              className={`  px-5 py-8 box-border border border-gray-200 rounded-xl group flex flex-col gap-2 h-[250px] cursor-pointer hover:border-emerald-400`}
              aria-labelledby={`service-title-${index}`}
            >
              <div className="flex justify-between items-center">
                <span className="text-4 font-bold text-5xl text-zinc-600 opacity-30 group-hover:opacity-100 transition-all ease-in-out duration-200">
                  {service.id}
                </span>
                <span className="text-3xl text-emerald-400 group-hover:-rotate-45 transition-all ease-in-out duration-200">
                  {iconComponents[service.icon] &&
                    React.createElement(iconComponents[service.icon])}
                </span>
              </div>
              <h2
                id={`service-title-${index}`}
                className="text-2xl font-medium text-neutral-600 mt-2"
              >
                {service.title}
              </h2>
              <p className="text-[1rem] text-zinc-600">
                {service.description.slice(0, 100) + "..."}
              </p>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServiceSection;
