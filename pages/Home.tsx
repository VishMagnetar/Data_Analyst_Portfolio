import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { PROJECTS, HIGHLIGHTS, PROFILE_IMAGE, RESUME_URL } from '../constants';
import { Download } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProjects = PROJECTS.filter(p => p.featured).slice(0, 3);

  return (
    <div className="flex flex-col gap-24 lg:gap-32 pb-20">

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center px-6 lg:px-12 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-luxury-surface/20 to-transparent">
        <div className="max-w-6xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-16">

          {/* Text Content - Left Side */}
          <ScrollReveal className="flex-1 space-y-6 text-center lg:text-left">
            <span className="text-luxury-gold font-medium tracking-widest text-sm uppercase font-heading">
              Data Analyst | AI-Assisted Analytics | Automation & Data Visualization
            </span>
            <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight group cursor-default">
              <span className="text-luxury-text transition-colors duration-300 group-hover:text-luxury-gold">Vishal</span>{' '}
              <span className="text-luxury-gold transition-colors duration-300 group-hover:text-luxury-text">Mankar</span>
            </h1>
            <p className="text-lg lg:text-xl text-luxury-muted font-light leading-relaxed max-w-3xl mx-auto lg:mx-0">
              I work with data to uncover patterns, automate repetitive analysis tasks, and generate actionable insights for better business decisions. I use AI-assisted tools alongside SQL, Python, Excel, and Power BI to speed up analysis, improve accuracy, and support data-driven decision making.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
              <Button to="/projects" variant="primary">View Projects</Button>
              <Button
                href={RESUME_URL}
                target="_blank"
                download="VishalMankar-Resume.pdf"
                variant="outline"
                className="gap-2"
              >
                <span>Download Resume</span>
                <Download size={18} strokeWidth={1.5} />
              </Button>
            </div>
          </ScrollReveal>

          {/* Profile Photo - Right Side */}
          <ScrollReveal delay={0.2} className="flex-shrink-0 mb-8 lg:mb-0">
            <div className="relative w-56 h-56 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-luxury-surface shadow-2xl bg-luxury-surface ring-1 ring-white/10">
              <img
                src={PROFILE_IMAGE}
                alt="Vishal Mankar"
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((item, index) => (
              <ScrollReveal key={item.label} delay={index * 0.1}>
                <div className="bg-luxury-surface p-8 rounded-sm hover:-translate-y-1 transition-transform duration-300 border border-white/5 group">
                  <item.icon className="w-8 h-8 text-luxury-gold mb-4 opacity-80 group-hover:opacity-100 transition-opacity" strokeWidth={1.5} />
                  <h3 className="text-3xl font-heading font-bold text-luxury-text">{item.value}</h3>
                  <p className="text-sm text-luxury-muted mt-1 uppercase tracking-wider">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className="px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-12">
          <ScrollReveal>
            <div className="flex justify-between items-end border-b border-luxury-surface pb-6">
              <h2 className="text-3xl lg:text-4xl font-heading font-medium text-luxury-text">Featured Analytics Projects</h2>
              <Button to="/projects" variant="outline" className="hidden md:inline-flex !px-6 !py-2 text-xs">All Projects</Button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <div className="group block h-full bg-luxury-surface border border-white/5 p-8 rounded-sm hover:border-luxury-gold/30 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-0.5 bg-luxury-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

                  <h3 className="text-xl font-heading font-semibold text-luxury-text mb-3 group-hover:text-luxury-gold transition-colors">{project.title}</h3>
                  <p className="text-luxury-muted text-sm leading-relaxed mb-6">{project.shortDesc}</p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tools.slice(0, 3).map(tool => (
                      <span key={tool} className="text-xs font-mono text-luxury-blue bg-luxury-blue/10 px-2 py-1 rounded-sm">
                        {tool}
                      </span>
                    ))}
                  </div>

                  <Button to={`/projects`} variant="secondary" className="w-full !text-xs !py-3 group-hover:bg-luxury-gold group-hover:text-luxury-bg">
                    View Details
                  </Button>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="md:hidden text-center">
            <Button to="/projects" variant="outline">All Projects</Button>
          </div>
        </div>
      </section>

      {/* Soft CTA */}
      <section className="px-6 lg:px-12 mb-20">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto text-center space-y-8 bg-luxury-surface/50 border border-white/5 py-20 rounded-sm">
            <h2 className="text-3xl lg:text-4xl font-heading text-luxury-text">Ready to transform your data?</h2>
            <Button to="/contact" variant="primary">Contact Me</Button>
          </div>
        </ScrollReveal>
      </section>

    </div>
  );
};

export default Home;