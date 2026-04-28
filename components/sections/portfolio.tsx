'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { GradientText } from '../gradient-text';

const projects = [
  {
    id: 1,
    title: 'Vercel',
    category: 'Web',
    service: 'web-development',
    image: '/portfolio-vercel.jpg',
    tech: ['Next.js', 'React', 'TypeScript'],
    link: 'https://vercel.com',
    description: 'The platform for frontend developers with speed and reliability.',
  },
  {
    id: 2,
    title: 'Figma',
    category: 'E-commerce',
    service: 'saas-development',
    image: '/portfolio-figma.jpg',
    tech: ['WebGL', 'TypeScript', 'CRDT'],
    link: 'https://figma.com',
    description: 'Collaborative design tool running entirely in the browser.',
  },
  {
    id: 3,
    title: 'Linear',
    category: 'Web',
    service: 'web-development',
    image: '/portfolio-linear.jpg',
    tech: ['React', 'GraphQL', 'PostgreSQL'],
    link: 'https://linear.app',
    description: 'Streamlined issue tracking for modern software teams.',
  },
  {
    id: 4,
    title: 'Secure Elections',
    category: 'E-commerce',
    service: 'saas-development',
    image: '/portfolio-secure-elections.jpg',
    tech: ['Java', 'Swing', 'Oracle SQL'],
    link: '/secure-elections-portfolio.pdf',
    description: 'A secure voting system with one-vote-per-election integrity.',
    tagline: 'One person. One vote. One source of truth.',
    categoryTag: 'Civic Tech',
    isPdfProject: true,
  },
  {
    id: 5,
    title: 'Dribbble',
    category: 'Design',
    service: 'graphic-design',
    image: '/portfolio-dribbble.jpg',
    tech: ['Brand Design', 'UI/UX', 'Illustration'],
    link: 'https://dribbble.com',
    description: 'Community for designers to share world-class graphic design.',
  },
  {
    id: 6,
    title: 'Buffer',
    category: 'Marketing',
    service: 'social-media',
    image: '/portfolio-buffer.jpg',
    tech: ['Scheduling', 'Analytics', 'Engagement'],
    link: 'https://buffer.com',
    description: 'Social media management platform for scheduling and analytics.',
  },
];

const categories = ['All', 'Web', 'Design', 'E-commerce', 'Marketing'];

type Project = typeof projects[0];

export function PortfolioSection() {
  const searchParams = useSearchParams();
  const serviceFilter = searchParams.get('service');
  
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    if (serviceFilter) {
      // Map service to category
      const serviceToCategory: Record<string, string> = {
        'web-development': 'Web',
        'graphic-design': 'Design',
        'saas-development': 'E-commerce',
        'social-media': 'Marketing',
      };
      const category = serviceToCategory[serviceFilter];
      if (category) {
        setActiveCategory(category);
      }
    }
  }, [serviceFilter]);

  const filteredProjects = 
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {serviceFilter && (
          <Link 
            href="/#services" 
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        )}
        
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <GradientText>Portfolio</GradientText>
          </h2>
          <p className="text-white text-lg max-w-2xl mx-auto animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
            Showcase of our latest projects and client success stories
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          {categories.map((cat, index) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 hover:scale-110 text-sm md:text-base ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 bg-[length:200%_100%] animate-gradient-shift text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] font-semibold'
                  : 'glass text-white hover:text-cyan-400 hover-glow-cyan font-semibold'
              }`}
              style={{ animation: `scale-in 0.6s ease-out ${0.3 + index * 0.1}s backwards` }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glass-accent rounded-lg overflow-hidden animate-scale-in hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-2 border-purple-500/30"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 md:h-64 overflow-hidden bg-gradient-to-br from-cyan-400/20 to-purple-500/20">
                {project.title === 'Secure Elections' ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white/50 text-sm">Project Preview</p>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.categoryTag && (
                  <div className="absolute top-4 left-4 bg-cyan-500/20 text-cyan-400 text-xs px-3 py-1 rounded-full border border-cyan-500/30">
                    {project.categoryTag}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                {project.tagline && (
                  <p className="text-cyan-400/80 text-xs italic mb-2">{project.tagline}</p>
                )}
                <p className="text-gray-400 text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full group-hover:bg-cyan-400/20 group-hover:text-cyan-400 transition-all duration-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-purple-400 transition-all duration-300 group-hover:translate-x-1"
                >
                  {project.isPdfProject ? 'View Project' : 'View Live'} <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

    </section>
  );
}
