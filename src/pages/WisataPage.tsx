import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Star, ExternalLink, Filter, X } from 'lucide-react';
import { useLanguage } from '../lib/i18n';
interface TouristSpot {
  id: string;
  name: string;
  categoryKey: string;
  descKey: string;
  mapsUrl: string;
  rating: number;
}
const touristSpots: TouristSpot[] = [
// Taman Kota & Ruang Publik
{
  id: 'alun-alun',
  name: 'Alun-Alun Kota Madiun',
  categoryKey: 'wisata.cat.taman',
  descKey: 'wisata.desc.alun-alun',
  mapsUrl: 'https://www.google.com/maps?q=Alun-Alun+Kota+Madiun',
  rating: 4.6
},
{
  id: 'psc',
  name: 'Pahlawan Street Center (PSC)',
  categoryKey: 'wisata.cat.taman',
  descKey: 'wisata.desc.psc',
  mapsUrl: 'https://www.google.com/maps?q=Pahlawan+Street+Center+Madiun',
  rating: 4.7
},
{
  id: 'bantaran-kali',
  name: 'Taman Bantaran Kali Madiun',
  categoryKey: 'wisata.cat.taman',
  descKey: 'wisata.desc.bantaran-kali',
  mapsUrl: 'https://www.google.com/maps?q=Taman+Bantaran+Kali+Madiun',
  rating: 4.5
},
{
  id: 'sumber-umis',
  name: 'Taman Sumber Umis',
  categoryKey: 'wisata.cat.taman',
  descKey: 'wisata.desc.sumber-umis',
  mapsUrl: 'https://www.google.com/maps?q=Taman+Sumber+Umis+Madiun',
  rating: 4.4
},
// Wisata Keluarga & Hiburan
{
  id: 'sun-city-theme-park',
  name: 'Sun City Theme Park & Waterpark',
  categoryKey: 'wisata.cat.keluarga',
  descKey: 'wisata.desc.sun-city-theme-park',
  mapsUrl: 'https://www.google.com/maps?q=Sun+City+Theme+Park+Madiun',
  rating: 4.8
},
{
  id: 'suncity-mall',
  name: 'Suncity Mall Madiun',
  categoryKey: 'wisata.cat.keluarga',
  descKey: 'wisata.desc.suncity-mall',
  mapsUrl: 'https://www.google.com/maps?q=Suncity+Mall+Madiun',
  rating: 4.6
},
{
  id: 'nusantara-edupark',
  name: 'Nusantara Edupark',
  categoryKey: 'wisata.cat.keluarga',
  descKey: 'wisata.desc.nusantara-edupark',
  mapsUrl: 'https://www.google.com/maps?q=Nusantara+Edupark+Madiun',
  rating: 4.5
},
// Wisata Sejarah & Ikon Kota
{
  id: 'tugu-pendekar',
  name: 'Tugu Pendekar',
  categoryKey: 'wisata.cat.sejarah',
  descKey: 'wisata.desc.tugu-pendekar',
  mapsUrl: 'https://www.google.com/maps?q=Tugu+Pendekar+Madiun',
  rating: 4.7
},
{
  id: 'patung-pendekar',
  name: 'Patung Pendekar Kota Madiun',
  categoryKey: 'wisata.cat.sejarah',
  descKey: 'wisata.desc.patung-pendekar',
  mapsUrl: 'https://www.google.com/maps?q=Patung+Pendekar+Madiun',
  rating: 4.6
},
{
  id: 'merlion',
  name: 'Patung Merlion Madiun',
  categoryKey: 'wisata.cat.sejarah',
  descKey: 'wisata.desc.merlion',
  mapsUrl: 'https://www.google.com/maps?q=Merlion+Madiun',
  rating: 4.5
},
// Wisata Religi
{
  id: 'masjid-agung',
  name: 'Masjid Agung Baitul Hakim',
  categoryKey: 'wisata.cat.religi',
  descKey: 'wisata.desc.masjid-agung',
  mapsUrl: 'https://www.google.com/maps?q=Masjid+Agung+Baitul+Hakim+Madiun',
  rating: 4.8
},
{
  id: 'masjid-kuno-taman',
  name: 'Masjid Kuno Taman',
  categoryKey: 'wisata.cat.religi',
  descKey: 'wisata.desc.masjid-kuno-taman',
  mapsUrl: 'https://www.google.com/maps?q=Masjid+Kuno+Taman+Madiun',
  rating: 4.7
},
{
  id: 'gereja-cornelius',
  name: 'Gereja Katolik Santo Cornelius',
  categoryKey: 'wisata.cat.religi',
  descKey: 'wisata.desc.gereja-cornelius',
  mapsUrl: 'https://www.google.com/maps?q=Gereja+Santo+Cornelius+Madiun',
  rating: 4.7
},
// Spot Kekinian
{
  id: 'psc-kekinian',
  name: 'PSC',
  categoryKey: 'wisata.cat.kekinian',
  descKey: 'wisata.desc.psc-kekinian',
  mapsUrl: 'https://www.google.com/maps?q=Pahlawan+Street+Center+Madiun',
  rating: 4.7
},
{
  id: 'bantaran-kekinian',
  name: 'Bantaran Kali',
  categoryKey: 'wisata.cat.kekinian',
  descKey: 'wisata.desc.bantaran-kekinian',
  mapsUrl: 'https://www.google.com/maps?q=Taman+Bantaran+Kali+Madiun',
  rating: 4.6
},
{
  id: 'tugu-kekinian',
  name: 'Tugu Pendekar',
  categoryKey: 'wisata.cat.kekinian',
  descKey: 'wisata.desc.tugu-kekinian',
  mapsUrl: 'https://www.google.com/maps?q=Tugu+Pendekar+Madiun',
  rating: 4.7
},
{
  id: 'suncity-kekinian',
  name: 'Suncity',
  categoryKey: 'wisata.cat.kekinian',
  descKey: 'wisata.desc.suncity-kekinian',
  mapsUrl: 'https://www.google.com/maps?q=Suncity+Mall+Madiun',
  rating: 4.6
}];

