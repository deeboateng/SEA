import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Check, Key, Clock, Waves, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import HeroSection from '@/components/HeroSection';
import WaveIcon from '@/components/WaveIcon';
import { ROOM_TYPES } from '@/lib/constants';

export default function BookNow() {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    specialRequests: ''
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsProcessing(false);
    setIsConfirmed(true);
  };

  const selectedRoom = ROOM_TYPES.find(room => room.id === bookingData.roomType);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  };

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Reserve Your Stay at Sea View Haven"
        subtitle="Experience beachfront comfort and serene design on Accra's coast."
        showCTA={false}
        images={[
          '/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg',
          '/assets/images/Night-Poolside-Gathering-Lounge-Area.jpg'
        ]}
        height="70vh"
      />

      {/* Booking Interface */}
      <section className="py-20 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Effortless Reservations
            </h2>
            <div className="w-16 h-px bg-[#C9A86A] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Your perfect coastal escape is just a few clicks away.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {!isConfirmed ? (
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-2xl overflow-hidden">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Form Section */}
                    <CardContent className="p-8 lg:p-12">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="checkIn" className="text-sm font-medium text-gray-700 uppercase tracking-wide flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-[#C9A86A]" />
                              Check-in Date
                            </Label>
                            <Input
                              id="checkIn"
                              type="date"
                              value={bookingData.checkIn}
                              onChange={(e) => handleInputChange('checkIn', e.target.value)}
                              className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="checkOut" className="text-sm font-medium text-gray-700 uppercase tracking-wide flex items-center">
                              <Calendar className="w-4 h-4 mr-2 text-[#C9A86A]" />
                              Check-out Date
                            </Label>
                            <Input
                              id="checkOut"
                              type="date"
                              value={bookingData.checkOut}
                              onChange={(e) => handleInputChange('checkOut', e.target.value)}
                              className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="guests" className="text-sm font-medium text-gray-700 uppercase tracking-wide flex items-center">
                              <Users className="w-4 h-4 mr-2 text-[#C9A86A]" />
                              Number of Guests
                            </Label>
                            <Select value={bookingData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                              <SelectTrigger className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]">
                                <SelectValue placeholder="Select guests" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="1">1 Guest</SelectItem>
                                <SelectItem value="2">2 Guests</SelectItem>
                                <SelectItem value="3">3 Guests</SelectItem>
                                <SelectItem value="4">4 Guests</SelectItem>
                                <SelectItem value="5">5+ Guests</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="roomType" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                              Room Type
                            </Label>
                            <Select value={bookingData.roomType} onValueChange={(value) => handleInputChange('roomType', value)}>
                              <SelectTrigger className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A]">
                                <SelectValue placeholder="Choose your room" />
                              </SelectTrigger>
                              <SelectContent>
                                {ROOM_TYPES.map((room) => (
                                  <SelectItem key={room.id} value={room.id}>
                                    {room.name} - {room.price}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="specialRequests" className="text-sm font-medium text-gray-700 uppercase tracking-wide">
                            Special Requests
                          </Label>
                          <Textarea
                            id="specialRequests"
                            value={bookingData.specialRequests}
                            onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                            placeholder="e.g., Late check-in, terrace preference, dietary requirements"
                            rows={4}
                            className="border-gray-200 focus:border-[#C9A86A] focus:ring-[#C9A86A] resize-none"
                          />
                        </div>

                        <div className="pt-6">
                          <Button
                            type="submit"
                            size="lg"
                            disabled={isProcessing}
                            className="w-full bg-gradient-to-r from-[#C9A86A] to-[#E2C58D] hover:from-[#E2C58D] hover:to-[#C9A86A] text-white py-4 rounded-2xl text-lg relative overflow-hidden group disabled:opacity-50"
                          >
                            <AnimatePresence mode="wait">
                              {isProcessing ? (
                                <motion.div
                                  key="processing"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="flex items-center"
                                >
                                  <motion.div
                                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                  />
                                  Processing Your Reservation...
                                </motion.div>
                              ) : (
                                <motion.span
                                  key="confirm"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                >
                                  Confirm Booking
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </Button>
                        </div>
                      </form>
                    </CardContent>

                    {/* Preview Section */}
                    <div className="bg-[#E5D3B3] p-8 lg:p-12 flex flex-col justify-center">
                      <h3 
                        className="text-2xl font-serif text-[#012E40] mb-6"
                        style={{ fontFamily: 'Playfair Display' }}
                      >
                        Your Reservation Preview
                      </h3>
                      
                      {selectedRoom ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={selectedRoom.image}
                            alt={selectedRoom.name}
                            className="w-full h-48 object-cover rounded-lg mb-4"
                          />
                          <h4 className="text-lg font-medium text-[#012E40] mb-2">{selectedRoom.name}</h4>
                          <p className="text-gray-600 text-sm mb-4">{selectedRoom.description}</p>
                          <div className="text-[#C9A86A] font-medium">{selectedRoom.price}</div>
                        </motion.div>
                      ) : (
                        <div className="text-center py-12">
                          <WaveIcon className="w-16 h-16 mx-auto mb-4 opacity-50" />
                          <p className="text-gray-600">Select a room type to see preview</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ) : (
              <motion.div
                key="confirmation"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Card className="border-0 shadow-2xl text-center">
                  <CardContent className="p-12">
                    <motion.div
                      className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring" }}
                    >
                      <Check className="w-10 h-10 text-green-600" />
                    </motion.div>
                    
                    <motion.h2
                      className="text-3xl font-serif text-[#012E40] mb-4"
                      style={{ fontFamily: 'Playfair Display' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                    >
                      Reservation Confirmed!
                    </motion.h2>
                    
                    <motion.p
                      className="text-lg text-gray-600 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      Welcome to Sea View Haven. A confirmation email has been sent to you.
                    </motion.p>
                    
                    <motion.div
                      className="flex justify-center mb-8"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                    >
                      <WaveIcon className="w-12 h-12" />
                    </motion.div>
                    
                    <motion.div
                      className="flex flex-col sm:flex-row gap-4 justify-center"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                    >
                      <Button
                        variant="outline"
                        className="border-[#012E40] text-[#012E40] hover:bg-[#012E40] hover:text-white"
                      >
                        View Your Stay Details
                      </Button>
                      <Button
                        variant="ghost"
                        className="text-[#C9A86A] hover:text-[#012E40]"
                        onClick={() => window.location.href = '/'}
                      >
                        Return Home
                      </Button>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Room Highlights Bar */}
      {!isConfirmed && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl font-serif text-[#012E40] mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Choose Your Haven
              </h2>
              <div className="w-12 h-px bg-[#C9A86A] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ROOM_TYPES.map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className={`group cursor-pointer transition-all duration-300 border-2 ${
                    bookingData.roomType === room.id 
                      ? 'border-[#C9A86A] shadow-lg' 
                      : 'border-transparent hover:border-[#C9A86A]/50 hover:shadow-md'
                  }`}>
                    <div className="relative overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute bottom-2 right-2">
                        <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">→</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-[#012E40] mb-1">{room.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">{room.description}</p>
                      <p className="text-[#C9A86A] font-medium text-sm">{room.price}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Visual Reassurance Section */}
      {!isConfirmed && (
        <section className="py-20 bg-[#E5D3B3]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 
                className="text-3xl font-serif text-[#012E40] mb-4"
                style={{ fontFamily: 'Playfair Display' }}
              >
                Our Promise to You
              </h2>
              <div className="w-12 h-px bg-[#C9A86A] mx-auto" />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Key, text: 'Secure Booking Guarantee' },
                { icon: Clock, text: 'Flexible Check-in Times' },
                { icon: Waves, text: 'Private Beach Access' },
                { icon: Heart, text: 'Personalized Guest Care' }
              ].map((promise, index) => (
                <motion.div
                  key={promise.text}
                  className="text-center group"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:shadow-lg transition-shadow"
                    whileHover={{ scale: 1.05 }}
                  >
                    <promise.icon className="w-8 h-8 text-[#C9A86A]" />
                  </motion.div>
                  <p className="text-sm text-gray-700 font-medium">{promise.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Block */}
      {isConfirmed && (
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[#012E40]">
            <motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "linear-gradient(45deg, rgba(201, 168, 106, 0.1), transparent, rgba(201, 168, 106, 0.1))",
                  "linear-gradient(45deg, transparent, rgba(201, 168, 106, 0.2), transparent)",
                  "linear-gradient(45deg, rgba(201, 168, 106, 0.1), transparent, rgba(201, 168, 106, 0.1))"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
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
                See You Soon by the Shore
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Your reservation is confirmed — we look forward to welcoming you to Sea View Haven.
              </p>
              <WaveIcon className="w-10 h-10 mx-auto mb-8" />
              <Button
                variant="outline"
                size="lg"
                className="border-[#C9A86A] text-[#C9A86A] bg-transparent hover:bg-[#C9A86A] hover:text-white px-12 py-4 rounded-2xl text-lg"
                onClick={() => window.location.href = '/'}
              >
                Return to Home
              </Button>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
}
