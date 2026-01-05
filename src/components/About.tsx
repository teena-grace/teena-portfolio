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
          {/* Left Side - Image/Illustration Placeholder */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-linear-to-br from-blue-400 to-purple-600 p-1">
              <div className="w-full h-full rounded-2xl bg-white dark:bg-slate-800 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                    <span className="text-6xl">👩‍💻</span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">Teena Jadhao</p>
                  <p className="text-gray-600 dark:text-gray-400 mt-2">AI Engineering Student</p>
                </div>
              </div>
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

export default About;