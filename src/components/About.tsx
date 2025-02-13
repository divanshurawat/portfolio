import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              I'm a passionate MERN Stack Developer with a strong foundation in web development
              and a keen eye for creating user-friendly applications. With expertise in
              MongoDB, Express.js, React.js, and Node.js, I bring ideas to life through code.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My journey in web development started with a curiosity for creating interactive
              user experiences. Today, I focus on building scalable applications that solve
              real-world problems.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Education</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  B.Tech in Information Technology<br />
                  Ajay Kumar Garg Engineering College , Ghaziabad (2021-25)
                </p>
              </div>
              {/* <div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">Experience</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  3+ Years of Web Development<br />
                  1+ Years MERN Stack
                </p>
              </div> */}
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
              alt="Developer workspace"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;