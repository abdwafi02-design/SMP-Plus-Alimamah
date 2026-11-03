import React, { useState } from 'react';
import { 
  Sparkles, 
  Award, 
  FileCheck2, 
  BookOpen, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ExternalLink, 
  Compass, 
  Music, 
  Globe, 
  Cpu, 
  Scroll,
  Search
} from 'lucide-react';
import { EXTRACURRICULARS, SCHOOL_INFO } from '../data/schoolData';

interface ImportantInfoViewProps {
  initialSubSection?: string;
}

export const ImportantInfoView: React.FC<ImportantInfoViewProps> = ({ initialSubSection = 'ekskul' }) => {
  const [activeTab, setActiveTab] = useState(initialSubSection || 'ekskul');
  const [nisnSearch, setNisnSearch] = useState('');
  const [searchResult, setSearchResult] = useState<any>(null);

  const handleSearchIjazah = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nisnSearch.trim()) return;
    setSearchResult({
      nisn: nisnSearch,
      nama: 'Muhammad Al-Fatih',
      status: 'Terverifikasi Sah',
      noIjazah: 'DN-05/DIK-SMP/2026/0892',
      tahunLulus: '2026',
      sekolah: 'SMP Plus Al-Imamah',
      keterangan: 'Telah menyelesaikan pendidikan tingkat SMP dan tahfidz bersanad.'
    });
  };

  const renderIcon = (name: string) => {
    switch (name) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Scroll': return <Scroll className="w-5 h-5" />;
      case 'Music': return <Music className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Globe': return <Globe className="w-5 h-5" />;
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase">
            Pusat Informasi & Layanan Terpadu
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Informasi Penting & Akademik
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Ekstrakurikuler santri, portal e-ijazah, e-rapor, alumni, pengumuman, dan kalender liburan
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl shrink-0">
          <button
            onClick={() => setActiveTab('ekskul')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'ekskul'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Ekstrakurikuler
          </button>
          <button
            onClick={() => setActiveTab('eijazah')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'eijazah'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            e-Ijazah & e-Rapor
          </button>
          <button
            onClick={() => setActiveTab('alumni')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'alumni'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Alumni Al-Imamah
          </button>
          <button
            onClick={() => setActiveTab('kelulusan')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'kelulusan'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Pengumuman Kelulusan
          </button>
          <button
            onClick={() => setActiveTab('liburan')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
              activeTab === 'liburan'
                ? 'bg-white dark:bg-slate-700 text-sky-600 dark:text-sky-400 shadow-xs'
                : 'text-slate-600 dark:text-slate-300 hover:text-slate-900'
            }`}
          >
            Kalender Liburan
          </button>
        </div>
      </div>

      {/* 1. Ekstrakurikuler */}
      {activeTab === 'ekskul' && (
        <div className="space-y-6 animate-fade-in">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">
              Program Ekstrakurikuler Unggulan Santri
            </h3>
            <span className="text-xs text-slate-500">Membina Bakat, Karakter, & Dakwah</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EXTRACURRICULARS.map((extra) => (
              <div 
                key={extra.id}
                className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between hover:shadow-md transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-sky-50 dark:bg-sky-950/50 text-sky-600 flex items-center justify-center">
                      {renderIcon(extra.iconName)}
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-sky-600 dark:text-sky-400 uppercase tracking-wide">
                        {extra.category}
                      </span>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white">
                        {extra.name}
                      </h4>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {extra.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-700/60 space-y-1 text-[11px] text-slate-500">
                  <p><span className="font-semibold text-slate-700 dark:text-slate-300">Jadwal:</span> {extra.schedule}</p>
                  <p><span className="font-semibold text-slate-700 dark:text-slate-300">Pembina:</span> {extra.coach}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 2. e-Ijazah & e-Rapor */}
      {activeTab === 'eijazah' && (
        <div className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* e-Ijazah Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-sky-100 dark:bg-sky-950/50 text-sky-600">
                  <FileCheck2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                    Verifikasi e-Ijazah & Legalitas
                  </h4>
                  <p className="text-xs text-slate-500">Pengecekan keaslian dan nomor seri ijazah kelulusan</p>
                </div>
              </div>

              <form onSubmit={handleSearchIjazah} className="space-y-3 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Masukkan NISN atau Nomor Ijazah Santri
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={nisnSearch}
                      onChange={(e) => setNisnSearch(e.target.value)}
                      placeholder="Contoh: 0092837461"
                      className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors shrink-0"
                    >
                      Cek Ijazah
                    </button>
                  </div>
                </div>
              </form>

              {searchResult && (
                <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/50 space-y-1.5 text-xs">
                  <div className="flex items-center justify-between font-bold text-emerald-800 dark:text-emerald-300">
                    <span>{searchResult.nama}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-200 dark:bg-emerald-800 text-[10px]">{searchResult.status}</span>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300">No. Ijazah: <span className="font-mono">{searchResult.noIjazah}</span></p>
                  <p className="text-slate-600 dark:text-slate-300">Tahun Kelulusan: {searchResult.tahunLulus}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-[11px] pt-1 border-t border-emerald-200 dark:border-emerald-800">
                    {searchResult.keterangan}
                  </p>
                </div>
              )}
            </div>

            {/* e-Rapor Card */}
            <div className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-emerald-100 dark:bg-emerald-950/50 text-emerald-600">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                      Portal e-Rapor Digital
                    </h4>
                    <p className="text-xs text-slate-500">Integrasi Kurikulum Merdeka & Buku Prestasi Pesantren</p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                  Sistem penilaian berbasis web bagi dewan guru untuk menginput nilai formatif, sumatif, capaian P5, serta raport kepesantrenan (bacaan kitab, setoran tahfidz, dan adab santri).
                </p>

                <div className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Sinkronisasi otomatis dengan aplikasi Dapodik Kemendikbudristek</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    <span>Laporan Mutaba'ah Tahfidz & Khotmil Qur'an semesteran</span>
                  </div>
                </div>
              </div>

              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-xs font-bold text-emerald-700 dark:text-emerald-300 hover:bg-emerald-100 transition-colors"
              >
                <span>Permohonan Akses e-Rapor Wali Santri</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* 3. Alumni Al-Imamah */}
      {activeTab === 'alumni' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase">
              Jejaring Kebersamaan
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              Ikatan Alumni SMP Plus Al-Imamah (IKASMAPLI)
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Menjaga tali silaturahim santri yang telah lulus dan berkiprah di berbagai jenjang pendidikan tinggi maupun pesantren ternama
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-sky-600">Sebaran Studi Lanjut</span>
              <p className="text-xl font-bold tabular-nums text-slate-900 dark:text-white mt-1">94%</p>
              <p className="text-xs text-slate-500 mt-0.5">Melanjutkan ke SMA/MA Unggulan & Pesantren Luhur di Jawa Timur dan luar Jawa.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-emerald-600">Kader Huffadz</span>
              <p className="text-xl font-bold tabular-nums text-slate-900 dark:text-white mt-1">120+ Santri</p>
              <p className="text-xs text-slate-500 mt-0.5">Telah menyelesaikan wisuda tahfidz Al-Qur'an pada Haflatul Huffadz.</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700">
              <span className="text-xs font-bold text-amber-600">Tracer Study</span>
              <p className="text-xl font-bold tabular-nums text-slate-900 dark:text-white mt-1">Aktif</p>
              <p className="text-xs text-slate-500 mt-0.5">Pendataan database karir dan beasiswa perguruan tinggi ikatan alumni.</p>
            </div>
          </div>
        </div>
      )}

      {/* 4. Pengumuman Kelulusan */}
      {activeTab === 'kelulusan' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-5 animate-fade-in">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-emerald-600 uppercase">Resmi & Transparan</span>
              <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
                Pengumuman Kelulusan Siswa Kelas IX
              </h3>
            </div>
            <span className="px-3 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800">
              Kelulusan 100%
            </span>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-700 leading-relaxed text-xs text-slate-700 dark:text-slate-300 space-y-3">
            <p>
              Berdasarkan hasil Rapat Pleno Dewan Guru SMP Plus Al-Imamah bersama Pengasuh Pondok Pesantren Tadribuddu'aat, seluruh peserta didik kelas IX dinyatakan <span className="font-bold text-emerald-600">LULUS 100%</span> setelah memenuhi seluruh kriteria kelulusan akademis dan hafalan Al-Qur'an.
            </p>
            <p>
              Surat Keterangan Lulus (SKL) dan transkrip nilai sementara dapat diunduh melalui akun wali santri atau diambil langsung ke ruang Tata Usaha.
            </p>
          </div>
        </div>
      )}

      {/* 5. Kalender Liburan */}
      {activeTab === 'liburan' && (
        <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-6 animate-fade-in">
          <div>
            <span className="text-xs font-bold text-sky-600 dark:text-sky-400 uppercase">
              Agenda Akademik Pesantren
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mt-0.5">
              Kalender Liburan & Masuk Pesantren 2026/2027
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Jadwal kepulangan dan sowan kembali santri ke Pondok Pesantren Tadribuddu'aat
            </p>
          </div>

          <div className="space-y-3">
            {[
              { title: "Libur Akhir Semester Ganjil", date: "21 Desember 2026 — 03 Januari 2027", desc: "Santri kembali ke asrama pesantren paling lambat Ahad, 03 Januari 2027 pkl 17.00 WIB." },
              { title: "Libur Menyambut Bulan Suci Ramadhan", date: "15 — 20 Februari 2027", desc: "Pembekalan pesantren kilat dan program tadarus mandiri di rumah." },
              { title: "Libur Hari Raya Idul Fitri 1448 H", date: "18 Maret — 05 April 2027", desc: "Waktu silaturahim idul fitri bersama keluarga dan persiapan Haflatul Huffadz." },
              { title: "Pelaksanaan Haflatul Huffadz & Purnawiyata 2027", date: "Mei 2027", desc: "Wisuda tahfidz akbar dan wisuda pelepasan siswa kelas IX." }
            ].map((item, index) => (
              <div 
                key={index}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-700 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
                <div className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-sky-600 dark:text-sky-400">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{item.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
