export interface LeadershipProfile {
  id: string;
  name: string;
  role: string;
  title: string;
  photo: string;
  about: string;
  education?: string[];
  leadershipHistory?: string[];
  skills?: string[];
  contact?: string;
  quote?: string;
}

export interface TeacherStaff {
  id: string;
  name: string;
  role: string;
  subject: string;
  classAssigned?: string;
  education: string;
  experience: string;
  avatarColor: string;
  initials: string;
  photo?: string;
  driveLink?: string;
}

export interface WaliKelasItem {
  grade: string;
  name: string;
  photo?: string;
  class: string;
  driveUrl: string;
  phone: string;
  consultationUrl: string;
  studentsCount: number;
  notes: string;
}

export interface WakaProfile {
  id: string;
  roleTitle: string;
  shortRole: string;
  name: string;
  degree: string;
  photo: string;
  driveLink?: string;
  description: string;
  dasarHukum: string[];
  tugasPokok: string[];
  kewajiban: string[];
  wewenang: string[];
  programKerja: string[];
}

export interface SuggestionEntry {
  id: string;
  name: string;
  address: string;
  phone: string;
  category: 'Akademik' | 'Kedisiplinan' | 'Fasilitas' | 'Pesantren' | 'Umum';
  suggestion: string;
  createdAt: string;
  status: 'Terkirim' | 'Diproses' | 'Ditindaklanjuti';
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Purnawiyata' | 'Pembelajaran' | 'Pesantren' | 'Kegiatan';
  youtubeUrl: string;
  youtubeId: string;
  duration: string;
  presenterOrEvent: string;
  date: string;
  thumbnail?: string;
}

export interface SubjectLearningVideo {
  id: string;
  subject: string;
  code: string;
  title: string;
  teacher: string;
  badgeColor: string;
  youtubeUrl: string;
  youtubeId: string;
  channelName: string;
  channelUrl: string;
  duration: string;
  description: string;
  topics: string[];
  websiteUrl?: string;
}

export interface Extracurricular {
  id: string;
  name: string;
  category: string;
  schedule: string;
  coach: string;
  description: string;
  iconName: string;
}

export const SCHOOL_INFO = {
  name: "SMP PLUS AL-IMAMAH",
  tagline: "Sekolah Berbasis Pesantren Salaf Dan Modern: Berilmu, Berakhlak, Berprestasi, dan Bermanfaat",
  motto: ["Berilmu", "Berakhlak", "Berprestasi", "Bermanfaat"],
  foundedYear: "2018",
  accreditation: "Terakreditasi Baik (Unggul Berbasis Pesantren)",
  npsn: "69984920",
  address: "Dusun Oray, Desa Pamoroh, Kecamatan Kadur, Kabupaten Pamekasan, Jawa Timur 69371",
  whatsappNumber: "+827712755454",
  whatsappUrl: "https://wa.me/+827712755454",
  historyUrl: "https://smpplusal-imamah.blogspot.com/p/sejarah-smp-plus-al-imamah-smp-plus-al.html",
  greetingUrl: "https://smpplusal-imamah.blogspot.com/p/kata-sambutan-kepala-sekolah-peluncuran.html",
  heroImage: "/assets/images/hero_pesantren_students_1793646545378.jpg",
  campusImage: "/assets/images/campus_al_imamah_1793646545524.jpg",
  logo: "/assets/aistudio/Logo_Yayasan_AL-IMAMAH-ASLI_e94eade0.png",
};

export const SCHOOL_VISION = "Terwujudnya Murid yang Tafaqquh Fiddin, berakhlakul Qur'ani, unggul dalam prestasi, mandiri, kreatif, serta mampu memberikan manfaat bagi agama, bangsa, dan masyarakat.";

export const SCHOOL_MISSIONS: string[] = [
  "Membentuk Murid yang memahami dan mengamalkan ajaran Islam berdasarkan Al-Qur'an dan As-Sunnah.",
  "Menanamkan akhlakul Qur'ani melalui pembiasaan perilaku Islami.",
  "Menyelenggarakan pembelajaran yang berkualitas untuk meningkatkan prestasi dan kompetensi Murid.",
  "Mengembangkan potensi, kreativitas, dan kemandirian Murid.",
  "Menumbuhkan kepedulian sosial dan semangat pengabdian kepada agama, bangsa, dan masyarakat.",
  "Mewujudkan budaya sekolah yang religius, aman, sehat, dan berkolaborasi dengan orang tua serta masyarakat."
];

export const SCHOOL_OBJECTIVES: string[] = [
  "Membentuk Murid yang memiliki pemahaman Ulumuddiniyah, beriman, bertakwa kepada Allah SWT, serta mampu mengamalkan ajaran Islam dalam kehidupan sehari-hari.",
  "Membentuk Murid yang berakhlakul Qur'ani, jujur, disiplin, santun, bertanggung jawab, dan menjadi teladan di lingkungan sekolah maupun masyarakat.",
  "Meningkatkan prestasi akademik dan nonakademik melalui pembelajaran yang berkualitas, inovatif, dan berpusat pada Murid.",
  "Membentuk Murid yang mandiri, percaya diri, disiplin, dan memiliki jiwa kepemimpinan.",
  "Mengembangkan potensi, bakat, minat, dan kreativitas Murid agar mampu menghasilkan karya yang inovatif dan bermanfaat.",
  "Membentuk Murid yang memiliki kepedulian sosial, semangat gotong royong, cinta tanah air, serta mampu memberikan manfaat bagi agama, bangsa, dan masyarakat."
];

export const LEADERSHIP_PROFILES: LeadershipProfile[] = [
  {
    id: "pengasuh",
    name: "Dr. KH. ACHMAD MASYKUR, Lc., M.Th.I",
    role: "Pengasuh Pondok Pesantren Tadribuddu'aat",
    title: "Pengasuh Ponpes Tadribuddu'aat Pamoroh Kadur",
    photo: "/assets/aistudio/Dr._KH._AHMAD_MASYKUR__Lc.__M.Th.I-removebg-preview_5f344092.png",
    about: "Dr. KH. Achmad Masykur, Lc., M.Th.I. merupakan pengasuh Pondok Pesantren Tadribudduaat yang berlokasi di Dusun Oray, Desa Pamoroh, Kecamatan Kadur, Kabupaten Pamekasan, Jawa Timur. Dengan bekal pendidikan dan keilmuan yang dimiliki, saya mengemban amanah dalam membimbing, mengarahkan, serta mengembangkan pendidikan pesantren yang berlandaskan nilai-nilai Al-Qur'an dan As-Sunnah. Kepemimpinan saya menjadi bagian penting dalam membangun lingkungan pesantren yang religius, berilmu, berakhlakul karimah, dan berorientasi pada pembentukan generasi muslim yang berkualitas.",
    skills: [
      "Metode Baca Cepat Kitab Kuning",
      "Pengisi Majelis Ta’lim offline maupun online",
      "Muballigh & Da'i Nasional",
      "Penterjemah Bahasa Arab Profesional"
    ],
    education: [
      "S1 (Lc.) - Universitas Al-Azhar Kairo / Studi Keislaman & Bahasa Arab",
      "S2 (M.Th.I) - Magister Tafsir Hadits / Teologi Islam",
      "S3 (Dr.) - Doktoral Dirasah Islamiyah & Kepesantrenan"
    ],
    quote: "Mendidik dengan keteladanan, mengakar pada Al-Qur'an dan Sunnah untuk melahirkan generasi yang bermanfaat bagi umat."
  },
  {
    id: "ketua_yayasan",
    name: "KH. IZZAT MUHAMMAD GHOZALI, M.Bg",
    role: "Ketua Yayasan Al-Imamah",
    title: "Ketua Yayasan Pendidikan & Sosial Al-Imamah",
    photo: "/assets/aistudio/ChatGPT_Image_7_Sep_2026__12.17.42_e12c35d5.png",
    about: "KH. Izzat Muhammad Ghozali, M.Bg mengemban amanah sebagai Ketua Yayasan Al-Imamah yang menaungi penyelenggaraan SMP Plus Al-Imamah. Beliau secara konsisten mengarahkan sinergi antara tradisi pesantren salaf-modern dengan standarisasi pendidikan nasional. Yayasan Al-Imamah berkomitmen menyediakan sarana dan prasarana yang kondusif, sistem kelembagaan yang transparan, serta pembinaan tenaga pendidik yang berkesinambungan demi mewujudkan cita-cita santri unggul.",
    education: [
      "Magister Manajemen & Studi Kepesantrenan (M.Bg)",
      "Pendidikan Pesantren Luhur Tradisional & Modern"
    ],
    skills: [
      "Kebijakan Strategis Kelembagaan Yayasan",
      "Sinergi Pesantren & Sekolah Formal",
      "Tata Kelola Wakaf & Pemberdayaan Umat",
      "Pengembangan Sarana Prasarana Digital"
    ],
    quote: "Fondasi akhlak yang kokoh adalah kunci bagi santri untuk menaklukkan peradaban global masa depan."
  },
  {
    id: "kepala_sekolah",
    name: "ABD WAFI, S.Pd.I",
    role: "Kepala SMP Plus Al-Imamah",
    title: "Kepala Sekolah (Masa Khidmah 2018 - Sekarang)",
    photo: "/assets/aistudio/ChatGPT_Image_7_Sep_2026__12.30.29_190802b3.png",
    about: "Abd Wafi, S.Pd.I merupakan Kepala SMP Plus Al-Imamah yang mulai mengemban amanah kepemimpinan sejak tahun 2018. Beliau merupakan lulusan terbaik Universitas Islam Madura Tahun 2010. Dalam menjalankan tugas kepemimpinannya, beliau berkomitmen untuk terus mengembangkan mutu pendidikan, meningkatkan kualitas pembelajaran, serta membangun karakter peserta didik yang berlandaskan nilai-nilai keislaman dan akhlakul Qur'ani. Di bawah kepemimpinannya, SMP Plus Al-Imamah terus diarahkan menjadi lembaga pendidikan berbasis pesantren yang mampu mencetak generasi berilmu, berakhlak mulia, mandiri, kreatif, berprestasi, serta memberikan manfaat bagi agama, bangsa, dan masyarakat.",
    education: [
      "Menyelesaikan pendidikan tinggi di Universitas Islam Madura dan berhasil meraih predikat Lulusan Terbaik Tahun 2010."
    ],
    leadershipHistory: [
      "Menjabat sebagai Kepala SMP Plus Al-Imamah sejak Tahun 2018 hingga sekarang, dengan tanggung jawab memimpin, mengelola, dan mengembangkan penyelenggaraan pendidikan di lingkungan SMP Plus Al-Imamah."
    ],
    skills: [
      "Manajemen Kurikulum Merdeka & Deep Learning",
      "Kepemimpinan Transformasional Pesantren",
      "Supervisi Akademik & Mutu Pembelajaran",
      "Pengembangan Karakter Berbasis Akhlakul Karimah"
    ],
    quote: "Menghadirkan pembelajaran bermakna yang memadukan kedalaman ilmu agama dengan kecakapan era modern."
  }
];

