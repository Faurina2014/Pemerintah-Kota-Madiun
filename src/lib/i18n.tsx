import React, {
  useCallback,
  useEffect,
  useState,
  createContext,
  useContext,
  memo } from
'react';
type Lang = 'id' | 'en';
interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}
const translations: Record<Lang, Record<string, string>> = {
  id: {
    // Navbar
    'nav.govTitle': 'PEMERINTAH KOTA MADIUN',
    'nav.province': 'PROVINSI JAWA TIMUR',
    'nav.home': 'Beranda',
    'nav.profile': 'Profil',
    'nav.services': 'Layanan',
    'nav.government': 'Pemerintahan',
    'nav.latestNews': 'Madiun Terkini',
    'nav.ppid': 'PPID',
    'nav.cityName': 'KOTA MADIUN',
    'nav.visiMisi': 'Visi Misi',
    'nav.sejarah': 'Sejarah',
    'nav.perangkatDaerah': 'Perangkat Daerah',
    'nav.wilayahGeografis': 'Wilayah Geografis',
    'nav.maskot': 'Maskot Kota Madiun',
    'nav.layananPublik': 'Layanan Publik',
    'nav.layananInternal': 'Layanan Internal',
    'nav.layananWA': 'Layanan WA (Awak Sigap)',
    'nav.mbangunSwarga': 'Mbangun Swarga',
    'nav.ppidKota': 'PPID Kota Madiun',
    'nav.perizinan': 'Perizinan dan Investasi',
    'nav.pelayananKelurahan': 'Pelayanan Kelurahan',
    'nav.kesehatan': 'Kesehatan',
    'nav.pelayananKependudukan': 'Pelayanan Kependudukan',
    'nav.ketenagakerjaan': 'Ketenagakerjaan',
    'nav.pendidikan': 'Pendidikan',
    'nav.infoPasar': 'Info Pasar',
    'nav.openData': 'Open Data',
    'nav.koviOtda': 'Kovi Otda',
    'nav.lpse': 'LPSE',
    'nav.sirup': 'SIRUP',
    'nav.laporSP4N': 'Lapor SP4N',
    'nav.spbe': 'SPBE',
    'nav.smartCity': 'Smart City',
    'nav.cctv': 'CCTV',
    'nav.jdih': 'JDIH',
    'nav.sirupa': 'SIRUPA',
    'nav.agendaKota': 'Agenda Kota',
    'nav.beritaPemerintahan': 'Berita Pemerintahan',
    'nav.madiunToday': 'Madiun Today',
    'nav.suaraMadiun': 'Suara Madiun',
    'nav.ruangSatu': 'Ruang Satu',
    'nav.rilis': 'Rilis',
    'nav.pengumuman': 'Pengumuman',
    'nav.lowongan': 'Lowongan',
    // Hero
    'hero.badge': 'PORTAL RESMI PEMERINTAH',
    'hero.subtitle':
    'Melayani dengan sepenuh hati untuk mewujudkan Kota Madiun yang Maju, Sejahtera, dan bermartabat.',
    'hero.searchPlaceholder': 'Apa yang ingin anda cari?',
    'hero.population': 'penduduk',
    'hero.kelurahan': 'Kelurahan',
    'hero.kecamatan': 'Kecamatan',
    'hero.slide1Title': 'Balai Kota Madiun',
    'hero.slide1Sub': 'Pusat Pemerintahan Kota Madiun',
    'hero.slide2Title': 'Stasiun Madiun',
    'hero.slide2Sub': 'Pintu Gerbang Kota Madiun',
    'hero.slide3Title': 'Taman Wisata Madiun',
    'hero.slide3Sub': 'Destinasi Wisata Keluarga',
    'hero.slide4Title': 'Alun-Alun Kota Madiun',
    'hero.slide4Sub': 'Jantung Kota Madiun',
    'hero.prevSlide': 'Slide sebelumnya',
    'hero.nextSlide': 'Slide berikutnya',
    // Quick Services
    'services.title': 'Layanan Cepat',
    'services.viewAll': 'Lihat Semua',
    'services.laporSPAN': 'Lapor SPAN',
    'services.awakSigap': 'Awak Sigap',
    'services.kesehatan': 'Kesehatan',
    'services.pendidikan': 'Pendidikan',
    'services.ketenagakerjaan': 'Ketenagakerjaan',
    'services.perizinan': 'Perizinan',
    'services.infoPasar': 'Info Pasar',
    // Jelajah
    'jelajah.title': 'JELAJAH KOTA MADIUN',
    'jelajah.aboutTitle': 'TENTANG MADIUN',
    'jelajah.aboutText':
    'Kota Madiun merupakan salah satu kota yang berada di Provinsi Jawa Timur, Indonesia. Kota ini menempati posisi sebagai kota terbesar keempat di Jawa Timur setelah Surabaya, Malang, dan Kediri. Secara geografis, Kota Madiun terletak sekitar 150 km di sebelah barat Surabaya, sekitar 90 km di sebelah timur Surakarta, serta kurang lebih 33 km di sebelah tenggara Ngawi.',
    'jelajah.visit': 'Kunjungi',
    'jelajah.prev': 'Sebelumnya',
    'jelajah.next': 'Berikutnya',
    'jelajah.wisata': 'Wisata',
    'jelajah.wisataDesc': 'Destinasi wisata menarik',
    'jelajah.kuliner': 'Kuliner',
    'jelajah.kulinerDesc': 'Cita rasa khas Madiun',
    'jelajah.fasilitas': 'Fasilitas',
    'jelajah.fasilitasDesc': 'Fasilitas umum kota',
    'jelajah.umkm': 'UMKM',
    'jelajah.umkmDesc': 'Produk lokal unggulan',
    'jelajah.penginapan': 'Penginapan',
    'jelajah.penginapanDesc': 'Hotel & penginapan nyaman',
    // GprKomdigi / Demographics
    'demo.title': 'Demografi Kec. Taman',
    'demo.density': 'Kepadatan Penduduk',
    'demo.densityUnit': 'Jiwa/km² (2024)',
    'demo.genderRatio': 'Rasio Gender',
    'demo.productiveAge': 'Usia Produktif',
    'demo.years': '15-64 Tahun',
    'demo.highCategory': 'Kategori Tinggi',
    'demo.article': 'Artikel',
    'demo.article1':
    'Perkuat Mitigasi Karhutla, Pemerintah Gelar Apel Siaga di Provinsi Riau',
    'demo.article2':
    'Dana Stimulan Perbaikan Rumah Pascabencana Sumatra Disalurkan',
    'demo.article3': 'Dukung Ketegasan Menpora Erick, Ketua Umum NOC Indonesia',
    // News
    'news.title': 'KABAR KOTA',
    'news.govNews': '✱ BERITA PEMERINTAHAN',
    'news.madiunToday': '✱ MADIUN TODAY',
    'news.viewAll': 'Lihat Semua',
    'news.gov1Title':
    'Wali Kota Madiun Pimpin Apel Gelar Pasukan Operasi Ketupat 2025',
    'news.gov1Excerpt':
    'Wali Kota Madiun memimpin apel gelar pasukan dalam rangka Operasi Ketupat 2025 untuk memastikan keamanan dan kelancaran arus mudik.',
    'news.gov2Title':
    'Pemkot Madiun Raih Penghargaan Kota Layak Anak Kategori Utama',
    'news.gov2Excerpt':
    'Pemerintah Kota Madiun kembali meraih penghargaan Kota Layak Anak kategori utama dari Kementerian PPPA.',
    'news.today1Title':
    'Festival Pecel Madiun 2025 Sukses Menarik Ribuan Pengunjung',
    'news.today1Excerpt':
    'Festival kuliner khas Kota Madiun ini berhasil menarik ribuan pengunjung dari berbagai daerah dan memperkenalkan pecel Madiun ke kancah nasional.',
    'news.today2Title':
    'Car Free Day Madiun Semakin Ramai dengan Atraksi Seni Budaya',
    'news.today2Excerpt':
    'Kegiatan Car Free Day di Jalan Pahlawan Kota Madiun semakin meriah dengan penampilan seni budaya dari berbagai komunitas.',
    // Interactive Map
    'map.clickDetail': 'Klik untuk lihat detail →',
    'map.overallArea': 'Keseluruhan Wilayah',
    'map.district': 'Kecamatan',
    'map.subDistrict': 'Kelurahan',
    'map.footer': 'Peta Interaktif Kota Madiun',
    'map.distPrefix': 'Kec.',
    // Floating Buttons
    'a11y.title': 'Aksesibilitas',
    'a11y.highContrast': 'Kontras Tinggi',
    'a11y.largeText': 'Teks Besar',
    'a11y.grayscale': 'Grayscale',
    'emergency.awakSigap': 'Awak Sigap',
    'emergency.damkar': 'Damkar 113',
    'emergency.polisi': 'Polisi 110',
    'emergency.ambulans': 'Ambulans 118',
    // Footer
    'footer.cityName': 'KOTA MADIUN',
    'footer.govName': 'Pemerintah Kota Madiun',
    'footer.motto': 'Kota Pendekar',
    'footer.description':
    'Melayani dengan sepenuh hati untuk mewujudkan Kota Madiun yang Maju, Sejahtera, dan bermartabat.',
    'footer.contactUs': 'HUBUNGI KAMI',
    'footer.emergency': 'Emergency',
    'footer.callCenter': 'Call Center',
    'footer.ambulance': 'Ambulans',
    'footer.police': 'Polisi',
    'footer.fireDept': 'Pemadam Kebakaran',
    'footer.copyright': 'Pemerintah Kota Madiun. Hak Cipta Dilindungi.',
    'footer.privacy': 'Kebijakan Privasi',
    'footer.terms': 'Syarat & Ketentuan',
    // Shared UI Keys
    'page.filter': 'Filter',
    'page.sortRating': 'Rating Tertinggi',
    'page.sortName': 'Nama A-Z',
    'page.noResults': 'Tidak ada hasil ditemukan',
    'page.noResultsHint': 'Coba ubah kata kunci pencarian atau filter kategori',
    'page.allCategories': 'Semua Kategori',
    // Wisata Page
    'wisata.title': 'Daftar Wisata Kota Madiun',
    'wisata.subtitle':
    'Jelajahi ruang publik, ikon kota, wisata keluarga, dan wisata religi di Kota Madiun',
    'wisata.searchPlaceholder': 'Cari nama wisata...',
    'wisata.showing': 'Menampilkan',
    'wisata.destinations': 'destinasi wisata',
    'wisata.viewMaps': 'Lihat di Maps',
    'wisata.cat.taman': 'Taman Kota & Ruang Publik',
    'wisata.cat.keluarga': 'Wisata Keluarga & Hiburan',
    'wisata.cat.sejarah': 'Wisata Sejarah & Ikon Kota',
    'wisata.cat.religi': 'Wisata Religi',
    'wisata.cat.kekinian': 'Spot Kekinian',
    'wisata.desc.alun-alun':
    'Pusat aktivitas masyarakat dengan taman yang asri dan fasilitas lengkap untuk keluarga',
    'wisata.desc.psc':
    'Ruang publik modern dengan berbagai spot foto menarik dan area kuliner',
    'wisata.desc.bantaran-kali':
    'Taman tepi sungai yang sejuk dengan jogging track dan area bermain anak',
    'wisata.desc.sumber-umis':
    'Taman dengan sumber air alami yang menyegarkan dan pemandangan hijau',
    'wisata.desc.sun-city-theme-park':
    'Taman hiburan dan waterpark terbesar di Madiun dengan berbagai wahana seru',
    'wisata.desc.suncity-mall':
    'Pusat perbelanjaan modern dengan berbagai tenant dan area hiburan keluarga',
    'wisata.desc.nusantara-edupark':
    'Taman edukasi dengan konsep pembelajaran sambil bermain untuk anak-anak',
    'wisata.desc.tugu-pendekar':
    'Ikon Kota Madiun yang menjadi simbol keberanian dan semangat pendekar',
    'wisata.desc.patung-pendekar':
    'Patung ikonik yang menggambarkan jiwa pendekar masyarakat Madiun',
    'wisata.desc.merlion':
    'Spot foto unik di area PSC yang menjadi landmark baru Kota Madiun',
    'wisata.desc.masjid-agung':
    'Masjid megah dengan arsitektur modern yang menjadi pusat kegiatan keagamaan',
    'wisata.desc.masjid-kuno-taman':
    'Masjid bersejarah dengan arsitektur klasik yang masih terjaga keasliannya',
    'wisata.desc.gereja-cornelius':
    'Gereja bersejarah dengan arsitektur klasik Eropa yang indah',
    'wisata.desc.psc-kekinian':
    'Destinasi favorit anak muda dengan berbagai spot foto instagramable',
    'wisata.desc.bantaran-kekinian':
    'Spot sunset dan foto kekinian di tepi sungai yang hits di kalangan milenial',
    'wisata.desc.tugu-kekinian':
    'Landmark ikonik yang wajib dikunjungi untuk foto dan check-in',
    'wisata.desc.suncity-kekinian':
    'Mall modern dengan berbagai spot foto aesthetic dan kafe instagramable',
    // Kuliner Page
    'kuliner.title': 'Madiun City Culinary',
    'kuliner.subtitle':
    'Explore signature dishes, popular restaurants, street food, cafes, and favorite souvenirs from Madiun City',
    'kuliner.searchPlaceholder': 'Search culinary or place...',
    'kuliner.showing': 'Showing',
    'kuliner.destinations': 'culinary destinations',
    'kuliner.openMaps': 'Open Maps',
    'kuliner.cat.khas': 'Signature Dishes',
    'kuliner.cat.populer': 'Popular Restaurants',
    'kuliner.cat.malam': 'Night Food & Street Food',
    'kuliner.cat.cafe': 'Cafes & Hangout Spots',
    'kuliner.cat.oleh': 'Madiun Souvenirs',
    'kuliner.badge.ikon': 'Culinary Icon',
    'kuliner.badge.favorit': 'Favorite',
    'kuliner.badge.unggulan': 'Featured',
    'kuliner.desc.pecel-madiun':
    'Legendary Madiun dish of boiled vegetables with spicy peanut sauce.',
    'kuliner.desc.nasi-jotos':
    'Rice with tempe gembus and signature sambal, a Madiun traditional dish.',
    'kuliner.desc.lontong-tahu-telur':
    'Rice cake with fried tofu and egg, served with savory peanut sauce.',
    'kuliner.desc.soto-madiun':
    'Clear chicken soup with savory broth and East Java spices.',
    'kuliner.desc.rawon':
    'Beef soup with black broth from kluwek, rich East Java spice flavors.',
    'kuliner.desc.warung-pecel-pojok':
    'Legendary pecel stall at the city corner, always packed with visitors.',
    'kuliner.desc.pecel-99':
    'Generous portions of pecel with signature peanut sauce.',
    'kuliner.desc.pecel-yu-gembrot':
    'Legendary pecel with generations-old peanut sauce recipe.',
    'kuliner.desc.soto-ayam-kondang':
    'Chicken soup with clear savory broth, famous for decades.',
    'kuliner.desc.depot-tjanang':
    'Classic Chinese food depot with signature fried rice and noodles.',
    'kuliner.desc.pak-to': 'Simple eatery with delicious home-style cooking.',
    'kuliner.desc.pak-poen':
    'Legendary restaurant with various traditional Javanese dishes.',
    'kuliner.desc.sleko-food-court':
    'Food court with diverse culinary options in one place.',
    'kuliner.desc.accord':
    'Family restaurant with varied menu and cozy atmosphere.',
    'kuliner.desc.ayam-goreng-pemuda':
    'Crispy fried chicken with signature spice blend.',
    'kuliner.desc.leko':
    'Popular eatery with varied menu and affordable prices.',
    'kuliner.desc.super-bakso':
    'Jumbo meatballs with rich and fresh beef broth.',
    'kuliner.desc.mie-gacoan': 'Viral spicy noodles with various spice levels.',
    'kuliner.desc.wizzmie':
    'Trendy noodles with generous toppings at friendly prices.',
    'kuliner.desc.ayam-bakar-bg':
    'Grilled chicken with special marinade perfectly absorbed.',
    'kuliner.desc.lombok-ijo':
    'Restaurant with signature green chili that is spicy and fresh.',
    'kuliner.desc.nawasena':
    'Modern restaurant with creative Nusantara fusion menu.',
    'kuliner.desc.kemangi':
    'Restaurant with authentic Sundanese and Javanese cuisine.',
    'kuliner.desc.srasadesa':
    'Restaurant with village concept and authentic traditional menu.',
    'kuliner.desc.ss-spesial-sambal':
    'Eatery with various signature sambals that are addictive.',
    'kuliner.desc.psc-malam':
    'Night street food area with various snacks and street cuisine.',
    'kuliner.desc.bantaran-kali-malam':
    'Night culinary area by the river with relaxed and romantic atmosphere.',
    'kuliner.desc.alun-alun-malam':
    'Night snack center around the square with various street food.',
    'kuliner.desc.bento-kopi':
    'Cozy coffee shop with specialty coffee and pastry menu.',
    'kuliner.desc.wow-cafe':
    'Instagramable cafe with unique interior and creative menu.',
    'kuliner.desc.kopi-kenangan':
    'Grab-and-go coffee chain with trendy milk coffee favorites.',
    'kuliner.desc.kopi-kakak':
    'Local coffee shop with homey atmosphere and affordable prices.',
    'kuliner.desc.freen-house':
    'Cafe with homey concept, comfortable for work and hangout.',
    'kuliner.desc.balen-coffee':
    'Minimalist coffee shop with selected beans from various regions.',
    'kuliner.desc.brewok-coffee':
    'Coffee shop with strong character and signature manual brew.',
    'kuliner.desc.hakui-coffee':
    'Modern coffee shop with calm atmosphere for working.',
    'kuliner.desc.sthana-coffee':
    'Aesthetic cafe with industrial interior and quality coffee.',
    'kuliner.desc.lokatara-coffee':
    'Coffee shop with nature concept and single origin coffee menu.',
    'kuliner.desc.rest-coffee-eatery':
    'Cafe and restaurant with complete menu from coffee to meals.',
    'kuliner.desc.waroeng-latte':
    'Coffee shop specializing in latte art and trendy milk drinks.',
    'kuliner.desc.starbucks-cokroaminoto':
    'International coffee chain with premium atmosphere in the city center.',
    'kuliner.desc.esme-coffee':
    'Elegant cafe with varied coffee and non-coffee menu.',
    'kuliner.desc.tomoro-coffee':
    'Strategic coffee shop at the station area for grab-and-go.',
    'kuliner.desc.gulali-cafe':
    'Sweet and colorful concept cafe, perfect for hangout.',
    'kuliner.desc.work-n-play-cafe':
    'Favorite coworking cafe with fast WiFi and productive atmosphere.',
    'kuliner.desc.magia-coffee':
    'Coffee shop with magical touch in specialty coffee presentation.',
    'kuliner.desc.bluder-cokro':
    'Legendary Madiun bluder bread, soft and fragrant, a must-buy souvenir.',
    'kuliner.desc.brem-mirasa':
    'Madiun signature brem with sweet taste, famous since long ago.',
    'kuliner.desc.madumongso':
    'Traditional snack from black sticky rice and palm sugar, sweet and rich.',
    'kuliner.desc.kerupuk-puli':
    'Signature crackers from sticky rice, crispy and perfect as meal companion.',
    // Fasilitas Page
    'fasilitas.title': 'Fasilitas Kota Madiun',
    'fasilitas.subtitle':
    'Temukan fasilitas umum, pendidikan, kesehatan, dan layanan publik di Kota Madiun',
    'fasilitas.searchPlaceholder': 'Cari fasilitas...',
    'fasilitas.showing': 'Menampilkan',
    'fasilitas.destinations': 'fasilitas',
    'fasilitas.openMaps': 'Buka Maps',
    'fasilitas.cat.belanja': 'Perbelanjaan',
    'fasilitas.cat.kesehatan': 'Kesehatan',
    'fasilitas.cat.pendidikan': 'Pendidikan',
    'fasilitas.cat.transportasi': 'Transportasi',
    'fasilitas.cat.ibadah': 'Tempat Ibadah',
    'fasilitas.cat.umum': 'Fasilitas Umum',
    'fasilitas.cat.layanan': 'Layanan Publik',
    'fasilitas.subcat.sd': 'Sekolah Dasar',
    'fasilitas.subcat.mi': 'Madrasah Ibtidaiyah',
    'fasilitas.subcat.smpn': 'SMP Negeri',
    'fasilitas.subcat.smps': 'SMP Swasta',
    'fasilitas.subcat.mts': 'Madrasah Tsanawiyah',
    'fasilitas.subcat.sma': 'SMA',
    'fasilitas.subcat.smk': 'SMK',
    'fasilitas.subcat.ma': 'Madrasah Aliyah',
    'fasilitas.subcat.pt': 'Perguruan Tinggi',
    'fasilitas.desc.suncity-mall':
    'Pusat perbelanjaan modern terbesar di Madiun dengan berbagai tenant dan hiburan keluarga.',
    'fasilitas.desc.plaza-lawu':
    'Pusat perbelanjaan di area strategis Madiun dengan berbagai toko dan pilihan kuliner.',
    'fasilitas.desc.plaza-madiun':
    'Pusat perbelanjaan dengan berbagai kebutuhan sehari-hari dan toko fashion.',
    'fasilitas.desc.pasar-besar':
    'Pasar tradisional terbesar di Madiun dengan beragam produk lokal dan kebutuhan sehari-hari.',
    'fasilitas.desc.pasar-sleko':
    'Pasar tradisional yang terkenal dengan kuliner khas dan jajanan Madiun.',
    'fasilitas.desc.rsud-madiun':
    'Rumah sakit umum daerah utama dengan layanan kesehatan komprehensif.',
    'fasilitas.desc.rs-paru':
    'Rumah sakit khusus paru dengan fasilitas perawatan pernapasan modern.',
    'fasilitas.desc.rs-griya-husada':
    'Rumah sakit swasta dengan layanan kesehatan berkualitas dan fasilitas modern.',
    'fasilitas.desc.rsi-aisyiyah':
    'Rumah sakit Islam dengan layanan kesehatan berbasis nilai-nilai Islam.',
    'fasilitas.desc.rs-santa-clara':
    'Rumah sakit Katolik dengan layanan kesehatan yang ramah dan profesional.',
    'fasilitas.desc.rs-merpati':
    'Rumah sakit dengan layanan kesehatan umum dan spesialis.',
    'fasilitas.desc.sdn-nambangan-lor-1':
    'Sekolah dasar negeri unggulan di kawasan Nambangan Lor.',
    'fasilitas.desc.sdn-mojorejo-1':
    'Sekolah dasar negeri dengan prestasi akademik dan non-akademik.',
    'fasilitas.desc.sdn-kanigoro':
    'Sekolah dasar negeri dengan lingkungan belajar yang kondusif.',
    'fasilitas.desc.min-1':
    'Madrasah ibtidaiyah negeri dengan kurikulum pendidikan Islam terpadu.',
    'fasilitas.desc.min-2':
    'Madrasah ibtidaiyah negeri dengan fasilitas pembelajaran modern.',
    'fasilitas.desc.mi-al-hidayah':
    'Madrasah ibtidaiyah swasta dengan pendidikan karakter Islami.',
    'fasilitas.desc.smpn-1':
    'SMP negeri unggulan dengan prestasi akademik dan ekstrakurikuler terbaik.',
    'fasilitas.desc.smpn-2':
    'SMP negeri unggulan dengan program pendidikan berkualitas tinggi.',
    'fasilitas.desc.smpn-3':
    'SMP negeri unggulan dengan fasilitas pembelajaran modern.',
    'fasilitas.desc.smpn-4':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-5':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-6':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-7':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-8':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-9':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-10':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-11':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-12':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-13':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smpn-14':
    'SMP negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smp-darul-madinah':
    'SMP Islam swasta dengan program pesantren dan tahfidz Al-Quran.',
    'fasilitas.desc.smp-mbs-hamka':
    'SMP boarding school modern dengan kurikulum terpadu.',
    'fasilitas.desc.smp-mitra-harapan':
    'SMP swasta dengan pendekatan pembelajaran inovatif.',
    'fasilitas.desc.smp-progresif':
    'SMP swasta progresif dengan kurikulum Islam modern.',
    'fasilitas.desc.mtsn-madiun':
    'Madrasah tsanawiyah negeri dengan prestasi akademik dan keagamaan.',
    'fasilitas.desc.mts-mujaddadiyyah':
    'Madrasah tsanawiyah dengan pendidikan Islam tradisional.',
    'fasilitas.desc.mts-pertanian':
    'Madrasah tsanawiyah dengan program pertanian dan lingkungan.',
    'fasilitas.desc.mts-siti-hajar':
    'Madrasah tsanawiyah swasta dengan lingkungan belajar Islami.',
    'fasilitas.desc.sman-1':
    'SMA negeri terbaik di Madiun dengan prestasi akademik tingkat nasional.',
    'fasilitas.desc.sman-2':
    'SMA negeri unggulan dengan program sains dan teknologi.',
    'fasilitas.desc.sman-3':
    'SMA negeri dengan program semi militer dan disiplin tinggi.',
    'fasilitas.desc.sman-4':
    'SMA negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.sman-5':
    'SMA negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.sman-6':
    'SMA negeri di Kota Madiun dengan program pendidikan berkualitas.',
    'fasilitas.desc.smkn-1':
    'SMK negeri dengan program keahlian bisnis dan manajemen.',
    'fasilitas.desc.smkn-2':
    'SMK negeri dengan program keahlian teknik dan industri.',
    'fasilitas.desc.smkn-3':
    'SMK negeri dengan program keahlian pariwisata dan kuliner.',
    'fasilitas.desc.man-1':
    'Madrasah aliyah negeri dengan program keagamaan dan sains.',
    'fasilitas.desc.man-2': 'Madrasah aliyah negeri dengan kurikulum terpadu.',
    'fasilitas.desc.ma-mujaddadiyyah':
    'Madrasah aliyah swasta dengan pendidikan Islam tradisional.',
    'fasilitas.desc.ma-darul-madinah':
    'Madrasah aliyah dengan program pesantren.',
    'fasilitas.desc.univ-pgri':
    'Universitas swasta unggulan dengan program pendidikan dan keguruan.',
    'fasilitas.desc.univ-muhammadiyah':
    'Universitas Islam dengan berbagai program studi unggulan.',
    'fasilitas.desc.politeknik-negeri':
    'Politeknik negeri dengan program vokasi dan teknologi terapan.',
    'fasilitas.desc.stikes-bhm':
    'Sekolah tinggi ilmu kesehatan dengan program keperawatan dan kebidanan.',
    'fasilitas.desc.stasiun-madiun':
    'Stasiun kereta api utama Kota Madiun dengan layanan antarkota dan lokal.',
    'fasilitas.desc.terminal-purboyo':
    'Terminal bus utama dengan rute antarkota dan antarprovinsi.',
    'fasilitas.desc.bus-sekolah':
    'Layanan bus sekolah gratis untuk pelajar Kota Madiun.',
    'fasilitas.desc.masjid-agung':
    'Masjid agung yang menjadi pusat kegiatan keagamaan Islam di Madiun.',
    'fasilitas.desc.masjid-kuno':
    'Masjid bersejarah dengan arsitektur klasik yang masih terjaga keasliannya.',
    'fasilitas.desc.gereja-cornelius':
    'Gereja bersejarah dengan arsitektur klasik Eropa yang indah.',
    'fasilitas.desc.alun-alun':
    'Pusat aktivitas masyarakat dengan taman yang asri dan fasilitas lengkap.',
    'fasilitas.desc.psc':
    'Ruang publik modern dengan spot foto dan area kuliner.',
    'fasilitas.desc.bantaran-kali':
    'Taman tepi sungai yang sejuk dengan jogging track dan area bermain.',
    'fasilitas.desc.polres':
    'Kepolisian resort kota untuk keamanan dan ketertiban masyarakat.',
    'fasilitas.desc.pemkot':
    'Kantor pemerintah kota untuk layanan administrasi dan publik.',
    'fasilitas.desc.disdukcapil':
    'Dinas kependudukan dan catatan sipil untuk layanan dokumen kependudukan.'
  },
  en: {
    // Navbar
    'nav.govTitle': 'MADIUN CITY GOVERNMENT',
    'nav.province': 'EAST JAVA PROVINCE',
    'nav.home': 'Home',
    'nav.profile': 'Profile',
    'nav.services': 'Services',
    'nav.government': 'Government',
    'nav.latestNews': 'Latest News',
    'nav.ppid': 'PPID',
    'nav.cityName': 'MADIUN CITY',
    'nav.visiMisi': 'Vision & Mission',
    'nav.sejarah': 'History',
    'nav.perangkatDaerah': 'Regional Apparatus',
    'nav.wilayahGeografis': 'Geographic Area',
    'nav.maskot': 'Madiun City Mascot',
    'nav.layananPublik': 'Public Services',
    'nav.layananInternal': 'Internal Services',
    'nav.layananWA': 'WA Service (Emergency)',
    'nav.mbangunSwarga': 'Mbangun Swarga',
    'nav.ppidKota': 'PPID Madiun City',
    'nav.perizinan': 'Licensing & Investment',
    'nav.pelayananKelurahan': 'Sub-district Services',
    'nav.kesehatan': 'Health',
    'nav.pelayananKependudukan': 'Population Services',
    'nav.ketenagakerjaan': 'Employment',
    'nav.pendidikan': 'Education',
    'nav.infoPasar': 'Market Info',
    'nav.openData': 'Open Data',
    'nav.koviOtda': 'Kovi Otda',
    'nav.lpse': 'LPSE',
    'nav.sirup': 'SIRUP',
    'nav.laporSP4N': 'Report SP4N',
    'nav.spbe': 'SPBE',
    'nav.smartCity': 'Smart City',
    'nav.cctv': 'CCTV',
    'nav.jdih': 'JDIH',
    'nav.sirupa': 'SIRUPA',
    'nav.agendaKota': 'City Agenda',
    'nav.beritaPemerintahan': 'Government News',
    'nav.madiunToday': 'Madiun Today',
    'nav.suaraMadiun': 'Voice of Madiun',
    'nav.ruangSatu': 'Ruang Satu',
    'nav.rilis': 'Press Release',
    'nav.pengumuman': 'Announcements',
    'nav.lowongan': 'Job Vacancies',
    // Hero
    'hero.badge': 'OFFICIAL GOVERNMENT PORTAL',
    'hero.subtitle':
    'Serving wholeheartedly to realize a Madiun City that is Advanced, Prosperous, and Dignified.',
    'hero.searchPlaceholder': 'What are you looking for?',
    'hero.population': 'population',
    'hero.kelurahan': 'Sub-districts',
    'hero.kecamatan': 'Districts',
    'hero.slide1Title': 'Madiun City Hall',
    'hero.slide1Sub': 'Center of Madiun City Government',
    'hero.slide2Title': 'Madiun Station',
    'hero.slide2Sub': 'Gateway to Madiun City',
    'hero.slide3Title': 'Madiun Tourism Park',
    'hero.slide3Sub': 'Family Tourism Destination',
    'hero.slide4Title': 'Madiun City Square',
    'hero.slide4Sub': 'Heart of Madiun City',
    'hero.prevSlide': 'Previous slide',
    'hero.nextSlide': 'Next slide',
    // Quick Services
    'services.title': 'Quick Services',
    'services.viewAll': 'View All',
    'services.laporSPAN': 'Report SPAN',
    'services.awakSigap': 'Emergency Response',
    'services.kesehatan': 'Health',
    'services.pendidikan': 'Education',
    'services.ketenagakerjaan': 'Employment',
    'services.perizinan': 'Licensing',
    'services.infoPasar': 'Market Info',
    // Jelajah
    'jelajah.title': 'EXPLORE MADIUN CITY',
    'jelajah.aboutTitle': 'ABOUT MADIUN',
    'jelajah.aboutText':
    'Madiun City is one of the cities located in East Java Province, Indonesia. The city holds the position as the fourth largest city in East Java after Surabaya, Malang, and Kediri. Geographically, Madiun City is located approximately 150 km west of Surabaya, about 90 km east of Surakarta, and approximately 33 km southeast of Ngawi.',
    'jelajah.visit': 'Visit',
    'jelajah.prev': 'Previous',
    'jelajah.next': 'Next',
    'jelajah.wisata': 'Tourism',
    'jelajah.wisataDesc': 'Exciting tourist destinations',
    'jelajah.kuliner': 'Culinary',
    'jelajah.kulinerDesc': 'Authentic Madiun flavors',
    'jelajah.fasilitas': 'Facilities',
    'jelajah.fasilitasDesc': 'City public facilities',
    'jelajah.umkm': 'SMEs',
    'jelajah.umkmDesc': 'Local premium products',
    'jelajah.penginapan': 'Accommodation',
    'jelajah.penginapanDesc': 'Comfortable hotels & stays',
    // GprKomdigi / Demographics
    'demo.title': 'Taman District Demographics',
    'demo.density': 'Population Density',
    'demo.densityUnit': 'People/km² (2024)',
    'demo.genderRatio': 'Gender Ratio',
    'demo.productiveAge': 'Productive Age',
    'demo.years': '15-64 Years',
    'demo.highCategory': 'High Category',
    'demo.article': 'Article',
    'demo.article1':
    'Strengthening Forest Fire Mitigation, Government Holds Alert Rally in Riau Province',
    'demo.article2':
    'Stimulus Funds for Post-Disaster Housing Repairs in Sumatra Distributed',
    'demo.article3':
    "Supporting Minister Erick's Firmness, NOC Indonesia Chairman",
    // News
    'news.title': 'CITY NEWS',
    'news.govNews': '✱ GOVERNMENT NEWS',
    'news.madiunToday': '✱ MADIUN TODAY',
    'news.viewAll': 'View All',
    'news.gov1Title':
    'Mayor of Madiun Leads Troop Rally for Ketupat Operation 2025',
    'news.gov1Excerpt':
    'The Mayor of Madiun led a troop rally for Ketupat Operation 2025 to ensure security and smooth homecoming traffic.',
    'news.gov2Title':
    'Madiun City Government Wins Child-Friendly City Award in Main Category',
    'news.gov2Excerpt':
    'Madiun City Government once again received the Child-Friendly City award in the main category from the Ministry of PPPA.',
    'news.today1Title':
    'Madiun Pecel Festival 2025 Successfully Attracts Thousands of Visitors',
    'news.today1Excerpt':
    'This signature culinary festival of Madiun City successfully attracted thousands of visitors from various regions and introduced Madiun pecel nationally.',
    'news.today2Title':
    'Madiun Car Free Day Gets Livelier with Cultural Art Performances',
    'news.today2Excerpt':
    'Car Free Day activities on Jalan Pahlawan, Madiun City, are getting livelier with cultural art performances from various communities.',
    // Interactive Map
    'map.clickDetail': 'Click to view details →',
    'map.overallArea': 'Overall Area',
    'map.district': 'Districts',
    'map.subDistrict': 'Sub-districts',
    'map.footer': 'Interactive Map of Madiun City',
    'map.distPrefix': 'Dist.',
    // Floating Buttons
    'a11y.title': 'Accessibility',
    'a11y.highContrast': 'High Contrast',
    'a11y.largeText': 'Large Text',
    'a11y.grayscale': 'Grayscale',
    'emergency.awakSigap': 'Emergency Response',
    'emergency.damkar': 'Fire Dept 113',
    'emergency.polisi': 'Police 110',
    'emergency.ambulans': 'Ambulance 118',
    // Footer
    'footer.cityName': 'MADIUN CITY',
    'footer.govName': 'Madiun City Government',
    'footer.motto': 'City of Warriors',
    'footer.description':
    'Serving wholeheartedly to realize a Madiun City that is Advanced, Prosperous, and Dignified.',
    'footer.contactUs': 'CONTACT US',
    'footer.emergency': 'Emergency',
    'footer.callCenter': 'Call Center',
    'footer.ambulance': 'Ambulance',
    'footer.police': 'Police',
    'footer.fireDept': 'Fire Department',
    'footer.copyright': 'Madiun City Government. All Rights Reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms & Conditions',
    // Shared UI Keys
    'page.filter': 'Filter',
    'page.sortRating': 'Highest Rating',
    'page.sortName': 'Name A-Z',
    'page.noResults': 'No results found',
    'page.noResultsHint':
    'Try changing your search keywords or category filter',
    'page.allCategories': 'All Categories',
    // Wisata Page
    'wisata.title': 'Madiun City Tourism List',
    'wisata.subtitle':
    'Explore public spaces, city icons, family tourism, and religious tourism in Madiun City',
    'wisata.searchPlaceholder': 'Search tourist spots...',
    'wisata.showing': 'Showing',
    'wisata.destinations': 'tourist destinations',
    'wisata.viewMaps': 'View on Maps',
    'wisata.cat.taman': 'City Parks & Public Spaces',
    'wisata.cat.keluarga': 'Family & Entertainment',
    'wisata.cat.sejarah': 'History & City Icons',
    'wisata.cat.religi': 'Religious Tourism',
    'wisata.cat.kekinian': 'Trendy Spots',
    'wisata.desc.alun-alun':
    'Community activity center with lush gardens and complete family facilities',
    'wisata.desc.psc':
    'Modern public space with various photo spots and culinary area',
    'wisata.desc.bantaran-kali':
    'Cool riverside park with jogging track and children playground',
    'wisata.desc.sumber-umis':
    'Park with refreshing natural springs and green scenery',
    'wisata.desc.sun-city-theme-park':
    'The largest theme park and waterpark in Madiun with exciting rides',
    'wisata.desc.suncity-mall':
    'Modern shopping center with various tenants and family entertainment',
    'wisata.desc.nusantara-edupark':
    'Educational park with learning-through-play concept for children',
    'wisata.desc.tugu-pendekar':
    'Madiun City icon symbolizing bravery and warrior spirit',
    'wisata.desc.patung-pendekar':
    'Iconic statue depicting the warrior spirit of Madiun people',
    'wisata.desc.merlion':
    'Unique photo spot in PSC area, a new landmark of Madiun City',
    'wisata.desc.masjid-agung':
    'Grand mosque with modern architecture, center of religious activities',
    'wisata.desc.masjid-kuno-taman':
    'Historic mosque with well-preserved classical architecture',
    'wisata.desc.gereja-cornelius':
    'Historic church with beautiful European classical architecture',
    'wisata.desc.psc-kekinian':
    'Young people favorite with various instagramable photo spots',
    'wisata.desc.bantaran-kekinian':
    'Sunset and trendy photo spot by the river, popular among millennials',
    'wisata.desc.tugu-kekinian':
    'Iconic landmark must-visit for photos and check-ins',
    'wisata.desc.suncity-kekinian':
    'Modern mall with aesthetic photo spots and instagramable cafes',
    // Kuliner Page
    'kuliner.title': 'Madiun City Culinary',
    'kuliner.subtitle':
    'Explore signature dishes, popular restaurants, street food, cafes, and favorite souvenirs from Madiun City',
    'kuliner.searchPlaceholder': 'Search culinary or place...',
    'kuliner.showing': 'Showing',
    'kuliner.destinations': 'culinary destinations',
    'kuliner.openMaps': 'Open Maps',
    'kuliner.cat.khas': 'Signature Dishes',
    'kuliner.cat.populer': 'Popular Restaurants',
    'kuliner.cat.malam': 'Night Food & Street Food',
    'kuliner.cat.cafe': 'Cafes & Hangout Spots',
    'kuliner.cat.oleh': 'Madiun Souvenirs',
    'kuliner.badge.ikon': 'Culinary Icon',
    'kuliner.badge.favorit': 'Favorite',
    'kuliner.badge.unggulan': 'Featured',
    'kuliner.desc.pecel-madiun':
    'Legendary Madiun dish of boiled vegetables with spicy peanut sauce.',
    'kuliner.desc.nasi-jotos':
    'Rice with tempe gembus and signature sambal, a Madiun traditional dish.',
    'kuliner.desc.lontong-tahu-telur':
    'Rice cake with fried tofu and egg, served with savory peanut sauce.',
    'kuliner.desc.soto-madiun':
    'Clear chicken soup with savory broth and East Java spices.',
    'kuliner.desc.rawon':
    'Beef soup with black broth from kluwek, rich East Java spice flavors.',
    'kuliner.desc.warung-pecel-pojok':
    'Legendary pecel stall at the city corner, always packed with visitors.',
    'kuliner.desc.pecel-99':
    'Generous portions of pecel with signature peanut sauce.',
    'kuliner.desc.pecel-yu-gembrot':
    'Legendary pecel with generations-old peanut sauce recipe.',
    'kuliner.desc.soto-ayam-kondang':
    'Chicken soup with clear savory broth, famous for decades.',
    'kuliner.desc.depot-tjanang':
    'Classic Chinese food depot with signature fried rice and noodles.',
    'kuliner.desc.pak-to': 'Simple eatery with delicious home-style cooking.',
    'kuliner.desc.pak-poen':
    'Legendary restaurant with various traditional Javanese dishes.',
    'kuliner.desc.sleko-food-court':
    'Food court with diverse culinary options in one place.',
    'kuliner.desc.accord':
    'Family restaurant with varied menu and cozy atmosphere.',
    'kuliner.desc.ayam-goreng-pemuda':
    'Crispy fried chicken with signature spice blend.',
    'kuliner.desc.leko':
    'Popular eatery with varied menu and affordable prices.',
    'kuliner.desc.super-bakso':
    'Jumbo meatballs with rich and fresh beef broth.',
    'kuliner.desc.mie-gacoan': 'Viral spicy noodles with various spice levels.',
    'kuliner.desc.wizzmie':
    'Trendy noodles with generous toppings at friendly prices.',
    'kuliner.desc.ayam-bakar-bg':
    'Grilled chicken with special marinade perfectly absorbed.',
    'kuliner.desc.lombok-ijo':
    'Restaurant with signature green chili that is spicy and fresh.',
    'kuliner.desc.nawasena':
    'Modern restaurant with creative Nusantara fusion menu.',
    'kuliner.desc.kemangi':
    'Restaurant with authentic Sundanese and Javanese cuisine.',
    'kuliner.desc.srasadesa':
    'Restaurant with village concept and authentic traditional menu.',
    'kuliner.desc.ss-spesial-sambal':
    'Eatery with various signature sambals that are addictive.',
    'kuliner.desc.psc-malam':
    'Night street food area with various snacks and street cuisine.',
    'kuliner.desc.bantaran-kali-malam':
    'Night culinary area by the river with relaxed and romantic atmosphere.',
    'kuliner.desc.alun-alun-malam':
    'Night snack center around the square with various street food.',
    'kuliner.desc.bento-kopi':
    'Cozy coffee shop with specialty coffee and pastry menu.',
    'kuliner.desc.wow-cafe':
    'Instagramable cafe with unique interior and creative menu.',
    'kuliner.desc.kopi-kenangan':
    'Grab-and-go coffee chain with trendy milk coffee favorites.',
    'kuliner.desc.kopi-kakak':
    'Local coffee shop with homey atmosphere and affordable prices.',
    'kuliner.desc.freen-house':
    'Cafe with homey concept, comfortable for work and hangout.',
    'kuliner.desc.balen-coffee':
    'Minimalist coffee shop with selected beans from various regions.',
    'kuliner.desc.brewok-coffee':
    'Coffee shop with strong character and signature manual brew.',
    'kuliner.desc.hakui-coffee':
    'Modern coffee shop with calm atmosphere for working.',
    'kuliner.desc.sthana-coffee':
    'Aesthetic cafe with industrial interior and quality coffee.',
    'kuliner.desc.lokatara-coffee':
    'Coffee shop with nature concept and single origin coffee menu.',
    'kuliner.desc.rest-coffee-eatery':
    'Cafe and restaurant with complete menu from coffee to meals.',
    'kuliner.desc.waroeng-latte':
    'Coffee shop specializing in latte art and trendy milk drinks.',
    'kuliner.desc.starbucks-cokroaminoto':
    'International coffee chain with premium atmosphere in the city center.',
    'kuliner.desc.esme-coffee':
    'Elegant cafe with varied coffee and non-coffee menu.',
    'kuliner.desc.tomoro-coffee':
    'Strategic coffee shop at the station area for grab-and-go.',
    'kuliner.desc.gulali-cafe':
    'Sweet and colorful concept cafe, perfect for hangout.',
    'kuliner.desc.work-n-play-cafe':
    'Favorite coworking cafe with fast WiFi and productive atmosphere.',
    'kuliner.desc.magia-coffee':
    'Coffee shop with magical touch in specialty coffee presentation.',
    'kuliner.desc.bluder-cokro':
    'Legendary Madiun bluder bread, soft and fragrant, a must-buy souvenir.',
    'kuliner.desc.brem-mirasa':
    'Madiun signature brem with sweet taste, famous since long ago.',
    'kuliner.desc.madumongso':
    'Traditional snack from black sticky rice and palm sugar, sweet and rich.',
    'kuliner.desc.kerupuk-puli':
    'Signature crackers from sticky rice, crispy and perfect as meal companion.',
    // Fasilitas Page
    'fasilitas.title': 'Madiun City Facilities',
    'fasilitas.subtitle':
    'Find public facilities, education, healthcare, and public services in Madiun City',
    'fasilitas.searchPlaceholder': 'Search facilities...',
    'fasilitas.showing': 'Showing',
    'fasilitas.destinations': 'facilities',
    'fasilitas.openMaps': 'Open Maps',
    'fasilitas.cat.belanja': 'Shopping',
    'fasilitas.cat.kesehatan': 'Healthcare',
    'fasilitas.cat.pendidikan': 'Education',
    'fasilitas.cat.transportasi': 'Transportation',
    'fasilitas.cat.ibadah': 'Places of Worship',
    'fasilitas.cat.umum': 'Public Facilities',
    'fasilitas.cat.layanan': 'Public Services',
    'fasilitas.subcat.sd': 'Elementary School',
    'fasilitas.subcat.mi': 'Islamic Elementary',
    'fasilitas.subcat.smpn': 'Public Junior High',
    'fasilitas.subcat.smps': 'Private Junior High',
    'fasilitas.subcat.mts': 'Islamic Junior High',
    'fasilitas.subcat.sma': 'Senior High',
    'fasilitas.subcat.smk': 'Vocational High',
    'fasilitas.subcat.ma': 'Islamic Senior High',
    'fasilitas.subcat.pt': 'Higher Education',
    'fasilitas.desc.suncity-mall':
    'The largest modern shopping center in Madiun with various tenants and family entertainment.',
    'fasilitas.desc.plaza-lawu':
    'Shopping center in a strategic area of Madiun with various shops and culinary options.',
    'fasilitas.desc.plaza-madiun':
    'Shopping center with various daily needs and fashion stores.',
    'fasilitas.desc.pasar-besar':
    'The largest traditional market in Madiun with diverse local products and daily essentials.',
    'fasilitas.desc.pasar-sleko':
    'Traditional market famous for Madiun signature culinary and snacks.',
    'fasilitas.desc.rsud-madiun':
    'Main regional public hospital with comprehensive healthcare services.',
    'fasilitas.desc.rs-paru':
    'Specialized lung hospital with modern respiratory care facilities.',
    'fasilitas.desc.rs-griya-husada':
    'Private hospital with quality healthcare and modern facilities.',
    'fasilitas.desc.rsi-aisyiyah':
    'Islamic hospital with healthcare services based on Islamic values.',
    'fasilitas.desc.rs-santa-clara':
    'Catholic hospital with friendly and professional healthcare services.',
    'fasilitas.desc.rs-merpati':
    'Hospital with general and specialist healthcare services.',
    'fasilitas.desc.sdn-nambangan-lor-1':
    'Leading public elementary school in Nambangan Lor area.',
    'fasilitas.desc.sdn-mojorejo-1':
    'Public elementary school with academic and non-academic achievements.',
    'fasilitas.desc.sdn-kanigoro':
    'Public elementary school with a conducive learning environment.',
    'fasilitas.desc.min-1':
    'State Islamic elementary school with integrated Islamic education curriculum.',
    'fasilitas.desc.min-2':
    'State Islamic elementary school with modern learning facilities.',
    'fasilitas.desc.mi-al-hidayah':
    'Private Islamic elementary school with Islamic character education.',
    'fasilitas.desc.smpn-1':
    'Leading public junior high school with top academic and extracurricular achievements.',
    'fasilitas.desc.smpn-2':
    'Leading public junior high school with high quality education programs.',
    'fasilitas.desc.smpn-3':
    'Leading public junior high school with modern learning facilities.',
    'fasilitas.desc.smpn-4':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-5':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-6':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-7':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-8':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-9':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-10':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-11':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-12':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-13':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smpn-14':
    'Public junior high school in Madiun City with quality education programs.',
    'fasilitas.desc.smp-darul-madinah':
    'Private Islamic junior high with boarding school and Quran memorization programs.',
    'fasilitas.desc.smp-mbs-hamka':
    'Modern boarding school junior high with integrated curriculum.',
    'fasilitas.desc.smp-mitra-harapan':
    'Private junior high with innovative learning approach.',
    'fasilitas.desc.smp-progresif':
    'Progressive private junior high with modern Islamic curriculum.',
    'fasilitas.desc.mtsn-madiun':
    'State Islamic junior high with academic and religious achievements.',
    'fasilitas.desc.mts-mujaddadiyyah':
    'Islamic junior high with traditional Islamic education.',
    'fasilitas.desc.mts-pertanian':
    'Islamic junior high with agriculture and environmental programs.',
    'fasilitas.desc.mts-siti-hajar':
    'Private Islamic junior high with Islamic learning environment.',
    'fasilitas.desc.sman-1':
    'The best public senior high in Madiun with national academic achievements.',
    'fasilitas.desc.sman-2':
    'Leading public senior high with science and technology programs.',
    'fasilitas.desc.sman-3':
    'Public senior high with semi-military program and high discipline.',
    'fasilitas.desc.sman-4':
    'Public senior high in Madiun City with quality education programs.',
    'fasilitas.desc.sman-5':
    'Public senior high in Madiun City with quality education programs.',
    'fasilitas.desc.sman-6':
    'Public senior high in Madiun City with quality education programs.',
    'fasilitas.desc.smkn-1':
    'State vocational school with business and management expertise programs.',
    'fasilitas.desc.smkn-2':
    'State vocational school with engineering and industrial expertise programs.',
    'fasilitas.desc.smkn-3':
    'State vocational school with tourism and culinary expertise programs.',
    'fasilitas.desc.man-1':
    'State Islamic senior high with religious and science programs.',
    'fasilitas.desc.man-2':
    'State Islamic senior high with integrated curriculum.',
    'fasilitas.desc.ma-mujaddadiyyah':
    'Private Islamic senior high with traditional Islamic education.',
    'fasilitas.desc.ma-darul-madinah':
    'Islamic senior high with boarding school program.',
    'fasilitas.desc.univ-pgri':
    'Leading private university with education and teaching programs.',
    'fasilitas.desc.univ-muhammadiyah':
    'Islamic university with various leading study programs.',
    'fasilitas.desc.politeknik-negeri':
    'State polytechnic with vocational and applied technology programs.',
    'fasilitas.desc.stikes-bhm':
    'Health science college with nursing and midwifery programs.',
    'fasilitas.desc.stasiun-madiun':
    'Main railway station of Madiun City with intercity and local services.',
    'fasilitas.desc.terminal-purboyo':
    'Main bus terminal with intercity and interprovincial routes.',
    'fasilitas.desc.bus-sekolah':
    'Free school bus service for Madiun City students.',
    'fasilitas.desc.masjid-agung':
    'Grand mosque serving as the center of Islamic religious activities in Madiun.',
    'fasilitas.desc.masjid-kuno':
    'Historic mosque with well-preserved classical architecture.',
    'fasilitas.desc.gereja-cornelius':
    'Historic church with beautiful European classical architecture.',
    'fasilitas.desc.alun-alun':
    'Community activity center with lush gardens and complete facilities.',
    'fasilitas.desc.psc':
    'Modern public space with photo spots and culinary area.',
    'fasilitas.desc.bantaran-kali':
    'Cool riverside park with jogging track and play area.',
    'fasilitas.desc.polres':
    'City police resort for public security and order.',
    'fasilitas.desc.pemkot':
    'City government office for administrative and public services.',
    'fasilitas.desc.disdukcapil':
    'Population and civil registration office for population document services.'
  }
};
const LanguageContext = createContext<LanguageContextType>({
  lang: 'id',
  setLang: () => {},
  t: (key: string) => key
});
export function LanguageProvider({ children }: {children: React.ReactNode;}) {
  const [lang, setLangState] = useState<Lang>(() => {
    try {
      const saved = localStorage.getItem('language');
      if (saved === 'en' || saved === 'id') return saved;
    } catch {}
    return 'id';
  });
  const setLang = useCallback((newLang: Lang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('language', newLang);
    } catch {}
  }, []);
  const t = useCallback(
    (key: string): string => {
      return translations[lang][key] || translations['id'][key] || key;
    },
    [lang]
  );
  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        t
      }}>
      
      {children}
    </LanguageContext.Provider>);

}
export function useLanguage() {
  return useContext(LanguageContext);
}