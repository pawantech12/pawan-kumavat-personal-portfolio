import { FaBriefcase } from "react-icons/fa6";

const ExperienceSection = () => {
  return (
    <section className="my-8 sm:mx-10 md:mx-10 py-10 flex flex-col gap-5 bg-white rounded-xl px-5 sm:px-10 md:px-20">
      <div className="w-full md:w-3/4 flex flex-col gap-5">
        <span className="border border-gray-200 rounded-full flex items-center gap-1 w-fit py-2 px-5 uppercase text-xs font-medium text-zinc-500">
          <FaBriefcase className="text-[#00BC91] w-3 h-3" />
          Experience
        </span>
        <h4 className="text-2xl sm:text-3xl font-semibold text-neutral-700">
          My <span className="text-[#00BC91]">Experience</span>
        </h4>
        <p className="text-zinc-600 text-sm sm:text-[1rem]">
          Discover my professional journey, where I have honed my skills in web
          development and full-stack engineering through various freelance and
          internship experiences.
        </p>
      </div>

      <div>
        <ul className="flex flex-col gap-5 sm:gap-7">
          {/* Full-Stack Developer Internship */}
          <li>
            <div className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-zinc-600">
                    Full-Stack Developer Intern
                  </h4>
                  <span className="text-base sm:text-[17px] text-zinc-600">
                    Aspireit (Remote)
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-500 rounded-md py-1 px-4 font-medium text-center">
                  Dec 2024 - Present
                </span>
              </div>
              <p className="bg-emerald-100 text-emerald-500 italic rounded-lg px-4 py-2 text-sm sm:text-base">
                Working as a Full-Stack Developer Intern, contributing to web
                applications using React, Node.js, and MongoDB. Gaining hands-on
                experience in building scalable and responsive web solutions.
              </p>
            </div>
          </li>

          {/* Freelance Web Developer (Upwork) */}
          <li>
            <div className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-zinc-600">
                    Freelance Web Developer
                  </h4>
                  <span className="text-base sm:text-[17px] text-zinc-600">
                    Upwork (Remote)
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-500 rounded-md py-1 px-4 font-medium text-center">
                  June 2024 - Present
                </span>
              </div>
              <p className="bg-emerald-100 text-emerald-500 italic rounded-lg px-4 py-2 text-sm sm:text-base">
                Providing freelance web development services on Upwork,
                specializing in front-end and full-stack solutions using React,
                Next.js, Tailwind CSS, and Node.js.
              </p>
            </div>
          </li>

          {/* Freelance Web Developer (General) */}
          <li>
            <div className="flex flex-col gap-3 border border-gray-200 p-4 rounded-lg">
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium text-zinc-600">
                    Freelance Web Developer
                  </h4>
                  <span className="text-base sm:text-[17px] text-zinc-600">
                    Self-Employed (Remote)
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-500 rounded-md py-1 px-4 font-medium text-center">
                  2021 - Present
                </span>
              </div>
              <p className="bg-emerald-100 text-emerald-500 italic rounded-lg px-4 py-2 text-sm sm:text-base">
                Working as a freelance web developer, building responsive and
                high-performance websites for clients using modern web
                technologies like React, PHP, MySQL, and JavaScript frameworks.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;
