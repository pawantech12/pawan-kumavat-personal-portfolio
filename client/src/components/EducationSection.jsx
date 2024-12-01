import { LuGraduationCap } from "react-icons/lu";

const EducationSection = () => {
  return (
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
                    K.M. Agrawal College of Arts, Commerce and Science (Kalyan |
                    Maharashtra)
                  </span>
                </div>
                <span className="bg-emerald-100 text-emerald-500 rounded-md py-1 px-4 font-medium text-center">
                  2021-2024
                </span>
              </div>
              <p className="bg-emerald-100 text-emerald-500 italic rounded-lg px-4 py-2 text-sm sm:text-base">
                Completed Bachelor of Science in Computer Science from K.M.
                Agrawal College, focusing on programming, data structures,
                algorithms, and software development, essential for a successful
                career in technology.
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
  );
};

export default EducationSection;
