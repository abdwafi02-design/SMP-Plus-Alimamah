import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  FileText, 
  CheckCircle2, 
  Video, 
  GraduationCap, 
  CalendarCheck, 
  ClipboardCheck, 
  Layers, 
  Users, 
  FolderDown,
  Sparkles
} from 'lucide-react';
import { SchoolEmblem } from './SchoolEmblem';
import { 
  SCHOOL_INFO, 
  LEADERSHIP_PROFILES, 
  TEACHERS_LIST, 
  TEACHER_APPS_LINKS,
  RECENT_ACTIVITIES
} from '../data/schoolData';

interface HeroBannerProps {
  onNavigateTab: (tab: string, subSection?: string) => void;
  onOpenVideo?: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({ 
  onNavigateTab,
}) => {
  const pengasuh = LEADERSHIP_PROFILES.find(p => p.id === 'pengasuh');
  const kepsek = LEADERSHIP_PROFILES.find(p => p.id === 'kepala_sekolah');
  const yayasan = LEADERSHIP_PROFILES.find(p => p.id === 'ketua_yayasan');

  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative rounded-3xl overflow-hidden shadow-xl border border-sky-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        {/* Dynamic Background Image with Measured Scrim */}
        <div className="relative min-h-[480px] lg:min-h-[520px] flex items-center">
          <img
            src={SCHOOL_INFO.heroImage}
            alt="Siswa SMP Plus Al-Imamah belajar di lingkungan pesantren modern"
            className="absolute inset-0 w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {/* Measured gradient scrim for perfect text contrast (anti-slop rule) */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/80 to-sky-950/60 backdrop-blur-[1.5px]" />
          
          {/* Subtle Decorative Islamic Geometric Pattern Overlay */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Hero Content */}
          <div className="relative z-10 w-full px-6 py-10 md:px-12 md:py-14 text-white max-w-5xl">
            {/* Top Identity Lockup */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <SchoolEmblem size={56} className="shadow-lg shadow-sky-500/30" />
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                  Pondok Pesantren Tadribuddu'aat
                </span>
                <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight text-white drop-shadow-sm">
                  {SCHOOL_INFO.name}
                </h1>
              </div>
            </div>

            {/* Sambutan Text */}
            <div className="mb-6 max-w-3xl">
              <p className="text-lg md:text-2xl font-bold leading-snug text-sky-100">
                “Selamat Datang Di SMP Plus Al-Imamah; Sekolah Berbasis Pesantren Salaf Dan Modern”
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-sm font-medium text-emerald-300">
                <span>Berilmu</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>Berakhlak</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>Berprestasi</span>
                <span aria-hidden="true" className="text-white/40">·</span>
                <span>Bermanfaat</span>
              </div>
            </div>

            {/* Leadership Spotlight Cards within Hero */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6 max-w-3xl">
              {/* Pengasuh */}
              <button
                onClick={() => onNavigateTab('profil', 'pengasuh')}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 transition-all text-left group"
              >
                <img
                  src={pengasuh?.photo}
                  alt={pengasuh?.name}
                  className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-amber-400 shrink-0 bg-white"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-amber-300 uppercase tracking-wide">Pengasuh Ponpes</p>
                  <p className="text-xs font-bold text-white truncate group-hover:text-amber-200 transition-colors">
                    {pengasuh?.name}
                  </p>
                  <p className="text-[10px] text-slate-300 truncate">Tadribuddu'aat</p>
                </div>
              </button>

              {/* Ketua Yayasan */}
              <button
                onClick={() => onNavigateTab('profil', 'ketua-yayasan')}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 transition-all text-left group"
              >
                <img
                  src={yayasan?.photo}
                  alt={yayasan?.name}
                  className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-emerald-400 shrink-0 bg-white"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-emerald-300 uppercase tracking-wide">Ketua Yayasan</p>
                  <p className="text-xs font-bold text-white truncate group-hover:text-emerald-200 transition-colors">
                    {yayasan?.name}
                  </p>
                  <p className="text-[10px] text-slate-300 truncate">Yayasan Al-Imamah</p>
                </div>
              </button>

              {/* Kepala Sekolah */}
              <button
                onClick={() => onNavigateTab('profil', 'kepala-sekolah')}
                className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 hover:bg-white/15 backdrop-blur-md border border-white/15 transition-all text-left group"
              >
                <img
                  src={kepsek?.photo}
                  alt={kepsek?.name}
                  className="w-12 h-12 rounded-full object-cover object-top ring-2 ring-sky-400 shrink-0 bg-white"
                />
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-sky-300 uppercase tracking-wide">Kepala Sekolah</p>
                  <p className="text-xs font-bold text-white truncate group-hover:text-sky-200 transition-colors">
                    {kepsek?.name}
                  </p>
                  <p className="text-[10px] text-slate-300 truncate">SMP Plus Al-Imamah</p>
                </div>
              </button>
            </div>

            {/* Circular Teacher & Staff Avatars Strip */}
            <div className="flex items-center gap-3 py-2">
              <span className="text-xs font-medium text-slate-300 shrink-0">Dewan Guru:</span>
              <div className="flex -space-x-2 overflow-hidden items-center">
                {TEACHERS_LIST.slice(0, 7).map((teacher) => (
                  teacher.photo ? (
                    <img
                      key={teacher.id}
                      src={teacher.photo}
                      alt={teacher.name}
                      title={`${teacher.name} (${teacher.subject})`}
                      className="inline-block h-8 w-8 rounded-full object-cover object-top ring-2 ring-white/80 dark:ring-slate-900 shadow-xs"
                    />
                  ) : (
                    <div
                      key={teacher.id}
                      title={`${teacher.name} (${teacher.subject})`}
                      className={`inline-block h-8 w-8 rounded-full ring-2 ring-white/80 dark:ring-slate-900 ${teacher.avatarColor} text-white flex items-center justify-center text-[10px] font-bold shadow-xs`}
                    >
                      {teacher.initials}
                    </div>
                  )
                ))}
                <button
                  onClick={() => onNavigateTab('gtk')}
                  className="flex items-center justify-center h-8 w-8 rounded-full bg-slate-800 text-white text-[11px] font-semibold ring-2 ring-white/80 hover:bg-sky-600 transition-colors"
                  title="Lihat semua Guru"
                >
                  +{TEACHERS_LIST.length - 6}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onNavigateTab('gtk', 'perangkat')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Jelajahi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigateTab('gtk')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-sm backdrop-blur-md border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Tentang Guru</span>
              </button>

              <a
                href={TEACHER_APPS_LINKS.spmbForm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all shadow-md shadow-amber-500/20"
              >
                <GraduationCap className="w-4 h-4" />
                <span>SPMB 2026/2027</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Dashboard Statistics & Quick Access Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Pusat Kendali & Layanan Terpadu Guru
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Akses cepat instrumen pembelajaran digital, presensi, jurnal, dan supervisi
            </p>
          </div>
          <span className="text-xs font-semibold text-sky-600 dark:text-sky-400">
            Tahun Ajaran 2026/2027
          </span>
        </div>

        {/* 8 Core Metric Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Card 1: E-Jurnal Guru */}
          <a
            href={TEACHER_APPS_LINKS.ejurnal.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-sky-400 dark:hover:border-sky-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600">
                <FileText className="w-5 h-5" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-sky-500" />
            </div>
            <p className="text-2xl font-bold tabular-nums text-slate-900 dark:text-white">100%</p>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">E-Jurnal Guru</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              bit.ly/jurnalguru-smp...
            </p>
          </a>

          {/* Card 2: E-Absensi Guru */}
          <a
            href={TEACHER_APPS_LINKS.absensi.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-emerald-400 dark:hover:border-emerald-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600">
                <CalendarCheck className="w-5 h-5" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-500" />
            </div>
            <p className="text-2xl font-bold tabular-nums text-slate-900 dark:text-white">Harian</p>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">E-Absensi Presensi</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              s.id/PresensiSMPPlus...
            </p>
          </a>

          {/* Card 3: E-Supervisi Guru (Canva) */}
          <a
            href={TEACHER_APPS_LINKS.supervisi.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-purple-50 dark:bg-purple-950/50 text-purple-600">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-purple-500" />
            </div>
            <p className="text-2xl font-bold tabular-nums text-slate-900 dark:text-white">Canva</p>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">E-Supervisi Guru</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              supervisi-guru-smp.my...
            </p>
          </a>

          {/* Card 4: Catatan Harian Siswa */}
          <a
            href={TEACHER_APPS_LINKS.catatanHarianSiswa.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500 transition-all hover:shadow-md group"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-amber-500" />
            </div>
            <p className="text-2xl font-bold tabular-nums text-slate-900 dark:text-white">Mutaba'ah</p>
            <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 mt-1">Catatan Harian Siswa</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">
              s.id/catatan-harian...
            </p>
          </a>
        </div>
      </div>

      {/* Deep Learning & Perangkat Ajar Banner */}
      <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-sky-600 via-sky-700 to-indigo-800 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl">
          <span className="text-xs font-bold tracking-wider uppercase text-sky-200">
            Perangkat Ajar Berbasis Deep Learning
          </span>
          <h3 className="text-xl md:text-2xl font-extrabold mt-1">
            Modul Pembelajaran Bermakna Kelas VII, VIII, & IX
          </h3>
          <p className="text-sm text-sky-100 mt-2 leading-relaxed">
            Terintegrasi kurikulum nasional dengan kedalaman ilmu kepesantrenan. Dilengkapi Alur Tujuan Pembelajaran, Asesmen Diagnostik, Bahan Ajar Interaktif, dan Pembiasaan Karakter Islami.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://drive.google.com/drive/folders/1gOyyoWpioReO189M6reHinHIrHlUHq4a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-white text-slate-900 hover:bg-sky-50 shadow-sm transition-all"
            >
              <span>Kelas 7 (Fase D)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1enquQDrEFNv7NNb-xED8z8-d1RPE1CVx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-emerald-400 text-slate-950 hover:bg-emerald-300 shadow-sm transition-all"
            >
              <span>Kelas 8 (Integrasi P5)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href="https://drive.google.com/drive/folders/1fxf00CQXTyEWLLOg30Zs5Ni-Ny0f_OJH"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-sm transition-all"
            >
              <span>Kelas 9 (Pengayaan & Ujian)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Two Column Layout: Recent Activities & Fast Navigation Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Aktivitas Terbaru (2 cols) */}
        <div className="lg:col-span-2 p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
          <div className="flex items-center justify-between mb-5">
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Aktivitas & Berita Terbaru Sekolah
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Laporan pelaksanaan agenda akademik, rapat guru, dan kegiatan pesantren
              </p>
            </div>
            <button
              onClick={() => onNavigateTab('profil', 'aktivitas')}
              className="text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
            >
              Lihat Semua
            </button>
          </div>

          <div className="space-y-4">
            {RECENT_ACTIVITIES.map((act) => (
              <div 
                key={act.id} 
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 hover:bg-sky-50/50 dark:hover:bg-slate-800/80 transition-colors border border-slate-100 dark:border-slate-800"
              >
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-1">
                  <span className="font-semibold text-sky-600 dark:text-sky-400">{act.category}</span>
                  <span className="tabular-nums">{act.date}</span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 mb-1">
                  {act.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {act.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Profil Singkat & Layanan Cepat */}
        <div className="space-y-6">
          {/* Box Sejarah & Visi Misi */}
          <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Sekolah Berbasis Pesantren
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
              SMP Plus Al-Imamah berlokasi di Dusun Oray, Desa Pamoroh, Kadur, Pamekasan, terintegrasi langsung dengan Pondok Pesantren Tadribuddu'aat.
            </p>

            <div className="space-y-2">
              <a
                href={SCHOOL_INFO.historyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                <span>Baca Sejarah Pendirian</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <a
                href={SCHOOL_INFO.greetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                <span>Sambutan Resmi Kepala Sekolah</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>

              <button
                onClick={() => onNavigateTab('profil', 'sekolah')}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-700/50 hover:bg-sky-50 dark:hover:bg-sky-950/40 text-xs font-semibold text-slate-800 dark:text-slate-200 transition-colors"
              >
                <span>Visi, Misi, Dan Tujuan Sekolah</span>
                <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
              </button>

              <button
                onClick={() => onNavigateTab('profil', 'struktur')}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 hover:bg-sky-100 text-xs font-bold text-sky-700 dark:text-sky-300 transition-colors"
              >
                <span>Struktur Organisasi Sekolah</span>
                <ArrowRight className="w-3.5 h-3.5 text-sky-500" />
              </button>
            </div>
          </div>

          {/* Kotak Saran Shortcut */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 text-white shadow-md">
            <h4 className="text-base font-bold mb-1">Ada Masukan & Saran?</h4>
            <p className="text-xs text-emerald-100 leading-relaxed mb-4">
              Kami menyambut saran konstruktif dari wali santri, guru, alumni, dan masyarakat untuk kemajuan sekolah.
            </p>
            <button
              onClick={() => onNavigateTab('saran')}
              className="w-full py-2.5 px-4 rounded-xl bg-white text-emerald-900 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-xs"
            >
              Kirim Saran Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
