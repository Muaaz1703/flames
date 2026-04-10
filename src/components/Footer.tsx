import { Flame, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 border-t border-gray-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <Flame className="w-8 h-8 text-flame-500" />
              <span className="font-serif text-2xl font-bold tracking-wider text-white uppercase">
                Flames
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Experience the art of fire-cooked cuisine in an elegant, atmospheric setting. Where passion meets the plate.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-flame-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-flame-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-flame-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/menu" className="text-gray-400 hover:text-flame-500 transition-colors text-sm uppercase tracking-wider">Menu</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-flame-500 transition-colors text-sm uppercase tracking-wider">About Us</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-flame-500 transition-colors text-sm uppercase tracking-wider">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-flame-500 transition-colors text-sm uppercase tracking-wider">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-5 h-5 text-flame-500 shrink-0" />
                <span>123 Culinary Avenue,<br />Gourmet District, NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Phone className="w-5 h-5 text-flame-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Mail className="w-5 h-5 text-flame-500 shrink-0" />
                <span>reservations@flames.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg text-white mb-6">Opening Hours</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>5:00 PM - 10:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Fri - Sat</span>
                <span>5:00 PM - 11:30 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>4:00 PM - 9:30 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Flames Restaurant. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
