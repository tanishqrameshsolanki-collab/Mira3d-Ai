import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const [inquiryType, setInquiryType] = useState('General Inquiry');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    if (e.target.name === 'inquiryType') {
      setInquiryType(e.target.value);
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const type = params.get('inquiry');
    if (type) {
      setInquiryType(type);
    }
  }, [location]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          type: 'contact', 
          data: { ...formData, inquiryType } 
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' });
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="pt-32 pb-20 min-h-screen bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tighter text-foreground mb-6">Get in <span className="text-brand-primary">Touch</span></h1>
          <p className="text-xl text-brand-muted leading-relaxed font-medium">We'd love to hear from you. Let us know how we can assist.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="bg-card border border-border p-8 md:p-12 rounded-[40px]">
              {submitted ? (
                <div className="text-center py-20">
                  <div className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-brand-muted font-medium">We will get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm font-medium">{error}</div>}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-muted">First Name</label>
                      <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-secondary border border-border rounded-[16px] px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-muted">Last Name</label>
                      <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-secondary border border-border rounded-[16px] px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-muted">Business Email</label>
                      <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-secondary border border-border rounded-[16px] px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-brand-muted">Phone (Optional)</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-secondary border border-border rounded-[16px] px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-muted">Inquiry Type</label>
                    <select 
                      required 
                      name="inquiryType"
                      value={inquiryType}
                      onChange={handleChange}
                      className="w-full bg-secondary border border-border rounded-[16px] px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors appearance-none text-sm"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Product Demo">Product Demo</option>
                      <option value="Technical Support">Technical Support</option>
                      <option value="Partnership">Partnership</option>
                      <option value="Career">Career</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-brand-muted">Message</label>
                    <textarea required name="message" value={formData.message} onChange={handleChange} rows={4} className="w-full bg-secondary border border-border rounded-[16px] px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors resize-none text-sm" placeholder="How can we help you?"></textarea>
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-brand-primary text-black font-bold text-base rounded-[20px] px-4 py-4 hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:hover:bg-brand-primary shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-10">
            <div className="bg-card border border-border p-8 rounded-[40px]">
              <h3 className="text-2xl font-bold text-foreground mb-6 tracking-tight">Contact Information</h3>
              <ul className="space-y-6 text-sm font-medium text-brand-muted">
                <li className="flex items-start group">
                  <Phone className="w-5 h-5 mr-4 text-brand-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="tel:+15550123456" className="hover:text-foreground transition-colors">+1 (555) 012-3456</a>
                </li>
                <li className="flex items-start group">
                  <Mail className="w-5 h-5 mr-4 text-brand-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <a href="mailto:user@example.com" className="hover:text-foreground transition-colors">user@example.com</a>
                </li>
                <li className="flex items-start group">
                  <MapPin className="w-5 h-5 mr-4 text-brand-primary shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="leading-relaxed">123 Main St, Suite 403<br />Springfield, IL 62704<br />United States</span>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border p-4 rounded-[40px] overflow-hidden h-[300px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.5155346866104!2d72.8550193742543!3d19.172672548932418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b726eb43471b%3A0x66d16aba241571a7!2sSamisan%20Tech%20Pvt%20Ltd%20(Software%20Development%7C%203D%20Printing%7C%20Automation%7C%20Industry%204.0)!5e0!3m2!1sen!2sin!4v1742897762072!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, borderRadius: '24px' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
