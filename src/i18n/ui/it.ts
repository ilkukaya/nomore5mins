import type { Dict } from './en';

const it: Dict = {
  meta: {
    siteTagline: 'Sveglia online gratis, timer e cronometro',
    ogAlt: 'NoMore5Mins — sveglia online gratis, timer e cronometro',
  },

  nav: {
    alarm: 'Sveglia',
    timer: 'Timer',
    stopwatch: 'Cronometro',
    pomodoro: 'Focus',
    clock: 'Orologio',
    worldClock: 'Orologio mondiale',
    sleep: 'Calcolatore del sonno',
    blog: 'Blog',
    menu: 'Menu',
    close: 'Chiudi',
    language: 'Lingua',
    theme: 'Cambia tema chiaro / scuro',
    skip: 'Vai al contenuto',
    home: 'Home',
    allTools: 'Tutti gli strumenti',
  },

  tools: {
    alarm: 'Sveglia Online',
    timer: 'Timer Online',
    stopwatch: 'Cronometro Online',
    pomodoro: 'Timer Pomodoro',
    clock: 'Ora Esatta',
    worldClock: 'Orologio Mondiale',
    sleep: 'Calcolatore del Sonno',
  },

  toolBlurbs: {
    alarm: 'Svegliati puntuale con suoni forti o delicati. Il posticipo è limitato.',
    timer: 'Conto alla rovescia di qualsiasi durata con un allarme forte allo zero.',
    stopwatch: 'Misura il tempo al centesimo di secondo, con i giri.',
    pomodoro: 'Sessioni di concentrazione da 25 minuti con pause automatiche.',
    clock: 'Ora e data esatte, abbastanza grandi da leggerle da lontano.',
    worldClock: 'L’ora attuale nelle principali città e fusi orari.',
    sleep: 'Trova l’orario migliore per dormire o svegliarti con i cicli da 90 minuti.',
  },

  common: {
    start: 'Avvia',
    pause: 'Pausa',
    resume: 'Riprendi',
    reset: 'Azzera',
    lap: 'Giro',
    stop: 'Stop',
    dismiss: 'Chiudi',
    delete: 'Elimina',
    add: 'Aggiungi',
    fullscreen: 'Schermo intero',
    sound: 'Suono',
    volume: 'Volume',
    testSound: 'Prova suono',
    hours: 'Ore',
    minutes: 'Minuti',
    seconds: 'Secondi',
    updated: 'Aggiornato il {date}',
    faqTitle: 'Domande frequenti',
    howTitle: 'Come si usa',
    keyFacts: 'In breve',
    shortcuts: 'Scorciatoie da tastiera',
    related: 'Strumenti correlati',
    free: 'Gratis · Senza registrazione · Funziona offline una volta caricato',
    keepOpen: 'Tieni aperta questa scheda e il volume del dispositivo acceso.',
    share: 'Condividi',
    copied: 'Link copiato',
  },

  sounds: {
    'classic-ring': 'Squillo classico',
    'digital-beep': 'Bip digitale',
    'gentle-chime': 'Campanello delicato',
    'morning-birds': 'Uccellini al mattino',
    'rooster-crow': 'Gallo',
    'nuclear-alert': 'Sirena (molto forte)',
    'piano-melody': 'Pianoforte',
    'ocean-waves': 'Onde del mare',
  },

  client: {
    ready: 'Pronto',
    running: 'In corso',
    paused: 'In pausa',
    timesUp: 'Tempo scaduto!',
    timerDone: 'Timer terminato',
    alarmTitle: 'Sveglia',
    wakeUp: 'Sveglia!',
    ringsIn: 'Suona tra {duration}',
    noAlarms: 'Nessuna sveglia impostata',
    snooze: 'Posticipa 5 min',
    snoozesLeft: 'Posticipi rimasti: {n}',
    snoozeLimit: 'Basta 5 minuti. È ora di alzarsi!',
    enableSound: 'Tocca qui per attivare il suono della sveglia',
    alarmSet: 'Sveglia impostata alle {time}',
    lapN: 'Giro {n}',
    fastest: 'Più veloce',
    slowest: 'Più lento',
    focus: 'Focus',
    shortBreak: 'Pausa breve',
    longBreak: 'Pausa lunga',
    sessionOf: 'Sessione {n} di {total}',
    focusedToday: '{n} min di concentrazione oggi',
    startFocus: 'Inizia focus',
    startBreak: 'Inizia pausa',
    breakOver: 'Pausa finita — torna a concentrarti.',
    focusOver: 'Sessione completata — fai una pausa.',
    yourTime: 'La tua ora',
    day: 'Giorno',
    night: 'Notte',
    today: 'Oggi',
    tomorrow: 'Domani',
    yesterday: 'Ieri',
    hoursAhead: '{n} h avanti',
    hoursBehind: '{n} h indietro',
    sameTime: 'Stessa ora',
    remove: 'Rimuovi',
    searchNoResults: 'Nessuna città trovata',
    cycles: '{n} cicli',
    sleepHours: '{h} di sonno',
    setAlarmAt: 'Imposta sveglia',
    best: 'Ideale',
  },

  home: {
    metaTitle: 'Sveglia Online Gratis, Timer e Cronometro | NoMore5Mins',
    metaDescription:
      'Sveglia online gratis, timer conto alla rovescia, cronometro, timer Pomodoro e orologio mondiale. Nel browser, senza registrazione né download.',
    h1: 'Sveglia online gratis, timer e cronometro',
    lead: 'Strumenti per il tempo semplici che funzionano subito nel browser. Niente app, niente account, niente “ancora 5 minuti”.',
    quickTitle: 'Imposta una sveglia veloce',
    quickCta: 'Imposta sveglia',
    quickHint: 'Apre la sveglia con l’orario già impostato.',
    toolsTitle: 'Tutti gli strumenti',
    popularAlarms: 'Orari di sveglia più usati',
    popularTimers: 'Timer più usati',
    whyTitle: 'Perché scegliere NoMore5Mins',
    why: [
      { title: 'Immediato', text: 'Le pagine si caricano in meno di un secondo e gli strumenti partono con un tocco.' },
      { title: 'Privato', text: 'Sveglie e impostazioni restano nel tuo browser. Nessuna registrazione.' },
      { title: 'Ovunque', text: 'Smartphone, tablet, portatile o smart TV — in 15 lingue.' },
      { title: 'Posticipo onesto', text: 'Puoi posticipare al massimo tre volte. È proprio questo il punto.' },
    ],
    faq: [
      {
        q: 'NoMore5Mins è gratis?',
        a: 'Sì. Tutti gli strumenti sono gratuiti e senza account. Il sito si sostiene con pubblicità e link di affiliazione, che non bloccano mai gli strumenti.',
      },
      {
        q: 'Devo installare qualcosa?',
        a: 'No. Tutto funziona nel browser. Se vuoi, puoi aggiungere il sito alla schermata Home e usarlo come un’app.',
      },
      {
        q: 'La sveglia suona se chiudo la scheda?',
        a: 'No. Le sveglie nel browser suonano solo finché la pagina resta aperta. Puoi passare ad altre schede, ma tieni aperto il browser, il dispositivo attivo e il volume alto.',
      },
      {
        q: 'Quali dispositivi sono supportati?',
        a: 'Qualsiasi browser moderno: Chrome, Safari, Firefox, Edge e Samsung Internet su Windows, macOS, Linux, Android, iPhone e iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Sveglia Online Gratis — Imposta una Sveglia | NoMore5Mins',
    metaDescription:
      'Sveglia online gratis: imposta una sveglia in pochi secondi, scegli tra 8 suoni, aggiungi un’etichetta e posticipa (fino a 3 volte). Niente download.',
    h1: 'Sveglia online',
    lead: 'Scegli l’orario e il suono, poi premi Imposta sveglia. La sveglia suona in questa scheda al minuto esatto.',
    setTitle: 'Nuova sveglia',
    timeLabel: 'Orario sveglia',
    labelLabel: 'Etichetta (facoltativa)',
    labelPlaceholder: 'Sveglia',
    setCta: 'Imposta sveglia',
    quickTitle: 'Pisolino veloce',
    inMinutes: '+{n} min',
    listTitle: 'Le tue sveglie',
    steps: [
      'Scegli l’orario della sveglia oppure tocca un pulsante per un pisolino veloce.',
      'Scegli suono e volume, poi premi “Prova suono” per ascoltarlo.',
      'Premi “Imposta sveglia”. Il conto alla rovescia mostra quanto manca.',
      'Tieni aperta la scheda e il dispositivo attivo. Quando suona, premi Stop o Posticipa.',
    ],
    facts: [
      '8 suoni per la sveglia, dal campanello delicato alla sirena',
      'Più sveglie con etichette',
      'Posticipo limitato a 3 × 5 minuti',
      'Le sveglie restano salvate nel browser anche se ricarichi la pagina',
      'Mantiene lo schermo acceso, dove supportato',
    ],
    contentTitle: 'Una sveglia nel browser che ti fa alzare davvero',
    content: [
      'NoMore5Mins è una sveglia online gratuita che funziona interamente nel browser. È comoda quando il telefono è in carica in un’altra stanza, quando lavori al portatile e ti serve un promemoria, o quando vuoi un orologio grande e leggibile su uno schermo libero.',
      'La sveglia controlla l’ora esatta ogni secondo e continua a funzionare anche in una scheda in background. Quando suona, il volume sale gradualmente, il titolo della scheda lampeggia e, se l’hai consentito, compare una notifica di sistema.',
      'Posticipare è permesso, ma solo tre volte. Dopo il terzo posticipo il pulsante sparisce. È l’idea alla base del nome: basta con “ancora 5 minuti”.',
    ],
    faq: [
      {
        q: 'Come si imposta una sveglia online?',
        a: 'Scegli l’orario, seleziona un suono e premi “Imposta sveglia”. Tieni aperta la pagina: la sveglia suonerà al minuto scelto.',
      },
      {
        q: 'La sveglia suona se il computer va in stop?',
        a: 'No. Un dispositivo in stop mette in pausa il browser. Collega il portatile alla corrente e disattiva la sospensione, oppure usa l’orologio a schermo intero: NoMore5Mins mantiene lo schermo acceso dove il browser lo consente.',
      },
      {
        q: 'Posso impostare più sveglie?',
        a: 'Sì. Aggiungi tutte le sveglie che vuoi. Ognuna compare in “Le tue sveglie” e si può eliminare singolarmente.',
      },
      {
        q: 'Perché sul telefono non si sente niente?',
        a: 'I browser mobili bloccano l’audio finché non tocchi la pagina. Se vedi la barra “attiva il suono della sveglia”, toccala una volta. Controlla anche che la modalità silenziosa sia disattivata.',
      },
      {
        q: 'Come funziona il posticipo?',
        a: 'Il posticipo ritarda la sveglia di 5 minuti. Puoi posticipare fino a tre volte, poi la sveglia insiste finché non ti alzi.',
      },
      {
        q: 'Le mie sveglie vengono salvate?',
        a: 'Sì, nella memoria locale del browser su questo dispositivo. Non vengono mai caricate da nessuna parte.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Sveglia alle {time} — Imposta Sveglia Online | NoMore5Mins',
    metaDescription:
      'Imposta una sveglia alle {time} con un clic. Sveglia online gratis con 8 suoni e posticipo. Scopri anche a che ora dormire per svegliarti alle {time}.',
    h1: 'Imposta una sveglia alle {time}',
    lead: 'Questa sveglia è pronta per le {time}. Scegli un suono e premi Imposta sveglia, poi tieni aperta questa scheda.',
    bedtimeTitle: 'A che ora andare a letto per svegliarsi alle {time}',
    bedtimeLead:
      'Il sonno segue cicli di circa 90 minuti. Svegliarsi alla fine di un ciclo è più facile: questi orari includono 15 minuti per addormentarsi.',
    cycleLine: '{n} cicli · {hours} di sonno',
    recommended: 'Consigliato',
    usesTitle: 'Motivi comuni per una sveglia alle {time}',
    otherTimes: 'Altri orari di sveglia',
    bands: {
      early: {
        intro: 'Le {time} sono un orario mattiniero. Ideale per palestra, turni presto, voli e un po’ di calma prima che si svegli il resto della casa.',
        uses: ['Allenamento o corsa al mattino', 'Turno di lavoro presto', 'Volo o treno di prima mattina', 'Meditazione o studio prima di iniziare la giornata'],
      },
      morning: {
        intro: 'Le {time} sono uno degli orari di sveglia più comuni nei giorni di scuola e di lavoro.',
        uses: ['Scuola o università', 'Giornata in ufficio', 'Tragitto casa-lavoro', 'Preparare i bambini'],
      },
      lateMorning: {
        intro: 'Le {time} sono un orario rilassato per il weekend, i turni serali e chi lavora da casa.',
        uses: ['Dormire di più nel weekend, ma con un limite', 'Dopo un turno di notte', 'Inizio del lavoro da remoto', 'Appuntamento in tarda mattinata'],
      },
      afternoon: {
        intro: 'Una sveglia alle {time} di solito è un promemoria: la fine di un pisolino, una riunione, un’uscita da scuola o un farmaco.',
        uses: ['Fine di un power nap', 'Promemoria per riunione o chiamata', 'Prendere i bambini a scuola', 'Promemoria farmaci'],
      },
      evening: {
        intro: 'Una sveglia alle {time} aiuta con le abitudini serali: cucina, allenamento, chiamate e lezioni online.',
        uses: ['Promemoria per cena o forno', 'Allenamento serale', 'Chiamata con un altro fuso orario', 'Lezione online o diretta'],
      },
      night: {
        intro: 'Una sveglia alle {time} è perfetta come promemoria per andare a letto e dormire abbastanza.',
        uses: ['Promemoria per andare a dormire', 'Ora di spegnere gli schermi', 'Fine dello studio serale', 'Pausa nel turno di notte'],
      },
    },
    faq: [
      {
        q: 'Come imposto una sveglia alle {time}?',
        a: 'Questa pagina è già impostata alle {time}. Premi “Imposta sveglia”, tieni aperta la scheda e il dispositivo attivo. Suonerà alle {time}.',
      },
      {
        q: 'A che ora devo andare a letto per svegliarmi alle {time}?',
        a: 'Per cinque cicli di sonno completi (7,5 ore) vai a letto verso le {bedtime}, calcolando circa 15 minuti per addormentarti.',
      },
      {
        q: 'Se oggi le {time} sono già passate, la sveglia suona domani?',
        a: 'Sì. Se oggi le {time} sono già passate, la sveglia viene programmata per domani alle {time}. Il conto alla rovescia mostra esattamente quando suonerà.',
      },
      {
        q: 'Posso cambiare il suono della sveglia?',
        a: 'Sì. Scegli uno degli 8 suoni e regola il volume prima di premere “Imposta sveglia”. Usa “Prova suono” per ascoltarlo.',
      },
    ],
  },

  timer: {
    metaTitle: 'Timer Online — Conto alla Rovescia con Allarme | NoMore5Mins',
    metaDescription:
      'Timer online gratis con conto alla rovescia e allarme forte. Imposta ore, minuti e secondi o scegli un preset. Schermo intero, funziona in background.',
    h1: 'Timer online',
    lead: 'Imposta ore, minuti e secondi, poi premi Avvia. Sentirai un allarme quando il conto alla rovescia arriva a zero.',
    presetsTitle: 'Preset',
    steps: [
      'Inserisci ore, minuti e secondi oppure tocca un preset.',
      'Se vuoi, scegli un suono per l’allarme.',
      'Premi Avvia (o la barra spaziatrice). Puoi mettere in pausa e riprendere quando vuoi.',
      'Quando il timer arriva a zero, l’allarme suona finché non lo chiudi.',
    ],
    facts: [
      'Conto alla rovescia fino a 99 ore',
      'Resta preciso anche nelle schede in background',
      'Mostra il tempo rimanente nel titolo della scheda',
      'Modalità schermo intero per aule e presentazioni',
    ],
    contentTitle: 'Un conto alla rovescia per cucina, studio, sport e lavoro',
    content: [
      'Usa il timer per tutto ciò che ha una scadenza: cuocere le uova, un blocco di studio da 20 minuti, un plank, un intervento in una presentazione o un turno in un gioco da tavolo.',
      'Il conto alla rovescia si basa sull’orologio di sistema, non su un contatore, quindi resta preciso anche se il browser rallenta una scheda in background. Il tempo rimanente appare nel titolo della scheda, così puoi tenerlo d’occhio ovunque.',
      'Per aule e riunioni passa allo schermo intero: le cifre si ingrandiscono fino a riempire il display e restano leggibili anche dal fondo della sala.',
    ],
    faq: [
      {
        q: 'Come si imposta un timer online?',
        a: 'Inserisci ore, minuti e secondi (o tocca un preset) e premi Avvia. L’allarme suona quando arriva a zero.',
      },
      {
        q: 'Il timer continua se passo a un’altra scheda?',
        a: 'Sì. Si basa sull’orologio, quindi resta preciso in background e l’allarme suona comunque allo zero.',
      },
      {
        q: 'Posso mettere in pausa il timer?',
        a: 'Sì. Premi Pausa (o la barra spaziatrice) e Riprendi per continuare. Azzera torna al tempo impostato.',
      },
      {
        q: 'Qual è la durata massima del timer?',
        a: 'Fino a 99 ore, 59 minuti e 59 secondi.',
      },
    ],
  },

  timerPreset: {
    metaTitle: 'Timer {duration} — Conto alla Rovescia Online | NoMore5Mins',
    metaDescription:
      'Timer di {duration} gratis con allarme. Parte con un clic, continua a contare in background e suona forte allo zero. Nessun download.',
    h1: 'Timer di {duration}',
    lead: 'Premi Avvia e questo timer conta alla rovescia {duration}. Sentirai un allarme quando il tempo è scaduto.',
    endsAtTitle: 'Se lo avvii ora, finisce alle',
    usesTitle: 'A cosa serve un timer di {duration}',
    otherTimers: 'Altri timer',
    bands: {
      short: {
        intro: 'Un timer di {duration} è perfetto per brevi momenti di concentrazione in cui guardare l’orologio distrae.',
        uses: ['Intervalli di allenamento e plank', 'Lavarsi i denti', 'Infusione del tè', 'Turni di gioco e quiz'],
      },
      medium: {
        intro: 'Un timer di {duration} è ideale per cucinare, piccole faccende e brevi sessioni di concentrazione.',
        uses: ['Cuocere uova e pasta', 'Riordino lampo', 'Breve meditazione', 'Pisolino rigenerante'],
      },
      focus: {
        intro: 'Un timer di {duration} è una durata classica per il lavoro concentrato, lo studio e l’allenamento.',
        uses: ['Sessione di studio o compiti', 'Blocco di concentrazione stile Pomodoro', 'Allenamento o lezione di yoga', 'Durata massima di una riunione'],
      },
      long: {
        intro: 'Un timer di {duration} aiuta con le attività lunghe: esami, dolci al forno, cotture lente e limiti di tempo davanti allo schermo.',
        uses: ['Simulazione d’esame', 'Dolci e arrosti al forno', 'Limite di tempo davanti allo schermo', 'Promemoria per il parcheggio'],
      },
      veryLong: {
        intro: 'Un timer di {duration} è utile per le attese lunghe: lievitazione, ricarica, marinatura o digiuno intermittente.',
        uses: ['Lievitazione e marinatura', 'Finestra di digiuno', 'Pausa in un lungo viaggio o turno', 'Bucato e faccende'],
      },
    },
    faq: [
      {
        q: 'Come avvio un timer di {duration}?',
        a: 'Premi Avvia. Il conto alla rovescia parte subito e l’allarme suona dopo {duration}.',
      },
      {
        q: 'Il timer di {duration} funziona se cambio scheda?',
        a: 'Sì. Resta preciso in background e l’allarme suona allo zero. Tieni aperto il browser e il volume acceso.',
      },
      {
        q: 'Posso mettere in pausa il timer di {duration}?',
        a: 'Sì. Premi Pausa e Riprendi quando vuoi. Azzera fa ripartire {duration} da capo.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Cronometro Online — Gratis, Preciso, con Giri | NoMore5Mins',
    metaDescription:
      'Cronometro online gratis con tempi sul giro, giro più veloce e più lento evidenziati e schermo intero. Precisione al centesimo, scorciatoie da tastiera.',
    h1: 'Cronometro online',
    lead: 'Premi Avvia per misurare il tempo al centesimo di secondo. Registra i giri e vedi il più veloce e il più lento.',
    lapsTitle: 'Giri',
    lapCol: 'Giro',
    splitCol: 'Tempo giro',
    totalCol: 'Totale',
    steps: [
      'Premi Avvia o la barra spaziatrice.',
      'Premi Giro (o L) per registrare un giro senza fermarti.',
      'Premi Pausa per fermare il cronometro; premi Riprendi per continuare.',
      'Premi Azzera (o R) per cancellare il tempo e tutti i giri.',
    ],
    facts: [
      'Precisione al centesimo di secondo',
      'Giri illimitati con il più veloce e il più lento evidenziati',
      'Continua a funzionare nelle schede in background',
      'Scorciatoie da tastiera: Spazio, L, R, F',
    ],
    contentTitle: 'Un cronometro preciso per sport, scienza e uso quotidiano',
    content: [
      'Il cronometro misura il tempo trascorso con l’orologio ad alta risoluzione del browser e lo mostra al centesimo di secondo.',
      'I tempi sul giro rendono facile confrontare le ripetizioni: giri di corsa, vasche in piscina, prove di un discorso o passaggi di laboratorio. Il giro più veloce è in verde, il più lento in rosso.',
    ],
    faq: [
      {
        q: 'Quanto è preciso il cronometro online?',
        a: 'Usa l’orologio ad alta risoluzione del browser e mostra i centesimi di secondo. La precisione dipende solo dal tuo dispositivo.',
      },
      {
        q: 'Come registro un giro?',
        a: 'Premi Giro o il tasto L mentre il cronometro è in funzione. Ogni giro mostra il proprio tempo e il totale.',
      },
      {
        q: 'Il cronometro continua se cambio scheda?',
        a: 'Sì. Si basa su marcature temporali, quindi il tempo è corretto quando torni.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Timer Pomodoro Online Gratis per lo Studio | NoMore5Mins',
    metaDescription:
      'Timer Pomodoro online gratis: sessioni di 25 minuti, pause di 5 minuti e una pausa lunga ogni 4 cicli. Durate personalizzabili, suoni e statistiche.',
    h1: 'Timer Pomodoro',
    lead: 'Lavora in sessioni di concentrazione da 25 minuti con brevi pause. Dopo quattro sessioni, fai una pausa più lunga.',
    settingsTitle: 'Impostazioni',
    focusLen: 'Focus (min)',
    shortLen: 'Pausa breve (min)',
    longLen: 'Pausa lunga (min)',
    rounds: 'Sessioni prima della pausa lunga',
    autoStart: 'Avvia automaticamente la fase successiva',
    skip: 'Salta',
    todayTitle: 'Oggi',
    steps: [
      'Scegli un’attività e premi Inizia focus.',
      'Lavora finché non suona la campanella: niente email, niente telefono.',
      'Fai la pausa di 5 minuti. Alzati e bevi un bicchiere d’acqua.',
      'Dopo quattro sessioni fai una pausa di 15–30 minuti.',
    ],
    facts: [
      'Predefinito 25 / 5 / 15 minuti, tutto regolabile',
      'Passaggio automatico tra le fasi (facoltativo)',
      'Conteggio giornaliero di sessioni e minuti di concentrazione',
      'Impostazioni salvate nel browser',
    ],
    contentTitle: 'Cos’è la Tecnica del Pomodoro?',
    content: [
      'La Tecnica del Pomodoro è un metodo di gestione del tempo ideato da Francesco Cirillo alla fine degli anni ’80. Si lavora in intervalli concentrati di 25 minuti, chiamati “pomodori”, separati da brevi pause.',
      'Intervalli brevi e fissi rendono più facile iniziare un lavoro difficile e più difficile perdersi nelle distrazioni. Le pause mantengono l’attenzione fresca per tutta la giornata.',
    ],
    faq: [
      {
        q: 'Quanto dura un Pomodoro?',
        a: 'Un Pomodoro classico è di 25 minuti di concentrazione seguiti da 5 minuti di pausa. Dopo quattro Pomodori si fa una pausa di 15–30 minuti.',
      },
      {
        q: 'Posso cambiare le durate?',
        a: 'Sì. Apri Impostazioni per cambiare la durata del focus, della pausa breve e della pausa lunga. Alternative diffuse sono 50/10 e 90/20.',
      },
      {
        q: 'La Tecnica del Pomodoro funziona?',
        a: 'Molti studenti e professionisti trovano che gli intervalli fissi riducano la procrastinazione e l’affaticamento mentale. Provala per una settimana e adatta le durate alle tue esigenze.',
      },
    ],
  },

  clock: {
    metaTitle: 'Che Ore Sono? — Ora Esatta Adesso | NoMore5Mins',
    metaDescription:
      'L’ora esatta e la data di oggi nel tuo fuso orario, con i secondi. Orologio grande a schermo intero da usare sulla scrivania o sul comodino.',
    h1: 'Ora esatta',
    lead: 'L’ora attuale nel tuo fuso orario, aggiornata ogni secondo.',
    zoneLabel: 'Il tuo fuso orario',
    dateLabel: 'Data',
    weekLabel: 'Settimana',
    dayOfYear: 'Giorno dell’anno',
    format24: 'Formato 24 ore',
    showSeconds: 'Mostra secondi',
    facts: [
      'Usa l’orologio e il fuso orario del tuo dispositivo',
      'Ora legale gestita automaticamente',
      'Schermo intero per scrivania, TV o comodino',
    ],
    contentTitle: 'Un orologio preciso e leggibile su qualsiasi schermo',
    content: [
      'Questa pagina mostra l’ora locale attuale in base all’orologio e al fuso orario del dispositivo. La maggior parte dei dispositivi sincronizza l’orologio via internet, quindi l’ora è di solito precisa a meno di un secondo.',
      'Premi Schermo intero per trasformare smartphone, tablet, portatile o TV in un grande orologio senza distrazioni.',
    ],
    faq: [
      {
        q: 'Quanto è preciso questo orologio?',
        a: 'Mostra l’orologio del tuo dispositivo, che di norma è sincronizzato con i server orari di internet e preciso a meno di un secondo.',
      },
      {
        q: 'Posso usarlo come orologio da scrivania o da comodino?',
        a: 'Sì. Premi Schermo intero. Dove supportato, lo schermo resta acceso mentre l’orologio è aperto.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'Orologio Mondiale — Ora nelle Città del Mondo | NoMore5Mins',
    metaDescription:
      'L’ora attuale a New York, Londra, Tokyo, Dubai, Sydney e altre città. Differenze di fuso, giorno/notte e ora legale gestiti automaticamente.',
    h1: 'Orologio mondiale',
    lead: 'L’ora locale attuale nelle principali città, con la differenza rispetto alla tua.',
    search: 'Cerca città',
    addTitle: 'Aggiungi una città',
    facts: [
      'Ora legale gestita automaticamente',
      'Mostra la differenza rispetto alla tua ora',
      'L’elenco delle città viene salvato nel browser',
    ],
    contentTitle: 'Organizza chiamate e riunioni tra fusi orari diversi',
    content: [
      'L’orologio mondiale mostra l’ora attuale di ogni città usando il database ufficiale dei fusi orari integrato nel browser, quindi i cambi dell’ora legale vengono applicati automaticamente.',
      'Ogni scheda indica se lì è giorno o notte e di quante ore quella città è avanti o indietro rispetto a te: comodo per riunioni, viaggi e chiamate ai parenti all’estero.',
    ],
    faq: [
      {
        q: 'L’orologio mondiale tiene conto dell’ora legale?',
        a: 'Sì. Il database dei fusi orari del browser applica automaticamente le regole dell’ora legale per ogni città.',
      },
      {
        q: 'Posso aggiungere altre città?',
        a: 'Sì. Usa “Aggiungi una città”. L’elenco viene salvato in questo browser.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Calcolatore del Sonno — A Che Ora Dormire | NoMore5Mins',
    metaDescription:
      'Calcolatore del sonno gratis basato sui cicli da 90 minuti. Scopri a che ora andare a letto per svegliarti riposato, o quando svegliarti se dormi ora.',
    h1: 'Calcolatore del sonno',
    lead: 'Svegliarsi alla fine di un ciclo di sonno aiuta a sentirsi meno intontiti. Scegli l’ora della sveglia oppure vai a letto adesso.',
    modeWake: 'Voglio svegliarmi alle',
    modeNow: 'Vado a letto adesso',
    calculate: 'Calcola',
    fallAsleep: 'Minuti per addormentarsi',
    bedtimesTitle: 'Vai a letto a uno di questi orari',
    waketimesTitle: 'Imposta la sveglia a uno di questi orari',
    steps: [
      'Scegli l’ora in cui vuoi svegliarti, oppure “Vado a letto adesso”.',
      'Regola quanto tempo ti serve di solito per addormentarti (di solito 15 minuti).',
      'Scegli un orario dall’elenco. 5–6 cicli (7,5–9 ore) sono l’ideale per la maggior parte degli adulti.',
    ],
    facts: [
      'Un ciclo di sonno dura circa 90 minuti',
      'Gli adulti hanno bisogno di 7–9 ore, cioè 5–6 cicli',
      'Per addormentarsi servono circa 10–20 minuti',
    ],
    contentTitle: 'Come funzionano i cicli del sonno',
    content: [
      'Durante la notte si alternano sonno leggero, sonno profondo e sonno REM in cicli di circa 90 minuti. Svegliarsi nel sonno profondo lascia intontiti; svegliarsi alla fine di un ciclo è molto più facile.',
      'Il calcolatore conta all’indietro (o in avanti) a passi di 90 minuti e aggiunge il tempo necessario per addormentarsi. Ognuno è un po’ diverso, quindi considera i risultati un punto di partenza.',
      'Questo strumento ha scopo puramente informativo e non sostituisce il parere medico. Se hai spesso problemi di sonno, parlane con un medico.',
    ],
    faq: [
      {
        q: 'Quanto dura un ciclo di sonno?',
        a: 'In media circa 90 minuti, anche se varia tra 70 e 120 minuti da persona a persona e nel corso della notte.',
      },
      {
        q: 'Di quanti cicli di sonno ho bisogno?',
        a: 'La maggior parte degli adulti si sente meglio dopo 5 o 6 cicli, cioè da 7,5 a 9 ore di sonno.',
      },
      {
        q: 'A che ora devo andare a letto per svegliarmi alle 7:00?',
        a: 'Per 5 cicli vai a letto verso le 23:15; per 6 cicli verso le 21:45. Entrambi gli orari includono 15 minuti per addormentarsi.',
      },
    ],
  },

  products: {
    title: 'Dormi meglio, svegliati più facilmente',
    titleFocus: 'Accessori per la concentrazione',
    subtitle: 'Oggetti utili che consigliamo per il sonno, il risveglio e la concentrazione.',
    cta: 'Vedi su Amazon',
    disclosure: 'Link di affiliazione: potremmo ricevere una commissione sugli acquisti idonei, senza costi aggiuntivi per te.',
    items: {
      sunrise: { name: 'Sveglia con simulazione dell’alba', desc: 'Una luce che aumenta gradualmente prima della sveglia, come un’alba naturale.', query: 'sveglia luce alba' },
      mask: { name: 'Mascherina per dormire in seta', desc: 'Blocca completamente la luce per un sonno più profondo, anche dopo l’alba.', query: 'mascherina per dormire seta' },
      noise: { name: 'Macchina del rumore bianco', desc: 'Copre traffico e russare con un suono costante e rilassante.', query: 'macchina rumore bianco' },
      pillow: { name: 'Cuscino ergonomico', desc: 'Sostegno in memory foam per collo e spalle.', query: 'cuscino ergonomico memory foam' },
      blanket: { name: 'Coperta ponderata', desc: 'Una pressione uniforme e delicata che molte persone trovano rilassante.', query: 'coperta ponderata' },
      loudAlarm: { name: 'Sveglia extra forte', desc: 'Sveglia potente con vibratore da letto per chi ha il sonno pesante.', query: 'sveglia forte con vibrazione letto' },
      headphones: { name: 'Cuffie con cancellazione del rumore', desc: 'Silenzia l’open space o il bar mentre ti concentri.', query: 'cuffie cancellazione rumore' },
      cubeTimer: { name: 'Timer Pomodoro a cubo', desc: 'Giralo per avviare un timer da 5, 15, 25 o 45 minuti, senza telefono.', query: 'timer cubo pomodoro' },
      glasses: { name: 'Occhiali anti luce blu', desc: 'Riducono riflessi e affaticamento degli occhi davanti allo schermo.', query: 'occhiali luce blu' },
      deskLamp: { name: 'Lampada LED da scrivania', desc: 'Luce regolabile e senza sfarfallio per studio e lavoro.', query: 'lampada da scrivania led dimmerabile' },
    },
  },

  langBanner: {
    text: 'Questa pagina è disponibile anche in {language}.',
    switch: 'Cambia',
    dismiss: 'No, grazie',
  },

  footer: {
    tagline: 'Strumenti gratuiti per il tempo, in qualsiasi browser.',
    toolsTitle: 'Strumenti',
    popularTitle: 'Più usati',
    siteTitle: 'NoMore5Mins',
    about: 'Chi siamo',
    blog: 'Blog (in inglese)',
    contact: 'Contatti',
    privacy: 'Informativa sulla privacy',
    terms: 'Termini di servizio',
    rights: 'Tutti i diritti riservati.',
    languages: 'Lingue',
  },
};

export default it;
