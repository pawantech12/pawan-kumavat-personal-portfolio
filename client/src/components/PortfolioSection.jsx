import { FaChevronRight } from "react-icons/fa6";
import { LuLayoutList } from "react-icons/lu";
import { Link } from "react-router-dom";
import PortfolioData from "../data/PortfolioData";
import { useState } from "react";

const PortfolioSection = ({ portfolioRef }) => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);

  const handleLoadMore = () => {
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 3);
      setLoading(false);
    }, 1000); // Simulating loading animation
  };
  return (
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
          showcasing sleek designs and powerful applications. Enjoy discovering
          my work!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {PortfolioData &&
          PortfolioData.slice(0, visibleCount).map((portfolio, index) => (
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
      {/* Load More Button */}
      {visibleCount < PortfolioData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-6 py-2 bg-emerald-500 text-white font-medium rounded-lg hover:bg-emerald-600 transition-all ease-in-out duration-200 flex justify-center items-center gap-2"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-5 h-5"></span>
                <span>Loading...</span>
              </>
            ) : (
              "Load More"
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
