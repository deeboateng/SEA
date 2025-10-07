import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import WaveIcon from '@/components/WaveIcon';

const experienceImages = [
  '/assets/images/Three-Women-By-Poolside-Talking-And-Smiling.jpg',
  '/assets/images/Night-Poolside-Gathering-Lounge-Area.jpg',
  '/assets/images/Outdoor-Pool-Area-With-Lounge-Chairs-And-Palm-Tree.jpg',
];

const lifestyleMoments = [
  {
    title: 'Evenings by the Pool',
    description: 'Where stories are shared under the palm shadows.',
    image: '/assets/images/Night-Poolside-Gathering-Lounge-Area.jpg'
  },
  {
    title: 'Conversations at Dusk',
    description: 'Connect with fellow travelers as the sun sets over Accra.',
    image: '/assets/images/Three-Women-By-Poolside-Talking-And-Smiling.jpg'
  },
  {
    title: 'Rooftop Serenity',
    description: 'Find your peaceful moment with panoramic coastal views.',
    image: '/assets/images/Rooftop-Terrace-Sea-View-Pallet-Furniture.jpg'
  },
  {
    title: 'Morning Reflections',
    description: 'Start your day in tranquil surroundings.',
    image: '/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg'
  }
];

export default function Experience() {
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
    <div className="overflow-x-hidden md:overflow-x-visible">
      {/* Hero Section */}
      <HeroSection
        title="Experience the Spirit of the Sea"
        subtitle="From sunrise swims to sunset gatherings, every moment here connects you to the calm rhythm of coastal life."
        showCTA={false}
        images={experienceImages}
        height="100vh"
      />

      {/* Lifestyle & Social Experiences */}
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
              The Haven Life
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Discover the perfect blend of social energy and peaceful retreat in every corner of Sea View Haven.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {lifestyleMoments.map((moment, index) => (
              <motion.div key={moment.title} variants={fadeInUp}>
                <Card className="group overflow-hidden bg-white hover:shadow-xl transition-all duration-500 border-0 h-full">
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={moment.image}
                      alt={moment.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-[#C9A86A]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      whileHover={{ 
                        background: "linear-gradient(45deg, rgba(201, 168, 106, 0.3), transparent)" 
                      }}
                    />
                  </div>
                  <CardContent className="p-4 sm:p-6">
                    <h3 
                      className="text-lg font-serif text-[#012E40] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {moment.title}
                    </h3>
                    <div className="w-8 h-px bg-[#C9A86A] mb-3" />
                    <p className="text-gray-600 text-sm">{moment.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dining & Morning Rituals */}
      <section className="py-20 bg-[#E5D3B3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/images/Open-Plan-Living-Dining-Area-Glass-Table.jpg"
                alt="Dining Area"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A86A]/20 rounded-full blur-xl" />
            </motion.div>

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h2 
                  className="text-4xl md:text-5xl font-serif text-[#012E40] mb-4"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  Taste the Shoreline
                </h2>
                <div className="w-16 h-px bg-[#C9A86A] mb-6" />
              </div>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Begin your mornings with a continental breakfast as the ocean whispers nearby. 
                At Sea View Haven, every meal is an invitation to slow down and savor.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Our open-plan dining area becomes a natural gathering place where conversations 
                flow as freely as the sea breeze, creating connections that last long after your stay.
              </p>

              <div className="flex flex-wrap justify-center sm:justify-start gap-6 pt-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C9A86A]/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">☕</span>
                  </div>
                  <span className="text-sm text-gray-600">Fresh Coffee</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C9A86A]/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">🥐</span>
                  </div>
                  <span className="text-sm text-gray-600">Continental</span>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#C9A86A]/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">🌊</span>
                  </div>
                  <span className="text-sm text-gray-600">Ocean Views</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relaxation & Leisure */}
      <section className="py-20 bg-[#012E40] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif mb-4"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Unwind by the Water
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Find your rhythm in spaces designed for relaxation and reflection.
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
                title: 'Pool Sanctuary',
                description: 'A serene afternoon under the palms',
                image: '/assets/images/Outdoor-Pool-Area-With-Lounge-Chairs-And-Palm-Tree.jpg'
              },
              {
                title: 'Balcony Retreat',
                description: 'Private moments with pool views',
                image: '/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg'
              },
              {
                title: 'Social Spaces',
                description: 'Connect in comfort and style',
                image: '/assets/images/Open-Plan-Living-Dining-Area-Glass-Table.jpg'
              }
            ].map((space, index) => (
              <motion.div
                key={space.title}
                variants={fadeInUp}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={space.image}
                    alt={space.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'linear-gradient(45deg, rgba(201, 168, 106, 0.2), transparent)'
                    }}
                  />
                </div>
                <h3 
                  className="text-xl font-serif mb-2"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  {space.title}
                </h3>
                <p className="text-white/70 text-sm">{space.description}</p>
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

      {/* Local Exploration */}
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
              Discover Accra's Soul
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Step beyond our doors to explore the vibrant culture and attractions that make Accra unforgettable.
            </p>
          </motion.div>

          <motion.div
            className="space-y-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                name: 'Labadi Beach',
                distance: '400m from the hostel',
                description: 'Feel the pulse of Accra\'s most iconic shoreline, where golden sands meet the Atlantic waves.',
                icon: '🏖️'
              },
              {
                name: 'La Palm Casino',
                distance: '500m from the hostel',
                description: 'Experience entertainment and fine dining in one of Accra\'s premier destinations.',
                icon: '🎲'
              },
              {
                name: 'The Loom – Artists Alliance Gallery',
                distance: '1.4km from the hostel',
                description: 'Immerse yourself in contemporary Ghanaian art and creative expression.',
                icon: '🎨'
              },
              {
                name: 'Independence Arch',
                distance: '5.6km from the hostel',
                description: 'Visit this historic landmark symbolizing Ghana\'s independence and freedom.',
                icon: '🏛️'
              }
            ].map((attraction, index) => (
              <motion.div
                key={attraction.name}
                variants={fadeInUp}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`space-y-4 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-2 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                    <span className="text-4xl">{attraction.icon}</span>
                    <div>
                      <h3 
                        className="text-2xl font-serif text-[#012E40]"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {attraction.name}
                      </h3>
                      <p className="text-[#C9A86A] text-sm font-medium uppercase tracking-wide">
                        {attraction.distance}
                      </p>
                    </div>
                  </div>
                  <div className="w-12 h-px bg-[#C9A86A] mx-auto sm:mx-0" />
                  <p className="text-gray-600 leading-relaxed">{attraction.description}</p>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="h-64 bg-gradient-to-br from-[#E5D3B3] to-[#C9A86A]/20 rounded-lg flex items-center justify-center">
                    <span className="text-6xl opacity-50">{attraction.icon}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#012E40]">
          <div className="absolute inset-0 opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-[#C9A86A]/10 via-transparent to-[#C9A86A]/10 animate-pulse" />
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
              Every Stay Begins with a Story
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Make yours here.
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
