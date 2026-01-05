"use client";

import { Award, Trophy, Users, Star } from 'lucide-react';
import { portfolioData } from '@/data/portfolioData';

const Leadership = () => {
  const { leadership } = portfolioData;

  const icons = [
    <Users className="w-6 h-6" />,
    <Trophy className="w-6 h-6" />,
    <Star className="w-6 h-6" />,
    <Award className="w-6 h-6" />
  ];

  return (
    <section id="leadership" className="py-20 bg-gray-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Leadership & Achievements
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 hover:scale-105"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="shrink-0 p-3 bg-linear-to-br from-blue-500 to-purple-500 rounded-xl text-white shadow-lg">
                  {icons[index % icons.length]}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-3">
                    {item.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;