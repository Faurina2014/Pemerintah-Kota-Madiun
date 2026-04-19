import React from 'react';
import { motion } from 'framer-motion';
import { Eye } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
export function NewsSection() {
  const { t } = useLanguage();
  const beritaPemerintahan = [
  {
    id: 1,
    title: t('news.gov1Title'),
    excerpt: t('news.gov1Excerpt'),
    image: "/download.jpg"

  },
  {
    id: 2,
    title: t('news.gov2Title'),
    excerpt: t('news.gov2Excerpt'),
    image: "/0809_Kota_Madiun_Sabet_Penghargaan_KLA_Peringkat_Utama_Tahun_2025_1_result_1754744020.jpg"

  }];

  const madiunToday = [
  {
    id: 1,
    title: t('news.today1Title'),
    excerpt: t('news.today1Excerpt'),
    image: "/pecel-pincuk-4.jpg"

  },
  {
    id: 2,
    title: t('news.today2Title'),
    excerpt: t('news.today2Excerpt'),
    image: "/carnival-3.jpg"

  }];

  return (
    <section className="py-16 bg-[#e8f0e0] relative overflow-hidden">
      {/* Mascot RELO top right */}
      <div className="absolute top-0 right-0 w-48 md:w-64 opacity-20 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <img
          src="/maskot_KAI.png"
          alt=""
          className="w-full h-auto" />
        
      </div>

      {/* Mascot RASA bottom right */}
      <div className="absolute bottom-0 right-0 w-56 md:w-80 opacity-30 pointer-events-none transform translate-x-1/4 translate-y-1/4">
        <img
          src="/maskot_pecel.png"
          alt=""
          className="w-full h-auto" />
        
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <h2 className="font-poppins text-5xl md:text-7xl font-black text-primary text-center mb-12 tracking-tight">
          {t('news.title')}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Column - Berita Pemerintahan */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-poppins text-2xl md:text-3xl font-black text-primary flex items-center gap-2">
                {t('news.govNews')}
              </h3>
              <a
                href="https://madiunkota.go.id/category/berita-pemerintahan/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-secondary text-white px-4 py-2 rounded-full font-bold text-xs transition-colors flex items-center gap-2 whitespace-nowrap bg-[#6BA589]">
                
                <Eye className="w-4 h-4" /> {t('news.viewAll')}
              </a>
            </div>

            <div className="space-y-6">
              {beritaPemerintahan.map((news, index) =>
              <motion.article
                key={news.id}
                initial={{
                  opacity: 0,
                  x: -30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary flex flex-col sm:flex-row group">
                
                  <div className="w-full sm:w-40 h-40 sm:h-auto shrink-0 relative overflow-hidden">
                    <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover absolute inset-0" />
                  
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-5 flex-1">
                    <h4 className="font-poppins text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {news.excerpt}
                    </p>
                  </div>
                </motion.article>
              )}
            </div>
          </div>

          {/* Right Column - Madiun Today */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-poppins text-2xl md:text-3xl font-black text-primary flex items-center gap-2">
                {t('news.madiunToday')}
              </h3>
              <a
                href="https://madiunkota.go.id/category/madiun-today/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:bg-secondary text-white px-4 py-2 rounded-full font-bold text-xs transition-colors flex items-center gap-2 whitespace-nowrap bg-[#6BA589]">
                
                <Eye className="w-4 h-4" /> {t('news.viewAll')}
              </a>
            </div>

            <div className="space-y-6">
              {madiunToday.map((news, index) =>
              <motion.article
                key={news.id}
                initial={{
                  opacity: 0,
                  x: 30
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary flex flex-col sm:flex-row group">
                
                  <div className="w-full sm:w-40 h-40 sm:h-auto shrink-0 relative overflow-hidden">
                    <img
                    src={news.image}
                    alt={news.title}
                    className="w-full h-full object-cover absolute inset-0" />
                  
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-5 flex-1">
                    <h4 className="font-poppins text-lg font-bold text-dark mb-2 line-clamp-2 group-hover:text-primary transition-colors">
                      {news.title}
                    </h4>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {news.excerpt}
                    </p>
                  </div>
                </motion.article>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}