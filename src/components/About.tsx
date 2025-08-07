import React from 'react';
import { Code, Lightbulb, Target, Zap, Heart } from 'lucide-react';

const About: React.FC = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and scalable code following best practices',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Innovative solutions to complex technical challenges',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Target,
      title: 'Goal Oriented',
      description: 'Focused on delivering results that exceed expectations',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const stats = [
    { number: '∞', label: 'Learning Mindset', color: 'from-blue-600 to-cyan-600' },
    {  number: 'Hands-On', label: 'Learning by Building', color: 'from-purple-600 to-pink-600' },
    { number: '10+', label: 'Technologies', color: 'from-emerald-600 to-green-600' },
    { number: '100+', label: 'Hours Practiced', color: 'from-orange-600 to-red-600' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800 relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              Passionate Developer with a Focus on Practical Web Solutions  
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a full-stack developer passionate about creating clean, user-friendly 
                  web applications. I started my journey out of curiosity and built skills 
                  through hands-on experience with modern technologies like React and 
                  Node.js. I enjoy building practical solutions with a strong focus on performance and user experience.
                </p>
                <p>
                  Currently, I’m working on personal projects to sharpen my skills and 
                  explore new tools that improve development efficiency. I believe in writing 
                  maintainable code, continuous learning, and growing step by step to 
                  become a better developer every day.
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group bg-white/90 dark:bg-gray-700/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl hover:shadow-2xl border border-gray-200/20 dark:border-gray-600/20 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium text-sm sm:text-base">
                    {stat.label}
                  </p>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group bg-white/90 dark:bg-gray-700/90 backdrop-blur-lg rounded-2xl p-8 shadow-xl hover:shadow-2xl border border-gray-200/20 dark:border-gray-600/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                  style={{
                    animationDelay: `${index * 200}ms`
                  }}
                >
                  {/* Icon Container with 3D Effect */}
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>

                  <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  {/* Hover Glow Effect */}
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105">
            <Heart className="w-5 h-5" />
            <span className="font-medium">Let's build something amazing together!</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;