import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
  {
    name: t('nav.profile'),
    href: '#',
    dropdown: [
    {
      name: t('nav.visiMisi'),
      href: 'https://madiunkota.go.id/visi-misi/'
    },
    {
      name: t('nav.sejarah'),
      href: 'https://madiunkota.go.id/sejarah/'
    },
    {
      name: t('nav.perangkatDaerah'),
      href: 'https://madiunkota.go.id/perangkat-daerah/'
    },
    {
      name: t('nav.wilayahGeografis'),
      href: 'https://madiunkota.go.id/wilayah-geografis/'
    },
    {
      name: t('nav.maskot'),
      href: 'https://madiunkota.go.id/maskot/'
    }]

  },
  {
    name: t('nav.services'),
    href: '#',
    dropdown: [
    {
      name: t('nav.layananPublik'),
      href: '#',
      subDropdown: [
      {
        name: t('nav.layananWA'),
        href: 'https://wa.me/6281135778000'
      },
      {
        name: t('nav.mbangunSwarga'),
        href: 'https://madiunkota.go.id/mbangun-swarga/'
      },
      {
        name: t('nav.ppidKota'),
        href: 'https://ppid.madiunkota.go.id/'
      },
      {
        name: t('nav.perizinan'),
        href: 'https://dpmptsp.madiunkota.go.id/'
      },
      {
        name: t('nav.pelayananKelurahan'),
        href: 'https://madiunkota.go.id/pelayanan-kelurahan/'
      },
      {
        name: t('nav.kesehatan'),
        href: 'https://dinkes.madiunkota.go.id/'
      },
      {
        name: t('nav.pelayananKependudukan'),
        href: 'https://dispendukcapil.madiunkota.go.id/'
      },
      {
        name: t('nav.ketenagakerjaan'),
        href: 'https://disnaker.madiunkota.go.id/'
      },
      {
        name: t('nav.pendidikan'),
        href: 'https://disdik.madiunkota.go.id/'
      },
      {
        name: t('nav.infoPasar'),
        href: 'https://disdag.madiunkota.go.id/'
      }]

    },
    {
      name: t('nav.layananInternal'),
      href: 'https://madiunkota.go.id/layanan-internal/'
    }]

  },
  {
    name: t('nav.government'),
    href: '#',
    dropdown: [
    {
      name: t('nav.openData'),
      href: 'https://data.madiunkota.go.id/'
    },
    {
      name: t('nav.koviOtda'),
      href: 'https://madiunkota.go.id/kovi-otda/'
    },
    {
      name: t('nav.lpse'),
      href: 'https://lpse.madiunkota.go.id/'
    },
    {
      name: t('nav.sirup'),
      href: 'https://sirup.lkpp.go.id/sirup/home/pemda/D175'
    },
    {
      name: t('nav.laporSP4N'),
      href: 'https://www.lapor.go.id/'
    },
    {
      name: t('nav.spbe'),
      href: 'https://spbe.madiunkota.go.id/'
    },
    {
      name: t('nav.smartCity'),
      href: 'https://smartcity.madiunkota.go.id/'
    },
    {
      name: t('nav.cctv'),
      href: 'https://share.google/gq1jaQ8DLaPUDCbXc'
    },
    {
      name: t('nav.jdih'),
      href: 'https://jdih.madiunkota.go.id/'
    },
    {
      name: t('nav.sirupa'),
      href: 'https://sirupa.madiunkota.go.id/'
    }]

  },
  {
    name: t('nav.latestNews'),
    href: '#',
    dropdown: [
    {
      name: t('nav.agendaKota'),
      href: 'https://madiunkota.go.id/agenda/'
    },
    {
      name: t('nav.beritaPemerintahan'),
      href: 'https://madiunkota.go.id/category/berita-pemerintahan/'
    },
    {
      name: t('nav.madiunToday'),
      href: 'https://madiunkota.go.id/category/madiun-today/'
    },
    {
      name: t('nav.suaraMadiun'),
      href: 'https://madiunkota.go.id/category/suara-madiun/'
    },
    {
      name: t('nav.ruangSatu'),
      href: 'https://madiunkota.go.id/category/ruang-satu/'
    },
    {
      name: t('nav.rilis'),
      href: 'https://madiunkota.go.id/category/rilis/'
    },
    {
      name: t('nav.pengumuman'),
      href: 'https://madiunkota.go.id/category/pengumuman/'
    },
    {
      name: t('nav.lowongan'),
      href: 'https://madiunkota.go.id/category/lowongan/'
    }]

  },
  {
    name: t('nav.ppid'),
    href: 'https://ppid.madiunkota.go.id/'
  }];

  return (
    <header className="absolute top-0 left-0 right-0 z-50 pt-6 px-4 md:px-8">
      <div
        className={`${`container mx-auto transition-all duration-300 ${isScrolled ? 'fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl bg-[#0C341C]/80 backdrop-blur-md shadow-xl' : 'w-full bg-[#0C341C]/50 backdrop-blur-sm'} rounded-full border-2 border-[#F5A623] px-6 py-3 flex items-center justify-between`} bg-[#0C341C80]`}>
        
        {/* Logo & Title */}
        <a
          href="https://madiunkota.go.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 shrink-0">
          
          <img
            src="/Lambang_Kota_Madiun.png"
            alt="Logo Kota Madiun"
            className="h-10 w-auto" />
          
          <div className="flex flex-col hidden sm:flex">
            <span className="font-poppins font-bold text-white leading-tight text-sm">
              {t('nav.govTitle')}
            </span>
            <span className="text-[10px] text-accent font-medium uppercase tracking-wider">
              {t('nav.province')}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          <a
            href="https://madiunkota.go.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors">
            
            <Home className="w-5 h-5" />
          </a>

          {navLinks.map((link) =>
          <div key={link.name} className="relative group">
              <a
              href={link.href}
              className="flex items-center gap-1 text-sm font-bold text-white hover:text-accent transition-colors py-2">
              
                {link.name}
                {link.dropdown &&
              <ChevronDown className="w-4 h-4 opacity-70" />
              }
              </a>

              {link.dropdown &&
            <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 border border-gray-100">
                  {link.dropdown.map((item) =>
              <div key={item.name} className="relative group/sub">
                      <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-primary font-medium">
                  
                        {item.name}
                        {item.subDropdown &&
                  <ChevronDown className="w-4 h-4 -rotate-90 opacity-50" />
                  }
                      </a>
                      {item.subDropdown &&
                <div className="absolute top-0 left-full w-56 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200 transform origin-left scale-95 group-hover/sub:scale-100 border border-gray-100 ml-1">
                          {item.subDropdown.map((subItem) =>
                  <a
                    key={subItem.name}
                    href={subItem.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-primary font-medium">
                    
                              {subItem.name}
                            </a>
                  )}
                        </div>
                }
                    </div>
              )}
                </div>
            }
            </div>
          )}
        </nav>

        {/* Right Actions - Language Toggle */}
        <div className="hidden lg:flex items-center gap-1 text-white font-bold text-sm">
          <button
            onClick={() => setLang('id')}
            className={`px-2 py-1 rounded-md transition-all duration-200 ${lang === 'id' ? 'bg-white/20 text-accent' : 'text-white/50 hover:text-white/80'}`}>
            
            ID
          </button>
          <span className="text-white/30">|</span>
          <button
            onClick={() => setLang('en')}
            className={`px-2 py-1 rounded-md transition-all duration-200 ${lang === 'en' ? 'bg-white/20 text-accent' : 'text-white/50 hover:text-white/80'}`}>
            
            EN
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(true)}>
          
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 bg-black/60 z-[60] lg:hidden backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)} />
          
            <motion.div
            initial={{
              x: '100%'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '100%'
            }}
            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 200
            }}
            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col lg:hidden overflow-hidden">
            
              <div className="p-5 flex items-center justify-between border-b border-gray-100 bg-primary text-white">
                <div className="flex items-center gap-3">
                  <img
                  src="/Lambang_Kota_Madiun.png"
                  alt="Logo"
                  className="h-8 w-auto" />
                
                  <span className="font-poppins font-bold text-sm">
                    {t('nav.cityName')}
                  </span>
                </div>
                <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-white/80 hover:bg-white/10 rounded-full">
                
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-4 px-4">
                <a
                href="https://madiunkota.go.id/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 py-3 px-4 rounded-lg text-gray-800 font-bold hover:bg-green-50 mb-2">
                
                  <Home className="w-5 h-5 text-primary" /> {t('nav.home')}
                </a>

                {navLinks.map((link) =>
              <div key={link.name} className="mb-2">
                    {link.dropdown ?
                <details className="group">
                        <summary className="flex items-center justify-between py-3 px-4 rounded-lg text-gray-800 font-bold hover:bg-green-50 cursor-pointer list-none">
                          {link.name}
                          <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="pl-4 pr-2 py-2 space-y-1 border-l-2 border-green-100 ml-4 mt-1">
                          {link.dropdown.map((item) =>
                    <div key={item.name}>
                              {item.subDropdown ?
                      <details className="group/sub">
                                  <summary className="flex items-center justify-between py-2 px-4 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 cursor-pointer list-none">
                                    {item.name}
                                    <ChevronDown className="w-3 h-3 transition-transform group-open/sub:rotate-180" />
                                  </summary>
                                  <div className="pl-4 py-1 space-y-1 border-l border-gray-200 ml-4">
                                    {item.subDropdown.map((subItem) =>
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block py-2 px-4 rounded-lg text-sm text-gray-500 hover:text-primary hover:bg-green-50">
                            
                                        {subItem.name}
                                      </a>
                          )}
                                  </div>
                                </details> :

                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block py-2 px-4 rounded-lg text-sm text-gray-600 font-medium hover:bg-gray-50 hover:text-primary">
                        
                                  {item.name}
                                </a>
                      }
                            </div>
                    )}
                        </div>
                      </details> :

                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block py-3 px-4 rounded-lg text-gray-800 font-bold hover:bg-green-50">
                  
                        {link.name}
                      </a>
                }
                  </div>
              )}
              </div>

              <div className="p-5 border-t border-gray-100 bg-gray-50 flex justify-center gap-4">
                <button
                onClick={() => setLang('id')}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${lang === 'id' ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
                
                  Indonesia
                </button>
                <button
                onClick={() => setLang('en')}
                className={`px-4 py-2 rounded-lg font-bold text-sm transition-all ${lang === 'en' ? 'bg-primary text-white' : 'bg-white text-gray-600 border border-gray-200'}`}>
                
                  English
                </button>
              </div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </header>);

}