export const TEACHERS_LIST: TeacherStaff[] = [
  {
    id: "guru-1",
    name: "MOH. MUNIR, S.Pd.I",
    role: "Guru Mata Pelajaran",
    subject: "Pendidikan Pancasila (PP)",
    education: "S1 Pendidikan Agama Islam & Kewarganegaraan",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-sky-600",
    initials: "MM",
    photo: "/assets/aistudio/MOH._MUNIR_Photo_f79dce26.png"
  },
  {
    id: "guru-2",
    name: "MASTUR, S.Pd.I",
    role: "Guru Mata Pelajaran & Pembina Karakter",
    subject: "Pendidikan Agama Islam Dan Budi Pekerti",
    education: "S1 Pendidikan Agama Islam",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-emerald-600",
    initials: "MS",
    photo: "/assets/aistudio/1000155125_88da368d.jpg",
    driveLink: "https://s.id/mastur"
  },
  {
    id: "guru-3",
    name: "BAHRUL ROSI, S.Pd",
    role: "Wali Kelas IX & Guru Sains (IPA)",
    subject: "Ilmu Pengetahuan Alam (IPA)",
    classAssigned: "Kelas IX",
    education: "S1 Pendidikan IPA & Biologi",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-teal-600",
    initials: "BR",
    photo: "/assets/aistudio/20240918_080831.jpg_73a1dd07.jpeg",
    driveLink: "https://s.id/BahrulRosi"
  },
  {
    id: "guru-4",
    name: "SUBRIADI, S.Pd",
    role: "Guru Bimbingan & Konseling Santri",
    subject: "Bimbingan dan Konseling",
    education: "S1 Bimbingan dan Konseling",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-blue-600",
    initials: "SB",
    photo: "/assets/aistudio/subriadi_f698415d.png"
  },
  {
    id: "guru-5",
    name: "DHAVIQ AKBAR, S.Pd",
    role: "Guru Mata Pelajaran",
    subject: "Ilmu Pengetahuan Sosial (IPS)",
    education: "S1 Pendidikan IPS & Sejarah",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-amber-600",
    initials: "DA",
    photo: "/assets/aistudio/Dhaviq_Akbar_78fbe469.jpeg",
    driveLink: "https://s.id/DHAVIQAKBARIPS"
  },
  {
    id: "guru-6",
    name: "HOSNOL HOTIMAH, S.Pd",
    role: "Wali Kelas VIII & Guru Matematika",
    subject: "Matematika (MTK)",
    classAssigned: "Kelas VIII",
    education: "S1 Pendidikan Matematika",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-indigo-600",
    initials: "HH",
    photo: "/assets/aistudio/Hotim_b71790b6.png",
    driveLink: "https://s.id/HosnolHotimah"
  },
  {
    id: "guru-7",
    name: "NURUL FAJARIYAH, S.Pd",
    role: "Guru Mata Pelajaran & Literasi",
    subject: "Bahasa Indonesia (BIN)",
    education: "S1 Pendidikan Bahasa & Sastra Indonesia",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-rose-600",
    initials: "NF",
    photo: "/assets/aistudio/Gemini_Generated_Image_5tdvk75tdvk75tdv_b785187b.png",
    driveLink: "https://s.id/nurulfajariyah89"
  },
  {
    id: "guru-8",
    name: "NURJANUAR ILHAMI, S.Pd",
    role: "Wali Kelas VII & Guru Bahasa Inggris",
    subject: "Bahasa Inggris (BING)",
    classAssigned: "Kelas VII",
    education: "S1 Pendidikan Bahasa Inggris",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-cyan-600",
    initials: "NI",
    photo: "/assets/aistudio/Nurjanuar_Ilhami_b6dd6688.jpg",
    driveLink: "https://s.id/NURJANUAR_ILHAMI"
  },
  {
    id: "guru-9",
    name: "MAHSUNAH, S.Pd",
    role: "Guru Mata Pelajaran",
    subject: "Seni, Budaya Dan Prakarya (SBP)",
    education: "S1 Pendidikan Seni & Budaya",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-purple-600",
    initials: "MS",
    photo: "/assets/aistudio/mahsunah_4415e7d6.png",
    driveLink: "https://senibudayasmpalimamah.lovable.app/"
  },
  {
    id: "guru-10",
    name: "FAUZIYATUL JAMILAH, S.Pd",
    role: "Guru Muatan Lokal",
    subject: "Muatan Lokal Bahasa Daerah (MLBD)",
    education: "S1 Pendidikan Bahasa & Sastra Daerah",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-emerald-700",
    initials: "FJ",
    photo: "/assets/aistudio/jamilatul_fauziyah_233b0860.png"
  },
  {
    id: "guru-11",
    name: "FAIZATUL JAMILAH, S.Pd",
    role: "Guru Tahfidz & Dewan Penguji Al-Qur'an",
    subject: "Tahfidz Al-Qur'an",
    education: "S1 Pendidikan Keagamaan Islam & Hafidzah",
    experience: "Pengabdian Aktif",
    avatarColor: "bg-amber-500",
    initials: "FJ",
    photo: "/assets/aistudio/DSC_0152.jpg_acca5b8a.jpeg"
  }
];

export const DEEP_LEARNING_LINKS = [
  {
    grade: "Kelas 7",
    label: "Deep Learning Kelas 7",
    url: "https://drive.google.com/drive/folders/1gOyyoWpioReO189M6reHinHIrHlUHq4a",
    description: "Modul Ajar Deep Learning Fase D (Kelas VII), Alur Tujuan Pembelajaran, Asesmen Diagnostik & Sumatif.",
    accent: "from-sky-500 to-blue-600"
  },
  {
    grade: "Kelas 8",
    label: "Deep Learning Kelas 8",
    url: "https://drive.google.com/drive/folders/1enquQDrEFNv7NNb-xED8z8-d1RPE1CVx",
    description: "Perangkat Ajar Terintegrasi Nilai Kepesantrenan & Proyek Penguatan Profil Pelajar Pancasila (P5).",
    accent: "from-emerald-500 to-teal-600"
  },
  {
    grade: "Kelas 9",
    label: "Deep Learning Kelas 9",
    url: "https://drive.google.com/drive/folders/1fxf00CQXTyEWLLOg30Zs5Ni-Ny0f_OJH",
    description: "Persiapan Asesmen Standar Pendidikan, Pengayaan Materi Ujian, dan Portofolio Kelulusan Santri.",
    accent: "from-amber-500 to-yellow-600"
  }
];

export const TEACHER_APPS_LINKS = {
  ejurnal: {
    title: "E-Jurnal Guru 2026/2027",
    url: "https://bit.ly/jurnalguru-smp-plus-alimamah2026-2027",
    description: "Pencatatan agenda harian mengajar, ketercapaian materi, dan refleksi pedagogik guru secara real-time."
  },
  absensi: {
    title: "E-Presensi Guru & GTK",
    url: "https://s.id/PresensiSMPPlusAlimamah",
    description: "Sistem presensi kehadiran harian guru dan tenaga kependidikan berbasis lokasi & kode presensi."
  },
  supervisi: {
    title: "E-Supervisi Guru (Canva)",
    url: "https://supervisi-guru-smp.my.canva.site/",
    description: "Instrumen supervisi akademik kepala sekolah, rubrik observasi kelas, dan tindak lanjut evaluasi pembelajaran."
  },
  catatanHarianSiswa: {
    title: "Aplikasi Catatan Harian Siswa",
    url: "https://s.id/catatan-harian-siswa-alimamah",
    description: "Pencatatan mutaba'ah yaumiyah ibadah, adab santri, hafalan tahfidz, dan prestasi harian siswa."
  },
  spmbForm: {
    title: "Formulir Pendaftaran Siswa Baru (SPMB)",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSdf7opoor2zieQkmE2VJ6fHF9gm17m1gml4wDDvBLTRz6_LXA/viewform?usp=sharing&ouid=105293757822793982466",
    description: "Portal pendaftaran online resmi calon santri baru SMP Plus Al-Imamah tahun ajaran 2026/2027."
  }
};

export const WALI_KELAS_INFO: WaliKelasItem[] = [
  {
    grade: "Wali Kelas VII",
    name: "NURJANUAR ILHAMI, S.Pd",
    photo: "/assets/aistudio/Nurjanuar_Ilhami_b6dd6688.jpg",
    class: "Kelas VII Putri & Putra",
    driveUrl: "https://drive.google.com/drive/folders/1mblcAB5ZsS5NNlojeFOuvpijSv0Ym1l-",
    phone: "+6287850268092",
    consultationUrl: "https://wa.me/+6287850268092",
    studentsCount: 34,
    notes: "Pembinaan adaptasi transisi lingkungan pesantren, bimbingan bahasa Inggris & komunikasi santri, serta penanaman pondasi adab thalabul ilmi."
  },
  {
    grade: "Wali Kelas VIII",
    name: "HOSNOL HOTIMAH, S.Pd",
    photo: "/assets/aistudio/Hotim_b71790b6.png",
    class: "Kelas VIII Putri & Putra",
    driveUrl: "https://drive.google.com/drive/folders/1mblcAB5ZsS5NNlojeFOuvpijSv0Ym1l-",
    phone: "+6282337870080",
    consultationUrl: "https://wa.me/+6282337870080",
    studentsCount: 32,
    notes: "Penguatan kemandirian belajar logika matematika, pembiasaan ibadah yaumiyah, dan pembinaan karakter santri teladan."
  },
  {
    grade: "Wali Kelas IX",
    name: "BAHRUL ROSI, S.Pd",
    photo: "/assets/aistudio/20240918_080831.jpg_73a1dd07.jpeg",
    class: "Kelas IX Putri & Putra",
    driveUrl: "https://drive.google.com/drive/folders/1mblcAB5ZsS5NNlojeFOuvpijSv0Ym1l-",
    phone: "+6287750624180",
    consultationUrl: "https://wa.me/+6287750624180",
    studentsCount: 30,
    notes: "Fokus pemantapan hafalan Al-Qur'an (Haflatul Huffadz), penguasaan sains, bimbingan kelulusan, dan persiapan purnawiyata."
  }
];

