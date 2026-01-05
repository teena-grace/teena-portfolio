"use client";

import { GraduationCap } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Education = () => {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Education
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== education.length - 1 && (
                <div className="absolute left-6 top-20 bottom-0 w-0.5 bg-linear-to-b from-blue-600 to-purple-600 hidden md:block"></div>
              )}

              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 md:p-8 relative">
                {/* Icon */}
                <div className="absolute -left-6 top-8 w-12 h-12 bg-linear-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-2xl shadow-lg md:flex">
                  {edu.icon}
                </div>

                <div className="md:ml-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                        {edu.institution}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                    </div>
                    <div className="mt-2 md:mt-0">
                      <span className="inline-block px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                        {edu.duration}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                      <p className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                        {edu.degree}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 ml-8">
                      <div className="px-4 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold">
                        {edu.cgpa}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;