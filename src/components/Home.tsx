import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-indigo-600 dark:text-indigo-400">Divanshu Rawat</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-400 mb-8">
            MERN Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mb-8">
            I build exceptional digital experiences that make a difference.
            Specialized in creating modern web applications using  React, NextJs, NodeJs, ExpressJs, MongoDB, and more.
          </p>
          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/divanshurawat"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/divanshu-rawat-987995229/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:divanshurawat64@gmail.com"
              className="p-2 text-gray-600 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
          <a href='https://drive.google.com/file/d/1Epielcorrkt_bEl6htobM2VEHDDynZGT/view?usp=sharing'  className="bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors">
            See Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;