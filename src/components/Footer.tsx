import React from 'react';
import { PhoneCall, MapPin, Globe, ExternalLink, Heart } from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';
import { SCHOOL_INFO } from '../data/schoolData';

interface FooterProps {
  onSelectTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="mt-16 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <SchoolEmblem size={44} />
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  SMP PLUS AL-IMAMAH
                </h3>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  Pondok Pesantren Tadribuddu'aat
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
              Lembaga pendidikan formal tingkat menengah pertama berbasis pesantren yang berkomitmen mencetak generasi santri: Berilmu, Berakhlak, Berprestasi, dan Bermanfaat.
            </p>

            <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                <span>{SCHOOL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <PhoneCall className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>WhatsApp: {SCHOOL_INFO.whatsappNumber}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigasi Cepat */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Navigasi Terpadu
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => onSelectTab('beranda')} className="hover:text-sky-600 transition-colors">
                  Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('profil')} className="hover:text-sky-600 transition-colors">
                  Profil Pengasuh & Pimpinan
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('gtk')} className="hover:text-sky-600 transition-colors">
                  Guru
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('murid')} className="hover:text-sky-600 transition-colors">
                  SPMB & Catatan Harian Siswa
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('saran')} className="hover:text-sky-600 transition-colors">
                  Kotak Saran Konstruktif
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Portal Resmi */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Layanan GTK Digital
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a 
                  href="https://bit.ly/jurnalguru-smp-plus-alimamah2026-2027" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 transition-colors flex items-center gap-1"
                >
                  <span>E-Jurnal Guru 2026/2027</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://s.id/PresensiSMPPlusAlimamah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 transition-colors flex items-center gap-1"
                >
                  <span>E-Absensi GTK (s.id)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://supervisi-guru-smp.my.canva.site/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 transition-colors flex items-center gap-1"
                >
                  <span>Supervisi Guru Canva</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a 
                  href="https://s.id/catatan-harian-siswa-alimamah" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-sky-600 transition-colors flex items-center gap-1"
                >
                  <span>Catatan Harian Siswa</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 SMP Plus Al-Imamah · Ponpes Tadribuddu'aat Pamoroh Kadur Pamekasan. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2">
            <span>Berilmu, Berakhlak, Berprestasi, dan Bermanfaat</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
