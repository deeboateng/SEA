import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import HeroSection from '@/components/HeroSection';
import WaveIcon from '@/components/WaveIcon';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="We're Here to Welcome You"
        showCTA={false}
        images={['/assets/images/Open-Plan-Living-Dining-Area-Glass-Table.jpg']}
        height="60vh"
      />

      {/* Contact Options */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif text-[#012E40] mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Reach Us Anytime
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              We're here to help make your stay perfect. Choose the way that works best for you.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                icon: Phone,
                title: 'Call Us',
                main: '+233 (0) 55 123 4567',
                sub: 'Available daily, 7:00 AM – 10:00 PM GMT',
                href: 'tel:+233551234567'
              },
              {
                icon: Mail,
                title: 'Email Us',
                main: 'hello@seaviewhaven.com',
                sub: 'We reply within 24 hours',
                href: 'mailto:hello@seaviewhaven.com'
              },
              {
                icon: MapPin,
                title: 'Visit Us',
                main: 'La Beach Road, Accra, Ghana',
                sub: 'Sea View Haven — your coastal retreat',
                href: '/location'
              }
            ].map((contact, index) => (
              <motion.div key={contact.title} variants={fadeInUp}>
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 bg-white h-full">
                  <CardContent className="p-8 text-center">
                    <motion.div
                      className="w-16 h-16 bg-[#C9A86A]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#C9A86A]/20 transition-colors"
                      whileHover={{ scale: 1.05 }}
                    >
                      <contact.icon className="w-8 h-8 text-[#C9A86A]" />
                    </motion.div>
                    <h3 
                      className="text-xl font-serif text-[#012E40] mb-3"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {contact.title}
                    </h3>
                    <div className="w-8 h-px bg-[#C9A86A] mx-auto mb-4" />
                    <p className="text-gray-900 font-medium mb-2">{contact.main}</p>
                    <p className="text-gray-600 text-sm">{contact.sub}</p>
                    {contact.href && (
                      <div className="mt-4">
                        {contact.href.startsWith('/') ? (
                          <Link to={contact.href}>
                            <Button variant="ghost" size="sm" className="text-[#C9A86A] hover:text-[#012E40]">
                              {contact.title === 'Visit Us' ? 'View on Map' : 'Contact Now'}
                            </Button>
                          </Link>
                        ) : (
                          <a href={contact.href}>
                            <Button variant="ghost" size="sm" className="text-[#C9A86A] hover:text-[#012E40]">
                              Contact Now
                            </Button>
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif text-[#012E40] mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Send a Message
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Have a question or special request? We'd love to hear from you.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-8">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                          Your Full Name
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="Your Full Name"
                          className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                          Email Address
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="Your Email Address"
                          className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                        Subject
                      </Label>
                      <Select value={formData.subject} onValueChange={(value) => handleInputChange('subject', value)}>
                        <SelectTrigger className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="booking">Booking Question</SelectItem>
                          <SelectItem value="media">Media Inquiry</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="How can we assist you today?"
                        rows={6}
                        className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A] resize-none"
                        required
                      />
                    </div>
                    
                    <div className="text-center">
                      <Button
                        type="submit"
                        size="lg"
                        className="bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white px-12 py-3 rounded-2xl relative overflow-hidden group"
                      >
                        <span className="relative z-10 flex items-center">
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                          initial={{ x: '-100%' }}
                          animate={{ x: '100%' }}
                          transition={{ 
                            duration: 2, 
                            repeat: Infinity, 
                            repeatDelay: 6,
                            ease: "easeInOut"
                          }}
                        />
                      </Button>
                      <p className="text-sm text-gray-500 mt-4">
                        By sending this message, you agree that we may contact you to assist with your inquiry.
                      </p>
                    </div>
                  </form>
                ) : (
                  <motion.div
                    className="text-center py-12"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 
                      className="text-2xl font-serif text-[#012E40] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      Thank You!
                    </h3>
                    <p className="text-gray-600">
                      Your message has been received. We'll get back to you shortly.
                    </p>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Map & Directions */}
      <section className="py-20 bg-[#E5D3B3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif text-[#012E40] mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Find Your Way
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Located along La Beach Road, moments from Labadi Beach and just 20 minutes from Kotoka International Airport.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <WaveIcon className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8" />
            <Card className="border-0 shadow-2xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-[#012E40] to-[#C9A86A] flex items-center justify-center relative">
                <div className="text-center text-white">
                  <MapPin className="w-16 h-16 mx-auto mb-4 opacity-80" />
                  <h3 className="text-2xl font-serif mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    Sea View Haven
                  </h3>
                  <p className="text-white/80">La Beach Road, Labadi District</p>
                  <p className="text-white/80">Accra, Ghana</p>
                  <Link to="/location">
                    <Button
                      variant="outline"
                      className="mt-4 border-white text-white bg-transparent hover:bg-white hover:text-[#012E40]"
                    >
                      View Detailed Location
                    </Button>
                  </Link>
                </div>
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-green-500/30" />
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg"
            alt="Balcony View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif text-white mb-6"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Your Coastal Escape Awaits
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Reach out today and let us prepare your perfect stay by the sea.
            </p>
            <WaveIcon className="w-10 h-10 mx-auto mb-8" />
            <Link to="/book-now">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white px-12 py-4 rounded-2xl text-lg"
              >
                Book Now
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
