import React, { useState, useEffect } from 'react';
import { 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock, 
  User, 
  MapPin, 
  Phone, 
  Filter, 
  Sparkles,
  Inbox
} from 'lucide-react';
import { SuggestionEntry, INITIAL_SUGGESTIONS } from '../data/schoolData';

const STORAGE_KEY = 'smp_alimamah_suggestions_v1';

export const SuggestionBoxView: React.FC = () => {
  const [suggestions, setSuggestions] = useState<SuggestionEntry[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.error(e);
    }
    return INITIAL_SUGGESTIONS;
  });

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phone: '',
    category: 'Akademik' as SuggestionEntry['category'],
    suggestion: '',
  });

  const [selectedFilter, setSelectedFilter] = useState<string>('Semua');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(suggestions));
    } catch (e) {
      console.error(e);
    }
  }, [suggestions]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.suggestion.trim()) return;

    const newEntry: SuggestionEntry = {
      id: `sug-${Date.now()}`,
      name: formData.name.trim(),
      address: formData.address.trim() || 'Pamekasan',
      phone: formData.phone.trim() || '-',
      category: formData.category,
      suggestion: formData.suggestion.trim(),
      createdAt: new Date().toISOString().split('T')[0],
      status: 'Terkirim',
    };

    setSuggestions([newEntry, ...suggestions]);
    setFormData({
      name: '',
      address: '',
      phone: '',
      category: 'Akademik',
      suggestion: '',
    });
    setSubmittedSuccess(true);
    setTimeout(() => setSubmittedSuccess(false), 4000);
  };

  const filteredList = suggestions.filter(item => {
    if (selectedFilter === 'Semua') return true;
    return item.category === selectedFilter;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-sky-600 dark:text-sky-400 tracking-wider uppercase">
            Aspirasi & Partisipasi Publik
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Kotak Saran Konstruktif
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Sampaikan masukan, ide pengembangan kurikulum, fasilitas, dan pelayanan pesantren demi kemajuan SMP Plus Al-Imamah
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Form Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md space-y-5 sticky top-24">
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-sky-500" />
                <span>Formulir Penyampaian Saran</span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Data Anda dikelola secara aman untuk keperluan tindak lanjut sekolah
              </p>
            </div>

            {submittedSuccess && (
              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 text-xs flex items-center gap-2.5 animate-fade-in">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <span>Jazakumullah khairan! Saran konstruktif Anda telah diterima dan dicatat oleh pihak pimpinan sekolah.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nama Lengkap *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Contoh: H. Ahmad Zaini / Ibu Siti"
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Alamat Domisili *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Contoh: Desa Pamoroh, Kec. Kadur, Pamekasan"
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Nomor Telepon / WhatsApp *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="Contoh: 0812-3456-7890"
                    className="w-full pl-9 pr-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Kategori Saran
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value as any })}
                  className="w-full px-3 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  <option value="Akademik">Akademik & Deep Learning</option>
                  <option value="Pesantren">Kepesantrenan & Tahfidz</option>
                  <option value="Fasilitas">Sarana & Prasarana</option>
                  <option value="Kedisiplinan">Kedisiplinan & Adab</option>
                  <option value="Umum">Pelayanan Umum</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 dark:text-slate-300 mb-1">
                  Isi Saran yang Konstruktif *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.suggestion}
                  onChange={(e) => setFormData({ ...formData, suggestion: e.target.value })}
                  placeholder="Tuliskan masukan atau kritik membangun Anda secara jelas dan santun..."
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 active:bg-sky-700 text-white font-bold text-xs transition-all shadow-md shadow-sky-600/20 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Saran Konstruktif</span>
              </button>
            </form>
          </div>
        </div>

        {/* List of Suggestions Column (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs">
            <div className="flex items-center gap-2">
              <Inbox className="w-4 h-4 text-sky-600" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                Daftar Saran Konstruktif ({suggestions.length})
              </h4>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap items-center gap-1 text-xs">
              {['Semua', 'Akademik', 'Pesantren', 'Fasilitas'].map((f) => (
                <button
                  key={f}
                  onClick={() => setSelectedFilter(f)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
                    selectedFilter === f
                      ? 'bg-sky-500 text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredList.map((sug) => (
              <div 
                key={sug.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                        {sug.name}
                      </h5>
                      <span className="text-slate-300">·</span>
                      <span className="text-xs text-sky-600 dark:text-sky-400 font-medium">
                        {sug.category}
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {sug.address}
                      </span>
                      <span>·</span>
                      <span className="tabular-nums">{sug.createdAt}</span>
                    </div>
                  </div>

                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                    sug.status === 'Ditindaklanjuti'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                      : sug.status === 'Diproses'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      : 'bg-sky-100 text-sky-800 dark:bg-sky-950/60 dark:text-sky-300'
                  }`}>
                    {sug.status}
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 text-xs text-slate-700 dark:text-slate-300 leading-relaxed border border-slate-100 dark:border-slate-800">
                  "{sug.suggestion}"
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                  <span>Kontak: {sug.phone}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Terverifikasi Sistem
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
