import type { Dict } from './en';

const es: Dict = {
  meta: {
    siteTagline: 'Alarma online, temporizador y cronómetro gratis',
    ogAlt: 'NoMore5Mins — despertador online, temporizador y cronómetro gratis',
  },

  nav: {
    alarm: 'Alarma',
    timer: 'Temporizador',
    stopwatch: 'Cronómetro',
    pomodoro: 'Enfoque',
    clock: 'Reloj',
    worldClock: 'Reloj mundial',
    sleep: 'Calculadora de sueño',
    blog: 'Blog',
    menu: 'Menú',
    close: 'Cerrar',
    language: 'Idioma',
    theme: 'Cambiar tema claro / oscuro',
    skip: 'Ir al contenido',
    home: 'Inicio',
    allTools: 'Todas las herramientas',
  },

  tools: {
    alarm: 'Despertador Online',
    timer: 'Temporizador Online',
    stopwatch: 'Cronómetro Online',
    pomodoro: 'Temporizador Pomodoro',
    clock: 'Hora Actual',
    worldClock: 'Reloj Mundial',
    sleep: 'Calculadora de Sueño',
  },

  toolBlurbs: {
    alarm: 'Despierta a tiempo con sonidos fuertes o suaves. La posposición es limitada.',
    timer: 'Cuenta regresiva de cualquier duración con una alarma fuerte al llegar a cero.',
    stopwatch: 'Mide el tiempo con precisión de centésimas de segundo, con vueltas.',
    pomodoro: 'Sesiones de enfoque de 25 minutos con descansos automáticos.',
    clock: 'La hora y la fecha exactas, tan grandes que se leen desde el otro lado de la habitación.',
    worldClock: 'La hora actual en las principales ciudades y zonas horarias.',
    sleep: 'Descubre la mejor hora para dormir o despertar según ciclos de 90 minutos.',
  },

  common: {
    start: 'Iniciar',
    pause: 'Pausar',
    resume: 'Reanudar',
    reset: 'Reiniciar',
    lap: 'Vuelta',
    stop: 'Detener',
    dismiss: 'Descartar',
    delete: 'Eliminar',
    add: 'Agregar',
    fullscreen: 'Pantalla completa',
    sound: 'Sonido',
    volume: 'Volumen',
    testSound: 'Probar sonido',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
    updated: 'Actualizado el {date}',
    faqTitle: 'Preguntas frecuentes',
    howTitle: 'Cómo usarlo',
    keyFacts: 'Datos clave',
    shortcuts: 'Atajos de teclado',
    related: 'Herramientas relacionadas',
    free: 'Gratis · Sin registro · Funciona sin conexión una vez cargado',
    keepOpen: 'Mantén esta pestaña abierta y el volumen de tu dispositivo encendido.',
    share: 'Compartir',
    copied: 'Enlace copiado',
  },

  sounds: {
    'classic-ring': 'Timbre clásico',
    'digital-beep': 'Pitido digital',
    'gentle-chime': 'Campanilla suave',
    'morning-birds': 'Pájaros al amanecer',
    'rooster-crow': 'Gallo',
    'nuclear-alert': 'Sirena (muy fuerte)',
    'piano-melody': 'Piano',
    'ocean-waves': 'Olas del mar',
  },

  client: {
    ready: 'Listo',
    running: 'En marcha',
    paused: 'En pausa',
    timesUp: '¡Se acabó el tiempo!',
    timerDone: 'Temporizador terminado',
    alarmTitle: 'Alarma',
    wakeUp: '¡Despierta!',
    ringsIn: 'Suena en {duration}',
    noAlarms: 'No hay alarmas programadas',
    snooze: 'Posponer 5 min',
    snoozesLeft: 'Quedan {n} posposiciones',
    snoozeLimit: 'Se acabaron los 5 minutos más. ¡Hora de levantarse!',
    enableSound: 'Toca aquí para activar el sonido de la alarma',
    alarmSet: 'Alarma programada para las {time}',
    lapN: 'Vuelta {n}',
    fastest: 'Más rápida',
    slowest: 'Más lenta',
    focus: 'Enfoque',
    shortBreak: 'Descanso corto',
    longBreak: 'Descanso largo',
    sessionOf: 'Sesión {n} de {total}',
    focusedToday: '{n} min de enfoque hoy',
    startFocus: 'Empezar a enfocarse',
    startBreak: 'Empezar descanso',
    breakOver: 'Terminó el descanso — de vuelta al trabajo.',
    focusOver: 'Sesión de enfoque completada — tómate un descanso.',
    yourTime: 'Tu hora',
    day: 'Día',
    night: 'Noche',
    today: 'Hoy',
    tomorrow: 'Mañana',
    yesterday: 'Ayer',
    hoursAhead: '{n} h más',
    hoursBehind: '{n} h menos',
    sameTime: 'Misma hora',
    remove: 'Quitar',
    searchNoResults: 'No se encontró la ciudad',
    cycles: '{n} ciclos',
    sleepHours: '{h} de sueño',
    setAlarmAt: 'Poner alarma',
    best: 'Mejor',
  },

  home: {
    metaTitle: 'Alarma Online Gratis, Temporizador y Cronómetro | NoMore5Mins',
    metaDescription:
      'Despertador online gratis, temporizador con cuenta regresiva, cronómetro, Pomodoro y reloj mundial. En cualquier navegador, sin registro ni descargas.',
    h1: 'Alarma online gratis, temporizador y cronómetro',
    lead: 'Herramientas de tiempo sencillas que funcionan al instante en tu navegador. Sin app, sin cuenta y sin «solo 5 minutos más».',
    quickTitle: 'Pon una alarma rápida',
    quickCta: 'Poner alarma',
    quickHint: 'Abre el despertador con tu hora ya configurada.',
    toolsTitle: 'Todas las herramientas',
    popularAlarms: 'Horas de alarma populares',
    popularTimers: 'Temporizadores populares',
    whyTitle: 'Por qué la gente usa NoMore5Mins',
    why: [
      { title: 'Al instante', text: 'Las páginas cargan en menos de un segundo y las herramientas arrancan con un toque.' },
      { title: 'Privado', text: 'Tus alarmas y ajustes se quedan en tu navegador. No hace falta registrarse.' },
      { title: 'En todas partes', text: 'Celular, tablet, laptop o navegador de la TV — en 15 idiomas.' },
      { title: 'Posponer con límite', text: 'Solo puedes posponer tres veces. De eso se trata.' },
    ],
    faq: [
      {
        q: '¿NoMore5Mins es gratis?',
        a: 'Sí. Todas las herramientas son gratuitas y no requieren cuenta. El sitio se financia con anuncios y enlaces de afiliados, que nunca bloquean las herramientas.',
      },
      {
        q: '¿Tengo que instalar algo?',
        a: 'No. Todo funciona en tu navegador web. Si quieres, puedes agregar el sitio a tu pantalla de inicio para usarlo como una app.',
      },
      {
        q: '¿Sonará la alarma si cierro la pestaña?',
        a: 'No. Las alarmas del navegador solo suenan mientras la página está abierta. Puedes cambiar de pestaña, pero mantén el navegador abierto, el dispositivo activo y el volumen alto.',
      },
      {
        q: '¿Qué dispositivos son compatibles?',
        a: 'Cualquier navegador moderno: Chrome, Safari, Firefox, Edge y Samsung Internet en Windows, macOS, Linux, Android, iPhone y iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Despertador Online — Pon una Alarma Gratis | NoMore5Mins',
    metaDescription:
      'Despertador online gratis: pon una alarma en segundos, elige entre 8 sonidos, agrega etiquetas y pospón hasta 3 veces. Sin descargas ni registro.',
    h1: 'Despertador online',
    lead: 'Elige una hora, escoge un sonido y pulsa Poner alarma. La alarma sonará en esta pestaña en el minuto exacto.',
    setTitle: 'Nueva alarma',
    timeLabel: 'Hora de la alarma',
    labelLabel: 'Etiqueta (opcional)',
    labelPlaceholder: 'Despertar',
    setCta: 'Poner alarma',
    quickTitle: 'Siesta rápida',
    inMinutes: '+{n} min',
    listTitle: 'Tus alarmas',
    steps: [
      'Elige la hora de la alarma con el selector de hora o toca un botón de siesta rápida.',
      'Escoge un sonido y el volumen, y pulsa «Probar sonido» para escucharlo.',
      'Pulsa «Poner alarma». La cuenta regresiva muestra cuánto falta para que suene.',
      'Mantén la pestaña abierta y el dispositivo activo. Cuando suene, pulsa Detener o Posponer.',
    ],
    facts: [
      '8 sonidos de alarma, desde una campanilla suave hasta una sirena',
      'Varias alarmas con etiquetas',
      'Posponer limitado a 3 × 5 minutos',
      'Las alarmas se guardan en tu navegador y resisten una recarga de la página',
      'Mantiene la pantalla encendida cuando el navegador lo permite',
    ],
    contentTitle: 'Un despertador en el navegador que de verdad te levanta',
    content: [
      'NoMore5Mins es un despertador online gratuito que funciona por completo en tu navegador. Es útil cuando tu celular se está cargando en otra habitación, cuando trabajas en la laptop y necesitas un recordatorio, o cuando quieres un reloj grande y legible en una pantalla libre.',
      'La alarma comprueba la hora exacta cada segundo y sigue funcionando en una pestaña en segundo plano. Cuando suena, el volumen sube poco a poco, el título de la pestaña parpadea y, si lo permitiste, aparece una notificación del sistema.',
      'Puedes posponer, pero solo tres veces. Después de la tercera, el botón desaparece. Esa es la idea detrás del nombre: se acabó el «solo 5 minutos más».',
    ],
    faq: [
      {
        q: '¿Cómo pongo una alarma online?',
        a: 'Elige una hora en el selector, escoge un sonido y pulsa «Poner alarma». Mantén la página abierta; la alarma sonará en el minuto elegido.',
      },
      {
        q: '¿Sonará la alarma si mi computadora entra en suspensión?',
        a: 'No. Un dispositivo en suspensión pausa el navegador. Conecta tu laptop al cargador y desactiva la suspensión, o usa el reloj en pantalla completa; NoMore5Mins mantiene la pantalla encendida cuando el navegador lo permite.',
      },
      {
        q: '¿Puedo poner más de una alarma?',
        a: 'Sí. Agrega todas las alarmas que quieras. Cada una aparece en «Tus alarmas» y se puede eliminar por separado.',
      },
      {
        q: '¿Por qué no se oye nada en mi celular?',
        a: 'Los navegadores móviles bloquean el audio hasta que tocas la página. Si ves la barra «activar el sonido de la alarma», tócala una vez. Revisa también que el modo silencio esté desactivado.',
      },
      {
        q: '¿Cómo funciona la opción de posponer?',
        a: 'Posponer retrasa la alarma 5 minutos. Puedes posponerla hasta tres veces; después, la alarma insiste en que te levantes.',
      },
      {
        q: '¿Se guardan mis alarmas?',
        a: 'Sí, en el almacenamiento local de tu navegador en este dispositivo. Nunca se suben a ningún servidor.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Alarma a las {time} — Despertador Online Gratis | NoMore5Mins',
    metaDescription:
      'Pon una alarma a las {time} con un clic. Despertador online gratis con 8 sonidos y posponer. Mira también a qué hora dormir para despertar a las {time}.',
    h1: 'Poner alarma a las {time}',
    lead: 'Esta alarma ya está lista para las {time}. Elige un sonido y pulsa Poner alarma; luego deja esta pestaña abierta.',
    bedtimeTitle: 'A qué hora dormir para una alarma a las {time}',
    bedtimeLead:
      'El sueño avanza en ciclos de unos 90 minutos. Despertar al final de un ciclo es más fácil, por eso estas horas incluyen 15 minutos para quedarse dormido.',
    cycleLine: '{n} ciclos · {hours} de sueño',
    recommended: 'Recomendado',
    usesTitle: 'Motivos comunes para poner una alarma a las {time}',
    otherTimes: 'Otras horas de alarma',
    bands: {
      early: {
        intro: 'Las {time} es un comienzo temprano. Ideal para el gimnasio, turnos de madrugada, vuelos y un rato de calma antes de que los demás despierten.',
        uses: ['Entrenamiento o carrera matutina', 'Turno de trabajo temprano', 'Tomar un vuelo o tren temprano', 'Meditar o estudiar antes de empezar el día'],
      },
      morning: {
        intro: 'Las {time} es una de las horas más comunes para despertar en días de escuela y de oficina.',
        uses: ['Escuela o universidad', 'Jornada de oficina', 'Trayecto matutino', 'Preparar a los niños'],
      },
      lateMorning: {
        intro: 'Las {time} es una hora tranquila para despertar los fines de semana, en turnos tardíos o si trabajas desde casa.',
        uses: ['Dormir hasta tarde el fin de semana, con límite', 'Después de un turno de noche', 'Inicio del teletrabajo', 'Cita a media mañana'],
      },
      afternoon: {
        intro: 'Una alarma a las {time} suele ser un recordatorio: el final de una siesta, una reunión, recoger a alguien o tomar un medicamento.',
        uses: ['Fin de una siesta corta', 'Recordatorio de reunión o llamada', 'Recoger a los niños en la escuela', 'Recordatorio de medicamento'],
      },
      evening: {
        intro: 'Una alarma a las {time} ayuda con las rutinas de la tarde-noche: cocinar, entrenar, llamadas y clases en línea.',
        uses: ['Recordatorio de la cena o del horno', 'Entrenamiento vespertino', 'Llamada con otra zona horaria', 'Clase en línea o transmisión en vivo'],
      },
      night: {
        intro: 'Una alarma a las {time} funciona muy bien como recordatorio para irte a dormir y descansar lo suficiente.',
        uses: ['Recordatorio para ir a dormir', 'Hora de apagar pantallas', 'Fin de una sesión de estudio nocturna', 'Pausa en el turno de noche'],
      },
    },
    faq: [
      {
        q: '¿Cómo pongo una alarma a las {time}?',
        a: 'Esta página ya está configurada para las {time}. Pulsa «Poner alarma», mantén la pestaña abierta y el dispositivo activo. Sonará a las {time}.',
      },
      {
        q: '¿A qué hora debo dormir para despertar a las {time}?',
        a: 'Para cinco ciclos completos de sueño (7,5 horas), acuéstate alrededor de las {bedtime}; esto incluye unos 15 minutos para quedarte dormido.',
      },
      {
        q: '¿Sonará la alarma de las {time} mañana si esa hora ya pasó hoy?',
        a: 'Sí. Si las {time} ya pasaron hoy, la alarma se programa para mañana a las {time}. La cuenta regresiva muestra exactamente cuándo sonará.',
      },
      {
        q: '¿Puedo cambiar el sonido de la alarma?',
        a: 'Sí. Elige cualquiera de los 8 sonidos y ajusta el volumen antes de pulsar «Poner alarma». Usa «Probar sonido» para escucharlo.',
      },
    ],
  },

  timer: {
    metaTitle: 'Temporizador Online — Cuenta Regresiva con Alarma | NoMore5Mins',
    metaDescription:
      'Temporizador online gratis con cuenta regresiva y alarma fuerte. Ajusta horas, minutos y segundos o elige un preajuste. Pantalla completa y segundo plano.',
    h1: 'Temporizador online',
    lead: 'Ajusta las horas, los minutos y los segundos, y pulsa Iniciar. Sonará una alarma cuando la cuenta regresiva llegue a cero.',
    presetsTitle: 'Preajustes',
    steps: [
      'Ingresa horas, minutos y segundos, o toca un preajuste.',
      'Si quieres, elige un sonido de alarma.',
      'Pulsa Iniciar (o la barra espaciadora). Pausa y reanuda cuando quieras.',
      'Cuando el temporizador llega a cero, la alarma suena hasta que la descartes.',
    ],
    facts: [
      'Cuenta regresiva de hasta 99 horas',
      'Mantiene la hora exacta en pestañas en segundo plano',
      'Muestra el tiempo restante en el título de la pestaña',
      'Modo pantalla completa para aulas y presentaciones',
    ],
    contentTitle: 'Un temporizador para cocinar, estudiar, entrenar y trabajar',
    content: [
      'Usa el temporizador para todo lo que tenga un límite de tiempo: hervir huevos, un bloque de estudio de 20 minutos, una plancha, un turno para exponer o una ronda de un juego de mesa.',
      'La cuenta regresiva se basa en el reloj del sistema, no en un contador, así que sigue siendo exacta aunque el navegador ralentice una pestaña en segundo plano. El tiempo restante aparece en el título de la pestaña para que lo veas desde cualquier lugar.',
      'Para clases y reuniones, cambia a pantalla completa: los números se agrandan hasta llenar la pantalla y se leen desde el fondo de la sala.',
    ],
    faq: [
      {
        q: '¿Cómo pongo un temporizador online?',
        a: 'Escribe las horas, los minutos y los segundos (o toca un preajuste) y pulsa Iniciar. La alarma suena al llegar a cero.',
      },
      {
        q: '¿El temporizador sigue corriendo en otra pestaña?',
        a: 'Sí. Se basa en el reloj, así que se mantiene exacto en segundo plano y la alarma suena igual al llegar a cero.',
      },
      {
        q: '¿Puedo pausar el temporizador?',
        a: 'Sí. Pulsa Pausar (o la barra espaciadora) y Reanudar para continuar. Reiniciar vuelve al tiempo que configuraste.',
      },
      {
        q: '¿Cuál es el temporizador más largo que puedo poner?',
        a: 'Hasta 99 horas, 59 minutos y 59 segundos.',
      },
    ],
  },

  timerPreset: {
    metaTitle: 'Temporizador de {duration} — Cuenta Regresiva | NoMore5Mins',
    metaDescription:
      'Temporizador de {duration} gratis con alarma. Arranca con un clic, sigue contando en segundo plano y suena fuerte al llegar a cero. Sin descargas.',
    h1: 'Temporizador de {duration}',
    lead: 'Pulsa Iniciar y este temporizador contará {duration} hacia atrás. Sonará una alarma cuando se acabe el tiempo.',
    endsAtTitle: 'Si empiezas ahora, termina a las',
    usesTitle: 'Para qué sirve un temporizador de {duration}',
    otherTimers: 'Otros temporizadores',
    bands: {
      short: {
        intro: 'Un temporizador de {duration} es perfecto para ráfagas cortas y concentradas en las que mirar el reloj distrae.',
        uses: ['Intervalos de ejercicio y planchas', 'Cepillarse los dientes', 'Infusionar té', 'Turnos de juego y trivias'],
      },
      medium: {
        intro: 'Un temporizador de {duration} es ideal para cocinar, tareas rápidas y sesiones cortas de enfoque.',
        uses: ['Hervir huevos y pasta', 'Ordenar a toda velocidad', 'Meditación corta', 'Siesta rápida'],
      },
      focus: {
        intro: 'Un temporizador de {duration} es una duración clásica para trabajo profundo, bloques de estudio y entrenamientos.',
        uses: ['Sesión de estudio o tarea', 'Bloque de enfoque estilo Pomodoro', 'Entrenamiento o clase de yoga', 'Límite de tiempo para reuniones'],
      },
      long: {
        intro: 'Un temporizador de {duration} ayuda con tareas largas: exámenes, repostería, cocción lenta y límites de tiempo de pantalla.',
        uses: ['Práctica para exámenes', 'Hornear y asar', 'Límite de tiempo de pantalla', 'Recordatorio del parquímetro'],
      },
      veryLong: {
        intro: 'Un temporizador de {duration} es útil para esperas largas: levar masa, cargar dispositivos, marinar o ventanas de ayuno.',
        uses: ['Levado de masa y marinados', 'Ventana de ayuno', 'Pausa en un viaje largo o turno', 'Lavar ropa y quehaceres'],
      },
    },
    faq: [
      {
        q: '¿Cómo inicio un temporizador de {duration}?',
        a: 'Pulsa Iniciar. La cuenta regresiva empieza de inmediato y una alarma suena después de {duration}.',
      },
      {
        q: '¿Funciona el temporizador de {duration} si cambio de pestaña?',
        a: 'Sí. Mantiene el tiempo exacto en segundo plano y la alarma suena al llegar a cero. Deja el navegador abierto y el volumen encendido.',
      },
      {
        q: '¿Puedo pausar el temporizador de {duration}?',
        a: 'Sí. Pulsa Pausar y Reanudar cuando lo necesites. Reiniciar vuelve a empezar los {duration}.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Cronómetro Online — Gratis, Preciso y con Vueltas | NoMore5Mins',
    metaDescription:
      'Cronómetro online gratis con tiempos por vuelta, vuelta más rápida y más lenta resaltadas y pantalla completa. Precisión de 1/100 s y atajos de teclado.',
    h1: 'Cronómetro online',
    lead: 'Pulsa Iniciar para medir el tiempo con precisión de centésimas de segundo. Registra vueltas y ve la más rápida y la más lenta.',
    lapsTitle: 'Vueltas',
    lapCol: 'Vuelta',
    splitCol: 'Tiempo de vuelta',
    totalCol: 'Total',
    steps: [
      'Pulsa Iniciar o la barra espaciadora.',
      'Pulsa Vuelta (o L) para registrar una vuelta sin detener el cronómetro.',
      'Pulsa Pausar para detener el reloj; pulsa Reanudar para continuar.',
      'Pulsa Reiniciar (o R) para borrar el tiempo y todas las vueltas.',
    ],
    facts: [
      'Precisión de 1/100 de segundo',
      'Vueltas ilimitadas con la más rápida y la más lenta resaltadas',
      'Sigue corriendo en pestañas en segundo plano',
      'Atajos de teclado: Espacio, L, R, F',
    ],
    contentTitle: 'Un cronómetro preciso para deporte, ciencia y el día a día',
    content: [
      'El cronómetro mide el tiempo transcurrido con el reloj de alta resolución del navegador y lo muestra con precisión de centésimas de segundo.',
      'Los tiempos por vuelta facilitan comparar repeticiones: vueltas corriendo, largos en la piscina, ensayos de un discurso o pasos en el laboratorio. La vuelta más rápida aparece en verde y la más lenta en rojo.',
    ],
    faq: [
      {
        q: '¿Qué tan preciso es el cronómetro online?',
        a: 'Usa el reloj de alta resolución del navegador y muestra centésimas de segundo. La precisión solo depende de tu dispositivo.',
      },
      {
        q: '¿Cómo registro una vuelta?',
        a: 'Pulsa Vuelta o la tecla L mientras el cronómetro está en marcha. Cada vuelta muestra su propio tiempo y el total.',
      },
      {
        q: '¿El cronómetro sigue corriendo si cambio de pestaña?',
        a: 'Sí. Se basa en marcas de tiempo, así que el tiempo es correcto cuando vuelves.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Temporizador Pomodoro — Online y Gratis | NoMore5Mins',
    metaDescription:
      'Temporizador Pomodoro online gratis: sesiones de 25 minutos, descansos de 5 y uno largo cada 4 rondas. Duraciones, sonidos y estadísticas a tu medida.',
    h1: 'Temporizador Pomodoro',
    lead: 'Trabaja en sesiones de enfoque de 25 minutos con descansos cortos entre ellas. Tras cuatro sesiones, toma un descanso más largo.',
    settingsTitle: 'Ajustes',
    focusLen: 'Enfoque (min)',
    shortLen: 'Descanso corto (min)',
    longLen: 'Descanso largo (min)',
    rounds: 'Sesiones antes del descanso largo',
    autoStart: 'Iniciar la siguiente fase automáticamente',
    skip: 'Saltar',
    todayTitle: 'Hoy',
    steps: [
      'Elige una tarea y pulsa Empezar a enfocarse.',
      'Trabaja hasta que suene la campana: sin correo, sin celular.',
      'Toma el descanso de 5 minutos. Levántate y toma agua.',
      'Después de cuatro sesiones, descansa de 15 a 30 minutos.',
    ],
    facts: [
      '25 / 5 / 15 minutos por defecto, totalmente ajustables',
      'Cambio automático de fase (opcional)',
      'Conteo diario de sesiones y minutos de enfoque',
      'Ajustes guardados en tu navegador',
    ],
    contentTitle: '¿Qué es la técnica Pomodoro?',
    content: [
      'La técnica Pomodoro es un método de gestión del tiempo creado por Francesco Cirillo a finales de los años 80. Trabajas en intervalos concentrados de 25 minutos, llamados «pomodoros», separados por descansos cortos.',
      'Los intervalos cortos y fijos hacen más fácil empezar las tareas difíciles y más difícil caer en distracciones. Los descansos mantienen tu atención fresca a lo largo del día.',
    ],
    faq: [
      {
        q: '¿Cuánto dura un Pomodoro?',
        a: 'Un Pomodoro clásico son 25 minutos de enfoque seguidos de un descanso de 5 minutos. Después de cuatro Pomodoros, tomas un descanso de 15 a 30 minutos.',
      },
      {
        q: '¿Puedo cambiar las duraciones?',
        a: 'Sí. Abre Ajustes para cambiar la duración del enfoque, del descanso corto y del descanso largo. Alternativas populares son 50/10 y 90/20.',
      },
      {
        q: '¿Es eficaz la técnica Pomodoro?',
        a: 'Muchos estudiantes y profesionales notan que los intervalos fijos reducen la procrastinación y el cansancio mental. Pruébala una semana y ajusta las duraciones a tu medida.',
      },
    ],
  },

  clock: {
    metaTitle: '¿Qué Hora Es? — Hora Actual Exacta | NoMore5Mins',
    metaDescription:
      'La hora y la fecha exactas de tu zona horaria, con segundos. Un reloj grande en pantalla completa para usar en el escritorio o la mesita de noche.',
    h1: 'Hora actual',
    lead: 'La hora actual en tu zona horaria, actualizada cada segundo.',
    zoneLabel: 'Tu zona horaria',
    dateLabel: 'Fecha',
    weekLabel: 'Semana',
    dayOfYear: 'Día del año',
    format24: 'Formato de 24 horas',
    showSeconds: 'Mostrar segundos',
    facts: [
      'Usa el reloj y la zona horaria de tu dispositivo',
      'Horario de verano ajustado automáticamente',
      'Pantalla completa para escritorio, TV o mesita de noche',
    ],
    contentTitle: 'Un reloj preciso y legible para cualquier pantalla',
    content: [
      'Esta página muestra la hora local actual según el reloj y la zona horaria de tu dispositivo. La mayoría de los dispositivos sincronizan su reloj por internet, así que la hora suele ser exacta con un margen de fracciones de segundo.',
      'Pulsa Pantalla completa para convertir cualquier celular, tablet, laptop o TV en un reloj grande y sin distracciones.',
    ],
    faq: [
      {
        q: '¿Qué tan preciso es este reloj?',
        a: 'Muestra el reloj de tu dispositivo, que normalmente se sincroniza con servidores de hora de internet y es exacto con un margen de fracciones de segundo.',
      },
      {
        q: '¿Puedo usarlo como reloj de escritorio o de mesita de noche?',
        a: 'Sí. Pulsa Pantalla completa. Cuando el navegador lo permite, la pantalla se mantiene encendida mientras el reloj está abierto.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'Reloj Mundial — Hora Actual en Ciudades del Mundo | NoMore5Mins',
    metaDescription:
      'Consulta la hora actual en Nueva York, Londres, Tokio, Dubái, Sídney y más. Diferencias horarias, día/noche y horario de verano, todo automático.',
    h1: 'Reloj mundial',
    lead: 'La hora local actual en las principales ciudades, con la diferencia respecto a tu hora.',
    search: 'Buscar ciudad',
    addTitle: 'Agregar una ciudad',
    facts: [
      'Horario de verano ajustado automáticamente',
      'Muestra la diferencia con tu hora',
      'Tu lista de ciudades se guarda en tu navegador',
    ],
    contentTitle: 'Planifica llamadas y reuniones entre zonas horarias',
    content: [
      'El reloj mundial muestra la hora actual de cada ciudad usando la base de datos oficial de zonas horarias integrada en tu navegador, así que los cambios de horario de verano se aplican automáticamente.',
      'Cada tarjeta indica si es de día o de noche y cuántas horas adelanta o atrasa esa ciudad respecto a ti: muy práctico para reuniones, viajes y llamar a la familia en el extranjero.',
    ],
    faq: [
      {
        q: '¿El reloj mundial tiene en cuenta el horario de verano?',
        a: 'Sí. La base de datos de zonas horarias de tu navegador aplica automáticamente las reglas del horario de verano de cada ciudad.',
      },
      {
        q: '¿Puedo agregar mis propias ciudades?',
        a: 'Sí. Usa «Agregar una ciudad». Tu lista se guarda en este navegador.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Calculadora de Sueño — A Qué Hora Dormir y Despertar | NoMore5Mins',
    metaDescription:
      'Calculadora de sueño gratis basada en ciclos de 90 minutos. Descubre a qué hora dormir según tu hora de despertar, o cuándo despertar si te acuestas ya.',
    h1: 'Calculadora de sueño',
    lead: 'Despertar al final de un ciclo de sueño te ayuda a sentirte menos aturdido. Elige una hora para despertar o acuéstate ahora.',
    modeWake: 'Quiero despertar a las',
    modeNow: 'Me voy a dormir ahora',
    calculate: 'Calcular',
    fallAsleep: 'Minutos para quedarse dormido',
    bedtimesTitle: 'Acuéstate a una de estas horas',
    waketimesTitle: 'Pon tu alarma a una de estas horas',
    steps: [
      'Elige tu hora para despertar o selecciona «Me voy a dormir ahora».',
      'Ajusta cuánto tardas normalmente en quedarte dormido (lo típico son 15 minutos).',
      'Elige una hora de la lista. De 5 a 6 ciclos (7,5 a 9 horas) es lo ideal para la mayoría de los adultos.',
    ],
    facts: [
      'Un ciclo de sueño dura unos 90 minutos',
      'Los adultos necesitan de 7 a 9 horas, es decir, de 5 a 6 ciclos',
      'Quedarse dormido toma unos 10 a 20 minutos',
    ],
    contentTitle: 'Cómo funcionan los ciclos de sueño',
    content: [
      'Durante la noche pasas por el sueño ligero, el sueño profundo y el sueño REM en ciclos de unos 90 minutos. Despertar en pleno sueño profundo te deja aturdido; despertar al final de un ciclo es mucho más fácil.',
      'La calculadora cuenta hacia atrás (o hacia adelante) en pasos de 90 minutos y suma el tiempo que necesitas para quedarte dormido. Cada persona es un poco diferente, así que toma los resultados como punto de partida.',
      'Esta herramienta es solo informativa y no constituye consejo médico. Si tienes problemas de sueño con frecuencia, consulta a un médico.',
    ],
    faq: [
      {
        q: '¿Cuánto dura un ciclo de sueño?',
        a: 'Unos 90 minutos en promedio, aunque varía entre 70 y 120 minutos según la persona y a lo largo de la noche.',
      },
      {
        q: '¿Cuántos ciclos de sueño necesito?',
        a: 'La mayoría de los adultos se sienten mejor tras 5 o 6 ciclos, es decir, de 7,5 a 9 horas de sueño.',
      },
      {
        q: '¿A qué hora debo dormir para despertar a las 7:00?',
        a: 'Para 5 ciclos, acuéstate alrededor de las 23:15; para 6 ciclos, alrededor de las 21:45. Ambas horas incluyen 15 minutos para quedarte dormido.',
      },
    ],
  },

  products: {
    title: 'Duerme mejor, despierta con más facilidad',
    titleFocus: 'Accesorios para concentrarte a fondo',
    subtitle: 'Productos útiles que recomendamos para el sueño, las mañanas y la concentración.',
    cta: 'Ver en Amazon',
    disclosure: 'Enlaces de afiliados: podemos recibir una comisión por compras que califiquen, sin costo adicional para ti.',
    items: {
      sunrise: { name: 'Despertador con simulación de amanecer', desc: 'Una luz que se intensifica poco a poco antes de la alarma, como un amanecer natural.', query: 'despertador simulador de amanecer' },
      mask: { name: 'Antifaz de seda para dormir', desc: 'Bloquea la luz por completo para un sueño más profundo, incluso después del amanecer.', query: 'antifaz para dormir de seda' },
      noise: { name: 'Máquina de ruido blanco', desc: 'Tapa el tráfico y los ronquidos con un sonido constante y relajante.', query: 'maquina de ruido blanco' },
      pillow: { name: 'Almohada ergonómica', desc: 'Soporte de espuma viscoelástica para el cuello y los hombros.', query: 'almohada ergonomica viscoelastica' },
      blanket: { name: 'Manta con peso', desc: 'Una presión suave y uniforme que a mucha gente le resulta relajante.', query: 'manta con peso' },
      loudAlarm: { name: 'Despertador extrafuerte', desc: 'Alarma potente con vibrador de cama para quienes tienen el sueño pesado.', query: 'despertador ruidoso con vibrador para cama' },
      headphones: { name: 'Audífonos con cancelación de ruido', desc: 'Silencia la oficina abierta o la cafetería mientras te concentras.', query: 'audifonos cancelacion de ruido' },
      cubeTimer: { name: 'Temporizador Pomodoro de cubo', desc: 'Gíralo para iniciar un temporizador de 5, 15, 25 o 45 minutos, sin usar el celular.', query: 'temporizador cubo pomodoro' },
      glasses: { name: 'Lentes con filtro de luz azul', desc: 'Reducen los reflejos y la fatiga visual en largas sesiones frente a la pantalla.', query: 'lentes filtro luz azul' },
      deskLamp: { name: 'Lámpara de escritorio LED', desc: 'Luz regulable y sin parpadeo para estudiar y trabajar.', query: 'lampara de escritorio led regulable' },
    },
  },

  langBanner: {
    text: 'Esta página también está disponible en {language}.',
    switch: 'Cambiar',
    dismiss: 'No, gracias',
  },

  footer: {
    tagline: 'Herramientas de tiempo gratuitas que funcionan en cualquier navegador.',
    toolsTitle: 'Herramientas',
    popularTitle: 'Populares',
    siteTitle: 'NoMore5Mins',
    about: 'Acerca de',
    blog: 'Blog (en inglés)',
    contact: 'Contacto',
    privacy: 'Política de privacidad',
    terms: 'Términos del servicio',
    rights: 'Todos los derechos reservados.',
    languages: 'Idiomas',
  },
};

export default es;
