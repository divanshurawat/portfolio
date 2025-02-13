import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'NextJs'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'GraphQL'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git', 'Docker', 'AWS',  'VS Code'], 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="flex items-center">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 dark:bg-indigo-400 h-2.5 rounded-full"
                        style={{ width: `${Math.random() * 30 + 70}%` }}
                      ></div>
                    </div>
                    <span className="ml-4 text-sm text-gray-600 dark:text-gray-300 min-w-[100px]">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;