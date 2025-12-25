import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import { SKILLS, EXPERIENCE_POINTS, AI_PRACTICE_POINTS, PROFILE_IMAGE } from '../constants';
import { Briefcase, BrainCircuit } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen pt-10 pb-20 px-6 lg:px-12">
      <div className="max-w-6xl mx-auto space-y-20">

        {/* Intro with Photo */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">

            {/* Photo - Left Side */}
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border border-luxury-surface/30 shadow-xl">
                <img
                  src={PROFILE_IMAGE}
                  alt="Vishal Mankar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="space-y-8 flex-1">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-luxury-text">About Me</h1>
              <div className="space-y-6 text-lg text-luxury-muted font-light leading-relaxed">
                <p>
                  I am a Data Analyst focused on transforming structured datasets into strategic assets through rigorous analysis and automation. My expertise spans data validation, exploratory data analysis (EDA), and the development of automated reporting systems to support operational decision-making.
                </p>
                <p>
                  I specialize in leveraging SQL and Python for deep-dive analysis and designing interactive Power BI dashboards that deliver clarity. I actively integrate AI-assisted workflows to enhance analytical accuracy and efficiency, constantly evolving my skillset to solve complex business problems. I treat AI as a supporting tool to improve efficiency, accuracy, and focus in analytical and problem-solving work.
                </p>
              </div>
            </div>

          </div>
        </ScrollReveal>

        {/* Experience */}
        <ScrollReveal delay={0.1}>
          <div className="space-y-8 max-w-4xl mx-auto md:mx-0 md:ml-auto md:w-[calc(100%-19rem)]">
            <h2 className="text-2xl font-heading font-medium text-luxury-text border-b border-luxury-surface pb-4 flex items-center gap-3">
              <Briefcase size={24} className="text-luxury-gold" />
              Practical Experience
            </h2>
            <ul className="space-y-4">
              {EXPERIENCE_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-luxury-muted text-lg font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2.5 flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Skills */}
        <ScrollReveal delay={0.2}>
          <div className="space-y-8 max-w-4xl mx-auto md:mx-0 md:ml-auto md:w-[calc(100%-19rem)]">
            <h2 className="text-2xl font-heading font-medium text-luxury-text border-b border-luxury-surface pb-4">Skills & Tools</h2>

            <div className="flex flex-wrap gap-3">
              {SKILLS.map(skill => (
                <span
                  key={skill.name}
                  className="px-5 py-2 bg-luxury-surface text-luxury-text text-sm rounded-sm border border-white/5 hover:border-luxury-gold/50 transition-colors cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* AI in Practice */}
        <ScrollReveal delay={0.25}>
          <div className="space-y-8 max-w-4xl mx-auto md:mx-0 md:ml-auto md:w-[calc(100%-19rem)]">
            <h2 className="text-2xl font-heading font-medium text-luxury-text border-b border-luxury-surface pb-4 flex items-center gap-3">
              <BrainCircuit size={24} className="text-luxury-gold" />
              AI in Practice
            </h2>
            <ul className="space-y-4">
              {AI_PRACTICE_POINTS.map((point, index) => (
                <li key={index} className="flex items-start gap-3 text-luxury-muted text-lg font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-luxury-gold mt-2.5 flex-shrink-0"></span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal delay={0.3}>
          <div className="space-y-8 max-w-4xl mx-auto md:mx-0 md:ml-auto md:w-[calc(100%-19rem)]">
            <h2 className="text-2xl font-heading font-medium text-luxury-text border-b border-luxury-surface pb-4">Approach</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { title: "Data Integrity", desc: "Rigorous validation ensuring reliable analysis." },
                { title: "Strategic Reporting", desc: "Dashboards designed for immediate insight." },
                { title: "Actionable Intelligence", desc: "Empowering teams with data-backed direction." }
              ].map((value) => (
                <li key={value.title} className="space-y-2">
                  <h3 className="text-luxury-gold font-heading text-lg">{value.title}</h3>
                  <p className="text-sm text-luxury-muted">{value.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </ScrollReveal>

      </div>
    </div>
  );
};

export default About;