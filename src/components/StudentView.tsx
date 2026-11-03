import React, { useState } from 'react';
import { 
  GraduationCap, 
  ExternalLink, 
  BookOpen, 
  CheckCircle2, 
  AlertCircle, 
  ShieldAlert, 
  HeartHandshake, 
  Clock, 
  Calendar,
  Sparkles,
  ClipboardList,
  Users,
  Phone
} from 'lucide-react';
import { TEACHER_APPS_LINKS, SCHOOL_RULES } from '../data/schoolData';

interface StudentViewProps {
  initialSubSection?: string;
}

export const StudentView: React.FC<StudentViewProps> = ({ initialSubSection = 'spmb' }) => {
  const [activeTab, setActiveTab] = useState(initialSubSection === 'walikelas' ? 'spmb' : (initialSubSection || 'spmb'));

  // Interactive quick simulation for Catatan Harian Siswa
  const [demoLog, setDemoLog] = useState({
    studentName: 'Ahmad Faiz Al-Imamah',
    classGrade: 'Kelas VII',
    subuhPrayer: true,
    dzuhurPrayer: true,
    asharPrayer: true,
    maghribPrayer: true,
    isyaPrayer: true,
    tahfidzSurah: 'Juz 30 (An-Naba s.d Al-Muthaffifin)',
    quranPages: '5',
    adabScore: 'Sangat Baik (A)',
    notes: 'Aktif membantu piket masjid dan hadir halaqah tepat waktu.'
  });
  const [isLogged, setIsLogged] = useState(false);

  const handleSaveDemoLog = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLogged(true);
    setTimeout(() => setIsLogged(false), 3000);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Kesiswaan & Pembinaan Santri
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Siswa, SPMB & Catatan Harian
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Penerimaan murid baru, mutaba'ah harian santri, serta pedoman tata tertib pesantren
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTab('spmb')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'spmb'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            SPMB 2026/2027
          </button>
          <button
            onClick={() => setActiveTab('catatan')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'catatan'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Catatan Harian Siswa
          </button>
          <button
            onClick={() => setActiveTab('tatatertib')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'tatatertib'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Tata Tertib Santri
          </button>
        </div>
      </div>

      {/* Tab 1: SPMB Section */}
      {activeTab === 'spmb' && (
        <div className="space-y-8 animate-fade-in">
          {/* Main Hero Callout for SPMB */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-600 via-teal-700 to-sky-800 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold tracking-wider uppercase text-amber-300">
                Penerimaan Santri Baru Tahun Pelajaran 2026/2027
              </span>
              <h3 className="text-2xl md:text-3xl font-extrabold mt-1">
                SPMB SMP Plus Al-Imamah Berbasis Pesantren
              </h3>
              <p className="text-sm text-emerald-100 mt-2 leading-relaxed">
                Membuka kesempatan bagi putra-putri lulusan SD/MI untuk menimba ilmu agama dan umum, menghafal Al-Qur'an, dan belajar dengan metode Deep Learning dalam asuhan Pondok Pesantren Tadribuddu'aat.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={TEACHER_APPS_LINKS.spmbForm.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-all shadow-md shadow-amber-400/20"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Isi Formulir Pendaftaran Google Form</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://wa.me/+827712755454?text=Halo%20Panitia%20SPMB%20SMP%20Plus%20Al-Imamah,%20saya%20ingin%20konsultasi%20pendaftaran"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold text-xs backdrop-blur-md border border-white/20 transition-all"
                >
                  <span>Konsultasi Panitia SPMB via WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Comparison Cards: SPMB 2025/2026 & SPMB 2026/2027 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SPMB 2026/2027 Active */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border-2 border-emerald-500/50 shadow-md flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wide">
                    Gelombang Aktif
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300">
                    Pendaftaran Dibuka
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  SPMB Tahun Pelajaran 2026/2027
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Pendaftaran dibuka untuk kuota terbatas rombongan belajar putra dan putri. Prioritas beasiswa tahfidz Qur'an dan prestasi akademik.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Gelombang 1: Oktober — Desember 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Gelombang 2: Januari — April 2027</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Tes Seleksi: Baca Al-Qur'an, Psikotes & Wawancara Wali</span>
                  </div>
                </div>
              </div>

              <a
                href={TEACHER_APPS_LINKS.spmbForm.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs text-center transition-colors shadow-xs"
              >
                Daftar Sekarang (Google Forms)
              </a>
            </div>

            {/* SPMB 2025/2026 Archived */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wide">
                    Arsip Laporan
                  </span>
                  <span className="px-2.5 py-1 text-[11px] font-bold rounded-full bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300">
                    Selesai & Berjalan
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                  SPMB Tahun Pelajaran 2025/2026
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                  Laporan rekapitulasi penerimaan peserta didik baru tahun ajaran 2025/2026 yang saat ini telah aktif mengikuti pembelajaran di Kelas VII dan VIII.
                </p>

                <div className="mt-4 space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-850">
                    <span>Total Pendaftar:</span>
                    <span className="font-bold tabular-nums">58 Santri</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-850">
                    <span>Santri Diterima:</span>
                    <span className="font-bold tabular-nums">42 Santri Terpilih</span>
                  </div>
                  <div className="flex items-center justify-between p-2 rounded-lg bg-slate-50 dark:bg-slate-850">
                    <span>Program Tahfidz Unggulan:</span>
                    <span className="font-bold text-emerald-600">100% Mengikuti Halaqah</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700/50 text-center text-xs text-slate-500">
                Penerimaan 2025/2026 Telah Ditutup
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Catatan Harian Siswa Section */}
      {activeTab === 'catatan' && (
        <div className="space-y-8 animate-fade-in">
          {/* Official App Box */}
          <div className="p-6 md:p-8 rounded-3xl bg-gradient-to-r from-sky-600 to-indigo-700 text-white shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-sky-200 uppercase tracking-wider">
                Aplikasi Resmi Mutaba'ah Santri
              </span>
              <h3 className="text-2xl font-extrabold mt-1">
                Aplikasi Catatan Harian Siswa SMP Plus Al-Imamah
              </h3>
              <p className="text-xs md:text-sm text-sky-100 mt-2 leading-relaxed">
                Digunakan setiap hari oleh wali kelas, ustadz pembina asrama, dan dewan guru untuk memantau shalat berjamaah 5 waktu, hafalan Al-Qur'an (Tahfidz), adab pergaulan, serta catatan kedisiplinan santri.
              </p>
            </div>

            <a
              href={TEACHER_APPS_LINKS.catatanHarianSiswa.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-slate-900 font-bold text-xs hover:bg-sky-50 transition-colors shadow-md shrink-0"
            >
              <ClipboardList className="w-4 h-4 text-sky-600" />
              <span>Buka Aplikasi di s.id</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Interactive In-App Mutaba'ah Logging Demo */}
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-700 pb-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Formulir Cepat Mutaba'ah Yaumiyah (Simulasi Integrasi GTK)
                </h4>
                <p className="text-xs text-slate-500">
                  Guru dan wali santri dapat melakukan verifikasi capaian harian santri langsung dari dashboard ini
                </p>
              </div>
              <span className="text-xs font-semibold text-emerald-600">
                Pencatatan Harian Aktif
              </span>
            </div>

            {isLogged && (
              <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 text-xs flex items-center gap-2 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Catatan harian berhasil disimpan ke sistem mutaba'ah SMP Plus Al-Imamah!</span>
              </div>
            )}

            <form onSubmit={handleSaveDemoLog} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Nama Santri / Siswa
                  </label>
                  <input
                    type="text"
                    value={demoLog.studentName}
                    onChange={(e) => setDemoLog({ ...demoLog, studentName: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Rombongan Belajar (Kelas)
                  </label>
                  <select
                    value={demoLog.classGrade}
                    onChange={(e) => setDemoLog({ ...demoLog, classGrade: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Kelas VII">Kelas VII (Tujuh)</option>
                    <option value="Kelas VIII">Kelas VIII (Delapan)</option>
                    <option value="Kelas IX">Kelas IX (Sembilan)</option>
                  </select>
                </div>
              </div>

              {/* Shalat Berjamaah 5 Waktu Toggles */}
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Mutaba'ah Shalat Fardhu Berjamaah di Masjid
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { key: 'subuhPrayer', label: 'Subuh' },
                    { key: 'dzuhurPrayer', label: 'Dzuhur' },
                    { key: 'asharPrayer', label: 'Ashar' },
                    { key: 'maghribPrayer', label: 'Maghrib' },
                    { key: 'isyaPrayer', label: 'Isya' },
                  ].map(({ key, label }) => {
                    const isChecked = (demoLog as any)[key];
                    return (
                      <button
                        type="button"
                        key={key}
                        onClick={() => setDemoLog({ ...demoLog, [key]: !isChecked })}
                        className={`p-2.5 rounded-xl text-xs font-semibold flex items-center justify-between border transition-all ${
                          isChecked
                            ? 'bg-emerald-500 text-white border-emerald-600 shadow-xs'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                        }`}
                      >
                        <span>{label}</span>
                        <CheckCircle2 className={`w-3.5 h-3.5 ${isChecked ? 'text-white' : 'opacity-30'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Capaian Hafalan / Muraja'ah Tahfidz
                  </label>
                  <input
                    type="text"
                    value={demoLog.tahfidzSurah}
                    onChange={(e) => setDemoLog({ ...demoLog, tahfidzSurah: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    placeholder="Contoh: Surah Al-Mulk ayat 1-30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                    Nilai Karakter / Adab Santri
                  </label>
                  <select
                    value={demoLog.adabScore}
                    onChange={(e) => setDemoLog({ ...demoLog, adabScore: e.target.value })}
                    className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <option value="Sangat Baik (A)">Sangat Baik (A) - Taat & Santun</option>
                    <option value="Baik (B)">Baik (B) - Disiplin Normal</option>
                    <option value="Cukup (C)">Cukup (C) - Butuh Pengawasan</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Catatan Evaluasi Guru / Wali Asrama
                </label>
                <textarea
                  rows={2}
                  value={demoLog.notes}
                  onChange={(e) => setDemoLog({ ...demoLog, notes: e.target.value })}
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shadow-xs"
                >
                  Simpan Catatan Mutaba'ah
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Tab 3: Tata Tertib Siswa Section */}
      {activeTab === 'tatatertib' && (
        <div className="space-y-6 animate-fade-in">
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6">
            <div>
              <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase">
                Buku Pedoman Kedisiplinan
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                Tata Tertib Santri & Siswa SMP Plus Al-Imamah
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Menjaga marwah, adab, ketertiban, dan keharmonisan lingkungan pesantren Pondok Pesantren Tadribuddu'aat
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {SCHOOL_RULES.map((rule, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-700 space-y-3"
                >
                  <div className="flex items-center gap-2">
                    {idx === 0 ? (
                      <HeartHandshake className="w-5 h-5 text-sky-500" />
                    ) : idx === 1 ? (
                      <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    ) : (
                      <ShieldAlert className="w-5 h-5 text-red-500" />
                    )}
                    <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                      {rule.title}
                    </h4>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300">
                    {rule.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-sky-500 font-bold">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Sanksi & Apresiasi Prestasi */}
            <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/70 dark:border-amber-900/40 text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <h5 className="font-bold text-amber-900 dark:text-amber-200 text-sm">
                Sistem Poin Prestasi & Konseling Karakter
              </h5>
              <p className="leading-relaxed">
                SMP Plus Al-Imamah mengedepankan pendekatan pembinaan edukatif berbasis ta'dib nabawi. Setiap pelanggaran dibimbing melalui pendekatan konseling wali santri, sedangkan santri berprestasi diberikan penghargaan khusus pada momen Haflatul Huffadz.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
