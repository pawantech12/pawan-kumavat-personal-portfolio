import { useRef } from "react";
import { FaChevronLeft, FaChevronRight, FaCode } from "react-icons/fa6";
import Slider from "react-slick";
import skills from "../data/SkillData";

const SkillSection = () => {
  const skillSettings = {
    dots: false,
    // infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 4, // Adjust based on your preference
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let skillSliderRef = useRef(null);

  const nextSkill = () => {
    skillSliderRef.slickNext();
  };
  const previousSkill = () => {
    skillSliderRef.slickPrev();
  };
  return (
    <section
      className="my-8 sm:mx-10 lg:mx-20 py-10 flex flex-col gap-5 bg-white rounded-xl px-5 md:px-10 lg:px-20"
      aria-labelledby="skills-section"
    >
      <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5">
        <div className="w-full flex flex-col gap-5">
          <span className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500">
            <FaCode className="text-[#00BC91] w-3 h-3" />
            Skills
          </span>

          <div className="flex items-center justify-between w-full max-[500px]:flex-col max-[500px]:gap-5">
            <div className="w-9/12 max-[500px]:w-full">
              <h4
                id="skills-section"
                className="text-2xl md:text-3xl font-semibold text-neutral-700"
              >
                My <span className="text-[#00BC91]">Skills</span>
              </h4>
              <p className="text-zinc-600 text-sm md:text-base mt-5">
                I am skilled in creating <strong>responsive</strong> and{" "}
                <strong>dynamic web applications</strong>, from front-end
                interfaces to back-end systems. My focus is on{" "}
                <strong>security</strong> and seamless integration, ensuring a
                robust user experience.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="bg-emerald-100 text-emerald-600 rounded-md p-2 hover:bg-emerald-400 hover:text-white transition-all ease-in-out duration-200"
                onClick={previousSkill}
              >
                <FaChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="bg-emerald-100 text-emerald-600 rounded-md p-2 hover:bg-emerald-400 hover:text-white transition-all ease-in-out duration-200"
                onClick={nextSkill}
              >
                <FaChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="w-full mx-auto  mt-5 max-[500px]:mt-0 ">
        <Slider
          ref={(slider) => {
            skillSliderRef = slider;
          }}
          {...skillSettings}
        >
          {skills.map((skill, index) => (
            <article
              key={index}
              className=" px-5 md:px-7 py-6 md:py-8 box-border border border-gray-200 rounded-xl h-[190px] group !flex flex-col cursor-pointer hover:border-emerald-400 transition-all ease-in-out duration-200"
            >
              <figure className="flex-grow flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={`${skill.title} icon`}
                  className="w-16 md:w-20"
                />
              </figure>
              <h4 className="text-center font-medium text-sm md:text-lg text-zinc-500 max-sm:text-lg">
                {skill.title}
              </h4>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SkillSection;
