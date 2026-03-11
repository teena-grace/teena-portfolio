"use client";

import { Download, Briefcase, Mail, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';
import { useEffect, useState } from 'react';

const Hero3DAnimated = () => {
  const { personal } = portfolioData;
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 hero-surface-gradient animate-gradient"></div>
      
      {/* Floating 3D Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Cubes */}
        <div 
          className="absolute top-20 left-10 w-32 h-32 hero-shape-gradient-1 rounded-3xl animate-float blur-sm"
          style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-40 h-40 hero-shape-gradient-2 rounded-full animate-float-reverse blur-md"
          style={{ transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)` }}
        ></div>
        <div 
          className="absolute bottom-32 left-1/4 w-24 h-24 hero-shape-gradient-3 rounded-2xl animate-spin-slow"
          style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
        ></div>
        <div 
          className="absolute bottom-20 right-1/3 w-36 h-36 hero-shape-gradient-4 rounded-full animate-float blur-lg"
          style={{ transform: `translate(${-mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px)` }}
        ></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse-glow"></div>
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse-glow delay-100"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-sky-400 rounded-full animate-pulse-glow delay-200"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content with 3D Animation */}
        <div className="space-y-8 perspective-container">
          {/* Greeting Badge with 3D Effect */}
          <div className="inline-block animate-slide-up">
            <span className="px-6 py-3 hero-badge-gradient text-blue-700 dark:text-blue-300 rounded-full text-sm font-semibold shadow-lg glass-blue flex items-center gap-2 hover:scale-110 transition-transform duration-300">
              <Sparkles size={16} className="animate-pulse" />
              Welcome to my portfolio
            </span>
          </div>

          {/* Name with 3D Text Effect */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold animate-scale-in">
            <span className="hero-text-gradient bg-clip-text text-transparent drop-shadow-lg animate-rotate-3d inline-block">
              {personal.name}
            </span>
          </h1>

          {/* Tagline with Slide Animation */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 font-semibold max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {personal.tagline}
          </p>

          {/* Intro with Glass Effect */}
          <div className="max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed p-6 rounded-2xl glass-blue shadow-xl">
              {personal.intro}
            </p>
          </div>

          {/* Contact Info with 3D Cards */}
          <div className="flex flex-wrap justify-center gap-4 text-sm animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 card-3d">
              <MapPin size={16} className="text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">{personal.location}</span>
            </div>
            <a 
              href={`mailto:${personal.email}`}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 card-3d"
            >
              <Mail size={16} className="text-blue-600" />
              <span className="text-gray-700 dark:text-gray-300">{personal.email}</span>
            </a>
          </div>

          {/* CTA Buttons with 3D Effect */}
          <div className="flex flex-wrap justify-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center gap-2 px-8 py-4 hero-button-gradient text-white rounded-full font-semibold shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 hero-button-gradient-hover opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Download size={20} className="relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white/90 dark:bg-slate-800/90 text-gray-700 dark:text-gray-200 rounded-full font-semibold border-2 border-blue-300 dark:border-blue-700 shadow-lg hover:shadow-xl hover:scale-110 hover:border-blue-500 transition-all duration-300 backdrop-blur-sm"
            >
              <Briefcase size={20} />
              <span>View Projects</span>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 glass-blue text-blue-700 dark:text-blue-300 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator with 3D Animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-blue-400 dark:border-blue-600 rounded-full flex justify-center shadow-lg glow-blue">
            <div className="w-1 h-3 bg-blue-500 dark:bg-blue-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero3DAnimated;
