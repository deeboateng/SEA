import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { MapPin, Plane, Car, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import WaveIcon from '@/components/WaveIcon';
import { NEARBY_ATTRACTIONS } from '@/lib/constants';

const locationImages = [
  '/assets/images/Multi-Story-Building-With-Pool-And-Parking-Area-drone-view.jpg',
  '/assets/images/Multi-Story-Building-of-sea-view-haven-With-City-View-And-Palm-Trees-drone-view.jpg',
];

export default function Location() {
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
        title="Where City Meets Sea"
        subtitle="Find your balance between Accra's coastal calm and urban energy."
        showCTA={false}
        images={locationImages}
        height="100vh"
      />

      {/* Interactive Map Overview */}
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
              Your Place on the Coast
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Perfectly positioned on La Beach Road, where Accra's vibrant energy meets the tranquil rhythm of the sea.
            </p>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-lg shadow-2xl p-2 border border-[#C9A86A]/20">
              <div className="h-96 bg-gradient-to-br from-[#012E40] to-[#E5D3B3] rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* Simplified Map Representation */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-green-500/30" />
                </div>
                
                <div className="text-center z-10">
                  <motion.div
                    className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mb-4 mx-auto shadow-lg"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0 0 rgba(201, 168, 106, 0.7)",
                        "0 0 0 10px rgba(201, 168, 106, 0)",
                        "0 0 0 0 rgba(201, 168, 106, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <MapPin className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-white text-xl font-serif mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    Sea View Haven
                  </h3>
                  <p className="text-white/80 text-sm">La Beach Road, Accra</p>
                  <p className="text-white/60 text-xs mt-1">Beachfront access, private parking</p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white/30 rounded-full" />
                <div className="absolute bottom-4 right-4 w-12 h-12 border-2 border-white/20 rounded-full" />
                <div className="absolute top-1/2 right-8 w-6 h-6 border-2 border-white/40 rounded-full" />
              </div>
            </div>
            <WaveIcon className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8" />
          </motion.div>
        </div>
      </section>

      {/* Nearby Highlights */}
      <section className="py-20 bg-white">
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
              Discover What's Around
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              From pristine beaches to cultural landmarks, everything you need is within reach.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {NEARBY_ATTRACTIONS.map((attraction, index) => (
              <motion.div
                key={attraction.name}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-[#C9A86A]/10 rounded-full flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[#C9A86A]" />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 
                        className="text-2xl font-serif text-[#012E40] mb-1"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {attraction.name}
                      </h3>
                      <motion.p 
                        className="text-[#C9A86A] font-medium text-sm uppercase tracking-wide"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        {attraction.distance} away
                      </motion.p>
                    </div>
                  </div>
                  <div className="w-16 h-px bg-[#C9A86A]" />
                  <p className="text-gray-600 leading-relaxed pl-16">{attraction.description}</p>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <Card className="overflow-hidden border-0 shadow-xl">
                    <div className="h-64 bg-gradient-to-br from-[#E5D3B3] to-[#C9A86A]/30 flex items-center justify-center relative">
                      <div className="text-6xl opacity-30">
                        {index === 0 && '🏖️'}
                        {index === 1 && '🎲'}
                        {index === 2 && '🎨'}
                        {index === 3 && '🏛️'}
                        {index === 4 && '🌳'}
                        {index === 5 && '✈️'}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Journey Experience */}
      <section className="py-20 bg-[#012E40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Effortless Arrival
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Sea View Haven is located 12 km from Kotoka International Airport — approximately 20 minutes by car.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Plane, title: 'Land at Airport', description: 'Kotoka International Airport' },
              { icon: Car, title: 'Quick Transfer', description: '20-minute taxi ride' },
              { icon: MapPin, title: 'Coastal Route', description: 'Scenic drive to La Beach Road' },
              { icon: Clock, title: 'Check-in Ready', description: 'Welcome to Sea View Haven' }
            ].map((step, index) => (
              <motion.div
                key={step.title}
                variants={fadeInUp}
                className="text-center relative"
              >
                <motion.div
                  className="w-16 h-16 bg-[#C9A86A] rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.05 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm">{step.description}</p>
                
                {index < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-full w-full h-px bg-[#C9A86A]/30"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: (index + 1) * 0.2, duration: 0.5 }}
                    viewport={{ once: true }}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Visual Storyline */}
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
              The Rhythm of Accra
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Experience the daily rhythm of coastal life at Sea View Haven.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                image: '/assets/images/Rooftop-Terrace-Sea-View-Pallet-Furniture.jpg',
                caption: 'Morning calm at the terrace.',
                time: '7:00 AM'
              },
              {
                image: '/assets/images/Three-Women-By-Poolside-Talking-And-Smiling.jpg',
                caption: 'Afternoon laughter by the pool.',
                time: '2:00 PM'
              },
              {
                image: '/assets/images/Outdoor-Pool-Area-With-Lounge-Chairs-And-Palm-Tree.jpg',
                caption: 'Evenings glowing under the palms.',
                time: '6:00 PM'
              }
            ].map((moment, index) => (
              <motion.div
                key={moment.caption}
                variants={fadeInUp}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-xl">
                  <div className="relative overflow-hidden">
                    <img
                      src={moment.image}
                      alt={moment.caption}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm font-medium mb-1">{moment.time}</p>
                      <p className="text-white/90 text-lg font-serif" style={{ fontFamily: 'Playfair Display' }}>
                        {moment.caption}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <WaveIcon className="w-8 h-8 mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#012E40]">
          <div className="absolute inset-0 opacity-30">
            <motion.div
              className="w-full h-full bg-gradient-to-r from-[#C9A86A]/20 via-transparent to-[#C9A86A]/20"
              animate={{
                background: [
                  "linear-gradient(90deg, rgba(201, 168, 106, 0.2), transparent, rgba(201, 168, 106, 0.2))",
                  "linear-gradient(90deg, transparent, rgba(201, 168, 106, 0.2), transparent)",
                  "linear-gradient(90deg, rgba(201, 168, 106, 0.2), transparent, rgba(201, 168, 106, 0.2))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </div>
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
              Your Journey Starts Here
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Discover Sea View Haven — where Accra's coast welcomes you home.
            </p>
            <WaveIcon className="w-10 h-10 mx-auto mb-8" />
            <Link to="/book-now">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white px-12 py-4 rounded-2xl text-lg border border-[#C9A86A]/30"
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
