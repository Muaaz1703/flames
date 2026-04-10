import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24 min-h-screen bg-charcoal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h2 className="text-flame-500 tracking-[0.2em] uppercase text-sm font-semibold mb-4">Get in Touch</h2>
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Contact & Reservations</h1>
          <div className="w-24 h-1 bg-flame-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div>
              <h3 className="font-serif text-3xl text-white mb-8">Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-flame-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Location</h4>
                    <p className="text-gray-400">123 Culinary Avenue<br/>Gourmet District, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-flame-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Phone</h4>
                    <p className="text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-flame-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Email</h4>
                    <p className="text-gray-400">reservations@flames.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-flame-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Hours</h4>
                    <p className="text-gray-400">
                      Mon - Thu: 5:00 PM - 10:00 PM<br/>
                      Fri - Sat: 5:00 PM - 11:30 PM<br/>
                      Sunday: 4:00 PM - 9:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="h-64 bg-charcoal-900 border border-gray-800 rounded-sm relative overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Map location" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-charcoal-950/80 backdrop-blur-sm px-6 py-3 border border-gray-700 text-sm tracking-widest uppercase text-white">
                  View on Maps
                </div>
              </div>
            </div>
          </motion.div>

          {/* Reservation Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-charcoal-900 p-8 md:p-12 border border-gray-800 rounded-sm"
          >
            <h3 className="font-serif text-3xl text-white mb-8">Book a Table</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Name</label>
                  <input 
                    type="text" 
                    className="w-full bg-charcoal-950 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-flame-500 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full bg-charcoal-950 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-flame-500 transition-colors"
                    placeholder="(555) 000-0000"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Date</label>
                  <input 
                    type="date" 
                    className="w-full bg-charcoal-950 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-flame-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Time</label>
                  <select className="w-full bg-charcoal-950 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-flame-500 transition-colors appearance-none">
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Guests</label>
                <select className="w-full bg-charcoal-950 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-flame-500 transition-colors appearance-none">
                  <option>2 People</option>
                  <option>3 People</option>
                  <option>4 People</option>
                  <option>5 People</option>
                  <option>6+ People</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2 uppercase tracking-wider">Special Requests</label>
                <textarea 
                  rows={4}
                  className="w-full bg-charcoal-950 border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-flame-500 transition-colors resize-none"
                  placeholder="Dietary requirements, special occasions..."
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-flame-500 text-white py-4 uppercase tracking-widest text-sm font-medium hover:bg-flame-600 transition-colors mt-4"
              >
                Confirm Reservation
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
