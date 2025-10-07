import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Wifi, Coffee, Car, AirVent, Tv, Bath } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import HeroSection from '@/components/HeroSection';
import WaveIcon from '@/components/WaveIcon';

const rooms = [
  {
    id: 'mixed-dormitory',
    name: 'Mixed Dormitory Room',
    tagline: 'A social escape with ocean views',
    price: 'From $45 / night',
    images: [
      '/assets/images/Mixed Dormitory Room.jpg',
      '/assets/images/Bed-in-6-Bed Dormitory Room.jpg',
    ],
    description: 'Perfect for solo travelers and social butterflies, our mixed dormitory offers comfortable bunk beds in a vibrant, community-focused environment. Wake up to sea breezes and connect with fellow adventurers from around the world.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Shared Bathroom', 'Lockers', 'Common Area Access'],
    capacity: '6 beds',
    size: '25 sqm'
  },
  {
    id: 'double-room',
    name: 'Double Room',
    tagline: 'Intimate tranquility with coastal charm',
    price: 'From $85 / night',
    images: [
      '/assets/images/double-room.jpg',
      '/assets/images/Open-Plan-Living-Dining-Area-Glass-Table.jpg',
    ],
    description: 'Designed for couples and close friends, our double room combines privacy with the social energy of Sea View Haven. Enjoy your own space while being steps away from our vibrant common areas and pool.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'TV', 'Mini Fridge', 'Balcony Access'],
    capacity: '2 guests',
    size: '18 sqm'
  },
  {
    id: 'balcony-room',
    name: 'Balcony Room',
    tagline: 'Private sanctuary with panoramic views',
    price: 'From $120 / night',
    images: [
      '/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg',
      '/assets/images/Rooftop-Terrace-Sea-View-Pallet-Furniture.jpg',
    ],
    description: 'Our premium offering features a private balcony overlooking the pool and coastline. Perfect for those seeking luxury and privacy while enjoying the social atmosphere of our beachfront retreat.',
    amenities: ['Free Wi-Fi', 'Air Conditioning', 'Private Bathroom', 'TV', 'Mini Fridge', 'Private Balcony', 'Sea View'],
    capacity: '2 guests',
    size: '22 sqm'
  }
];

const amenityIcons = {
  'Free Wi-Fi': Wifi,
  'Air Conditioning': AirVent,
  'Private Bathroom': Bath,
  'Shared Bathroom': Bath,
  'TV': Tv,
  'Mini Fridge': Coffee,
  'Lockers': Car,
  'Common Area Access': Coffee,
  'Balcony Access': Coffee,
  'Private Balcony': Coffee,
  'Sea View': Coffee,
};

