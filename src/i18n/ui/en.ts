/**
 * English UI dictionary — the source of truth for every other language.
 *
 * Rules for translations (src/i18n/ui/<code>.ts):
 *  - Keep every key. Keep arrays the same length.
 *  - Keep {placeholders} exactly as written; they are replaced at runtime.
 *  - Keep the brand name "NoMore5Mins" untranslated.
 */
const en = {
  meta: {
    siteTagline: 'Free online alarm clock, timer & stopwatch',
    ogAlt: 'NoMore5Mins — free online alarm clock, timer and stopwatch',
  },

  nav: {
    alarm: 'Alarm',
    timer: 'Timer',
    stopwatch: 'Stopwatch',
    pomodoro: 'Focus',
    clock: 'Clock',
    worldClock: 'World clock',
    sleep: 'Sleep calculator',
    blog: 'Blog',
    menu: 'Menu',
    close: 'Close',
    language: 'Language',
    theme: 'Switch light / dark theme',
    skip: 'Skip to content',
    home: 'Home',
    allTools: 'All tools',
  },

  /** Full tool names, used in headings, breadcrumbs and structured data. */
  tools: {
    alarm: 'Online Alarm Clock',
    timer: 'Online Timer',
    stopwatch: 'Online Stopwatch',
    pomodoro: 'Pomodoro Timer',
    clock: 'Current Time',
    worldClock: 'World Clock',
    sleep: 'Sleep Calculator',
  },

  /** One-line tool descriptions for cards and menus. */
  toolBlurbs: {
    alarm: 'Wake up on time with loud or gentle sounds. Snooze is limited.',
    timer: 'Count down any duration and get a loud alert at zero.',
    stopwatch: 'Measure time to the hundredth of a second, with laps.',
    pomodoro: '25-minute focus sessions with automatic breaks.',
    clock: 'The exact time and date, big enough to read across the room.',
    worldClock: 'Current time in major cities and time zones.',
    sleep: 'Find the best time to sleep or wake up using 90-minute cycles.',
  },

  common: {
    start: 'Start',
    pause: 'Pause',
    resume: 'Resume',
    reset: 'Reset',
    lap: 'Lap',
    stop: 'Stop',
    dismiss: 'Dismiss',
    delete: 'Delete',
    add: 'Add',
    fullscreen: 'Full screen',
    sound: 'Sound',
    volume: 'Volume',
    testSound: 'Test sound',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    updated: 'Updated {date}',
    faqTitle: 'Frequently asked questions',
    howTitle: 'How to use it',
    keyFacts: 'Key facts',
    shortcuts: 'Keyboard shortcuts',
    related: 'Related tools',
    free: 'Free · No sign-up · Works offline once loaded',
    keepOpen: 'Keep this tab open. Your device volume must be on.',
    share: 'Share',
    copied: 'Link copied',
  },

  sounds: {
    'classic-ring': 'Classic ring',
    'digital-beep': 'Digital beep',
    'gentle-chime': 'Gentle chime',
    'morning-birds': 'Morning birds',
    'rooster-crow': 'Rooster',
    'nuclear-alert': 'Siren (very loud)',
    'piano-melody': 'Piano',
    'ocean-waves': 'Ocean waves',
  },

  /** Strings used by browser-side scripts. Only {placeholders}, no HTML. */
  client: {
    ready: 'Ready',
    running: 'Running',
    paused: 'Paused',
    timesUp: "Time's up!",
    timerDone: 'Timer finished',
    alarmTitle: 'Alarm',
    wakeUp: 'Wake up!',
    ringsIn: 'Rings in {duration}',
    noAlarms: 'No alarms set',
    snooze: 'Snooze 5 min',
    snoozesLeft: '{n} snoozes left',
    snoozeLimit: 'No more 5 minutes. Time to get up!',
    enableSound: 'Tap here to turn on the alarm sound',
    alarmSet: 'Alarm set for {time}',
    lapN: 'Lap {n}',
    fastest: 'Fastest',
    slowest: 'Slowest',
    focus: 'Focus',
    shortBreak: 'Short break',
    longBreak: 'Long break',
    sessionOf: 'Session {n} of {total}',
    focusedToday: '{n} min focused today',
    startFocus: 'Start focus',
    startBreak: 'Start break',
    breakOver: 'Break is over — back to focus.',
    focusOver: 'Focus session done — take a break.',
    yourTime: 'Your time',
    day: 'Day',
    night: 'Night',
    today: 'Today',
    tomorrow: 'Tomorrow',
    yesterday: 'Yesterday',
    hoursAhead: '{n} h ahead',
    hoursBehind: '{n} h behind',
    sameTime: 'Same time',
    remove: 'Remove',
    searchNoResults: 'No city found',
    cycles: '{n} cycles',
    sleepHours: '{h} of sleep',
    setAlarmAt: 'Set alarm',
    best: 'Best',
  },

  home: {
    metaTitle: 'NoMore5Mins — Free Online Alarm Clock, Timer & Stopwatch',
    metaDescription:
      'Free online alarm clock, countdown timer, stopwatch, Pomodoro timer and world clock. Works in any browser, no sign-up, no download.',
    h1: 'Free online alarm clock, timer & stopwatch',
    lead: 'Simple time tools that work instantly in your browser. No app, no account, no “just 5 more minutes”.',
    quickTitle: 'Set a quick alarm',
    quickCta: 'Set alarm',
    quickHint: 'Opens the alarm clock with your time already set.',
    toolsTitle: 'All tools',
    popularAlarms: 'Popular alarm times',
    popularTimers: 'Popular timers',
    whyTitle: 'Why people use NoMore5Mins',
    why: [
      { title: 'Instant', text: 'Pages load in under a second and the tools start with one tap.' },
      { title: 'Private', text: 'Your alarms and settings stay in your browser. Nothing to sign up for.' },
      { title: 'Everywhere', text: 'Phone, tablet, laptop or TV browser — in 15 languages.' },
      { title: 'Honest snooze', text: 'Snooze is capped at three times. That is the whole point.' },
    ],
    faq: [
      {
        q: 'Is NoMore5Mins free?',
        a: 'Yes. Every tool is free to use without an account. The site is supported by ads and affiliate links, which never block the tools.',
      },
      {
        q: 'Do I need to install anything?',
        a: 'No. Everything runs in your web browser. You can optionally add the site to your home screen to use it like an app.',
      },
      {
        q: 'Will the alarm ring if I close the tab?',
        a: 'No. Browser alarms only ring while the page stays open. You can switch to other tabs, but keep the browser open, the device awake and the volume up.',
      },
      {
        q: 'Which devices are supported?',
        a: 'Any modern browser: Chrome, Safari, Firefox, Edge and Samsung Internet on Windows, macOS, Linux, Android, iPhone and iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Online Alarm Clock — Set a Free Alarm | NoMore5Mins',
    metaDescription:
      'Free online alarm clock: set an alarm in seconds, choose from 8 sounds, add labels and snooze (up to 3 times). No download, no sign-up.',
    h1: 'Online alarm clock',
    lead: 'Pick a time, choose a sound and press Set alarm. The alarm rings in this tab at the exact minute.',
    setTitle: 'New alarm',
    timeLabel: 'Alarm time',
    labelLabel: 'Label (optional)',
    labelPlaceholder: 'Wake up',
    setCta: 'Set alarm',
    quickTitle: 'Quick nap',
    inMinutes: '+{n} min',
    listTitle: 'Your alarms',
    steps: [
      'Choose the alarm time with the time picker, or tap a quick nap button.',
      'Pick a sound and volume, then press “Test sound” to hear it.',
      'Press “Set alarm”. The countdown shows how long until it rings.',
      'Keep the tab open and your device awake. When it rings, press Stop or Snooze.',
    ],
    facts: [
      '8 alarm sounds, from gentle chime to siren',
      'Multiple alarms with labels',
      'Snooze limited to 3 × 5 minutes',
      'Alarms are saved in your browser and survive a page refresh',
      'Uses a screen wake lock when supported so your screen stays on',
    ],
    contentTitle: 'A browser alarm clock that actually gets you up',
    content: [
      'NoMore5Mins is a free online alarm clock that runs entirely in your browser. It is useful when your phone is charging in another room, when you work on a laptop and need a reminder, or when you want a big, readable clock on a spare screen.',
      'The alarm checks the exact time every second and keeps working in a background tab. When it rings, the sound fades in, the tab title flashes and — if you allowed it — a system notification appears.',
      'Snoozing is allowed, but only three times. After the third snooze the button disappears. That is the idea behind the name: no more “just 5 more minutes”.',
    ],
    faq: [
      {
        q: 'How do I set an online alarm?',
        a: 'Choose a time in the time picker, pick a sound and press “Set alarm”. Keep the page open; the alarm rings at the chosen minute.',
      },
      {
        q: 'Will the alarm ring if my computer goes to sleep?',
        a: 'No. A sleeping device pauses the browser. Plug your laptop in and disable sleep, or use the full-screen clock; NoMore5Mins requests a screen wake lock where the browser supports it.',
      },
      {
        q: 'Can I set more than one alarm?',
        a: 'Yes. Add as many alarms as you like. Each one appears in “Your alarms” and can be deleted individually.',
      },
      {
        q: 'Why is there no sound on my phone?',
        a: 'Mobile browsers block audio until you touch the page. If you see the “turn on the alarm sound” bar, tap it once. Also check that silent mode is off.',
      },
      {
        q: 'How does snooze work?',
        a: 'Snooze delays the alarm by 5 minutes. You can snooze up to three times, then the alarm insists you get up.',
      },
      {
        q: 'Are my alarms saved?',
        a: 'Yes, in your browser’s local storage on this device. They are never uploaded anywhere.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Set an Alarm for {time} — Free Online Alarm | NoMore5Mins',
    metaDescription:
      'Set an alarm for {time} in one click. Free online alarm clock with 8 sounds and snooze. Also see the best bedtimes for a {time} wake-up.',
    h1: 'Set an alarm for {time}',
    lead: 'This alarm is ready for {time}. Choose a sound and press Set alarm — then keep this tab open.',
    bedtimeTitle: 'Best bedtimes for a {time} alarm',
    bedtimeLead:
      'Sleep runs in cycles of about 90 minutes. Waking at the end of a cycle feels easier, so these bedtimes include 15 minutes to fall asleep.',
    cycleLine: '{n} cycles · {hours} of sleep',
    recommended: 'Recommended',
    usesTitle: 'Common reasons to set a {time} alarm',
    otherTimes: 'Other alarm times',
    bands: {
      early: {
        intro: '{time} is an early start. It suits gym sessions, early shifts, flights and quiet time before everyone else wakes up.',
        uses: ['Morning workout or run', 'Early work shift', 'Catching an early flight or train', 'Meditation or study before the day starts'],
      },
      morning: {
        intro: '{time} is one of the most common wake-up times for school and office days.',
        uses: ['School or university', 'Office workday', 'Morning commute', 'Getting children ready'],
      },
      lateMorning: {
        intro: '{time} is a relaxed wake-up time for weekends, late shifts and people who work from home.',
        uses: ['Weekend lie-in with a limit', 'After a night shift', 'Remote-work start', 'Late-morning appointment'],
      },
      afternoon: {
        intro: 'An alarm at {time} is usually a reminder: the end of a nap, a meeting, a pickup or a medication.',
        uses: ['End of a power nap', 'Meeting or call reminder', 'School pickup', 'Medication reminder'],
      },
      evening: {
        intro: 'An alarm at {time} helps with evening routines: cooking, workouts, calls and online classes.',
        uses: ['Dinner or oven reminder', 'Evening workout', 'Call with another time zone', 'Online class or live stream'],
      },
      night: {
        intro: 'An alarm at {time} works well as a bedtime reminder so you actually get enough sleep.',
        uses: ['Bedtime reminder', 'Screen-off time', 'Late study session end', 'Night-shift break'],
      },
    },
    faq: [
      {
        q: 'How do I set an alarm for {time}?',
        a: 'This page is already set to {time}. Press “Set alarm”, keep the tab open and your device awake. It will ring at {time}.',
      },
      {
        q: 'What time should I go to bed to wake up at {time}?',
        a: 'For five full sleep cycles (7.5 hours) go to bed around {bedtime}, which includes about 15 minutes to fall asleep.',
      },
      {
        q: 'Will the {time} alarm ring tomorrow if the time has passed today?',
        a: 'Yes. If {time} has already passed today, the alarm is scheduled for {time} tomorrow. The countdown shows exactly when it will ring.',
      },
      {
        q: 'Can I change the alarm sound?',
        a: 'Yes. Choose any of the 8 sounds and set the volume before pressing “Set alarm”. Use “Test sound” to preview it.',
      },
    ],
  },

  timer: {
    metaTitle: 'Online Timer — Free Countdown Timer with Alarm | NoMore5Mins',
    metaDescription:
      'Free online countdown timer with a loud alarm. Set hours, minutes and seconds or pick a preset. Full screen, works in background tabs.',
    h1: 'Online timer',
    lead: 'Set the hours, minutes and seconds, then press Start. You will hear an alarm when the countdown reaches zero.',
    presetsTitle: 'Presets',
    steps: [
      'Enter hours, minutes and seconds, or tap a preset.',
      'Choose an alarm sound if you like.',
      'Press Start (or the space bar). Pause and resume at any time.',
      'When the timer reaches zero the alarm plays until you dismiss it.',
    ],
    facts: [
      'Counts down up to 99 hours',
      'Keeps accurate time in background tabs',
      'Shows the remaining time in the browser tab title',
      'Full-screen mode for classrooms and presentations',
    ],
    contentTitle: 'A countdown timer for cooking, study, sport and work',
    content: [
      'Use the timer for anything with a deadline: boiling eggs, a 20-minute study block, a plank, a presentation slot or a board-game turn.',
      'The countdown is based on the system clock, not on a counter, so it stays accurate even if the browser slows down a background tab. The remaining time is shown in the tab title so you can keep an eye on it from anywhere.',
      'For classrooms and meetings, switch to full screen: the digits scale to fill the display and stay readable from the back of the room.',
    ],
    faq: [
      {
        q: 'How do I set a timer online?',
        a: 'Type the hours, minutes and seconds (or tap a preset) and press Start. The alarm plays when it reaches zero.',
      },
      {
        q: 'Does the timer keep running in another tab?',
        a: 'Yes. It is based on the clock, so it stays accurate in a background tab and the alarm still plays at zero.',
      },
      {
        q: 'Can I pause the timer?',
        a: 'Yes. Press Pause (or the space bar) and Resume to continue. Reset returns to the time you set.',
      },
      {
        q: 'What is the longest timer I can set?',
        a: 'Up to 99 hours, 59 minutes and 59 seconds.',
      },
    ],
  },

  timerPreset: {
    metaTitle: '{duration} Timer — Free Online Countdown | NoMore5Mins',
    metaDescription:
      'Free {duration} timer with alarm. Starts with one click, keeps counting in background tabs and rings loudly at zero. No download.',
    h1: '{duration} Timer',
    lead: 'Press Start to begin the {duration} countdown. You will hear an alarm when the time is up.',
    endsAtTitle: 'If you start now, it ends at',
    usesTitle: 'What a {duration} timer is good for',
    otherTimers: 'Other timers',
    bands: {
      short: {
        intro: 'A {duration} timer is perfect for short, focused bursts where watching the clock is distracting.',
        uses: ['Exercise intervals and planks', 'Brushing teeth', 'Tea steeping', 'Game turns and quizzes'],
      },
      medium: {
        intro: 'A {duration} timer fits cooking, quick chores and short focus sessions.',
        uses: ['Boiling eggs and pasta', 'Tidy-up sprints', 'Short meditation', 'Power nap'],
      },
      focus: {
        intro: 'A {duration} timer is a classic length for deep work, study blocks and workouts.',
        uses: ['Study or homework session', 'Pomodoro-style focus block', 'Workout or yoga class', 'Meeting time-box'],
      },
      long: {
        intro: 'A {duration} timer helps with long tasks: exams, baking, slow cooking and screen-time limits.',
        uses: ['Exam practice', 'Baking and roasting', 'Screen-time limit', 'Parking meter reminder'],
      },
      veryLong: {
        intro: 'A {duration} timer is useful for long waits: dough proofing, charging, marinating or fasting windows.',
        uses: ['Dough proofing and marinating', 'Fasting window', 'Long drive or shift break', 'Laundry and chores'],
      },
    },
    faq: [
      {
        q: 'How do I start a {duration} timer?',
        a: 'Press Start. The countdown begins immediately and an alarm plays when the {duration} countdown ends.',
      },
      {
        q: 'Will the {duration} timer work if I switch tabs?',
        a: 'Yes. It keeps accurate time in the background and the alarm plays at zero. Keep the browser open and the volume on.',
      },
      {
        q: 'Can I pause the {duration} timer?',
        a: 'Yes. Press Pause and Resume whenever you need to. Reset starts the {duration} countdown again.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Online Stopwatch — Free, Accurate, with Laps | NoMore5Mins',
    metaDescription:
      'Free online stopwatch with lap times, fastest/slowest lap highlight and full-screen mode. Accurate to 1/100 s. Keyboard shortcuts included.',
    h1: 'Online stopwatch',
    lead: 'Press Start to measure time to the hundredth of a second. Record laps and see your fastest and slowest.',
    lapsTitle: 'Laps',
    lapCol: 'Lap',
    splitCol: 'Lap time',
    totalCol: 'Total',
    steps: [
      'Press Start or the space bar.',
      'Press Lap (or L) to record a lap without stopping.',
      'Press Pause to stop the clock; press Resume to continue.',
      'Press Reset (or R) to clear the time and all laps.',
    ],
    facts: [
      'Accuracy of 1/100 second',
      'Unlimited laps with fastest and slowest highlighted',
      'Keeps running in background tabs',
      'Keyboard shortcuts: Space, L, R, F',
    ],
    contentTitle: 'An accurate stopwatch for sport, science and everyday timing',
    content: [
      'The stopwatch measures elapsed time using the browser’s high-resolution clock and displays it to the hundredth of a second.',
      'Lap times make it easy to compare repetitions — running laps, swimming lengths, speech rehearsals or lab steps. The fastest lap is shown in green and the slowest in red.',
    ],
    faq: [
      {
        q: 'How accurate is the online stopwatch?',
        a: 'It uses the browser’s high-resolution clock and displays hundredths of a second. Accuracy is limited only by your device.',
      },
      {
        q: 'How do I record a lap?',
        a: 'Press Lap or the L key while the stopwatch is running. Each lap shows its own time and the total.',
      },
      {
        q: 'Does the stopwatch keep running if I switch tabs?',
        a: 'Yes. It is based on timestamps, so the time is correct when you return.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Pomodoro Timer — Free Online Focus Timer | NoMore5Mins',
    metaDescription:
      'Free online Pomodoro timer: 25-minute focus sessions, 5-minute breaks and a long break every 4 rounds. Custom lengths, sounds and daily stats.',
    h1: 'Pomodoro timer',
    lead: 'Work in 25-minute focus sessions with short breaks in between. After four sessions, take a longer break.',
    settingsTitle: 'Settings',
    focusLen: 'Focus (min)',
    shortLen: 'Short break (min)',
    longLen: 'Long break (min)',
    rounds: 'Sessions before long break',
    autoStart: 'Start next phase automatically',
    skip: 'Skip',
    todayTitle: 'Today',
    steps: [
      'Pick one task and press Start focus.',
      'Work until the bell rings — no email, no phone.',
      'Take the 5-minute break. Stand up, drink water.',
      'After four sessions take a 15–30 minute break.',
    ],
    facts: [
      'Default 25 / 5 / 15 minutes, fully adjustable',
      'Automatic phase switching (optional)',
      'Daily count of sessions and focus minutes',
      'Settings saved in your browser',
    ],
    contentTitle: 'What is the Pomodoro Technique?',
    content: [
      'The Pomodoro Technique is a time-management method developed by Francesco Cirillo in the late 1980s. You work in focused 25-minute intervals called “pomodoros”, separated by short breaks.',
      'Short, fixed intervals make it easier to start difficult work and harder to drift into distractions. Breaks keep your attention fresh across the day.',
    ],
    faq: [
      {
        q: 'How long is a Pomodoro?',
        a: 'A classic Pomodoro is 25 minutes of focus followed by a 5-minute break. After four Pomodoros you take a 15–30 minute break.',
      },
      {
        q: 'Can I change the lengths?',
        a: 'Yes. Open Settings to change focus, short break and long break lengths. Popular alternatives are 50/10 and 90/20.',
      },
      {
        q: 'Is the Pomodoro Technique effective?',
        a: 'Many students and knowledge workers find that fixed intervals reduce procrastination and mental fatigue. Try it for a week and adjust the lengths to suit you.',
      },
    ],
  },

  clock: {
    metaTitle: 'What Time Is It Now? — Exact Current Time | NoMore5Mins',
    metaDescription:
      'The exact current time and date for your time zone, with seconds. Large full-screen clock you can use as a desk or bedside clock.',
    h1: 'Current time',
    lead: 'The current time in your time zone, updated every second.',
    zoneLabel: 'Your time zone',
    dateLabel: 'Date',
    weekLabel: 'Week',
    dayOfYear: 'Day of year',
    format24: '24-hour format',
    showSeconds: 'Show seconds',
    facts: [
      'Uses your device clock and time zone',
      'Daylight saving time handled automatically',
      'Full-screen mode for desk, TV or bedside',
    ],
    contentTitle: 'An accurate, readable clock for any screen',
    content: [
      'This page shows the current local time based on your device clock and time zone. Most devices synchronise their clock over the internet, so the time is typically accurate to within a fraction of a second.',
      'Press Full screen to turn any phone, tablet, laptop or TV into a large, distraction-free clock.',
    ],
    faq: [
      {
        q: 'How accurate is this clock?',
        a: 'It shows your device’s clock, which is normally synchronised with internet time servers and accurate to within a fraction of a second.',
      },
      {
        q: 'Can I use it as a desk or bedside clock?',
        a: 'Yes. Press Full screen. Where supported, the screen stays on while the clock is open.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'World Clock — Current Time in Cities Worldwide | NoMore5Mins',
    metaDescription:
      'See the current time in New York, London, Tokyo, Dubai, Sydney and more. Time differences, day/night and DST handled automatically.',
    h1: 'World clock',
    lead: 'Current local time in major cities, with the difference from your own time.',
    search: 'Search city',
    addTitle: 'Add a city',
    facts: [
      'Daylight saving time handled automatically',
      'Shows the difference from your time',
      'Your city list is saved in your browser',
    ],
    contentTitle: 'Plan calls and meetings across time zones',
    content: [
      'The world clock shows the current time in each city using the official time-zone database built into your browser, so daylight-saving changes are applied automatically.',
      'Each card shows whether it is day or night and how many hours ahead or behind that city is compared with you — handy for meetings, travel and calling family abroad.',
    ],
    faq: [
      {
        q: 'Does the world clock handle daylight saving time?',
        a: 'Yes. Your browser’s time-zone database applies daylight saving rules for each city automatically.',
      },
      {
        q: 'Can I add my own cities?',
        a: 'Yes. Use “Add a city”. Your list is saved in this browser.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Sleep Calculator — When to Go to Bed & Wake Up | NoMore5Mins',
    metaDescription:
      'Free sleep calculator based on 90-minute sleep cycles. Find the best bedtime for your wake-up time, or when to wake up if you go to bed now.',
    h1: 'Sleep calculator',
    lead: 'Waking up at the end of a sleep cycle helps you feel less groggy. Pick a wake-up time or go to bed now.',
    modeWake: 'I want to wake up at',
    modeNow: 'I’m going to bed now',
    calculate: 'Calculate',
    fallAsleep: 'Minutes to fall asleep',
    bedtimesTitle: 'Go to bed at one of these times',
    waketimesTitle: 'Set your alarm for one of these times',
    steps: [
      'Choose your wake-up time, or choose “I’m going to bed now”.',
      'Adjust how long it usually takes you to fall asleep (15 minutes is typical).',
      'Pick a time from the list. 5–6 cycles (7.5–9 hours) is ideal for most adults.',
    ],
    facts: [
      'One sleep cycle lasts about 90 minutes',
      'Adults need 7–9 hours, i.e. 5–6 cycles',
      'Falling asleep takes about 10–20 minutes',
    ],
    contentTitle: 'How sleep cycles work',
    content: [
      'During the night you move through light sleep, deep sleep and REM sleep in cycles of roughly 90 minutes. Waking up in deep sleep leaves you groggy; waking at the end of a cycle feels much easier.',
      'The calculator counts back (or forward) in 90-minute steps and adds the time you need to fall asleep. Everyone is slightly different, so treat the results as a starting point.',
      'This tool is for general information and is not medical advice. If you regularly struggle with sleep, talk to a doctor.',
    ],
    faq: [
      {
        q: 'How long is a sleep cycle?',
        a: 'About 90 minutes on average, although it varies between 70 and 120 minutes from person to person and through the night.',
      },
      {
        q: 'How many sleep cycles do I need?',
        a: 'Most adults feel best after 5 or 6 cycles, which is 7.5 to 9 hours of sleep.',
      },
      {
        q: 'What time should I go to bed to wake up at 7 AM?',
        a: 'For 5 cycles go to bed at about 11:15 PM; for 6 cycles at about 9:45 PM. Both include 15 minutes to fall asleep.',
      },
    ],
  },

  products: {
    title: 'Sleep better, wake up easier',
    titleFocus: 'Gear for deep focus',
    subtitle: 'Useful things we recommend around sleep, mornings and focus.',
    cta: 'View on Amazon',
    disclosure: 'Affiliate links: we may earn a commission from qualifying purchases at no extra cost to you.',
    items: {
      sunrise: { name: 'Sunrise alarm clock', desc: 'Light that brightens gradually before your alarm, like a natural sunrise.', query: 'sunrise alarm clock' },
      mask: { name: 'Silk sleep mask', desc: 'Blocks light completely for deeper sleep, even after sunrise.', query: 'silk sleep mask' },
      noise: { name: 'White noise machine', desc: 'Masks traffic and snoring with steady, soothing sound.', query: 'white noise machine' },
      pillow: { name: 'Ergonomic pillow', desc: 'Memory-foam support for neck and shoulders.', query: 'ergonomic memory foam pillow' },
      blanket: { name: 'Weighted blanket', desc: 'Even, gentle pressure that many people find calming.', query: 'weighted blanket' },
      loudAlarm: { name: 'Extra-loud alarm clock', desc: 'Loud alarm with bed shaker for heavy sleepers.', query: 'loud alarm clock bed shaker' },
      headphones: { name: 'Noise-cancelling headphones', desc: 'Silence the open office or café while you focus.', query: 'noise cancelling headphones' },
      cubeTimer: { name: 'Pomodoro cube timer', desc: 'Flip to start a 5, 15, 25 or 45-minute timer — no phone needed.', query: 'pomodoro cube timer' },
      glasses: { name: 'Blue-light glasses', desc: 'Reduce glare and eye strain during long screen sessions.', query: 'blue light blocking glasses' },
      deskLamp: { name: 'LED desk lamp', desc: 'Flicker-free adjustable light for study and work.', query: 'led desk lamp dimmable' },
    },
  },

  langBanner: {
    text: 'This page is also available in {language}.',
    switch: 'Switch',
    dismiss: 'No thanks',
  },

  footer: {
    tagline: 'Free time tools that work in any browser.',
    toolsTitle: 'Tools',
    popularTitle: 'Popular',
    siteTitle: 'NoMore5Mins',
    about: 'About',
    blog: 'Blog (English)',
    contact: 'Contact',
    privacy: 'Privacy policy',
    terms: 'Terms of service',
    rights: 'All rights reserved.',
    languages: 'Languages',
  },
};

export default en;

type Widen<T> = T extends string
  ? string
  : T extends readonly (infer U)[]
    ? Widen<U>[]
    : T extends object
      ? { [K in keyof T]: Widen<T[K]> }
      : T;

export type Dict = Widen<typeof en>;
