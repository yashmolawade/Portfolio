import React from "react";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  MapPin,
  Code,
  Sparkles,
} from "lucide-react";

import YashImg from "../assets/Yash.png";

const Hero: React.FC = () => {
  const handleResumeDownload = () => {
    const resumeUrl = "/Portfolio/Yash_Molawade_Resume.pdf";
    window.open(resumeUrl, "_blank", "noopener,noreferrer");
    const anchorElement = document.createElement("a");
    anchorElement.href = resumeUrl;
    anchorElement.download = "Yash_Molawade_Resume.pdf";
    document.body.appendChild(anchorElement);
    anchorElement.click();
    document.body.removeChild(anchorElement);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 pt-24 relative overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 xl:gap-20 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              {/* Floating Badge */}
              <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-gray-200/20 dark:border-gray-700/20 transform hover:scale-105 transition-all duration-300">
                <Sparkles className="w-4 h-4 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Stack Developer
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r inline-block mt-4 from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Yash Molawade
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-lg -z-10 animate-pulse"></div>
              </h1>

              <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Full Stack Developer
              </h2>

              <div className="flex items-center justify-center lg:justify-start space-x-2 text-gray-500 dark:text-gray-400">
                <MapPin size={18} />
                <span>India</span>
              </div>
            </div>

            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-relaxed">
              Passionate full-stack developer with expertise in modern web
              technologies, specializing in React and Node.js. Skilled in
              building scalable, high-performance applications with a focus on
              clean architecture and exceptional user experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={handleResumeDownload}
                className="group flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-medium shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download Resume</span>
              </button>
              <a
                href="#contact"
                className="flex items-center space-x-2 px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>
            </div>

            <div className="flex justify-center lg:justify-start space-x-6 pt-4">
              <a
                href="https://github.com/yashmolawade"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110"
              >
                <Github
                  size={24}
                  className="text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-silver transition-colors duration-300"
                />
              </a>

              <a
                href="https://www.linkedin.com/in/yashmolawade"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110"
              >
                <Linkedin
                  size={24}
                  className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition-colors duration-300"
                />
              </a>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=yashmolawade06@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Send Email"
                className="group p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-110"
              >
                <Mail
                  size={24}
                  className="text-gray-700 dark:text-gray-300 group-hover:text-red-500 transition-colors duration-300"
                />
              </a>
            </div>
          </div>

          {/* Profile Image with 3D Effect */}
          <div className="flex justify-center lg:justify-end lg:max-w-[18rem] xl:max-w-[30rem] w-full">
            <div className="relative group">
              {/* 3D Container */}
              <div className="relative transform-gpu transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                {/* Floating Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
                </div>

                {/* Main Image Container */}
                {/* <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-2 shadow-2xl"> */}
                <div className="relative w-60 h-60 sm:w-80 sm:h-80 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-r from-blue-400 to-purple-500 p-2 shadow-2xl">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                    {/* If image is not available <Code size={120} className="text-gray-400 dark:text-gray-500" />  */}
                    <img
                      src={YashImg}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 animate-bounce">
                  <Code className="text-white" size={24} />
                </div>

                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-xl shadow-xl flex items-center justify-center transform -rotate-12 animate-pulse">
                  <Sparkles className="text-white" size={20} />
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 to-purple-500/30 blur-3xl animate-pulse -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