export default function Stay() {
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="overflow-x-hidden md:overflow-x-visible">
      {/* Hero Section */}
      <HeroSection
        title="Your Haven by the Sea"
        subtitle="Elegant spaces designed for rest, reflection, and refined coastal living."
        showCTA={false}
        height="100vh"
        images={['/assets/images/Mixed Dormitory Room.jpg']}
      />

      {/* Room Collection */}
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
              A Room with a View
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Each accommodation tells its own story of comfort, community, and coastal elegance.
            </p>
          </motion.div>

          <div className="space-y-8">
            {rooms.map((room, index) => (
              <motion.div
                key={room.id}
                className="group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden bg-white hover:shadow-2xl transition-all duration-500 border-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="relative overflow-hidden h-64 lg:h-96">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <WaveIcon className="w-6 h-6" />
                      </div>
                    </div>
                    
                    <CardContent className="p-4 sm:p-6 lg:p-8 flex flex-col justify-center">
                      <h3 
                        className="text-2xl font-serif text-[#012E40] mb-2"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        {room.name}
                      </h3>
                      <p className="text-[#C9A86A] mb-4 italic">{room.tagline}</p>
                      <div className="w-12 h-px bg-[#C9A86A] mb-4" />
                      <p className="text-gray-600 mb-6 leading-relaxed">{room.description}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {room.amenities.slice(0, 4).map((amenity) => {
                          const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
                          return (
                            <div key={amenity} className="flex items-center space-x-2 bg-[#E5D3B3]/30 px-3 py-1 rounded-full">
                              <IconComponent className="w-4 h-4 text-[#C9A86A]" />
                              <span className="text-sm text-gray-600">{amenity}</span>
                            </div>
                          );
                        })}
                      </div>
                      
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-medium text-[#C9A86A]">{room.price}</span>
                        <Button
                          onClick={() => setSelectedRoom(room)}
                          className="bg-[#012E40] hover:bg-[#012E40]/90 text-white px-6 py-2 rounded-2xl"
                        >
                          View Details
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Highlight */}
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
              Beyond the Room
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Curated experiences designed to calm and inspire.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Infinity Pool & Lounge
                </h3>
                <p className="text-white/80">
                  Dive into tranquility with our stunning infinity pool, surrounded by comfortable lounge chairs 
                  and swaying palm trees. Perfect for morning swims or afternoon relaxation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Rooftop Terrace
                </h3>
                <p className="text-white/80">
                  Elevate your experience on our rooftop terrace with panoramic sea views. Watch the sunset 
                  paint the sky while enjoying conversations with fellow travelers.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-serif mb-4" style={{ fontFamily: 'Playfair Display' }}>
                  Social Spaces
                </h3>
                <p className="text-white/80">
                  Our thoughtfully designed common areas encourage connection and community, from the 
                  open-plan living area to cozy conversation nooks.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="/assets/images/Outdoor-Pool-Area-With-Lounge-Chairs-And-Palm-Tree.jpg"
                alt="Pool Area"
                className="rounded-lg shadow-2xl"
              />
              <WaveIcon className="absolute -top-4 -right-4 w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/Night-Poolside-Gathering-Lounge-Area.jpg"
            alt="Night Poolside"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#012E40]/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#C9A86A]/20 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 
              className="text-4xl md:text-5xl font-serif text-white mb-6"
              style={{ fontFamily: 'Playfair Display' }}
            >
              Reserve Your Sea View Escape
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Your stay begins with a single click.
            </p>
            <WaveIcon className="w-10 h-10 mx-auto mb-8" />
            <Button
              size="lg"
              className="bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white px-12 py-4 rounded-2xl text-lg"
            >
              Book Now
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Room Detail Modal */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-lg md:max-w-2xl lg:max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedRoom && (
            <div>
              <DialogHeader>
                <DialogTitle 
                  className="text-2xl font-serif text-[#012E40]"
                  style={{ fontFamily: 'Playfair Display' }}
                >
                  {selectedRoom.name}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <img
                    src={selectedRoom.images[currentImageIndex]}
                    alt={selectedRoom.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  {selectedRoom.images.length > 1 && (
                    <div className="flex space-x-2 mt-4">
                      {selectedRoom.images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-3 h-3 rounded-full ${
                            index === currentImageIndex ? 'bg-[#C9A86A]' : 'bg-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                <div>
                  <p className="text-[#C9A86A] mb-4 italic">{selectedRoom.tagline}</p>
                  <p className="text-gray-600 mb-6">{selectedRoom.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="font-medium text-[#012E40] mb-2">Capacity</h4>
                      <p className="text-gray-600">{selectedRoom.capacity}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-[#012E40] mb-2">Size</h4>
                      <p className="text-gray-600">{selectedRoom.size}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-medium text-[#012E40] mb-3">Amenities</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {selectedRoom.amenities.map((amenity) => {
                        const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons];
                        return (
                          <div key={amenity} className="flex items-center space-x-2">
                            <IconComponent className="w-4 h-4 text-[#C9A86A]" />
                            <span className="text-sm text-gray-600">{amenity}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-medium text-[#C9A86A]">{selectedRoom.price}</span>
                    <Button className="bg-[#012E40] hover:bg-[#012E40]/90 text-white px-6 py-2 rounded-2xl">
                      Book This Room
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
