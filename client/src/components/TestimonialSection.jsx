import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa6";
import { IoChatbubblesOutline } from "react-icons/io5";
import testimonials from "../data/TestimonialData";

const TestimonialSection = () => {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
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
            aria-label="Testimonials Badge"
            className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500"
          >
            <IoChatbubblesOutline className="text-[#00BC91] w-3 h-3" />
            Testimonials
          </span>
          <div className="flex items-center justify-between w-full">
            <div className="w-9/12">
              <h1 className="text-3xl font-semibold text-neutral-700">
                What <span className="text-[#00BC91]">Clients Say</span>
              </h1>
              <p className="text-zinc-600 text-[1rem] mt-5">
                Hear from people I’ve worked with – their experiences and
                feedback about my work.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-emerald-100 text-emerald-600 rounded-md p-2 hover:bg-emerald-400 hover:text-white transition-all duration-200"
                onClick={previous}
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="bg-emerald-100 text-emerald-600 rounded-md p-2 hover:bg-emerald-400 hover:text-white transition-all duration-200"
                onClick={next}
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mx-auto overflow-hidden mt-5">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {testimonials.map((testimonial, index) => (
            <article
              key={index}
              className="p-6 border border-gray-200 rounded-xl group  gap-3 bg-white shadow-md hover:border-emerald-400 transition-all duration-200 flex flex-col"
            >
              <p className="text-zinc-600 text-base font italic">
                <FaQuoteLeft className="w-8 h-8 text-zinc-400 mb-4" />
                {testimonial.message}
              </p>
              <div className="mt-5 text-center">
                <h3 className="text-lg font-semibold text-neutral-700">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-zinc-500">
                  {testimonial.designation}
                </p>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSection;
