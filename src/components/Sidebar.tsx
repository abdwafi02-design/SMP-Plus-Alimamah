import React from 'react';
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  UserCheck,
  GraduationCap,
  Users,
  MessageSquare,
  Video,
  PhoneCall,
  ExternalLink,
} from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface SidebarProps {
  isOpen: boolean;
  onToggle: () => void;
  currentTab: string;
  onSelectTab: (tab: string, subSection?: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  onToggle,
  currentTab,
  onSelectTab,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          onClick={onToggle}
          className="fixed inset-0 z-40 bg-slate-950/40 backdrop-blur-xs lg:hidden transition-opacity"
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container - Ramping & Bersih */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-all duration-300 ease-in-out shadow-lg lg:shadow-none ${
          isOpen ? 'w-64 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-18'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-14 px-3.5 border-b border-slate-200/80 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-850/60">
          <div className={`flex items-center gap-2.5 overflow-hidden ${!isOpen && 'lg:hidden'}`}>
            <div className="w-7 h-7 rounded-lg bg-sky-500/10 dark:bg-sky-500/20 text-sky-600 flex items-center justify-center font-bold text-xs">
              GTK
            </div>
            <div className="flex flex-col">
              <span className="text-xs font-bold text-slate-900 dark:text-white truncate">
                Navigasi
              </span>
              <span className="text-[10px] text-slate-500 truncate">
                SMP Plus Al-Imamah
              </span>
            </div>
          </div>

          {/* Toggle Expand/Collapse Button */}
          <button
            onClick={onToggle}
            className="p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/60 dark:hover:bg-slate-800 transition-colors ml-auto"
            title={isOpen ? "Perkecil Menu" : "Perluas Menu"}
            aria-label={isOpen ? "Perkecil Menu" : "Perluas Menu"}
          >
            {isOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        </div>

        {/* Scrollable Navigation Body */}
        <div className="flex-1 overflow-y-auto px-2.5 py-3 space-y-1">
          {/* Main Primary Links */}
          <button
            onClick={() => onSelectTab('beranda')}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'beranda'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/25'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Dashboard"
          >
            <LayoutDashboard className="w-4 h-4 shrink-0" />
            {isOpen && <span>Dashboard</span>}
          </button>

          <button
            onClick={() => onSelectTab('profil')}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'profil'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/25'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Profil Pimpinan"
          >
            <UserCheck className="w-4 h-4 shrink-0" />
            {isOpen && <span>Profil Pimpinan</span>}
          </button>

          <button
            onClick={() => onSelectTab('gtk')}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'gtk'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/25'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Guru"
          >
            <Users className="w-4 h-4 shrink-0" />
            {isOpen && <span>Guru</span>}
          </button>

          <button
            onClick={() => onSelectTab('murid')}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'murid'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/25'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Siswa"
          >
            <GraduationCap className="w-4 h-4 shrink-0" />
            {isOpen && <span>Siswa</span>}
          </button>

          <button
            onClick={() => onSelectTab('media')}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'media'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/25'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Video & Dokumentasi"
          >
            <Video className="w-4 h-4 shrink-0" />
            {isOpen && <span>Video & Dokumentasi</span>}
          </button>

          <button
            onClick={() => onSelectTab('saran')}
            className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold transition-all ${
              currentTab === 'saran'
                ? 'bg-sky-500 text-white shadow-sm shadow-sky-500/25'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
            title="Kotak Saran"
          >
            <MessageSquare className="w-4 h-4 shrink-0" />
            {isOpen && <span>Kotak Saran</span>}
          </button>

          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 transition-all border border-emerald-200/50 dark:border-emerald-800/40"
            title="Kontak WhatsApp"
          >
            <PhoneCall className="w-4 h-4 shrink-0 text-emerald-600" />
            {isOpen && (
              <div className="flex items-center justify-between flex-1 truncate">
                <span>Kontak WhatsApp</span>
                <ExternalLink className="w-3 h-3 opacity-60" />
              </div>
            )}
          </a>
        </div>

        {/* Sidebar Footer info */}
        {isOpen && (
          <div className="p-3 border-t border-slate-200/80 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-850/70 text-[10px] text-slate-500">
            <p className="font-semibold text-slate-700 dark:text-slate-300">SMP PLUS AL-IMAMAH</p>
            <p className="truncate">Ponpes Tadribuddu'aat · Pamoroh</p>
          </div>
        )}
      </aside>
    </>
  );
};
