import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  CheckCircle2, 
  ExternalLink, 
  Quote, 
  MapPin, 
  ShieldCheck, 
  Calendar,
  Building,
  Target,
  Sparkles,
  Users
} from 'lucide-react';
import { 
  LEADERSHIP_PROFILES, 
  SCHOOL_INFO, 
  RECENT_ACTIVITIES,
  SCHOOL_VISION,
  SCHOOL_MISSIONS,
  SCHOOL_OBJECTIVES 
} from '../data/schoolData';
import { SchoolEmblem } from './SchoolEmblem';
import { SchoolOrganizationChart } from './SchoolOrganizationChart';

interface ProfileViewProps {
  initialSubSection?: string;
}

export const ProfileView: React.FC<ProfileViewProps> = ({ initialSubSection = 'pengasuh' }) => {
  const [activeTab, setActiveTab] = useState<string>(() => {
    if (initialSubSection === 'struktur') return 'struktur';
    if (initialSubSection === 'visi-misi' || initialSubSection === 'tujuan' || initialSubSection === 'sekolah') return 'sekolah';
    return initialSubSection || 'pengasuh';
  });

  const pengasuh = LEADERSHIP_PROFILES.find(p => p.id === 'pengasuh');
  const kepsek = LEADERSHIP_PROFILES.find(p => p.id === 'kepala_sekolah');
  const yayasan = LEADERSHIP_PROFILES.find(p => p.id === 'ketua_yayasan');

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Kepemimpinan & Profil Lembaga
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Profil Pengasuh, Pimpinan & Sekolah
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Mengenal tokoh sentral, visi peradaban pesantren, dan rekam jejak SMP Plus Al-Imamah
          </p>
        </div>

        {/* Segmented Filter Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTab('pengasuh')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'pengasuh'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Pengasuh Ponpes
          </button>
          <button
            onClick={() => setActiveTab('ketua-yayasan')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'ketua-yayasan'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Ketua Yayasan
          </button>
          <button
            onClick={() => setActiveTab('kepala-sekolah')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'kepala-sekolah'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Kepala Sekolah
          </button>
          <button
            onClick={() => setActiveTab('sekolah')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'sekolah'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Visi, Misi, Dan Tujuan Sekolah
          </button>
          <button
            onClick={() => setActiveTab('struktur')}
            className={`px-3.5 py-2 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'struktur'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs font-bold'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Struktur Organisasi Sekolah
          </button>
        </div>
      </div>

      {/* Tab 1: Profil Pengasuh */}
      {activeTab === 'pengasuh' && pengasuh && (
        <div className="space-y-8 animate-fade-in">
          {/* Main Hero Card for Pengasuh */}
          <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md">
            <div className="h-32 bg-gradient-to-r from-emerald-700 via-teal-800 to-sky-900" />
            
            <div className="relative px-6 pb-8 md:px-10 -mt-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                  <img
                    src={pengasuh.photo}
                    alt={pengasuh.name}
                    className="w-32 h-32 rounded-3xl object-cover object-top ring-4 ring-white dark:ring-slate-800 shadow-xl shrink-0 bg-white"
                  />
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase">
                      Pengasuh Pondok Pesantren Tadribuddu'aat
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {pengasuh.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                      <span>Dusun Oray, Desa Pamoroh, Kec. Kadur, Pamekasan, Jawa Timur</span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <a
                    href={SCHOOL_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-xs font-bold text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/50 hover:bg-emerald-100 rounded-xl border border-emerald-200 dark:border-emerald-800 transition-colors"
                  >
                    Hubungi Khidmah
                  </a>
                </div>
              </div>

              {/* Bio & Tentang Saya */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      Tentang Pengasuh
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pengasuh.about}
                    </p>
                  </div>

                  {/* Quote Banner */}
                  <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 relative">
                    <Quote className="w-6 h-6 text-amber-500/40 absolute top-4 right-4" />
                    <p className="text-xs font-medium text-amber-900 dark:text-amber-200 italic leading-relaxed">
                      "{pengasuh.quote}"
                    </p>
                    <span className="block mt-2 text-[11px] font-bold text-amber-700 dark:text-amber-300">
                      — {pengasuh.name}
                    </span>
                  </div>

                  {/* Riwayat Pendidikan & Keilmuan */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                      Jejak Pendidikan & Sanad Keilmuan
                    </h4>
                    <div className="space-y-2.5">
                      {pengasuh.education?.map((item, idx) => (
                        <div 
                          key={idx}
                          className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800"
                        >
                          <GraduationCap className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column: Keterampilan & Kompetensi */}
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Keterampilan & Kepakaran</span>
                    </h4>
                    <div className="space-y-3">
                      {pengasuh.skills?.map((skill, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-gradient-to-br from-sky-500 to-emerald-600 text-white">
                    <h4 className="text-sm font-bold mb-1">Pondok Pesantren Tadribuddu'aat</h4>
                    <p className="text-xs text-sky-100 leading-relaxed mb-3">
                      Lembaga kaderisasi da'i dan penghafal Al-Qur'an yang memadukan pendidikan salaf dan teknologi modern.
                    </p>
                    <span className="text-[11px] font-semibold text-amber-300 block">
                      Dusun Oray, Pamoroh, Kadur, Pamekasan
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Profil Ketua Yayasan */}
      {activeTab === 'ketua-yayasan' && yayasan && (
        <div className="space-y-8 animate-fade-in">
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-6 border-b border-slate-200 dark:border-slate-700">
              <img
                src={yayasan.photo}
                alt={yayasan.name}
                className="w-24 h-24 rounded-2xl object-cover object-top ring-4 ring-white dark:ring-slate-700 shadow-md shrink-0 bg-white"
              />
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                  Ketua Yayasan Al-Imamah
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {yayasan.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Pembina & Pengayom Lembaga Pendidikan SMP Plus Al-Imamah
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Amanah & Visi Yayasan
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {yayasan.about}
                </p>

                <div className="mt-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/60 dark:border-slate-700">
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic">
                    "{yayasan.quote}"
                  </p>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                  Pilar Kebijakan Yayasan
                </h4>
                <div className="space-y-2.5">
                  {yayasan.skills?.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-850 text-xs font-medium text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Profil Kepala Sekolah */}
      {activeTab === 'kepala-sekolah' && kepsek && (
        <div className="space-y-8 animate-fade-in">
          <div className="relative rounded-3xl overflow-hidden bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md">
            <div className="h-32 bg-gradient-to-r from-sky-700 via-blue-800 to-indigo-900" />

            <div className="relative px-6 pb-8 md:px-10 -mt-16">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col sm:flex-row sm:items-end gap-5">
                  <img
                    src={kepsek.photo}
                    alt={kepsek.name}
                    className="w-32 h-32 rounded-3xl object-cover object-top ring-4 ring-white dark:ring-slate-800 shadow-xl shrink-0 bg-white"
                  />
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wide uppercase">
                      Kepala SMP Plus Al-Imamah
                    </span>
                    <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 dark:text-white">
                      {kepsek.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      Masa Khidmah: 2018 — Sekarang (Kepemimpinan Berkelanjutan)
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2">
                  <a
                    href={SCHOOL_INFO.greetingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-sky-700 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/50 hover:bg-sky-100 rounded-xl border border-sky-200 dark:border-sky-800 transition-colors"
                  >
                    <span>Sambutan Kepala Sekolah</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Detail Content */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left 2 cols: Narasi Profil & Riwayat */}
                <div className="lg:col-span-2 space-y-6">
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                      Narasi Profil Kepala Sekolah
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {kepsek.about}
                    </p>
                  </div>

                  {/* Riwayat Pendidikan Timeline */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-sky-600" />
                      <span>Riwayat Pendidikan</span>
                    </h4>
                    <div className="p-4 rounded-2xl bg-sky-50/60 dark:bg-sky-950/30 border border-sky-100 dark:border-sky-900/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-sky-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                          UIM
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            Universitas Islam Madura (UIM Pamekasan)
                          </p>
                          <p className="text-xs text-sky-700 dark:text-sky-300 font-semibold mt-0.5">
                            Predikat Lulusan Terbaik Tahun 2010
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                            Menyelesaikan pendidikan tinggi dengan prestasi akademik membanggakan dan dedikasi pengabdian di dunia pendidikan Islam.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Riwayat Kepemimpinan */}
                  <div>
                    <h4 className="text-base font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-emerald-600" />
                      <span>Riwayat Kepemimpinan</span>
                    </h4>
                    <div className="p-4 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                          KS
                        </div>
                        <div>
                          <p className="text-xs font-bold text-slate-900 dark:text-white">
                            Kepala SMP Plus Al-Imamah (2018 — Sekarang)
                          </p>
                          <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                            Mengemban tanggung jawab memimpin, mengelola, dan mengembangkan penyelenggaraan pendidikan di lingkungan SMP Plus Al-Imamah serta memelopori integrasi teknologi pembelajaran Deep Learning.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right col: Indikator Keterampilan & Visi Kepsek */}
                <div className="space-y-6">
                  <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700">
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                      <Award className="w-4 h-4 text-amber-500" />
                      <span>Kompetensi & Manajerial</span>
                    </h4>
                    <div className="space-y-3">
                      {kepsek.skills?.map((skill, index) => (
                        <div key={index} className="flex items-start gap-2.5">
                          <CheckCircle2 className="w-4 h-4 text-sky-500 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-700 dark:text-slate-300">
                            {skill}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote Kepsek */}
                  <div className="p-5 rounded-2xl bg-sky-600 text-white shadow-md">
                    <Quote className="w-5 h-5 text-sky-300 mb-2" />
                    <p className="text-xs italic leading-relaxed text-sky-50">
                      "{kepsek.quote}"
                    </p>
                    <p className="mt-2 text-[11px] font-bold text-amber-300">
                      — Abd Wafi, S.Pd.I
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Profil Sekolah, Sejarah & Visi Misi */}
      {activeTab === 'sekolah' && (
        <div className="space-y-8 animate-fade-in">
          {/* Sejarah & Sambutan Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase">
                  Historis Lembaga
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  Sejarah SMP Plus Al-Imamah
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  SMP Plus Al-Imamah didirikan sebagai ikhtiar luhur menyediakan pendidikan tingkat menengah pertama yang mengintegrasikan kecerdasan intelektual dengan keteguhan akhlakul karimah berbasis pesantren di Pamoroh, Kadur, Pamekasan.
                </p>
              </div>

              <a
                href={SCHOOL_INFO.historyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-between p-3 rounded-xl bg-sky-50 dark:bg-sky-950/40 text-xs font-bold text-sky-700 dark:text-sky-300 hover:bg-sky-100 transition-colors"
              >
                <span>Baca Dokumentasi Lengkap Sejarah di Blogspot</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                  Arahan Pimpinan
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  Sambutan Resmi Kepala Sekolah
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Pidato dan amanat kepala sekolah menyambut peluncuran ekosistem digital pembelajaran dan tata kelola GTK SMP Plus Al-Imamah menuju era transformasi pendidikan pesantren unggul.
                </p>
              </div>

              <a
                href={SCHOOL_INFO.greetingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
              >
                <span>Baca Naskah Sambutan Kepala Sekolah</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Visi, Misi, Dan Tujuan Sekolah */}
          <div className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200/80 dark:border-slate-700">
              <div className="flex items-center gap-3.5">
                <SchoolEmblem size={52} />
                <div>
                  <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wider block">
                    Haluan Pokok Pendidikan
                  </span>
                  <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                    Visi, Misi, Dan Tujuan Sekolah
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    SMP Plus Al-Imamah · Ponpes Tadribuddu'aat Pamoroh Kadur Pamekasan
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-sky-50 dark:bg-sky-950/50 border border-sky-200/60 dark:border-sky-800/40 text-xs font-semibold text-sky-700 dark:text-sky-300 self-start sm:self-auto">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Landasan Mutu Kurikulum</span>
              </div>
            </div>

            {/* Visi */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                <h4 className="text-sm font-black tracking-wider uppercase text-sky-700 dark:text-sky-300">
                  VISI
                </h4>
              </div>
              <div className="relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-sky-50 via-teal-50/50 to-emerald-50 dark:from-slate-850 dark:via-sky-950/30 dark:to-emerald-950/30 border border-sky-200/70 dark:border-slate-700 shadow-xs">
                <Quote className="w-8 h-8 text-sky-400/30 absolute top-5 right-6" />
                <p className="text-base md:text-lg font-bold text-slate-900 dark:text-white leading-relaxed">
                  "{SCHOOL_VISION}"
                </p>
                
                {/* Visual badges summarizing vision pillars */}
                <div className="mt-4 pt-4 border-t border-sky-100 dark:border-slate-800 flex flex-wrap gap-2 text-xs">
                  <span className="px-3 py-1 rounded-lg bg-sky-100/80 dark:bg-sky-900/40 text-sky-800 dark:text-sky-300 font-semibold">
                    Tafaqquh Fiddin
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-emerald-100/80 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 font-semibold">
                    Berakhlakul Qur'ani
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-amber-100/80 dark:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-semibold">
                    Unggul Dalam Prestasi
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-purple-100/80 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 font-semibold">
                    Mandiri & Kreatif
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-teal-100/80 dark:bg-teal-900/40 text-teal-800 dark:text-teal-300 font-semibold">
                    Bermanfaat Bagi Agama, Bangsa & Masyarakat
                  </span>
                </div>
              </div>
            </div>

            {/* Misi */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <h4 className="text-sm font-black tracking-wider uppercase text-emerald-700 dark:text-emerald-300">
                    MISI
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-medium">6 Butir Kebijakan</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {SCHOOL_MISSIONS.map((misi, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-850/70 border border-slate-200/70 dark:border-slate-800 hover:border-emerald-300 dark:hover:border-emerald-800/80 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                      {idx + 1}
                    </span>
                    <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed pt-0.5">
                      {misi}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tujuan */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <h4 className="text-sm font-black tracking-wider uppercase text-sky-700 dark:text-sky-300">
                    TUJUAN
                  </h4>
                </div>
                <span className="text-xs text-slate-500 font-medium">6 Target Capaian Lulusan</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {SCHOOL_OBJECTIVES.map((tujuan, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 p-4 rounded-2xl bg-sky-50/40 dark:bg-slate-850/70 border border-sky-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-800/80 transition-colors"
                  >
                    <span className="w-7 h-7 rounded-xl bg-sky-600 text-white flex items-center justify-center text-xs font-bold shrink-0 shadow-xs">
                      {idx + 1}
                    </span>
                    <p className="text-xs md:text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed pt-0.5">
                      {tujuan}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Struktur Organisasi Link / Quick Gateway */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="p-6 rounded-2xl bg-gradient-to-r from-sky-50 to-blue-50 dark:from-slate-850 dark:to-sky-950/40 border border-sky-200/80 dark:border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sky-600 text-white flex items-center justify-center shadow-md shrink-0">
                    <Building className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-slate-900 dark:text-white">
                      Bagan Struktur Organisasi Sekolah 2026/2027
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">
                      Dilengkapi Garis Komando instruktif, Garis Koordinasi fungsional, serta rincian wewenang GTK.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('struktur')}
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shrink-0 shadow-xs flex items-center gap-2"
                >
                  <span>Buka Struktur Organisasi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 5: Struktur Organisasi Sekolah */}
      {activeTab === 'struktur' && (
        <SchoolOrganizationChart />
      )}
    </div>
  );
};
