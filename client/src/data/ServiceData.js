import { FaLaptopCode } from "react-icons/fa6";
import { GrOptimize, GrServers } from "react-icons/gr";
import { MdDevices, MdOutlineStorefront } from "react-icons/md";
import { TbSettingsCode, TbUserShield, TbWorldUpload } from "react-icons/tb";

const services = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Crafting responsive and interactive user interfaces using HTML, CSS, and JavaScript, with a focus on modern frameworks like Bootstrap and TailwindCSS. Expertise in ReactJS for building dynamic single-page applications.",
    icon: "MdDevices",
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "Developing robust server-side applications using Node.js and Express.js, alongside traditional technologies like PHP and MySQL. Skilled in creating RESTful APIs and managing databases.",
    icon: "GrServers",
  },
  {
    id: 3,
    title: "Full-Stack Development",
    description:
      "Offering comprehensive web solutions by handling both front-end and back-end development, leveraging the MERN stack for seamless integration and efficient development.",
    icon: "FaLaptopCode",
  },
  {
    id: 4,
    title: "Authentication & Authorization Systems",
    description:
      "Implementing secure systems for user authentication and authorization, including JWT-based session management and password encryption for enhanced security.",
    icon: "TbUserShield",
  },
  {
    id: 5,
    title: "API Development & Integration",
    description:
      "Designing and developing RESTful APIs, as well as integrating third-party services into web applications, ensuring seamless data exchange and functionality.",
    icon: "TbSettingsCode",
  },
  {
    id: 6,
    title: "Website Optimization",
    description:
      "Enhancing website performance for faster loading times and better user engagement, alongside implementing SEO best practices to improve visibility",
    icon: "GrOptimize",
  },
  {
    id: 7,
    title: "E-commerce Development",
    description:
      "Developing and setting up online stores, integrating secure payment gateways, and ensuring a smooth shopping experience for customers.",
    icon: "MdOutlineStorefront",
  },
  {
    id: 8,
    title: "Project Deployment & Hosting",
    description:
      "Deploying web applications on reliable platforms like Vercel, Render,hostinger(VPS Hosting) along with setting up hosting environments and managing domain configurations.",
    icon: "TbWorldUpload",
  },
];

export {
  services,
  FaLaptopCode,
  GrOptimize,
  GrServers,
  MdDevices,
  MdOutlineStorefront,
  TbSettingsCode,
  TbUserShield,
  TbWorldUpload,
};
