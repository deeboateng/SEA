import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from '@/components/ScrollToTop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Index from './pages/Index';
import Stay from './pages/Stay';
import Experience from './pages/Experience';
import Location from './pages/Location';
import Contact from './pages/Contact';
import BookNow from './pages/BookNow';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/stay" element={<Stay />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/location" element={<Location />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/book-now" element={<BookNow />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
