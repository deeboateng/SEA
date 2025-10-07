import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NAVIGATION_ITEMS } from '@/lib/constants';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Handle transparency
      setIsScrolled(currentScrollY > 100);
      
      // Handle visibility
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Auto-scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navbarClasses = `
    fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
    ${isScrolled ? 'bg-[#012E40] shadow-lg' : 'bg-transparent'}
    ${isVisible ? 'translate-y-0' : '-translate-y-full'}
  `;

  return (
    <motion.nav
      className={navbarClasses}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mobile menu button - left side on mobile */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-[#C9A86A]"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>

          {/* Logo */}
          <Link
            to="/"
            className="text-white font-serif text-xl tracking-wide hover:text-[#C9A86A] transition-colors"
            style={{ fontFamily: 'Playfair Display' }}
          >
            Sea View Haven
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`
                  text-white hover:text-[#C9A86A] transition-colors relative
                  ${location.pathname === item.path ? 'text-[#C9A86A]' : ''}
                `}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#C9A86A]"
                    layoutId="navbar-indicator"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Book Now Button */}
          <div className="flex items-center">
            <Link to="/book-now">
              <Button
                className="bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white font-medium px-6 py-2 rounded-2xl transition-all duration-300 hover:shadow-lg hover:shadow-[#C9A86A]/25"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#012E40] border-t border-[#C9A86A]/20"
          >
            <div className="px-4 py-4 space-y-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block text-white hover:text-[#C9A86A] transition-colors py-2
                    ${location.pathname === item.path ? 'text-[#C9A86A]' : ''}
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
