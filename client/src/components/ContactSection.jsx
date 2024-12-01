import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareUpwork,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SiFreelancer } from "react-icons/si";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
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
          Let&apos;s connect! Feel free to reach out via email, or connect with
          me on LinkedIn, Instagram, Upwork, or Freelancer. I&apos;m always open
          to discussing new projects, opportunities, or collaborations!
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
  );
};

export default ContactSection;
