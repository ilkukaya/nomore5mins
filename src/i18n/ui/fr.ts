import type { Dict } from './en';

const fr: Dict = {
  meta: {
    siteTagline: 'Réveil en ligne, minuteur et chronomètre gratuits',
    ogAlt: 'NoMore5Mins — réveil en ligne, minuteur et chronomètre gratuits',
  },

  nav: {
    alarm: 'Réveil',
    timer: 'Minuteur',
    stopwatch: 'Chronomètre',
    pomodoro: 'Concentration',
    clock: 'Horloge',
    worldClock: 'Horloge mondiale',
    sleep: 'Calculateur de sommeil',
    blog: 'Blog',
    menu: 'Menu',
    close: 'Fermer',
    language: 'Langue',
    theme: 'Basculer entre thème clair et sombre',
    skip: 'Aller au contenu',
    home: 'Accueil',
    allTools: 'Tous les outils',
  },

  tools: {
    alarm: 'Réveil en ligne',
    timer: 'Minuteur en ligne',
    stopwatch: 'Chronomètre en ligne',
    pomodoro: 'Minuteur Pomodoro',
    clock: 'Heure actuelle',
    worldClock: 'Horloge mondiale',
    sleep: 'Calculateur de sommeil',
  },

  toolBlurbs: {
    alarm: 'Réveillez-vous à l’heure avec des sonneries fortes ou douces. Rappel d’alarme limité.',
    timer: 'Lancez un compte à rebours de n’importe quelle durée, avec une alarme bien audible à zéro.',
    stopwatch: 'Mesurez le temps au centième de seconde, avec les tours.',
    pomodoro: 'Des sessions de concentration de 25 minutes avec pauses automatiques.',
    clock: 'L’heure et la date exactes, lisibles depuis l’autre bout de la pièce.',
    worldClock: 'L’heure actuelle dans les grandes villes et fuseaux horaires.',
    sleep: 'Trouvez la meilleure heure pour vous coucher ou vous lever grâce aux cycles de 90 minutes.',
  },

  common: {
    start: 'Démarrer',
    pause: 'Pause',
    resume: 'Reprendre',
    reset: 'Réinitialiser',
    lap: 'Tour',
    stop: 'Arrêter',
    dismiss: 'Ignorer',
    delete: 'Supprimer',
    add: 'Ajouter',
    fullscreen: 'Plein écran',
    sound: 'Sonnerie',
    volume: 'Volume',
    testSound: 'Tester le son',
    hours: 'Heures',
    minutes: 'Minutes',
    seconds: 'Secondes',
    updated: 'Mis à jour le {date}',
    faqTitle: 'Questions fréquentes',
    howTitle: 'Mode d’emploi',
    keyFacts: 'L’essentiel',
    shortcuts: 'Raccourcis clavier',
    related: 'Outils similaires',
    free: 'Gratuit · Sans inscription · Fonctionne hors ligne une fois chargé',
    keepOpen: 'Gardez cet onglet ouvert et le volume de votre appareil activé.',
    share: 'Partager',
    copied: 'Lien copié',
  },

  sounds: {
    'classic-ring': 'Sonnerie classique',
    'digital-beep': 'Bip numérique',
    'gentle-chime': 'Carillon doux',
    'morning-birds': 'Chant d’oiseaux',
    'rooster-crow': 'Coq',
    'nuclear-alert': 'Sirène (très forte)',
    'piano-melody': 'Piano',
    'ocean-waves': 'Vagues de l’océan',
  },

  client: {
    ready: 'Prêt',
    running: 'En cours',
    paused: 'En pause',
    timesUp: 'Temps écoulé !',
    timerDone: 'Minuteur terminé',
    alarmTitle: 'Réveil',
    wakeUp: 'Debout !',
    ringsIn: 'Sonne dans {duration}',
    noAlarms: 'Aucune alarme programmée',
    snooze: 'Rappel 5 min',
    snoozesLeft: 'Encore {n} rappels',
    snoozeLimit: 'Fini les « 5 minutes de plus ». Il est l’heure de se lever !',
    enableSound: 'Touchez ici pour activer le son de l’alarme',
    alarmSet: 'Alarme réglée pour {time}',
    lapN: 'Tour {n}',
    fastest: 'Le plus rapide',
    slowest: 'Le plus lent',
    focus: 'Concentration',
    shortBreak: 'Pause courte',
    longBreak: 'Pause longue',
    sessionOf: 'Session {n} sur {total}',
    focusedToday: '{n} min de concentration aujourd’hui',
    startFocus: 'Commencer la session',
    startBreak: 'Commencer la pause',
    breakOver: 'Fin de la pause — on se reconcentre.',
    focusOver: 'Session terminée — place à la pause.',
    yourTime: 'Votre heure',
    day: 'Jour',
    night: 'Nuit',
    today: 'Aujourd’hui',
    tomorrow: 'Demain',
    yesterday: 'Hier',
    hoursAhead: '{n} h d’avance',
    hoursBehind: '{n} h de retard',
    sameTime: 'Même heure',
    remove: 'Retirer',
    searchNoResults: 'Aucune ville trouvée',
    cycles: '{n} cycles',
    sleepHours: '{h} de sommeil',
    setAlarmAt: 'Régler l’alarme',
    best: 'Idéal',
  },

  home: {
    metaTitle: 'Réveil en ligne, minuteur et chronomètre | NoMore5Mins',
    metaDescription:
      'Réveil en ligne gratuit, minuteur, compte à rebours, chronomètre, Pomodoro et horloge mondiale. Dans tout navigateur, sans inscription ni téléchargement.',
    h1: 'Réveil en ligne, minuteur et chronomètre gratuits',
    lead: 'Des outils simples qui fonctionnent instantanément dans votre navigateur. Pas d’appli, pas de compte, pas de « encore 5 minutes ».',
    quickTitle: 'Programmer un réveil rapide',
    quickCta: 'Régler l’alarme',
    quickHint: 'Ouvre le réveil avec l’heure déjà réglée.',
    toolsTitle: 'Tous les outils',
    popularAlarms: 'Heures de réveil populaires',
    popularTimers: 'Minuteurs populaires',
    whyTitle: 'Pourquoi choisir NoMore5Mins',
    why: [
      { title: 'Instantané', text: 'Les pages se chargent en moins d’une seconde et les outils démarrent d’un seul geste.' },
      { title: 'Confidentiel', text: 'Vos alarmes et réglages restent dans votre navigateur. Aucune inscription.' },
      { title: 'Partout', text: 'Téléphone, tablette, ordinateur ou navigateur de TV — en 15 langues.' },
      { title: 'Rappel honnête', text: 'Le rappel d’alarme est limité à trois fois. C’est tout le principe.' },
    ],
    faq: [
      {
        q: 'NoMore5Mins est-il gratuit ?',
        a: 'Oui. Tous les outils sont gratuits et sans compte. Le site est financé par de la publicité et des liens affiliés, qui ne bloquent jamais les outils.',
      },
      {
        q: 'Dois-je installer quelque chose ?',
        a: 'Non. Tout fonctionne dans votre navigateur. Vous pouvez aussi ajouter le site à votre écran d’accueil pour l’utiliser comme une application.',
      },
      {
        q: 'L’alarme sonne-t-elle si je ferme l’onglet ?',
        a: 'Non. Une alarme dans le navigateur ne sonne que si la page reste ouverte. Vous pouvez changer d’onglet, mais gardez le navigateur ouvert, l’appareil allumé et le volume activé.',
      },
      {
        q: 'Quels appareils sont compatibles ?',
        a: 'Tout navigateur récent : Chrome, Safari, Firefox, Edge et Samsung Internet sur Windows, macOS, Linux, Android, iPhone et iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Réveil en ligne — Réglez une alarme gratuite | NoMore5Mins',
    metaDescription:
      'Réveil en ligne gratuit : réglez une alarme en quelques secondes, 8 sonneries, libellés et rappel (3 fois max). Sans téléchargement ni inscription.',
    h1: 'Réveil en ligne',
    lead: 'Choisissez une heure et une sonnerie, puis appuyez sur Régler l’alarme. L’alarme sonne dans cet onglet à la minute près.',
    setTitle: 'Nouvelle alarme',
    timeLabel: 'Heure de l’alarme',
    labelLabel: 'Libellé (facultatif)',
    labelPlaceholder: 'Réveil',
    setCta: 'Régler l’alarme',
    quickTitle: 'Petite sieste',
    inMinutes: '+{n} min',
    listTitle: 'Vos alarmes',
    steps: [
      'Choisissez l’heure de l’alarme avec le sélecteur, ou touchez un bouton de sieste rapide.',
      'Choisissez une sonnerie et un volume, puis appuyez sur « Tester le son » pour l’écouter.',
      'Appuyez sur « Régler l’alarme ». Le compte à rebours indique dans combien de temps elle sonnera.',
      'Gardez l’onglet ouvert et l’appareil allumé. Quand elle sonne, appuyez sur Arrêter ou Rappel.',
    ],
    facts: [
      '8 sonneries, du carillon doux à la sirène',
      'Plusieurs alarmes avec libellés',
      'Rappel limité à 3 × 5 minutes',
      'Alarmes enregistrées dans le navigateur, même après actualisation de la page',
      'Empêche la mise en veille de l’écran lorsque c’est possible',
    ],
    contentTitle: 'Un réveil en ligne qui vous fait vraiment lever',
    content: [
      'NoMore5Mins est un réveil en ligne gratuit qui fonctionne entièrement dans votre navigateur. Pratique quand votre téléphone charge dans une autre pièce, quand vous travaillez sur ordinateur et avez besoin d’un rappel, ou pour afficher une grande horloge lisible sur un écran inutilisé.',
      'L’alarme vérifie l’heure exacte chaque seconde et continue de fonctionner dans un onglet en arrière-plan. Quand elle sonne, le son monte progressivement, le titre de l’onglet clignote et, si vous l’avez autorisé, une notification système s’affiche.',
      'Le rappel d’alarme est possible, mais trois fois seulement. Après le troisième, le bouton disparaît. C’est toute l’idée derrière le nom : fini les « encore 5 minutes ».',
    ],
    faq: [
      {
        q: 'Comment régler une alarme en ligne ?',
        a: 'Choisissez une heure dans le sélecteur, une sonnerie, puis appuyez sur « Régler l’alarme ». Gardez la page ouverte : l’alarme sonne à la minute choisie.',
      },
      {
        q: 'L’alarme sonne-t-elle si mon ordinateur se met en veille ?',
        a: 'Non. Un appareil en veille met le navigateur en pause. Branchez votre ordinateur et désactivez la veille, ou utilisez l’horloge en plein écran : NoMore5Mins empêche la mise en veille de l’écran quand le navigateur le permet.',
      },
      {
        q: 'Puis-je régler plusieurs alarmes ?',
        a: 'Oui. Ajoutez autant d’alarmes que vous voulez. Chacune apparaît dans « Vos alarmes » et peut être supprimée séparément.',
      },
      {
        q: 'Pourquoi n’y a-t-il pas de son sur mon téléphone ?',
        a: 'Les navigateurs mobiles bloquent le son tant que vous n’avez pas touché la page. Si la barre « activer le son de l’alarme » s’affiche, touchez-la une fois. Vérifiez aussi que le mode silencieux est désactivé.',
      },
      {
        q: 'Comment fonctionne le rappel d’alarme ?',
        a: 'Le rappel repousse l’alarme de 5 minutes. Vous pouvez l’utiliser jusqu’à trois fois, ensuite l’alarme insiste pour que vous vous leviez.',
      },
      {
        q: 'Mes alarmes sont-elles enregistrées ?',
        a: 'Oui, dans le stockage local de votre navigateur sur cet appareil. Elles ne sont jamais envoyées nulle part.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Réveil à {time} — Alarme en ligne gratuite | NoMore5Mins',
    metaDescription:
      'Réglez un réveil à {time} en un clic. Réveil en ligne gratuit avec 8 sonneries et rappel. Et l’heure idéale de coucher pour {time}.',
    h1: 'Mettre un réveil à {time}',
    lead: 'Cette alarme est prête pour {time}. Choisissez une sonnerie et appuyez sur Régler l’alarme, puis gardez cet onglet ouvert.',
    bedtimeTitle: 'Meilleures heures de coucher pour un réveil à {time}',
    bedtimeLead:
      'Le sommeil se découpe en cycles d’environ 90 minutes. Se réveiller en fin de cycle est plus facile : ces heures de coucher incluent 15 minutes pour s’endormir.',
    cycleLine: '{n} cycles · {hours} de sommeil',
    recommended: 'Recommandé',
    usesTitle: 'Pourquoi mettre un réveil à {time}',
    otherTimes: 'Autres heures de réveil',
    bands: {
      early: {
        intro: '{time}, c’est un lever matinal. Idéal pour la salle de sport, les horaires décalés, un avion ou profiter du calme avant que tout le monde se réveille.',
        uses: ['Sport ou footing du matin', 'Poste de travail tôt le matin', 'Prendre un avion ou un train matinal', 'Méditer ou réviser avant le début de la journée'],
      },
      morning: {
        intro: '{time} est l’une des heures de réveil les plus courantes pour les jours d’école et de bureau.',
        uses: ['École ou université', 'Journée au bureau', 'Trajet domicile-travail', 'Préparer les enfants'],
      },
      lateMorning: {
        intro: '{time} est une heure de réveil tranquille pour le week-end, les horaires tardifs et le télétravail.',
        uses: ['Grasse matinée, mais pas trop', 'Après un travail de nuit', 'Début du télétravail', 'Rendez-vous en fin de matinée'],
      },
      afternoon: {
        intro: 'Une alarme à {time} sert souvent de rappel : fin de sieste, réunion, sortie d’école ou prise de médicament.',
        uses: ['Fin de sieste éclair', 'Rappel de réunion ou d’appel', 'Sortie d’école', 'Rappel de médicament'],
      },
      evening: {
        intro: 'Une alarme à {time} aide pour les routines du soir : cuisine, sport, appels et cours en ligne.',
        uses: ['Rappel pour le dîner ou le four', 'Séance de sport du soir', 'Appel avec un autre fuseau horaire', 'Cours en ligne ou live'],
      },
      night: {
        intro: 'Une alarme à {time} est un bon rappel pour aller se coucher et dormir enfin suffisamment.',
        uses: ['Rappel de l’heure du coucher', 'Heure de couper les écrans', 'Fin d’une révision tardive', 'Pause pendant le travail de nuit'],
      },
    },
    faq: [
      {
        q: 'Comment mettre un réveil à {time} ?',
        a: 'Cette page est déjà réglée sur {time}. Appuyez sur « Régler l’alarme », gardez l’onglet ouvert et l’appareil allumé. L’alarme sonnera à {time}.',
      },
      {
        q: 'À quelle heure me coucher pour me réveiller à {time} ?',
        a: 'Pour cinq cycles de sommeil complets (7 h 30), couchez-vous vers {bedtime}, en comptant environ 15 minutes pour vous endormir.',
      },
      {
        q: 'Le réveil de {time} sonnera-t-il demain si l’heure est déjà passée ?',
        a: 'Oui. Si {time} est déjà passé aujourd’hui, l’alarme est programmée pour demain à {time}. Le compte à rebours indique exactement quand elle sonnera.',
      },
      {
        q: 'Puis-je changer la sonnerie ?',
        a: 'Oui. Choisissez l’une des 8 sonneries et réglez le volume avant d’appuyer sur « Régler l’alarme ». Utilisez « Tester le son » pour l’écouter.',
      },
    ],
  },

  timer: {
    metaTitle: 'Minuteur en ligne — Compte à rebours gratuit | NoMore5Mins',
    metaDescription:
      'Minuteur en ligne gratuit avec alarme sonore. Réglez heures, minutes et secondes ou choisissez un préréglage. Plein écran, fonctionne en arrière-plan.',
    h1: 'Minuteur en ligne',
    lead: 'Réglez les heures, minutes et secondes, puis appuyez sur Démarrer. Une alarme retentit quand le compte à rebours atteint zéro.',
    presetsTitle: 'Préréglages',
    steps: [
      'Saisissez les heures, minutes et secondes, ou touchez un préréglage.',
      'Choisissez une sonnerie si vous le souhaitez.',
      'Appuyez sur Démarrer (ou la barre d’espace). Mettez en pause et reprenez à tout moment.',
      'À zéro, l’alarme sonne jusqu’à ce que vous l’arrêtiez.',
    ],
    facts: [
      'Compte à rebours jusqu’à 99 heures',
      'Reste précis dans les onglets en arrière-plan',
      'Affiche le temps restant dans le titre de l’onglet',
      'Mode plein écran pour la classe et les présentations',
    ],
    contentTitle: 'Un compte à rebours pour cuisiner, réviser, faire du sport et travailler',
    content: [
      'Utilisez le minuteur pour tout ce qui a une échéance : cuire des œufs, réviser 20 minutes, tenir une planche, un temps de présentation ou un tour de jeu de société.',
      'Le compte à rebours s’appuie sur l’horloge du système et non sur un compteur : il reste précis même si le navigateur ralentit un onglet en arrière-plan. Le temps restant s’affiche dans le titre de l’onglet pour que vous puissiez le surveiller de partout.',
      'En classe ou en réunion, passez en plein écran : les chiffres s’agrandissent pour remplir l’écran et restent lisibles du fond de la salle.',
    ],
    faq: [
      {
        q: 'Comment régler un minuteur en ligne ?',
        a: 'Saisissez les heures, minutes et secondes (ou touchez un préréglage) et appuyez sur Démarrer. L’alarme sonne à zéro.',
      },
      {
        q: 'Le minuteur continue-t-il dans un autre onglet ?',
        a: 'Oui. Il se base sur l’horloge : il reste précis dans un onglet en arrière-plan et l’alarme sonne quand même à zéro.',
      },
      {
        q: 'Puis-je mettre le minuteur en pause ?',
        a: 'Oui. Appuyez sur Pause (ou la barre d’espace), puis sur Reprendre pour continuer. Réinitialiser revient à la durée réglée.',
      },
      {
        q: 'Quelle est la durée maximale du minuteur ?',
        a: 'Jusqu’à 99 heures, 59 minutes et 59 secondes.',
      },
    ],
  },

  timerPreset: {
    metaTitle: 'Minuteur {duration} — Compte à rebours gratuit | NoMore5Mins',
    metaDescription:
      'Minuteur {duration} gratuit avec alarme. Démarre en un clic, continue en arrière-plan et sonne fort à zéro. Sans téléchargement.',
    h1: 'Minuteur {duration}',
    lead: 'Appuyez sur Démarrer et ce minuteur décompte {duration}. Une alarme retentit quand le temps est écoulé.',
    endsAtTitle: 'Si vous démarrez maintenant, il se termine à',
    usesTitle: 'À quoi sert un minuteur de {duration}',
    otherTimers: 'Autres minuteurs',
    bands: {
      short: {
        intro: 'Un minuteur de {duration} est parfait pour de courts efforts concentrés, quand regarder l’heure vous distrait.',
        uses: ['Fractionné et gainage', 'Brossage des dents', 'Infusion du thé', 'Tours de jeu et quiz'],
      },
      medium: {
        intro: 'Un minuteur de {duration} convient à la cuisine, aux petites tâches et aux courtes sessions de concentration.',
        uses: ['Cuisson des œufs et des pâtes', 'Rangement express', 'Courte méditation', 'Sieste éclair'],
      },
      focus: {
        intro: 'Un minuteur de {duration} est une durée classique pour le travail en profondeur, les révisions et le sport.',
        uses: ['Révisions ou devoirs', 'Session de concentration façon Pomodoro', 'Séance de sport ou de yoga', 'Durée limite d’une réunion'],
      },
      long: {
        intro: 'Un minuteur de {duration} aide pour les tâches longues : examens, pâtisserie, cuisson lente et limite de temps d’écran.',
        uses: ['Examen blanc', 'Pâtisserie et rôtis', 'Limite de temps d’écran', 'Rappel de fin de stationnement'],
      },
      veryLong: {
        intro: 'Un minuteur de {duration} est utile pour les longues attentes : pousse de la pâte, recharge, marinade ou jeûne.',
        uses: ['Pousse de la pâte et marinade', 'Fenêtre de jeûne', 'Pause lors d’un long trajet ou d’un service', 'Lessive et tâches ménagères'],
      },
    },
    faq: [
      {
        q: 'Comment lancer un minuteur de {duration} ?',
        a: 'Appuyez sur Démarrer. Le compte à rebours commence immédiatement et une alarme sonne au bout de {duration}.',
      },
      {
        q: 'Le minuteur de {duration} fonctionne-t-il si je change d’onglet ?',
        a: 'Oui. Il reste précis en arrière-plan et l’alarme sonne à zéro. Gardez le navigateur ouvert et le volume activé.',
      },
      {
        q: 'Puis-je mettre en pause le minuteur de {duration} ?',
        a: 'Oui. Appuyez sur Pause puis Reprendre quand vous voulez. Réinitialiser relance {duration}.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Chronomètre en ligne gratuit avec tours | NoMore5Mins',
    metaDescription:
      'Chronomètre en ligne gratuit avec temps au tour, tours le plus rapide et le plus lent en couleur, et plein écran. Précis au 1/100 s. Raccourcis clavier.',
    h1: 'Chronomètre en ligne',
    lead: 'Appuyez sur Démarrer pour mesurer le temps au centième de seconde. Enregistrez des tours et voyez le plus rapide et le plus lent.',
    lapsTitle: 'Tours',
    lapCol: 'Tour',
    splitCol: 'Temps au tour',
    totalCol: 'Total',
    steps: [
      'Appuyez sur Démarrer ou sur la barre d’espace.',
      'Appuyez sur Tour (ou L) pour enregistrer un tour sans arrêter.',
      'Appuyez sur Pause pour arrêter le chrono, puis sur Reprendre pour continuer.',
      'Appuyez sur Réinitialiser (ou R) pour effacer le temps et tous les tours.',
    ],
    facts: [
      'Précision au 1/100 de seconde',
      'Tours illimités, le plus rapide et le plus lent mis en évidence',
      'Continue de tourner dans les onglets en arrière-plan',
      'Raccourcis clavier : Espace, L, R, F',
    ],
    contentTitle: 'Un chronomètre précis pour le sport, les sciences et le quotidien',
    content: [
      'Le chronomètre mesure le temps écoulé grâce à l’horloge haute résolution du navigateur et l’affiche au centième de seconde.',
      'Les temps au tour permettent de comparer facilement des répétitions : tours de piste, longueurs de bassin, répétitions d’un discours ou étapes d’une expérience. Le tour le plus rapide s’affiche en vert, le plus lent en rouge.',
    ],
    faq: [
      {
        q: 'Quelle est la précision du chronomètre en ligne ?',
        a: 'Il utilise l’horloge haute résolution du navigateur et affiche les centièmes de seconde. La précision n’est limitée que par votre appareil.',
      },
      {
        q: 'Comment enregistrer un tour ?',
        a: 'Appuyez sur Tour ou sur la touche L pendant que le chronomètre tourne. Chaque tour affiche son propre temps et le temps total.',
      },
      {
        q: 'Le chronomètre continue-t-il si je change d’onglet ?',
        a: 'Oui. Il se base sur des horodatages : le temps est exact quand vous revenez.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Minuteur Pomodoro en ligne gratuit | NoMore5Mins',
    metaDescription:
      'Minuteur Pomodoro en ligne gratuit : sessions de 25 minutes, pauses de 5 minutes et pause longue tous les 4 cycles. Durées, sons et stats personnalisables.',
    h1: 'Minuteur Pomodoro',
    lead: 'Travaillez par sessions de 25 minutes entrecoupées de courtes pauses. Après quatre sessions, faites une pause plus longue.',
    settingsTitle: 'Réglages',
    focusLen: 'Concentration (min)',
    shortLen: 'Pause courte (min)',
    longLen: 'Pause longue (min)',
    rounds: 'Sessions avant la pause longue',
    autoStart: 'Enchaîner automatiquement les phases',
    skip: 'Passer',
    todayTitle: 'Aujourd’hui',
    steps: [
      'Choisissez une seule tâche et appuyez sur Commencer la session.',
      'Travaillez jusqu’à la sonnerie — ni e-mails, ni téléphone.',
      'Prenez la pause de 5 minutes. Levez-vous, buvez de l’eau.',
      'Après quatre sessions, faites une pause de 15 à 30 minutes.',
    ],
    facts: [
      '25 / 5 / 15 minutes par défaut, entièrement réglables',
      'Enchaînement automatique des phases (facultatif)',
      'Nombre de sessions et minutes de concentration du jour',
      'Réglages enregistrés dans votre navigateur',
    ],
    contentTitle: 'Qu’est-ce que la technique Pomodoro ?',
    content: [
      'La technique Pomodoro est une méthode de gestion du temps mise au point par Francesco Cirillo à la fin des années 1980. On travaille par intervalles de 25 minutes appelés « pomodoros », séparés par de courtes pauses.',
      'Des intervalles courts et fixes aident à se lancer dans les tâches difficiles et limitent les distractions. Les pauses gardent l’attention fraîche tout au long de la journée.',
    ],
    faq: [
      {
        q: 'Combien de temps dure un Pomodoro ?',
        a: 'Un Pomodoro classique, c’est 25 minutes de concentration suivies d’une pause de 5 minutes. Après quatre Pomodoros, on fait une pause de 15 à 30 minutes.',
      },
      {
        q: 'Puis-je modifier les durées ?',
        a: 'Oui. Ouvrez les Réglages pour modifier la durée de concentration, de la pause courte et de la pause longue. Les alternatives populaires sont 50/10 et 90/20.',
      },
      {
        q: 'La technique Pomodoro est-elle efficace ?',
        a: 'Beaucoup d’étudiants et de travailleurs du savoir constatent que des intervalles fixes réduisent la procrastination et la fatigue mentale. Essayez-la une semaine et ajustez les durées à votre rythme.',
      },
    ],
  },

  clock: {
    metaTitle: 'Quelle heure est-il ? L’heure exacte | NoMore5Mins',
    metaDescription:
      'L’heure exacte et la date du jour dans votre fuseau horaire, avec les secondes. Grande horloge plein écran, à utiliser sur un bureau ou une table de nuit.',
    h1: 'Heure actuelle',
    lead: 'L’heure actuelle dans votre fuseau horaire, mise à jour chaque seconde.',
    zoneLabel: 'Votre fuseau horaire',
    dateLabel: 'Date',
    weekLabel: 'Semaine',
    dayOfYear: 'Jour de l’année',
    format24: 'Format 24 heures',
    showSeconds: 'Afficher les secondes',
    facts: [
      'Utilise l’horloge et le fuseau horaire de votre appareil',
      'Changement d’heure géré automatiquement',
      'Mode plein écran pour le bureau, la TV ou la table de nuit',
    ],
    contentTitle: 'Une horloge précise et lisible sur tous les écrans',
    content: [
      'Cette page affiche l’heure locale actuelle d’après l’horloge et le fuseau horaire de votre appareil. La plupart des appareils synchronisent leur horloge via Internet : l’heure est donc généralement précise à une fraction de seconde près.',
      'Appuyez sur Plein écran pour transformer un téléphone, une tablette, un ordinateur ou une TV en grande horloge sans distraction.',
    ],
    faq: [
      {
        q: 'Quelle est la précision de cette horloge ?',
        a: 'Elle affiche l’horloge de votre appareil, normalement synchronisée avec des serveurs de temps sur Internet et précise à une fraction de seconde près.',
      },
      {
        q: 'Puis-je l’utiliser comme horloge de bureau ou de chevet ?',
        a: 'Oui. Appuyez sur Plein écran. Lorsque c’est possible, l’écran reste allumé tant que l’horloge est ouverte.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'Horloge mondiale — L’heure dans le monde | NoMore5Mins',
    metaDescription:
      'L’heure actuelle à New York, Londres, Tokyo, Dubaï, Sydney et ailleurs. Décalage horaire, jour/nuit et changement d’heure gérés automatiquement.',
    h1: 'Horloge mondiale',
    lead: 'L’heure locale actuelle dans les grandes villes, avec le décalage par rapport à votre heure.',
    search: 'Rechercher une ville',
    addTitle: 'Ajouter une ville',
    facts: [
      'Changement d’heure géré automatiquement',
      'Affiche le décalage avec votre heure',
      'Votre liste de villes est enregistrée dans le navigateur',
    ],
    contentTitle: 'Planifiez appels et réunions entre fuseaux horaires',
    content: [
      'L’horloge mondiale affiche l’heure actuelle de chaque ville grâce à la base officielle des fuseaux horaires intégrée à votre navigateur : les changements d’heure sont donc appliqués automatiquement.',
      'Chaque carte indique s’il fait jour ou nuit et combien d’heures d’avance ou de retard la ville a par rapport à vous — pratique pour les réunions, les voyages et appeler la famille à l’étranger.',
    ],
    faq: [
      {
        q: 'L’horloge mondiale gère-t-elle le changement d’heure ?',
        a: 'Oui. La base de fuseaux horaires de votre navigateur applique automatiquement les règles d’heure d’été de chaque ville.',
      },
      {
        q: 'Puis-je ajouter mes propres villes ?',
        a: 'Oui. Utilisez « Ajouter une ville ». Votre liste est enregistrée dans ce navigateur.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Calculateur de sommeil : à quelle heure se coucher',
    metaDescription:
      'Calculateur de sommeil gratuit basé sur les cycles de 90 minutes. Trouvez l’heure idéale de coucher, ou de réveil si vous vous couchez maintenant.',
    h1: 'Calculateur de sommeil',
    lead: 'Se réveiller en fin de cycle de sommeil aide à se sentir moins groggy. Choisissez une heure de réveil ou couchez-vous maintenant.',
    modeWake: 'Je veux me réveiller à',
    modeNow: 'Je me couche maintenant',
    calculate: 'Calculer',
    fallAsleep: 'Minutes pour s’endormir',
    bedtimesTitle: 'Couchez-vous à l’une de ces heures',
    waketimesTitle: 'Réglez votre réveil à l’une de ces heures',
    steps: [
      'Choisissez votre heure de réveil, ou « Je me couche maintenant ».',
      'Indiquez le temps qu’il vous faut habituellement pour vous endormir (15 minutes en général).',
      'Choisissez une heure dans la liste. 5 à 6 cycles (7 h 30 à 9 h) conviennent à la plupart des adultes.',
    ],
    facts: [
      'Un cycle de sommeil dure environ 90 minutes',
      'Un adulte a besoin de 7 à 9 heures, soit 5 à 6 cycles',
      'L’endormissement prend environ 10 à 20 minutes',
    ],
    contentTitle: 'Comment fonctionnent les cycles du sommeil',
    content: [
      'Pendant la nuit, vous passez par le sommeil léger, le sommeil profond et le sommeil paradoxal, en cycles d’environ 90 minutes. Se réveiller en sommeil profond laisse groggy ; se réveiller en fin de cycle est beaucoup plus facile.',
      'Le calculateur compte à rebours (ou en avant) par tranches de 90 minutes et ajoute le temps nécessaire pour vous endormir. Chacun est un peu différent : considérez les résultats comme un point de départ.',
      'Cet outil est fourni à titre d’information générale et ne remplace pas un avis médical. Si vous avez régulièrement du mal à dormir, parlez-en à un médecin.',
    ],
    faq: [
      {
        q: 'Combien de temps dure un cycle de sommeil ?',
        a: 'Environ 90 minutes en moyenne, mais cela varie de 70 à 120 minutes selon les personnes et au cours de la nuit.',
      },
      {
        q: 'De combien de cycles de sommeil ai-je besoin ?',
        a: 'La plupart des adultes se sentent mieux après 5 ou 6 cycles, soit 7 h 30 à 9 h de sommeil.',
      },
      {
        q: 'À quelle heure me coucher pour me réveiller à 7 h ?',
        a: 'Pour 5 cycles, couchez-vous vers 23 h 15 ; pour 6 cycles, vers 21 h 45. Les deux incluent 15 minutes pour vous endormir.',
      },
    ],
  },

  products: {
    title: 'Mieux dormir, mieux se réveiller',
    titleFocus: 'L’équipement pour se concentrer',
    subtitle: 'Des objets utiles que nous recommandons pour le sommeil, le réveil et la concentration.',
    cta: 'Voir sur Amazon',
    disclosure: 'Liens affiliés : nous pouvons percevoir une commission sur les achats éligibles, sans surcoût pour vous.',
    items: {
      sunrise: { name: 'Réveil lumière (simulateur d’aube)', desc: 'Une lumière qui s’intensifie progressivement avant l’alarme, comme un lever de soleil naturel.', query: 'réveil simulateur d’aube' },
      mask: { name: 'Masque de sommeil en soie', desc: 'Bloque totalement la lumière pour un sommeil plus profond, même après le lever du soleil.', query: 'masque de sommeil soie' },
      noise: { name: 'Machine à bruit blanc', desc: 'Couvre la circulation et les ronflements avec un son régulier et apaisant.', query: 'machine bruit blanc' },
      pillow: { name: 'Oreiller ergonomique', desc: 'Soutien à mémoire de forme pour la nuque et les épaules.', query: 'oreiller ergonomique mémoire de forme' },
      blanket: { name: 'Couverture lestée', desc: 'Une pression douce et uniforme que beaucoup trouvent apaisante.', query: 'couverture lestée' },
      loudAlarm: { name: 'Réveil extra-fort', desc: 'Alarme puissante avec vibreur de lit pour les gros dormeurs.', query: 'réveil très puissant vibreur lit' },
      headphones: { name: 'Casque à réduction de bruit', desc: 'Faites taire l’open space ou le café pendant que vous vous concentrez.', query: 'casque réduction de bruit' },
      cubeTimer: { name: 'Minuteur cube Pomodoro', desc: 'Retournez-le pour lancer un minuteur de 5, 15, 25 ou 45 minutes — sans téléphone.', query: 'minuteur cube pomodoro' },
      glasses: { name: 'Lunettes anti-lumière bleue', desc: 'Réduisent l’éblouissement et la fatigue oculaire lors des longues sessions d’écran.', query: 'lunettes anti lumière bleue' },
      deskLamp: { name: 'Lampe de bureau LED', desc: 'Lumière réglable et sans scintillement pour étudier et travailler.', query: 'lampe de bureau led dimmable' },
    },
  },

  langBanner: {
    text: 'Cette page est aussi disponible en {language}.',
    switch: 'Changer',
    dismiss: 'Non merci',
  },

  footer: {
    tagline: 'Des outils de temps gratuits qui fonctionnent dans tout navigateur.',
    toolsTitle: 'Outils',
    popularTitle: 'Populaires',
    siteTitle: 'NoMore5Mins',
    about: 'À propos',
    blog: 'Blog (en anglais)',
    contact: 'Contact',
    privacy: 'Politique de confidentialité',
    terms: 'Conditions d’utilisation',
    rights: 'Tous droits réservés.',
    languages: 'Langues',
  },
};

export default fr;
