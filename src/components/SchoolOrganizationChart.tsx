import React, { useState } from 'react';
import { 
  Building, 
  Users, 
  ExternalLink, 
  Phone, 
  CheckCircle2, 
  HelpCircle, 
  ChevronRight, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  GraduationCap, 
  Compass, 
  Info, 
  ArrowDown, 
  Layers,
  Sparkles,
  Search,
  X
} from 'lucide-react';
import { 
  SCHOOL_ORGANIZATION_MEMBERS, 
  LINE_EXPLANATIONS, 
  OrgMember, 
  LineExplanation 
} from '../data/schoolData';
import { SchoolEmblem } from './SchoolEmblem';

interface SchoolOrganizationChartProps {
  onSelectMember?: (member: OrgMember) => void;
}

export const SchoolOrganizationChart: React.FC<SchoolOrganizationChartProps> = () => {
  const [activeView, setActiveView] = useState<'visual' | 'matriks'>('visual');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMemberModal, setSelectedMemberModal] = useState<OrgMember | null>(null);
  const [activeLineTab, setActiveLineTab] = useState<'komando' | 'koordinasi'>('komando');

  // Filtered members for matrix / search view
  const filteredMembers = SCHOOL_ORGANIZATION_MEMBERS.filter(member => {
    const matchCategory = selectedCategory === 'all' || member.category === selectedCategory;
    const matchSearch = searchQuery === '' || 
      member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (member.dualRoles && member.dualRoles.some(r => r.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchCategory && matchSearch;
  });

  // Level groupings for visual tree
  const pengasuh = SCHOOL_ORGANIZATION_MEMBERS.find(m => m.id === 'org-pengasuh');
  const yayasan = SCHOOL_ORGANIZATION_MEMBERS.find(m => m.id === 'org-yayasan');
  const kepsek = SCHOOL_ORGANIZATION_MEMBERS.find(m => m.id === 'org-kepsek');
  const administrasi = SCHOOL_ORGANIZATION_MEMBERS.filter(m => m.category === 'administrasi');
  const wakas = SCHOOL_ORGANIZATION_MEMBERS.filter(m => m.category === 'waka');
  const waliKelas = SCHOOL_ORGANIZATION_MEMBERS.filter(m => m.category === 'wali_kelas');
  const pembinaEkstra = SCHOOL_ORGANIZATION_MEMBERS.filter(m => m.category === 'pembina_ekstra');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white p-6 md:p-8 border border-sky-800/40 shadow-xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <Building className="w-4 h-4" />
              <span>Tata Pamong & Struktur Kelembagaan</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Struktur Organisasi Sekolah
            </h2>
            <p className="text-xs md:text-sm text-sky-200 leading-relaxed">
              Bagan resmi struktur organisasi SMP Plus Al-Imamah tahun ajaran 2026/2027 yang memadukan kepemimpinan pesantren dengan manajemen sekolah modern, dilengkapi garis komando instruktif dan garis koordinasi fungsional.
            </p>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 p-1.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 self-start lg:self-auto shrink-0">
            <button
              onClick={() => setActiveView('visual')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeView === 'visual'
                  ? 'bg-sky-500 text-slate-950 shadow-md'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Bagan Visual Hirarki</span>
            </button>
            <button
              onClick={() => setActiveView('matriks')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 ${
                activeView === 'matriks'
                  ? 'bg-sky-500 text-slate-950 shadow-md'
                  : 'text-white hover:bg-white/10'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Matriks Tugas & Wewenang</span>
            </button>
          </div>
        </div>

        {/* Decorative Watermark Emblem */}
        <div className="absolute -bottom-10 -right-10 opacity-10 pointer-events-none">
          <SchoolEmblem size={240} />
        </div>
      </div>

      {/* Box Keterangan Garis Komando & Garis Koordinasi (Crucial Requirement) */}
      <div className="rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-200/80 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50/60 dark:bg-slate-850/60">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 dark:text-sky-400">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Keterangan Garis Komando & Garis Koordinasi
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Pedoman tata hubungan kerja, wewenang instruksi, dan kemitraan fungsional
              </p>
            </div>
          </div>

          {/* Quick Tab Switcher */}
          <div className="flex items-center gap-2 bg-slate-200/70 dark:bg-slate-900/60 p-1 rounded-xl text-xs font-semibold">
            <button
              onClick={() => setActiveLineTab('komando')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeLineTab === 'komando'
                  ? 'bg-white dark:bg-slate-800 text-sky-600 dark:text-sky-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <span className="w-4 h-0.5 bg-sky-500 rounded-full" />
              <span>Garis Komando</span>
            </button>
            <button
              onClick={() => setActiveLineTab('koordinasi')}
              className={`px-3 py-1.5 rounded-lg transition-all flex items-center gap-1.5 ${
                activeLineTab === 'koordinasi'
                  ? 'bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-xs font-bold'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <span className="w-4 h-0.5 border-t-2 border-dashed border-emerald-500" />
              <span>Garis Koordinasi</span>
            </button>
          </div>
        </div>

        {/* Legend Content */}
        <div className="p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Garis Komando Card */}
            <div className={`p-5 rounded-2xl border transition-all ${
              activeLineTab === 'komando' 
                ? 'bg-sky-50/60 dark:bg-sky-950/20 border-sky-300 dark:border-sky-800/80 shadow-xs' 
                : 'bg-slate-50/40 dark:bg-slate-850/40 border-slate-200 dark:border-slate-800 opacity-80'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-1 bg-sky-500 rounded-full shadow-xs" />
                  <h4 className="text-sm font-bold text-sky-900 dark:text-sky-300">
                    Garis Komando (Garis Tegas / Solid Line)
                  </h4>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300">
                  Instruktif & Hierarkis
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {LINE_EXPLANATIONS[0].definition}
              </p>

              <div className="space-y-3 pt-3 border-t border-sky-100 dark:border-slate-700/60">
                <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                  Karakteristik & Wewenang:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {LINE_EXPLANATIONS[0].characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>

                <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block pt-2">
                  Penerapan di SMP Plus Al-Imamah:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {LINE_EXPLANATIONS[0].schoolExamples.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 shrink-0 mt-1.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Garis Koordinasi Card */}
            <div className={`p-5 rounded-2xl border transition-all ${
              activeLineTab === 'koordinasi' 
                ? 'bg-emerald-50/60 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800/80 shadow-xs' 
                : 'bg-slate-50/40 dark:bg-slate-850/40 border-slate-200 dark:border-slate-800 opacity-80'
            }`}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 border-t-2 border-dashed border-emerald-500" />
                  <h4 className="text-sm font-bold text-emerald-900 dark:text-emerald-300">
                    Garis Koordinasi (Garis Putus-Putus / Dashed Line)
                  </h4>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300">
                  Konsultatif & Kemitraan
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                {LINE_EXPLANATIONS[1].definition}
              </p>

              <div className="space-y-3 pt-3 border-t border-emerald-100 dark:border-slate-700/60">
                <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block">
                  Karakteristik & Wewenang:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {LINE_EXPLANATIONS[1].characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>

                <span className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider block pt-2">
                  Penerapan di SMP Plus Al-Imamah:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                  {LINE_EXPLANATIONS[1].schoolExamples.map((ex, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0 mt-1.5" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* View 1: Visual Hierarchical Tree Chart */}
      {activeView === 'visual' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-10">
          {/* Top Level 1: Pengasuh Ponpes & Ketua Yayasan */}
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-200/60 dark:border-amber-800/40">
                Tingkat 1: Pembina Ruhaniyah & Penyelenggara Yayasan
              </span>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                {/* Pengasuh Card */}
                {pengasuh && (
                  <div 
                    onClick={() => setSelectedMemberModal(pengasuh)}
                    className="cursor-pointer group p-5 rounded-2xl bg-gradient-to-br from-amber-50/70 via-white to-amber-50/40 dark:from-slate-850 dark:via-slate-850 dark:to-amber-950/30 border-2 border-amber-300/80 dark:border-amber-700/60 hover:shadow-lg transition-all relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={pengasuh.photo}
                        alt={pengasuh.name}
                        className="w-16 h-16 rounded-2xl object-cover object-top ring-2 ring-amber-400 shadow-md bg-white shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider block">
                          Pengasuh Pondok Pesantren
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors">
                          {pengasuh.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Ponpes Tadribuddu'aat
                        </p>

                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-amber-100 dark:bg-amber-900/40 text-[10px] font-bold text-amber-900 dark:text-amber-300">
                            Pembina Kajian Kitab Kuning
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-amber-100 dark:border-slate-700 flex items-center justify-between text-[11px] text-amber-700 dark:text-amber-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-0.5 border-t-2 border-dashed border-emerald-500 inline-block" />
                        Garis Koordinasi Pesantren
                      </span>
                      <span className="text-sky-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        Lihat Rincian <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}

                {/* Ketua Yayasan Card */}
                {yayasan && (
                  <div 
                    onClick={() => setSelectedMemberModal(yayasan)}
                    className="cursor-pointer group p-5 rounded-2xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/40 dark:from-slate-850 dark:via-slate-850 dark:to-emerald-950/30 border-2 border-emerald-300/80 dark:border-emerald-700/60 hover:shadow-lg transition-all relative overflow-hidden"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={yayasan.photo}
                        alt={yayasan.name}
                        className="w-16 h-16 rounded-2xl object-cover object-top ring-2 ring-emerald-500 shadow-md bg-white shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider block">
                          Badan Penyelenggara Sekolah
                        </span>
                        <h4 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-600 transition-colors">
                          {yayasan.name}
                        </h4>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          Ketua Yayasan Al-Imamah
                        </p>

                        <div className="mt-2.5 flex flex-wrap gap-1.5">
                          <span className="px-2 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-900/40 text-[10px] font-bold text-emerald-900 dark:text-emerald-300">
                            Legal Formal & Aset Kelembagaan
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-3 border-t border-emerald-100 dark:border-slate-700 flex items-center justify-between text-[11px] text-emerald-700 dark:text-emerald-400 font-semibold">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-0.5 bg-sky-500 inline-block" />
                        Garis Komando ke Kepala Sekolah
                      </span>
                      <span className="text-sky-600 group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                        Lihat Rincian <ChevronRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Connecting line between Pengasuh and Yayasan (Garis Koordinasi) */}
              <div className="hidden md:flex items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <span className="px-2.5 py-1 rounded-full bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800 text-[10px] font-bold text-emerald-600 shadow-xs">
                  Garis Koordinasi
                </span>
              </div>
            </div>

            {/* Downward Connector to Kepala Sekolah */}
            <div className="flex flex-col items-center justify-center pt-2">
              <div className="w-0.5 h-6 bg-sky-500" />
              <div className="px-3 py-1 rounded-full bg-sky-100 dark:bg-sky-950 text-[10px] font-bold text-sky-700 dark:text-sky-300 border border-sky-300 dark:border-sky-800 flex items-center gap-1.5">
                <span className="w-2 h-0.5 bg-sky-500" />
                <span>Garis Komando Struktural</span>
                <ArrowDown className="w-3 h-3" />
              </div>
              <div className="w-0.5 h-4 bg-sky-500" />
            </div>
          </div>

          {/* Level 2: Kepala Sekolah */}
          {kepsek && (
            <div className="space-y-4">
              <div className="text-center">
                <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-widest bg-sky-50 dark:bg-sky-950/40 px-3 py-1 rounded-full border border-sky-200/60 dark:border-sky-800/40">
                  Tingkat 2: Pimpinan Tertinggi Satuan Pendidikan
                </span>
              </div>

              <div className="max-w-xl mx-auto">
                <div 
                  onClick={() => setSelectedMemberModal(kepsek)}
                  className="cursor-pointer group p-6 rounded-3xl bg-gradient-to-br from-sky-600 via-sky-700 to-blue-800 text-white shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                    <img
                      src={kepsek.photo}
                      alt={kepsek.name}
                      className="w-20 h-20 rounded-2xl object-cover object-top ring-4 ring-white/30 shadow-lg bg-white shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 text-sky-100 text-[11px] font-bold uppercase tracking-wider mb-1">
                        <Sparkles className="w-3 h-3 text-amber-300" />
                        <span>Kepala Sekolah</span>
                      </div>
                      <h4 className="text-xl font-black text-white tracking-tight">
                        {kepsek.name}
                      </h4>
                      <p className="text-xs text-sky-100 mt-0.5 font-medium">
                        Kepala SMP Plus Al-Imamah (2018 — Sekarang)
                      </p>
                      <p className="text-[11px] text-sky-200 mt-2 line-clamp-2">
                        Memegang komando penuh atas kebijakan akademis, administrasi sekolah, mutu kurikulum Deep Learning, dan supervisi GTK.
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <span className="text-sky-100 font-semibold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-amber-300" />
                      Komando Atas Waka, Ka. TU, Wali Kelas & Dewan Guru
                    </span>
                    <button className="px-3 py-1 rounded-xl bg-white/20 hover:bg-white/30 font-bold text-xs text-white transition-colors flex items-center gap-1">
                      Lihat Tugas & Wewenang <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Connecting lines branching down to Administrasi and Waka */}
              <div className="flex flex-col items-center justify-center pt-2">
                <div className="w-0.5 h-6 bg-sky-500" />
                <div className="w-full max-w-4xl h-0.5 bg-sky-500 relative">
                  <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-600" />
                  <div className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-sky-600" />
                </div>
              </div>
            </div>
          )}

          {/* Level 3: Administrasi & Keuangan (Ka. TU & Bendahara) */}
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-[11px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest bg-indigo-50 dark:bg-indigo-950/40 px-3 py-1 rounded-full border border-indigo-200/60 dark:border-indigo-800/40">
                Tingkat 3: Tata Usaha, Operasional & Pengelolaan Keuangan
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {administrasi.map((admin) => (
                <div
                  key={admin.id}
                  onClick={() => setSelectedMemberModal(admin)}
                  className="cursor-pointer group p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-700 hover:border-indigo-400 hover:shadow-md transition-all"
                >
                  <div className="flex items-start gap-4">
                    <img
                      src={admin.photo}
                      alt={admin.name}
                      className="w-14 h-14 rounded-2xl object-cover object-top ring-2 ring-indigo-400 shadow-xs bg-white shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider block">
                        {admin.role}
                      </span>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 transition-colors">
                        {admin.name}
                      </h4>

                      {admin.dualRoles && admin.dualRoles.length > 0 && (
                        <div className="mt-2 flex flex-wrap gap-1">
                          {admin.dualRoles.map((role, idx) => (
                            <span 
                              key={idx}
                              className="px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-[10px] font-semibold text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/40"
                            >
                              Juga: {role}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <span className="w-2 h-0.5 bg-sky-500 inline-block" />
                      Komando: Kepala Sekolah
                    </span>
                    <span className="text-indigo-600 text-[11px] font-semibold group-hover:underline flex items-center gap-0.5">
                      Tugas & Wewenang <ChevronRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Level 4: Wakil Kepala Sekolah (4 Waka) */}
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-widest bg-amber-50 dark:bg-amber-950/40 px-3 py-1 rounded-full border border-amber-200/60 dark:border-amber-800/40">
                Tingkat 4: Wakil Kepala Sekolah (Pimpinan Bidang Strategis)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {wakas.map((waka) => (
                <div
                  key={waka.id}
                  onClick={() => setSelectedMemberModal(waka)}
                  className="cursor-pointer group p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-700 hover:border-sky-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="relative mb-3 inline-block">
                      <img
                        src={waka.photo}
                        alt={waka.name}
                        className="w-16 h-16 rounded-2xl object-cover object-top ring-2 ring-sky-400 shadow-xs bg-white"
                      />
                      <span className="absolute -bottom-1 -right-1 px-1.5 py-0.5 rounded-md bg-sky-600 text-white text-[9px] font-extrabold shadow-xs">
                        WAKA
                      </span>
                    </div>

                    <span className="text-[11px] font-extrabold text-sky-600 dark:text-sky-400 uppercase tracking-wide block">
                      {waka.shortRole}
                    </span>
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 group-hover:text-sky-600 transition-colors">
                      {waka.name}
                    </h4>

                    {waka.dualRoles && waka.dualRoles.length > 0 && (
                      <div className="mt-2.5 flex flex-wrap gap-1">
                        {waka.dualRoles.map((role, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/50 text-[10px] font-semibold text-amber-800 dark:text-amber-300 border border-amber-200/50"
                          >
                            Juga: {role}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    <p className="text-[11px] text-slate-500 line-clamp-2">
                      {waka.garisKomandoText}
                    </p>
                    <div className="flex items-center justify-between text-xs text-sky-600 font-semibold pt-1">
                      <span>Rincian SK & Tugas</span>
                      <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Level 5: Wali Kelas (Kelas VII, VIII, IX) */}
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase tracking-widest bg-teal-50 dark:bg-teal-950/40 px-3 py-1 rounded-full border border-teal-200/60 dark:border-teal-800/40">
                Tingkat 5: Pembimbing Rombel & Konsultasi Wali Kelas
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {waliKelas.map((wali) => (
                <div
                  key={wali.id}
                  className="p-5 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200/90 dark:border-slate-700 hover:border-teal-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start gap-3.5 mb-3">
                      <img
                        src={wali.photo}
                        alt={wali.name}
                        className="w-14 h-14 rounded-2xl object-cover object-top ring-2 ring-teal-400 shadow-xs bg-white shrink-0"
                      />
                      <div className="min-w-0 flex-1">
                        <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 uppercase block">
                          {wali.role}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                          {wali.name}
                        </h4>
                        {wali.dualRoles && (
                          <p className="text-[10px] text-slate-500 mt-0.5">
                            Juga: {wali.dualRoles.join(', ')}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 py-2 border-y border-slate-100 dark:border-slate-800 my-2">
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 h-0.5 bg-sky-500" />
                        <span>Komando: Kurikulum & Kepsek</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px]">
                        <span className="w-2 border-t-2 border-dashed border-emerald-500" />
                        <span>Koordinasi: Kesiswaan & Wali Santri</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    {wali.whatsapp && (
                      <a
                        href={`https://wa.me/${wali.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 text-xs font-bold transition-colors"
                      >
                        <Phone className="w-3.5 h-3.5 text-emerald-500" />
                        <span>Konsultasi WA: {wali.whatsapp}</span>
                        <ExternalLink className="w-3 h-3 opacity-60" />
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedMemberModal(wali)}
                      className="w-full py-1.5 text-center text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                    >
                      Lihat Rincian Tugas & Rombel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Level 6: Pembina Kegiatan Ekstrakurikuler (6 Cabang) */}
          <div className="space-y-4">
            <div className="text-center">
              <span className="text-[11px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-widest bg-purple-50 dark:bg-purple-950/40 px-3 py-1 rounded-full border border-purple-200/60 dark:border-purple-800/40">
                Tingkat 6: Pembina Kegiatan Ekstrakurikuler (Pengembangan Bakat Santri)
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pembinaEkstra.map((pembina) => (
                <div
                  key={pembina.id}
                  onClick={() => setSelectedMemberModal(pembina)}
                  className="cursor-pointer group p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-850/60 border border-slate-200/80 dark:border-slate-700 hover:border-purple-400 hover:bg-white dark:hover:bg-slate-850 hover:shadow-xs transition-all"
                >
                  <div className="flex items-center gap-3.5">
                    <img
                      src={pembina.photo}
                      alt={pembina.name}
                      className="w-12 h-12 rounded-xl object-cover object-top ring-2 ring-purple-400 shadow-xs bg-white shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-purple-600 dark:text-purple-400 uppercase tracking-wide block truncate">
                        {pembina.role}
                      </span>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-white truncate group-hover:text-purple-600 transition-colors">
                        {pembina.name}
                      </h4>
                      {pembina.dualRoles && (
                        <p className="text-[10px] text-slate-500 truncate">
                          Juga: {pembina.dualRoles.join(', ')}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                    <span className="truncate">Di bawah Waka Kesiswaan</span>
                    <span className="text-purple-600 font-semibold group-hover:underline shrink-0">
                      Rincian
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Level 7: Peserta Didik / Santri */}
          <div className="p-6 rounded-3xl bg-gradient-to-r from-sky-50 via-emerald-50 to-teal-50 dark:from-slate-850 dark:via-sky-950/30 dark:to-emerald-950/30 border border-sky-200/80 dark:border-slate-700 text-center space-y-2">
            <div className="w-10 h-10 rounded-2xl bg-sky-500 text-white flex items-center justify-center mx-auto shadow-md">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
              Peserta Didik & Santri SMP Plus Al-Imamah
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Muara seluruh pelaksanaan garis komando dan koordinasi: melahirkan santri yang Tafaqquh Fiddin, berakhlakul Qur'ani, berprestasi unggul, mandiri, dan memberikan manfaat bagi umat.
            </p>
          </div>
        </div>
      )}

      {/* View 2: Matriks Tugas, Wewenang & Garis Komando/Koordinasi */}
      {activeView === 'matriks' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm space-y-6">
          {/* Controls: Filter & Search */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: 'Semua Pejabat' },
                { id: 'pengasuh', label: 'Pengasuh' },
                { id: 'yayasan', label: 'Yayasan' },
                { id: 'kepala_sekolah', label: 'Kepala Sekolah' },
                { id: 'administrasi', label: 'TU & Keuangan' },
                { id: 'waka', label: 'Wakil Kepala' },
                { id: 'wali_kelas', label: 'Wali Kelas' },
                { id: 'pembina_ekstra', label: 'Pembina Ekstra' },
              ].map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-700/60 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama atau jabatan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Member Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="p-5 rounded-2xl bg-slate-50/60 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 hover:border-sky-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <img
                      src={member.photo}
                      alt={member.name}
                      className="w-16 h-16 rounded-2xl object-cover object-top ring-2 ring-sky-500/50 shadow-xs bg-white shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                        {member.role}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {member.name}
                      </h4>

                      {member.dualRoles && member.dualRoles.length > 0 && (
                        <div className="mt-1.5 flex flex-wrap gap-1">
                          {member.dualRoles.map((r, i) => (
                            <span 
                              key={i}
                              className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-[10px] font-semibold border border-amber-200/60"
                            >
                              Peran Ganda: {r}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Garis Komando & Garis Koordinasi specific explanations */}
                  <div className="space-y-2 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800 text-xs">
                    <div>
                      <span className="font-bold text-sky-700 dark:text-sky-400 flex items-center gap-1.5 text-[11px]">
                        <span className="w-2.5 h-0.5 bg-sky-500 rounded-full" />
                        Garis Komando (Instruksi & Wewenang):
                      </span>
                      <p className="text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        {member.garisKomandoText}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <span className="font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-1.5 text-[11px]">
                        <span className="w-2.5 border-t-2 border-dashed border-emerald-500" />
                        Garis Koordinasi (Konsultasi & Sinergi):
                      </span>
                      <p className="text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">
                        {member.garisKoordinasiText}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2 border-t border-slate-200/60 dark:border-slate-700/60">
                  <button
                    onClick={() => setSelectedMemberModal(member)}
                    className="px-3.5 py-1.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                  >
                    <span>Rincian Tugas & Kewajiban</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {member.docLink && (
                      <a
                        href={member.docLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-slate-200/80 dark:bg-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 text-xs font-semibold transition-colors"
                        title="Akses Dokumen"
                      >
                        <span>Akses Dokumen</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    )}

                    {member.whatsapp && (
                      <a
                        href={`https://wa.me/${member.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-colors shadow-xs"
                        title="Konsultasi WA"
                      >
                        <Phone className="w-3 h-3" />
                        <span>WhatsApp</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Member Details Modal */}
      {selectedMemberModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-fade-in"
          onClick={() => setSelectedMemberModal(null)}
        >
          <div 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 md:p-8 space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <img
                  src={selectedMemberModal.photo}
                  alt={selectedMemberModal.name}
                  className="w-16 h-16 rounded-2xl object-cover object-top ring-2 ring-sky-500 shadow-md bg-white shrink-0"
                />
                <div>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                    {selectedMemberModal.role}
                  </span>
                  <h3 className="text-lg md:text-xl font-extrabold text-slate-900 dark:text-white">
                    {selectedMemberModal.name}
                  </h3>
                  <p className="text-xs text-slate-500">
                    SMP Plus Al-Imamah · Ponpes Tadribuddu'aat
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedMemberModal(null)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Tutup dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Peran Ganda / Dual Roles if any */}
            {selectedMemberModal.dualRoles && selectedMemberModal.dualRoles.length > 0 && (
              <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/70 dark:border-amber-800/40">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-300 block mb-1">
                  Peran Ganda / Amanah Tambahan:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedMemberModal.dualRoles.map((r, i) => (
                    <span 
                      key={i}
                      className="px-2.5 py-1 rounded-lg bg-amber-100 dark:bg-amber-900/50 text-xs font-bold text-amber-900 dark:text-amber-200"
                    >
                      {r}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Garis Komando & Garis Koordinasi Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-200/80 dark:border-sky-800/60 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-0.5 bg-sky-500 rounded-full" />
                  <span className="text-xs font-bold text-sky-800 dark:text-sky-300 uppercase">
                    Garis Komando (Instruktif)
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedMemberModal.garisKomandoText}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/60 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 border-t-2 border-dashed border-emerald-500" />
                  <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300 uppercase">
                    Garis Koordinasi (Sinergis)
                  </span>
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedMemberModal.garisKoordinasiText}
                </p>
              </div>
            </div>

            {/* Rincian Tugas & Kewajiban */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600" />
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Rincian Tugas, Kewajiban & Wewenang
                </h4>
              </div>
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {selectedMemberModal.duties.map((duty, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-100 dark:border-slate-800">
                    <span className="w-5 h-5 rounded-lg bg-sky-100 dark:bg-sky-900/40 text-sky-700 dark:text-sky-300 font-bold flex items-center justify-center shrink-0 text-[10px]">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed pt-0.5">{duty}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action buttons footer */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-end gap-3">
              {selectedMemberModal.docLink && (
                <a
                  href={selectedMemberModal.docLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Akses Dokumen & Program Kerja</span>
                </a>
              )}

              {selectedMemberModal.whatsapp && (
                <a
                  href={`https://wa.me/${selectedMemberModal.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-xs"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Konsultasi WhatsApp ({selectedMemberModal.whatsapp})</span>
                </a>
              )}

              <button
                onClick={() => setSelectedMemberModal(null)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
