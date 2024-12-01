import { useRef, useState } from "react";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaSquareUpwork,
} from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";
import { SiFreelancer } from "react-icons/si";

import { Link } from "react-router-dom";

import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ServiceSection from "../components/ServiceSection";
import SkillSection from "../components/SkillSection";
import EducationSection from "../components/EducationSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

export const Home = () => {
  // Create a ref for the portfolio section
  const portfolioRef = useRef(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse move
  const handleMouseMove = (e) => {
    setCursorPosition({ x: e.clientX - 10, y: e.clientY - 10 });
  };

  return (
    <>
      <main
        onMouseMove={handleMouseMove}
        className="relative w-full h-full overflow-hidden"
      >
        <div
          className="pointer-events-none fixed top-0 left-0 w-6 h-6 ring-emerald-300 ring-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-150 ease-out flex items-center justify-center"
          style={{
            transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
          }}
        >
          <div className="bg-emerald-300 w-3 h-3 rounded-full"></div>
        </div>
        <HeroSection portfolioRef={portfolioRef} />

        <AboutSection />

        <ServiceSection />

        <SkillSection />

        <EducationSection />

        <PortfolioSection />

        <ContactSection />
      </main>
    </>
  );
};
