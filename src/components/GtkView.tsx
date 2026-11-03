import React, { useState } from 'react';
import { 
  FileText, 
  ExternalLink, 
  CalendarCheck, 
  ClipboardCheck, 
  FolderDown, 
  Search, 
  Play,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  X,
  Copy,
  Check,
  BookOpen,
  Award,
  Phone,
  Video,
  Youtube,
  GraduationCap
} from 'lucide-react';
import { 
  TEACHERS_LIST, 
  DEEP_LEARNING_LINKS, 
  TEACHER_APPS_LINKS, 
  WALI_KELAS_INFO,
  WAKA_LIST,
  WakaProfile,
  VIDEO_GALLERY,
  VideoItem,
  SUBJECT_LEARNING_VIDEOS,
  SubjectLearningVideo
} from '../data/schoolData';

interface GtkViewProps {
  initialSubSection?: string;
  onOpenVideo?: (video: VideoItem) => void;
}

export const GtkView: React.FC<GtkViewProps> = ({ 
  initialSubSection = 'all', 
  onOpenVideo 
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialSubSection || 'all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSubjectFilter, setSelectedSubjectFilter] = useState<string>('all');
  const [selectedWaka, setSelectedWaka] = useState<WakaProfile | null>(null);
  const [copiedSuccess, setCopiedSuccess] = useState(false);

  const filteredTeachers = TEACHERS_LIST.filter(t => 
    t.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Ekosistem GTK & Pembelajaran
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Guru
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Portal guru terpadu: semua layanan, direktori profil dewan guru, wali kelas, rapat koordinasi, perangkat ajar, dan media digital
          </p>
        </div>

        {/* Tab Controls - Ordered per user specification */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'all'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Semua Layanan
          </button>
          <button
            onClick={() => setActiveTab('guru')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'guru'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Direktori Profil Dewan Guru
          </button>
          <button
            onClick={() => setActiveTab('waka')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'waka'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Wakil Kepala Sekolah (Waka)
          </button>
          <button
            onClick={() => setActiveTab('wali')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'wali'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Wali Kelas VII, VIII, IX
          </button>
          <button
            onClick={() => setActiveTab('rapat')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'rapat'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Koordinasi & Mutu
          </button>
          <button
            onClick={() => setActiveTab('perangkat')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'perangkat'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Perangkat Pembelajaran Terpadu
          </button>
          <button
            onClick={() => setActiveTab('video')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'video'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Media Digital
          </button>
        </div>
      </div>

      {/* 1. Semua Layanan: Top 3 Core Application Quick Cards */}
      {activeTab === 'all' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* E-Jurnal Guru */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-sky-500 to-blue-600 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-lg">
                  Portal Harian
                </span>
                <FileText className="w-6 h-6 text-sky-100" />
              </div>
              <h3 className="text-xl font-extrabold">{TEACHER_APPS_LINKS.ejurnal.title}</h3>
              <p className="text-xs text-sky-100 mt-2 leading-relaxed">
                {TEACHER_APPS_LINKS.ejurnal.description}
              </p>
            </div>
            <a
              href={TEACHER_APPS_LINKS.ejurnal.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white text-sky-900 font-bold text-xs hover:bg-sky-50 transition-colors shadow-xs"
            >
              <span>Buka E-Jurnal Guru</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* E-Absensi Guru */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-white/20 px-2.5 py-1 rounded-lg">
                  Kehadiran & Presensi
                </span>
                <CalendarCheck className="w-6 h-6 text-emerald-100" />
              </div>
              <h3 className="text-xl font-extrabold">{TEACHER_APPS_LINKS.absensi.title}</h3>
              <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                {TEACHER_APPS_LINKS.absensi.description}
              </p>
            </div>
            <a
              href={TEACHER_APPS_LINKS.absensi.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-white text-emerald-950 font-bold text-xs hover:bg-emerald-50 transition-colors shadow-xs"
            >
              <span>Buka E-Absensi (s.id)</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* E-Supervisi Guru */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-amber-500 to-yellow-600 text-slate-950 shadow-md relative overflow-hidden flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider bg-slate-950/15 px-2.5 py-1 rounded-lg text-slate-950">
                  Canva Site Resmi
                </span>
                <ClipboardCheck className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-extrabold">{TEACHER_APPS_LINKS.supervisi.title}</h3>
              <p className="text-xs text-slate-900/80 mt-2 leading-relaxed">
                {TEACHER_APPS_LINKS.supervisi.description}
              </p>
            </div>
            <a
              href={TEACHER_APPS_LINKS.supervisi.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-between px-4 py-2.5 rounded-xl bg-slate-950 text-white font-bold text-xs hover:bg-slate-900 transition-colors shadow-xs"
            >
              <span>Buka Supervisi Canva</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}

      {/* 2. Direktori Profil Dewan Guru */}
      {(activeTab === 'all' || activeTab === 'guru') && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                Pendidik & Tenaga Kependidikan
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                Direktori Profil Dewan Guru
              </h3>
              <p className="text-xs text-slate-500">
                Pendidik berdedikasi mengabdi di SMP Plus Al-Imamah
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Cari nama guru atau mata pelajaran..."
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredTeachers.map((teacher) => (
              <div 
                key={teacher.id}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    {teacher.photo ? (
                      <img
                        src={teacher.photo}
                        alt={teacher.name}
                        className="w-14 h-14 rounded-2xl object-cover object-top ring-2 ring-sky-500/20 dark:ring-sky-400/20 shadow-sm shrink-0"
                      />
                    ) : (
                      <div className={`w-14 h-14 rounded-2xl ${teacher.avatarColor} text-white flex items-center justify-center font-bold text-base shadow-xs shrink-0`}>
                        {teacher.initials}
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate" title={teacher.name}>
                        {teacher.name}
                      </h4>
                      <p className="text-[11px] text-sky-600 dark:text-sky-400 font-semibold truncate">
                        {teacher.subject}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-[11px] text-slate-600 dark:text-slate-400 border-t border-slate-200/60 dark:border-slate-700/60 pt-2.5">
                    <p><span className="font-semibold text-slate-700 dark:text-slate-300">Tugas:</span> {teacher.role}</p>
                    <p><span className="font-semibold text-slate-700 dark:text-slate-300">Pendidikan:</span> {teacher.education}</p>
                    <p><span className="font-semibold text-slate-700 dark:text-slate-300">Dedikasi:</span> {teacher.experience}</p>
                  </div>
                </div>

                {teacher.driveLink ? (
                  <a
                    href={teacher.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center justify-between p-2.5 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-[11px] font-semibold text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/50 border border-sky-200 dark:border-sky-800/50 transition-colors shadow-2xs group/btn"
                    title={`Akses Dokumen: ${teacher.driveLink}`}
                  >
                    <span className="group-hover/btn:underline truncate">
                      Akses Dokumen: {teacher.driveLink.replace(/^https?:\/\//, '')}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 text-sky-500 shrink-0 ml-1" />
                  </a>
                ) : (
                  <div className="mt-4 p-2 rounded-xl bg-slate-100/60 dark:bg-slate-800/40 text-[10px] text-slate-400 text-center border border-dashed border-slate-200 dark:border-slate-700/60 select-none">
                    <span>Akses Dokumen: Belum Tersedia</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 3. Wakil Kepala Sekolah (Waka Kurikulum, Kesiswaan, Humas, Sarana & Prasarana) */}
      {(activeTab === 'all' || activeTab === 'waka') && (
        <div className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200/80 dark:border-slate-800 pb-3">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                Struktur Manajemen & Pimpinan Pembantu
              </span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mt-0.5">
                Wakil Kepala Sekolah (Waka Kurikulum, Kesiswaan, Humas, Sarana dan Prasarana)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Jajaran pimpinan pembantu kepala sekolah dengan dokumen resmi tugas pokok dan kewajiban (SK Pengangkatan & Tupoksi)
              </p>
            </div>
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 shrink-0">
              Periode 2026/2027
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WAKA_LIST.map((waka) => (
              <div 
                key={waka.id}
                className="group rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo container in official portrait with red background */}
                  <div className="relative h-64 bg-red-700 overflow-hidden flex items-center justify-center">
                    <img
                      src={waka.photo}
                      alt={waka.name}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    {/* Badge top-left */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-sky-600/90 backdrop-blur-xs text-white text-[10px] font-bold shadow-md">
                        {waka.shortRole}
                      </span>
                    </div>

                    {/* Name overlay at bottom */}
                    <div className="absolute bottom-3 left-3 right-3 text-white">
                      <h4 className="text-sm font-black tracking-tight leading-tight drop-shadow-md">
                        {waka.name}
                      </h4>
                      <p className="text-[11px] text-sky-200 font-semibold drop-shadow-sm mt-0.5 truncate">
                        {waka.roleTitle}
                      </p>
                    </div>
                  </div>

                  {/* Body description & scope */}
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-3">
                      {waka.description}
                    </p>

                    <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-700/70 space-y-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-bold text-slate-800 dark:text-slate-200">
                        <Briefcase className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span>Fokus Tugas Pokok:</span>
                      </div>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug line-clamp-2">
                        {waka.tugasPokok[0]}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions: Akses Dokumen Tugas & Kewajiban */}
                <div className="p-4 pt-0 space-y-2">
                  <button
                    onClick={() => setSelectedWaka(waka)}
                    className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs shadow-xs transition-colors group/btn"
                  >
                    <span className="flex items-center gap-1.5">
                      <FileText className="w-3.5 h-3.5 shrink-0" />
                      <span>Akses Dokumen: Tugas & Kewajiban</span>
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-1 text-sky-200 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  {waka.driveLink && (
                    <a
                      href={waka.driveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-between px-3 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-200 font-semibold text-[11px] transition-colors"
                    >
                      <span className="truncate">Tautan Akses: {waka.driveLink}</span>
                      <ExternalLink className="w-3 h-3 text-slate-400 shrink-0 ml-1" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Wali Kelas & Pembimbing Rombel (Kelas VII, VIII, IX) */}
      {(activeTab === 'all' || activeTab === 'wali') && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-4">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                Pembimbing Karakter & Akademik Santri
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                Wali Kelas & Pembimbing Rombel (Kelas VII, VIII, IX)
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Wali kelas bertugas memantau perkembangan adab, ibadah, pembelajaran di kelas, serta jalur komunikasi langsung dan konsultasi wali murid.
              </p>
            </div>
            <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 text-xs font-bold shrink-0">
              Tahun Ajaran 2026/2027
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WALI_KELAS_INFO.map((wali, idx) => (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo Header in official red frame */}
                  <div className="relative h-60 bg-red-700 overflow-hidden flex items-center justify-center">
                    {wali.photo ? (
                      <img
                        src={wali.photo}
                        alt={wali.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <div className="w-20 h-20 rounded-full bg-emerald-600 text-white flex items-center justify-center text-2xl font-bold">
                        {idx === 0 ? 'VII' : idx === 1 ? 'VIII' : 'IX'}
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow-md">
                        {wali.grade}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <h4 className="text-base font-extrabold truncate drop-shadow-sm" title={wali.name}>
                        {wali.name}
                      </h4>
                      <p className="text-xs text-emerald-300 font-medium truncate">
                        {wali.class}
                      </p>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-3">
                    <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                      {wali.notes}
                    </p>

                    <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 text-xs text-slate-700 dark:text-slate-300 flex items-center justify-between">
                      <span className="text-slate-500">Kapasitas Rombel:</span>
                      <span className="font-bold text-slate-900 dark:text-white">{wali.studentsCount} Santri Terdaftar</span>
                    </div>
                  </div>
                </div>

                {/* Action Buttons: Berkas Drive & WhatsApp Konsultasi */}
                <div className="p-5 pt-0 space-y-2">
                  <a
                    href={wali.driveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-100 border border-slate-200 dark:border-slate-700 transition-colors shadow-2xs"
                  >
                    <span className="truncate">Berkas Administrasi Kelas (Drive)</span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 ml-1 text-slate-400" />
                  </a>

                  <a
                    href={wali.consultationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white transition-colors shadow-xs group"
                    title={`Hubungi ${wali.name} via WhatsApp (${wali.phone})`}
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 shrink-0" />
                      <span>Konsultasi {wali.grade}</span>
                    </span>
                    <span className="text-[10px] font-mono bg-emerald-700/60 px-2 py-0.5 rounded-md text-emerald-100 group-hover:bg-emerald-800 transition-colors">
                      {wali.phone}
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 4. Koordinasi & Mutu */}
      {(activeTab === 'all' || activeTab === 'rapat') && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase">
                Koordinasi & Mutu
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                Jadwal & Notulensi Rapat Rutin Dewan GTK
              </h3>
            </div>
            <span className="text-xs font-semibold text-emerald-600">
              Diselenggarakan Berkala
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-700">
              <span className="text-xs font-bold text-sky-600">Mingguan</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">Briefing Awal Pekan</h4>
              <p className="text-xs text-slate-500 mt-1">Setiap Senin pagi 06.45 WIB untuk evaluasi kedisiplinan dan pembiasaan shalat dhuha.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-700">
              <span className="text-xs font-bold text-emerald-600">Bulanan</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">Evaluasi Capaian Kurikulum</h4>
              <p className="text-xs text-slate-500 mt-1">Penyelarasan target materi Deep Learning, review e-jurnal, dan mutaba'ah tahfidz.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-700">
              <span className="text-xs font-bold text-amber-600">Semesteran</span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">Rapat Pleno & Supervisi</h4>
              <p className="text-xs text-slate-500 mt-1">Pleno kelulusan, penetapan kenaikan kelas, dan tindak lanjut supervisi kepala sekolah.</p>
            </div>
          </div>
        </div>
      )}

      {/* 5. Perangkat Pembelajaran Terpadu */}
      {(activeTab === 'all' || activeTab === 'perangkat') && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase">
                Perangkat Pembelajaran Terpadu
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                Google Drive Deep Learning Kelas 7, 8, dan 9
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Akses Langsung Cloud Storage Guru
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {DEEP_LEARNING_LINKS.map((item, index) => (
              <div 
                key={index}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 flex flex-col justify-between hover:border-sky-400 transition-colors group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white flex items-center justify-center font-bold text-sm mb-3">
                    {index + 7}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                    {item.label}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  <FolderDown className="w-3.5 h-3.5" />
                  <span>Buka Folder Drive</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Media Digital (Koleksi Video Pembelajaran 11 Mata Pelajaran & Kegiatan) */}
      {(activeTab === 'all' || activeTab === 'video') && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200 dark:border-slate-700 pb-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full bg-red-100 text-red-800 dark:bg-red-950/60 dark:text-red-300 text-xs font-bold uppercase tracking-wider flex items-center gap-1">
                  <Youtube className="w-3.5 h-3.5 fill-red-600 text-red-600" />
                  <span>Media Digital & Akun YouTube Guru</span>
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300">
                  11 Mata Pelajaran Terpadu
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                Koleksi Video Pembelajaran Guru
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Kanal materi pembelajaran resmi guru SMP Plus Al-Imamah tertaut ke akun YouTube setiap mata pelajaran untuk mendukung penguatan konsep Deep Learning
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-50 dark:bg-red-950/40 text-red-700 dark:text-red-300 text-xs font-bold hover:bg-red-100 transition-colors border border-red-200/60 dark:border-red-800/40"
              >
                <Youtube className="w-4 h-4 text-red-600 fill-current" />
                <span>Buka YouTube</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Subject Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
            <button
              onClick={() => setSelectedSubjectFilter('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                selectedSubjectFilter === 'all'
                  ? 'bg-red-600 text-white shadow-xs'
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              Semua Mapel (11)
            </button>
            {SUBJECT_LEARNING_VIDEOS.map((subj) => (
              <button
                key={subj.id}
                onClick={() => setSelectedSubjectFilter(subj.subject)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  selectedSubjectFilter === subj.subject
                    ? 'bg-red-600 text-white shadow-xs font-bold'
                    : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <span>{subj.subject}</span>
                <span className="text-[10px] opacity-75">({subj.code})</span>
              </button>
            ))}
          </div>

          {/* 11 Subject Video Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SUBJECT_LEARNING_VIDEOS
              .filter(v => selectedSubjectFilter === 'all' || v.subject === selectedSubjectFilter)
              .map((video) => (
                <div 
                  key={video.id}
                  className="rounded-3xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 hover:border-red-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  <div>
                    {/* Video Thumbnail Container with YouTube Play Overlay */}
                    <div 
                      onClick={() => onOpenVideo?.({
                        id: video.id,
                        title: video.title,
                        category: 'Pembelajaran',
                        youtubeUrl: video.youtubeUrl,
                        youtubeId: video.youtubeId,
                        duration: video.duration,
                        presenterOrEvent: video.teacher,
                        date: 'Semester Berjalan'
                      })}
                      className="relative aspect-video bg-slate-900 cursor-pointer overflow-hidden group/thumb"
                    >
                      <img
                        src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover group-hover/thumb:scale-105 transition-transform duration-300 opacity-80"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover/thumb:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-red-600 group-hover/thumb:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform group-hover/thumb:scale-110">
                          <Play className="w-5 h-5 fill-current ml-0.5" />
                        </div>
                      </div>
                      
                      {/* Subject Badge top-left */}
                      <div className="absolute top-2.5 left-2.5">
                        <span className={`px-2.5 py-1 rounded-lg text-white text-[10px] font-bold shadow-md ${video.badgeColor}`}>
                          {video.subject} ({video.code})
                        </span>
                      </div>

                      {/* Duration pill bottom-right */}
                      <div className="absolute bottom-2.5 right-2.5 px-2 py-0.5 bg-black/80 text-white text-[10px] font-mono rounded-md">
                        {video.duration}
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="p-4 space-y-2.5">
                      <div className="flex items-center justify-between text-[11px] text-slate-500">
                        <span className="font-semibold text-sky-600 dark:text-sky-400 truncate">
                          {video.teacher}
                        </span>
                        <span className="text-[10px] text-red-600 font-bold flex items-center gap-1 shrink-0">
                          <Youtube className="w-3 h-3 fill-current" />
                          Akun YouTube
                        </span>
                      </div>

                      <h4 
                        onClick={() => onOpenVideo?.({
                          id: video.id,
                          title: video.title,
                          category: 'Pembelajaran',
                          youtubeUrl: video.youtubeUrl,
                          youtubeId: video.youtubeId,
                          duration: video.duration,
                          presenterOrEvent: video.teacher,
                          date: 'Semester Berjalan'
                        })}
                        className="text-sm font-extrabold text-slate-900 dark:text-white leading-snug line-clamp-2 hover:text-red-600 dark:hover:text-red-400 cursor-pointer transition-colors"
                        title={video.title}
                      >
                        {video.title}
                      </h4>

                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {video.description}
                      </p>

                      {/* Topics Tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {video.topics.slice(0, 3).map((topic, tIdx) => (
                          <span 
                            key={tIdx} 
                            className="px-2 py-0.5 rounded-md bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700 text-[10px] text-slate-600 dark:text-slate-300"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: Play in App & Direct YouTube Link */}
                  <div className="p-4 pt-0 space-y-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenVideo?.({
                          id: video.id,
                          title: video.title,
                          category: 'Pembelajaran',
                          youtubeUrl: video.youtubeUrl,
                          youtubeId: video.youtubeId,
                          duration: video.duration,
                          presenterOrEvent: video.teacher,
                          date: 'Semester Berjalan'
                        })}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-colors shadow-2xs"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Tonton Video</span>
                      </button>

                      <a
                        href={video.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 font-bold text-xs transition-colors"
                        title={`Buka Akun/Kanal YouTube Mata Pelajaran ${video.subject}`}
                      >
                        <Youtube className="w-3.5 h-3.5 text-red-600 fill-current" />
                        <span>YouTube</span>
                        <ExternalLink className="w-3 h-3 text-slate-400" />
                      </a>
                    </div>

                    {/* Special link for Seni Budaya (MAHSUNAH, S.Pd) */}
                    {video.websiteUrl && (
                      <a
                        href={video.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-between p-2 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-[11px] font-bold text-purple-700 dark:text-purple-300 hover:bg-purple-100 border border-purple-200 dark:border-purple-800/60 transition-colors"
                      >
                        <span className="truncate">Web Seni Budaya ({video.websiteUrl})</span>
                        <ExternalLink className="w-3.5 h-3.5 text-purple-600 shrink-0 ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
          </div>

          {/* Supplementary: Video Kegiatan & Kajian Pesantren */}
          <div className="mt-8 pt-6 border-t border-slate-200/80 dark:border-slate-700 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase">
                  Video Kajian & Kegiatan Lembaga
                </span>
                <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                  Kajian Pesantren & Haflatul Huffadz
                </h4>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {VIDEO_GALLERY.map(video => (
                <div 
                  key={video.id}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 hover:border-sky-400 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                      <span className="font-semibold text-sky-600">{video.category}</span>
                      <span className="tabular-nums">Durasi: {video.duration}</span>
                    </div>
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      {video.title}
                    </h5>
                    <p className="text-xs text-slate-500 mt-1">
                      Narasumber: {video.presenterOrEvent}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center gap-2">
                    <button
                      onClick={() => onOpenVideo?.(video)}
                      className="flex-1 inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Putar Video</span>
                    </button>
                    <a
                      href={video.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 transition-colors"
                      title="Buka langsung di YouTube"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL: Akses Dokumen Tugas & Kewajiban Resmi Waka */}
      {selectedWaka && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 animate-fade-in">
          <div 
            className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            role="dialog"
            aria-modal="true"
          >
            {/* Modal Top Ribbon Header */}
            <div className="flex items-center justify-between px-5 py-4 bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900 text-white shrink-0">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-amber-300 font-bold shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <div className="truncate">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-sky-200">
                    Dokumen Resmi Satuan Pendidikan
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold truncate">
                    Tugas & Kewajiban: {selectedWaka.shortRole}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setSelectedWaka(null)}
                className="p-1.5 rounded-xl text-white/80 hover:text-white hover:bg-white/15 transition-colors shrink-0"
                aria-label="Tutup Dokumen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-slate-800 dark:text-slate-100">
              {/* Kop Surat Dokumen Resmi */}
              <div className="text-center border-b-2 border-double border-slate-300 dark:border-slate-700 pb-4">
                <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest">
                  Yayasan Pendidikan & Sosial Al-Imamah Pamoroh Kadur
                </p>
                <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white tracking-tight">
                  SMP PLUS AL-IMAMAH PAMEKASAN
                </h4>
                <p className="text-[10px] sm:text-[11px] text-slate-500">
                  NPSN: 69984920 · Terakreditasi Berbasis Pesantren · Pamoroh, Kadur, Pamekasan, Jawa Timur
                </p>
                <div className="mt-2 inline-block px-3 py-1 rounded-md bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-800 dark:text-sky-300 text-xs font-bold uppercase tracking-wide">
                  Surat Keputusan (SK) Tugas Pokok, Fungsi & Kewajiban (TUPOKSI)
                </div>
              </div>

              {/* Profile Bar */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700/80">
                <img
                  src={selectedWaka.photo}
                  alt={selectedWaka.name}
                  className="w-24 h-28 object-cover object-top rounded-xl ring-2 ring-sky-500/30 shadow-md shrink-0 bg-red-700"
                />
                <div className="text-center sm:text-left space-y-1 flex-1">
                  <span className="px-2.5 py-0.5 rounded-md bg-sky-600 text-white text-[10px] font-bold uppercase tracking-wider">
                    {selectedWaka.shortRole}
                  </span>
                  <h4 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                    {selectedWaka.name}
                  </h4>
                  <p className="text-xs font-semibold text-sky-600 dark:text-sky-400">
                    {selectedWaka.roleTitle}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed pt-1">
                    {selectedWaka.description}
                  </p>
                </div>
              </div>

              {/* 1. Dasar Hukum */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 shrink-0" />
                  <span>I. Dasar Hukum & Landasan Operasional</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-700/60 text-xs text-slate-600 dark:text-slate-300 space-y-1.5">
                  {selectedWaka.dasarHukum.map((dh, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-sky-600 font-bold shrink-0">{i + 1}.</span>
                      <p>{dh}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Tugas Pokok & Fungsi (Tupoksi) */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  <Briefcase className="w-4 h-4 shrink-0" />
                  <span>II. Rincian Tugas Pokok & Fungsi (TUPOKSI)</span>
                </div>
                <div className="p-4 rounded-xl bg-emerald-50/40 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/50 space-y-2 text-xs text-slate-700 dark:text-slate-200">
                  {selectedWaka.tugasPokok.map((tp, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <p className="leading-relaxed">{tp}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Kewajiban & Tanggung Jawab */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                  <ClipboardCheck className="w-4 h-4 shrink-0" />
                  <span>III. Rincian Kewajiban & Tanggung Jawab Manajerial</span>
                </div>
                <div className="p-4 rounded-xl bg-amber-50/40 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/50 space-y-2 text-xs text-slate-700 dark:text-slate-200">
                  {selectedWaka.kewajiban.map((kw, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-300 flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="leading-relaxed">{kw}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Wewenang & Hak */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-700 dark:text-indigo-400 uppercase tracking-wider">
                  <Award className="w-4 h-4 shrink-0" />
                  <span>IV. Wewenang & Otoritas Jabatan</span>
                </div>
                <div className="p-4 rounded-xl bg-indigo-50/40 dark:bg-indigo-950/20 border border-indigo-200/60 dark:border-indigo-800/50 space-y-2 text-xs text-slate-700 dark:text-slate-200">
                  {selectedWaka.wewenang.map((ww, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <span className="text-indigo-600 font-bold shrink-0">•</span>
                      <p className="leading-relaxed">{ww}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5. Program Kerja Prioritas */}
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-sky-700 dark:text-sky-400 uppercase tracking-wider">
                  <BookOpen className="w-4 h-4 shrink-0" />
                  <span>V. Program Kerja Prioritas TA 2026/2027</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  {selectedWaka.programKerja.map((pk, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200/70 dark:border-slate-700/70 flex items-start gap-2">
                      <span className="w-5 h-5 rounded-lg bg-sky-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                        {i + 1}
                      </span>
                      <p className="text-slate-700 dark:text-slate-200 font-medium leading-snug">{pk}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Sticky Actions */}
            <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3 shrink-0">
              <div className="flex flex-wrap items-center gap-2">
                {/* Copy tasks button */}
                <button
                  onClick={() => {
                    const textToCopy = `DOKUMEN RESMI TUGAS & KEWAJIBAN
SMP PLUS AL-IMAMAH
Nama: ${selectedWaka.name}
Jabatan: ${selectedWaka.roleTitle}

TUGAS POKOK:
${selectedWaka.tugasPokok.map((t, idx) => `${idx + 1}. ${t}`).join('\n')}

KEWAJIBAN:
${selectedWaka.kewajiban.map((k, idx) => `${idx + 1}. ${k}`).join('\n')}

PROGRAM KERJA:
${selectedWaka.programKerja.map((p, idx) => `- ${p}`).join('\n')}
`;
                    navigator.clipboard.writeText(textToCopy);
                    setCopiedSuccess(true);
                    setTimeout(() => setCopiedSuccess(false), 2500);
                  }}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all shadow-2xs"
                >
                  {copiedSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-600">Tersalin ke Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Salin Ringkasan Tugas</span>
                    </>
                  )}
                </button>

                {/* External link button */}
                {selectedWaka.driveLink && (
                  <a
                    href={selectedWaka.driveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 hover:bg-sky-100 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 text-xs font-bold transition-all"
                  >
                    <span>Tautan Berkas SK ({selectedWaka.driveLink})</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>

              <button
                onClick={() => setSelectedWaka(null)}
                className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-bold transition-all ml-auto"
              >
                Tutup Dokumen
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
