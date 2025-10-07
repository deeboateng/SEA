# Sea View Haven Website Development Plan

## Project Overview
Building a luxury-inspired, multi-page website for Sea View Haven hostel with cinematic design, smooth animations, and professional aesthetics.

## Design System
- **Colors**: Deep Ocean Blue (#012E40), Sandstone Beige (#E5D3B3), Pearl White (#FAFAFA), Champagne Gold (#C9A86A), Soft Coral (#E3967C)
- **Typography**: Playfair Display (headings), Inter (body), Cinzel Decorative (accents)
- **Theme**: Cinematic coastal luxury with smooth animations and parallax effects

## File Structure Plan

### 1. Core Components (src/components/)
- **Navbar.tsx** - Advanced navbar with scroll behaviors, transparency effects, mobile optimizations
- **Footer.tsx** - Elegant footer with brand signature and contact info
- **HeroSection.tsx** - Reusable hero component with slideshow functionality
- **WaveIcon.tsx** - Animated wave motif for brand consistency

### 2. Pages (src/pages/)
- **Index.tsx** - Home page with cinematic hero, about, stay preview, experience highlight
- **Stay.tsx** - Accommodations showcase with room details and booking
- **Experience.tsx** - Lifestyle and activities presentation
- **Location.tsx** - Interactive location with map and nearby attractions
- **Contact.tsx** - Contact form and information
- **BookNow.tsx** - Booking interface and confirmation

### 3. Utilities (src/lib/)
- **animations.ts** - GSAP/Framer Motion animation utilities
- **constants.ts** - Design tokens and content constants

### 4. Assets (public/assets/)
- Copy all provided images to public/assets/images/
- Organize by category (rooms, exterior, lifestyle, etc.)

## Key Features to Implement
1. **Advanced Navbar**: Transparency on hero, hide/show on scroll, mobile menu button positioning
2. **Hero Slideshow**: Auto-rotating background with Ken Burns effects
3. **Smooth Animations**: Scroll-triggered reveals, parallax effects, micro-interactions
4. **Responsive Design**: Mobile-first approach with luxury aesthetics
5. **Interactive Elements**: Hover effects, form animations, map integration

## Implementation Priority
1. Setup routing and basic page structure
2. Create shared components (Navbar, Footer, WaveIcon)
3. Implement Home page with hero slideshow
4. Build remaining pages with consistent design language
5. Add animations and micro-interactions
6. Mobile optimization and testing