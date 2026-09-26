import type { Dict } from './en';

const id: Dict = {
  meta: {
    siteTagline: 'Alarm online, timer & stopwatch gratis',
    ogAlt: 'NoMore5Mins — alarm online, timer, dan stopwatch gratis',
  },

  nav: {
    alarm: 'Alarm',
    timer: 'Timer',
    stopwatch: 'Stopwatch',
    pomodoro: 'Fokus',
    clock: 'Jam',
    worldClock: 'Jam dunia',
    sleep: 'Kalkulator tidur',
    blog: 'Blog',
    menu: 'Menu',
    close: 'Tutup',
    language: 'Bahasa',
    theme: 'Ganti tema terang / gelap',
    skip: 'Langsung ke konten',
    home: 'Beranda',
    allTools: 'Semua alat',
  },

  tools: {
    alarm: 'Alarm Online',
    timer: 'Timer Online',
    stopwatch: 'Stopwatch Online',
    pomodoro: 'Timer Pomodoro',
    clock: 'Jam Sekarang',
    worldClock: 'Jam Dunia',
    sleep: 'Kalkulator Tidur',
  },

  toolBlurbs: {
    alarm: 'Bangun tepat waktu dengan bunyi keras atau lembut. Snooze dibatasi.',
    timer: 'Hitung mundur durasi apa pun dan dapatkan alarm keras saat habis.',
    stopwatch: 'Ukur waktu hingga seperseratus detik, lengkap dengan lap.',
    pomodoro: 'Sesi fokus 25 menit dengan istirahat otomatis.',
    clock: 'Jam dan tanggal tepat, cukup besar untuk dibaca dari seberang ruangan.',
    worldClock: 'Waktu sekarang di kota-kota besar dan zona waktu dunia.',
    sleep: 'Temukan waktu tidur atau bangun terbaik dengan siklus 90 menit.',
  },

  common: {
    start: 'Mulai',
    pause: 'Jeda',
    resume: 'Lanjutkan',
    reset: 'Reset',
    lap: 'Lap',
    stop: 'Berhenti',
    dismiss: 'Tutup',
    delete: 'Hapus',
    add: 'Tambah',
    fullscreen: 'Layar penuh',
    sound: 'Suara',
    volume: 'Volume',
    testSound: 'Tes suara',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
    updated: 'Diperbarui {date}',
    faqTitle: 'Pertanyaan yang sering diajukan',
    howTitle: 'Cara menggunakan',
    keyFacts: 'Fakta utama',
    shortcuts: 'Pintasan keyboard',
    related: 'Alat terkait',
    free: 'Gratis · Tanpa daftar · Tetap jalan offline setelah dimuat',
    keepOpen: 'Biarkan tab ini tetap terbuka. Volume perangkat harus menyala.',
    share: 'Bagikan',
    copied: 'Tautan disalin',
  },

  sounds: {
    'classic-ring': 'Dering klasik',
    'digital-beep': 'Bip digital',
    'gentle-chime': 'Lonceng lembut',
    'morning-birds': 'Kicau burung pagi',
    'rooster-crow': 'Kokok ayam',
    'nuclear-alert': 'Sirene (sangat keras)',
    'piano-melody': 'Piano',
    'ocean-waves': 'Ombak laut',
  },

  client: {
    ready: 'Siap',
    running: 'Berjalan',
    paused: 'Dijeda',
    timesUp: 'Waktu habis!',
    timerDone: 'Timer selesai',
    alarmTitle: 'Alarm',
    wakeUp: 'Bangun!',
    ringsIn: 'Berbunyi dalam {duration}',
    noAlarms: 'Belum ada alarm',
    snooze: 'Tunda 5 menit',
    snoozesLeft: 'Sisa {n} kali tunda',
    snoozeLimit: 'Tidak ada lagi 5 menit. Saatnya bangun!',
    enableSound: 'Ketuk di sini untuk menyalakan suara alarm',
    alarmSet: 'Alarm dipasang untuk {time}',
    lapN: 'Lap {n}',
    fastest: 'Tercepat',
    slowest: 'Terlama',
    focus: 'Fokus',
    shortBreak: 'Istirahat singkat',
    longBreak: 'Istirahat panjang',
    sessionOf: 'Sesi {n} dari {total}',
    focusedToday: '{n} menit fokus hari ini',
    startFocus: 'Mulai fokus',
    startBreak: 'Mulai istirahat',
    breakOver: 'Istirahat selesai — kembali fokus.',
    focusOver: 'Sesi fokus selesai — waktunya istirahat.',
    yourTime: 'Waktu Anda',
    day: 'Siang',
    night: 'Malam',
    today: 'Hari ini',
    tomorrow: 'Besok',
    yesterday: 'Kemarin',
    hoursAhead: '{n} jam lebih cepat',
    hoursBehind: '{n} jam lebih lambat',
    sameTime: 'Waktu sama',
    remove: 'Hapus',
    searchNoResults: 'Kota tidak ditemukan',
    cycles: '{n} siklus',
    sleepHours: 'Tidur {h}',
    setAlarmAt: 'Pasang alarm',
    best: 'Terbaik',
  },

  home: {
    metaTitle: 'Alarm Online, Timer & Stopwatch Gratis | NoMore5Mins',
    metaDescription:
      'Alarm online gratis, timer hitung mundur, stopwatch, timer Pomodoro, dan jam dunia. Jalan di browser apa pun, tanpa daftar, tanpa unduh.',
    h1: 'Alarm online, timer & stopwatch gratis',
    lead: 'Alat waktu sederhana yang langsung jalan di browser. Tanpa aplikasi, tanpa akun, tanpa “5 menit lagi”.',
    quickTitle: 'Pasang alarm cepat',
    quickCta: 'Pasang alarm',
    quickHint: 'Membuka jam alarm dengan waktu yang sudah Anda pilih.',
    toolsTitle: 'Semua alat',
    popularAlarms: 'Jam alarm populer',
    popularTimers: 'Timer populer',
    whyTitle: 'Kenapa orang memakai NoMore5Mins',
    why: [
      { title: 'Instan', text: 'Halaman terbuka kurang dari sedetik dan alat langsung jalan dengan sekali ketuk.' },
      { title: 'Privat', text: 'Alarm dan pengaturan tetap tersimpan di browser Anda. Tidak perlu daftar.' },
      { title: 'Di mana saja', text: 'Browser ponsel, tablet, laptop, atau TV — dalam 15 bahasa.' },
      { title: 'Snooze yang tegas', text: 'Snooze dibatasi tiga kali. Justru itu intinya.' },
    ],
    faq: [
      {
        q: 'Apakah NoMore5Mins gratis?',
        a: 'Ya. Semua alat bisa dipakai gratis tanpa akun. Situs ini didukung iklan dan tautan afiliasi yang tidak pernah menghalangi alatnya.',
      },
      {
        q: 'Apakah saya perlu menginstal sesuatu?',
        a: 'Tidak. Semuanya berjalan di browser web Anda. Jika mau, tambahkan situs ini ke layar utama agar bisa dipakai seperti aplikasi.',
      },
      {
        q: 'Apakah alarm tetap berbunyi jika tab ditutup?',
        a: 'Tidak. Alarm browser hanya berbunyi selama halamannya terbuka. Anda boleh pindah ke tab lain, tapi biarkan browser terbuka, perangkat tetap menyala, dan volume dikeraskan.',
      },
      {
        q: 'Perangkat apa saja yang didukung?',
        a: 'Semua browser modern: Chrome, Safari, Firefox, Edge, dan Samsung Internet di Windows, macOS, Linux, Android, iPhone, dan iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Alarm Online — Pasang Alarm Gratis | NoMore5Mins',
    metaDescription:
      'Alarm online gratis: pasang alarm dalam hitungan detik, pilih dari 8 suara, tambahkan label, dan snooze hingga 3 kali. Tanpa unduh, tanpa daftar.',
    h1: 'Alarm online',
    lead: 'Pilih jam, pilih suara, lalu tekan Pasang alarm. Alarm akan berbunyi di tab ini tepat pada menitnya.',
    setTitle: 'Alarm baru',
    timeLabel: 'Jam alarm',
    labelLabel: 'Label (opsional)',
    labelPlaceholder: 'Bangun',
    setCta: 'Pasang alarm',
    quickTitle: 'Tidur siang singkat',
    inMinutes: '+{n} mnt',
    listTitle: 'Alarm Anda',
    steps: [
      'Pilih jam alarm dengan pemilih waktu, atau ketuk tombol tidur singkat.',
      'Pilih suara dan volume, lalu tekan “Tes suara” untuk mendengarnya.',
      'Tekan “Pasang alarm”. Hitung mundur menunjukkan berapa lama lagi alarm berbunyi.',
      'Biarkan tab terbuka dan perangkat tetap menyala. Saat berbunyi, tekan Berhenti atau Tunda.',
    ],
    facts: [
      '8 suara alarm, dari lonceng lembut hingga sirene',
      'Banyak alarm dengan label',
      'Snooze dibatasi 3 × 5 menit',
      'Alarm tersimpan di browser dan tetap ada setelah halaman dimuat ulang',
      'Memakai screen wake lock (jika didukung) agar layar tetap menyala',
    ],
    contentTitle: 'Jam alarm di browser yang benar-benar membangunkan Anda',
    content: [
      'NoMore5Mins adalah alarm online gratis yang berjalan sepenuhnya di browser. Berguna saat ponsel sedang diisi daya di ruangan lain, saat Anda bekerja di laptop dan butuh pengingat, atau saat Anda ingin jam besar yang mudah dibaca di layar cadangan.',
      'Alarm mengecek waktu setiap detik dan tetap bekerja di tab latar belakang. Saat berbunyi, suaranya perlahan mengeras, judul tab berkedip, dan — jika Anda mengizinkan — notifikasi sistem muncul.',
      'Snooze boleh, tapi hanya tiga kali. Setelah snooze ketiga, tombolnya hilang. Itulah ide di balik namanya: tidak ada lagi “5 menit lagi”.',
    ],
    faq: [
      {
        q: 'Bagaimana cara memasang alarm online?',
        a: 'Pilih jam di pemilih waktu, pilih suara, lalu tekan “Pasang alarm”. Biarkan halaman tetap terbuka; alarm akan berbunyi pada menit yang dipilih.',
      },
      {
        q: 'Apakah alarm tetap berbunyi jika komputer masuk mode tidur?',
        a: 'Tidak. Perangkat yang tertidur akan menghentikan browser. Colokkan laptop ke charger dan matikan mode tidur, atau gunakan jam layar penuh; NoMore5Mins meminta screen wake lock jika browser mendukungnya.',
      },
      {
        q: 'Bisakah saya memasang lebih dari satu alarm?',
        a: 'Bisa. Tambahkan alarm sebanyak yang Anda mau. Setiap alarm muncul di “Alarm Anda” dan bisa dihapus satu per satu.',
      },
      {
        q: 'Kenapa tidak ada suara di ponsel saya?',
        a: 'Browser ponsel memblokir audio sampai Anda menyentuh halaman. Jika muncul bilah “nyalakan suara alarm”, ketuk sekali. Pastikan juga mode senyap tidak aktif.',
      },
      {
        q: 'Bagaimana cara kerja snooze?',
        a: 'Snooze menunda alarm selama 5 menit. Anda bisa menunda hingga tiga kali, setelah itu alarm memaksa Anda bangun.',
      },
      {
        q: 'Apakah alarm saya tersimpan?',
        a: 'Ya, di penyimpanan lokal browser pada perangkat ini. Alarm tidak pernah diunggah ke mana pun.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Pasang Alarm Jam {time} — Alarm Online Gratis | NoMore5Mins',
    metaDescription:
      'Pasang alarm jam {time} dengan sekali klik. Alarm online gratis dengan 8 suara dan snooze. Lihat juga jam tidur terbaik untuk bangun pukul {time}.',
    h1: 'Pasang alarm jam {time}',
    lead: 'Alarm ini sudah siap untuk pukul {time}. Pilih suara dan tekan Pasang alarm — lalu biarkan tab ini terbuka.',
    bedtimeTitle: 'Jam tidur terbaik untuk alarm pukul {time}',
    bedtimeLead:
      'Tidur berlangsung dalam siklus sekitar 90 menit. Bangun di akhir siklus terasa lebih mudah, jadi jam tidur ini sudah termasuk 15 menit untuk terlelap.',
    cycleLine: '{n} siklus · tidur {hours}',
    recommended: 'Disarankan',
    usesTitle: 'Alasan umum memasang alarm jam {time}',
    otherTimes: 'Jam alarm lainnya',
    bands: {
      early: {
        intro: 'Pukul {time} termasuk bangun pagi sekali. Cocok untuk ke gym, shift pagi, penerbangan, dan waktu tenang sebelum orang lain bangun.',
        uses: ['Olahraga atau lari pagi', 'Shift kerja pagi', 'Mengejar pesawat atau kereta pagi', 'Meditasi atau belajar sebelum hari dimulai'],
      },
      morning: {
        intro: 'Pukul {time} adalah salah satu jam bangun paling umum untuk hari sekolah dan kerja.',
        uses: ['Sekolah atau kuliah', 'Hari kerja di kantor', 'Berangkat kerja pagi', 'Menyiapkan anak-anak'],
      },
      lateMorning: {
        intro: 'Pukul {time} adalah jam bangun santai untuk akhir pekan, shift siang, dan orang yang bekerja dari rumah.',
        uses: ['Bangun siang di akhir pekan, tapi ada batasnya', 'Setelah shift malam', 'Mulai kerja remote', 'Janji temu menjelang siang'],
      },
      afternoon: {
        intro: 'Alarm pukul {time} biasanya berfungsi sebagai pengingat: akhir tidur siang, rapat, jemputan, atau minum obat.',
        uses: ['Akhir power nap', 'Pengingat rapat atau telepon', 'Jemput anak sekolah', 'Pengingat minum obat'],
      },
      evening: {
        intro: 'Alarm pukul {time} membantu rutinitas malam: memasak, olahraga, telepon, dan kelas online.',
        uses: ['Pengingat makan malam atau oven', 'Olahraga sore/malam', 'Telepon dengan zona waktu lain', 'Kelas online atau live streaming'],
      },
      night: {
        intro: 'Alarm pukul {time} cocok sebagai pengingat waktu tidur agar Anda benar-benar cukup tidur.',
        uses: ['Pengingat waktu tidur', 'Waktu matikan layar', 'Akhir sesi belajar malam', 'Istirahat shift malam'],
      },
    },
    faq: [
      {
        q: 'Bagaimana cara memasang alarm jam {time}?',
        a: 'Halaman ini sudah diatur ke pukul {time}. Tekan “Pasang alarm”, biarkan tab terbuka dan perangkat menyala. Alarm akan berbunyi pukul {time}.',
      },
      {
        q: 'Jam berapa saya harus tidur agar bangun pukul {time}?',
        a: 'Untuk lima siklus tidur penuh (7,5 jam), tidurlah sekitar pukul {bedtime}, sudah termasuk sekitar 15 menit untuk terlelap.',
      },
      {
        q: 'Apakah alarm {time} berbunyi besok jika jamnya sudah lewat hari ini?',
        a: 'Ya. Jika pukul {time} sudah lewat hari ini, alarm dijadwalkan untuk pukul {time} besok. Hitung mundur menunjukkan kapan tepatnya alarm berbunyi.',
      },
      {
        q: 'Bisakah saya mengganti suara alarm?',
        a: 'Bisa. Pilih salah satu dari 8 suara dan atur volume sebelum menekan “Pasang alarm”. Gunakan “Tes suara” untuk mendengarnya dulu.',
      },
    ],
  },

  timer: {
    metaTitle: 'Timer Online — Timer Hitung Mundur Gratis | NoMore5Mins',
    metaDescription:
      'Timer online gratis dengan alarm keras. Atur jam, menit, dan detik atau pilih preset. Layar penuh, tetap jalan di tab latar belakang.',
    h1: 'Timer online',
    lead: 'Atur jam, menit, dan detik, lalu tekan Mulai. Alarm akan berbunyi saat hitung mundur mencapai nol.',
    presetsTitle: 'Preset',
    steps: [
      'Masukkan jam, menit, dan detik, atau ketuk preset.',
      'Pilih suara alarm jika mau.',
      'Tekan Mulai (atau spasi). Jeda dan lanjutkan kapan saja.',
      'Saat timer mencapai nol, alarm berbunyi sampai Anda mematikannya.',
    ],
    facts: [
      'Hitung mundur hingga 99 jam',
      'Tetap akurat di tab latar belakang',
      'Sisa waktu tampil di judul tab browser',
      'Mode layar penuh untuk kelas dan presentasi',
    ],
    contentTitle: 'Timer hitung mundur untuk memasak, belajar, olahraga, dan kerja',
    content: [
      'Gunakan timer untuk apa saja yang punya batas waktu: merebus telur, belajar 20 menit, plank, jatah presentasi, atau giliran main board game.',
      'Hitung mundurnya berdasarkan jam sistem, bukan penghitung, jadi tetap akurat meski browser memperlambat tab latar belakang. Sisa waktu tampil di judul tab sehingga bisa Anda pantau dari mana saja.',
      'Untuk kelas dan rapat, gunakan layar penuh: angkanya membesar memenuhi layar dan tetap terbaca dari bagian belakang ruangan.',
    ],
    faq: [
      {
        q: 'Bagaimana cara memasang timer online?',
        a: 'Ketik jam, menit, dan detik (atau ketuk preset) lalu tekan Mulai. Alarm berbunyi saat mencapai nol.',
      },
      {
        q: 'Apakah timer tetap berjalan di tab lain?',
        a: 'Ya. Timer berdasarkan jam, jadi tetap akurat di tab latar belakang dan alarm tetap berbunyi saat nol.',
      },
      {
        q: 'Bisakah timer dijeda?',
        a: 'Bisa. Tekan Jeda (atau spasi) dan Lanjutkan untuk meneruskan. Reset mengembalikan ke waktu yang Anda atur.',
      },
      {
        q: 'Berapa lama timer terpanjang yang bisa diatur?',
        a: 'Hingga 99 jam, 59 menit, dan 59 detik.',
      },
    ],
  },

  timerPreset: {
    metaTitle: 'Timer {duration} — Hitung Mundur Online Gratis | NoMore5Mins',
    metaDescription:
      'Timer {duration} gratis dengan alarm. Mulai dengan sekali klik, tetap jalan di tab latar belakang, dan berbunyi keras saat nol. Tanpa unduh.',
    h1: 'Timer {duration}',
    lead: 'Tekan Mulai dan timer ini menghitung mundur {duration}. Alarm akan berbunyi saat waktunya habis.',
    endsAtTitle: 'Jika dimulai sekarang, selesai pukul',
    usesTitle: 'Kegunaan timer {duration}',
    otherTimers: 'Timer lainnya',
    bands: {
      short: {
        intro: 'Timer {duration} pas untuk kegiatan singkat dan fokus, saat melirik jam terus justru mengganggu.',
        uses: ['Interval olahraga dan plank', 'Sikat gigi', 'Menyeduh teh', 'Giliran main dan kuis'],
      },
      medium: {
        intro: 'Timer {duration} cocok untuk memasak, pekerjaan rumah singkat, dan sesi fokus pendek.',
        uses: ['Merebus telur dan mi', 'Beres-beres kilat', 'Meditasi singkat', 'Power nap'],
      },
      focus: {
        intro: 'Timer {duration} adalah durasi klasik untuk kerja fokus, sesi belajar, dan olahraga.',
        uses: ['Sesi belajar atau PR', 'Blok fokus ala Pomodoro', 'Olahraga atau kelas yoga', 'Batas waktu rapat'],
      },
      long: {
        intro: 'Timer {duration} membantu tugas panjang: ujian, membuat kue, masak lama, dan batas screen time.',
        uses: ['Latihan ujian', 'Memanggang kue dan daging', 'Batas screen time', 'Pengingat parkir'],
      },
      veryLong: {
        intro: 'Timer {duration} berguna untuk menunggu lama: mengembangkan adonan, mengisi daya, marinasi, atau jendela puasa.',
        uses: ['Mengembangkan adonan dan marinasi', 'Jendela puasa', 'Istirahat perjalanan jauh atau shift', 'Cucian dan pekerjaan rumah'],
      },
    },
    faq: [
      {
        q: 'Bagaimana cara memulai timer {duration}?',
        a: 'Tekan Mulai. Hitung mundur langsung berjalan dan alarm berbunyi setelah {duration}.',
      },
      {
        q: 'Apakah timer {duration} tetap jalan jika saya pindah tab?',
        a: 'Ya. Timer tetap akurat di latar belakang dan alarm berbunyi saat nol. Biarkan browser terbuka dan volume menyala.',
      },
      {
        q: 'Bisakah timer {duration} dijeda?',
        a: 'Bisa. Tekan Jeda dan Lanjutkan kapan pun perlu. Reset memulai {duration} dari awal lagi.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Stopwatch Online — Gratis, Akurat, dengan Lap | NoMore5Mins',
    metaDescription:
      'Stopwatch online gratis dengan catatan lap, sorotan lap tercepat/terlama, dan mode layar penuh. Akurat hingga 1/100 detik. Ada pintasan keyboard.',
    h1: 'Stopwatch online',
    lead: 'Tekan Mulai untuk mengukur waktu hingga seperseratus detik. Catat lap dan lihat yang tercepat dan terlama.',
    lapsTitle: 'Lap',
    lapCol: 'Lap',
    splitCol: 'Waktu lap',
    totalCol: 'Total',
    steps: [
      'Tekan Mulai atau spasi.',
      'Tekan Lap (atau L) untuk mencatat lap tanpa berhenti.',
      'Tekan Jeda untuk menghentikan jam; tekan Lanjutkan untuk meneruskan.',
      'Tekan Reset (atau R) untuk menghapus waktu dan semua lap.',
    ],
    facts: [
      'Akurasi hingga 1/100 detik',
      'Lap tanpa batas, tercepat dan terlama disorot',
      'Tetap berjalan di tab latar belakang',
      'Pintasan keyboard: Space, L, R, F',
    ],
    contentTitle: 'Stopwatch akurat untuk olahraga, sains, dan kebutuhan sehari-hari',
    content: [
      'Stopwatch mengukur waktu yang berlalu dengan jam resolusi tinggi dari browser dan menampilkannya hingga seperseratus detik.',
      'Catatan lap memudahkan membandingkan pengulangan — putaran lari, lintasan renang, latihan pidato, atau langkah praktikum. Lap tercepat ditampilkan hijau dan yang terlama merah.',
    ],
    faq: [
      {
        q: 'Seberapa akurat stopwatch online ini?',
        a: 'Stopwatch memakai jam resolusi tinggi dari browser dan menampilkan seperseratus detik. Akurasinya hanya dibatasi oleh perangkat Anda.',
      },
      {
        q: 'Bagaimana cara mencatat lap?',
        a: 'Tekan Lap atau tombol L saat stopwatch berjalan. Setiap lap menampilkan waktunya sendiri dan totalnya.',
      },
      {
        q: 'Apakah stopwatch tetap berjalan jika saya pindah tab?',
        a: 'Ya. Stopwatch berdasarkan stempel waktu, jadi waktunya tetap benar saat Anda kembali.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Timer Pomodoro — Timer Fokus Online Gratis | NoMore5Mins',
    metaDescription:
      'Timer Pomodoro online gratis: sesi fokus 25 menit, istirahat 5 menit, dan istirahat panjang tiap 4 putaran. Durasi, suara, dan statistik harian.',
    h1: 'Timer Pomodoro',
    lead: 'Bekerja dalam sesi fokus 25 menit dengan istirahat singkat di antaranya. Setelah empat sesi, ambil istirahat lebih panjang.',
    settingsTitle: 'Pengaturan',
    focusLen: 'Fokus (menit)',
    shortLen: 'Istirahat singkat (menit)',
    longLen: 'Istirahat panjang (menit)',
    rounds: 'Sesi sebelum istirahat panjang',
    autoStart: 'Mulai fase berikutnya otomatis',
    skip: 'Lewati',
    todayTitle: 'Hari ini',
    steps: [
      'Pilih satu tugas dan tekan Mulai fokus.',
      'Kerjakan sampai bel berbunyi — tanpa email, tanpa ponsel.',
      'Ambil istirahat 5 menit. Berdiri, minum air.',
      'Setelah empat sesi, istirahatlah 15–30 menit.',
    ],
    facts: [
      'Bawaan 25 / 5 / 15 menit, bisa diubah sepenuhnya',
      'Pergantian fase otomatis (opsional)',
      'Hitungan harian sesi dan menit fokus',
      'Pengaturan tersimpan di browser Anda',
    ],
    contentTitle: 'Apa itu Teknik Pomodoro?',
    content: [
      'Teknik Pomodoro adalah metode manajemen waktu yang dikembangkan Francesco Cirillo pada akhir 1980-an. Anda bekerja dalam interval fokus 25 menit yang disebut “pomodoro”, dipisahkan oleh istirahat singkat.',
      'Interval pendek yang tetap membuat pekerjaan sulit lebih mudah dimulai dan distraksi lebih sulit menyusup. Istirahat menjaga konsentrasi tetap segar sepanjang hari.',
    ],
    faq: [
      {
        q: 'Berapa lama satu Pomodoro?',
        a: 'Pomodoro klasik terdiri dari 25 menit fokus diikuti istirahat 5 menit. Setelah empat Pomodoro, Anda istirahat 15–30 menit.',
      },
      {
        q: 'Bisakah durasinya diubah?',
        a: 'Bisa. Buka Pengaturan untuk mengubah durasi fokus, istirahat singkat, dan istirahat panjang. Alternatif populer adalah 50/10 dan 90/20.',
      },
      {
        q: 'Apakah Teknik Pomodoro efektif?',
        a: 'Banyak pelajar dan pekerja kantoran merasa interval tetap mengurangi kebiasaan menunda dan kelelahan mental. Coba selama seminggu dan sesuaikan durasinya.',
      },
    ],
  },

  clock: {
    metaTitle: 'Jam Sekarang — Jam Berapa Sekarang? Waktu Tepat | NoMore5Mins',
    metaDescription:
      'Jam sekarang yang tepat beserta tanggal untuk zona waktu Anda, lengkap dengan detik. Jam layar penuh besar untuk meja atau samping tempat tidur.',
    h1: 'Jam sekarang',
    lead: 'Waktu saat ini di zona waktu Anda, diperbarui setiap detik.',
    zoneLabel: 'Zona waktu Anda',
    dateLabel: 'Tanggal',
    weekLabel: 'Minggu',
    dayOfYear: 'Hari dalam tahun',
    format24: 'Format 24 jam',
    showSeconds: 'Tampilkan detik',
    facts: [
      'Memakai jam dan zona waktu perangkat Anda',
      'Waktu musim panas (DST) diatur otomatis',
      'Mode layar penuh untuk meja, TV, atau samping tempat tidur',
    ],
    contentTitle: 'Jam akurat dan mudah dibaca untuk layar apa pun',
    content: [
      'Halaman ini menampilkan waktu lokal saat ini berdasarkan jam dan zona waktu perangkat Anda. Sebagian besar perangkat menyinkronkan jamnya lewat internet, jadi waktunya biasanya akurat hingga sepersekian detik.',
      'Tekan Layar penuh untuk mengubah ponsel, tablet, laptop, atau TV menjadi jam besar tanpa gangguan.',
    ],
    faq: [
      {
        q: 'Seberapa akurat jam ini?',
        a: 'Jam ini menampilkan jam perangkat Anda, yang biasanya disinkronkan dengan server waktu internet dan akurat hingga sepersekian detik.',
      },
      {
        q: 'Bisakah dipakai sebagai jam meja atau jam samping tempat tidur?',
        a: 'Bisa. Tekan Layar penuh. Jika didukung, layar tetap menyala selama jam terbuka.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'Jam Dunia — Waktu Sekarang di Kota-Kota Dunia | NoMore5Mins',
    metaDescription:
      'Lihat jam sekarang di New York, London, Tokyo, Dubai, Sydney, dan lainnya. Selisih waktu, siang/malam, dan DST dihitung otomatis.',
    h1: 'Jam dunia',
    lead: 'Waktu lokal saat ini di kota-kota besar, beserta selisihnya dengan waktu Anda.',
    search: 'Cari kota',
    addTitle: 'Tambah kota',
    facts: [
      'Waktu musim panas (DST) diatur otomatis',
      'Menampilkan selisih dengan waktu Anda',
      'Daftar kota tersimpan di browser Anda',
    ],
    contentTitle: 'Rencanakan telepon dan rapat lintas zona waktu',
    content: [
      'Jam dunia menampilkan waktu saat ini di setiap kota menggunakan basis data zona waktu resmi yang ada di browser Anda, sehingga perubahan waktu musim panas diterapkan otomatis.',
      'Setiap kartu menunjukkan apakah di sana siang atau malam, dan berapa jam kota itu lebih cepat atau lebih lambat dari Anda — praktis untuk rapat, perjalanan, dan menelepon keluarga di luar negeri.',
    ],
    faq: [
      {
        q: 'Apakah jam dunia memperhitungkan waktu musim panas?',
        a: 'Ya. Basis data zona waktu di browser Anda menerapkan aturan waktu musim panas untuk setiap kota secara otomatis.',
      },
      {
        q: 'Bisakah saya menambahkan kota sendiri?',
        a: 'Bisa. Gunakan “Tambah kota”. Daftar Anda tersimpan di browser ini.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Kalkulator Tidur — Kapan Harus Tidur & Bangun | NoMore5Mins',
    metaDescription:
      'Kalkulator tidur gratis berdasarkan siklus tidur 90 menit. Temukan jam tidur terbaik untuk jam bangun Anda, atau kapan bangun jika tidur sekarang.',
    h1: 'Kalkulator tidur',
    lead: 'Bangun di akhir siklus tidur membuat Anda tidak terlalu pusing dan lemas. Pilih jam bangun atau tidur sekarang.',
    modeWake: 'Saya ingin bangun pukul',
    modeNow: 'Saya mau tidur sekarang',
    calculate: 'Hitung',
    fallAsleep: 'Menit untuk terlelap',
    bedtimesTitle: 'Tidurlah pada salah satu jam ini',
    waketimesTitle: 'Pasang alarm pada salah satu jam ini',
    steps: [
      'Pilih jam bangun Anda, atau pilih “Saya mau tidur sekarang”.',
      'Atur berapa lama biasanya Anda butuh untuk terlelap (umumnya 15 menit).',
      'Pilih jam dari daftar. 5–6 siklus (7,5–9 jam) ideal untuk kebanyakan orang dewasa.',
    ],
    facts: [
      'Satu siklus tidur berlangsung sekitar 90 menit',
      'Orang dewasa butuh 7–9 jam, yaitu 5–6 siklus',
      'Butuh sekitar 10–20 menit untuk terlelap',
    ],
    contentTitle: 'Cara kerja siklus tidur',
    content: [
      'Sepanjang malam Anda melewati tidur ringan, tidur nyenyak, dan tidur REM dalam siklus sekitar 90 menit. Bangun saat tidur nyenyak membuat pusing dan lemas; bangun di akhir siklus terasa jauh lebih mudah.',
      'Kalkulator menghitung mundur (atau maju) dengan langkah 90 menit dan menambahkan waktu yang Anda perlukan untuk terlelap. Setiap orang sedikit berbeda, jadi anggap hasilnya sebagai titik awal.',
      'Alat ini hanya untuk informasi umum dan bukan saran medis. Jika Anda sering sulit tidur, konsultasikan dengan dokter.',
    ],
    faq: [
      {
        q: 'Berapa lama satu siklus tidur?',
        a: 'Rata-rata sekitar 90 menit, meski bervariasi antara 70 dan 120 menit tergantung orangnya dan waktu malam.',
      },
      {
        q: 'Berapa siklus tidur yang saya butuhkan?',
        a: 'Kebanyakan orang dewasa merasa paling segar setelah 5 atau 6 siklus, yaitu 7,5 hingga 9 jam tidur.',
      },
      {
        q: 'Jam berapa saya harus tidur agar bangun pukul 07.00?',
        a: 'Untuk 5 siklus, tidurlah sekitar pukul 23.15; untuk 6 siklus sekitar pukul 21.45. Keduanya sudah termasuk 15 menit untuk terlelap.',
      },
    ],
  },

  products: {
    title: 'Tidur lebih nyenyak, bangun lebih mudah',
    titleFocus: 'Perlengkapan untuk fokus maksimal',
    subtitle: 'Barang-barang berguna seputar tidur, pagi hari, dan fokus yang kami rekomendasikan.',
    cta: 'Lihat di Amazon',
    disclosure: 'Tautan afiliasi: kami bisa mendapat komisi dari pembelian yang memenuhi syarat tanpa biaya tambahan bagi Anda.',
    items: {
      sunrise: { name: 'Jam alarm sunrise', desc: 'Cahaya yang perlahan terang sebelum alarm, seperti matahari terbit alami.', query: 'jam alarm sunrise light' },
      mask: { name: 'Penutup mata tidur sutra', desc: 'Menghalangi cahaya sepenuhnya untuk tidur lebih nyenyak, bahkan setelah matahari terbit.', query: 'penutup mata tidur sutra' },
      noise: { name: 'Mesin white noise', desc: 'Menyamarkan suara lalu lintas dan dengkuran dengan suara yang stabil dan menenangkan.', query: 'mesin white noise tidur' },
      pillow: { name: 'Bantal ergonomis', desc: 'Topangan memory foam untuk leher dan bahu.', query: 'bantal memory foam ergonomis' },
      blanket: { name: 'Selimut berbobot', desc: 'Tekanan lembut dan merata yang menenangkan bagi banyak orang.', query: 'weighted blanket selimut berat' },
      loudAlarm: { name: 'Jam alarm ekstra keras', desc: 'Alarm keras dengan penggetar kasur untuk yang susah dibangunkan.', query: 'jam alarm keras getar' },
      headphones: { name: 'Headphone noise cancelling', desc: 'Redam bisingnya kantor terbuka atau kafe saat Anda fokus.', query: 'headphone noise cancelling' },
      cubeTimer: { name: 'Timer kubus Pomodoro', desc: 'Balik untuk memulai timer 5, 15, 25, atau 45 menit — tanpa ponsel.', query: 'pomodoro cube timer' },
      glasses: { name: 'Kacamata anti blue light', desc: 'Mengurangi silau dan mata lelah saat lama menatap layar.', query: 'kacamata anti radiasi blue light' },
      deskLamp: { name: 'Lampu meja LED', desc: 'Cahaya bebas kedip yang bisa diatur untuk belajar dan bekerja.', query: 'lampu meja belajar led dimmable' },
    },
  },

  langBanner: {
    text: 'Halaman ini juga tersedia dalam {language}.',
    switch: 'Ganti',
    dismiss: 'Tidak, terima kasih',
  },

  footer: {
    tagline: 'Alat waktu gratis yang berjalan di browser apa pun.',
    toolsTitle: 'Alat',
    popularTitle: 'Populer',
    siteTitle: 'NoMore5Mins',
    about: 'Tentang',
    blog: 'Blog (bahasa Inggris)',
    contact: 'Kontak',
    privacy: 'Kebijakan privasi',
    terms: 'Ketentuan layanan',
    rights: 'Hak cipta dilindungi.',
    languages: 'Bahasa',
  },
};

export default id;
