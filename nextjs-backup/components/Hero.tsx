import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo, aboutMe } from '@/lib/data';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'AI & ML Enthusiast',
    'Full Stack Developer', 
    'Problem Solver',
    'Open Source Contributor'
  ];

  useEffect(() => {
    const text = texts[currentIndex];
    let charIndex = 0;
    
    const typeInterval = setInterval(() => {
      if (charIndex <= text.length) {
        setDisplayText(text.slice(0, charIndex));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentIndex]);

  return (
    <div className="container mx-auto px-4 py-20 text-center relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        {/* Animated Header */}
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500 bg-clip-text text-transparent"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ⚡ Welcome to my Tech Portfolio
        </motion.h1>

        <motion.h2 
          className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          I'm {personalInfo.name}
        </motion.h2>

        {/* Typing Animation */}
        <div className="h-16 mb-8">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl text-blue-400 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.p>
        </div>

        {/* Visitor Badges */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <img 
            src="https://komarev.com/ghpvc/?username=iamsoura005&color=blueviolet&style=flat-square&label=Profile+Views" 
            alt="Profile views" 
            className="rounded"
          />
          <img 
            src="https://api.visitorbadge.io/api/visitors?path=https%3A%2F%2Fgithub.com%2Fiamsoura005%2Fiamsoura005&label=VISITORS&labelColor=%23000&countColor=%230A0209" 
            alt="Visitors"
            className="rounded"
          />
        </motion.div>

        {/* Bio */}
        <motion.p 
          className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          "{personalInfo.bio}"
        </motion.p>

        <motion.p 
          className="text-md md:text-lg text-gray-400 mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {personalInfo.tagline}
        </motion.p>

        {/* Fun Fact */}
        <motion.div 
          className="bg-gradient-to-r from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.6 }}
        >
          <p className="text-yellow-400 font-semibold text-lg">🔥 Fun fact:</p>
          <p className="text-gray-300 mt-2">{personalInfo.funFact}</p>
        </motion.div>

        {/* Quick Stats */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
        >
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-400">{aboutMe.totalCommits}</div>
            <div className="text-sm text-gray-400">Commits</div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-bold text-green-400">{aboutMe.repositories}</div>
            <div className="text-sm text-gray-400">Repositories</div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-bold text-purple-400">AI/ML</div>
            <div className="text-sm text-gray-400">Focus</div>
          </div>
          <div className="glass rounded-lg p-4">
            <div className="text-2xl font-bold text-yellow-400">{personalInfo.location}</div>
            <div className="text-sm text-gray-400">Location</div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.0 }}
        >
          <a 
            href="#projects" 
            className="inline-block bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            🚀 Explore My Work
          </a>
        </motion.div>
      </motion.div>

      {/* Floating Animation Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-purple-500 rounded-full opacity-70"
          animate={{ y: [0, -20, 0], rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-40 right-20 w-6 h-6 bg-blue-500 rounded-full opacity-70"
          animate={{ y: [0, 20, 0], rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-5 h-5 bg-pink-500 rounded-full opacity-70"
          animate={{ y: [0, -15, 0], rotate: 180 }}
          transition={{ duration: 5, repeat: Infinity }}
        />
      </div>
    </div>
  );
};

export default Hero;