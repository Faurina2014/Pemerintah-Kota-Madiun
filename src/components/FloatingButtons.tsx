import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  Camera,
  Phone,
  Plus,
  Accessibility,
  Eye,
  Type,
  Image as ImageIcon } from
'lucide-react';
import { useLanguage } from '../lib/i18n';
interface AccessibilityProps {
  highContrast: boolean;
  setHighContrast: (v: boolean) => void;
  largeText: boolean;
  setLargeText: (v: boolean) => void;
  grayscale: boolean;
  setGrayscale: (v: boolean) => void;
}
export function FloatingButtons({
  accessibility


}: {accessibility: AccessibilityProps;}) {
  const { t } = useLanguage();
  const [isEmergencyExpanded, setIsEmergencyExpanded] = useState(false);
  const [isAccessibilityExpanded, setIsAccessibilityExpanded] = useState(false);
  return (
    <>
      {/* RIGHT SIDE - Emergency Buttons */}
      <div className="fixed right-4 bottom-24 z-50 flex flex-col gap-3 items-end">
        <div className="relative flex flex-col items-end">
          <AnimatePresence>
            {isEmergencyExpanded &&
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.8
              }}
              className="absolute bottom-16 right-0 flex flex-col gap-2 mb-2">
              
                <a
                href="https://wa.me/6281135778000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>{' '}
                  {t('emergency.awakSigap')}
                </a>
                <a
                href="tel:113"
                className="bg-white text-red-600 px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>{' '}
                  {t('emergency.damkar')}
                </a>
                <a
                href="tel:110"
                className="bg-white text-blue-600 px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>{' '}
                  {t('emergency.polisi')}
                </a>
                <a
                href="tel:118"
                className="bg-white text-red-500 px-4 py-2 rounded-full shadow-md font-bold text-sm whitespace-nowrap hover:bg-gray-50 flex items-center gap-2">
                
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>{' '}
                  {t('emergency.ambulans')}
                </a>
              </motion.div>
            }
          </AnimatePresence>

          <button
            onClick={() => setIsEmergencyExpanded(!isEmergencyExpanded)}
            className={`w-14 h-14 bg-accent hover:bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg transition-transform ${isEmergencyExpanded ? 'rotate-45' : ''}`}>
            
            <Plus className="w-8 h-8" />
          </button>
        </div>
      </div>

      {/* LEFT SIDE - Accessibility Button */}
      <div className="fixed left-4 bottom-24 z-50 flex flex-col items-start">
        <div className="relative flex flex-col items-start">
          <AnimatePresence>
            {isAccessibilityExpanded &&
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
                scale: 0.8
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1
              }}
              exit={{
                opacity: 0,
                y: 20,
                scale: 0.8
              }}
              className="absolute bottom-16 left-0 flex flex-col gap-2 mb-2 bg-white p-3 rounded-xl shadow-xl border border-gray-100 w-48">
              
                <h4 className="text-xs font-bold text-gray-500 mb-2 uppercase">
                  {t('a11y.title')}
                </h4>

                <button
                onClick={() =>
                accessibility.setHighContrast(!accessibility.highContrast)
                }
                className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${accessibility.highContrast ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                
                  <Eye className="w-4 h-4" /> {t('a11y.highContrast')}
                </button>

                <button
                onClick={() =>
                accessibility.setLargeText(!accessibility.largeText)
                }
                className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${accessibility.largeText ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                
                  <Type className="w-4 h-4" /> {t('a11y.largeText')}
                </button>

                <button
                onClick={() =>
                accessibility.setGrayscale(!accessibility.grayscale)
                }
                className={`flex items-center gap-3 w-full text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${accessibility.grayscale ? 'bg-primary text-white' : 'hover:bg-gray-100 text-gray-700'}`}>
                
                  <ImageIcon className="w-4 h-4" /> {t('a11y.grayscale')}
                </button>
              </motion.div>
            }
          </AnimatePresence>

          <button
            onClick={() => setIsAccessibilityExpanded(!isAccessibilityExpanded)}
            className="w-14 h-14 bg-accent hover:bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg transition-transform hover:scale-105 border-2 border-white">
            
            <Accessibility className="w-8 h-8" />
          </button>
        </div>
      </div>
    </>);

}