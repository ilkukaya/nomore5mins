import type { Dict } from './en';

const vi: Dict = {
  meta: {
    siteTagline: 'Báo thức online, hẹn giờ và đồng hồ bấm giờ miễn phí',
    ogAlt: 'NoMore5Mins — báo thức online, hẹn giờ và đồng hồ bấm giờ miễn phí',
  },

  nav: {
    alarm: 'Báo thức',
    timer: 'Hẹn giờ',
    stopwatch: 'Bấm giờ',
    pomodoro: 'Tập trung',
    clock: 'Đồng hồ',
    worldClock: 'Giờ thế giới',
    sleep: 'Tính giờ ngủ',
    blog: 'Blog',
    menu: 'Menu',
    close: 'Đóng',
    language: 'Ngôn ngữ',
    theme: 'Chuyển giao diện sáng / tối',
    skip: 'Chuyển đến nội dung',
    home: 'Trang chủ',
    allTools: 'Tất cả công cụ',
  },

  tools: {
    alarm: 'Đồng hồ báo thức online',
    timer: 'Hẹn giờ online',
    stopwatch: 'Đồng hồ bấm giờ online',
    pomodoro: 'Đồng hồ Pomodoro',
    clock: 'Bây giờ là mấy giờ',
    worldClock: 'Giờ thế giới',
    sleep: 'Máy tính giờ ngủ',
  },

  toolBlurbs: {
    alarm: 'Thức dậy đúng giờ với âm thanh to hoặc nhẹ nhàng. Báo lại có giới hạn.',
    timer: 'Đếm ngược bất kỳ khoảng thời gian nào, chuông kêu to khi về 0.',
    stopwatch: 'Đo thời gian chính xác đến phần trăm giây, có ghi vòng.',
    pomodoro: 'Phiên tập trung 25 phút với giờ nghỉ tự động.',
    clock: 'Giờ và ngày chính xác, chữ to nhìn rõ từ xa.',
    worldClock: 'Giờ hiện tại ở các thành phố và múi giờ lớn.',
    sleep: 'Tìm giờ đi ngủ hoặc thức dậy tốt nhất theo chu kỳ 90 phút.',
  },

  common: {
    start: 'Bắt đầu',
    pause: 'Tạm dừng',
    resume: 'Tiếp tục',
    reset: 'Đặt lại',
    lap: 'Vòng',
    stop: 'Dừng',
    dismiss: 'Tắt',
    delete: 'Xóa',
    add: 'Thêm',
    fullscreen: 'Toàn màn hình',
    sound: 'Âm thanh',
    volume: 'Âm lượng',
    testSound: 'Nghe thử',
    hours: 'Giờ',
    minutes: 'Phút',
    seconds: 'Giây',
    updated: 'Cập nhật {date}',
    faqTitle: 'Câu hỏi thường gặp',
    howTitle: 'Cách sử dụng',
    keyFacts: 'Tính năng chính',
    shortcuts: 'Phím tắt',
    related: 'Công cụ liên quan',
    free: 'Miễn phí · Không cần đăng ký · Chạy offline sau khi tải',
    keepOpen: 'Hãy giữ tab này mở và bật âm lượng thiết bị.',
    share: 'Chia sẻ',
    copied: 'Đã sao chép liên kết',
  },

  sounds: {
    'classic-ring': 'Chuông cổ điển',
    'digital-beep': 'Bíp điện tử',
    'gentle-chime': 'Chuông gió nhẹ nhàng',
    'morning-birds': 'Chim hót buổi sáng',
    'rooster-crow': 'Gà gáy',
    'nuclear-alert': 'Còi báo động (rất to)',
    'piano-melody': 'Piano',
    'ocean-waves': 'Sóng biển',
  },

  client: {
    ready: 'Sẵn sàng',
    running: 'Đang chạy',
    paused: 'Đã tạm dừng',
    timesUp: 'Hết giờ!',
    timerDone: 'Hẹn giờ đã kết thúc',
    alarmTitle: 'Báo thức',
    wakeUp: 'Dậy thôi!',
    ringsIn: 'Reo sau {duration}',
    noAlarms: 'Chưa đặt báo thức nào',
    snooze: 'Báo lại sau 5 phút',
    snoozesLeft: 'Còn {n} lần báo lại',
    snoozeLimit: 'Hết “5 phút nữa” rồi. Dậy thôi!',
    enableSound: 'Chạm vào đây để bật âm thanh báo thức',
    alarmSet: 'Đã đặt báo thức lúc {time}',
    lapN: 'Vòng {n}',
    fastest: 'Nhanh nhất',
    slowest: 'Chậm nhất',
    focus: 'Tập trung',
    shortBreak: 'Nghỉ ngắn',
    longBreak: 'Nghỉ dài',
    sessionOf: 'Phiên {n}/{total}',
    focusedToday: 'Hôm nay đã tập trung {n} phút',
    startFocus: 'Bắt đầu tập trung',
    startBreak: 'Bắt đầu nghỉ',
    breakOver: 'Hết giờ nghỉ — quay lại tập trung nào.',
    focusOver: 'Xong phiên tập trung — nghỉ ngơi chút nhé.',
    yourTime: 'Giờ của bạn',
    day: 'Ngày',
    night: 'Đêm',
    today: 'Hôm nay',
    tomorrow: 'Ngày mai',
    yesterday: 'Hôm qua',
    hoursAhead: 'Sớm hơn {n} giờ',
    hoursBehind: 'Muộn hơn {n} giờ',
    sameTime: 'Cùng giờ',
    remove: 'Xóa',
    searchNoResults: 'Không tìm thấy thành phố',
    cycles: '{n} chu kỳ',
    sleepHours: 'Ngủ {h}',
    setAlarmAt: 'Đặt báo thức',
    best: 'Tốt nhất',
  },

  home: {
    metaTitle: 'Báo thức online, hẹn giờ, bấm giờ miễn phí | NoMore5Mins',
    metaDescription:
      'Báo thức online, hẹn giờ đếm ngược, đồng hồ bấm giờ, Pomodoro và giờ thế giới miễn phí. Dùng trên mọi trình duyệt, không cần đăng ký hay tải về.',
    h1: 'Báo thức online, hẹn giờ và đồng hồ bấm giờ miễn phí',
    lead: 'Công cụ thời gian đơn giản, dùng ngay trên trình duyệt. Không cần app, không cần tài khoản, không còn “thêm 5 phút nữa thôi”.',
    quickTitle: 'Đặt báo thức nhanh',
    quickCta: 'Đặt báo thức',
    quickHint: 'Mở đồng hồ báo thức với giờ bạn chọn đã được đặt sẵn.',
    toolsTitle: 'Tất cả công cụ',
    popularAlarms: 'Giờ báo thức phổ biến',
    popularTimers: 'Hẹn giờ phổ biến',
    whyTitle: 'Vì sao mọi người chọn NoMore5Mins',
    why: [
      { title: 'Tức thì', text: 'Trang tải chưa đến một giây, chỉ một chạm là công cụ chạy ngay.' },
      { title: 'Riêng tư', text: 'Báo thức và cài đặt chỉ lưu trong trình duyệt của bạn. Không cần đăng ký gì cả.' },
      { title: 'Mọi nơi', text: 'Điện thoại, máy tính bảng, laptop hay trình duyệt TV — với 15 ngôn ngữ.' },
      { title: 'Báo lại có giới hạn', text: 'Chỉ được báo lại tối đa ba lần. Đó chính là mục đích.' },
    ],
    faq: [
      {
        q: 'NoMore5Mins có miễn phí không?',
        a: 'Có. Mọi công cụ đều miễn phí và không cần tài khoản. Trang web duy trì nhờ quảng cáo và liên kết tiếp thị, những thứ này không bao giờ cản trở việc sử dụng công cụ.',
      },
      {
        q: 'Tôi có cần cài đặt gì không?',
        a: 'Không. Mọi thứ chạy ngay trên trình duyệt web. Bạn có thể thêm trang vào màn hình chính để dùng như một ứng dụng.',
      },
      {
        q: 'Báo thức có reo nếu tôi đóng tab không?',
        a: 'Không. Báo thức trên trình duyệt chỉ reo khi trang vẫn mở. Bạn có thể chuyển sang tab khác, nhưng hãy giữ trình duyệt mở, thiết bị không ngủ và bật âm lượng.',
      },
      {
        q: 'Những thiết bị nào được hỗ trợ?',
        a: 'Mọi trình duyệt hiện đại: Chrome, Safari, Firefox, Edge và Samsung Internet trên Windows, macOS, Linux, Android, iPhone và iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Báo thức online — Đặt báo thức miễn phí | NoMore5Mins',
    metaDescription:
      'Đồng hồ báo thức online miễn phí: đặt báo thức trong vài giây, 8 âm thanh, thêm nhãn và báo lại (tối đa 3 lần). Không cần tải về, không cần đăng ký.',
    h1: 'Đồng hồ báo thức online',
    lead: 'Chọn giờ, chọn âm thanh và nhấn Đặt báo thức. Chuông sẽ reo trong tab này đúng phút đã hẹn.',
    setTitle: 'Báo thức mới',
    timeLabel: 'Giờ báo thức',
    labelLabel: 'Nhãn (không bắt buộc)',
    labelPlaceholder: 'Thức dậy',
    setCta: 'Đặt báo thức',
    quickTitle: 'Chợp mắt nhanh',
    inMinutes: '+{n} phút',
    listTitle: 'Báo thức của bạn',
    steps: [
      'Chọn giờ báo thức bằng bộ chọn giờ, hoặc chạm vào một nút chợp mắt nhanh.',
      'Chọn âm thanh và âm lượng, rồi nhấn “Nghe thử” để nghe trước.',
      'Nhấn “Đặt báo thức”. Bộ đếm ngược cho biết còn bao lâu nữa chuông reo.',
      'Giữ tab mở và thiết bị không ngủ. Khi chuông reo, nhấn Dừng hoặc Báo lại.',
    ],
    facts: [
      '8 âm thanh báo thức, từ chuông gió nhẹ nhàng đến còi báo động',
      'Đặt nhiều báo thức kèm nhãn',
      'Báo lại tối đa 3 lần × 5 phút',
      'Báo thức được lưu trong trình duyệt, không mất khi tải lại trang',
      'Giữ màn hình luôn sáng trên thiết bị hỗ trợ',
    ],
    contentTitle: 'Đồng hồ báo thức trên trình duyệt thực sự kéo bạn dậy',
    content: [
      'NoMore5Mins là đồng hồ báo thức online miễn phí chạy hoàn toàn trên trình duyệt. Rất tiện khi điện thoại đang sạc ở phòng khác, khi bạn làm việc trên laptop và cần nhắc giờ, hoặc khi muốn có một chiếc đồng hồ to, dễ nhìn trên màn hình phụ.',
      'Báo thức kiểm tra giờ chính xác mỗi giây và vẫn hoạt động khi tab chạy nền. Khi reo, âm thanh to dần, tiêu đề tab nhấp nháy và — nếu bạn cho phép — thông báo hệ thống sẽ hiện lên.',
      'Bạn được báo lại, nhưng chỉ ba lần. Sau lần thứ ba, nút báo lại biến mất. Đó chính là ý nghĩa của cái tên: không còn “thêm 5 phút nữa thôi”.',
    ],
    faq: [
      {
        q: 'Làm sao để đặt báo thức online?',
        a: 'Chọn giờ trong bộ chọn giờ, chọn âm thanh và nhấn “Đặt báo thức”. Giữ trang mở, chuông sẽ reo đúng phút đã chọn.',
      },
      {
        q: 'Báo thức có reo nếu máy tính chuyển sang chế độ ngủ không?',
        a: 'Không. Khi thiết bị ngủ, trình duyệt cũng tạm dừng. Hãy cắm sạc laptop và tắt chế độ ngủ, hoặc dùng đồng hồ toàn màn hình; NoMore5Mins sẽ yêu cầu giữ màn hình sáng nếu trình duyệt hỗ trợ.',
      },
      {
        q: 'Tôi có thể đặt nhiều báo thức không?',
        a: 'Có. Bạn thêm bao nhiêu báo thức cũng được. Mỗi báo thức hiển thị trong “Báo thức của bạn” và có thể xóa riêng.',
      },
      {
        q: 'Vì sao điện thoại của tôi không có tiếng?',
        a: 'Trình duyệt di động chặn âm thanh cho đến khi bạn chạm vào trang. Nếu thấy thanh “bật âm thanh báo thức”, hãy chạm vào một lần. Đồng thời kiểm tra xem chế độ im lặng đã tắt chưa.',
      },
      {
        q: 'Chức năng báo lại hoạt động thế nào?',
        a: 'Báo lại sẽ lùi chuông thêm 5 phút. Bạn được báo lại tối đa ba lần, sau đó báo thức sẽ bắt bạn phải dậy.',
      },
      {
        q: 'Báo thức của tôi có được lưu không?',
        a: 'Có, trong bộ nhớ cục bộ của trình duyệt trên thiết bị này. Chúng không bao giờ được tải lên bất kỳ đâu.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Đặt báo thức {time} — Báo thức online miễn phí | NoMore5Mins',
    metaDescription:
      'Đặt báo thức lúc {time} chỉ với một cú nhấp. Báo thức online miễn phí với 8 âm thanh và báo lại. Xem thêm giờ đi ngủ tốt nhất để dậy lúc {time}.',
    h1: 'Đặt báo thức lúc {time}',
    lead: 'Báo thức đã sẵn sàng cho {time}. Chọn âm thanh và nhấn Đặt báo thức — rồi giữ tab này mở.',
    bedtimeTitle: 'Giờ đi ngủ tốt nhất để dậy lúc {time}',
    bedtimeLead:
      'Giấc ngủ diễn ra theo chu kỳ khoảng 90 phút. Thức dậy vào cuối chu kỳ sẽ dễ chịu hơn, vì vậy các giờ đi ngủ này đã tính thêm 15 phút để chìm vào giấc ngủ.',
    cycleLine: '{n} chu kỳ · ngủ {hours}',
    recommended: 'Khuyên dùng',
    usesTitle: 'Lý do thường gặp để đặt báo thức lúc {time}',
    otherTimes: 'Giờ báo thức khác',
    bands: {
      early: {
        intro: '{time} là giờ dậy sớm. Phù hợp để đi tập gym, làm ca sớm, bắt chuyến bay hoặc tận hưởng khoảng lặng trước khi mọi người thức dậy.',
        uses: ['Tập thể dục hoặc chạy bộ buổi sáng', 'Ca làm việc sớm', 'Bắt chuyến bay hoặc tàu sớm', 'Thiền hoặc học bài trước khi ngày mới bắt đầu'],
      },
      morning: {
        intro: '{time} là một trong những giờ thức dậy phổ biến nhất cho ngày đi học và đi làm.',
        uses: ['Đi học hoặc lên giảng đường', 'Ngày làm việc ở văn phòng', 'Di chuyển buổi sáng', 'Chuẩn bị cho con đi học'],
      },
      lateMorning: {
        intro: '{time} là giờ thức dậy thong thả cho cuối tuần, ca muộn và người làm việc tại nhà.',
        uses: ['Ngủ nướng cuối tuần có giới hạn', 'Sau ca đêm', 'Bắt đầu làm việc từ xa', 'Cuộc hẹn cuối buổi sáng'],
      },
      afternoon: {
        intro: 'Báo thức lúc {time} thường dùng để nhắc việc: hết giờ ngủ trưa, họp, đón con hoặc uống thuốc.',
        uses: ['Kết thúc giấc ngủ ngắn', 'Nhắc họp hoặc gọi điện', 'Đón con tan học', 'Nhắc uống thuốc'],
      },
      evening: {
        intro: 'Báo thức lúc {time} giúp bạn sắp xếp buổi tối: nấu ăn, tập luyện, gọi điện và học online.',
        uses: ['Nhắc nấu cơm hoặc tắt lò', 'Tập luyện buổi tối', 'Gọi điện với người ở múi giờ khác', 'Lớp học online hoặc livestream'],
      },
      night: {
        intro: 'Báo thức lúc {time} rất hợp để nhắc giờ đi ngủ, giúp bạn thực sự ngủ đủ giấc.',
        uses: ['Nhắc giờ đi ngủ', 'Giờ tắt màn hình', 'Kết thúc buổi học khuya', 'Giờ nghỉ ca đêm'],
      },
    },
    faq: [
      {
        q: 'Làm sao để đặt báo thức lúc {time}?',
        a: 'Trang này đã được đặt sẵn {time}. Nhấn “Đặt báo thức”, giữ tab mở và thiết bị không ngủ. Chuông sẽ reo lúc {time}.',
      },
      {
        q: 'Nên đi ngủ lúc mấy giờ để dậy lúc {time}?',
        a: 'Để ngủ đủ năm chu kỳ (7,5 giờ), hãy đi ngủ vào khoảng {bedtime}, đã bao gồm khoảng 15 phút để chìm vào giấc ngủ.',
      },
      {
        q: 'Nếu hôm nay đã qua {time}, báo thức có reo vào ngày mai không?',
        a: 'Có. Nếu hôm nay đã qua {time}, báo thức sẽ được hẹn lúc {time} ngày mai. Bộ đếm ngược cho biết chính xác khi nào chuông reo.',
      },
      {
        q: 'Tôi có thể đổi âm thanh báo thức không?',
        a: 'Có. Chọn một trong 8 âm thanh và chỉnh âm lượng trước khi nhấn “Đặt báo thức”. Dùng “Nghe thử” để nghe trước.',
      },
    ],
  },

  timer: {
    metaTitle: 'Hẹn giờ online — Đồng hồ đếm ngược miễn phí | NoMore5Mins',
    metaDescription:
      'Hẹn giờ đếm ngược online miễn phí với chuông báo to. Đặt giờ, phút, giây hoặc chọn mốc có sẵn. Toàn màn hình, vẫn chạy khi tab ở chế độ nền.',
    h1: 'Hẹn giờ online',
    lead: 'Đặt giờ, phút và giây rồi nhấn Bắt đầu. Chuông sẽ reo khi đếm ngược về 0.',
    presetsTitle: 'Mốc có sẵn',
    steps: [
      'Nhập giờ, phút và giây, hoặc chạm vào một mốc có sẵn.',
      'Chọn âm thanh báo nếu muốn.',
      'Nhấn Bắt đầu (hoặc phím cách). Tạm dừng và tiếp tục bất cứ lúc nào.',
      'Khi hẹn giờ về 0, chuông sẽ reo cho đến khi bạn tắt.',
    ],
    facts: [
      'Đếm ngược tối đa 99 giờ',
      'Giữ thời gian chính xác khi tab chạy nền',
      'Hiển thị thời gian còn lại trên tiêu đề tab',
      'Chế độ toàn màn hình cho lớp học và thuyết trình',
    ],
    contentTitle: 'Đồng hồ đếm ngược cho nấu ăn, học tập, thể thao và công việc',
    content: [
      'Dùng hẹn giờ cho mọi việc có thời hạn: luộc trứng, 20 phút học bài, plank, bài thuyết trình hay lượt chơi board game.',
      'Đếm ngược dựa trên đồng hồ hệ thống chứ không phải bộ đếm, nên vẫn chính xác ngay cả khi trình duyệt làm chậm tab chạy nền. Thời gian còn lại hiển thị trên tiêu đề tab để bạn theo dõi từ bất cứ đâu.',
      'Với lớp học và cuộc họp, hãy bật toàn màn hình: các chữ số phóng to lấp đầy màn hình, ngồi cuối phòng vẫn đọc rõ.',
    ],
    faq: [
      {
        q: 'Làm sao để hẹn giờ online?',
        a: 'Nhập giờ, phút và giây (hoặc chạm vào mốc có sẵn) rồi nhấn Bắt đầu. Chuông sẽ reo khi về 0.',
      },
      {
        q: 'Hẹn giờ có tiếp tục chạy khi tôi chuyển tab không?',
        a: 'Có. Hẹn giờ dựa trên đồng hồ nên vẫn chính xác khi chạy nền và chuông vẫn reo khi về 0.',
      },
      {
        q: 'Tôi có thể tạm dừng hẹn giờ không?',
        a: 'Có. Nhấn Tạm dừng (hoặc phím cách) và Tiếp tục để chạy lại. Đặt lại sẽ quay về thời gian bạn đã đặt.',
      },
      {
        q: 'Có thể hẹn giờ tối đa bao lâu?',
        a: 'Tối đa 99 giờ 59 phút 59 giây.',
      },
    ],
  },

  timerPreset: {
    metaTitle: 'Hẹn giờ {duration} — Đếm ngược online miễn phí | NoMore5Mins',
    metaDescription:
      'Hẹn giờ {duration} miễn phí có chuông báo. Bắt đầu với một cú nhấp, vẫn đếm khi tab chạy nền và reo to khi về 0. Không cần tải về.',
    h1: 'Hẹn giờ {duration}',
    lead: 'Nhấn Bắt đầu và đồng hồ sẽ đếm ngược {duration}. Chuông sẽ reo khi hết giờ.',
    endsAtTitle: 'Nếu bắt đầu ngay, sẽ kết thúc lúc',
    usesTitle: 'Hẹn giờ {duration} dùng để làm gì',
    otherTimers: 'Hẹn giờ khác',
    bands: {
      short: {
        intro: 'Hẹn giờ {duration} rất hợp cho những lượt tập trung ngắn, khi cứ nhìn đồng hồ lại dễ mất tập trung.',
        uses: ['Bài tập ngắt quãng và plank', 'Đánh răng', 'Pha trà', 'Lượt chơi và câu đố'],
      },
      medium: {
        intro: 'Hẹn giờ {duration} phù hợp để nấu ăn, làm việc nhà nhanh và tập trung ngắn.',
        uses: ['Luộc trứng và nấu mì', 'Dọn dẹp nhanh', 'Thiền ngắn', 'Ngủ trưa ngắn'],
      },
      focus: {
        intro: '{duration} là khoảng thời gian kinh điển cho làm việc sâu, học tập và tập luyện.',
        uses: ['Học bài hoặc làm bài tập', 'Phiên tập trung kiểu Pomodoro', 'Buổi tập hoặc lớp yoga', 'Giới hạn thời gian họp'],
      },
      long: {
        intro: 'Hẹn giờ {duration} giúp bạn với những việc dài: ôn thi, làm bánh, hầm nấu và giới hạn thời gian dùng màn hình.',
        uses: ['Luyện đề thi', 'Nướng bánh và nướng thịt', 'Giới hạn thời gian dùng màn hình', 'Nhắc hết giờ đỗ xe'],
      },
      veryLong: {
        intro: 'Hẹn giờ {duration} hữu ích cho những lần chờ lâu: ủ bột, sạc pin, ướp đồ ăn hoặc nhịn ăn gián đoạn.',
        uses: ['Ủ bột và ướp đồ ăn', 'Khung giờ nhịn ăn', 'Lái xe đường dài hoặc nghỉ giữa ca', 'Giặt giũ và việc nhà'],
      },
    },
    faq: [
      {
        q: 'Làm sao để bắt đầu hẹn giờ {duration}?',
        a: 'Nhấn Bắt đầu. Đếm ngược bắt đầu ngay và chuông sẽ reo sau {duration}.',
      },
      {
        q: 'Hẹn giờ {duration} có chạy khi tôi chuyển tab không?',
        a: 'Có. Hẹn giờ vẫn chính xác khi chạy nền và chuông reo khi về 0. Hãy giữ trình duyệt mở và bật âm lượng.',
      },
      {
        q: 'Tôi có thể tạm dừng hẹn giờ {duration} không?',
        a: 'Có. Nhấn Tạm dừng và Tiếp tục bất cứ khi nào cần. Đặt lại sẽ bắt đầu lại {duration}.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Đồng hồ bấm giờ online — Chính xác, có ghi vòng | NoMore5Mins',
    metaDescription:
      'Đồng hồ bấm giờ online miễn phí, ghi thời gian từng vòng, đánh dấu vòng nhanh/chậm nhất, có chế độ toàn màn hình. Chính xác đến 1/100 giây, có phím tắt.',
    h1: 'Đồng hồ bấm giờ online',
    lead: 'Nhấn Bắt đầu để đo thời gian chính xác đến phần trăm giây. Ghi lại từng vòng và xem vòng nhanh nhất, chậm nhất.',
    lapsTitle: 'Các vòng',
    lapCol: 'Vòng',
    splitCol: 'Thời gian vòng',
    totalCol: 'Tổng',
    steps: [
      'Nhấn Bắt đầu hoặc phím cách.',
      'Nhấn Vòng (hoặc L) để ghi một vòng mà không dừng đồng hồ.',
      'Nhấn Tạm dừng để dừng đồng hồ; nhấn Tiếp tục để chạy tiếp.',
      'Nhấn Đặt lại (hoặc R) để xóa thời gian và tất cả các vòng.',
    ],
    facts: [
      'Chính xác đến 1/100 giây',
      'Không giới hạn số vòng, đánh dấu vòng nhanh nhất và chậm nhất',
      'Vẫn chạy khi tab ở chế độ nền',
      'Phím tắt: Space, L, R, F',
    ],
    contentTitle: 'Đồng hồ bấm giờ chính xác cho thể thao, khoa học và cuộc sống hằng ngày',
    content: [
      'Đồng hồ bấm giờ đo thời gian trôi qua bằng đồng hồ độ phân giải cao của trình duyệt và hiển thị đến phần trăm giây.',
      'Thời gian từng vòng giúp bạn dễ so sánh các lần lặp lại — vòng chạy, lượt bơi, tập thuyết trình hay các bước thí nghiệm. Vòng nhanh nhất hiển thị màu xanh lá, vòng chậm nhất màu đỏ.',
    ],
    faq: [
      {
        q: 'Đồng hồ bấm giờ online chính xác đến mức nào?',
        a: 'Nó dùng đồng hồ độ phân giải cao của trình duyệt và hiển thị đến phần trăm giây. Độ chính xác chỉ phụ thuộc vào thiết bị của bạn.',
      },
      {
        q: 'Làm sao để ghi một vòng?',
        a: 'Nhấn Vòng hoặc phím L khi đồng hồ đang chạy. Mỗi vòng hiển thị thời gian riêng và tổng thời gian.',
      },
      {
        q: 'Đồng hồ bấm giờ có tiếp tục chạy khi tôi chuyển tab không?',
        a: 'Có. Nó dựa trên mốc thời gian, nên khi bạn quay lại, thời gian vẫn chính xác.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Đồng hồ Pomodoro — Hẹn giờ tập trung online | NoMore5Mins',
    metaDescription:
      'Đồng hồ Pomodoro online miễn phí: tập trung 25 phút, nghỉ 5 phút và nghỉ dài sau mỗi 4 phiên. Tùy chỉnh thời lượng, âm thanh, có thống kê hằng ngày.',
    h1: 'Đồng hồ Pomodoro',
    lead: 'Làm việc theo phiên tập trung 25 phút, xen kẽ những quãng nghỉ ngắn. Sau bốn phiên, hãy nghỉ dài hơn.',
    settingsTitle: 'Cài đặt',
    focusLen: 'Tập trung (phút)',
    shortLen: 'Nghỉ ngắn (phút)',
    longLen: 'Nghỉ dài (phút)',
    rounds: 'Số phiên trước khi nghỉ dài',
    autoStart: 'Tự động bắt đầu giai đoạn tiếp theo',
    skip: 'Bỏ qua',
    todayTitle: 'Hôm nay',
    steps: [
      'Chọn một việc duy nhất và nhấn Bắt đầu tập trung.',
      'Làm việc đến khi chuông reo — không email, không điện thoại.',
      'Nghỉ 5 phút. Đứng dậy, uống nước.',
      'Sau bốn phiên, nghỉ 15–30 phút.',
    ],
    facts: [
      'Mặc định 25 / 5 / 15 phút, tùy chỉnh hoàn toàn',
      'Tự động chuyển giai đoạn (tùy chọn)',
      'Đếm số phiên và số phút tập trung mỗi ngày',
      'Cài đặt được lưu trong trình duyệt',
    ],
    contentTitle: 'Phương pháp Pomodoro là gì?',
    content: [
      'Phương pháp Pomodoro là cách quản lý thời gian do Francesco Cirillo phát triển vào cuối những năm 1980. Bạn làm việc tập trung trong từng khoảng 25 phút gọi là “pomodoro”, xen kẽ những quãng nghỉ ngắn.',
      'Các khoảng thời gian ngắn và cố định giúp bạn dễ bắt tay vào việc khó hơn và khó bị xao nhãng hơn. Những quãng nghỉ giúp đầu óc luôn tỉnh táo suốt cả ngày.',
    ],
    faq: [
      {
        q: 'Một Pomodoro dài bao lâu?',
        a: 'Một Pomodoro kinh điển gồm 25 phút tập trung và 5 phút nghỉ. Sau bốn Pomodoro, bạn nghỉ 15–30 phút.',
      },
      {
        q: 'Tôi có thể thay đổi thời lượng không?',
        a: 'Có. Mở Cài đặt để đổi thời lượng tập trung, nghỉ ngắn và nghỉ dài. Các lựa chọn phổ biến khác là 50/10 và 90/20.',
      },
      {
        q: 'Phương pháp Pomodoro có hiệu quả không?',
        a: 'Nhiều sinh viên và người làm công việc trí óc thấy rằng các khoảng thời gian cố định giúp giảm trì hoãn và mệt mỏi tinh thần. Hãy thử trong một tuần và điều chỉnh thời lượng cho phù hợp với bạn.',
      },
    ],
  },

  clock: {
    metaTitle: 'Bây giờ là mấy giờ? — Giờ hiện tại chính xác | NoMore5Mins',
    metaDescription:
      'Giờ và ngày hiện tại chính xác theo múi giờ của bạn, có cả giây. Đồng hồ lớn toàn màn hình, dùng làm đồng hồ để bàn hoặc đầu giường.',
    h1: 'Giờ hiện tại',
    lead: 'Giờ hiện tại theo múi giờ của bạn, cập nhật mỗi giây.',
    zoneLabel: 'Múi giờ của bạn',
    dateLabel: 'Ngày',
    weekLabel: 'Tuần',
    dayOfYear: 'Ngày thứ trong năm',
    format24: 'Định dạng 24 giờ',
    showSeconds: 'Hiện giây',
    facts: [
      'Dùng đồng hồ và múi giờ của thiết bị',
      'Tự động xử lý giờ mùa hè',
      'Chế độ toàn màn hình cho bàn làm việc, TV hoặc đầu giường',
    ],
    contentTitle: 'Đồng hồ chính xác, dễ đọc trên mọi màn hình',
    content: [
      'Trang này hiển thị giờ địa phương hiện tại dựa trên đồng hồ và múi giờ của thiết bị. Hầu hết thiết bị tự đồng bộ giờ qua internet, nên thời gian thường chính xác đến dưới một giây.',
      'Nhấn Toàn màn hình để biến điện thoại, máy tính bảng, laptop hay TV thành một chiếc đồng hồ lớn, không bị xao nhãng.',
    ],
    faq: [
      {
        q: 'Đồng hồ này chính xác đến mức nào?',
        a: 'Nó hiển thị đồng hồ của thiết bị, vốn thường được đồng bộ với máy chủ thời gian trên internet và chính xác đến dưới một giây.',
      },
      {
        q: 'Tôi có thể dùng làm đồng hồ để bàn hoặc đầu giường không?',
        a: 'Có. Nhấn Toàn màn hình. Trên thiết bị hỗ trợ, màn hình sẽ luôn sáng khi đồng hồ đang mở.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'Giờ thế giới — Giờ hiện tại các thành phố | NoMore5Mins',
    metaDescription:
      'Xem giờ hiện tại ở New York, London, Tokyo, Dubai, Sydney và nhiều nơi khác. Tự động tính chênh lệch múi giờ, ngày/đêm và giờ mùa hè.',
    h1: 'Giờ thế giới',
    lead: 'Giờ địa phương hiện tại ở các thành phố lớn, kèm chênh lệch so với giờ của bạn.',
    search: 'Tìm thành phố',
    addTitle: 'Thêm thành phố',
    facts: [
      'Tự động xử lý giờ mùa hè',
      'Hiển thị chênh lệch so với giờ của bạn',
      'Danh sách thành phố được lưu trong trình duyệt',
    ],
    contentTitle: 'Lên lịch gọi điện và họp qua các múi giờ',
    content: [
      'Giờ thế giới hiển thị giờ hiện tại của từng thành phố dựa trên cơ sở dữ liệu múi giờ chính thức có sẵn trong trình duyệt, nên các thay đổi giờ mùa hè được áp dụng tự động.',
      'Mỗi thẻ cho biết nơi đó đang là ngày hay đêm và sớm hơn hay muộn hơn bạn bao nhiêu giờ — tiện cho họp hành, du lịch và gọi điện cho người thân ở nước ngoài.',
    ],
    faq: [
      {
        q: 'Giờ thế giới có tự động xử lý giờ mùa hè không?',
        a: 'Có. Cơ sở dữ liệu múi giờ của trình duyệt tự động áp dụng quy tắc giờ mùa hè cho từng thành phố.',
      },
      {
        q: 'Tôi có thể thêm thành phố của mình không?',
        a: 'Có. Dùng “Thêm thành phố”. Danh sách của bạn được lưu trong trình duyệt này.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Tính giờ ngủ — Nên ngủ và thức dậy lúc mấy giờ | NoMore5Mins',
    metaDescription:
      'Máy tính giờ ngủ miễn phí theo chu kỳ 90 phút. Tìm giờ đi ngủ tốt nhất cho giờ thức dậy của bạn, hoặc nên dậy lúc mấy giờ nếu đi ngủ ngay.',
    h1: 'Máy tính giờ ngủ',
    lead: 'Thức dậy vào cuối chu kỳ ngủ giúp bạn bớt uể oải. Chọn giờ thức dậy hoặc đi ngủ ngay bây giờ.',
    modeWake: 'Tôi muốn thức dậy lúc',
    modeNow: 'Tôi đi ngủ ngay bây giờ',
    calculate: 'Tính',
    fallAsleep: 'Số phút để chìm vào giấc ngủ',
    bedtimesTitle: 'Hãy đi ngủ vào một trong các giờ sau',
    waketimesTitle: 'Hãy đặt báo thức vào một trong các giờ sau',
    steps: [
      'Chọn giờ thức dậy, hoặc chọn “Tôi đi ngủ ngay bây giờ”.',
      'Điều chỉnh thời gian bạn thường cần để ngủ thiếp đi (thường là 15 phút).',
      'Chọn một giờ trong danh sách. 5–6 chu kỳ (7,5–9 giờ) là lý tưởng với hầu hết người trưởng thành.',
    ],
    facts: [
      'Một chu kỳ ngủ kéo dài khoảng 90 phút',
      'Người lớn cần ngủ 7–9 giờ, tức 5–6 chu kỳ',
      'Thường mất khoảng 10–20 phút để ngủ thiếp đi',
    ],
    contentTitle: 'Chu kỳ giấc ngủ hoạt động như thế nào',
    content: [
      'Trong đêm, bạn lần lượt trải qua giấc ngủ nông, ngủ sâu và ngủ REM theo các chu kỳ khoảng 90 phút. Bị đánh thức giữa lúc ngủ sâu khiến bạn uể oải; thức dậy vào cuối chu kỳ thì dễ chịu hơn nhiều.',
      'Công cụ tính lùi (hoặc tính tới) theo từng bước 90 phút và cộng thêm thời gian bạn cần để chìm vào giấc ngủ. Mỗi người mỗi khác, nên hãy coi kết quả là điểm khởi đầu.',
      'Công cụ này chỉ mang tính tham khảo, không phải lời khuyên y tế. Nếu bạn thường xuyên khó ngủ, hãy trao đổi với bác sĩ.',
    ],
    faq: [
      {
        q: 'Một chu kỳ ngủ dài bao lâu?',
        a: 'Trung bình khoảng 90 phút, nhưng dao động từ 70 đến 120 phút tùy người và thay đổi trong suốt đêm.',
      },
      {
        q: 'Tôi cần bao nhiêu chu kỳ ngủ?',
        a: 'Hầu hết người trưởng thành cảm thấy khỏe nhất sau 5 hoặc 6 chu kỳ, tức 7,5 đến 9 giờ ngủ.',
      },
      {
        q: 'Muốn dậy lúc 7:00 thì nên đi ngủ lúc mấy giờ?',
        a: 'Với 5 chu kỳ, hãy đi ngủ lúc khoảng 23:15; với 6 chu kỳ, khoảng 21:45. Cả hai đều đã tính 15 phút để chìm vào giấc ngủ.',
      },
    ],
  },

  products: {
    title: 'Ngủ ngon hơn, thức dậy dễ hơn',
    titleFocus: 'Đồ dùng giúp tập trung sâu',
    subtitle: 'Những món hữu ích chúng tôi gợi ý cho giấc ngủ, buổi sáng và sự tập trung.',
    cta: 'Xem trên Amazon',
    disclosure: 'Liên kết tiếp thị: chúng tôi có thể nhận hoa hồng từ các đơn hàng đủ điều kiện mà bạn không phải trả thêm chi phí.',
    items: {
      sunrise: { name: 'Đồng hồ báo thức ánh sáng bình minh', desc: 'Đèn sáng dần trước giờ báo thức, như ánh bình minh tự nhiên.', query: 'đồng hồ báo thức đèn bình minh' },
      mask: { name: 'Bịt mắt ngủ lụa', desc: 'Chặn sáng hoàn toàn để ngủ sâu hơn, kể cả khi trời đã sáng.', query: 'bịt mắt ngủ lụa' },
      noise: { name: 'Máy tạo tiếng ồn trắng', desc: 'Che tiếng xe cộ và tiếng ngáy bằng âm thanh đều đặn, êm dịu.', query: 'máy tạo tiếng ồn trắng' },
      pillow: { name: 'Gối công thái học', desc: 'Mút hoạt tính nâng đỡ cổ và vai.', query: 'gối công thái học memory foam' },
      blanket: { name: 'Chăn trọng lực', desc: 'Áp lực nhẹ nhàng, đều khắp mà nhiều người thấy thư giãn.', query: 'chăn trọng lực' },
      loudAlarm: { name: 'Đồng hồ báo thức siêu to', desc: 'Chuông báo to kèm bộ rung giường cho người ngủ say.', query: 'đồng hồ báo thức kêu to rung giường' },
      headphones: { name: 'Tai nghe chống ồn', desc: 'Dập tắt tiếng ồn văn phòng mở hay quán cà phê để bạn tập trung.', query: 'tai nghe chống ồn chủ động' },
      cubeTimer: { name: 'Đồng hồ hẹn giờ Pomodoro khối lập phương', desc: 'Lật để bắt đầu hẹn giờ 5, 15, 25 hoặc 45 phút — không cần điện thoại.', query: 'đồng hồ hẹn giờ pomodoro lập phương' },
      glasses: { name: 'Kính chống ánh sáng xanh', desc: 'Giảm chói và mỏi mắt khi nhìn màn hình lâu.', query: 'kính chống ánh sáng xanh' },
      deskLamp: { name: 'Đèn bàn LED', desc: 'Ánh sáng không nhấp nháy, điều chỉnh được, cho học tập và làm việc.', query: 'đèn bàn led chống cận điều chỉnh độ sáng' },
    },
  },

  langBanner: {
    text: 'Trang này cũng có bằng {language}.',
    switch: 'Chuyển',
    dismiss: 'Không, cảm ơn',
  },

  footer: {
    tagline: 'Công cụ thời gian miễn phí, dùng trên mọi trình duyệt.',
    toolsTitle: 'Công cụ',
    popularTitle: 'Phổ biến',
    siteTitle: 'NoMore5Mins',
    about: 'Giới thiệu',
    blog: 'Blog (tiếng Anh)',
    contact: 'Liên hệ',
    privacy: 'Chính sách bảo mật',
    terms: 'Điều khoản dịch vụ',
    rights: 'Bảo lưu mọi quyền.',
    languages: 'Ngôn ngữ',
  },
};

export default vi;
