import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useDemoModal } from '../context/DemoModalContext';
import { useState } from 'react';

export default function DemoModal() {
  const { isOpen, closeModal } = useDemoModal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'demo', data: formData })
      });

      if (!response.ok) {
        throw new Error('Failed to send request');
      }

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ firstName: '', lastName: '', email: '', company: '' });
        closeModal();
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg bg-card p-8 md:p-10 rounded-3xl border border-border"
          >
            <button
              onClick={closeModal}
              className="absolute top-6 right-6 text-brand-muted hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Request Sent!</h3>
                <p className="text-brand-muted">We'll be in touch shortly to schedule your demo.</p>
              </div>
            ) : (
              <>
                <h2 className="text-3xl font-bold text-foreground mb-2 tracking-tight">Request a Demo</h2>
                <p className="text-brand-muted mb-8 text-sm">See how Mira3D can transform your manufacturing workflow.</p>

                {error && <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-md text-red-400 text-sm">{error}</div>}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-brand-muted">First Name</label>
                      <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="John" />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-brand-muted">Last Name</label>
                      <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="Doe" />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-brand-muted">Work Email</label>
                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-brand-muted">Company</label>
                    <input required type="text" name="company" value={formData.company} onChange={handleChange} className="w-full bg-secondary border border-border rounded-md px-4 py-3 text-foreground focus:outline-none focus:border-brand-primary transition-colors text-sm" placeholder="Company Name" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full bg-brand-primary text-black font-medium text-base rounded-full px-4 py-4 mt-6 hover:bg-white transition-all duration-300 disabled:opacity-70 disabled:hover:bg-brand-primary">
                    {loading ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
