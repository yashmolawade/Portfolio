import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Home, User, Code, Briefcase, Mail, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'projects', label: 'Projects', icon: Briefcase },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleResumeClick = () => {
    window.open('/Yash_Molawade_Resume.pdf', '_blank');
  };

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 w-full max-w-7xl px-4 ${
      isScrolled ? 'scale-95' : 'scale-100'
    }`}>
      {/* Floating Semicircular Navbar */}
      <div className="relative">
        {/* Main Navigation Container */}
        <div className={`
          bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg border border-gray-200/20 dark:border-gray-700/20
          rounded-full px-4 sm:px-6 py-3 shadow-2xl transition-all duration-300
          hover:shadow-3xl hover:scale-105 transform-gpu
          ${isScrolled ? 'shadow-xl' : 'shadow-2xl'}
        `}>
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent whitespace-nowrap">
                Yash Molawade
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 flex-1 justify-center">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      flex items-center space-x-2 px-3 py-2 rounded-full text-sm font-medium 
                      transition-all duration-300 transform hover:scale-105
                      ${activeSection === item.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                  >
                    <IconComponent size={16} />
                    <span className="xl:inline">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 
                         hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              {/* Resume Button */}
              <button
                onClick={handleResumeClick}
                className="hidden sm:flex items-center space-x-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 
                         text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                         font-medium shadow-lg hover:shadow-xl transform hover:scale-105 text-sm whitespace-nowrap"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>

              {/* Mobile menu button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 
                           transition-all duration-300 transform hover:scale-110"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 mt-2">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20 p-4 mx-4">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`
                        flex items-center space-x-3 w-full px-4 py-3 rounded-xl text-base font-medium 
                        transition-all duration-300 transform hover:scale-105
                        ${activeSection === item.id
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }
                      `}
                    >
                      <IconComponent size={20} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <div className="sm:hidden"><button
                  onClick={handleResumeClick}
                  className="flex items-center space-x-3 w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 
                           text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 
                           font-medium shadow-lg transform hover:scale-105"
                >
                  <Download size={20} />
                  <span>Resume</span>
                </button>
                </div></div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;