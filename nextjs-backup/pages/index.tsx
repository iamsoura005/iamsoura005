import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

// Dynamic imports for better performance
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
const About = dynamic(() => import('@/components/About'));
const TechStack = dynamic(() => import('@/components/TechStack'));
const Projects = dynamic(() => import('@/components/Projects'));
const GitHubStats = dynamic(() => import('@/components/GitHubStats'), { ssr: false });
const Contact = dynamic(() => import('@/components/Contact'));
const Navigation = dynamic(() => import('@/components/Navigation'));
const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <>
      <Head>
        <title>Sourasanta Dutta - AI/ML Developer & Full Stack Engineer</title>
        <meta name="description" content="AI/ML Developer and Full Stack Engineer passionate about building intelligent solutions. Specialized in Python, Machine Learning, Deep Learning, and modern web technologies." />
        <meta name="keywords" content="AI, ML, Machine Learning, Full Stack Developer, Python, React, Next.js, TensorFlow, PyTorch, Sourasanta Dutta" />
        <meta name="author" content="Sourasanta Dutta" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sourasanta-portfolio.vercel.app/" />
        <meta property="og:title" content="Sourasanta Dutta - AI/ML Developer & Full Stack Engineer" />
        <meta property="og:description" content="AI/ML Developer and Full Stack Engineer passionate about building intelligent solutions." />
        <meta property="og:image" content="https://sourasanta-portfolio.vercel.app/og-image.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://sourasanta-portfolio.vercel.app/" />
        <meta property="twitter:title" content="Sourasanta Dutta - AI/ML Developer & Full Stack Engineer" />
        <meta property="twitter:description" content="AI/ML Developer and Full Stack Engineer passionate about building intelligent solutions." />
        <meta property="twitter:image" content="https://sourasanta-portfolio.vercel.app/og-image.jpg" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Theme */}
        <meta name="theme-color" content="#8b5cf6" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-200 text-white">
        <Navigation />
        
        <main className="relative">
          {/* Hero Section */}
          <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-cyber-grid opacity-20"></div>
            <Hero />
          </section>

          {/* About Section */}
          <section id="about" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20"></div>
            <About />
          </section>

          {/* Tech Stack Section */}
          <section id="skills" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-l from-pink-900/20 to-purple-900/20"></div>
            <TechStack />
          </section>

          {/* GitHub Stats Section */}
          <section id="stats" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-indigo-900/20"></div>
            <GitHubStats />
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-l from-green-900/20 to-teal-900/20"></div>
            <Projects />
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 px-4 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-900/20 to-red-900/20"></div>
            <Contact />
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}