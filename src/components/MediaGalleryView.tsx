import React from 'react';
import { 
  Play, 
  ExternalLink, 
  Video, 
  Image as ImageIcon, 
  Calendar, 
  Award,
  Sparkles
} from 'lucide-react';
import { VIDEO_GALLERY, VideoItem, SCHOOL_INFO } from '../data/schoolData';

interface MediaGalleryViewProps {
  onOpenVideo: (video: VideoItem) => void;
}

export const MediaGalleryView: React.FC<MediaGalleryViewProps> = ({ onOpenVideo }) => {
  const purnawiyataVideos = VIDEO_GALLERY.filter(v => v.category === 'Purnawiyata');
  const otherVideos = VIDEO_GALLERY.filter(v => v.category !== 'Purnawiyata');

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <span className="text-xs font-bold text-red-600 dark:text-red-400 tracking-wider uppercase">
            Dokumentasi & Siaran Resmi
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            Video Gallery & Dokumentasi Sekolah
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Siaran langsung Haflatul Huffadz, Purnawiyata, kajian pesantren, dan rekam jejak santri
          </p>
        </div>
      </div>

      {/* Featured Haflatul Huffadz & Purnawiyata Section */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Award className="w-5 h-5 text-amber-500" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Dokumentasi Haflatul Huffadz & Purnawiyata
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {purnawiyataVideos.map((video) => (
            <div 
              key={video.id}
              className="p-6 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-md flex flex-col justify-between hover:shadow-lg transition-all"
            >
              <div>
                {/* Simulated Thumbnail with Play Overlay */}
                <div 
                  onClick={() => onOpenVideo(video)}
                  className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 cursor-pointer group mb-4"
                >
                  <img
                    src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 group-hover:bg-red-500 text-white flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    </div>
                  </div>
                  <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/75 text-white text-[10px] font-mono rounded">
                    {video.duration}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-red-600 dark:text-red-400 uppercase tracking-wide">
                    Live Stream · {video.date}
                  </span>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {video.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {video.presenterOrEvent}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-700 flex items-center justify-between gap-3">
                <button
                  onClick={() => onOpenVideo(video)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs transition-colors shadow-xs flex items-center justify-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Putar di Aplikasi</span>
                </button>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
                  title="Tonton Langsung di YouTube"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Pembelajaran & Pesantren Grid */}
      <div className="p-6 md:p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-xs space-y-5">
        <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Video className="w-4 h-4 text-sky-500" />
          <span>Kajian & Video Pembelajaran Dewan Guru</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {otherVideos.map((video) => (
            <div 
              key={video.id}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-700 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-bold text-sky-600 dark:text-sky-400">
                  {video.category} · {video.date}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  {video.title}
                </h4>
                <p className="text-xs text-slate-500 mt-1">
                  {video.presenterOrEvent}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => onOpenVideo(video)}
                  className="flex-1 py-2 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Lihat Video</span>
                </button>
                <a
                  href={video.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Campus Atmosphere Photo Card */}
      <div className="rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-md bg-white dark:bg-slate-800">
        <div className="relative h-64 md:h-80">
          <img
            src={SCHOOL_INFO.campusImage}
            alt="Kampus SMP Plus Al-Imamah Pamoroh Kadur Pamekasan"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent flex items-end p-6 md:p-8">
            <div className="text-white">
              <span className="text-xs font-bold text-amber-300 uppercase tracking-wider">
                Lingkungan Belajar Asri & Kondusif
              </span>
              <h4 className="text-xl md:text-2xl font-extrabold mt-0.5">
                Pondok Pesantren Tadribuddu'aat & SMP Plus Al-Imamah
              </h4>
              <p className="text-xs text-slate-200 mt-1 max-w-2xl">
                Terletak di Dusun Oray, Desa Pamoroh, Kecamatan Kadur, Kabupaten Pamekasan, Jawa Timur. Menghadirkan suasana hening dan tenang untuk menghafal Al-Qur'an dan menuntut ilmu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
