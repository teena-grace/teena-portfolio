"use client";

import { Brain, Code, Palette } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const About = () => {
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
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-sky-600 mx-auto rounded-full shadow-lg glow-blue"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image/Illustration Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <span className="text-6xl">👩‍💻</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">Teena Jadhao</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">AI Engineering Student</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content with Animations */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed animate-slide-up">
              {about.content}
            </p>

            {/* Interests Grid with 3D Cards */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6">
              {interests.map((interest, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-110 card-3d animate-slide-up backdrop-blur-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-blue-600 dark:text-blue-400 mb-3 animate-float">
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

            {/* Stats with 3D Animation */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/40 dark:to-blue-800/40 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 card-3d">
                <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 animate-pulse">9.8</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-semibold">CGPA</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-cyan-100 to-cyan-200 dark:from-cyan-900/40 dark:to-cyan-800/40 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 card-3d">
                <p className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 animate-pulse">3+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-semibold">Internships</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-gradient-to-br from-sky-100 to-sky-200 dark:from-sky-900/40 dark:to-sky-800/40 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 card-3d">
                <p className="text-3xl font-bold text-sky-600 dark:text-sky-400 animate-pulse">5+</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1 font-semibold">Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;