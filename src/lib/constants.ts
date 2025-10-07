// Design tokens and constants for Sea View Haven
export const COLORS = {
  deepOceanBlue: '#012E40',
  sandstoneBeige: '#E5D3B3',
  pearlWhite: '#FAFAFA',
  champagneGold: '#C9A86A',
  softCoral: '#E3967C',
} as const;

export const FONTS = {
  heading: 'Playfair Display',
  body: 'Inter',
  accent: 'Cinzel Decorative',
} as const;

export const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'Stay', path: '/stay' },
  { name: 'Experience', path: '/experience' },
  { name: 'Location', path: '/location' },
  { name: 'Contact', path: '/contact' },
] as const;

export const HERO_IMAGES = [
  '/assets/images/Multi-Story-Building-With-Pool-And-Parking-Area-drone-view.jpg',
  '/assets/images/Multi-Story-Building-of-sea-view-haven-With-City-View-And-Palm-Trees-drone-view.jpg',
  '/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg',
] as const;

export const ROOM_TYPES = [
  {
    id: 'mixed-dormitory',
    name: 'Mixed Dormitory Room',
    description: 'Social comfort with sea breeze views',
    image: '/assets/images/Mixed Dormitory Room.jpg',
    price: 'From $45',
  },
  {
    id: 'double-room',
    name: 'Double Room',
    description: 'Intimate and peaceful, perfect for couples',
    image: '/assets/images/double-room.jpg',
    price: 'From $85',
  },
  {
    id: 'balcony-room',
    name: 'Balcony Room',
    description: 'Private terrace with panoramic views',
    image: '/assets/images/Balcony-With-Seating-Plants-And-Pool-View.jpg',
    price: 'From $120',
  },
] as const;

export const AMENITIES = [
  { icon: 'waves', name: 'Beachfront Access' },
  { icon: 'wifi', name: 'Free Wi-Fi' },
  { icon: 'coffee', name: 'Continental Breakfast' },
  { icon: 'car', name: 'Private Parking' },
  { icon: 'wine', name: 'Bar & Lounge' },
] as const;

export const NEARBY_ATTRACTIONS = [
  { name: 'Labadi Beach', distance: '400m', description: 'Feel the pulse of Accra\'s most iconic shoreline', icon: 'waves' },
  { name: 'La Palm Casino', distance: '500m', description: 'Entertainment and dining destination', icon: 'dice' },
  { name: 'The Loom – Artists Alliance Gallery', distance: '1.4km', description: 'Contemporary art and culture', icon: 'palette' },
  { name: 'Independence Arch', distance: '5.6km', description: 'Historic landmark and symbol of Ghana', icon: 'landmark' },
  { name: 'Kwame Nkrumah Memorial Park', distance: '6.6km', description: 'Memorial park and mausoleum', icon: 'tree' },
  { name: 'Kotoka International Airport', distance: '12km', description: 'International gateway to Ghana', icon: 'plane' },
] as const;
