import { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Calendar, Mail, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

type Step = 'initial' | 'department' | 'booking' | 'contact';

interface Message {
  id: string;
  sender: 'bot' | 'user';
  text: string;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('initial');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', sender: 'bot', text: 'Hello! How can I help you today?' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, step]);

  const handleBookMeeting = () => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text: 'Book a Meeting' }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: 'Great! Which department would you like to speak with?' }]);
      setStep('department');
    }, 500);
  };

  const handleDepartmentSelect = (dept: string) => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text: dept }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: 'Perfect. Pick a time below.' }]);
      setStep('booking');
      
      // Optional: Send a "Live Alert" webhook here as requested
      // fetch('/api/alert', { method: 'POST', body: JSON.stringify({ event: 'user_booking', department: dept }) });
    }, 500);
  };

  const handleContact = () => {
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text: 'Send a Message' }]);
    setTimeout(() => {
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: 'Sure! Please visit our contact page to send us a message.' }]);
      setStep('contact');
    }, 500);
  };

  const resetChat = () => {
    setStep('initial');
    setMessages([{ id: '1', sender: 'bot', text: 'Hello! How can I help you today?' }]);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-brand-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.3)] z-50 transition-transform duration-300 hover:scale-110 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
        aria-label="Open Chat"
      >
        <MessageSquare className="w-6 h-6 text-black" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-6 right-6 w-[380px] h-[600px] max-h-[80vh] bg-background border border-border rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-card border-b border-border p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-brand-primary flex items-center justify-center">
                  <img src="https://mira3dp.com/images/Mira3D%20white%203.png" alt="MIRA3D" className="w-5 h-5 object-contain brightness-0" />
                </div>
                <div>
                  <h3 className="text-foreground font-bold text-sm">MIRA3D Assistant</h3>
                  <p className="text-brand-primary text-xs flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span> Online
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-brand-muted hover:text-foreground transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-border">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-brand-primary text-black rounded-tr-sm font-medium' 
                      : 'bg-secondary text-foreground rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Interactive Options Area */}
            <div className="p-4 bg-card border-t border-border">
              <AnimatePresence mode="wait">
                {step === 'initial' && (
                  <motion.div
                    key="initial"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2"
                  >
                    <button onClick={handleBookMeeting} className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-sm transition-colors border border-border hover:border-brand-primary/50">
                      <span className="flex items-center gap-2"><Calendar className="w-4 h-4 text-brand-primary" /> Book a Meeting</span>
                      <ChevronRight className="w-4 h-4 text-brand-muted" />
                    </button>
                    <button onClick={handleContact} className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-sm transition-colors border border-border hover:border-brand-primary/50">
                      <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-brand-primary" /> Send a Message</span>
                      <ChevronRight className="w-4 h-4 text-brand-muted" />
                    </button>
                  </motion.div>
                )}

                {step === 'department' && (
                  <motion.div
                    key="department"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="space-y-2"
                  >
                    <button onClick={() => handleDepartmentSelect('Sales')} className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-sm transition-colors border border-border hover:border-brand-primary/50">
                      <span>Sales</span>
                      <ChevronRight className="w-4 h-4 text-brand-muted" />
                    </button>
                    <button onClick={() => handleDepartmentSelect('Support')} className="w-full flex items-center justify-between p-3 rounded-xl bg-secondary hover:bg-secondary/80 text-foreground text-sm transition-colors border border-border hover:border-brand-primary/50">
                      <span>Support</span>
                      <ChevronRight className="w-4 h-4 text-brand-muted" />
                    </button>
                  </motion.div>
                )}

                {step === 'booking' && (
                  <motion.div
                    key="booking"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="h-[300px] w-full bg-white rounded-xl overflow-hidden relative"
                  >
                    {/* Placeholder for MS Bookings iframe */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-black p-4 text-center bg-gray-50">
                      <Calendar className="w-8 h-8 text-brand-primary mb-2" />
                      <p className="text-sm font-bold mb-1">Microsoft Bookings</p>
                      <p className="text-xs text-gray-500 mb-4">Replace this with your actual MS Bookings iframe URL.</p>
                      <button onClick={resetChat} className="text-xs text-brand-primary underline">Restart Chat</button>
                    </div>
                    {/* <iframe src="YOUR_MS_BOOKINGS_URL" width="100%" height="100%" frameBorder="0"></iframe> */}
                  </motion.div>
                )}

                {step === 'contact' && (
                  <motion.div
                    key="contact"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex flex-col gap-2"
                  >
                    <a href="/contact" className="w-full flex items-center justify-center p-3 rounded-xl bg-brand-primary text-black font-bold text-sm transition-colors hover:bg-white">
                      Go to Contact Page
                    </a>
                    <button onClick={resetChat} className="text-xs text-brand-muted hover:text-foreground mt-2">Restart Chat</button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
