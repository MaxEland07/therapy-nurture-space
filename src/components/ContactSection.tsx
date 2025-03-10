import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background architectural element */}
      <div className="absolute top-0 right-0 bottom-0 w-1/2 bg-slate-50 clip-diagonal z-0"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-slate-100 text-slate-700 text-sm rounded-full mb-4">Get Started</span>
            <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-6">Begin Your Therapeutic Journey</h2>
            <p className="text-slate-600 mb-8">
              Taking the first step toward therapy is an act of courage. We're here to support 
              you through every stage of your healing journey.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 13.17 9.42 18.92 11.24 21.11C11.64 21.59 12.37 21.59 12.77 21.11C14.58 18.92 19 13.17 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="#475569"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">Bristol Practice</h3>
                  <p className="text-slate-600">
                    123 Clifton Avenue<br />
                    Bristol, BS8 1AB
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="#475569"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-slate-800 mb-1">Contact Information</h3>
                  <p className="text-slate-600">
                    Email: contact@hollandpearse.com<br />
                    Phone: 0117 123 4567
                  </p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/contact" 
              className="inline-flex items-center text-slate-800 font-medium hover:text-slate-600 transition-colors"
            >
              View All Practice Locations
              <svg className="ml-2 w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8">
            <h3 className="text-xl font-medium text-slate-800 mb-6">Schedule a Consultation</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm text-slate-700 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:border-slate-500 focus:ring-0 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:border-slate-500 focus:ring-0 outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="service" className="block text-sm text-slate-700 mb-2">Service Interested In</label>
                <select 
                  id="service" 
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:border-slate-500 focus:ring-0 outline-none transition-colors"
                >
                  <option value="">Select a service</option>
                  <option value="individual">Individual Therapy</option>
                  <option value="couples">Couples Counseling</option>
                  <option value="anxiety">Anxiety Treatment</option>
                  <option value="depression">Depression Treatment</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm text-slate-700 mb-2">Initial Concerns (Optional)</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:border-slate-500 focus:ring-0 outline-none transition-colors"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700 transition-colors"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 