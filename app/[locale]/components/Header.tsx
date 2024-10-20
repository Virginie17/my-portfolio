'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import data from '../../../public/data.json';


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const iconMap: { [key: string]: IconDefinition } = {
    'fa-brands fa-linkedin': faLinkedin,
    'fa-brands fa-github': faGithub,
    'fa-regular fa-envelope': faEnvelope,
  };

  return (
    <header className={`fixed w-full z-10 transition-all duration-300 ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <nav className="hidden md:flex space-x-6">
          <Link href="#about" className="text-white hover:text-blue-400 transition-colors">À propos</Link>
          <Link href="#skills" className="text-white hover:text-blue-400 transition-colors">Compétences</Link>
          <Link href="#projects" className="text-white hover:text-blue-400 transition-colors">Projets</Link>
          <Link href="#contact" className="text-white hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
        
        <div className="flex items-center space-x-4">
          {data.links.map((link) => (
            <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon 
                icon={iconMap[link.icon as keyof typeof iconMap]} 
                className="text-white text-xl hover:text-blue-400 transition-colors" 
                aria-label={link.alt} 
              />
            </a>
          ))}
          <a href={data.email.url}>
            <FontAwesomeIcon 
              icon={iconMap[data.email.icon as keyof typeof iconMap]} 
              className="text-white text-xl hover:text-blue-400 transition-colors" 
              aria-label={data.email.alt} 
            />
          </a>
          <select className="bg-transparent border-none text-white">
            <option value="fr">FR</option>
            <option value="en">EN</option>
          </select>
        </div>
        
        <button 
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {isMenuOpen && (
        <nav className="md:hidden bg-gray-800 p-4">
          <Link href="#about" className="block py-2 text-white hover:text-blue-400 transition-colors">À propos</Link>
          <Link href="#skills" className="block py-2 text-white hover:text-blue-400 transition-colors">Compétences</Link>
          <Link href="#projects" className="block py-2 text-white hover:text-blue-400 transition-colors">Projets</Link>
          <Link href="#contact" className="block py-2 text-white hover:text-blue-400 transition-colors">Contact</Link>
        </nav>
      )}
    </header>
  );
}