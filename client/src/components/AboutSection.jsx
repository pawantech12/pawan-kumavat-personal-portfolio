import { MdOutlineEmail, MdOutlinePhone } from "react-icons/md";
import { CounterUp } from "../components/CounterUp";
import { FaGithub, FaRegUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
const AboutSection = () => {
  return (
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
        I’m a full-stack web developer with 4+ years of experience, specializing
        in building responsive, high-performance applications. Proficient in
        HTML, CSS, JavaScript, PHP, MySQL, and the MERN stack (MongoDB,
        Express.js, React.js, Node.js), I create seamless frontend experiences
        with TailwindCSS, Bootstrap, and Next.js. My expertise includes secure
        authentication, API development, website optimization, and cloud
        integrations with Cloudinary and Firebase. I deploy projects on Vercel,
        Render, Netlify, and VPS, ensuring scalability and efficiency.
        Passionate about solving complex problems, I continuously explore new
        technologies to deliver impactful digital solutions.
      </p>

      <div className="mt-3" aria-label="Contact information">
        <ul className="flex flex-col md:flex-row items-center gap-3 justify-between">
          <li>
            <Link
              className="flex items-center gap-1 text-zinc-600"
              to="tel:+919619579304"
            >
              <MdOutlinePhone className="w-6 h-6 text-[#00BC91]" /> +91
              9619579304
            </Link>
          </li>
          <li>
            <Link
              to={"mailto:pawankumavat042@gmail.com"}
              className="flex items-center gap-1 text-zinc-600"
            >
              <MdOutlineEmail className="w-6 h-6 text-[#00BC91]" />{" "}
              pawankumavat042@gmail.com
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-1 text-zinc-600"
              to={"https://github.com/pawantech12"}
              target="_blank"
            >
              {" "}
              <FaGithub className="w-6 h-6 text-[#00BC91]" /> pawantech12
            </Link>
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
  );
};

export default AboutSection;
