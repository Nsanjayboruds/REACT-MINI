import React from 'react';
import { motion } from 'framer-motion';
import FlowingMenu from './FlowingMenu';

function Aboutme() {
  const demoItems = [
  {
    link: 'https://www.linkedin.com/in/nishant-borude-554293311/',
    text: 'LinkedIn',
    image: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
  },
  {
    link: 'https://github.com/Nsanjayboruds',
    text: 'GitHub',
    image: 'https://cdn-icons-png.flaticon.com/512/733/733553.png',
  },
  {
    link: '#',
    text: 'Twitter',
    image: 'https://cdn-icons-png.flaticon.com/512/733/733579.png',
  },
  {
    link: '#',
    text: 'Instagram',
    image: 'https://cdn-icons-png.flaticon.com/512/2111/2111463.png',
  }
];


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] px-6 py-12 text-white flex flex-col items-center gap-16">
      
      {/* About Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#1e293b] shadow-lg rounded-3xl p-10 max-w-4xl w-full"
      >
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Profile Image */}
          <img
            src="https://avatars.githubusercontent.com/u/180739822?v=4"
            alt="Profile"
            className="w-40 h-40 rounded-full border-4 border-white object-cover"
          />

          {/* Details */}
          <div>
            <h2 className="text-3xl font-bold mb-2">Nishant Borude</h2>
            <p className="text-lg text-gray-300 mb-4">
              Full-Stack Developer • Open Source Contributor • Tech Enthusiast
            </p>

            <div className="space-y-2 text-gray-400">
              <p>🚀 Passionate about building innovative web applications and AI tools.</p>
              <p>💼 Skilled in React, Node.js, MongoDB, Firebase, and Python.</p>
              <p>🌍 Participating in global hackathons and building impactful projects.</p>
              <p>
                📬 Reach me at: <span className="text-white font-semibold">nishant@example.com</span>
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Flowing Menu */}
      <div className="w-full max-w-6xl h-[500px] relative z-0">
        <FlowingMenu  items={demoItems} />
      </div>
    </div>
  );
}

export default Aboutme;
