import React, { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { HeroBanner } from './components/HeroBanner';
import { ProfileView } from './components/ProfileView';
import { GtkView } from './components/GtkView';
import { StudentView } from './components/StudentView';
import { MediaGalleryView } from './components/MediaGalleryView';
import { ImportantInfoView } from './components/ImportantInfoView';
import { SuggestionBoxView } from './components/SuggestionBoxView';
import { VideoModal } from './components/VideoModal';
import { Footer } from './components/Footer';
import { VideoItem, VIDEO_GALLERY } from './data/schoolData';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('beranda');
  const [subSection, setSubSection] = useState<string | undefined>(undefined);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  const handleSelectTab = (tab: string, sub?: string) => {
    setCurrentTab(tab);
    setSubSection(sub);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  const handleOpenVideo = (video: VideoItem) => {
    setSelectedVideo(video);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 flex flex-col font-sans transition-colors">
      {/* Top Navigation Bar adhering to Top Bar Contract */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onToggleSidebar={handleToggleSidebar}
        isSidebarOpen={isSidebarOpen}
      />

      <div className="flex-1 flex">
        {/* Left Sidebar (Expandable & Collapsible) */}
        <Sidebar
          isOpen={isSidebarOpen}
          onToggle={handleToggleSidebar}
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
        />

        {/* Main Content Area */}
        <main
          className={`flex-1 transition-all duration-300 ease-in-out w-full px-4 sm:px-6 md:px-8 py-8 ${
            isSidebarOpen ? 'lg:pl-68' : 'lg:pl-22'
          }`}
        >
          <div className="max-w-7xl mx-auto space-y-10">
            {/* Tab 1: Beranda */}
            {currentTab === 'beranda' && (
              <HeroBanner
                onNavigateTab={handleSelectTab}
                onOpenVideo={() => {
                  const defaultVideo = VIDEO_GALLERY[0];
                  if (defaultVideo) handleOpenVideo(defaultVideo);
                }}
              />
            )}

            {/* Tab 2: Profil (Pengasuh, Kepala Sekolah, Ketua Yayasan & Profil Sekolah) */}
            {currentTab === 'profil' && (
              <ProfileView key={`profil-${subSection}`} initialSubSection={subSection} />
            )}

            {/* Tab 3: Guru dan Tenaga Kependidikan */}
            {currentTab === 'gtk' && (
              <GtkView 
                key={`gtk-${subSection}`}
                initialSubSection={subSection} 
                onOpenVideo={handleOpenVideo}
              />
            )}

            {/* Tab 4: Murid & Kesiswaan (SPMB, Catatan Harian, Tata Tertib, Wali Kelas) */}
            {currentTab === 'murid' && (
              <StudentView key={`murid-${subSection}`} initialSubSection={subSection} />
            )}

            {/* Tab 5: Video Gallery & Dokumentasi Sekolah */}
            {currentTab === 'media' && (
              <MediaGalleryView onOpenVideo={handleOpenVideo} />
            )}

            {/* Tab 6: Informasi Penting (Ekskul, e-Ijazah, e-Rapor, Alumni, Liburan) */}
            {currentTab === 'info' && (
              <ImportantInfoView initialSubSection={subSection} />
            )}

            {/* Tab 7: Kotak Saran Konstruktif */}
            {currentTab === 'saran' && (
              <SuggestionBoxView />
            )}
          </div>

          {/* Clean Footer */}
          <Footer onSelectTab={handleSelectTab} />
        </main>
      </div>

      {/* Embedded Video Modal */}
      <VideoModal
        video={selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </div>
  );
}
