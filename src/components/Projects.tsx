import React from 'react';
import { ExternalLink, Github, } from 'lucide-react';
import LandingPageLearnQuest from "../assets/LeanQuest/LandingPage.png"
import LandingPageLetsChat1 from "../assets/LetsChat/LetsChat1.png"
import LandingPageMasaiPe from "../assets/MasaiPe/AdminDash.png"
import LandingPageTravelBuddy from "../assets/TravelBuddy/LandingPage.png"

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Lets Chat',
      description: ' 💬 Lets Chat is a real-time chat application built for seamless one-on-one communication. It features secure email/password authentication, a clean user interface, support for emojis and images, dark mode, and a unique view-once message option for added privacy. Designed with simplicity and clarity in mind, it\'s ideal for direct conversations',
      image: LandingPageLetsChat1,
      technologies: ['React', 'Tailwind CSS','Socket.IO', 'MongoDB', 'Node.js', ' Express.js', ] ,
      githubUrl: 'https://github.com/yashmolawade/LetsChat',
      liveUrl: 'https://letschat-1-mnk2.onrender.com/',
      featured: true
    },
    {
      id: 2,
      title: 'Travel Buddy',
      description: '🌍 Travel Budget Planning Tool An intuitive and user-friendly web application designed to help travelers track expenses, set budget goals, and analyze spending patterns during their trips. Built with responsiveness and collaboration in mind, this tool empowers users to make smarter financial decisions while exploring the world stress-free.',
      image: LandingPageTravelBuddy,
      technologies: ['React', 'Redux', 'JavaScript','Tailwind CSS', 'Firebase'],
      githubUrl: 'https://github.com/yashmolawade/TravelBudgetPlanningTool',
      liveUrl: 'https://travel-budget-planning-tool-five.vercel.app/',
      featured: true
    },
    {
      id: 3,
      title: 'MasaiPe',
      description: '💰 Payout Automation System for EdTech Mentors A secure, flexible, and auditable platform to automate payouts for mentors, instructors, and evaluators in EdTech organizations. Streamlines session tracking, payout calculations, tax handling, receipt generation, and communication — all in one place.',
      image: LandingPageMasaiPe,
      technologies: ['React', 'JavaScript','Tailwind CSS','Redux', 'Firebase'],
      githubUrl: 'https://github.com/yashmolawade/masaipe',
      liveUrl: 'https://masaipe.vercel.app/',
      featured: true
    },
    {
      id: 4,
      title: 'Learn Quest',
      description: '🧠 QuizMaster is a gamified quiz web app using HTML, CSS, and JS. Users take trivia quizzes, earn points, unlock badges (Bronze, Silver, Gold), and receive trophies for top scores. Firebase handles authentication and saves achievements. Features live feedback and animations.',
      image: LandingPageLearnQuest,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/yashmolawade/LearnQuest',
      liveUrl: 'https://learn-questt.netlify.app/',
      featured: true
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);

  const ProjectCard: React.FC<{ project: typeof projects[0] }> = ({ project }) => (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-200/20 dark:border-gray-700/20">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-100 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-md hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
          >
            <Github size={16} />
            <span>Code</span>
          </a>
          
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Other Projects */}
        {/* {otherProjects.length > 0 && (
          <>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Other Projects</h3>
              <p className="text-gray-600 dark:text-gray-300">Additional projects worth mentioning</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {otherProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )} */}

        <div className="text-center mt-12">
          <a
            href="https://github.com/yashmolawade"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
          >
            <Github size={18} />
            <span>View All Projects on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;