import React, { useState } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import { SOCIAL_LINKS, WEB3FORMS_ACCESS_KEY, RESUME_URL } from '../constants';
import { Mail, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle, Download } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
          from_name: "Portfolio Contact Form",
          botcheck: false // Honeypot field
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(result.message || "Something went wrong. Please check your access key or try again.");
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage("Unable to connect to the server. Please check your internet connection.");
    }
  };

  return (
    <div className="min-h-screen pt-10 pb-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          <ScrollReveal>
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-heading font-bold text-luxury-text">Get in Touch</h1>
              <p className="text-lg text-luxury-muted font-light leading-relaxed">
                Open to full-time opportunities and freelance collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>

              <div className="space-y-6 pt-8">
                <a href={SOCIAL_LINKS.email} className="flex items-center space-x-4 text-luxury-text hover:text-luxury-gold transition-colors group">
                  <div className="w-12 h-12 bg-luxury-surface rounded-sm flex items-center justify-center border border-white/5 group-hover:border-luxury-gold/50 transition-colors">
                    <Mail size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg font-medium">Email Me</span>
                </a>
                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-luxury-text hover:text-luxury-gold transition-colors group">
                  <div className="w-12 h-12 bg-luxury-surface rounded-sm flex items-center justify-center border border-white/5 group-hover:border-luxury-gold/50 transition-colors">
                    <Linkedin size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg font-medium">LinkedIn</span>
                </a>
                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 text-luxury-text hover:text-luxury-gold transition-colors group">
                  <div className="w-12 h-12 bg-luxury-surface rounded-sm flex items-center justify-center border border-white/5 group-hover:border-luxury-gold/50 transition-colors">
                    <Github size={20} strokeWidth={1.5} />
                  </div>
                  <span className="text-lg font-medium">GitHub</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-luxury-surface/50 p-8 rounded-sm border border-white/5 h-full flex flex-col justify-center">
              {status === 'success' ? (
                <div className="text-center space-y-4 py-8 animate-fade-in">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-luxury-text">Message Sent!</h3>
                  <p className="text-luxury-muted">Thanks for reaching out. I'll get back to you shortly.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm text-luxury-gold hover:text-white transition-colors underline underline-offset-4"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm uppercase tracking-wide text-luxury-muted font-medium">Name</label>
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-luxury-bg border border-luxury-surface text-luxury-text p-3 rounded-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all disabled:opacity-50"
                        placeholder="Vishal"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm uppercase tracking-wide text-luxury-muted font-medium">Email</label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-luxury-bg border border-luxury-surface text-luxury-text p-3 rounded-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all disabled:opacity-50"
                        placeholder="vishal@example.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm uppercase tracking-wide text-luxury-muted font-medium">Message</label>
                      <textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        disabled={status === 'submitting'}
                        className="w-full bg-luxury-bg border border-luxury-surface text-luxury-text p-3 rounded-sm focus:outline-none focus:border-luxury-gold focus:ring-1 focus:ring-luxury-gold transition-all disabled:opacity-50 resize-none"
                        placeholder="Your message here..."
                      />
                    </div>

                    {status === 'error' && (
                      <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-sm border border-red-400/20">
                        <AlertCircle size={16} />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <Button type="submit" variant="primary" className="w-full gap-2" disabled={status === 'submitting'}>
                      {status === 'submitting' ? (
                        <>
                          <span>Sending...</span>
                          <Loader2 size={16} className="animate-spin" />
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send size={16} />
                        </>
                      )}
                    </Button>
                  </form>

                  <div className="mt-8 pt-8 border-t border-white/5">
                    <Button
                      href={RESUME_URL}
                      target="_blank"
                      download="VishalMankar-Resume.pdf"
                      variant="secondary"
                      className="w-full gap-2"
                    >
                      <span>Download Resume</span>
                      <Download size={16} />
                    </Button>
                  </div>
                </>
              )}
            </div>
          </ScrollReveal>

        </div>
      </div>
    </div>
  );
};

export default Contact;