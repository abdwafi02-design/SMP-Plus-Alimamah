import React from 'react';
import { X, ExternalLink, Play } from 'lucide-react';
import { VideoItem } from '../data/schoolData';

interface VideoModalProps {
  video: VideoItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ video, onClose }) => {
  if (!video) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-100 dark:bg-red-950/50 text-red-600">
              <Play className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 line-clamp-1">
                {video.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {video.presenterOrEvent} · {video.date}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href={video.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-sky-700 bg-sky-50 hover:bg-sky-100 dark:bg-sky-950/40 dark:text-sky-300 rounded-lg transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Buka di YouTube
            </a>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg hover:bg-slate-200/50 dark:hover:bg-slate-800 transition-colors"
              aria-label="Tutup modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Video Player Frame */}
        <div className="relative aspect-video w-full bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
            title={video.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        {/* Footer Details */}
        <div className="p-5 flex items-center justify-between text-xs text-slate-600 dark:text-slate-300 bg-slate-50 dark:bg-slate-850">
          <div className="flex items-center gap-2">
            <span className="font-medium text-slate-900 dark:text-slate-200">Kategori:</span>
            <span>{video.category}</span>
            <span aria-hidden="true">·</span>
            <span>Durasi: {video.duration}</span>
          </div>
          <span className="text-slate-500">SMP Plus Al-Imamah Official Media</span>
        </div>
      </div>
    </div>
  );
};
