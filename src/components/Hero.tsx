"use client";

import { Download, Briefcase, Mail, MapPin, Linkedin } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Hero = () => {
  const { personal } = portfolioData;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900/20 dark:to-slate-900 animate-gradient"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div className="space-y-8">
          {/* Greeting */}
          <div className="inline-block">
            <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Name */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
            <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {personal.name}
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 font-medium max-w-3xl mx-auto">
            {personal.tagline}
          </p>

          {/* Intro */}
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {personal.intro}
          </p>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-blue-600" />
              <span>{personal.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} className="text-blue-600" />
              <a href={`mailto:${personal.email}`} className="hover:text-blue-600 transition-colors">
                {personal.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin size={16} className="text-blue-600" />
              <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Download size={20} />
              Download Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold border-2 border-gray-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Briefcase size={20} />
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 rounded-full font-semibold border-2 border-gray-300 dark:border-slate-700 hover:border-purple-600 dark:hover:border-purple-600 hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <Mail size={20} />
              Contact Me
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;