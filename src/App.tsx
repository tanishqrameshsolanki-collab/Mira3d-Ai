import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DemoModalProvider } from './context/DemoModalContext';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Home from './pages/Home';
import MiraPro from './pages/MiraPro';
import MiraMax from './pages/MiraMax';
import Plugins from './pages/Plugins';
import About from './pages/About';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import ChatBot from './components/Chatbot';

export default function App() {
  return (
    <ThemeProvider>
      <DemoModalProvider>
        <Router>
          <div className="min-h-screen bg-brand-bg text-brand-text font-sans selection:bg-brand-primary/30 selection:text-white dark:selection:text-black">
            <Header />
            <DemoModal />
            <ChatBot />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/mira-pro" element={<MiraPro />} />
              <Route path="/mira-max" element={<MiraMax />} />
              <Route path="/plugins" element={<Plugins />} />
              <Route path="/about" element={<About />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </DemoModalProvider>
    </ThemeProvider>
  );
}
