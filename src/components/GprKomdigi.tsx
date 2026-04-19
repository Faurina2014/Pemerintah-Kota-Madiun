import React from 'react';
import { motion } from 'framer-motion';
import { InteractiveMap } from './InteractiveMap';
import { useLanguage } from '../lib/i18n';
export function GprKomdigi() {
  const { t } = useLanguage();
  const articles = [t('demo.article1'), t('demo.article2'), t('demo.article3')];
  return (
    <section className="py-16 bg-white relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Left - Interactive Map */}
          <div className="w-full lg:w-1/3 min-h-[450px]">
            <InteractiveMap />
          </div>

          {/* Center - Demographics */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <div className="border border-primary rounded-full py-2 px-6 text-center text-primary font-bold text-sm">
              {t('demo.title')}
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-gray-700">
                  {t('demo.density')}
                </span>
                <span className="text-primary">📊</span>
              </div>
              <div className="text-2xl font-black text-dark mb-1">7.388</div>
              <div className="text-xs text-gray-500 mb-2">
                {t('demo.densityUnit')}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="bg-primary w-[70%] h-full"></div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-gray-700">
                  {t('demo.genderRatio')}
                </span>
                <span className="text-purple-500">👥</span>
              </div>
              <div className="flex h-6 rounded-md overflow-hidden text-xs font-bold text-white text-center leading-6">
                <div className="bg-pink-500 w-[50.9%]">50.9% ♀</div>
                <div className="bg-blue-500 w-[49.1%]">49.1% ♂</div>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl p-4">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-bold text-gray-700">
                  {t('demo.productiveAge')}
                </span>
                <span className="text-green-500">🎓</span>
              </div>
              <div className="text-2xl font-black text-dark mb-1">71,18%</div>
              <div className="text-xs text-gray-500 mb-2">
                {t('demo.years')}
              </div>
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-1">
                <div className="bg-green-500 w-[71.18%] h-full"></div>
              </div>
              <div className="text-[10px] text-green-600 font-bold">
                {t('demo.highCategory')}
              </div>
            </div>
          </div>

          {/* Right - GPR Komdigi */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <a
              href="https://gpr.komdigi.go.id/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-green-800 text-accent font-poppins font-black text-2xl py-4 px-6 rounded-full text-center transition-colors shadow-md border-4 border-accent">
              
              GPR KOMDIGI
            </a>

            <div className="border-4 border-accent rounded-2xl p-1 flex-1 overflow-hidden bg-white">
              <div className="h-full overflow-y-auto pr-2 space-y-4 p-3">
                {articles.map((articleText, idx) =>
                <div
                  key={idx}
                  className="border-b border-gray-100 pb-4 last:border-0">
                  
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-blue-800">
                        {t('demo.article')}
                      </span>
                      <span className="text-[10px] text-gray-500">
                        06-03-2026 10:08
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-12 h-12 bg-blue-900 rounded-lg shrink-0 flex items-center justify-center">
                        <div className="w-6 h-4 bg-white rounded-sm"></div>
                      </div>
                      <p className="text-sm font-medium text-gray-800 leading-snug">
                        {articleText}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}