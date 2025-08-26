import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import proj1 from "../assets/images/repo1.png";
import proj2 from "../assets/images/repo2.png";
import proj3 from "../assets/images/repo3.png";
import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FiChevronDown } from "react-icons/fi";

const projects = [
  {
    title: "Devzen By Campus Unilag",
    desc: "DevZen your go to application/tool for most of your Development work. The main aim of this is to create a tool that can help you automate some of your tasks.",
    devstack: "MongoDB, TypeScript, React, Node.js, TailwindCSS",
    link: "https://devzen-frontend.vercel.app/",
    git: "https://github.com/GitHub-Campus-Experts-Unilag/DevzenFrontend",
    src: proj1,
    type: "fullstack",
  },
  {
    title: "EV Charging Stations Locater",
    desc: "A full-stack web application to manage electric vehicle charging stations. Built with Vue 3, Bootstrap," +
        " Express, MongoDB, and Leaflet.",
    devstack: "VueJS Leaflet MongoDB Express Bootstrap",
    link: "https://charging-stations-frontend-nine.vercel.app/",
    git: "https://github.com/bullseye4703/charging-stations-frontend",
    src: proj2,
    type: "Fullstack (Backend focused)",
  },
  {
    title: "RENTIFUL: Rental Property Management",
    desc: "A modern, production-ready real estate web application to manage property listings, facilitate buy/rent transactions, and offer a robust, scalable platform for users and developers.",
    devstack: "NextJS, TailwindCSS, AWS, PostgreSQL",
    link: "https://github.com/bullseye4703/real-estate-prod",
    git: "https://github.com/bullseye4703/real-estate-prod",
    src: proj3,
    type: "Fullstack",
  },
];

export const Portfolio = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="text-white py-24 md:py-64" id="portfolio">
      <div className="container mx-auto px-4">
        <h2 className="text-6xl font-bold text-center mb-16">
          Selected <span className="text-emerald-300">Projects</span>
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div
                className="p-6 flex justify-between items-center cursor-pointer bg-black/20 border border-white/10"
                onClick={() => toggleExpand(index)}
              >
                <h3 className="text-4xl font-semibold">{project.title}</h3>
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-light text-emerald-300">
                    0{index + 1}
                  </span>
                  <FiChevronDown 
                    className={`w-6 h-6 transform transition-transform ${
                      expandedIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>
              <AnimatePresence>
                {expandedIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6  bg-black/20 border border-white/10"
                  >
                    <div className="flex flex-col md:flex-row gap-8">
                      <img
                        src={project.src}
                        alt={project.title}
                        className="w-full md:w-1/2 h-64 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <p className="text-white/70 mb-4">{project.desc}</p>
                        <p className="text-emerald-300 font-medium mb-2">
                          Stack: {project.devstack}
                        </p>
                        <p className="text-emerald-400/60 font-medium mb-4 capitalize">
                          Type: {project.type}
                        </p>
                        <div className="flex justify-start items-center space-x-4">
                          <a
                            href={project.link}
                            className="text-emerald-400 hover:text-blue-300 transition-colors"
                          >
                            <HiOutlineExternalLink />
                          </a>
                          <a
                            href={project.git}
                            className="text-gray-400 hover:text-gray-300 transition-colors"
                          >
                            <FaGithub />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