export const WAKA_LIST: WakaProfile[] = [
  {
    id: "waka-kurikulum",
    roleTitle: "Wakil Kepala Sekolah Bidang Kurikulum",
    shortRole: "Waka Kurikulum",
    name: "DHAVIQ AKBAR, S.Pd",
    degree: "Sarjana Pendidikan (S.Pd)",
    photo: "/assets/aistudio/Dhaviq_Akbar_78fbe469.jpeg",
    driveLink: "https://s.id/DHAVIQAKBARIPS",
    description: "Memimpin perencanaan, pelaksanaan, serta evaluasi kurikulum satuan pendidikan terintegrasi Kurikulum Merdeka (Deep Learning) dan nilai-nilai kepesantrenan salaf modern.",
    dasarHukum: [
      "Permendikbud No. 15 Tahun 2018 tentang Pemenuhan Beban Kerja Guru, Kepala Sekolah, dan Pengawas Sekolah.",
      "Kepmendikbudristek No. 262/M/2022 tentang Perubahan atas Kepmendikbudristek No. 56/M/2022 tentang Pedoman Penerapan Kurikulum dalam Rangka Pemulihan Pembelajaran (Kurikulum Merdeka).",
      "Surat Keputusan (SK) Kepala SMP Plus Al-Imamah tentang Pembagian Tugas Guru dan Tenaga Kependidikan Tahun Ajaran 2026/2027."
    ],
    tugasPokok: [
      "Menyusun dan mengembangkan Dokumen Kurikulum Operasional Satuan Pendidikan (KOSP) SMP Plus Al-Imamah tahun berjalan.",
      "Menyusun pembagian tugas mengajar guru (PBM) dan jadwal pelajaran mingguan kelas VII, VIII, dan IX.",
      "Menyusun jadwal serta memimpin pelaksanaan Asesmen Formatif, Asesmen Sumatif Tengah Semester, Akhir Semester, dan Ujian Akhir Sekolah.",
      "Mengkoordinasikan penyusunan Modul Ajar Deep Learning, Alur Tujuan Pembelajaran (ATP), dan rubrik asesmen autentik.",
      "Memimpin program pengayaan (enrichment) akademik dan program remedial bagi santri yang membutuhkan pendampingan khusus.",
      "Mengkoordinasikan pelaksanaan Asesmen Nasional Berbasis Komputer (ANBK) serta Ujian Tahfidz (Haflatul Huffadz)."
    ],
    kewajiban: [
      "Membantu Kepala Sekolah dalam pelaksanaan supervisi akademis kelas dan evaluasi ketercapaian target kurikulum.",
      "Memantau dan mengevaluasi kedisiplinan guru dalam pengisian E-Jurnal Guru harian dan E-Presensi GTK.",
      "Menyusun kriteria kenaikan kelas dan kelulusan santri bersama dewan guru dalam rapat pleno.",
      "Mengelola rekapitulasi nilai rapor intrakurikuler dan Proyek Penguatan Profil Pelajar Pancasila (P5).",
      "Mengadakan workshop In-House Training (IHT) peningkatan kompetensi metodologi pembelajaran dan media ajar digital bagi pendidik.",
      "Mempertanggungjawabkan seluruh pelaksanaan kegiatan bidang kurikulum secara berkala kepada Kepala Sekolah."
    ],
    wewenang: [
      "Memeriksa, menelaah, dan memvalidasi perangkat pembelajaran guru (Modul Ajar, Silabus, LKPD, Rencana Asesmen).",
      "Memberikan pertimbangan teknis kepada Kepala Sekolah mengenai pembagian tugas mengajar dan beban jam guru.",
      "Mengatur tata tertib ruang kelas saat jam kegiatan belajar mengajar berlangsung.",
      "Mengambil tindakan solutif darurat ketika terjadi kekosongan jam mengajar guru."
    ],
    programKerja: [
      "Penyelarasan Kurikulum Deep Learning Berbasis Kitab Turats & Karakter Pesantren.",
      "Digitalisasi Bank Soal & Sistem Asesmen Berbasis Komputer Terintegrasi.",
      "Klinik Pembelajaran & Bimbingan Intensif Pra-Kelulusan Santri Kelas IX.",
      "Penerapan Modul Ajar Kolaboratif Lintas Mata Pelajaran dan Proyek Kewirausahaan Santri."
    ]
  },
  {
    id: "waka-kesiswaan",
    roleTitle: "Wakil Kepala Sekolah Bidang Kesiswaan",
    shortRole: "Waka Kesiswaan",
    name: "NURJANUAR ILHAMI, S.Pd",
    degree: "Sarjana Pendidikan (S.Pd)",
    photo: "/assets/aistudio/Nurjanuar_Ilhami_b6dd6688.jpg",
    driveLink: "https://s.id/NURJANUAR_ILHAMI",
    description: "Mengembangkan potensi, kedisiplinan akhlak, kepemimpinan organisasi santri, serta mengawal ketertiban pembiasaan ibadah harian santri di sekolah dan pondok.",
    dasarHukum: [
      "Permendiknas No. 39 Tahun 2008 tentang Pembinaan Kesiswaan.",
      "Permendikbud No. 82 Tahun 2015 tentang Pencegahan dan Penanggulangan Tindak Kekerasan di Lingkungan Satuan Pendidikan.",
      "Pedoman Tata Tertib & Adab Santri Pondok Pesantren Tadribuddu'aat dan SMP Plus Al-Imamah."
    ],
    tugasPokok: [
      "Merencanakan dan memimpin kepanitiaan Seleksi Penerimaan Murid Baru (SPMB/PPDB) setiap tahun ajaran baru.",
      "Menyusun program Masa Pengenalan Lingkungan Sekolah (MPLS) Ramah Anak dan orientasi nilai kepesantrenan.",
      "Menyelenggarakan pembinaan kedisiplinan dan penegakan tata tertib santri berkeadilan dan penuh keteladanan.",
      "Mengkoordinasikan seluruh kegiatan ekstrakurikuler (Pramuka, Tahfidz Al-Qur'an, Hadrah Banjari, Olahraga, dan Seni Kaligrafi).",
      "Membina Organisasi Santri Intra Sekolah (OSIS / IPM) serta melatih kepemimpinan dan manajemen organisasi santri.",
      "Mempersiapkan dan mendampingi santri dalam berbagai lomba prestasi akademik, seni islami, MTQ, dan olahraga di tingkat kabupaten/provinsi."
    ],
    kewajiban: [
      "Mengawal dan memantau pengisian Catatan Harian Siswa (mutaba'ah yaumiyah shalat berjamaah 5 waktu, adab, kedisiplinan, dan tahfidz).",
      "Berkoordinasi secara aktif dengan pengasuh pesantren, kepala asrama santri, dan dewan asatidz dalam pembinaan 24 jam.",
      "Menangani permasalahan santri dengan pendekatan bimbingan konseling restoratif bersama Guru BK dan Wali Kelas.",
      "Melaksanakan apel rutin, upacara bendera, dan pembiasaan shalat dhuha berjamaah setiap hari.",
      "Menyampaikan laporan berkala kesiswaan, absensi kehadiran santri, dan rekam jejak prestasi kepada Kepala Sekolah."
    ],
    wewenang: [
      "Memberikan reward/penghargaan kepada santri berprestasi dan menetapkan sanksi edukatif bagi pelanggar tata tertib.",
      "Menyeleksi dan merekomendasikan perwakilan santri untuk beasiswa dan keikutsertaan kompetisi eksternal.",
      "Memeriksa kedisiplinan penampilan, seragam, dan kepatuhan atribut santri.",
      "Mengusulkan pemanggilan orang tua/wali murid untuk koordinasi pembinaan kasus santri."
    ],
    programKerja: [
      "Aplikasi Catatan Harian Siswa Real-time untuk monitoring adab dan shalat jamaah santri.",
      "Gerakan Santri Disiplin, Bersih, dan Mandiri (SDBM) di lingkungan asrama dan sekolah.",
      "Pekan Prestasi, Kreasi Santri, dan Pentas Seni Islami Tahunan.",
      "Program Pembinaan Duta Bahasa & Santri Teladan Al-Imamah."
    ]
  },
  {
    id: "waka-humas",
    roleTitle: "Wakil Kepala Sekolah Bidang Hubungan Masyarakat",
    shortRole: "Waka Humas",
    name: "NURUL FAJARIYAH, S.Pd",
    degree: "Sarjana Pendidikan (S.Pd)",
    photo: "/assets/aistudio/Gemini_Generated_Image_5tdvk75tdvk75tdv_b785187b.png",
    driveLink: "https://s.id/nurulfajariyah89",
    description: "Menjembatani kemitraan sinergis sekolah dengan wali santri, komite sekolah, instansi pemerintah (Dinas & Kemenag), lembaga pesantren mitra, dan masyarakat luas.",
    dasarHukum: [
      "UU No. 14 Tahun 2005 tentang Guru dan Dosen.",
      "Permendikbud No. 75 Tahun 2016 tentang Komite Sekolah.",
      "SK Kepala SMP Plus Al-Imamah tentang Pengelolaan Hubungan Masyarakat dan Komunikasi Lembaga."
    ],
    tugasPokok: [
      "Membangun dan membina hubungan kerja sama harmonis dengan Komite Sekolah, Paguyuban Wali Santri, dan tokoh masyarakat sekitar.",
      "Menjalin koordinasi kemitraan dengan Dinas Pendidikan Kabupaten Pamekasan, Kementerian Agama, Puskesmas Kadur, dan instansi kepolisian.",
      "Mengelola publikasi kegiatan, press release, dokumentasi wisuda tahfidz/haflah, dan media komunikasi digital sekolah.",
      "Mengkoordinasikan agenda pertemuan wali murid (parenting, sosialisasi program sekolah, penerimaan rapor, dan musyawarah yayasan).",
      "Memfasilitasi penerimaan tamu dinas, asesor akreditasi, pengawas sekolah, dan delegasi kunjungan studi tiru."
    ],
    kewajiban: [
      "Menyampaikan kebijakan, agenda kalender akademik, dan informasi sekolah secara transparan, santun, dan tepat waktu.",
      "Menampung, mencatat, dan menindaklanjuti aspirasi, kritik, dan masukan masyarakat melalui portal Kotak Saran digital.",
      "Menyiapkan siaran pers dan publikasi prestasi santri di media sosial resmi dan portal informasi sekolah.",
      "Membantu penyelenggaraan acara-acara besar sekolah (Haflatul Huffadz, Purnawiyata, Hari Santri Nasional, PHBI).",
      "Menyusun laporan pertanggungjawaban kegiatan kehumasan kepada Kepala Sekolah dan Yayasan Al-Imamah."
    ],
    wewenang: [
      "Mewakili Kepala Sekolah dalam pertemuan lintas sektoral atau kedinasan apabila ditugaskan.",
      "Memeriksa dan menyetujui materi publikasi resmi yang diterbitkan atas nama SMP Plus Al-Imamah.",
      "Mengatur jadwal audiensi dan komunikasi antara wali santri dengan pihak manajemen sekolah.",
      "Menjalin nota kesepahaman (MoU) kemitraan non-komersial atas persetujuan Kepala Sekolah."
    ],
    programKerja: [
      "Forum Dialog Parenting Santri & Konsultasi Wali Murid Berkala.",
      "Peningkatan Publikasi Digital Prestasi Santri & Dakwah Media Sekolah.",
      "Bakti Sosial Santri Peduli Masyarakat Desa Pamoroh Kadur.",
      "Optimalisasi Saluran Pengaduan & Layanan Respon Cepat Aspirasi Wali Santri."
    ]
  },
  {
    id: "waka-sarpras",
    roleTitle: "Wakil Kepala Sekolah Bidang Sarana dan Prasarana",
    shortRole: "Waka Sarana dan Prasarana",
    name: "BAHRUL ROSI, S.Pd",
    degree: "Sarjana Pendidikan (S.Pd)",
    photo: "/assets/aistudio/20240918_080831.jpg_73a1dd07.jpeg",
    driveLink: "https://s.id/BahrulRosi",
    description: "Merencanakan, mengelola, mendayagunakan, dan memelihara seluruh aset sarana prasarana fisik, laboratorium IPA, perangkat IT, serta fasilitas kenyamanan belajar pesantren.",
    dasarHukum: [
      "Permendiknas No. 24 Tahun 2007 tentang Standar Sarana dan Prasarana untuk SD/MI, SMP/MTs, dan SMA/MA.",
      "Permendikbud No. 22 Tahun 2016 tentang Standar Proses Pendidikan Dasar dan Menengah.",
      "Pedoman Pengelolaan Aset dan Fasilitas Yayasan Pendidikan & Sosial Al-Imamah."
    ],
    tugasPokok: [
      "Menyusun Rencana Kebutuhan Sarana dan Prasarana (RKSP) tahunan sekolah berdasarkan analisis kebutuhan belajar mengajar.",
      "Mengelola pencatatan, inventarisasi, kodifikasi, dan pelabelan seluruh aset barang bergerak maupun tidak bergerak milik sekolah.",
      "Mengkoordinasikan pemeliharaan berkala gedung kelas, laboratorium sains/komputer, perpustakaan, asrama, dan sarana ibadah.",
      "Menyiapkan sarana teknis, instalasi kelistrikan, jaringan internet, dan perangkat komputer untuk pelaksanaan ANBK dan ujian sekolah.",
      "Menyediakan dan memelihara perlengkapan teknis untuk acara-acara besar sekolah seperti wisuda, haflah, dan peringatan hari besar islam."
    ],
    kewajiban: [
      "Memastikan kebersihan, kerapian, keasrian, dan kenyamanan lingkungan sekolah dan pesantren (Green & Healthy Boarding School).",
      "Memeriksa kelaikan sarana keselamatan, sanitasi air bersih, fasilitas MCK, dan instalasi pencegah kebakaran di sekolah.",
      "Mencatat barang masuk, barang keluar, peminjaman alat, serta penghapusan barang rusak/kadaluarsa sesuai prosedur yayasan.",
      "Berkoordinasi dengan Yayasan Al-Imamah terkait rencana pengembangan sarana fisik dan pembangunan gedung baru.",
      "Menyampaikan laporan inventarisasi sarana prasarana secara periodik per semester kepada Kepala Sekolah."
    ],
    wewenang: [
      "Mengatur tata tertib penggunaan dan peminjaman fasilitas laboratorium, perpustakaan, proyektor, dan aula.",
      "Memeriksa kelayakan dan mengusulkan pengadaan maupun perbaikan barang inventaris sekolah.",
      "Mengarahkan tim kebersihan dan penjaga sekolah dalam pemeliharaan sarana prasarana harian.",
      "Mengambil tindakan pengamanan aset sekolah terhadap risiko kerusakan, kehilangan, dan bencana."
    ],
    programKerja: [
      "Modernisasi Laboratorium IPA Terpadu dan Pengadaan Alat Peraga Pembelajaran Praktikum.",
      "Pengembangan Jaringan Internet Cepat & Sarana Multimedia di Seluruh Ruang Belajar.",
      "Program Revitalisasi Sanitasi Pesantren Sehat & Area Penghijauan Sekolah.",
      "Sistem Kodifikasi Digital Inventaris Sarpras Berbasis Barcode / Spreadsheet."
    ]
  }
];

