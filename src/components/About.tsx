"use client";

import { Brain, Code, Palette } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const AboutWithEffects = () => {
  const { about } = portfolioData;

  const interests = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Artificial Intelligence",
      description: "Machine Learning & NLP"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      description: "Full Stack Development"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "User-Centered Design"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Professional Photo with Effects */}
          <div className="relative group">
            {/* Glowing Background */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            {/* Main Photo Container */}
            <div className="relative rounded-3xl overflow-hidden border-4 border-white dark:border-slate-800 shadow-2xl">
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              {/* Profile Photo */}
              <div className="aspect-3/4 relative">
                <img 
                  src="/profile.png" 
                  alt="Teena Jadhao"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full bg-linear-to-br from-blue-400 to-purple-600 flex items-center justify-center"><span class="text-9xl">👩‍💻</span></div>';
                    }
                  }}
                />
              </div>

              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-6 z-20">
                <h3 className="text-2xl font-bold text-white mb-1">Teena Jadhao</h3>
                <p className="text-blue-300">AI Engineering Student</p>
                <div className="mt-3 flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/30 text-white text-sm rounded-full backdrop-blur-sm">
                    CGPA 9.8
                  </span>
                  <span className="px-3 py-1 bg-purple-500/30 text-white text-sm rounded-full backdrop-blur-sm">
                    3+ Internships
                  </span>
                </div>
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-4 right-4 w-16 h-16 border-t-4 border-r-4 border-white/50 rounded-tr-2xl z-20"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 border-b-4 border-l-4 border-white/50 rounded-bl-2xl z-20"></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {about.content}
            </p>

            {/* Interests Grid */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-linear-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-3">
                    {interest.icon}
                  </div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {interest.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-blue-50 dark:bg-slate-800">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">9.8</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">CGPA</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-purple-50 dark:bg-slate-800">
                <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">3+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Internships</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-pink-50 dark:bg-slate-800">
                <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">5+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWithEffects;
