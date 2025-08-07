import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [currentPage, setCurrentPage] = useState(0);

  const skillsData = {
    frontend: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        category: "Frontend",
        color: "from-orange-500 to-red-500",
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        category: "Frontend",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        category: "Frontend",
        color: "from-yellow-500 to-orange-500",
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        category: "Frontend",
        color: "from-blue-600 to-blue-800",
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        category: "Frontend",
        color: "from-cyan-500 to-blue-500",
      },
      {
        name: "Tailwind CSS",
        icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        category: "Frontend",
        color: "from-teal-500 to-cyan-500",
      },
    ],

    backend: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        category: "Backend",
        color: "from-green-600 to-green-800",
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        category: "Backend",
        color: "from-gray-600 to-gray-800",
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        category: "Backend",
        color: "from-green-500 to-green-700",
      },
      {
        name: "Redis",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
        category: "Backend",
        color: "from-red-500 to-red-700",
      },
    ],
    tools: [
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        category: "Tools",
        color: "from-gray-800 to-black",
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        category: "Tools",
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        category: "Tools",
        color: "from-orange-500 to-red-500",
      },
    ],

    deployment: [
      {
        name: "Vercel",
        icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
        category: "Deployment",
        color: "from-black to-gray-800",
      },
      {
        name: "Netlify",
        icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
        category: "Deployment",
        color: "from-teal-500 to-cyan-500",
      },
      {
        name: "Render",
        icon: "render.png",
        category: "Deployment",
        color: "from-black to-gray-800",
      },
    ],
  };

  const tabs = [
    { id: "all", label: "All", count: Object.values(skillsData).flat().length },
    { id: "frontend", label: "Frontend", count: skillsData.frontend.length },
    { id: "backend", label: "Backend", count: skillsData.backend.length },
    { id: "tools", label: "Tools", count: skillsData.tools.length },
    {
      id: "deployment",
      label: "Deployment",
      count: skillsData.deployment.length,
    },
  ];

  const getFilteredSkills = () => {
    if (activeTab === "all") {
      return [
        ...skillsData.frontend,
        ...skillsData.backend,
        ...skillsData.tools,
        ...skillsData.deployment,
      ];
    }
    return skillsData[activeTab as keyof typeof skillsData] || [];
  };

  const filteredSkills = getFilteredSkills();

  // Responsive items per page
  const getItemsPerPage = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 8; // Desktop: 4x2
      if (window.innerWidth >= 768) return 6; // Tablet: 3x2
      return 6; // Mobile: 2x3
    }
    return 8;
  };

  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());

  React.useEffect(() => {
    const handleResize = () => {
      setItemsPerPage(getItemsPerPage());
      setCurrentPage(0); // Reset to first page on resize
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    setCurrentPage(0); // Reset to first page when tab changes
  }, [activeTab]);

  const totalPages = Math.ceil(filteredSkills.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const currentSkills = filteredSkills.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore the tools and technologies I use across Frontend, Backend,
            Deployment, and Tools.
          </p>
        </div>

        {/* Tabbed Interface */}
        <div className="mb-12">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl p-2 shadow-2xl border border-gray-200/20 dark:border-gray-700/20 max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`
                    px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105
                    flex items-center space-x-2 min-w-[120px] justify-center
                    ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                  `}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`
                    px-2 py-1 rounded-full text-xs font-bold
                    ${
                      activeTab === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300"
                    }
                  `}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {currentSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-200/20 dark:border-gray-700/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Skill Icon */}
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 group-hover:scale-110 transition-transform duration-300 p-3">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-full h-full object-contain filter dark:brightness-110"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    (e.currentTarget
                      .nextElementSibling as HTMLElement)!.style.display =
                      "block";
                  }}
                />
                <div className="hidden text-2xl font-bold text-gray-600 dark:text-gray-300">
                  {skill.name.charAt(0)}
                </div>
              </div>

              {/* Skill Name */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white text-center mb-3">
                {skill.name}
              </h3>

              {/* Category Badge */}
              <div className="text-center">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${skill.color} text-white`}
                >
                  {skill.category}
                </span>
              </div>

              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
              ></div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`
                p-3 rounded-full transition-all duration-300 transform hover:scale-110
                ${
                  currentPage === 0
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                }
              `}
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`
                    w-3 h-3 rounded-full transition-all duration-300
                    ${
                      i === currentPage
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }
                  `}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
              className={`
                p-3 rounded-full transition-all duration-300 transform hover:scale-110
                ${
                  currentPage === totalPages - 1
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl"
                }
              `}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        {/* Page Info */}
        {totalPages > 1 && (
          <div className="text-center mt-4">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Showing {startIndex + 1}-
              {Math.min(startIndex + itemsPerPage, filteredSkills.length)} of{" "}
              {filteredSkills.length} skills
            </p>
          </div>
        )}

        {/* GitHub Stats Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              GitHub Statistics
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              My coding journey in numbers
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20 transform hover:scale-105 transition-all duration-300">
              <img
                src="https://github-readme-stats.vercel.app/api?username=yashmolawade&show_icons=true&theme=default&hide_border=true"
                alt="GitHub Stats"
                className="w-full h-auto"
              />
            </div>
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-gray-200/20 dark:border-gray-700/20 transform hover:scale-105 transition-all duration-300">
              <img
                src="https://github-readme-streak-stats.herokuapp.com/?user=yashmolawade&theme=default&hide_border=true"
                alt="GitHub Streak"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="mt-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden max-w-6xl mx-auto border border-gray-200/20 dark:border-gray-700/20 transform hover:scale-105 transition-all duration-300">
            <img
              src="https://github-readme-activity-graph.vercel.app/graph?username=yashmolawade&theme=react-dark&hide_border=true&bg_color=ffffff&color=718096&line=3182ce&point=3182ce"
              alt="GitHub Activity Graph"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
