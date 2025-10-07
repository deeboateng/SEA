import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Coffee, Car, Wine, Waves, Dice1, Palette, Landmark, Trees, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import HeroSection from '@/components/HeroSection';
import WaveIcon from '@/components/WaveIcon';
import { ROOM_TYPES, AMENITIES } from '@/lib/constants';

export default function Index() {
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

  const iconMap = {
    waves: Waves,
    wifi: Wifi,
    coffee: Coffee,
    car: Car,
    wine: Wine,
    dice: Dice1,
    palette: Palette,
    landmark: Landmark,
    tree: Trees,
    plane: Plane,
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <HeroSection
        title="Sea View Haven"
        subtitle="A beachfront retreat on La Beach Road, Accra."
      />

      {/* About Snapshot */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <h2 
                  className="text-4xl md:text-5xl font-serif text-[#012E40] mb-6"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  The Essence of Coastal Living
                </h2>
                <div className="w-16 h-px bg-[#C9A86A] mb-6" />
              </motion.div>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeInUp}
              >
                Discover a sanctuary where the rhythm of the ocean meets the warmth of Ghanaian hospitality. 
                At <span className="text-[#C9A86A] font-medium">Sea View Haven</span>, every moment is designed 
                to connect you with the calm energy of coastal life, from sunrise swims to sunset gatherings 
                under the palms.
              </motion.p>
              
              <motion.p 
                className="text-lg text-gray-700 leading-relaxed"
                variants={fadeInUp}
              >
                Located on <span className="text-[#C9A86A] font-medium">La Beach Road</span> in the heart of 
                <span className="text-[#C9A86A] font-medium"> Accra's</span> coastal district, we offer more 
                than accommodation — we provide a social experience where comfort meets community.
              </motion.p>

              {/* Amenities Icons */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 pt-6"
                variants={fadeInUp}
              >
                {AMENITIES.map((amenity, index) => {
                  const IconComponent = iconMap[amenity.icon as keyof typeof iconMap];
                  return (
                    <motion.div
                      key={amenity.name}
                      className="flex flex-col items-center group cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 rounded-full bg-[#C9A86A]/10 flex items-center justify-center mb-2 group-hover:bg-[#C9A86A]/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-[#C9A86A]" />
                      </div>
                      <span className="text-sm text-gray-600 text-center">{amenity.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/images/Open-Plan-Living-Dining-Area-Glass-Table.jpg"
                alt="Open Plan Living Area"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#C9A86A]/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#E3967C]/10 rounded-full blur-xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stay Preview */}
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
              Your Haven Awaits
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Choose from our thoughtfully designed accommodations, each offering a unique perspective 
              on coastal comfort and community connection.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {ROOM_TYPES.map((room, index) => (
              <motion.div key={room.id} variants={fadeInUp}>
                <Card className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border-0">
                  <div className="relative overflow-hidden">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <Button
                        variant="outline"
                        className="w-full border-white text-white bg-transparent hover:bg-white hover:text-[#012E40]"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 
                      className="text-xl font-serif text-[#012E40] mb-2"
                      style={{ fontFamily: 'Playfair Display' }}
                    >
                      {room.name}
                    </h3>
                    <div className="w-8 h-px bg-[#C9A86A] mb-3" />
                    <p className="text-gray-600 mb-4">{room.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-[#C9A86A] font-medium">{room.price}</span>
                      <ArrowRight className="w-5 h-5 text-[#C9A86A] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
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
            <Link to="/stay">
              <Button
                size="lg"
                className="bg-[#012E40] hover:bg-[#012E40]/90 text-white px-8 py-3 rounded-2xl"
              >
                Explore All Accommodations
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Experience Highlight */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/Three-Women-By-Poolside-Talking-And-Smiling.jpg"
            alt="Poolside Experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#E3967C]/80 to-[#E3967C]/60" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-6xl font-serif text-white mb-6"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Where Every Sunrise Comes with New Friendships
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Experience the perfect blend of relaxation and social connection. From morning coffee 
              conversations to evening poolside gatherings, every moment here is designed to create lasting memories.
            </p>
            <WaveIcon className="w-12 h-12 mx-auto mb-8" />
            <Link to="/experience">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white bg-transparent hover:bg-white hover:text-[#012E40] px-8 py-3 rounded-2xl"
              >
                Discover the Experience
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Location Teaser */}
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
              In the Heart of Accra's Beach District
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Perfectly positioned on La Beach Road, you're moments away from Accra's most vibrant 
              coastal attractions and cultural landmarks.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { name: 'Labadi Beach', distance: '400m', icon: 'waves' },
              { name: 'La Palm Casino', distance: '500m', icon: 'dice' },
              { name: 'Artists Gallery', distance: '1.4km', icon: 'palette' },
              { name: 'Independence Arch', distance: '5.6km', icon: 'landmark' },
              { name: 'Nkrumah Park', distance: '6.6km', icon: 'tree' },
              { name: 'Airport', distance: '12km', icon: 'plane' },
            ].map((location, index) => {
              const IconComponent = iconMap[location.icon as keyof typeof iconMap];
              return (
                <motion.div
                  key={location.name}
                  className="flex flex-col items-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#C9A86A]/10 flex items-center justify-center mb-2 group-hover:bg-[#C9A86A]/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-[#C9A86A]" />
                  </div>
                  <h3 className="font-medium mb-1 text-white text-center">{location.name}</h3>
                  <p className="text-[#C9A86A] text-sm text-center">{location.distance}</p>
                </motion.div>
              );
            })}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/location">
              <Button
                size="lg"
                className="bg-[#C9A86A] hover:bg-[#C9A86A]/90 text-white px-8 py-3 rounded-2xl"
              >
                Discover More
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg"
            alt="Balcony View"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif text-white mb-6"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Your Beachfront Haven Awaits
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book now and wake up to the sound of the sea.
            </p>
            <WaveIcon className="w-10 h-10 mx-auto mb-8" />
            <Link to="/book-now">
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white px-12 py-4 rounded-2xl text-lg relative overflow-hidden group"
              >
                <span className="relative z-10">Book Your Stay</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity, 
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