export const VIDEO_GALLERY: VideoItem[] = [
  {
    id: "vid-1",
    title: "Haflatul Huffadz Dan Purnawiyata 2025",
    category: "Purnawiyata",
    youtubeUrl: "https://www.youtube.com/live/GfnHf7IV5as?si=6N9eXowc9vFFnyJX",
    youtubeId: "GfnHf7IV5as",
    duration: "2:45:10",
    presenterOrEvent: "Wisuda Santri Tahfidz & Purnawiyata Angkatan VI",
    date: "Juni 2025"
  },
  {
    id: "vid-2",
    title: "Haflatul Huffadz Dan Purnawiyata 2026 (Live Streaming)",
    category: "Purnawiyata",
    youtubeUrl: "https://www.youtube.com/live/KgOcxd8COck?si=3tZ2h0YbRj_tPJR8",
    youtubeId: "KgOcxd8COck",
    duration: "3:10:45",
    presenterOrEvent: "Haflah Akbar & Wisuda Santri SMP Plus Al-Imamah",
    date: "Mei 2026"
  },
  {
    id: "vid-3",
    title: "Model Pembelajaran Deep Learning Berbasis Kitab Kuning",
    category: "Pembelajaran",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    duration: "24:18",
    presenterOrEvent: "Tim Guru GTK SMP Plus Al-Imamah",
    date: "Februari 2026"
  },
  {
    id: "vid-4",
    title: "Kajian Rutin Santri & Metode Baca Cepat Kitab",
    category: "Pesantren",
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    youtubeId: "dQw4w9WgXcQ",
    duration: "45:30",
    presenterOrEvent: "Dr. KH. Achmad Masykur, Lc., M.Th.I",
    date: "Januari 2026"
  }
];

export const SUBJECT_LEARNING_VIDEOS: SubjectLearningVideo[] = [
  {
    id: "subj-vid-1",
    subject: "Pendidikan Pancasila",
    code: "PPKn",
    title: "Pendidikan Pancasila: Penerapan Nilai-Nilai Luhur Pancasila & Karakter Santri Bernegara",
    teacher: "MOH. MUNIR, S.Pd.I",
    badgeColor: "bg-sky-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=Pendidikan+Pancasila+SMP+Kurikulum+Merdeka",
    youtubeId: "kYv_8J3jL_E",
    channelName: "Kanal YouTube Pembelajaran Pendidikan Pancasila SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=Pendidikan+Pancasila+SMP+Kurikulum+Merdeka",
    duration: "18:45",
    description: "Pendalaman norma sosial, hak dan kewajiban warga negara, serta pengamalan sila-sila Pancasila dalam bingkai akhlakul karimah.",
    topics: ["Pancasila Sebagai Dasar Negara", "Norma dan Hukum Positif", "Bhinneka Tunggal Ika", "Karakter Santri Pancasila"]
  },
  {
    id: "subj-vid-2",
    subject: "Pendidikan Agama Islam",
    code: "PAI & BP",
    title: "Pendidikan Agama Islam: Fiqih Ibadah, Tahsin Al-Qur'an & Budi Pekerti Generasi Qur'ani",
    teacher: "MASTUR, S.Pd.I",
    badgeColor: "bg-emerald-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=PAI+Budi+Pekerti+SMP+Kurikulum+Merdeka",
    youtubeId: "qT_V1lqN2rQ",
    channelName: "Kanal YouTube Pembelajaran PAI & Budi Pekerti SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=PAI+Budi+Pekerti+SMP+Kurikulum+Merdeka",
    duration: "25:30",
    description: "Panduan praktis fiqih bersuci (thaharah), keutamaan shalat berjamaah lima waktu, dan keteladanan akhlak Rasulullah SAW.",
    topics: ["Fiqih Thaharah & Shalat", "Adab Thalabul Ilmi", "Tadabbur Asmaul Husna", "Sejarah Peradaban Islam"]
  },
  {
    id: "subj-vid-3",
    subject: "IPA",
    code: "IPA",
    title: "Ilmu Pengetahuan Alam (IPA): Eksplorasi Struktur Sel Organik & Praktikum Mikroskopis",
    teacher: "BAHRUL ROSI, S.Pd",
    badgeColor: "bg-teal-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=IPA+SMP+Praktikum+Mikroskop+Sel",
    youtubeId: "kYv_8J3jL_E",
    channelName: "Kanal YouTube Pembelajaran IPA Terpadu SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=IPA+SMP+Kurikulum+Merdeka+Praktikum",
    duration: "22:15",
    description: "Praktikum mandiri mikroskop laboratorium sekolah, pengamatan sel tumbuhan dan hewan, serta tadabbur kebesaran ciptaan Ilahi.",
    topics: ["Organisasi Kehidupan & Sel", "Klasifikasi Makhluk Hidup", "Zat & Wujud Benda", "Ekosistem & Rantai Makanan"]
  },
  {
    id: "subj-vid-4",
    subject: "IPS",
    code: "IPS",
    title: "Ilmu Pengetahuan Sosial (IPS): Interaksi Keruangan Kepulauan Nusantara & Jalur Maritim",
    teacher: "DHAVIQ AKBAR, S.Pd",
    badgeColor: "bg-amber-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=IPS+SMP+Kurikulum+Merdeka+Interaksi+Keruangan",
    youtubeId: "fW4aY0rOQpQ",
    channelName: "Kanal YouTube Pembelajaran IPS SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=IPS+SMP+Kurikulum+Merdeka",
    duration: "20:10",
    description: "Pemetaan potensi geografis Indonesia, jalur perdagangan rempah nusantara, dan sejarah penyebaran dakwah Islam di tanah Jawa dan Madura.",
    topics: ["Geografi Kepulauan Nusantara", "Potensi Sumber Daya Alam", "Sejarah Kerajaan Islam", "Dinamika Sosial Santri"]
  },
  {
    id: "subj-vid-5",
    subject: "Bahasa Indonesia",
    code: "BIN",
    title: "Bahasa Indonesia: Kaidah Menulis Teks Deskripsi Otentik & Menemukan Gagasan Utama",
    teacher: "NURUL FAJARIYAH, S.Pd",
    badgeColor: "bg-rose-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=Bahasa+Indonesia+SMP+Teks+Deskripsi",
    youtubeId: "7X1D2n2TjK8",
    channelName: "Kanal YouTube Pembelajaran Bahasa Indonesia SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=Bahasa+Indonesia+SMP+Kurikulum+Merdeka",
    duration: "24:00",
    description: "Teknik menyusun teks deskripsi yang hidup dengan pancaindra, pemakaian konjungsi intrakalimat, dan literasi membaca kritis.",
    topics: ["Struktur Teks Deskripsi", "Tata Bahasa EYD V", "Membaca Kritis & Merangkum", "Menulis Teks Berita & Puisi"]
  },
  {
    id: "subj-vid-6",
    subject: "Bahasa Inggris",
    code: "BING",
    title: "Bahasa Inggris: Practical Daily English Conversation for Islamic Boarding School Students",
    teacher: "NURJANUAR ILHAMI, S.Pd",
    badgeColor: "bg-cyan-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=Bahasa+Inggris+SMP+Daily+Conversation",
    youtubeId: "0h3jKqYv1L4",
    channelName: "Kanal YouTube Pembelajaran Bahasa Inggris SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=Bahasa+Inggris+SMP+Daily+Conversation",
    duration: "19:40",
    description: "Latihan percakapan bahasa Inggris aktif dalam kehidupan pesantren: greetings, self-introduction, giving directions, dan daily activities.",
    topics: ["Greetings & Introductions", "Expressing Likes & Daily Habits", "Descriptive Sentences", "Listening & Speaking Drills"]
  },
  {
    id: "subj-vid-7",
    subject: "Seni Budaya",
    code: "SBP",
    title: "Seni Budaya & Prakarya: Seni Lukis, Seni Kaligrafi Khattat & Kerajinan Kriya Nusantara",
    teacher: "MAHSUNAH, S.Pd",
    badgeColor: "bg-purple-600",
    youtubeUrl: "https://senibudayasmpalimamah.lovable.app/",
    youtubeId: "dQw4w9WgXcQ",
    channelName: "Kanal YouTube Seni Budaya & Prakarya SMP Plus Al-Imamah",
    channelUrl: "https://senibudayasmpalimamah.lovable.app/",
    websiteUrl: "https://senibudayasmpalimamah.lovable.app/",
    duration: "26:15",
    description: "Apresiasi seni kaligrafi khat naskhi/tsuluts, teknik arsir ragam hias daerah, dan pembuatan kerajinan anyaman tradisional Madura.",
    topics: ["Seni Kaligrafi Islam", "Ragam Hias Tradisional", "Prakarya Kriya Bahan Lokal", "Apresiasi Seni Musik Daerah"]
  },
  {
    id: "subj-vid-8",
    subject: "Penjaskes",
    code: "PJOK",
    title: "Pendidikan Jasmani, Olahraga & Kesehatan (PJOK): Kebugaran Jasmani & Gerak Dasar Atletik",
    teacher: "TIM GURU PJOK",
    badgeColor: "bg-orange-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=PJOK+SMP+Kebugaran+Jasmani+Gerak+Dasar",
    youtubeId: "5rLw2g2H9_E",
    channelName: "Kanal YouTube Pembelajaran PJOK SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=PJOK+SMP+Kebugaran+Jasmani",
    duration: "17:35",
    description: "Pembiasaan kebugaran jasmani, senam kesehatan santri, latihan kelincahan, serta penanaman pola hidup sehat dan bergizi.",
    topics: ["Kebugaran Jasmani & Daya Tahan", "Gerak Dasar Atletik Lari", "Keterampilan Bola Voli & Futsal", "Pola Hidup Bersih & Sehat (PHBS)"]
  },
  {
    id: "subj-vid-9",
    subject: "Matematika",
    code: "MTK",
    title: "Matematika: Operasi Bilangan Berpangkat, Bentuk Aljabar & Logika Geometri Datar",
    teacher: "HOSNOL HOTIMAH, S.Pd",
    badgeColor: "bg-indigo-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=Matematika+SMP+Operasi+Aljabar+Kurikulum+Merdeka",
    youtubeId: "nO8v2p4z6_8",
    channelName: "Kanal YouTube Pembelajaran Matematika SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=Matematika+SMP+Aljabar+Kurikulum+Merdeka",
    duration: "27:50",
    description: "Konsep dasar pemfaktoran aljabar, penalaran logika numerasi, perbandingan senilai-berbalik nilai, dan trik pemecahan soal cepat.",
    topics: ["Operasi Bilangan Bulat & Pecahan", "Bentuk Aljabar Sederhana", "Persamaan Linier Satu Variabel", "Teorema Pythagoras & Geometri"]
  },
  {
    id: "subj-vid-10",
    subject: "Bahasa Madura",
    code: "MLBD",
    title: "Muatan Lokal Bahasa Madura: Ondhag Basa Madhura (Enja'-Iya, Engghi-Enten, Engghi-Buntên)",
    teacher: "FAUZIYATUL JAMILAH, S.Pd",
    badgeColor: "bg-emerald-700",
    youtubeUrl: "https://www.youtube.com/results?search_query=Bahasa+Madura+SMP+Ondhag+Basa+Madura",
    youtubeId: "m7H9f_K2x3A",
    channelName: "Kanal YouTube Pembelajaran Bahasa Daerah Madura SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=Bahasa+Madura+SMP+Ondhag+Basa",
    duration: "21:20",
    description: "Pembelajaran tata krama komunikasi santun bahasa daerah Madura, penerapan undha-usuk basa terhadap sesama dan guru, serta paribhasan Madhura.",
    topics: ["Ondhag Basa (Tingkatan Bahasa)", "Kosa Kata Engghi-Buntên", "Paribhasan & Parsemmon Madhura", "Sastra & Puisi Basa Madhura"]
  },
  {
    id: "subj-vid-11",
    subject: "Informatika",
    code: "INF",
    title: "Informatika: Berpikir Komputasional (Computational Thinking) & Logika Pemrograman Dasar",
    teacher: "TIM GURU IT & INFORMATIKA",
    badgeColor: "bg-blue-600",
    youtubeUrl: "https://www.youtube.com/results?search_query=Informatika+SMP+Computational+Thinking+Algoritma",
    youtubeId: "e7_3Z8sA2oE",
    channelName: "Kanal YouTube Pembelajaran Informatika SMP Plus Al-Imamah",
    channelUrl: "https://www.youtube.com/results?search_query=Informatika+SMP+Computational+Thinking+Algoritma",
    duration: "23:45",
    description: "Pengenalan 4 pilar computational thinking, dasar algoritma percabangan/perulangan, etika digital bermedia sosial, dan keamanan siber bagi santri.",
    topics: ["Computational Thinking", "Dasar Algoritma & Flowchart", "Jaringan & Internet Sehat", "Pengolahan Data & Presentasi Digital"]
  }
];

