import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './lib/i18n';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { QuickServices } from './components/QuickServices';
import { JelajahSection } from './components/JelajahSection';
import { GprKomdigi } from './components/GprKomdigi';
import { NewsSection } from './components/NewsSection';
import { Footer } from './components/Footer';
import { FloatingButtons } from './components/FloatingButtons';
import { WisataPage } from './pages/WisataPage';
import { KulinerPage } from './pages/KulinerPage';
import { FasilitasPage } from './pages/FasilitasPage';
export function App() {
  // Accessibility states
  const [highContrast, setHighContrast] = useState(false);
  const [largeText, setLargeText] = useState(false);
  const [grayscale, setGrayscale] = useState(false);
  useEffect(() => {
    const body = document.body;
    if (highContrast) body.classList.add('contrast-125');else
    body.classList.remove('contrast-125');
    if (largeText) body.classList.add('text-lg');else
    body.classList.remove('text-lg');
    if (grayscale) body.classList.add('grayscale');else
    body.classList.remove('grayscale');
  }, [highContrast, largeText, grayscale]);
  return (
    <LanguageProvider>
      <BrowserRouter>
        <div
          className={`min-h-screen bg-[#FAFAFA] font-sans text-dark selection:bg-primary selection:text-white transition-all duration-300`}>
          
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
              <main>
                  <HeroSection />
                  <QuickServices />
                  <JelajahSection />
                  <GprKomdigi />
                  <NewsSection />
                </main>
              } />
            
            <Route path="/wisata" element={<WisataPage />} />
            <Route path="/kuliner" element={<KulinerPage />} />
            <Route path="/fasilitas" element={<FasilitasPage />} />
          </Routes>
          <Footer />
          <FloatingButtons
            accessibility={{
              highContrast,
              setHighContrast,
              largeText,
              setLargeText,
              grayscale,
              setGrayscale
            }} />
          
        </div>
      </BrowserRouter>
    </LanguageProvider>);

}