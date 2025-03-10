import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative flowing elements */}
      <div className="absolute top-0 left-0 right-0">
        <svg width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0,0 C320,40 720,80 1440,20 L1440,0 L0,0 Z" fill="white"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-4">
              <span className="font-serif text-2xl">
                <span className="font-light">Holland-</span>
                <span className="font-medium">Pearse</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-6 max-w-md">
              Evidence-based therapeutic approaches delivered with compassion and understanding. 
              Your journey to mental wellbeing starts here.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <span className="sr-only">Twitter</span>
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Services</h4>
            <ul className="space-y-2">
              <li><Link to="/expertise" className="text-slate-400 hover:text-white transition-colors">Individual Therapy</Link></li>
              <li><Link to="/expertise" className="text-slate-400 hover:text-white transition-colors">Couples Counseling</Link></li>
              <li><Link to="/expertise" className="text-slate-400 hover:text-white transition-colors">Anxiety Treatment</Link></li>
              <li><Link to="/expertise" className="text-slate-400 hover:text-white transition-colors">Depression Treatment</Link></li>
              <li><Link to="/expertise" className="text-slate-400 hover:text-white transition-colors">Trauma Recovery</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 font-medium">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/faq" className="text-slate-400 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center">
          <div className="text-slate-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Holland-Pearse Therapy. All rights reserved.
          </div>
          
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</Link>
            <Link to="/terms" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 