export const EXTRACURRICULARS: Extracurricular[] = [
  {
    id: "extra-1",
    name: "Kajian Kitab Kuning",
    category: "Kepesantrenan & Turats",
    schedule: "Senin & Rabu Malam",
    coach: "Dr. KH. Ahmad Masykur, Lc., M.Th.I",
    description: "Pendalaman kaidah nahwu, sharaf, balaghah, dan pemahaman makna syarah kitab turats salafiyah dengan metode baca cepat akseleratif.",
    iconName: "Scroll"
  },
  {
    id: "extra-2",
    name: "Dakwah & Seni Suara",
    category: "Seni & Syiar Islami",
    schedule: "Selasa & Sabtu Siang",
    coach: "Bahrul Rosi, S.Pd",
    description: "Pelatihan retorika dakwah khithabah, teknik olah vokal seni suara islami, tilawah, dan pembentukan da'i muda berakhlakul karimah.",
    iconName: "Mic"
  },
  {
    id: "extra-3",
    name: "Seni Hadrah Banjari",
    category: "Seni Musik Tradisional Islami",
    schedule: "Malam Jumat",
    coach: "Subriadi, S.Pd",
    description: "Pelatihan vokal shalawat nabi, variasi ketukan terbang rebana banjari klasik & kontemporer untuk syiar majelis shalawat.",
    iconName: "Music"
  },
  {
    id: "extra-4",
    name: "English Club",
    category: "Bahasa Internasional",
    schedule: "Kamis Sore & Ahad Pagi",
    coach: "Nurjanuar Ilhami, S.Pd",
    description: "Praktek muhadatsah yaumiyah, daily English conversation, speech contest, debate, dan pengayaan kosakata bahasa internasional santri.",
    iconName: "Globe"
  },
  {
    id: "extra-5",
    name: "Klinik Matematika",
    category: "Sains & Penalaran",
    schedule: "Rabu Sore",
    coach: "Hosnol Hotimah, S.Pd",
    description: "Bimbingan intensif pemecahan masalah matematika kontekstual, penalaran logis, dan persiapan kompetisi olimpiade sains/matematika.",
    iconName: "Calculator"
  },
  {
    id: "extra-6",
    name: "Karya Ilmiah Remaja (KIR)",
    category: "Riset & Literasi",
    schedule: "Jumat Sore",
    coach: "Nurul Fajariyah, S.Pd",
    description: "Pelatihan metodologi penelitian sederhana, kepenulisan esai ilmiah, observasi lingkungan madrasah, dan literasi publikasi ilmiah santri.",
    iconName: "BookOpen"
  }
];

export const SCHOOL_RULES = [
  {
    title: "Hak Santri & Siswa",
    items: [
      "Mendapatkan bimbingan dan pengajaran ilmu agama dan umum secara menyeluruh.",
      "Menggunakan fasilitas perpustakaan, laboratorium komputer, dan sarana ibadah.",
      "Mendapatkan perlakuan yang adil tanpa diskriminasi dalam pembinaan karakter.",
      "Mengembangkan bakat dan minat melalui kegiatan ekstrakurikuler resmi sekolah."
    ]
  },
  {
    title: "Kewajiban Pokok",
    items: [
      "Menjaga shalat fardhu berjamaah di masjid tepat waktu dan mengikuti wirid bersama.",
      "Menghormati pengasuh, kepala sekolah, dewan guru, pengurus pesantren, dan sesama teman.",
      "Mematuhi jam belajar malam, waktu muraja'ah tahfidz, dan jam istirahat teratur.",
      "Mengenakan seragam rapi, sopan, dan menutup aurat sesuai syariat Islam."
    ]
  },
  {
    title: "Tata Tertib Khusus & Larangan",
    items: [
      "Dilarang membawa perangkat elektronik gadget tanpa instruksi guru atau izin tertulis.",
      "Dilarang melakukan perundungan (bullying) fisik, verbal, maupun psikologis.",
      "Dilarang meninggalkan lingkungan pesantren tanpa surat izin resmi dari pengurus santri.",
      "Dilarang merusak sarana prasarana sekolah atau membawa barang berbahaya."
    ]
  }
];

export const INITIAL_SUGGESTIONS: SuggestionEntry[] = [
  {
    id: "sug-1",
    name: "H. Subhan Munir",
    address: "Jl. Raya Kadur No. 12, Pamekasan",
    phone: "081234567890",
    category: "Fasilitas",
    suggestion: "Mohon penambahan unit komputer di lab informatika agar setiap siswa dapat mempraktekkan coding Deep Learning secara mandiri.",
    createdAt: "2026-10-25",
    status: "Ditindaklanjuti"
  },
  {
    id: "sug-2",
    name: "Ibu Fatimah Zahro",
    address: "Dusun Oray, Pamoroh, Kadur",
    phone: "085711223344",
    category: "Pesantren",
    suggestion: "Sangat bersyukur dengan program tahfidz. Jika memungkinkan, diadakan sesi tasmi' Al-Qur'an terbuka di hadapan wali santri tiap semester.",
    createdAt: "2026-10-28",
    status: "Diproses"
  },
  {
    id: "sug-3",
    name: "Ust. M. Syukron",
    address: "Kecamatan Pakong, Pamekasan",
    phone: "082334455667",
    category: "Akademik",
    suggestion: "Perlu dibuatkan bank soal digital Deep Learning yang dapat diakses oleh guru saat menyusun soal asesmen.",
    createdAt: "2026-11-01",
    status: "Terkirim"
  }
];

