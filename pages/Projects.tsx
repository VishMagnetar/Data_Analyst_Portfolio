import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { PROJECTS } from '../constants';
import { ArrowUpRight, FileText, Bot, Github } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <div className="min-h-screen pt-10 pb-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header */}
        <ScrollReveal>
          <div className="space-y-4 max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-heading font-bold text-luxury-text">Selected Projects</h1>
            <p className="text-lg text-luxury-muted font-light leading-relaxed">
              End-to-end analytics projects demonstrating data validation, automated processing, and strategic business intelligence.
            </p>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-16">
          {PROJECTS.map((project, index) => (
            <ScrollReveal key={project.id} delay={index * 0.1}>
              <div className="flex flex-col lg:flex-row gap-10 bg-luxury-surface border border-white/5 p-8 lg:p-12 rounded-sm hover:shadow-2xl hover:shadow-black/50 transition-all duration-500 group relative">

                {/* Hover Accent Line */}
                <div className="absolute top-0 left-0 w-1 h-full bg-luxury-gold transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>

                <div className="flex-1 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-heading font-semibold text-luxury-text group-hover:text-luxury-gold transition-colors">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map(tool => (
                        <span key={tool} className="text-xs font-mono text-luxury-gold bg-luxury-gold/10 px-2 py-1 rounded-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                    {project.aiDescription && (
                      <div className="flex items-start gap-2 text-xs text-luxury-muted/70 pt-1 font-mono">
                        <Bot size={12} className="mt-0.5 flex-shrink-0" />
                        <span>{project.aiDescription}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-widest text-luxury-muted font-bold mb-2 block">Problem</span>
                    <p className="text-luxury-text/90 leading-relaxed text-lg">
                      {project.problem}
                    </p>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    {project.link && (
                      <Button
                        href={project.link}
                        target="_blank"
                        variant="secondary"
                        className="!text-xs !py-2 !px-4 gap-2"
                      >
                        <span>View Project</span>
                        <ArrowUpRight size={14} />
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        href={project.github}
                        target="_blank"
                        variant="secondary"
                        className="!text-xs !py-2 !px-4 gap-2"
                      >
                        <span>GitHub</span>
                        <Github size={14} />
                      </Button>
                    )}
                    {project.documentation && (
                      <Button
                        href={project.documentation}
                        target="_blank"
                        variant="secondary"
                        className="!text-xs !py-2 !px-4 gap-2"
                      >
                        <span>View Documentation</span>
                        <FileText size={14} />
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex-1 space-y-8 lg:border-l lg:border-white/5 lg:pl-10">
                  {project.approach && (
                    <div>
                      <span className="text-xs uppercase tracking-widest text-luxury-blue font-bold mb-3 block">Approach</span>
                      <ul className="space-y-2">
                        {project.approach.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-luxury-muted text-sm">
                            <span className="w-1 h-1 rounded-full bg-luxury-blue mt-2 flex-shrink-0"></span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.outcome && (
                    <div>
                      <span className="text-xs uppercase tracking-widest text-green-500/80 font-bold mb-3 block">Outcome</span>
                      <ul className="space-y-2">
                        {project.outcome.map((step, i) => (
                          <li key={i} className="flex items-start gap-2 text-luxury-muted text-sm">
                            <span className="w-1 h-1 rounded-full bg-green-500/50 mt-2 flex-shrink-0"></span>
                            {step}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;