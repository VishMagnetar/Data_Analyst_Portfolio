import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { EDUCATION, CERTIFICATIONS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Education: React.FC = () => {
  const [openDetails, setOpenDetails] = React.useState<string | null>(null);

  const toggleDetails = (id: string) => {
    setOpenDetails(openDetails === id ? null : id);
  };

  return (
    <div className="min-h-screen pt-10 pb-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto space-y-20">

        <ScrollReveal>
          <h1 className="text-4xl lg:text-5xl font-heading font-bold text-luxury-text mb-4">Credentials</h1>
          <p className="text-luxury-muted">Academic background and professional certifications.</p>
        </ScrollReveal>

        {/* Formal Education */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-medium text-luxury-text border-b border-luxury-surface pb-4">Education</h2>
            <div className="space-y-0">
              {EDUCATION.map((edu, index) => (
                <div key={edu.id} className={`flex flex-col py-8 ${index !== EDUCATION.length - 1 ? 'border-b border-luxury-surface/50' : ''}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <h3 className="text-xl font-heading text-luxury-text">{edu.degree}</h3>
                      <p className="text-luxury-blue mt-1">{edu.institution}</p>

                      {edu.details && (
                        <Button
                          onClick={() => toggleDetails(edu.id)}
                          variant="secondary"
                          className="!text-xs !py-1 !px-3 mt-3 w-fit"
                        >
                          {openDetails === edu.id ? "Close Details" : "In Detail"}
                        </Button>
                      )}
                    </div>
                    <span className="text-luxury-muted font-mono text-sm mt-2 md:mt-0">{edu.year}</span>
                  </div>

                  {/* Expanded Details */}
                  {openDetails === edu.id && edu.details && (
                    <div className="mt-6 pl-4 border-l border-luxury-gold/30 space-y-3 animate-fade-in bg-luxury-surface/30 p-4 rounded-r-sm">
                      <h4 className="text-sm font-heading font-semibold text-luxury-text text-sm uppercase tracking-wider mb-3">Mark Sheet Details</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8">
                        {edu.details.map((detail, i) => (
                          <div key={i} className={`flex justify-between items-center text-sm ${detail.subject === 'Total' ? 'col-span-1 md:col-span-2 border-t border-white/10 pt-2 mt-2 font-bold text-luxury-gold' : 'text-luxury-muted'}`}>
                            <span>{detail.subject}</span>
                            <span className="font-mono">{detail.score}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Certifications */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-8">
            <h2 className="text-2xl font-heading font-medium text-luxury-text border-b border-luxury-surface pb-4">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert) => (
                <div key={cert.id} className="bg-luxury-surface p-6 rounded-sm border border-white/5 hover:border-luxury-gold/30 transition-all duration-300">
                  <h3 className="text-lg font-heading text-luxury-text mb-2">{cert.name}</h3>
                  <div className="flex justify-between items-end text-sm">
                    <div className="flex flex-col gap-2">
                      <span className="text-luxury-blue">{cert.issuer}</span>
                      {cert.link && (
                        <Button
                          href={cert.link}
                          target="_blank"
                          variant="secondary"
                          className="!text-xs !py-1 !px-3 gap-2 w-fit mt-1"
                        >
                          <span>View Certificate</span>
                          <ArrowUpRight size={12} />
                        </Button>
                      )}
                    </div>
                    <span className="text-luxury-muted font-mono">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default Education;