const categoryKeys = [
{
  key: 'all',
  labelKey: 'page.allCategories'
},
{
  key: 'wisata.cat.taman',
  labelKey: 'wisata.cat.taman'
},
{
  key: 'wisata.cat.keluarga',
  labelKey: 'wisata.cat.keluarga'
},
{
  key: 'wisata.cat.sejarah',
  labelKey: 'wisata.cat.sejarah'
},
{
  key: 'wisata.cat.religi',
  labelKey: 'wisata.cat.religi'
},
{
  key: 'wisata.cat.kekinian',
  labelKey: 'wisata.cat.kekinian'
}];

export function WisataPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const filteredSpots = touristSpots.
  filter((spot) => {
    const matchesSearch = spot.name.
    toLowerCase().
    includes(searchQuery.toLowerCase());
    const matchesCategory =
    selectedCategory === 'all' || spot.categoryKey === selectedCategory;
    return matchesSearch && matchesCategory;
  }).
  sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.name.localeCompare(b.name);
  });
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#166b30] py-12 mb-12">
        <div className="container mx-auto px-4 md:px-8">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.6
            }}
            className="text-center">
            
            <h1 className="font-poppins text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
              {t('wisata.title')}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              {t('wisata.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-primary/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('wisata.searchPlaceholder')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium" />
              
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-[#166b30] transition-colors">
              
              <Filter className="w-5 h-5" />
              {t('page.filter')}
            </button>

            {/* Desktop Filters */}
            <div className="hidden lg:flex gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium bg-white cursor-pointer">
                
                {categoryKeys.map((cat) =>
                <option key={cat.key} value={cat.key}>
                    {t(cat.labelKey)}
                  </option>
                )}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
                className="px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium bg-white cursor-pointer">
                
                <option value="rating">{t('page.sortRating')}</option>
                <option value="name">{t('page.sortName')}</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters Dropdown */}
          {showFilters &&
          <motion.div
            initial={{
              opacity: 0,
              height: 0
            }}
            animate={{
              opacity: 1,
              height: 'auto'
            }}
            exit={{
              opacity: 0,
              height: 0
            }}
            className="lg:hidden mt-4 pt-4 border-t border-gray-200 space-y-3">
            
              <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium bg-white">
              
                {categoryKeys.map((cat) =>
              <option key={cat.key} value={cat.key}>
                    {t(cat.labelKey)}
                  </option>
              )}
              </select>

              <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'name' | 'rating')}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none font-medium bg-white">
              
                <option value="rating">{t('page.sortRating')}</option>
                <option value="name">{t('page.sortName')}</option>
              </select>
            </motion.div>
          }
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600 font-medium">
            {t('wisata.showing')}{' '}
            <span className="text-primary font-bold">
              {filteredSpots.length}
            </span>{' '}
            {t('wisata.destinations')}
          </p>
        </div>

        {/* Tourist Spots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpots.map((spot, index) =>
          <motion.div
            key={spot.id}
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.05
            }}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary overflow-hidden group">
            
              {/* Category Badge */}
              <div className="bg-gradient-to-r from-primary to-[#166b30] px-4 py-2">
                <p className="text-white text-xs font-bold uppercase tracking-wide">
                  {t(spot.categoryKey)}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Name */}
                <a
                href={spot.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block mb-3 group/link">
                
                  <h3 className="font-poppins text-xl font-bold text-dark group-hover/link:text-primary transition-colors flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <span className="flex-1">{spot.name}</span>
                  </h3>
                </a>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) =>
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.floor(spot.rating) ? 'fill-accent text-accent' : 'text-gray-300'}`} />

                  )}
                  </div>
                  <span className="font-bold text-dark">
                    {spot.rating.toFixed(1)}
                  </span>
                  <span className="text-gray-500 text-sm">/ 5</span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {t(spot.descKey)}
                </p>

                {/* Button */}
                <a
                href={spot.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#166b30] text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:scale-[1.02]">
                
                  <ExternalLink className="w-4 h-4" />
                  {t('wisata.viewMaps')}
                </a>
              </div>
            </motion.div>
          )}
        </div>

        {/* No Results */}
        {filteredSpots.length === 0 &&
        <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="font-poppins text-2xl font-bold text-gray-700 mb-2">
              {t('page.noResults')}
            </h3>
            <p className="text-gray-500">{t('page.noResultsHint')}</p>
          </div>
        }
      </div>
    </div>);

}