export const RECENT_ACTIVITIES = [
  {
    id: "act-1",
    date: "02 November 2026",
    title: "Pelaksanaan Supervisi Akademik Guru Berbasis Canva Digital",
    category: "Akademik",
    desc: "Kepala SMP Plus Al-Imamah melaksanakan supervisi pembelajaran berdiferensiasi kelas 7 dan 8."
  },
  {
    id: "act-2",
    date: "28 Oktober 2026",
    title: "Peringatan Hari Santri Nasional & Musabaqah Hifdzil Qur'an",
    category: "Pesantren",
    desc: "Semarak lomba tahfidz, baca kitab kuning akselerasi, dan pidato 3 bahasa antar asrama."
  },
  {
    id: "act-3",
    date: "15 Oktober 2026",
    title: "Rapat Koordinasi Dewan GTK Evaluasi Tengah Semester",
    category: "GTK",
    desc: "Penyelarasan e-jurnal mengajar dan rekapitulasi mutaba'ah catatan harian siswa."
  },
  {
    id: "act-4",
    date: "01 Oktober 2026",
    title: "Pembukaan Gelombang 1 SPMB Tahun Pelajaran 2026/2027",
    category: "SPMB",
    desc: "Pendaftaran santri baru melalui formulir digital online dan verifikasi berkas madrasah."
  }
];

export interface OrgMember {
  id: string;
  name: string;
  role: string;
  shortRole: string;
  level: number;
  category: 'pengasuh' | 'yayasan' | 'kepala_sekolah' | 'administrasi' | 'waka' | 'wali_kelas' | 'pembina_ekstra';
  categoryLabel: string;
  photo: string;
  dualRoles?: string[];
  garisKomandoText: string;
  garisKoordinasiText: string;
  duties: string[];
  docLink?: string;
  whatsapp?: string;
  accentColor: string;
  badgeBg: string;
}

export interface LineExplanation {
  type: 'komando' | 'koordinasi';
  title: string;
  shortName: string;
  linePattern: 'solid' | 'dashed';
  colorClass: string;
  borderStyle: string;
  definition: string;
  characteristics: string[];
  schoolExamples: string[];
}

export const LINE_EXPLANATIONS: LineExplanation[] = [
  {
    type: 'komando',
    title: 'Garis Komando (Garis Tegas / Solid Line)',
    shortName: 'Garis Komando',
    linePattern: 'solid',
    colorClass: 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/50 border-sky-300 dark:border-sky-800',
    borderStyle: 'border-solid border-sky-500',
    definition: 'Garis komando menggambarkan wewenang hierarkis langsung, instruksi kedinasan mengikat, delegasi kewenangan struktural formal, dan jalur pertanggungjawaban vertikal dari pejabat atasan kepada pejabat bawahan.',
    characteristics: [
      'Bersifat instruktif, komando tugas, dan kepatuhan manajerial struktural.',
      'Alur wewenang mengalir dari atas ke bawah (Top-down Authority).',
      'Alur pertanggungjawaban mengalir dari bawah ke atas (Bottom-up Accountability).',
      'Diwujudkan dalam bentuk surat keputusan (SK), surat tugas, instruksi dinas, dan pengawasan langsung.'
    ],
    schoolExamples: [
      'Ketua Yayasan menetapkan dan memberikan mandat komando kepada Kepala Sekolah.',
      'Kepala Sekolah memegang garis komando tertinggi atas seluruh Wakil Kepala Sekolah, Ka. TU/OPS, Bendahara, Wali Kelas, dan Dewan Guru.',
      'Wakil Kepala Sekolah memberikan arahan komando teknis sesuai bidang (Kurikulum, Kesiswaan, Humas, Sarpras) kepada pelaksana teknis.',
      'Wali Kelas dan Dewan Guru memimpin jalannya pembelajaran intrakurikuler dan penegakan tata tertib terhadap peserta didik/santri.'
    ]
  },
  {
    type: 'koordinasi',
    title: 'Garis Koordinasi (Garis Putus-Putus / Dashed Line)',
    shortName: 'Garis Koordinasi',
    linePattern: 'dashed',
    colorClass: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 border-emerald-300 dark:border-emerald-800',
    borderStyle: 'border-dashed border-emerald-500',
    definition: 'Garis koordinasi menggambarkan hubungan kerja sama kemitraan, sinkronisasi program kerja, penyelarasan fungsi, konsultasi kebijakan, dan komunikasi kolegial lintas unit tanpa adanya wewenang instruksi/komando langsung.',
    characteristics: [
      'Bersifat kemitraan, konsultatif, musyawarah sinergis, dan kesepahaman bersama.',
      'Terjadi antar pemangku jabatan setara atau dewan pembina spiritual dengan pengelola satuan pendidikan.',
      'Tidak memiliki wewenang memberikan sanksi/perintah langsung, melainkan memberikan saran, evaluasi, dan penyelarasan.',
      'Menjamin integrasi kurikulum umum, pembinaan pesantren 24 jam, dan tata kelola anggaran berjalan harmonis.'
    ],
    schoolExamples: [
      'Pengasuh Pesantren berkoordinasi dan memberikan bimbingan ruhaniyah/pesantren kepada Ketua Yayasan dan Kepala Sekolah.',
      'Ka. TU / OPS dan Bendahara berkoordinasi dengan seluruh Wakil Kepala Sekolah mengenai administrasi surat, BOS, dan sarana.',
      'Waka Kesiswaan berkoordinasi intensif dengan para Pembina Ekstrakurikuler dan Wali Kelas mengenai pembinaan minat bakat santri.',
      'Wali Kelas VII, VIII, IX berkoordinasi dengan Guru BK dan Orang Tua / Wali Santri mengenai perkembangan adab dan mutaba\'ah.'
    ]
  }
];

