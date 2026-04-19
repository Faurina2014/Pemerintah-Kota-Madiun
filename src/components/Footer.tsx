import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="bg-primary text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-light to-accent"></div>

      {/* Mascot RASA bottom right */}
      <div className="absolute bottom-0 right-0 w-64 md:w-96 opacity-20 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <img
          src="/maskot_pecel.png"
          alt=""
          className="w-full h-auto" />
        
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Column 1: About */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <img
                src="/Lambang_Kota_Madiun.png"
                alt="Lambang Kota Madiun"
                className="h-16 w-auto drop-shadow-md" />
              
              <div className="flex flex-col">
                <span className="font-poppins font-black text-white text-xl leading-tight">
                  {t('footer.cityName')}
                </span>
                <span className="text-sm text-green-100 font-medium">
                  {t('footer.govName')}
                </span>
                <span className="font-poppins font-bold text-accent text-sm leading-tight">
                  {t('footer.motto')}
                </span>
              </div>
            </div>

            <p className="text-green-100 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>

            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/pemkotmadiun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/pemkotmadiun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/pemkotmadiun"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24">
                  
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Hubungi Kami */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-6 text-accent">
              {t('footer.contactUs')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-green-100 text-sm">
                  Jl. Pahlawan No. 37, Kota Madiun, Jawa Timur
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="tel:03514640"
                  className="text-green-100 text-sm hover:text-white transition-colors">
                  
                  (0351) 464085
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a
                  href="mailto:info@madiunkota.go.id"
                  className="text-green-100 text-sm hover:text-white transition-colors">
                  
                  info@madiunkota.go.id
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Emergency */}
          <div>
            <h3 className="font-poppins font-bold text-xl mb-6 text-accent">
              {t('footer.emergency')}
            </h3>
            <div className="space-y-3">
              <a
                href="tel:112"
                className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                
                <span className="text-green-100 text-sm font-medium">
                  {t('footer.callCenter')}
                </span>
                <span className="font-poppins font-black text-accent text-lg">
                  112
                </span>
              </a>
              <a
                href="tel:118"
                className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                
                <span className="text-green-100 text-sm font-medium">
                  {t('footer.ambulance')}
                </span>
                <span className="font-poppins font-black text-accent text-lg">
                  118
                </span>
              </a>
              <a
                href="tel:110"
                className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                
                <span className="text-green-100 text-sm font-medium">
                  {t('footer.police')}
                </span>
                <span className="font-poppins font-black text-accent text-lg">
                  110
                </span>
              </a>
              <a
                href="tel:113"
                className="flex items-center justify-between p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors">
                
                <span className="text-green-100 text-sm font-medium">
                  {t('footer.fireDept')}
                </span>
                <span className="font-poppins font-black text-accent text-lg">
                  113
                </span>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-green-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-green-200 text-sm text-center md:text-left">
            {t('footer.copyright')}
          </p>
          <div className="flex items-center gap-4 text-sm text-green-200">
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.privacy')}
            </a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>);

}