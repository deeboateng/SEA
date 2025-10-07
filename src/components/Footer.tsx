import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import WaveIcon from './WaveIcon';
import { NAVIGATION_ITEMS } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#012E40] to-black text-white">
      {/* Gold divider line */}
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-[#C9A86A] to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Signature */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 
                className="text-2xl font-serif text-[#C9A86A] mb-2"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Sea View Haven
              </h3>
              <p className="text-[#F9F9F9] text-sm leading-relaxed">
                A beachfront retreat on La Beach Road, Accra.
              </p>
              <WaveIcon className="w-6 h-6 mt-4" />
            </motion.div>
          </div>

          {/* Explore */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-lg font-serif text-white mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Explore
              </h4>
              <ul className="space-y-3">
                {NAVIGATION_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-[#F9F9F9] hover:text-[#C9A86A] transition-colors duration-300 relative group"
                    >
                      {item.name}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A86A] transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Guest Information */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-lg font-serif text-white mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Guest Information
              </h4>
              <ul className="space-y-3">
                {[
                  'Check-in & Check-out',
                  'Cancellation Policy',
                  'Payment Methods',
                  'House Rules',
                  'Privacy Policy'
                ].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[#F9F9F9] hover:text-[#C9A86A] transition-colors duration-300 relative group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-[#C9A86A] transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 
                className="text-lg font-serif text-white mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Contact Us
              </h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C9A86A] mt-1 flex-shrink-0" />
                  <p className="text-[#F9F9F9] text-sm">
                    La Beach Road, Labadi District<br />
                    Accra, Ghana
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-[#C9A86A] flex-shrink-0" />
                  <p className="text-[#F9F9F9] text-sm">+233 (0) 55 123 4567</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#C9A86A] flex-shrink-0" />
                  <p className="text-[#F9F9F9] text-sm">reservations@seaviewhaven.com</p>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="flex space-x-4 mt-6">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Facebook, href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className="text-[#C9A86A] hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
              
              {/* View on Map */}
              <Link
                to="/location"
                className="inline-flex items-center text-[#C9A86A] hover:text-white transition-colors duration-300 text-sm mt-4 group"
              >
                View on Map
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#C9A86A]/20 bg-black/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center text-sm text-[#F9F9F9]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>© 2025 Sea View Haven. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">Design Direction by Vice Star Vision Studio</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}