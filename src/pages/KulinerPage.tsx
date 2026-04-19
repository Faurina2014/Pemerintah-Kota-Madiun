import React, { useState, Component } from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  Utensils,
  Star,
  ExternalLink,
  Filter,
  Coffee,
  Cookie,
  Store } from
'lucide-react';
import { useLanguage } from '../lib/i18n';
interface KulinerItem {
  id: string;
  nama: string;
  categoryKey: string;
  descKey: string;
  mapsUrl: string | null;
  rating: number;
  unggulan: boolean;
  badgeKey?: string;
}
const kulinerItems: KulinerItem[] = [
// Makanan Khas Utama
{
  id: 'pecel-madiun',
  nama: 'Pecel Madiun',
  categoryKey: 'kuliner.cat.khas',
  descKey: 'kuliner.desc.pecel-madiun',
  mapsUrl: null,
  rating: 4.9,
  unggulan: true,
  badgeKey: 'kuliner.badge.ikon'
},
{
  id: 'nasi-jotos',
  nama: 'Nasi Jotos',
  categoryKey: 'kuliner.cat.khas',
  descKey: 'kuliner.desc.nasi-jotos',
  mapsUrl: null,
  rating: 4.7,
  unggulan: false
},
{
  id: 'lontong-tahu-telur',
  nama: 'Lontong Tahu Telur',
  categoryKey: 'kuliner.cat.khas',
  descKey: 'kuliner.desc.lontong-tahu-telur',
  mapsUrl: null,
  rating: 4.6,
  unggulan: false
},
{
  id: 'soto-madiun',
  nama: 'Soto Madiun',
  categoryKey: 'kuliner.cat.khas',
  descKey: 'kuliner.desc.soto-madiun',
  mapsUrl: null,
  rating: 4.7,
  unggulan: false
},
{
  id: 'rawon',
  nama: 'Rawon',
  categoryKey: 'kuliner.cat.khas',
  descKey: 'kuliner.desc.rawon',
  mapsUrl: null,
  rating: 4.8,
  unggulan: false
},
// Tempat Makan & Kuliner Populer
{
  id: 'warung-pecel-pojok',
  nama: 'Warung Pecel Pojok',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.warung-pecel-pojok',
  mapsUrl: 'https://www.google.com/maps?q=Warung+Pecel+Pojok+Madiun',
  rating: 4.8,
  unggulan: true,
  badgeKey: 'kuliner.badge.favorit'
},
{
  id: 'pecel-99',
  nama: 'Pecel 99',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.pecel-99',
  mapsUrl: 'https://www.google.com/maps?q=Pecel+99+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'pecel-yu-gembrot',
  nama: 'Pecel Yu Gembrot',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.pecel-yu-gembrot',
  mapsUrl: 'https://www.google.com/maps?q=Pecel+Yu+Gembrot+Madiun',
  rating: 4.7,
  unggulan: false
},
{
  id: 'soto-ayam-kondang',
  nama: 'Soto Ayam Kondang',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.soto-ayam-kondang',
  mapsUrl: 'https://www.google.com/maps?q=Soto+Kondang+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'depot-tjanang',
  nama: 'Depot Tjanang',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.depot-tjanang',
  mapsUrl: 'https://www.google.com/maps?q=Tjanang+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'pak-to',
  nama: 'Pak To',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.pak-to',
  mapsUrl: 'https://www.google.com/maps?q=Pak+To+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'pak-poen',
  nama: 'Pak Poen',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.pak-poen',
  mapsUrl: 'https://www.google.com/maps?q=Pak+Poen+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'sleko-food-court',
  nama: 'Sleko Food Court',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.sleko-food-court',
  mapsUrl: 'https://www.google.com/maps?q=Sleko+Food+Court+Madiun',
  rating: 4.4,
  unggulan: false
},
{
  id: 'accord',
  nama: 'Accord',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.accord',
  mapsUrl: 'https://www.google.com/maps?q=Accord+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'ayam-goreng-pemuda',
  nama: 'Ayam Goreng Pemuda',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.ayam-goreng-pemuda',
  mapsUrl: 'https://www.google.com/maps?q=Ayam+Goreng+Pemuda+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'leko',
  nama: 'Leko',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.leko',
  mapsUrl: 'https://www.google.com/maps?q=Leko+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'super-bakso',
  nama: 'Super Bakso',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.super-bakso',
  mapsUrl: 'https://www.google.com/maps?q=Super+Bakso+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'mie-gacoan',
  nama: 'Mie Gacoan',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.mie-gacoan',
  mapsUrl: 'https://www.google.com/maps?q=Gacoan+Madiun',
  rating: 4.4,
  unggulan: false
},
{
  id: 'wizzmie',
  nama: 'Wizzmie',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.wizzmie',
  mapsUrl: 'https://www.google.com/maps?q=Wizzmie+Madiun',
  rating: 4.4,
  unggulan: false
},
{
  id: 'ayam-bakar-bg',
  nama: 'Ayam Bakar BG',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.ayam-bakar-bg',
  mapsUrl: 'https://www.google.com/maps?q=Ayam+Bakar+BG+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'lombok-ijo',
  nama: 'Lombok Ijo',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.lombok-ijo',
  mapsUrl: 'https://www.google.com/maps?q=Lombok+Ijo+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'nawasena',
  nama: 'Nawasena',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.nawasena',
  mapsUrl: 'https://www.google.com/maps?q=Nawasena+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'kemangi',
  nama: 'Kemangi',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.kemangi',
  mapsUrl: 'https://www.google.com/maps?q=Kemangi+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'srasadesa',
  nama: 'Srasadesa',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.srasadesa',
  mapsUrl: 'https://www.google.com/maps?q=Srasadesa+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'ss-spesial-sambal',
  nama: 'SS Spesial Sambal',
  categoryKey: 'kuliner.cat.populer',
  descKey: 'kuliner.desc.ss-spesial-sambal',
  mapsUrl: 'https://www.google.com/maps?q=Spesial+Sambal+Madiun',
  rating: 4.5,
  unggulan: false
},
// Kuliner Malam & Street Food
{
  id: 'psc-malam',
  nama: 'Pahlawan Street Center (PSC)',
  categoryKey: 'kuliner.cat.malam',
  descKey: 'kuliner.desc.psc-malam',
  mapsUrl: 'https://www.google.com/maps?q=PSC+Madiun',
  rating: 4.7,
  unggulan: false
},
{
  id: 'bantaran-kali-malam',
  nama: 'Bantaran Kali Madiun',
  categoryKey: 'kuliner.cat.malam',
  descKey: 'kuliner.desc.bantaran-kali-malam',
  mapsUrl: 'https://www.google.com/maps?q=Bantaran+Kali+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'alun-alun-malam',
  nama: 'Alun-Alun Kota Madiun',
  categoryKey: 'kuliner.cat.malam',
  descKey: 'kuliner.desc.alun-alun-malam',
  mapsUrl: 'https://www.google.com/maps?q=Alun-Alun+Madiun',
  rating: 4.5,
  unggulan: false
},
// Cafe & Tempat Nongkrong
{
  id: 'bento-kopi',
  nama: 'Bento Kopi',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.bento-kopi',
  mapsUrl: 'https://www.google.com/maps?q=Bento+Kopi+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'wow-cafe',
  nama: 'WOW Cafe',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.wow-cafe',
  mapsUrl: 'https://www.google.com/maps?q=Wow+Cafe+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'kopi-kenangan',
  nama: 'Kopi Kenangan',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.kopi-kenangan',
  mapsUrl: 'https://www.google.com/maps?q=Kopi+Kenangan+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'kopi-kakak',
  nama: 'Kopi Kakak',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.kopi-kakak',
  mapsUrl: 'https://www.google.com/maps?q=Kopi+Kakak+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'freen-house',
  nama: 'Freen House',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.freen-house',
  mapsUrl: 'https://www.google.com/maps?q=Freen+House+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'balen-coffee',
  nama: 'Balen Coffee',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.balen-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Balen+Coffee+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'brewok-coffee',
  nama: 'Brewok Coffee',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.brewok-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Brewok+Coffee+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'hakui-coffee',
  nama: 'Hakui Coffee',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.hakui-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Hakui+Coffee+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'sthana-coffee',
  nama: 'Sthana Coffee',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.sthana-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Sthana+Coffee+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'lokatara-coffee',
  nama: 'Lokatara Coffee',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.lokatara-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Lokatara+Madiun',
  rating: 4.6,
  unggulan: false
},
{
  id: 'rest-coffee-eatery',
  nama: 'Rest Coffee & Eatery',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.rest-coffee-eatery',
  mapsUrl: 'https://www.google.com/maps?q=Rest+Coffee+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'waroeng-latte',
  nama: 'Waroeng Latte',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.waroeng-latte',
  mapsUrl: 'https://www.google.com/maps?q=Waroeng+Latte+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'starbucks-cokroaminoto',
  nama: 'Starbucks Jl. Cokroaminoto',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.starbucks-cokroaminoto',
  mapsUrl: 'https://www.google.com/maps?q=Starbucks+Cokroaminoto+Madiun',
  rating: 4.6,
  unggulan: true,
  badgeKey: 'kuliner.badge.unggulan'
},
{
  id: 'esme-coffee',
  nama: 'Esme Coffee',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.esme-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Esme+Coffee+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'tomoro-coffee',
  nama: 'Tomoro Coffee (Stasiun Madiun)',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.tomoro-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Tomoro+Coffee+Stasiun+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'gulali-cafe',
  nama: 'Gulali Cafe',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.gulali-cafe',
  mapsUrl: 'https://www.google.com/maps?q=Gulali+Cafe+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'work-n-play-cafe',
  nama: 'Work n Play Cafe',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.work-n-play-cafe',
  mapsUrl: 'https://www.google.com/maps?q=Work+n+Play+Madiun',
  rating: 4.7,
  unggulan: true,
  badgeKey: 'kuliner.badge.favorit'
},
{
  id: 'magia-coffee',
  nama: 'Magia Coffee',
  categoryKey: 'kuliner.cat.cafe',
  descKey: 'kuliner.desc.magia-coffee',
  mapsUrl: 'https://www.google.com/maps?q=Magia+Coffee+Madiun',
  rating: 4.5,
  unggulan: false
},
// Oleh-Oleh Khas Madiun
{
  id: 'bluder-cokro',
  nama: 'Bluder Cokro',
  categoryKey: 'kuliner.cat.oleh',
  descKey: 'kuliner.desc.bluder-cokro',
  mapsUrl: 'https://www.google.com/maps?q=Bluder+Cokro+Madiun',
  rating: 4.8,
  unggulan: true,
  badgeKey: 'kuliner.badge.ikon'
},
{
  id: 'brem-mirasa',
  nama: 'Brem Mirasa',
  categoryKey: 'kuliner.cat.oleh',
  descKey: 'kuliner.desc.brem-mirasa',
  mapsUrl: 'https://www.google.com/maps?q=Brem+Mirasa+Madiun',
  rating: 4.7,
  unggulan: true,
  badgeKey: 'kuliner.badge.ikon'
},
{
  id: 'madumongso',
  nama: 'Madumongso',
  categoryKey: 'kuliner.cat.oleh',
  descKey: 'kuliner.desc.madumongso',
  mapsUrl: 'https://www.google.com/maps?q=Madumongso+Madiun',
  rating: 4.5,
  unggulan: false
},
{
  id: 'kerupuk-puli',
  nama: 'Kerupuk Puli',
  categoryKey: 'kuliner.cat.oleh',
  descKey: 'kuliner.desc.kerupuk-puli',
  mapsUrl: null,
  rating: 4.4,
  unggulan: false
}];

