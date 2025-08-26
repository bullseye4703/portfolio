import React from "react";
import profilepic from "../assets/images/profilepic.png";
import { FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
      <div className="relative overflow-clip min-h-screen text-white bg-[linear-gradient(to_bottom,#000,#071E18_35%,#208A65_67%,#35FB8E_85%)]">

        <div
            className="absolute bg-black w-[2400px] h-[1000px] rounded-[50%] left-1/2 -translate-x-1/2
                      bg-[radial-gradient(closest-side,#000_85%,#249974)] top-[450px]
                      border-[1px] border-[#8CD6DE]/30"
        />

        <div className="container relative mx-auto px-4 pt-12 pb-24">
          <div className="flex flex-col items-center justify-center text-center z-10">
            <div className="relative mb-8 mt-16">
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/20 to-transparent rounded-full blur-3xl"></div>
              <img
                  src={profilepic}
                  alt="Shivam Raj"
                  className="w-[250px] relative z-10"
              />
            </div>

            <div className="max-w-2xl">
              <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
                Hi, I am <br /> Shivam <span className="text-emerald-400">Raj</span>
              </h1>
              <p className="text-xl text-white/80 max-w-lg mx-auto leading-relaxed mb-6">
                I am a fullstack developer focusing on creating websites that
                provide users with the best experience and impeccable servers.
              </p>

              <div className="flex gap-4 justify-center">
                {/* Download CV button */}
                <a
                    href="/shivam_Resume.pdf"
                    download
                    className="relative z-50 px-6 py-3 bg-emerald-500 rounded-full font-medium text-black hover:bg-emerald-900 transition-colors shadow-md"
                >
                  Download CV
                </a>

                <a
                    href="https://github.com/bullseye4703"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative z-50 flex items-center gap-2 px-6 py-3 border border-white/20 rounded-full font-medium hover:bg-white/10 transition-colors shadow-md"
                >
                  <FaGithub className="text-2xl" /> View GitHub
                </a>

              </div>
            </div>
          </div>

          <div
              className="absolute bottom-16 right-1/3 w-96 h-96 bg-emerald-500/10 rounded-full blur-xl animate-bounce-slow"
          />
        </div>
      </div>
  );
};
