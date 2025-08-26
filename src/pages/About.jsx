import React from "react";
import { motion } from "framer-motion";

import project1 from "../assets/images/proj5.png";

export const About = () => {
  return (
      <section id="about" className="text-white p-8">
        <h2 className="text-6xl font-bold mb-8">
          About <span className="text-emerald-300">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">01. Background</h3>
            <p className="text-white/50 mb-6">
              I'm a passionate full-stack developer with a strong foundation in
              computer science and a love for creating innovative web solutions.
              My journey in tech started with a curiosity about how things work,
              which led me to pursue a career in software development.
            </p>

            <div className="rounded-lg p-4 mb-4 border border-white/20">
              <code className="text-emerald-200/50">
                const skills = [<br />
                &nbsp;&nbsp;'JavaScript',
                <br />
                &nbsp;&nbsp;'React',
                <br />
                &nbsp;&nbsp;'Node.js',
                <br />
                &nbsp;&nbsp;'Python',
                <br />
                &nbsp;&nbsp;'SQL',
                <br />
                &nbsp;&nbsp;'AWS'
                <br />
                ];
              </code>
            </div>
          </div>

          <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>
            <p className="text-white/50">
              I specialize in building robust and scalable web applications using
              modern technologies. My expertise spans both front-end and back-end
              development, allowing me to create seamless, end-to-end solutions.
            </p>
            <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
              <img
                  src={project1}
                  alt="Project 1"
                  className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="border border-white/20 rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">03. Skills</h3>
            <p className="text-white/50 mb-4">
              I'm proficient in a wide range of technologies and constantly
              expanding my skill set to stay at the forefront of web development.
            </p>
            <div className="grid grid-cols-1 text-center gap-4">
              <div className="border border-white/20 rounded-lg p-3">
                <h4 className="text-emerald-300 font-medium mb-2">Frontend</h4>
                <ul className="text-white/50 space-y-1 text-sm">
                  <li>React/Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>Framer Motion</li>
                </ul>
              </div>
              <div className="border border-white/20 rounded-lg p-3">
                <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>
                <ul className="text-white/50 space-y-1 text-sm">
                  <li>Node.js</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>AWS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {/* Approach Section */}
          <div className="border border-white/20 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">
                  Front-end
                </label>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                      className="bg-emerald-300 h-2 rounded-full"
                      style={{ width: "90%" }}
                  ></div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Back-end</label>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                      className="bg-emerald-300 h-2 rounded-full"
                      style={{ width: "95%" }}
                  ></div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">DevOps</label>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                      className="bg-emerald-300 h-2 rounded-full"
                      style={{ width: "75%" }}
                  ></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-bold mt-4 mb-2">04. Approach</h3>
            <p className="text-white/50">
              I believe in writing clean, maintainable code and following best
              practices. My approach involves understanding client needs, planning
              thoroughly, and delivering high-quality solutions on time.
            </p>
          </div>

          {/* LeetCode Section */}
          <motion.div
              className="border border-white/20 rounded-lg p-6 flex flex-col justify-between"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-2">05. LeetCode</h3>
              <p className="text-white/50 mb-4">
                I actively solve problems on LeetCode to sharpen my problem-solving
                skills and improve algorithmic thinking. Here’s a snapshot of my live
                coding stats:
              </p>
              <div className="flex justify-center">
                <a
                    href="https://leetcode.com/shivamraj_04/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                  <motion.img
                      src="https://leetcard.jacoblin.cool/shivamraj_04?theme=dark&font=Karma&ext=heatmap"
                      alt="LeetCode Stats"
                      className="rounded-lg shadow-lg border border-white/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                  />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
  );
};
