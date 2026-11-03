import React, { useState } from 'react';

interface SchoolEmblemProps {
  className?: string;
  size?: number;
}

export const SchoolEmblem: React.FC<SchoolEmblemProps> = ({ className = '', size = 48 }) => {
  const [hasError, setHasError] = useState(false);
  const logoSrc = "/assets/aistudio/Logo_Yayasan_AL-IMAMAH-ASLI_e94eade0.png";

  return (
    <div 
      className={`relative flex items-center justify-center shrink-0 rounded-2xl bg-white p-0.5 shadow-sm border border-slate-100 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      {!hasError ? (
        <img
          src={logoSrc}
          alt="Logo Yayasan Al-Imamah SMP Plus Al-Imamah"
          className="w-full h-full object-contain p-0.5"
          onError={() => setHasError(true)}
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="w-full h-full rounded-xl bg-gradient-to-br from-sky-600 via-emerald-600 to-amber-500 flex items-center justify-center text-white font-bold text-xs">
          AI
        </div>
      )}
    </div>
  );
};
