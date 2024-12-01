import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonials from './components/Testimonials/Testimonials';
import ContactForm from './components/Contact/ContactForm';
import Venues from './components/Venues/Venues';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="bg-[#0a0a0a] text-white">
      <main>
        <ErrorBoundary>
          <Hero />
        </ErrorBoundary>
        <ErrorBoundary>
          <About />
        </ErrorBoundary>
        <ErrorBoundary>
          <Services />
        </ErrorBoundary>
        <ErrorBoundary>
          <Testimonials />
        </ErrorBoundary>
        <ErrorBoundary>
          <ContactForm />
        </ErrorBoundary>
        <ErrorBoundary>
          <Venues />
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Footer />
      </ErrorBoundary>
    </div>
  );
}

export default App;