export const SCHOOL_ORGANIZATION_MEMBERS: OrgMember[] = [
  // Level 1: Pengasuh
  {
    id: "org-pengasuh",
    name: "Abuya Dr. KH. Ahmad Masykur, Lc, M.Th.I",
    role: "Pengasuh Pondok Pesantren Tadribuddu'aat",
    shortRole: "Pengasuh",
    level: 1,
    category: "pengasuh",
    categoryLabel: "Pengasuh Pesantren",
    photo: "/assets/aistudio/Dr._KH._AHMAD_MASYKUR__Lc.__M.Th.I-removebg-preview_5f344092.png",
    dualRoles: ["Pembina Kajian Kitab Kuning"],
    garisKomandoText: "Memberikan arahan marwah santri, fatwa keteladanan akhlak, dan mandat ruhaniyah kepada Yayasan serta Kepala Sekolah.",
    garisKoordinasiText: "Garis koordinasi konsultatif & pembinaan nilai kepesantrenan dengan Ketua Yayasan, Kepala Sekolah, dan Komite Pesantren.",
    duties: [
      "Mengasuh dan membimbing kehidupan spiritual santri Pondok Pesantren Tadribuddu'aat dan SMP Plus Al-Imamah selama 24 jam.",
      "Menentukan haluan kurikulum salafiyah kitab turats dan metode pengajian kitab kuning santri.",
      "Memberikan restu, pertimbangan moral, dan arahan spiritual atas setiap kebijakan strategis sekolah.",
      "Membina secara langsung halaqah kajian kitab kuning santri tingkat mutaqaddimin."
    ],
    accentColor: "from-amber-500 to-amber-700",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-300"
  },
  // Level 1: Ketua Yayasan
  {
    id: "org-yayasan",
    name: "Izzat Muhammad Ghozali, M.Bg",
    role: "Ketua Yayasan Al-Imamah",
    shortRole: "Ketua Yayasan",
    level: 1,
    category: "yayasan",
    categoryLabel: "Ketua Yayasan",
    photo: "/assets/aistudio/ChatGPT_Image_7_Sep_2026__12.17.42_e12c35d5.png",
    garisKomandoText: "Memegang garis komando legal kelembagaan dalam menetapkan Kepala SMP Plus Al-Imamah dan pedoman tata kelola yayasan.",
    garisKoordinasiText: "Garis koordinasi intensif dengan Pengasuh Pesantren untuk menjaga kemurnian visi pesantren dan pengembangan sarana fisik.",
    duties: [
      "Memimpin Yayasan Pendidikan & Sosial Al-Imamah sebagai badan penyelenggara satuan pendidikan formal SMP Plus Al-Imamah.",
      "Menetapkan Surat Keputusan (SK) pengangkatan Kepala Sekolah, dewan guru, dan tenaga kependidikan.",
      "Mengesahkan Rencana Anggaran Pendapatan dan Belanja Sekolah (RAPBS) dan pengelolaan aset wakaf.",
      "Mengembangkan infrastruktur fisik, gedung asrama, ruang kelas, dan laboratorium modern."
    ],
    accentColor: "from-emerald-600 to-teal-800",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border-emerald-300"
  },
  // Level 2: Kepala Sekolah
  {
    id: "org-kepsek",
    name: "Abd Wafi, S.Pd.I",
    role: "Kepala SMP Plus Al-Imamah",
    shortRole: "Kepala Sekolah",
    level: 2,
    category: "kepala_sekolah",
    categoryLabel: "Kepala Sekolah",
    photo: "/assets/aistudio/ChatGPT_Image_7_Sep_2026__12.30.29_190802b3.png",
    garisKomandoText: "Bertanggung jawab vertikal kepada Ketua Yayasan; memegang garis komando operasional tertinggi atas seluruh jajaran Waka, Ka. TU, Bendahara, Wali Kelas, Dewan Guru, dan Santri.",
    garisKoordinasiText: "Garis koordinasi pembinaan dengan Pengasuh Ponpes, Komite Sekolah, Pengawas Pembina Dinas Pendidikan, Kementerian Agama, dan wali murid.",
    duties: [
      "Bertanggung jawab penuh atas penyelenggaraan pendidikan, administrasi, ketenagaan, dan mutu lulusan SMP Plus Al-Imamah.",
      "Memimpin perumusan dan implementasi Kurikulum Operasional Satuan Pendidikan (KOSP) terintegrasi Deep Learning.",
      "Melaksanakan supervisi akademik kelas, pembinaan profesionalisme GTK, dan penilaian kinerja guru berkala.",
      "Mengambil keputusan manajerial strategis, pelaporan kedinasan, dan pengelolaan akreditasi sekolah."
    ],
    accentColor: "from-sky-600 to-blue-800",
    badgeBg: "bg-sky-100 dark:bg-sky-950/60 text-sky-900 dark:text-sky-300 border-sky-300"
  },
  // Level 3: Administrasi & Keuangan (Ka. TU & Bendahara)
  {
    id: "org-katu",
    name: "Subriadi, S.Pd",
    role: "Ka. TU / OPS (Kepala Tata Usaha / Operasional)",
    shortRole: "Ka. TU / OPS",
    level: 3,
    category: "administrasi",
    categoryLabel: "Administrasi & OPS",
    photo: "/assets/aistudio/subriadi_f698415d.png",
    dualRoles: ["Pembina Banjari"],
    garisKomandoText: "Menerima komando langsung dari Kepala Sekolah dalam tata kelola persuratan dinas, kearsipan, Dapodik, dan ketatausahaan.",
    garisKoordinasiText: "Garis koordinasi dengan Bendahara, para Waka, dan Wali Kelas dalam sinkronisasi data siswa, surat izin, dan dokumen kurikulum.",
    duties: [
      "Memimpin urusan tata persuratan resmi, kearsipan dinas, buku induk santri, dan administrasi kepegawaian GTK.",
      "Mengelola sinkronisasi data pokok pendidikan (Dapodik), verval PD, dan pelaporan berkala ke Dinas Pendidikan.",
      "Mengatur operasional harian kantor tata usaha, pelayanan surat keterangan santri, dan mutasi siswa.",
      "Menyiapkan berkas kelengkapan administrasi asesmen sekolah, ijazah, dan akreditasi lembaga."
    ],
    accentColor: "from-indigo-600 to-purple-800",
    badgeBg: "bg-indigo-100 dark:bg-indigo-950/60 text-indigo-900 dark:text-indigo-300 border-indigo-300"
  },
  {
    id: "org-bendahara",
    name: "Hosnol Hotimah, S.Pd",
    role: "Bendahara Sekolah & Keuangan",
    shortRole: "Bendahara",
    level: 3,
    category: "administrasi",
    categoryLabel: "Keuangan Sekolah",
    photo: "/assets/aistudio/Hotim_b71790b6.png",
    dualRoles: ["Wali Kelas VIII", "Pembina Klinik Matematika"],
    docLink: "https://s.id/HosnolHotimah",
    garisKomandoText: "Menerima garis komando langsung dari Kepala Sekolah dan Yayasan terkait perbendaharaan dan pertanggungjawaban anggaran.",
    garisKoordinasiText: "Garis koordinasi dengan Ka. TU, para Waka, dan Wali Kelas dalam realisasi pembiayaan kegiatan belajar, SPP, dan pembukuan transparan.",
    duties: [
      "Mengelola pencatatan pemasukan, pengeluaran, dan kas keuangan operasional SMP Plus Al-Imamah secara akuntabel.",
      "Menyusun pembukuan SPJ Bantuan Operasional Sekolah (BOS) dan laporan keuangan berkala untuk yayasan.",
      "Melayani administrasi pembayaran SPP santri, infaq syahriyah, dan pembiayaan ujian/kegiatan kesiswaan.",
      "Melakukan rekonsiliasi keuangan kas bulanan bersama Kepala Sekolah dan Badan Pengawas Yayasan."
    ],
    accentColor: "from-rose-600 to-pink-800",
    badgeBg: "bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300 border-rose-300"
  },
  // Level 4: Wakil Kepala Sekolah (4 Waka)
  {
    id: "org-waka-kurikulum",
    name: "Dhaviq Akbar, S.Pd",
    role: "Wakil Kepala Sekolah Bidang Kurikulum",
    shortRole: "Waka Kurikulum",
    level: 4,
    category: "waka",
    categoryLabel: "Wakil Kepala Sekolah",
    photo: "/assets/aistudio/Dhaviq_Akbar_78fbe469.jpeg",
    docLink: "https://s.id/DHAVIQAKBARIPS",
    garisKomandoText: "Menerima komando langsung dari Kepala Sekolah; memegang komando teknis PBM, pembagian tugas mengajar, dan pelaksanaan asesmen.",
    garisKoordinasiText: "Garis koordinasi dengan Waka Kesiswaan, Ka. TU, dewan guru mapel, dan Wali Kelas VII-IX demi kelancaran kurikulum.",
    duties: [
      "Menyusun Dokumen Kurikulum Operasional Satuan Pendidikan (KOSP) dan kalender akademik sekolah.",
      "Menyusun jadwal pembelajaran mingguan, pembagian jam tatap muka guru, dan jadwal supervisi kelas.",
      "Mengorganisasikan pelaksanaan Asesmen Formatif, Sumatif Semester, ANBK, dan Haflatul Huffadz.",
      "Memeriksa kelengkapan Modul Ajar Deep Learning guru dan memvalidasi rekapitulasi E-Rapor santri."
    ],
    accentColor: "from-amber-600 to-orange-700",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-300"
  },
  {
    id: "org-waka-kesiswaan",
    name: "Nurjanuar Ilhami, S.Pd",
    role: "Wakil Kepala Sekolah Bidang Kesiswaan",
    shortRole: "Waka Kesiswaan",
    level: 4,
    category: "waka",
    categoryLabel: "Wakil Kepala Sekolah",
    photo: "/assets/aistudio/Nurjanuar_Ilhami_b6dd6688.jpg",
    dualRoles: ["Wali Kelas VII", "Pembina English Club"],
    docLink: "https://s.id/NURJANUAR_ILHAMI",
    garisKomandoText: "Menerima komando langsung dari Kepala Sekolah; memegang komando instruktif pembinaan kesiswaan, tata tertib, dan OSIS.",
    garisKoordinasiText: "Garis koordinasi dengan Pembina Ekstrakurikuler, Guru BK, Wali Kelas VII-IX, pembina asrama santri, dan pengasuh pesantren.",
    duties: [
      "Memimpin kepanitiaan Seleksi Penerimaan Murid Baru (SPMB) dan kegiatan Masa Pengenalan Lingkungan Sekolah (MPLS).",
      "Menegakkan kedisiplinan santri, pengawasan adab kepesantrenan, dan pembiasaan shalat berjamaah 5 waktu.",
      "Mengkoordinasikan seluruh program 6 cabang ekstrakurikuler sekolah dan kompetisi santri di luar sekolah.",
      "Mengawal monitoring pengisian buku digital Catatan Harian Siswa / Mutaba'ah Yaumiyah secara konsisten."
    ],
    accentColor: "from-cyan-600 to-teal-700",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/60 text-cyan-900 dark:text-cyan-300 border-cyan-300"
  },
  {
    id: "org-waka-humas",
    name: "Nurul Fajariyah, S.Pd",
    role: "Wakil Kepala Sekolah Bidang Hubungan Masyarakat",
    shortRole: "Waka Humas",
    level: 4,
    category: "waka",
    categoryLabel: "Wakil Kepala Sekolah",
    photo: "/assets/aistudio/Gemini_Generated_Image_5tdvk75tdvk75tdv_b785187b.png",
    dualRoles: ["Pembina KIR"],
    docLink: "https://s.id/nurulfajariyah89",
    garisKomandoText: "Menerima arahan komando dari Kepala Sekolah dalam representasi kelembagaan, komunikasi publik, dan penerimaan tamu dinas.",
    garisKoordinasiText: "Garis koordinasi dengan Komite Sekolah, Paguyuban Wali Santri, Instansi Pemerintah (Dinas/Kemenag), dan media publikasi.",
    duties: [
      "Membangun hubungan kemitraan harmonis dengan Komite Sekolah, wali murid, tokoh masyarakat, dan instansi kedinasan.",
      "Mengelola publikasi digital, buletin prestasi santri, dokumentasi haflah/wisuda, dan layanan respon Kotak Saran.",
      "Memfasilitasi pertemuan parenting wali santri, sosialisasi program sekolah, dan agenda musyawarah yayasan.",
      "Mewakili sekolah dalam hubungan kemitraan lintas sektoral dan penerimaan kunjungan studi banding."
    ],
    accentColor: "from-rose-600 to-red-700",
    badgeBg: "bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300 border-rose-300"
  },
  {
    id: "org-waka-sarpras",
    name: "Bahrul Rosi, S.Pd",
    role: "Wakil Kepala Sekolah Bidang Sarana dan Prasarana",
    shortRole: "Waka Sarpras",
    level: 4,
    category: "waka",
    categoryLabel: "Wakil Kepala Sekolah",
    photo: "/assets/aistudio/20240918_080831.jpg_73a1dd07.jpeg",
    dualRoles: ["Wali Kelas IX", "Pembina Dakwah/Seni suara"],
    docLink: "https://s.id/BahrulRosi",
    garisKomandoText: "Menerima garis komando langsung dari Kepala Sekolah dalam inventarisasi, perawatan fisik, dan fasilitas sarana belajar.",
    garisKoordinasiText: "Garis koordinasi dengan Ka. TU/OPS, Bendahara, Yayasan, laboran, teknisi IT, dan seluruh unit pengguna gedung sekolah.",
    duties: [
      "Merencanakan kebutuhan sarana prasarana (RKSP), pengadaan alat ajar praktikum laboratorium, dan media multimedia.",
      "Mengelola pencatatan, kodifikasi barcode inventaris, dan pemeliharaan gedung ruang kelas serta laboratorium IPA.",
      "Menjamin kelaikan sarana sanitasi air bersih, kebersihan lingkungan pesantren, dan keamanan fasilitas kelistrikan.",
      "Menyiapkan sarana teknis ruangan komputer dan koneksi jaringan internet untuk pelaksanaan ANBK dan ujian digital."
    ],
    accentColor: "from-teal-600 to-emerald-700",
    badgeBg: "bg-teal-100 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 border-teal-300"
  },
  // Level 5: Wali Kelas (Kelas VII, VIII, IX)
  {
    id: "org-wali-7",
    name: "Nurjanuar Ilhami, S.Pd",
    role: "Wali Kelas VII",
    shortRole: "Wali Kelas VII",
    level: 5,
    category: "wali_kelas",
    categoryLabel: "Wali Kelas",
    photo: "/assets/aistudio/Nurjanuar_Ilhami_b6dd6688.jpg",
    dualRoles: ["Waka Kesiswaan", "Pembina English Club"],
    whatsapp: "+6287850268092",
    docLink: "https://drive.google.com/drive/folders/1mblcAB5ZsS5NNlojeFOuvpijSv0Ym1l-",
    garisKomandoText: "Menerima komando operasional dari Kepala Sekolah dan Waka Kurikulum dalam pengelolaan rombel, absensi, dan rapor kelas VII.",
    garisKoordinasiText: "Garis koordinasi dengan Guru BK, Waka Kesiswaan, pengurus asrama, dan konsultasi berkala dengan Wali Santri Kelas VII.",
    duties: [
      "Mengelola administrasi kelas VII, buku presensi harian rombel, denah tempat duduk, dan struktur organisasi kelas.",
      "Membimbing santri baru dalam adaptasi budaya belajar pesantren, kedisiplinan waktu, dan pembiasaan shalat berjamaah.",
      "Menghimpun nilai asesmen mata pelajaran, menyusun catatan deskripsi karakter, dan mencetak Buku Laporan Hasil Belajar (Rapor).",
      "Menyediakan layanan konsultasi wali kelas secara proaktif via WhatsApp kepada wali santri (+6287850268092)."
    ],
    accentColor: "from-sky-500 to-cyan-600",
    badgeBg: "bg-sky-100 dark:bg-sky-950/60 text-sky-900 dark:text-sky-300 border-sky-300"
  },
  {
    id: "org-wali-8",
    name: "Hosnol Hotimah, S.Pd",
    role: "Wali Kelas VIII",
    shortRole: "Wali Kelas VIII",
    level: 5,
    category: "wali_kelas",
    categoryLabel: "Wali Kelas",
    photo: "/assets/aistudio/Hotim_b71790b6.png",
    dualRoles: ["Bendahara Sekolah", "Pembina Klinik Matematika"],
    whatsapp: "+6282337870080",
    docLink: "https://drive.google.com/drive/folders/1sUffU5R_1U39Gz_Hl8c02j_PzOslQkPz",
    garisKomandoText: "Menerima garis komando dari Kepala Sekolah dan Waka Kurikulum dalam stabilitas capaian kurikulum dan prestasi kelas VIII.",
    garisKoordinasiText: "Garis koordinasi dengan Guru BK, Waka Kesiswaan, dan komunikasi konsultasi pembinaan karakter santri dengan Wali Santri Kelas VIII.",
    duties: [
      "Mengawal kesinambungan akademik dan penguatan karakter santri kelas VIII pada fase pemantapan kurikulum.",
      "Memantau kehadiran, keaktifan belajar kelompok, dan kedisiplinan setoran hafalan Al-Qur'an santri rombel VIII.",
      "Menjadi jembatan komunikasi aktif antara wali santri dengan dewan guru pengampu mata pelajaran (+6282337870080).",
      "Menyelesaikan kendala belajar murid melalui konseling pendekatan personal bersama Guru BK."
    ],
    accentColor: "from-emerald-500 to-teal-600",
    badgeBg: "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-300 border-emerald-300"
  },
  {
    id: "org-wali-9",
    name: "Bahrul Rosi, S.Pd",
    role: "Wali Kelas IX",
    shortRole: "Wali Kelas IX",
    level: 5,
    category: "wali_kelas",
    categoryLabel: "Wali Kelas",
    photo: "/assets/aistudio/20240918_080831.jpg_73a1dd07.jpeg",
    dualRoles: ["Waka Sarpras", "Pembina Dakwah/Seni suara"],
    whatsapp: "+6287750624180",
    docLink: "https://drive.google.com/drive/folders/18ZtV_YgR3jX7fW2m1K0l8m9Qz2b1v3c",
    garisKomandoText: "Menerima komando dari Kepala Sekolah untuk keberhasilan asesmen akhir jenjang, kelulusan 100%, dan tuntas hafalan santri kelas IX.",
    garisKoordinasiText: "Garis koordinasi intensif dengan Waka Kurikulum, Waka Kesiswaan, Panitia Ujian, dan Wali Santri Kelas IX untuk studi lanjut.",
    duties: [
      "Mempersiapkan santri kelas IX menghadapi Ujian Akhir Sekolah, Asesmen Standar Pendidikan, dan Ujian Tahfidz 30 Juz.",
      "Mengawal kelengkapan portofolio nilai semester 1 sampai 6 untuk penerbitan Ijazah resmi dan Surat Keterangan Lulus (SKL).",
      "Memberikan bimbingan karir dan rekomendasi studi lanjut ke jenjang MA/SMA/SMK unggulan berbasis pesantren.",
      "Membuka ruang dialog dan konsultasi intensif bersama wali santri kelas IX melalui WhatsApp (+6287750624180)."
    ],
    accentColor: "from-amber-500 to-orange-600",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-300"
  },
  // Level 6: Pembina Kegiatan Ekstrakurikuler (6 Cabang)
  {
    id: "org-ekstra-kitab",
    name: "Dr. KH. Ahmad Masykur, Lc.,M.Th.I",
    role: "Pembina Kajian Kitab Kuning",
    shortRole: "Pembina Kitab Kuning",
    level: 6,
    category: "pembina_ekstra",
    categoryLabel: "Pembina Ekstrakurikuler",
    photo: "/assets/aistudio/Dr._KH._AHMAD_MASYKUR__Lc.__M.Th.I-removebg-preview_5f344092.png",
    dualRoles: ["Pengasuh Pondok Pesantren"],
    garisKomandoText: "Melaksanakan pembinaan di bawah pengawasan langsung Pengasuh Ponpes dan Kepala Sekolah.",
    garisKoordinasiText: "Garis koordinasi dengan Waka Kesiswaan dan Waka Kurikulum untuk sinkronisasi kurikulum kepesantrenan.",
    duties: [
      "Membimbing santri menguasai metode baca cepat kitab kuning dengan kaidah nahwu sharaf aplikatif.",
      "Menyelenggarakan halaqah kajian kitab turats fiqih, tafsir, hadits, dan tasawuf secara berkesinambungan.",
      "Menyeleksi dan mendampingi santri dalam Musabaqah Qira'atil Kutub (MQK) tingkat regional dan nasional."
    ],
    accentColor: "from-amber-600 to-amber-800",
    badgeBg: "bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border-amber-300"
  },
  {
    id: "org-ekstra-dakwah",
    name: "Bahrul Rosi, S.Pd",
    role: "Pembina Dakwah/Seni suara",
    shortRole: "Pembina Dakwah & Seni Suara",
    level: 6,
    category: "pembina_ekstra",
    categoryLabel: "Pembina Ekstrakurikuler",
    photo: "/assets/aistudio/20240918_080831.jpg_73a1dd07.jpeg",
    dualRoles: ["Waka Sarpras", "Wali Kelas IX"],
    docLink: "https://s.id/BahrulRosi",
    garisKomandoText: "Melaksanakan pembinaan di bawah mandat komando Waka Kesiswaan dan Kepala Sekolah.",
    garisKoordinasiText: "Garis koordinasi dengan Waka Humas untuk penampilan santri dalam safari dakwah Ramadhan dan tabligh akbar.",
    duties: [
      "Melatih teknik khithabah (pidato da'i muda), retorika berbicara di depan publik, dan adab tabligh islami.",
      "Membina olah vokal seni suara islami, qasidah, dan tilawatil Qur'an bertartil merdu.",
      "Mempersiapkan duta santri dalam kompetisi da'i milenial dan pentas seni suara islami Porseni."
    ],
    accentColor: "from-teal-600 to-emerald-700",
    badgeBg: "bg-teal-100 dark:bg-teal-950/60 text-teal-900 dark:text-teal-300 border-teal-300"
  },
  {
    id: "org-ekstra-banjari",
    name: "Subriadi, S.Pd",
    role: "Pembina Banjari",
    shortRole: "Pembina Banjari",
    level: 6,
    category: "pembina_ekstra",
    categoryLabel: "Pembina Ekstrakurikuler",
    photo: "/assets/aistudio/subriadi_f698415d.png",
    dualRoles: ["Ka. TU / OPS"],
    garisKomandoText: "Bertanggung jawab teknis pembinaan kepada Waka Kesiswaan dan Kepala Sekolah.",
    garisKoordinasiText: "Garis koordinasi dengan Waka Sarpras terkait kelengkapan instrumen terbang dan jadwal majelis shalawat.",
    duties: [
      "Melatih ketukan rebana klasik, variasi roll pukulan hadrah banjari kontemporer, dan harmonisasi vokal shalawat.",
      "Menjadwalkan latihan rutin mingguan malam Jumat dan mengawal etika santri dalam majelis shalawat.",
      "Memimpin grup Hadrah Al-Imamah dalam festival shalawat se-Madura dan perayaan hari besar islam."
    ],
    accentColor: "from-blue-600 to-indigo-700",
    badgeBg: "bg-blue-100 dark:bg-blue-950/60 text-blue-900 dark:text-blue-300 border-blue-300"
  },
  {
    id: "org-ekstra-english",
    name: "Nurjanuar Ilhami, S.Pd",
    role: "Pembina English Club",
    shortRole: "Pembina English Club",
    level: 6,
    category: "pembina_ekstra",
    categoryLabel: "Pembina Ekstrakurikuler",
    photo: "/assets/aistudio/Nurjanuar_Ilhami_b6dd6688.jpg",
    dualRoles: ["Waka Kesiswaan", "Wali Kelas VII"],
    docLink: "https://s.id/NURJANUAR_ILHAMI",
    garisKomandoText: "Bertanggung jawab atas capaian program bahasa kepada Waka Kesiswaan dan Kepala Sekolah.",
    garisKoordinasiText: "Garis koordinasi dengan dewan guru bahasa asing untuk penguatan bi\'ah lughawiyyah (lingkungan berbahasa Inggris) santri.",
    duties: [
      "Menyelenggarakan simulasi English Daily Conversation dan bimbingan public speaking bahasa Inggris.",
      "Melatih santri dalam kompetisi Story Telling, English Speech Contest, dan Olimpiade Bahasa Inggris SMP.",
      "Menciptakan zona percakapan bahasa Inggris mingguan di area asrama dan lingkungan sekolah."
    ],
    accentColor: "from-cyan-600 to-blue-700",
    badgeBg: "bg-cyan-100 dark:bg-cyan-950/60 text-cyan-900 dark:text-cyan-300 border-cyan-300"
  },
  {
    id: "org-ekstra-matematika",
    name: "Hosnol Hotimah, S.Pd",
    role: "Pembina Klinik Matematika",
    shortRole: "Pembina Klinik Matematika",
    level: 6,
    category: "pembina_ekstra",
    categoryLabel: "Pembina Ekstrakurikuler",
    photo: "/assets/aistudio/Hotim_b71790b6.png",
    dualRoles: ["Bendahara Sekolah", "Wali Kelas VIII"],
    docLink: "https://s.id/HosnolHotimah",
    garisKomandoText: "Bertanggung jawab atas capaian bimbingan penalaran sains kepada Waka Kesiswaan dan Kepala Sekolah.",
    garisKoordinasiText: "Garis koordinasi dengan Waka Kurikulum dan guru mata pelajaran Matematika untuk penjaringan bakat olimpiade.",
    duties: [
      "Memberikan pembimbingan intensif bagi santri yang membutuhkan penguatan dasar-dasar numerasi dan aljabar.",
      "Menyelenggarakan klinik pemecahan soal High Order Thinking Skills (HOTS) dan matematika kontekstual.",
      "Membina tim delegasi santri untuk mengikuti Olimpiade Sains Nasional (OSN) Matematika jenjang SMP."
    ],
    accentColor: "from-rose-600 to-pink-700",
    badgeBg: "bg-rose-100 dark:bg-rose-950/60 text-rose-900 dark:text-rose-300 border-rose-300"
  },
  {
    id: "org-ekstra-kir",
    name: "Nurul Fajariyah, S.Pd",
    role: "Pembina KIR",
    shortRole: "Pembina KIR",
    level: 6,
    category: "pembina_ekstra",
    categoryLabel: "Pembina Ekstrakurikuler",
    photo: "/assets/aistudio/Gemini_Generated_Image_5tdvk75tdvk75tdv_b785187b.png",
    dualRoles: ["Waka Humas"],
    docLink: "https://s.id/nurulfajariyah89",
    garisKomandoText: "Bertanggung jawab atas karya riset santri kepada Waka Kesiswaan dan Kepala Sekolah.",
    garisKoordinasiText: "Garis koordinasi dengan Waka Sarpras untuk pemanfaatan laboratorium IPA dan perpustakaan sebagai laboratorium riset santri.",
    duties: [
      "Membimbing santri memahami metode penelitian ilmiah sederhana dan berpikir kritis berbasis data empiris.",
      "Mendampingi penulisan karya ilmiah remaja, observasi lingkungan santri, dan pengolahan data kualitatif/kuantitatif.",
      "Mempersiapkan artikel ilmiah santri untuk kompetisi LPIR (Lomba Penelitian Ilmiah Remaja) dan publikasi majalah dinding sekolah."
    ],
    accentColor: "from-purple-600 to-pink-700",
    badgeBg: "bg-purple-100 dark:bg-purple-950/60 text-purple-900 dark:text-purple-300 border-purple-300"
  }
];
