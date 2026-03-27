import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-brand-darkGray pt-20 pb-12 border-t border-brand-border relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Logo */}
        <div className="mb-16 flex justify-start">
          <img 
            src="https://mira3dp.com/images/Mira3D%20white%203.png" 
            alt="Mira3D Logo" 
            className="w-48 md:w-56 opacity-100 dark:mix-blend-lighten mix-blend-difference" 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20 relative">
          
          {/* Column 1: Quick Links */}
          <div className="md:pr-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-brand-muted">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium text-brand-text">
              <li><Link to="/products" className="hover:text-brand-primary transition-colors">Products</Link></li>
              <li><Link to="/resources" className="hover:text-brand-primary transition-colors">Resources</Link></li>
              <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact?inquiry=Career" className="hover:text-brand-primary transition-colors">Career</Link></li>
              <li><Link to="/contact" className="hover:text-brand-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/contact?inquiry=Partnership" className="hover:text-brand-primary transition-colors">Become our Distributor</Link></li>
            </ul>
          </div>

          {/* Column 2: Company Info with subtle border framing */}
          <div className="relative px-0 md:px-8 py-4 md:py-0">
            {/* Subtle framing lines for desktop */}
            <div className="hidden md:block absolute top-[-40px] bottom-[-40px] left-0 w-[1px] bg-gradient-to-b from-transparent via-brand-border to-transparent"></div>
            <div className="hidden md:block absolute top-[-40px] bottom-[-40px] right-0 w-[1px] bg-gradient-to-b from-transparent via-brand-border to-transparent"></div>
            
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-brand-muted">Samisan Tech Pvt. Ltd.</h4>
            <p className="text-sm font-medium text-brand-text leading-relaxed">
              Our company, Samisan Tech Private Limited, is a Mumbai-based software development firm. Our core product, the MIRA3D Build Processing Software suite, includes MIRApro (for jewelry / dental industry), MIRAmax (for manufacturing sector), and MIRAanalyse (for part inspection). We specialize in Digital Manufacturing and Machine Vision applications. We are a team of mathematicians and software developers who can also build custom software for your specific use case.
            </p>
          </div>

          {/* Column 3: Contact */}
          <div className="md:text-right md:pl-8">
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-6 text-brand-muted">Contact</h4>
            <div className="space-y-4 text-sm font-medium text-brand-text flex flex-col md:items-end">
              <a href="tel:+919928807923" className="hover:text-brand-primary transition-colors">+91-9928807923</a>
              <a href="mailto:support@mira3d.com" className="hover:text-brand-primary transition-colors">support@mira3d.com</a>
              <p className="mt-2 max-w-[200px] leading-relaxed">
                403, Atlanta Estate,<br />
                Goregaon (E),<br />
                Mumbai - 400063.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-brand-border">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-brand-muted font-medium">
            <a href="#privacy" className="hover:text-brand-text transition-colors">Privacy Policy</a>
            <a href="#refund" className="hover:text-brand-text transition-colors">Refund Policy</a>
            <a href="#terms" className="hover:text-brand-text transition-colors">Terms & Conditions</a>
            <a href="#lgpl" className="hover:text-brand-text transition-colors">LGPL</a>
          </div>
          
          <div className="text-sm text-brand-muted font-medium text-center">
            &copy; Copyright Samisan Tech Pvt Ltd 2025
          </div>

          <div className="flex items-center gap-4">
            <a href="https://www.youtube.com/@mira3dp" target="_blank" rel="noreferrer" aria-label="Visit our YouTube channel" className="w-8 h-8 rounded-full bg-[#FF0000] flex items-center justify-center hover:opacity-80 transition-all duration-300 group">
              <img src="https://mira3dp.com/images/youtube.png" alt="" aria-hidden="true" className="w-4 h-4 brightness-0 invert" />
            </a>
            <a href="https://www.instagram.com/mira3dp/" target="_blank" rel="noreferrer" aria-label="Visit our Instagram page" className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] to-[#bc1888] flex items-center justify-center hover:opacity-80 transition-all duration-300 group">
              <img src="https://mira3dp.com/images/instagram.png" alt="" aria-hidden="true" className="w-4 h-4 brightness-0 invert" />
            </a>
            <a href="https://x.com/MIRA3Dp" target="_blank" rel="noreferrer" aria-label="Visit our X (Twitter) profile" className="w-8 h-8 rounded-full bg-black flex items-center justify-center hover:opacity-80 transition-all duration-300 group">
              <img src="https://mira3dp.com/images/Twitter_icon_.png" alt="" aria-hidden="true" className="w-4 h-4 brightness-0 invert" />
            </a>
            <a href="https://www.linkedin.com/company/mira3d/" target="_blank" rel="noreferrer" aria-label="Visit our LinkedIn company page" className="w-8 h-8 rounded-full bg-[#0077b5] flex items-center justify-center hover:opacity-80 transition-all duration-300 group">
              <img src="https://mira3dp.com/images/Group.png" alt="" aria-hidden="true" className="w-4 h-4 brightness-0 invert" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
