import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-luxury-bg border-t border-luxury-surface py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">

        <div className="text-center md:text-left">
          <h3 className="text-lg font-heading font-bold text-luxury-text">Vishal Mankar</h3>
          <p className="text-sm text-luxury-muted mt-1">© {new Date().getFullYear()} Made By Me For ME 💗</p>
        </div>

        <div className="flex space-x-6">
          <a href={SOCIAL_LINKS.email} className="text-luxury-muted hover:text-luxury-gold transition-colors duration-300">
            <Mail size={20} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-luxury-muted hover:text-luxury-gold transition-colors duration-300">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-luxury-muted hover:text-luxury-gold transition-colors duration-300">
            <Github size={20} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;