const categoryKeys = [
{
  key: 'all',
  labelKey: 'page.allCategories'
},
{
  key: 'kuliner.cat.khas',
  labelKey: 'kuliner.cat.khas'
},
{
  key: 'kuliner.cat.populer',
  labelKey: 'kuliner.cat.populer'
},
{
  key: 'kuliner.cat.malam',
  labelKey: 'kuliner.cat.malam'
},
{
  key: 'kuliner.cat.cafe',
  labelKey: 'kuliner.cat.cafe'
},
{
  key: 'kuliner.cat.oleh',
  labelKey: 'kuliner.cat.oleh'
}];

const getCategoryIcon = (categoryKey: string) => {
  if (categoryKey === 'kuliner.cat.cafe') return Coffee;
  if (categoryKey === 'kuliner.cat.oleh') return Cookie;
  if (categoryKey === 'kuliner.cat.populer') return Store;
  return Utensils;
};
export function KulinerPage() {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState<'name' | 'rating'>('rating');
  const [showFilters, setShowFilters] = useState(false);
  const filteredItems = kulinerItems.
  filter((item) => {
    const matchesSearch = item.nama.
    toLowerCase().
    includes(searchQuery.toLowerCase());
    const matchesCategory =
    selectedCategory === 'all' || item.categoryKey === selectedCategory;
    return matchesSearch && matchesCategory;
  }).
  sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    return a.nama.localeCompare(b.nama);
  });
  return (
    <div className="min-h-screen bg-[#FAFAFA] pt-32 pb-16 relative overflow-hidden">
      {/* Interactive Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Subtle Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
            'linear-gradient(#1B7A3D 1px, transparent 1px), linear-gradient(90deg, #1B7A3D 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        

        {/* Floating Icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-40 left-[10%] opacity-10 text-primary">
          
          <Utensils size={64} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 30, 0],
            rotate: [0, -10, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1
          }}
          className="absolute top-80 right-[15%] opacity-10 text-accent">
          
          <Coffee size={80} />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 15, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }}
          className="absolute bottom-40 left-[20%] opacity-10 text-primary">
          
          <Cookie size={72} />
        </motion.div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-[#166b30] py-12 mb-12 relative z-10 shadow-lg">
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
              {t('kuliner.title')}
            </h1>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl mx-auto">
              {t('kuliner.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Search & Filter Bar */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-8 border-2 border-primary/10">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder={t('kuliner.searchPlaceholder')}
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
            {t('kuliner.showing')}{' '}
            <span className="text-primary font-bold">
              {filteredItems.length}
            </span>{' '}
            {t('kuliner.destinations')}
          </p>
        </div>

        {/* Kuliner Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => {
            const IconComponent = getCategoryIcon(item.categoryKey);
            return (
              <motion.div
                key={item.id}
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
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary overflow-hidden group flex flex-col">
                
                {/* Category Badge Header */}
                <div className="bg-gradient-to-r from-primary to-[#166b30] px-4 py-2 flex justify-between items-center">
                  <p className="text-white text-xs font-bold uppercase tracking-wide">
                    {t(item.categoryKey)}
                  </p>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Name & Badge */}
                  <div className="mb-3">
                    {item.mapsUrl ?
                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-block">
                      
                        <h3 className="font-poppins text-xl font-bold text-dark group-hover/link:text-primary transition-colors flex items-start gap-2">
                          <IconComponent className="w-5 h-5 text-primary shrink-0 mt-1" />
                          <span>{item.nama}</span>
                        </h3>
                      </a> :

                    <h3 className="font-poppins text-xl font-bold text-dark flex items-start gap-2">
                        <IconComponent className="w-5 h-5 text-primary shrink-0 mt-1" />
                        <span>{item.nama}</span>
                      </h3>
                    }

                    {item.unggulan && item.badgeKey &&
                    <div className="mt-2 inline-block bg-accent text-dark text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {t(item.badgeKey)}
                      </div>
                    }
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) =>
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(item.rating) ? 'fill-accent text-accent' : 'text-gray-300'}`} />

                      )}
                    </div>
                    <span className="font-bold text-dark">
                      {item.rating.toFixed(1)}
                    </span>
                    <span className="text-gray-500 text-sm">/ 5</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                    {t(item.descKey)}
                  </p>

                  {/* Button (Only if mapsUrl exists) */}
                  {item.mapsUrl &&
                  <a
                    href={item.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-[#166b30] text-white font-bold py-3 px-4 rounded-xl transition-all duration-200 group-hover:scale-[1.02] mt-auto">
                    
                      <ExternalLink className="w-4 h-4" />
                      {t('kuliner.openMaps')}
                    </a>
                  }
                </div>
              </motion.div>);

          })}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 &&
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