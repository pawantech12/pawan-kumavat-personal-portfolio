import { IoHomeOutline } from "react-icons/io5";
import hero from "../img/hero.webp";
import { Typewriter } from "react-simple-typewriter";
import { FaCheckDouble } from "react-icons/fa6";
import { Link } from "react-router-dom";
const HeroSection = ({ portfolioRef }) => {
  // Function to scroll to the portfolio section
  const handleScrollToPortfolio = () => {
    portfolioRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
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
          💻 Full-Stack Web Developer with 4+ years of experience in MERN stack,
          PHP, MySQL, TailwindCSS, Bootstrap, and Next.js. Skilled in API
          development, authentication, e-commerce, and cloud storage, I build
          fast, secure, and SEO-friendly web solutions. 🚀
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
          <Link
            to={`https://www.linkedin.com/in/pawan-kumavat-11b105297/`}
            className="max-[494px]:w-full"
          >
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
  );
};

export default HeroSection;
