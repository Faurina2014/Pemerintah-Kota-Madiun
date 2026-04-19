import React, { useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../lib/i18n';
interface KelurahanData {
  id: string;
  name: string;
  kecamatan: string;
  path: string;
  labelX: number;
  labelY: number;
}
const kelurahanData: KelurahanData[] = [
// === Kec. Manguharjo (northwest) ===
{
  id: 'sogaten',
  name: 'Sogaten',
  kecamatan: 'Manguharjo',
  path: 'M 175,30 L 210,25 L 225,45 L 215,70 L 185,68 L 170,50 Z',
  labelX: 195,
  labelY: 48
},
{
  id: 'patihan',
  name: 'Patihan',
  kecamatan: 'Manguharjo',
  path: 'M 225,45 L 270,35 L 285,55 L 275,80 L 250,85 L 215,70 Z',
  labelX: 250,
  labelY: 60
},
{
  id: 'ngegong',
  name: 'Ngegong',
  kecamatan: 'Manguharjo',
  path: 'M 110,55 L 150,42 L 170,50 L 185,68 L 175,95 L 140,100 L 110,85 Z',
  labelX: 145,
  labelY: 72
},
{
  id: 'madiun-lor',
  name: 'Madiun Lor',
  kecamatan: 'Manguharjo',
  path: 'M 185,68 L 215,70 L 250,85 L 255,115 L 225,130 L 195,125 L 175,95 Z',
  labelX: 215,
  labelY: 100
},
{
  id: 'winongo',
  name: 'Winongo',
  kecamatan: 'Manguharjo',
  path: 'M 70,85 L 110,85 L 140,100 L 145,135 L 115,150 L 75,140 L 60,110 Z',
  labelX: 105,
  labelY: 118
},
{
  id: 'manguharjo',
  name: 'Manguharjo',
  kecamatan: 'Manguharjo',
  path: 'M 60,140 L 75,140 L 115,150 L 120,180 L 95,200 L 55,195 L 45,170 Z',
  labelX: 82,
  labelY: 172
},
{
  id: 'pangongangan',
  name: 'Pangongangan',
  kecamatan: 'Manguharjo',
  path: 'M 140,100 L 175,95 L 195,125 L 200,160 L 170,175 L 145,165 L 145,135 Z',
  labelX: 170,
  labelY: 140
},
{
  id: 'nambangan-lor',
  name: 'Nambangan Lor',
  kecamatan: 'Manguharjo',
  path: 'M 95,200 L 120,180 L 155,190 L 160,220 L 130,235 L 100,225 Z',
  labelX: 128,
  labelY: 210
},
{
  id: 'nambangan-kidul',
  name: 'Nambangan Kidul',
  kecamatan: 'Manguharjo',
  path: 'M 55,195 L 95,200 L 100,225 L 130,235 L 125,265 L 85,270 L 50,250 L 45,220 Z',
  labelX: 85,
  labelY: 238
},
// === Kec. Taman (south-center) ===
{
  id: 'kejuron',
  name: 'Kejuron',
  kecamatan: 'Taman',
  path: 'M 170,175 L 200,160 L 225,170 L 230,200 L 200,210 L 175,205 Z',
  labelX: 200,
  labelY: 190
},
{
  id: 'taman',
  name: 'Taman',
  kecamatan: 'Taman',
  path: 'M 225,170 L 265,160 L 290,175 L 295,210 L 270,220 L 230,200 Z',
  labelX: 260,
  labelY: 192
},
{
  id: 'pandean',
  name: 'Pandean',
  kecamatan: 'Taman',
  path: 'M 230,200 L 270,220 L 280,250 L 255,265 L 225,255 L 210,235 Z',
  labelX: 248,
  labelY: 238
},
{
  id: 'kuncen',
  name: 'Kuncen',
  kecamatan: 'Taman',
  path: 'M 155,190 L 175,205 L 200,210 L 210,235 L 185,255 L 155,245 L 140,220 Z',
  labelX: 175,
  labelY: 225
},
{
  id: 'mojorejo',
  name: 'Mojorejo',
  kecamatan: 'Taman',
  path: 'M 290,175 L 330,170 L 350,195 L 345,230 L 310,240 L 295,210 Z',
  labelX: 320,
  labelY: 205
},
{
  id: 'manisrejo',
  name: 'Manisrejo',
  kecamatan: 'Taman',
  path: 'M 295,210 L 310,240 L 345,230 L 350,260 L 320,280 L 280,250 L 270,220 Z',
  labelX: 312,
  labelY: 248
},
{
  id: 'demangan',
  name: 'Demangan',
  kecamatan: 'Taman',
  path: 'M 155,245 L 185,255 L 195,285 L 170,310 L 135,300 L 125,270 Z',
  labelX: 160,
  labelY: 278
},
{
  id: 'josenan',
  name: 'Josenan',
  kecamatan: 'Taman',
  path: 'M 185,255 L 210,235 L 225,255 L 255,265 L 250,295 L 220,310 L 195,285 Z',
  labelX: 220,
  labelY: 278
},
// === Kec. Kartoharjo (east) ===
{
  id: 'tawangrejo',
  name: 'Tawangrejo',
  kecamatan: 'Kartoharjo',
  path: 'M 285,55 L 330,40 L 365,50 L 370,80 L 345,95 L 310,90 L 275,80 Z',
  labelX: 325,
  labelY: 68
},
{
  id: 'kelun',
  name: 'Kelun',
  kecamatan: 'Kartoharjo',
  path: 'M 365,50 L 410,35 L 440,50 L 445,75 L 420,85 L 390,80 L 370,80 Z',
  labelX: 408,
  labelY: 62
},
{
  id: 'rejomulyo',
  name: 'Rejomulyo',
  kecamatan: 'Kartoharjo',
  path: 'M 370,80 L 420,85 L 445,75 L 460,95 L 450,120 L 410,125 L 375,110 L 345,95 Z',
  labelX: 410,
  labelY: 102
},
{
  id: 'sukosari',
  name: 'Sukosari',
  kecamatan: 'Kartoharjo',
  path: 'M 275,80 L 310,90 L 345,95 L 375,110 L 365,140 L 330,145 L 290,130 L 255,115 Z',
  labelX: 315,
  labelY: 115
},
{
  id: 'oro-oro-ombo',
  name: 'Oro-Oro Ombo',
  kecamatan: 'Kartoharjo',
  path: 'M 255,115 L 290,130 L 330,145 L 325,170 L 290,175 L 265,160 L 225,130 Z',
  labelX: 282,
  labelY: 150
},
{
  id: 'kartoharjo',
  name: 'Kartoharjo',
  kecamatan: 'Kartoharjo',
  path: 'M 330,145 L 365,140 L 395,150 L 400,180 L 370,190 L 350,195 L 330,170 Z',
  labelX: 365,
  labelY: 168
},
{
  id: 'klegen',
  name: 'Klegen',
  kecamatan: 'Kartoharjo',
  path: 'M 365,140 L 410,125 L 450,120 L 460,145 L 445,170 L 415,175 L 395,150 Z',
  labelX: 420,
  labelY: 148
},
{
  id: 'pilangbango',
  name: 'Pilangbango',
  kecamatan: 'Kartoharjo',
  path: 'M 395,150 L 415,175 L 445,170 L 460,195 L 450,225 L 415,230 L 385,215 L 370,190 L 400,180 Z',
  labelX: 425,
  labelY: 200
},
{
  id: 'kanigoro',
  name: 'Kanigoro',
  kecamatan: 'Kartoharjo',
  path: 'M 370,190 L 385,215 L 415,230 L 420,260 L 390,280 L 350,260 L 345,230 L 350,195 Z',
  labelX: 385,
  labelY: 240
}];

const kecamatanColors: Record<string, string> = {
  Manguharjo: '#1B7A3D',
  Taman: '#F5A623',
  Kartoharjo: '#3B82F6'
};
export function InteractiveMap() {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [mousePos, setMousePos] = useState({
    x: 0,
    y: 0
  });
  const selectedKelurahan = kelurahanData.find((k) => k.id === selectedId);
  const hoveredKelurahan = kelurahanData.find((k) => k.id === hoveredId);
  const handleClick = useCallback((id: string) => {
    setSelectedId((prev) => prev === id ? null : id);
  }, []);
  const handleMouseMove = useCallback((e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  }, []);
  const getFill = (id: string) => {
    if (selectedId === id) return '#F5C542';
    if (hoveredId === id) return '#F5E6C8';
    return '#f8f8f8';
  };
  return (
    <div className="flex flex-col h-full">
      {/* Map Container */}
      <div
        className="relative rounded-3xl border-4 overflow-hidden flex-1"
        style={{
          backgroundColor: '#2A9D8F',
          borderColor: '#F5D08A'
        }}>
        
        {/* SVG Map */}
        <svg
          viewBox="30 15 450 300"
          className="w-full h-full"
          style={{
            minHeight: '340px'
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredId(null)}>
          
          {/* Kecamatan boundary groups */}
          {/* All kelurahan polygons */}
          {kelurahanData.map((kel) =>
          <g key={kel.id}>
              <path
              d={kel.path}
              fill={getFill(kel.id)}
              stroke="#555"
              strokeWidth="0.8"
              className="cursor-pointer"
              style={{
                transition: 'fill 0.2s ease'
              }}
              onMouseEnter={() => setHoveredId(kel.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => handleClick(kel.id)} />
            
            </g>
          )}

          {/* Kecamatan boundary overlays (thicker lines) */}
          {/* Manguharjo outer boundary */}
          <path
            d="M 170,30 L 210,25 L 225,45 L 270,35 L 285,55 L 275,80 L 255,115 L 225,130 L 195,125 L 200,160 L 170,175 L 145,165 L 145,135 L 115,150 L 120,180 L 155,190 L 160,220 L 130,235 L 125,265 L 85,270 L 50,250 L 45,220 L 55,195 L 45,170 L 60,140 L 60,110 L 70,85 L 110,85 L 110,55 L 150,42 L 170,50 Z"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            pointerEvents="none" />
          
          {/* Taman outer boundary */}
          <path
            d="M 170,175 L 200,160 L 225,170 L 265,160 L 290,175 L 330,170 L 350,195 L 345,230 L 350,260 L 320,280 L 250,295 L 220,310 L 195,285 L 170,310 L 135,300 L 125,270 L 155,245 L 140,220 L 155,190 Z"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            pointerEvents="none" />
          
          {/* Kartoharjo outer boundary */}
          <path
            d="M 285,55 L 330,40 L 365,50 L 410,35 L 440,50 L 460,95 L 460,145 L 460,195 L 450,225 L 420,260 L 390,280 L 350,260 L 345,230 L 350,195 L 330,170 L 290,175 L 265,160 L 225,130 L 255,115 L 275,80 Z"
            fill="none"
            stroke="#333"
            strokeWidth="2"
            pointerEvents="none" />
          

          {/* Kecamatan labels */}
          <text
            x="120"
            y="155"
            className="font-poppins"
            fill="#1B7A3D"
            fontSize="9"
            fontWeight="800"
            textAnchor="middle"
            pointerEvents="none"
            opacity="0.5">
            
            Kec. Manguharjo
          </text>
          <text
            x="240"
            y="250"
            className="font-poppins"
            fill="#B8860B"
            fontSize="9"
            fontWeight="800"
            textAnchor="middle"
            pointerEvents="none"
            opacity="0.5">
            
            Kec. Taman
          </text>
          <text
            x="390"
            y="155"
            className="font-poppins"
            fill="#2563EB"
            fontSize="9"
            fontWeight="800"
            textAnchor="middle"
            pointerEvents="none"
            opacity="0.5">
            
            Kec. Kartoharjo
          </text>
        </svg>

        {/* Hover Tooltip */}
        <AnimatePresence>
          {hoveredId && hoveredKelurahan && !selectedId &&
          <motion.div
            initial={{
              opacity: 0,
              y: 4
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              y: 4
            }}
            transition={{
              duration: 0.15
            }}
            className="absolute pointer-events-none z-30 bg-white rounded-lg shadow-lg px-3 py-2 border border-gray-200"
            style={{
              left: Math.min(mousePos.x + 12, 280),
              top: mousePos.y - 40
            }}>
            
              <p className="text-xs font-bold text-gray-800">
                {hoveredKelurahan.name}
              </p>
              <p className="text-[10px] text-gray-500">
                {t('map.distPrefix')} {hoveredKelurahan.kecamatan}
              </p>
            </motion.div>
          }
        </AnimatePresence>

        {/* Click Popup */}
        <AnimatePresence>
          {selectedId && selectedKelurahan &&
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 8
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 8
            }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 25
            }}
            className="absolute z-30 bg-white rounded-xl shadow-xl border-2 px-4 py-3 w-48"
            style={{
              borderColor:
              kecamatanColors[selectedKelurahan.kecamatan] || '#ccc',
              left: '50%',
              top: '12px',
              transform: 'translateX(-50%)'
            }}>
            
              <div className="flex items-center gap-2 mb-1">
                <div
                className="w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor:
                  kecamatanColors[selectedKelurahan.kecamatan]
                }} />
              
                <p className="text-xs font-bold text-gray-500">
                  {t('map.distPrefix')} {selectedKelurahan.kecamatan}
                </p>
              </div>
              <p className="text-sm font-bold text-gray-900 mb-1">
                {selectedKelurahan.name}
              </p>
              <p className="text-[10px] text-primary font-semibold cursor-pointer hover:underline">
                {t('map.clickDetail')}
              </p>
              <button
              onClick={() => setSelectedId(null)}
              className="absolute top-1.5 right-2 text-gray-400 hover:text-gray-600 text-xs font-bold">
              
                ✕
              </button>
            </motion.div>
          }
        </AnimatePresence>

        {/* Info Panel - Bottom Left */}
        <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-2.5 shadow-md border border-gray-100 z-20">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
            {t('map.overallArea')}
          </p>
          <p className="text-sm font-bold text-gray-900">Kota Madiun</p>
          <div className="flex gap-3 mt-1.5">
            <div>
              <p className="text-lg font-black text-primary leading-none">3</p>
              <p className="text-[9px] text-gray-500">{t('map.district')}</p>
            </div>
            <div>
              <p className="text-lg font-black text-primary leading-none">27</p>
              <p className="text-[9px] text-gray-500">{t('map.subDistrict')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center text-xs text-gray-500 font-medium mt-2">
        {t('map.footer')}
      </p>
    </div>);

}