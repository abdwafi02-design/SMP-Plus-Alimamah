import React, { useState, useRef, useEffect } from 'react';
import { 
  Menu, 
  PhoneCall, 
  ChevronDown, 
  ExternalLink,
  UserCheck,
  BookOpen,
  Users,
  GraduationCap,
  Video,
  ClipboardList,
  Sparkles,
  FileText,
  CalendarCheck,
  CheckCircle2,
  FolderDown,
  Award
} from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';
import { SCHOOL_INFO, TEACHER_APPS_LINKS } from '../data/schoolData';

interface HeaderProps {
  currentTab: string;
  onSelectTab: (tab: string, subSection?: string) => void;
  onToggleSidebar: () => void;
  isSidebarOpen: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  onToggleSidebar,
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDropdownToggle = (menuName: string) => {
    setOpenDropdown(prev => prev === menuName ? null : menuName);
  };

  const handleNavigate = (tab: string, sub?: string) => {
    onSelectTab(tab, sub);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800 transition-colors shadow-xs">
      <div className="flex items-center justify-between gap-4 px-4 md:px-8 py-3" ref={dropdownRef}>
        {/* Zone 1: Brand Wordmark & Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onToggleSidebar}
            className="p-2 -ml-1 text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-sky-500"
            aria-label="Buka/Tutup Menu Sidebar"
          >
            <Menu className="w-5 h-5" />
          </button>

          <button 
            onClick={() => handleNavigate('beranda')}
            className="flex items-center gap-2.5 text-left group"
          >
            <SchoolEmblem size={38} />
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors whitespace-nowrap">
                SMP Plus Al-Imamah
              </span>
              <span className="text-[11px] font-medium text-emerald-600 dark:text-emerald-400 -mt-0.5 whitespace-nowrap hidden sm:inline">
                Berbasis Pesantren
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: Disatukan ke Menu Navigasi Atas (Ramping & Dropdown Modern) */}
        <nav className="hidden lg:flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-300">
          {/* Dashboard */}
          <button
            onClick={() => handleNavigate('beranda')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              currentTab === 'beranda'
                ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Dashboard
          </button>

          {/* Profil Sekolah Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('profil')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                currentTab === 'profil'
                  ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Profil Sekolah</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'profil' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'profil' && (
              <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-fade-in text-xs">
                <button
                  onClick={() => handleNavigate('profil', 'pengasuh')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Profil Pengasuh Ponpes</span>
                  <span className="text-[10px] text-amber-500 font-bold">KH. Masykur</span>
                </button>
                <button
                  onClick={() => handleNavigate('profil', 'ketua-yayasan')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Profil Ketua Yayasan</span>
                  <span className="text-[10px] text-emerald-500 font-bold">KH. Izzat</span>
                </button>
                <button
                  onClick={() => handleNavigate('profil', 'kepala-sekolah')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Profil Kepala Sekolah</span>
                  <span className="text-[10px] text-sky-500 font-bold">Abd Wafi, S.Pd.I</span>
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                <button
                  onClick={() => handleNavigate('profil', 'sekolah')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold flex items-center justify-between"
                >
                  <span>Visi, Misi, Dan Tujuan Sekolah</span>
                  <span className="text-[10px] text-sky-500 font-bold">6 Target</span>
                </button>
                <button
                  onClick={() => handleNavigate('profil', 'struktur')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold flex items-center justify-between"
                >
                  <span>Struktur Organisasi Sekolah</span>
                  <span className="text-[10px] bg-sky-100 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 font-bold px-1.5 py-0.5 rounded-md">Bagan Resmi</span>
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                <a
                  href={SCHOOL_INFO.historyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Sejarah Sekolah (Blog)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={SCHOOL_INFO.greetingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Sambutan Kepala Sekolah</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            )}
          </div>

          {/* Guru & GTK Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('gtk')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                currentTab === 'gtk'
                  ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Guru</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'gtk' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'gtk' && (
              <div className="absolute left-0 mt-2 w-72 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-fade-in text-xs">
                <button
                  onClick={() => handleNavigate('gtk', 'all')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 font-bold flex items-center justify-between"
                >
                  <span>Semua Layanan</span>
                  <span className="text-[10px] text-sky-600 dark:text-sky-400 font-normal">Dashboard GTK</span>
                </button>
                <button
                  onClick={() => handleNavigate('gtk', 'guru')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Direktori Profil Dewan Guru
                </button>
                <button
                  onClick={() => handleNavigate('gtk', 'waka')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Wakil Kepala Sekolah (Waka Kurikulum, Kesiswaan, Humas, Sarpras)
                </button>
                <button
                  onClick={() => handleNavigate('gtk', 'wali')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Wali Kelas VII, VIII, IX</span>
                  <span className="text-[10px] text-emerald-500 font-bold">Rombel & Konsultasi</span>
                </button>
                <button
                  onClick={() => handleNavigate('gtk', 'rapat')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Koordinasi & Mutu (Rapat Rutin)
                </button>
                <button
                  onClick={() => handleNavigate('gtk', 'perangkat')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Perangkat Pembelajaran Terpadu (Kls 7-9)
                </button>
                <button
                  onClick={() => handleNavigate('gtk', 'video')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Media Digital (Koleksi Video Pembelajaran)
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                <a
                  href={TEACHER_APPS_LINKS.ejurnal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 hover:bg-sky-50 dark:hover:bg-sky-950/30 text-sky-600 dark:text-sky-400 flex items-center justify-between"
                >
                  <span className="font-medium">E-Jurnal Guru 2026/2027</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
                <a
                  href={TEACHER_APPS_LINKS.absensi.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-between"
                >
                  <span className="font-medium">E-Absensi Guru (s.id)</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
                <a
                  href={TEACHER_APPS_LINKS.supervisi.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 hover:bg-amber-50 dark:hover:bg-amber-950/30 text-amber-600 dark:text-amber-400 flex items-center justify-between"
                >
                  <span className="font-medium">Supervisi Guru (Canva)</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </div>
            )}
          </div>

          {/* Murid & Kesiswaan Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('murid')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                currentTab === 'murid'
                  ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Siswa</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'murid' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'murid' && (
              <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-fade-in text-xs">
                <button
                  onClick={() => handleNavigate('murid', 'spmb')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>SPMB 2026/2027</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Dibuka</span>
                </button>
                <a
                  href={TEACHER_APPS_LINKS.spmbForm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-between"
                >
                  <span>Form Pendaftaran SPMB</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <a
                  href={TEACHER_APPS_LINKS.catatanHarianSiswa.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-sky-600 dark:text-sky-400 flex items-center justify-between"
                >
                  <span className="font-medium">Catatan Harian Siswa (s.id)</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
                <button
                  onClick={() => handleNavigate('murid', 'catatan')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Simulasi Mutaba'ah Harian
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                <button
                  onClick={() => handleNavigate('murid', 'tatatertib')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Tata Tertib Santri & Siswa
                </button>
              </div>
            )}
          </div>

          {/* Info & Media Dropdown */}
          <div className="relative">
            <button
              onClick={() => handleDropdownToggle('info')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
                currentTab === 'media' || currentTab === 'info'
                  ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold'
                  : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <span>Info & Media</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${openDropdown === 'info' ? 'rotate-180' : ''}`} />
            </button>

            {openDropdown === 'info' && (
              <div className="absolute left-0 mt-2 w-64 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl py-2 z-50 animate-fade-in text-xs">
                <button
                  onClick={() => handleNavigate('media', 'purnawiyata')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Haflatul Huffadz 2025/2026 (Live)
                </button>
                <button
                  onClick={() => handleNavigate('media')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Galeri Video & Dokumentasi
                </button>
                <div className="my-1 border-t border-slate-100 dark:border-slate-800" />
                <button
                  onClick={() => handleNavigate('info', 'ekskul')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Ekstrakurikuler Santri
                </button>
                <button
                  onClick={() => handleNavigate('info', 'eijazah')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  e-Ijazah & e-Rapor
                </button>
                <button
                  onClick={() => handleNavigate('info', 'alumni')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Alumni Al-Imamah
                </button>
                <button
                  onClick={() => handleNavigate('info', 'kelulusan')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Pengumuman Kelulusan
                </button>
                <button
                  onClick={() => handleNavigate('info', 'liburan')}
                  className="w-full text-left px-4 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                >
                  Kalender Liburan & Akademik
                </button>
              </div>
            )}
          </div>

          {/* Kotak Saran */}
          <button
            onClick={() => handleNavigate('saran')}
            className={`px-3 py-1.5 rounded-xl transition-all whitespace-nowrap ${
              currentTab === 'saran'
                ? 'bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400 font-bold'
                : 'hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            Kotak Saran
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-2 shrink-0">
          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl shadow-xs transition-all duration-150 hover:shadow-emerald-600/20 whitespace-nowrap shrink-0 focus-visible:ring-2 focus-visible:ring-emerald-500"
          >
            <PhoneCall className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">WA</span>
          </a>
        </div>
      </div>
    </header>
  );
};
