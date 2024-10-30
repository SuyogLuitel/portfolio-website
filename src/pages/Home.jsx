import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaCodepen } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import { Link } from "react-router-dom";

const scrollToSection = (id) => {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
};

const Home = () => {
  const [active, setActive] = useState("about");

  const sections = [
    { id: "about", name: "ABOUT" },
    { id: "experience", name: "EXPERIENCE" },
    { id: "projects", name: "PROJECTS" },
  ];

  return (
    <div className="bg-slate-900 w-full h-screen flex relative">
      <div className="w-[40%] pl-40 pt-24 flex flex-col gap-6">
        <h1 className="text-[#C4D1EC] text-6xl font-bold tracking-tight">
          Suyog Luitel
        </h1>
        <p className="text-slate-200 text-2xl font-semibold tracking-tight">
          Junior Frontend Engineer
        </p>
        <p className="text-[#94A3B8] leading-normal text-lg font-medium w-80">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <div className="flex flex-col gap-8 mt-10">
          {sections.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setActive(item.id);
              }}
              className={`group text-sm font-bold tracking-widest uppercase text-[#94A3B8] flex items-center gap-4 cursor-pointer ${
                active === item.id && "text-slate-200"
              }`}
            >
              <hr
                className={`border-t-2 group-hover:w-20 group-hover:border-slate-200 ${
                  active === item.id
                    ? "w-20 border-slate-200"
                    : "w-10 border-[#94A3B8]"
                }`}
              />
              {item.name}
            </div>
          ))}
        </div>
        <div className="flex items-center gap-5 mt-10">
          <Link to="https://github.com/SuyogLuitel" target="_blank">
            <FaGithub
              fontSize={26}
              className="text-[#94A3B8] hover:text-[#C4D0EC] cursor-pointer"
            />
          </Link>
          <Link
            to="https://www.linkedin.com/in/suyog-luitel-4349312a0/"
            target="_blank"
          >
            <FaLinkedin
              fontSize={26}
              className="text-[#94A3B8] hover:text-[#C4D0EC] cursor-pointer"
            />
          </Link>
          <FaCodepen
            fontSize={26}
            className="text-[#94A3B8] hover:text-[#C4D0EC] cursor-pointer"
          />
          <IoLogoInstagram
            fontSize={26}
            className="text-[#94A3B8] hover:text-[#C4D0EC] cursor-pointer"
          />
          <FaXTwitter
            fontSize={26}
            className="text-[#94A3B8] hover:text-[#C4D0EC] cursor-pointer"
          />
          <a href="mailto:suyogluitel235@gmail.com" rel="noopener noreferrer">
            <MdOutlineEmail
              fontSize={26}
              className="text-[#94A3B8] hover:text-[#C4D0EC] cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="w-[60%] flex flex-col gap-10 mt-[105px] overflow-y-auto pr-40">
        <div id="about">
          <About />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <Blogs />
      </div>
    </div>
  );
};

export default Home;
