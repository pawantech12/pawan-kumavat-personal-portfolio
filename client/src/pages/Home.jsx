import React, { useRef } from "react";
import { IoBriefcaseOutline, IoHomeOutline } from "react-icons/io5";
import Slider from "react-slick";
import {
  FaCheckDouble,
  FaChevronLeft,
  FaChevronRight,
  FaCode,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegUser,
  FaSquareUpwork,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SiFreelancer } from "react-icons/si";

import hero from "../img/hero.png";
import { Typewriter } from "react-simple-typewriter";
import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { CounterUp } from "../components/CounterUp";

import { LuGraduationCap, LuLayoutList } from "react-icons/lu";
import PortfolioData from "../data/PortfolioData";
import { Link } from "react-router-dom";
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
import skills from "../data/SkillData";

export const Home = () => {
  // Create a ref for the portfolio section
  const portfolioRef = useRef(null);

  // Function to scroll to the portfolio section
  const handleScrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
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
  const skillSettings = {
    dots: false,
    // infinite: true,
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
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const nextSkill = () => {
    skillSliderRef.slickNext();
  };
  const previousSkill = () => {
    skillSliderRef.slickPrev();
  };

  return (
    <>
      <section
        className="my-8 sm:mx-10 lg:px-20 px-10 py-10 bg-white rounded-xl flex flex-col lg:flex-row justify-around items-center"
        aria-label="Introduction of Pawan Kumavat, a Full Stack Web Developer"
      >
        <div className="w-full lg:w-1/2 flex flex-col gap-4">
          <span className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-1 px-5 uppercase text-xs font-medium text-zinc-500">
            <IoHomeOutline className="text-[#00BC91] w-4 h-4" />
            Introduce
          </span>
          <h1 className="text-3xl sm:text-4xl font-semibold mt-5 text-neutral-700 leading-[2.8rem]">
            Hello, I'm Pawan Kumavat <br />a
            <span className="text-[#00BC91]">
              {" "}
              <Typewriter
                words={[
                  "Frontend Developer",
                  "Backend Developer",
                  "MERN Developer",
                  "Web Developer!",
                  "Full Stack Developer",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-zinc-600 text-sm sm:text-base">
            I'm a versatile Web Developer with a passion for creating dynamic
            and user-friendly web experiences. With expertise in HTML, CSS,
            JavaScript, PHP, MySQL, and the MERN stack, I specialize in crafting
            full-stack solutions that meet the unique needs of each project.
            Whether it's building intuitive interfaces with TailwindCSS and
            Bootstrap or developing robust back-end systems, I bring creativity
            and technical excellence to every challenge.
          </p>
          <div className="flex flex-row items-center gap-8">
            <span className="flex items-center gap-2 text-zinc-600">
              <FaCheckDouble className="text-[#00BC91]" />
              Available for work
            </span>
            <span className="flex items-center gap-2 text-zinc-600">
              <FaCheckDouble className="text-[#00BC91]" />
              Full Time Job
            </span>
          </div>
          <div className="flex flex-row max-[494px]:flex-col items-center gap-8 max-[494px]:gap-4 mt-1 ">
            <Link to={`https://www.linkedin.com/in/pawan-kumavat-11b105297/`}>
              <button
                className="bg-[#00BC91] hover:bg-emerald-600 hover:-translate-y-1 transition-all ease-in-out text-white px-8 py-2 rounded-lg text-lg font-medium max-[494px]:w-full"
                title="Contact Pawan Kumavat to Hire"
              >
                Hire Me
              </button>
            </Link>

            <button
              className="text-[#00BC91] border font-medium px-8 py-2 rounded-lg text-lg border-[#00BC91] max-[494px]:w-full"
              title="Browse the portfolio of Pawan Kumavat"
              onClick={handleScrollToPortfolio}
            >
              Browse My work
            </button>
          </div>
        </div>
        <div className="w-3/4 lg:w-1/4 mt-4 lg:mt-0">
          <figure>
            <img
              src={hero}
              alt="Portrait of Pawan Kumavat, Web Developer"
              className="w-full rounded-full"
            />
          </figure>
        </div>
      </section>

      <section
        className="my-8 sm:mx-10 lg:mx-20 py-10 bg-white rounded-xl px-5 md:px-10 lg:px-20 flex flex-col gap-5"
        aria-labelledby="about-me"
      >
        <span
          className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500"
          aria-label="About Me Section"
        >
          <FaRegUser className="text-[#00BC91] w-3 h-3" />
          About Me
        </span>
        <h4
          id="about-me"
          className="text-2xl md:text-3xl font-semibold text-neutral-700"
        >
          About <span className="text-[#00BC91]">Me</span>
        </h4>
        <p className="text-zinc-600 text-base md:text-[1rem]">
          I am a passionate web developer with a BSc in Computer Science from
          the University of Mumbai. Skilled in web development and application
          building, I specialize in using HTML, CSS, JavaScript, and the MERN
          stack (MongoDB, ExpressJS, ReactJS, NodeJS) to create seamless,
          user-focused web applications. With 7 months of hands-on MERN
          experience and 3 years of expertise in PHP and MySQL, I bring a strong
          foundation in back-end and front-end development. I am also proficient
          with TailwindCSS, Bootstrap, secure authentication systems, JWT, and
          API integration, continuously expanding my knowledge to solve complex
          problems with innovative solutions.
        </p>
        <div>
          <h5 className="text-lg font-medium text-neutral-700">Top 5 Skills</h5>
          <ul
            className="mt-4 flex flex-wrap items-center gap-4"
            aria-label="List of top skills"
          >
            <li className="border-dashed border-gray-200 border rounded-full px-5 py-1 text-zinc-600 hover:text-[#00BC91] cursor-pointer transition-all ease-in-out duration-200">
              ExpressJS
            </li>
            <li className="border-dashed border-gray-200 border rounded-full px-5 py-1 text-zinc-600 hover:text-[#00BC91] cursor-pointer transition-all ease-in-out duration-200">
              ReactJS
            </li>
            <li className="border-dashed border-gray-200 border rounded-full px-5 py-1 text-zinc-600 hover:text-[#00BC91] cursor-pointer transition-all ease-in-out duration-200">
              JavaScript
            </li>
            <li className="border-dashed border-gray-200 border rounded-full px-5 py-1 text-zinc-600 hover:text-[#00BC91] cursor-pointer transition-all ease-in-out duration-200">
              MongoDB
            </li>
            <li className="border-dashed border-gray-200 border rounded-full px-5 py-1 text-zinc-600 hover:text-[#00BC91] cursor-pointer transition-all ease-in-out duration-200">
              NodeJS
            </li>
          </ul>
        </div>
        <div className="mt-3" aria-label="Contact information">
          <ul className="flex flex-col md:flex-row items-center gap-3 justify-between">
            <li className="flex items-center gap-1 text-zinc-600">
              <MdOutlinePhone className="w-6 h-6 text-[#00BC91]" /> +91
              9619579304 | 9820585835
            </li>
            <li className="flex items-center gap-1 text-zinc-600">
              <MdOutlineEmail className="w-6 h-6 text-[#00BC91]" />{" "}
              pawankumavat042@gmail.com
            </li>
            <li className="flex items-center gap-1 text-zinc-600">
              <FaGithub className="w-6 h-6 text-[#00BC91]" /> pawantech12
            </li>
          </ul>
        </div>
        <div
          className="flex max-[750px]:gap-1 max-[750px]:text-center md:flex-row items-center justify-around mt-8"
          aria-label="Professional achievements"
        >
          <CounterUp end={4} label="Years Of Experience" />
          <CounterUp end={50} label="No. of Projects" />
          <CounterUp end={10} label="Open Source Libraries" />
        </div>
      </section>

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
                  My{" "}
                  <span className="text-[#00BC91]">Professional Services</span>
                </h1>
                <p className="text-zinc-600 text-[1rem] mt-5">
                  I craft seamless web solutions that blend aesthetics with
                  functionality. From front-end design to back-end integration,
                  I deliver user-centric, scalable results that align with
                  modern digital standards.
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

      <section className="my-8  sm:mx-10 md:mx-10 py-10 flex flex-col gap-5 bg-white rounded-xl px-5 sm:px-10 md:px-20">
        <div className="w-full md:w-3/4 flex flex-col gap-5">
          <span className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500">
            <LuGraduationCap className="text-[#00BC91] w-3 h-3" />
            Education
          </span>
          <h4 className="text-2xl sm:text-3xl font-semibold text-neutral-700">
            My <span className="text-[#00BC91]">Education</span>
          </h4>
          <p className="text-zinc-600 text-sm sm:text-[1rem]">
            Explore my educational journey and the skills I developed throughout
            my career in computer science.
          </p>
        </div>

        <div>
          <ul className="flex flex-col gap-5 sm:gap-7">
            <li>
              <div className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-zinc-600">
                      Bachelor of Science in Computer Science
                    </h4>
                    <span className="text-base sm:text-[17px] text-zinc-600">
                      K.M. Agrawal College of Arts, Commerce and Science (Kalyan
                      | Maharashtra)
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-500 rounded-md py-1 px-4 font-medium text-center">
                    2021-2024
                  </span>
                </div>
                <p className="bg-emerald-100 text-emerald-500 italic rounded-lg px-4 py-2 text-sm sm:text-base">
                  Completed Bachelor of Science in Computer Science from K.M.
                  Agrawal College, focusing on programming, data structures,
                  algorithms, and software development, essential for a
                  successful career in technology.
                </p>
              </div>
            </li>
            <li>
              <div className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg">
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                  <div>
                    <h4 className="text-lg sm:text-xl font-medium text-zinc-600">
                      HSC in Science
                    </h4>
                    <span className="text-base sm:text-[17px] text-zinc-600">
                      Hill Spring International Jr. College of Science and
                      Commerce (Kalyan | Maharashtra)
                    </span>
                  </div>
                  <span className="bg-emerald-100 text-emerald-500 rounded-md py-1 px-4 font-medium text-center">
                    2019-2021
                  </span>
                </div>
                <p className="bg-emerald-100 text-emerald-500 italic rounded-lg px-4 py-2 text-sm sm:text-base">
                  Graduated with a Higher Secondary Certificate (HSC) in Science
                  from Hill Spring International Jr. College of Science and
                  Commerce, laying a strong foundation for my future studies in
                  computer science.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section
        className="my-8 px-6 sm:mx-10 sm:px-8 md:px-10 lg:mx-20 py-10 flex flex-col gap-5 bg-white rounded-xl lg:px-20"
        ref={portfolioRef}
      >
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          <span className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500">
            <LuLayoutList className="text-[#00BC91] w-3 h-3" />
            Portfolio
          </span>
          <h4 className="text-2xl md:text-3xl font-semibold text-neutral-700">
            My <span className="text-[#00BC91]">Portfolio</span>
          </h4>
          <p className="text-zinc-600 text-[0.9rem] md:text-[1rem]">
            Welcome to my Portfolio! Explore my web development projects
            showcasing sleek designs and powerful applications. Enjoy
            discovering my work!
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {PortfolioData &&
            PortfolioData.map((portfolio, index) => (
              <div key={index} className="p-4 shadow-custom rounded-xl group">
                <figure className="w-full h-48 2xl:h-64">
                  <img
                    src={portfolio.image}
                    alt={`Portfolio project titled ${portfolio.title}`}
                    className="rounded-lg w-full h-full object-cover"
                  />
                  <figcaption className="hidden">
                    {portfolio.description}
                  </figcaption>
                </figure>
                <div className="flex flex-col gap-2 mt-3">
                  <h4
                    className="text-base md:text-lg font-bold text-neutral-700"
                    aria-label={`Project title: ${portfolio.title}`}
                  >
                    {portfolio.title}
                  </h4>
                  <p className="text-zinc-600 text-sm">
                    {portfolio.description.slice(0, 100) +
                      (portfolio.description.length > 100 ? "..." : "")}
                  </p>
                  <Link
                    to={portfolio.link}
                    className="font-medium text-emerald-500 flex gap-2 items-center"
                  >
                    View More{" "}
                    <span className="p-2 rounded-lg bg-emerald-50 group-hover:bg-emerald-500 group-hover:text-white transition-all ease-in-out duration-200 group-hover:translate-x-3">
                      <FaChevronRight />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>

      <section
        className="my-8 px-5 md:px-10 sm:mx-10 lg:mx-20 py-10 flex flex-col gap-5 bg-white rounded-xl lg:px-20"
        aria-label="Contact Me Section"
      >
        <div className="w-full lg:w-3/4 flex flex-col gap-5">
          <span className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500">
            <HiOutlineMail className="text-[#00BC91] w-3 h-3" />
            Contact
          </span>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-700">
            Contact <span className="text-[#00BC91]">Me</span>
          </h2>
          <p className="text-zinc-600 text-[1rem]">
            Let&apos;s connect! Feel free to reach out via email, or connect
            with me on LinkedIn, Instagram, Upwork, or Freelancer. I&apos;m
            always open to discussing new projects, opportunities, or
            collaborations!
          </p>
        </div>
        <div>
          <span className="flex items-center gap-2 text-gray-700 font-medium">
            <HiOutlineMail
              className="text-[#00BC91] w-6 h-6"
              aria-hidden="true"
            />
            <Link to={"mailto:pawankumavat042@gmail.com"}>
              pawankumavat042@gmail.com
            </Link>
          </span>
          <ul className="mt-5 flex gap-3 flex-wrap">
            <li>
              <Link to={"https://www.linkedin.com/in/pawan-kumavat-11b105297/"}>
                <button
                  className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white transition-all ease-in-out duration-200"
                  aria-label="Connect with me on LinkedIn"
                >
                  <FaLinkedin className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </li>
            <li>
              <Link to={"https://github.com/pawantech12"}>
                <button
                  className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white transition-all ease-in-out duration-200"
                  aria-label="View my GitHub profile"
                >
                  <FaGithub className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </li>
            <li>
              <Link to={"https://www.instagram.com/codewithpawan/"}>
                <button
                  className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white transition-all ease-in-out duration-200"
                  aria-label="Follow me on Instagram"
                >
                  <FaInstagram className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </li>
            <li>
              <Link
                to={
                  "https://www.upwork.com/freelancers/~0158308bc3186144ea?mp_source=share"
                }
              >
                <button
                  className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white transition-all ease-in-out duration-200"
                  aria-label="Hire me on Upwork"
                >
                  <FaSquareUpwork className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </li>
            <li>
              <Link to={"https://www.freelancer.in/u/Pawankumavat?sb=t"}>
                <button
                  className="p-2 rounded-md bg-gray-200 text-gray-800 hover:bg-gray-600 hover:text-white transition-all ease-in-out duration-200"
                  aria-label="Connect with me on Freelancer"
                >
                  <SiFreelancer className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};
