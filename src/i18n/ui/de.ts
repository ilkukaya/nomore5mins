import type { Dict } from './en';

const de: Dict = {
  meta: {
    siteTagline: 'Kostenloser Online-Wecker, Timer & Stoppuhr',
    ogAlt: 'NoMore5Mins — kostenloser Online-Wecker, Timer und Stoppuhr',
  },

  nav: {
    alarm: 'Wecker',
    timer: 'Timer',
    stopwatch: 'Stoppuhr',
    pomodoro: 'Fokus',
    clock: 'Uhrzeit',
    worldClock: 'Weltuhr',
    sleep: 'Schlafrechner',
    blog: 'Blog',
    menu: 'Menü',
    close: 'Schließen',
    language: 'Sprache',
    theme: 'Helles / dunkles Design umschalten',
    skip: 'Zum Inhalt springen',
    home: 'Startseite',
    allTools: 'Alle Tools',
  },

  tools: {
    alarm: 'Online-Wecker',
    timer: 'Online-Timer',
    stopwatch: 'Online-Stoppuhr',
    pomodoro: 'Pomodoro-Timer',
    clock: 'Aktuelle Uhrzeit',
    worldClock: 'Weltuhr',
    sleep: 'Schlafrechner',
  },

  toolBlurbs: {
    alarm: 'Pünktlich aufwachen mit lauten oder sanften Tönen. Schlummern ist begrenzt.',
    timer: 'Beliebige Zeit herunterzählen – mit lautem Alarm bei null.',
    stopwatch: 'Zeit auf die Hundertstelsekunde messen, mit Rundenzeiten.',
    pomodoro: '25-minütige Fokusphasen mit automatischen Pausen.',
    clock: 'Die genaue Uhrzeit und das Datum – groß genug für die ganze Raumbreite.',
    worldClock: 'Aktuelle Uhrzeit in großen Städten und Zeitzonen.',
    sleep: 'Mit 90-Minuten-Zyklen die beste Zeit zum Schlafengehen oder Aufstehen finden.',
  },

  common: {
    start: 'Start',
    pause: 'Pause',
    resume: 'Fortsetzen',
    reset: 'Zurücksetzen',
    lap: 'Runde',
    stop: 'Stopp',
    dismiss: 'Schließen',
    delete: 'Löschen',
    add: 'Hinzufügen',
    fullscreen: 'Vollbild',
    sound: 'Ton',
    volume: 'Lautstärke',
    testSound: 'Ton testen',
    hours: 'Stunden',
    minutes: 'Minuten',
    seconds: 'Sekunden',
    updated: 'Aktualisiert am {date}',
    faqTitle: 'Häufige Fragen',
    howTitle: 'So funktioniert’s',
    keyFacts: 'Auf einen Blick',
    shortcuts: 'Tastenkürzel',
    related: 'Ähnliche Tools',
    free: 'Kostenlos · Ohne Anmeldung · Nach dem Laden auch offline nutzbar',
    keepOpen: 'Lass diesen Tab geöffnet. Die Lautstärke deines Geräts muss eingeschaltet sein.',
    share: 'Teilen',
    copied: 'Link kopiert',
  },

  sounds: {
    'classic-ring': 'Klassisches Klingeln',
    'digital-beep': 'Digitaler Piepton',
    'gentle-chime': 'Sanftes Glockenspiel',
    'morning-birds': 'Vogelgezwitscher',
    'rooster-crow': 'Hahn',
    'nuclear-alert': 'Sirene (sehr laut)',
    'piano-melody': 'Klavier',
    'ocean-waves': 'Meeresrauschen',
  },

  client: {
    ready: 'Bereit',
    running: 'Läuft',
    paused: 'Pausiert',
    timesUp: 'Zeit ist um!',
    timerDone: 'Timer abgelaufen',
    alarmTitle: 'Wecker',
    wakeUp: 'Aufwachen!',
    ringsIn: 'Klingelt in {duration}',
    noAlarms: 'Kein Wecker gestellt',
    snooze: 'Schlummern 5 Min.',
    snoozesLeft: 'Noch {n}× schlummern',
    snoozeLimit: 'Schluss mit „nur noch 5 Minuten“. Zeit zum Aufstehen!',
    enableSound: 'Hier tippen, um den Weckton einzuschalten',
    alarmSet: 'Wecker gestellt auf {time}',
    lapN: 'Runde {n}',
    fastest: 'Schnellste',
    slowest: 'Langsamste',
    focus: 'Fokus',
    shortBreak: 'Kurze Pause',
    longBreak: 'Lange Pause',
    sessionOf: 'Einheit {n} von {total}',
    focusedToday: 'Heute {n} Min. fokussiert',
    startFocus: 'Fokus starten',
    startBreak: 'Pause starten',
    breakOver: 'Pause vorbei – zurück an die Arbeit.',
    focusOver: 'Fokuseinheit geschafft – Zeit für eine Pause.',
    yourTime: 'Deine Zeit',
    day: 'Tag',
    night: 'Nacht',
    today: 'Heute',
    tomorrow: 'Morgen',
    yesterday: 'Gestern',
    hoursAhead: '{n} Std. voraus',
    hoursBehind: '{n} Std. zurück',
    sameTime: 'Gleiche Zeit',
    remove: 'Entfernen',
    searchNoResults: 'Keine Stadt gefunden',
    cycles: '{n} Zyklen',
    sleepHours: '{h} Schlaf',
    setAlarmAt: 'Wecker stellen',
    best: 'Optimal',
  },

  home: {
    metaTitle: 'Online-Wecker, Timer & Stoppuhr kostenlos | NoMore5Mins',
    metaDescription:
      'Kostenloser Online-Wecker, Countdown-Timer, Stoppuhr, Pomodoro-Timer und Weltuhr. Läuft in jedem Browser – ohne Anmeldung, ohne Download.',
    h1: 'Kostenloser Online-Wecker, Timer & Stoppuhr',
    lead: 'Einfache Zeit-Tools, die sofort im Browser funktionieren. Keine App, kein Konto, kein „nur noch 5 Minuten“.',
    quickTitle: 'Schnell einen Wecker stellen',
    quickCta: 'Wecker stellen',
    quickHint: 'Öffnet den Wecker mit bereits eingestellter Uhrzeit.',
    toolsTitle: 'Alle Tools',
    popularAlarms: 'Beliebte Weckzeiten',
    popularTimers: 'Beliebte Timer',
    whyTitle: 'Warum NoMore5Mins?',
    why: [
      { title: 'Sofort da', text: 'Seiten laden in unter einer Sekunde, die Tools starten mit einem Tipp.' },
      { title: 'Privat', text: 'Deine Wecker und Einstellungen bleiben in deinem Browser. Keine Anmeldung nötig.' },
      { title: 'Überall', text: 'Handy, Tablet, Laptop oder Smart-TV-Browser – in 15 Sprachen.' },
      { title: 'Ehrliches Schlummern', text: 'Schlummern geht nur dreimal. Genau darum geht es.' },
    ],
    faq: [
      {
        q: 'Ist NoMore5Mins kostenlos?',
        a: 'Ja. Alle Tools sind kostenlos und ohne Konto nutzbar. Die Seite finanziert sich über Werbung und Affiliate-Links, die die Tools nie blockieren.',
      },
      {
        q: 'Muss ich etwas installieren?',
        a: 'Nein. Alles läuft in deinem Webbrowser. Optional kannst du die Seite zum Startbildschirm hinzufügen und wie eine App nutzen.',
      },
      {
        q: 'Klingelt der Wecker, wenn ich den Tab schließe?',
        a: 'Nein. Browser-Wecker klingeln nur, solange die Seite geöffnet ist. Du kannst zu anderen Tabs wechseln, aber lass den Browser offen, das Gerät wach und den Ton an.',
      },
      {
        q: 'Welche Geräte werden unterstützt?',
        a: 'Jeder aktuelle Browser: Chrome, Safari, Firefox, Edge und Samsung Internet unter Windows, macOS, Linux, Android, iPhone und iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Wecker online — Kostenlos Wecker stellen | NoMore5Mins',
    metaDescription:
      'Kostenloser Online-Wecker: in Sekunden Wecker stellen, 8 Töne, Beschriftungen und Schlummerfunktion (max. 3×). Ohne Download, ohne Anmeldung.',
    h1: 'Online-Wecker',
    lead: 'Uhrzeit wählen, Ton aussuchen und auf „Wecker stellen“ tippen. Der Wecker klingelt in diesem Tab auf die Minute genau.',
    setTitle: 'Neuer Wecker',
    timeLabel: 'Weckzeit',
    labelLabel: 'Beschriftung (optional)',
    labelPlaceholder: 'Aufstehen',
    setCta: 'Wecker stellen',
    quickTitle: 'Kurzes Nickerchen',
    inMinutes: '+{n} Min.',
    listTitle: 'Deine Wecker',
    steps: [
      'Wähle die Weckzeit mit der Zeitauswahl oder tippe auf einen Nickerchen-Button.',
      'Wähle Ton und Lautstärke und tippe auf „Ton testen“, um ihn anzuhören.',
      'Tippe auf „Wecker stellen“. Der Countdown zeigt, wann er klingelt.',
      'Lass den Tab offen und das Gerät wach. Wenn er klingelt, tippe auf Stopp oder Schlummern.',
    ],
    facts: [
      '8 Wecktöne, vom sanften Glockenspiel bis zur Sirene',
      'Mehrere Wecker mit Beschriftung',
      'Schlummern begrenzt auf 3 × 5 Minuten',
      'Wecker werden im Browser gespeichert und überstehen ein Neuladen der Seite',
      'Hält den Bildschirm wach, sofern unterstützt',
    ],
    contentTitle: 'Ein Browser-Wecker, der dich wirklich aus dem Bett holt',
    content: [
      'NoMore5Mins ist ein kostenloser Online-Wecker, der komplett im Browser läuft. Praktisch, wenn dein Handy in einem anderen Zimmer lädt, wenn du am Laptop arbeitest und eine Erinnerung brauchst oder wenn du eine große, gut lesbare Uhr auf einem freien Bildschirm möchtest.',
      'Der Wecker prüft jede Sekunde die genaue Uhrzeit und funktioniert auch in einem Hintergrund-Tab. Wenn er klingelt, wird der Ton langsam lauter, der Tab-Titel blinkt und – falls erlaubt – erscheint eine Systembenachrichtigung.',
      'Schlummern ist erlaubt, aber nur dreimal. Nach dem dritten Mal verschwindet der Button. Genau das steckt hinter dem Namen: Schluss mit „nur noch 5 Minuten“.',
    ],
    faq: [
      {
        q: 'Wie stelle ich einen Wecker online?',
        a: 'Wähle eine Uhrzeit, such dir einen Ton aus und tippe auf „Wecker stellen“. Lass die Seite geöffnet – der Wecker klingelt zur gewählten Minute.',
      },
      {
        q: 'Klingelt der Wecker, wenn mein Computer in den Ruhezustand geht?',
        a: 'Nein. Im Ruhezustand pausiert der Browser. Schließ deinen Laptop ans Netzteil an und deaktiviere den Ruhezustand oder nutze die Vollbild-Uhr; NoMore5Mins hält den Bildschirm wach, wo der Browser das unterstützt.',
      },
      {
        q: 'Kann ich mehrere Wecker stellen?',
        a: 'Ja. Füge so viele Wecker hinzu, wie du möchtest. Jeder erscheint unter „Deine Wecker“ und lässt sich einzeln löschen.',
      },
      {
        q: 'Warum ist auf meinem Handy kein Ton zu hören?',
        a: 'Mobile Browser blockieren Audio, bis du die Seite berührst. Wenn du die Leiste „Weckton einschalten“ siehst, tippe einmal darauf. Prüfe außerdem, dass der Lautlos-Modus aus ist.',
      },
      {
        q: 'Wie funktioniert die Schlummerfunktion?',
        a: 'Schlummern verschiebt den Wecker um 5 Minuten. Das geht bis zu dreimal – danach besteht der Wecker darauf, dass du aufstehst.',
      },
      {
        q: 'Werden meine Wecker gespeichert?',
        a: 'Ja, im lokalen Speicher deines Browsers auf diesem Gerät. Sie werden nirgendwo hochgeladen.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Wecker auf {time} stellen — Online-Wecker | NoMore5Mins',
    metaDescription:
      'Wecker auf {time} stellen mit einem Klick. Kostenloser Online-Wecker mit 8 Tönen und Schlummerfunktion. Plus die besten Schlafenszeiten für {time}.',
    h1: 'Wecker auf {time} stellen',
    lead: 'Dieser Wecker ist auf {time} eingestellt. Wähle einen Ton, tippe auf „Wecker stellen“ und lass diesen Tab geöffnet.',
    bedtimeTitle: 'Die besten Schlafenszeiten für einen Wecker um {time}',
    bedtimeLead:
      'Schlaf verläuft in Zyklen von etwa 90 Minuten. Am Ende eines Zyklus aufzuwachen fällt leichter – diese Zeiten enthalten 15 Minuten zum Einschlafen.',
    cycleLine: '{n} Zyklen · {hours} Schlaf',
    recommended: 'Empfohlen',
    usesTitle: 'Typische Gründe für einen Wecker um {time}',
    otherTimes: 'Weitere Weckzeiten',
    bands: {
      early: {
        intro: '{time} ist ein früher Start. Ideal fürs Fitnessstudio, die Frühschicht, Flüge und ruhige Zeit, bevor alle anderen aufwachen.',
        uses: ['Morgensport oder Joggen', 'Frühschicht', 'Frühen Flug oder Zug erwischen', 'Meditation oder Lernen vor dem Tagesbeginn'],
      },
      morning: {
        intro: '{time} ist eine der häufigsten Weckzeiten für Schul- und Arbeitstage.',
        uses: ['Schule oder Uni', 'Arbeitstag im Büro', 'Pendeln am Morgen', 'Kinder fertig machen'],
      },
      lateMorning: {
        intro: '{time} ist eine entspannte Weckzeit fürs Wochenende, für Spätschichten und fürs Homeoffice.',
        uses: ['Ausschlafen mit Limit am Wochenende', 'Nach einer Nachtschicht', 'Start ins Homeoffice', 'Termin am späten Vormittag'],
      },
      afternoon: {
        intro: 'Ein Wecker um {time} ist meist eine Erinnerung: Ende des Mittagsschlafs, ein Meeting, Abholen oder Medikamente.',
        uses: ['Ende eines Powernaps', 'Erinnerung an Meeting oder Anruf', 'Kinder von der Schule abholen', 'Erinnerung an Medikamente'],
      },
      evening: {
        intro: 'Ein Wecker um {time} hilft bei abendlichen Routinen: Kochen, Training, Anrufe und Online-Kurse.',
        uses: ['Erinnerung ans Abendessen oder den Ofen', 'Training am Abend', 'Anruf in eine andere Zeitzone', 'Online-Kurs oder Livestream'],
      },
      night: {
        intro: 'Ein Wecker um {time} eignet sich gut als Erinnerung zum Schlafengehen, damit du wirklich genug Schlaf bekommst.',
        uses: ['Erinnerung zum Schlafengehen', 'Zeit, Bildschirme auszuschalten', 'Ende einer späten Lerneinheit', 'Pause in der Nachtschicht'],
      },
    },
    faq: [
      {
        q: 'Wie stelle ich einen Wecker auf {time}?',
        a: 'Diese Seite ist bereits auf {time} eingestellt. Tippe auf „Wecker stellen“, lass den Tab offen und das Gerät wach. Er klingelt um {time}.',
      },
      {
        q: 'Wann sollte ich schlafen gehen, um um {time} aufzuwachen?',
        a: 'Für fünf vollständige Schlafzyklen (7,5 Stunden) geh gegen {bedtime} ins Bett – inklusive etwa 15 Minuten zum Einschlafen.',
      },
      {
        q: 'Klingelt der Wecker um {time} morgen, wenn die Zeit heute schon vorbei ist?',
        a: 'Ja. Ist {time} heute schon vorbei, wird der Wecker für morgen um {time} gestellt. Der Countdown zeigt genau, wann er klingelt.',
      },
      {
        q: 'Kann ich den Weckton ändern?',
        a: 'Ja. Wähle einen der 8 Töne und stelle die Lautstärke ein, bevor du auf „Wecker stellen“ tippst. Mit „Ton testen“ kannst du ihn vorher anhören.',
      },
    ],
  },

  timer: {
    metaTitle: 'Timer online — Kostenloser Countdown mit Alarm | NoMore5Mins',
    metaDescription:
      'Kostenloser Online-Timer mit lautem Alarm. Stunden, Minuten und Sekunden einstellen oder Vorlage wählen. Vollbild, läuft auch im Hintergrund-Tab.',
    h1: 'Online-Timer',
    lead: 'Stunden, Minuten und Sekunden einstellen und auf Start tippen. Wenn der Countdown bei null ist, ertönt ein Alarm.',
    presetsTitle: 'Vorlagen',
    steps: [
      'Stunden, Minuten und Sekunden eingeben oder auf eine Vorlage tippen.',
      'Bei Bedarf einen Alarmton auswählen.',
      'Auf Start (oder die Leertaste) drücken. Jederzeit pausieren und fortsetzen.',
      'Bei null spielt der Alarm, bis du ihn beendest.',
    ],
    facts: [
      'Zählt bis zu 99 Stunden herunter',
      'Bleibt auch in Hintergrund-Tabs genau',
      'Zeigt die Restzeit im Tab-Titel',
      'Vollbildmodus für Klassenzimmer und Präsentationen',
    ],
    contentTitle: 'Ein Countdown-Timer für Kochen, Lernen, Sport und Arbeit',
    content: [
      'Nutze den Timer für alles mit Zeitlimit: Eier kochen, 20 Minuten lernen, Planks, ein Vortragsslot oder ein Zug im Brettspiel.',
      'Der Countdown basiert auf der Systemuhr, nicht auf einem Zähler – deshalb bleibt er genau, selbst wenn der Browser einen Hintergrund-Tab drosselt. Die Restzeit steht im Tab-Titel, sodass du sie von überall im Blick hast.',
      'Für Unterricht und Meetings in den Vollbildmodus wechseln: Die Ziffern füllen den Bildschirm und sind auch aus der letzten Reihe lesbar.',
    ],
    faq: [
      {
        q: 'Wie stelle ich online einen Timer?',
        a: 'Stunden, Minuten und Sekunden eingeben (oder eine Vorlage antippen) und auf Start drücken. Bei null ertönt der Alarm.',
      },
      {
        q: 'Läuft der Timer in einem anderen Tab weiter?',
        a: 'Ja. Er basiert auf der Uhr, bleibt im Hintergrund-Tab genau und der Alarm ertönt trotzdem bei null.',
      },
      {
        q: 'Kann ich den Timer pausieren?',
        a: 'Ja. Drücke Pause (oder die Leertaste) und Fortsetzen, um weiterzumachen. Zurücksetzen stellt die eingestellte Zeit wieder her.',
      },
      {
        q: 'Wie lang darf der Timer maximal sein?',
        a: 'Bis zu 99 Stunden, 59 Minuten und 59 Sekunden.',
      },
    ],
  },

  timerPreset: {
    metaTitle: 'Timer {duration} — Kostenloser Countdown | NoMore5Mins',
    metaDescription:
      'Kostenloser {duration}-Timer mit Alarm. Startet mit einem Klick, zählt im Hintergrund-Tab weiter und klingelt laut bei null. Ohne Download.',
    h1: 'Timer {duration}',
    lead: 'Auf Start tippen und dieser Timer zählt {duration} herunter. Wenn die Zeit um ist, ertönt ein Alarm.',
    endsAtTitle: 'Wenn du jetzt startest, endet er um',
    usesTitle: 'Wofür sich ein Timer mit {duration} eignet',
    otherTimers: 'Weitere Timer',
    bands: {
      short: {
        intro: 'Ein Timer mit {duration} ist perfekt für kurze, konzentrierte Einheiten, bei denen der Blick auf die Uhr nur ablenkt.',
        uses: ['Intervalltraining und Planks', 'Zähneputzen', 'Tee ziehen lassen', 'Spielrunden und Quiz'],
      },
      medium: {
        intro: 'Ein Timer mit {duration} passt zum Kochen, für kleine Aufgaben und kurze Fokuseinheiten.',
        uses: ['Eier und Nudeln kochen', 'Schnell aufräumen', 'Kurze Meditation', 'Powernap'],
      },
      focus: {
        intro: 'Ein Timer mit {duration} ist eine klassische Länge für konzentriertes Arbeiten, Lernblöcke und Workouts.',
        uses: ['Lernen oder Hausaufgaben', 'Fokusblock nach Pomodoro-Art', 'Workout oder Yogastunde', 'Zeitlimit für Meetings'],
      },
      long: {
        intro: 'Ein Timer mit {duration} hilft bei langen Aufgaben: Prüfungen, Backen, Schmoren und Bildschirmzeit-Limits.',
        uses: ['Prüfung üben', 'Backen und Braten', 'Bildschirmzeit begrenzen', 'Erinnerung an den Parkschein'],
      },
      veryLong: {
        intro: 'Ein Timer mit {duration} ist nützlich für lange Wartezeiten: Teig gehen lassen, Laden, Marinieren oder Fastenfenster.',
        uses: ['Teig gehen lassen und Marinieren', 'Fastenfenster', 'Pause bei langer Fahrt oder Schicht', 'Wäsche und Hausarbeit'],
      },
    },
    faq: [
      {
        q: 'Wie starte ich einen Timer mit {duration}?',
        a: 'Tippe auf Start. Der Countdown beginnt sofort und nach {duration} ertönt ein Alarm.',
      },
      {
        q: 'Funktioniert der {duration}-Timer, wenn ich den Tab wechsle?',
        a: 'Ja. Er bleibt im Hintergrund genau und der Alarm ertönt bei null. Lass den Browser offen und den Ton an.',
      },
      {
        q: 'Kann ich den {duration}-Timer pausieren?',
        a: 'Ja. Drücke jederzeit Pause und Fortsetzen. Zurücksetzen startet wieder bei {duration}.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Stoppuhr online — Kostenlos, genau, mit Runden | NoMore5Mins',
    metaDescription:
      'Kostenlose Online-Stoppuhr mit Rundenzeiten, markierter schnellster/langsamster Runde und Vollbild. Genau auf 1/100 s. Mit Tastenkürzeln.',
    h1: 'Online-Stoppuhr',
    lead: 'Auf Start tippen und die Zeit auf die Hundertstelsekunde messen. Runden erfassen und schnellste und langsamste sehen.',
    lapsTitle: 'Runden',
    lapCol: 'Runde',
    splitCol: 'Rundenzeit',
    totalCol: 'Gesamt',
    steps: [
      'Auf Start oder die Leertaste drücken.',
      'Auf Runde (oder L) drücken, um eine Runde ohne Anhalten zu erfassen.',
      'Mit Pause die Uhr anhalten, mit Fortsetzen weitermachen.',
      'Mit Zurücksetzen (oder R) Zeit und alle Runden löschen.',
    ],
    facts: [
      'Genauigkeit von 1/100 Sekunde',
      'Unbegrenzte Runden, schnellste und langsamste hervorgehoben',
      'Läuft auch in Hintergrund-Tabs weiter',
      'Tastenkürzel: Leertaste, L, R, F',
    ],
    contentTitle: 'Eine genaue Stoppuhr für Sport, Wissenschaft und Alltag',
    content: [
      'Die Stoppuhr misst die verstrichene Zeit mit der hochauflösenden Uhr des Browsers und zeigt sie auf die Hundertstelsekunde genau an.',
      'Mit Rundenzeiten lassen sich Wiederholungen leicht vergleichen – Laufrunden, Schwimmbahnen, Redeproben oder Laborschritte. Die schnellste Runde erscheint grün, die langsamste rot.',
    ],
    faq: [
      {
        q: 'Wie genau ist die Online-Stoppuhr?',
        a: 'Sie nutzt die hochauflösende Uhr des Browsers und zeigt Hundertstelsekunden an. Die Genauigkeit hängt nur von deinem Gerät ab.',
      },
      {
        q: 'Wie erfasse ich eine Runde?',
        a: 'Drücke Runde oder die Taste L, während die Stoppuhr läuft. Jede Runde zeigt ihre eigene Zeit und die Gesamtzeit.',
      },
      {
        q: 'Läuft die Stoppuhr weiter, wenn ich den Tab wechsle?',
        a: 'Ja. Sie basiert auf Zeitstempeln, daher stimmt die Zeit, wenn du zurückkommst.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Pomodoro-Timer online — Kostenlos | NoMore5Mins',
    metaDescription:
      'Kostenloser Pomodoro-Timer online: 25 Minuten Fokus, 5 Minuten Pause und alle 4 Runden eine lange Pause. Eigene Zeiten, Töne und Tagesstatistik.',
    h1: 'Pomodoro-Timer',
    lead: 'Arbeite in 25-minütigen Fokuseinheiten mit kurzen Pausen dazwischen. Nach vier Einheiten folgt eine längere Pause.',
    settingsTitle: 'Einstellungen',
    focusLen: 'Fokus (Min.)',
    shortLen: 'Kurze Pause (Min.)',
    longLen: 'Lange Pause (Min.)',
    rounds: 'Einheiten bis zur langen Pause',
    autoStart: 'Nächste Phase automatisch starten',
    skip: 'Überspringen',
    todayTitle: 'Heute',
    steps: [
      'Wähle eine Aufgabe und tippe auf „Fokus starten“.',
      'Arbeite, bis die Glocke läutet – keine E-Mails, kein Handy.',
      'Mach die 5-Minuten-Pause. Steh auf, trink Wasser.',
      'Nach vier Einheiten eine Pause von 15–30 Minuten machen.',
    ],
    facts: [
      'Standard 25 / 5 / 15 Minuten, frei einstellbar',
      'Automatischer Phasenwechsel (optional)',
      'Tägliche Anzahl an Einheiten und Fokusminuten',
      'Einstellungen werden im Browser gespeichert',
    ],
    contentTitle: 'Was ist die Pomodoro-Technik?',
    content: [
      'Die Pomodoro-Technik ist eine Zeitmanagement-Methode, die Francesco Cirillo Ende der 1980er-Jahre entwickelt hat. Man arbeitet in konzentrierten 25-Minuten-Intervallen, den „Pomodori“, unterbrochen von kurzen Pausen.',
      'Kurze, feste Intervalle erleichtern den Einstieg in schwierige Aufgaben und machen es schwerer, sich ablenken zu lassen. Die Pausen halten die Aufmerksamkeit den ganzen Tag über frisch.',
    ],
    faq: [
      {
        q: 'Wie lang ist ein Pomodoro?',
        a: 'Ein klassischer Pomodoro besteht aus 25 Minuten Fokus und anschließend 5 Minuten Pause. Nach vier Pomodori folgt eine Pause von 15–30 Minuten.',
      },
      {
        q: 'Kann ich die Zeiten ändern?',
        a: 'Ja. In den Einstellungen änderst du die Länge von Fokus, kurzer und langer Pause. Beliebte Alternativen sind 50/10 und 90/20.',
      },
      {
        q: 'Ist die Pomodoro-Technik wirksam?',
        a: 'Viele Studierende und Wissensarbeiter stellen fest, dass feste Intervalle Aufschieberitis und geistige Erschöpfung verringern. Probier es eine Woche lang aus und passe die Zeiten an dich an.',
      },
    ],
  },

  clock: {
    metaTitle: 'Wie spät ist es? — Genaue Uhrzeit jetzt | NoMore5Mins',
    metaDescription:
      'Die genaue aktuelle Uhrzeit und das Datum für deine Zeitzone, mit Sekunden. Große Vollbild-Uhr für Schreibtisch oder Nachttisch.',
    h1: 'Aktuelle Uhrzeit',
    lead: 'Die aktuelle Uhrzeit in deiner Zeitzone, sekündlich aktualisiert.',
    zoneLabel: 'Deine Zeitzone',
    dateLabel: 'Datum',
    weekLabel: 'Kalenderwoche',
    dayOfYear: 'Tag des Jahres',
    format24: '24-Stunden-Format',
    showSeconds: 'Sekunden anzeigen',
    facts: [
      'Nutzt die Uhr und Zeitzone deines Geräts',
      'Sommer- und Winterzeit werden automatisch berücksichtigt',
      'Vollbildmodus für Schreibtisch, TV oder Nachttisch',
    ],
    contentTitle: 'Eine genaue, gut lesbare Uhr für jeden Bildschirm',
    content: [
      'Diese Seite zeigt die aktuelle Ortszeit anhand der Uhr und Zeitzone deines Geräts. Die meisten Geräte synchronisieren ihre Uhr über das Internet, daher ist die Zeit meist auf Sekundenbruchteile genau.',
      'Tippe auf Vollbild, um jedes Handy, Tablet, jeden Laptop oder Fernseher in eine große, ablenkungsfreie Uhr zu verwandeln.',
    ],
    faq: [
      {
        q: 'Wie genau ist diese Uhr?',
        a: 'Sie zeigt die Uhr deines Geräts, die normalerweise mit Zeitservern im Internet synchronisiert und auf Sekundenbruchteile genau ist.',
      },
      {
        q: 'Kann ich sie als Tisch- oder Nachttischuhr verwenden?',
        a: 'Ja. Tippe auf Vollbild. Wo unterstützt, bleibt der Bildschirm an, solange die Uhr geöffnet ist.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'Weltuhr — Aktuelle Uhrzeit weltweit | NoMore5Mins',
    metaDescription:
      'Aktuelle Uhrzeit in New York, London, Tokio, Dubai, Sydney und mehr. Zeitverschiebung, Tag/Nacht und Sommerzeit werden automatisch berücksichtigt.',
    h1: 'Weltuhr',
    lead: 'Aktuelle Ortszeit in großen Städten, mit dem Unterschied zu deiner Zeit.',
    search: 'Stadt suchen',
    addTitle: 'Stadt hinzufügen',
    facts: [
      'Sommerzeit wird automatisch berücksichtigt',
      'Zeigt den Unterschied zu deiner Zeit',
      'Deine Städteliste wird im Browser gespeichert',
    ],
    contentTitle: 'Anrufe und Meetings über Zeitzonen hinweg planen',
    content: [
      'Die Weltuhr zeigt die aktuelle Zeit jeder Stadt anhand der offiziellen Zeitzonendatenbank deines Browsers – Zeitumstellungen werden also automatisch übernommen.',
      'Jede Karte zeigt, ob dort Tag oder Nacht ist und wie viele Stunden die Stadt dir voraus oder hinterher ist – praktisch für Meetings, Reisen und Anrufe bei Familie im Ausland.',
    ],
    faq: [
      {
        q: 'Berücksichtigt die Weltuhr die Sommerzeit?',
        a: 'Ja. Die Zeitzonendatenbank deines Browsers wendet die Sommerzeitregeln jeder Stadt automatisch an.',
      },
      {
        q: 'Kann ich eigene Städte hinzufügen?',
        a: 'Ja. Nutze „Stadt hinzufügen“. Deine Liste wird in diesem Browser gespeichert.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Schlafrechner — Wann ins Bett, wann aufstehen? | NoMore5Mins',
    metaDescription:
      'Kostenloser Schlafrechner auf Basis von 90-Minuten-Schlafzyklen. Finde die beste Schlafenszeit für deine Weckzeit – oder wann du aufstehen solltest.',
    h1: 'Schlafrechner',
    lead: 'Wer am Ende eines Schlafzyklus aufwacht, fühlt sich weniger gerädert. Wähle eine Weckzeit oder geh jetzt schlafen.',
    modeWake: 'Ich möchte aufwachen um',
    modeNow: 'Ich gehe jetzt schlafen',
    calculate: 'Berechnen',
    fallAsleep: 'Minuten zum Einschlafen',
    bedtimesTitle: 'Geh zu einer dieser Zeiten ins Bett',
    waketimesTitle: 'Stell deinen Wecker auf eine dieser Zeiten',
    steps: [
      'Wähle deine Weckzeit oder „Ich gehe jetzt schlafen“.',
      'Stelle ein, wie lange du normalerweise zum Einschlafen brauchst (üblich sind 15 Minuten).',
      'Wähle eine Zeit aus der Liste. 5–6 Zyklen (7,5–9 Stunden) sind für die meisten Erwachsenen ideal.',
    ],
    facts: [
      'Ein Schlafzyklus dauert etwa 90 Minuten',
      'Erwachsene brauchen 7–9 Stunden, also 5–6 Zyklen',
      'Das Einschlafen dauert etwa 10–20 Minuten',
    ],
    contentTitle: 'So funktionieren Schlafzyklen',
    content: [
      'Nachts durchläufst du Leichtschlaf, Tiefschlaf und REM-Schlaf in Zyklen von rund 90 Minuten. Wer aus dem Tiefschlaf gerissen wird, fühlt sich gerädert; am Ende eines Zyklus aufzuwachen fällt viel leichter.',
      'Der Rechner zählt in 90-Minuten-Schritten zurück (oder vorwärts) und addiert die Zeit, die du zum Einschlafen brauchst. Jeder Mensch ist etwas anders – betrachte die Ergebnisse als Ausgangspunkt.',
      'Dieses Tool dient nur der allgemeinen Information und ersetzt keine ärztliche Beratung. Wenn du regelmäßig schlecht schläfst, sprich mit einem Arzt.',
    ],
    faq: [
      {
        q: 'Wie lang ist ein Schlafzyklus?',
        a: 'Im Durchschnitt etwa 90 Minuten, je nach Person und Verlauf der Nacht aber zwischen 70 und 120 Minuten.',
      },
      {
        q: 'Wie viele Schlafzyklen brauche ich?',
        a: 'Die meisten Erwachsenen fühlen sich nach 5 oder 6 Zyklen am besten, also nach 7,5 bis 9 Stunden Schlaf.',
      },
      {
        q: 'Wann sollte ich ins Bett gehen, um um 7 Uhr aufzuwachen?',
        a: 'Für 5 Zyklen gegen 23:15 Uhr, für 6 Zyklen gegen 21:45 Uhr. Beide Zeiten enthalten 15 Minuten zum Einschlafen.',
      },
    ],
  },

  products: {
    title: 'Besser schlafen, leichter aufwachen',
    titleFocus: 'Ausrüstung für konzentriertes Arbeiten',
    subtitle: 'Nützliche Dinge rund um Schlaf, Morgenroutine und Fokus, die wir empfehlen.',
    cta: 'Auf Amazon ansehen',
    disclosure: 'Affiliate-Links: Bei qualifizierten Käufen erhalten wir ggf. eine Provision – ohne Mehrkosten für dich.',
    items: {
      sunrise: { name: 'Lichtwecker', desc: 'Licht, das vor dem Wecken langsam heller wird – wie ein natürlicher Sonnenaufgang.', query: 'lichtwecker sonnenaufgang' },
      mask: { name: 'Schlafmaske aus Seide', desc: 'Blockiert Licht vollständig für tieferen Schlaf, auch nach Sonnenaufgang.', query: 'schlafmaske seide' },
      noise: { name: 'White-Noise-Gerät', desc: 'Überdeckt Verkehrslärm und Schnarchen mit gleichmäßigem, beruhigendem Rauschen.', query: 'white noise maschine' },
      pillow: { name: 'Ergonomisches Kissen', desc: 'Memory-Foam-Stütze für Nacken und Schultern.', query: 'ergonomisches nackenstützkissen memory foam' },
      blanket: { name: 'Gewichtsdecke', desc: 'Gleichmäßiger, sanfter Druck, den viele als beruhigend empfinden.', query: 'gewichtsdecke' },
      loudAlarm: { name: 'Extra lauter Wecker', desc: 'Lauter Wecker mit Vibrationskissen für Tiefschläfer.', query: 'lauter wecker vibration bett' },
      headphones: { name: 'Noise-Cancelling-Kopfhörer', desc: 'Großraumbüro oder Café einfach stummschalten, während du dich konzentrierst.', query: 'noise cancelling kopfhörer' },
      cubeTimer: { name: 'Pomodoro-Würfeltimer', desc: 'Umdrehen startet einen 5-, 15-, 25- oder 45-Minuten-Timer – ganz ohne Handy.', query: 'pomodoro würfel timer' },
      glasses: { name: 'Blaulichtfilter-Brille', desc: 'Reduziert Blendung und Augenbelastung bei langer Bildschirmarbeit.', query: 'blaulichtfilter brille' },
      deskLamp: { name: 'LED-Schreibtischlampe', desc: 'Flimmerfreies, dimmbares Licht zum Lernen und Arbeiten.', query: 'led schreibtischlampe dimmbar' },
    },
  },

  langBanner: {
    text: 'Diese Seite gibt es auch auf {language}.',
    switch: 'Wechseln',
    dismiss: 'Nein danke',
  },

  footer: {
    tagline: 'Kostenlose Zeit-Tools für jeden Browser.',
    toolsTitle: 'Tools',
    popularTitle: 'Beliebt',
    siteTitle: 'NoMore5Mins',
    about: 'Über uns',
    blog: 'Blog (Englisch)',
    contact: 'Kontakt',
    privacy: 'Datenschutzerklärung',
    terms: 'Nutzungsbedingungen',
    rights: 'Alle Rechte vorbehalten.',
    languages: 'Sprachen',
  },
};

export default de;
