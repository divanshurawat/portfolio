import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Uber-Clone',
    description: 'Tried to make a replica of Uber, with the frontend using React and the backend using Node.js and Express. Used MongoDB as the database. Implemented Socket.io for proper connection between the user and the captain, and WebSocket to ensure real-time updates.',
    image: 'https://th.bing.com/th/id/OIP.ecRzEb8dNX2V2HtMPwwDgwHaEV?rs=1&pid=ImgDetMain',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express','Socket.io', 'WebSocket'],
    githubLink: 'https://github.com/divanshurawat/Uber-clone',
    liveLink: 'https://example.com',
  },
  {
    title: 'DisCug- A discussion forum',
    description: 'Built a secure, real-time discussion platform with GitHub authentication to ensure user authenticity and prevent bot activity. Implemented advanced search functionality, reducing search time by 40% and enhancing user engagement.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRpc2N1c3Npb24lMjBmb3J1bXxlbnwwfHwwfHx8MA%3D%3D',
    technologies: ['NextJs', 'React', 'Prisma', 'Zod', 'Tailwind', 'ShadCN'],
    githubLink: 'https://github.com/divanshurawat/DisCug',
    liveLink: 'https://dis-cug.vercel.app/',
  },
  {
    title: 'NewsForYou',
    description: 'A news application that fetches news from the News API and displays it in a beautiful way. You can choose the category of news you want to see.',
    image: 'https://th.bing.com/th?id=OIF.Y%2ffp53YvPio%2bUJ8o28yAwA&w=303&h=180&c=7&r=0&o=5&dpr=1.4&pid=1.7',
    technologies: ['React', 'NewsAPI', 'Bootstarap'],
    githubLink: 'https://github.com/divanshurawat/News-For_You',
    liveLink: 'https://example.com',
  },
  {
    title: 'Blogs',
    description: 'Designed and developed an intuitive blog app UI using React. Integrated Redux for efficient state management and utilized Appwrite for authentication and CRUD operations, ensuring a seamless user experience.',
    image: 'https://th.bing.com/th/id/OIP.NPStrZmfEsUrHfR8BJralQHaE8?rs=1&pid=ImgDetMain',
    technologies: ['React', 'Redux', 'Appwrite', 'Bootstarap'],
    githubLink: 'https://github.com/divanshurawat/blogs',
    liveLink: 'https://blogs-xi-sooty.vercel.app/',
  },
  {
    title: 'ToDo List',
    description: 'Developed a sleek and responsive todo list application using React and Tailwind CSS. Implemented local storage to persist tasks, ensuring a seamless and efficient user experience.',
    image: 'https://th.bing.com/th/id/OIP.8PCS6H1RKT9375qLIriZRgHaE8?rs=1&pid=ImgDetMain',
    technologies: ['React', 'Tailwind', 'Local Storage'],
    githubLink: 'https://github.com/divanshurawat/To-Do',
    liveLink: 'https://to-do-three-neon.vercel.app/',
  },
  {
    title: 'See More',
    description: 'Click to see more projects.',
    image: 'https://th.bing.com/th/id/R.2bf01612f4055b1112bd2d0b100f9896?rik=ROsuA6mppBghvg&riu=http%3a%2f%2fbrokeringsolutions.com%2fwp-content%2fuploads%2f2016%2f12%2fsee-more-gallery-image.png&ehk=4CbaOnl0KUYG78tAR1pWndrz%2bWxPCgylwjM%2fXStR28U%3d&risl=&pid=ImgRaw&r=0',
    technologies: [],
    githubLink: 'https://github.com/divanshurawat',
    liveLink: 'https://github.com/divanshurawat',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <Github size={20} className="mr-2" />
                    Code
                  </a>
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;