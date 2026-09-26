import type { Dict } from './en';

const pt: Dict = {
  meta: {
    siteTagline: 'Despertador online, timer e cronômetro grátis',
    ogAlt: 'NoMore5Mins — despertador online, timer e cronômetro grátis',
  },

  nav: {
    alarm: 'Alarme',
    timer: 'Timer',
    stopwatch: 'Cronômetro',
    pomodoro: 'Foco',
    clock: 'Relógio',
    worldClock: 'Relógio mundial',
    sleep: 'Calculadora do sono',
    blog: 'Blog',
    menu: 'Menu',
    close: 'Fechar',
    language: 'Idioma',
    theme: 'Alternar tema claro / escuro',
    skip: 'Pular para o conteúdo',
    home: 'Início',
    allTools: 'Todas as ferramentas',
  },

  tools: {
    alarm: 'Despertador Online',
    timer: 'Timer Online',
    stopwatch: 'Cronômetro Online',
    pomodoro: 'Timer Pomodoro',
    clock: 'Hora Certa',
    worldClock: 'Relógio Mundial',
    sleep: 'Calculadora do Sono',
  },

  toolBlurbs: {
    alarm: 'Acorde na hora com sons altos ou suaves. A soneca é limitada.',
    timer: 'Contagem regressiva de qualquer duração, com alarme alto no zero.',
    stopwatch: 'Meça o tempo com precisão de centésimos de segundo, com voltas.',
    pomodoro: 'Sessões de foco de 25 minutos com pausas automáticas.',
    clock: 'A hora e a data exatas, grandes o bastante para ler do outro lado da sala.',
    worldClock: 'A hora atual nas principais cidades e fusos horários.',
    sleep: 'Descubra o melhor horário para dormir ou acordar com ciclos de 90 minutos.',
  },

  common: {
    start: 'Iniciar',
    pause: 'Pausar',
    resume: 'Continuar',
    reset: 'Zerar',
    lap: 'Volta',
    stop: 'Parar',
    dismiss: 'Dispensar',
    delete: 'Excluir',
    add: 'Adicionar',
    fullscreen: 'Tela cheia',
    sound: 'Som',
    volume: 'Volume',
    testSound: 'Testar som',
    hours: 'Horas',
    minutes: 'Minutos',
    seconds: 'Segundos',
    updated: 'Atualizado em {date}',
    faqTitle: 'Perguntas frequentes',
    howTitle: 'Como usar',
    keyFacts: 'Destaques',
    shortcuts: 'Atalhos de teclado',
    related: 'Ferramentas relacionadas',
    free: 'Grátis · Sem cadastro · Funciona offline depois de carregado',
    keepOpen: 'Mantenha esta aba aberta e o volume do aparelho ligado.',
    share: 'Compartilhar',
    copied: 'Link copiado',
  },

  sounds: {
    'classic-ring': 'Toque clássico',
    'digital-beep': 'Bipe digital',
    'gentle-chime': 'Sino suave',
    'morning-birds': 'Pássaros da manhã',
    'rooster-crow': 'Galo',
    'nuclear-alert': 'Sirene (muito alta)',
    'piano-melody': 'Piano',
    'ocean-waves': 'Ondas do mar',
  },

  client: {
    ready: 'Pronto',
    running: 'Em andamento',
    paused: 'Pausado',
    timesUp: 'Acabou o tempo!',
    timerDone: 'Timer finalizado',
    alarmTitle: 'Alarme',
    wakeUp: 'Acorda!',
    ringsIn: 'Toca em {duration}',
    noAlarms: 'Nenhum alarme definido',
    snooze: 'Soneca 5 min',
    snoozesLeft: 'Restam {n} sonecas',
    snoozeLimit: 'Chega de “só mais 5 minutos”. Hora de levantar!',
    enableSound: 'Toque aqui para ativar o som do alarme',
    alarmSet: 'Alarme definido para {time}',
    lapN: 'Volta {n}',
    fastest: 'Mais rápida',
    slowest: 'Mais lenta',
    focus: 'Foco',
    shortBreak: 'Pausa curta',
    longBreak: 'Pausa longa',
    sessionOf: 'Sessão {n} de {total}',
    focusedToday: '{n} min de foco hoje',
    startFocus: 'Iniciar foco',
    startBreak: 'Iniciar pausa',
    breakOver: 'Fim da pausa — de volta ao foco.',
    focusOver: 'Sessão de foco concluída — faça uma pausa.',
    yourTime: 'Seu horário',
    day: 'Dia',
    night: 'Noite',
    today: 'Hoje',
    tomorrow: 'Amanhã',
    yesterday: 'Ontem',
    hoursAhead: '{n} h à frente',
    hoursBehind: '{n} h atrás',
    sameTime: 'Mesmo horário',
    remove: 'Remover',
    searchNoResults: 'Nenhuma cidade encontrada',
    cycles: '{n} ciclos',
    sleepHours: '{h} de sono',
    setAlarmAt: 'Definir alarme',
    best: 'Melhor',
  },

  home: {
    metaTitle: 'Despertador Online Grátis, Timer e Cronômetro | NoMore5Mins',
    metaDescription:
      'Despertador online grátis, timer com contagem regressiva, cronômetro, Pomodoro e relógio mundial. Em qualquer navegador, sem cadastro nem download.',
    h1: 'Despertador online grátis, timer e cronômetro',
    lead: 'Ferramentas de tempo simples que funcionam na hora, no seu navegador. Sem app, sem conta e sem “só mais 5 minutinhos”.',
    quickTitle: 'Defina um alarme rápido',
    quickCta: 'Definir alarme',
    quickHint: 'Abre o despertador com o seu horário já definido.',
    toolsTitle: 'Todas as ferramentas',
    popularAlarms: 'Horários de alarme populares',
    popularTimers: 'Timers populares',
    whyTitle: 'Por que as pessoas usam o NoMore5Mins',
    why: [
      { title: 'Instantâneo', text: 'As páginas carregam em menos de um segundo e as ferramentas começam com um toque.' },
      { title: 'Privado', text: 'Seus alarmes e configurações ficam no seu navegador. Não precisa se cadastrar.' },
      { title: 'Em qualquer lugar', text: 'Celular, tablet, notebook ou navegador da TV — em 15 idiomas.' },
      { title: 'Soneca honesta', text: 'A soneca tem limite de três vezes. Essa é a graça.' },
    ],
    faq: [
      {
        q: 'O NoMore5Mins é grátis?',
        a: 'Sim. Todas as ferramentas são gratuitas e não exigem conta. O site é mantido por anúncios e links de afiliados, que nunca bloqueiam as ferramentas.',
      },
      {
        q: 'Preciso instalar alguma coisa?',
        a: 'Não. Tudo funciona no seu navegador. Se quiser, você pode adicionar o site à tela inicial para usá-lo como um app.',
      },
      {
        q: 'O alarme toca se eu fechar a aba?',
        a: 'Não. Alarmes no navegador só tocam enquanto a página está aberta. Você pode trocar de aba, mas mantenha o navegador aberto, o aparelho ativo e o volume alto.',
      },
      {
        q: 'Quais aparelhos são compatíveis?',
        a: 'Qualquer navegador moderno: Chrome, Safari, Firefox, Edge e Samsung Internet no Windows, macOS, Linux, Android, iPhone e iPad.',
      },
    ],
  },

  alarm: {
    metaTitle: 'Despertador Online — Coloque um Alarme Grátis | NoMore5Mins',
    metaDescription:
      'Despertador online grátis: defina um alarme em segundos, escolha entre 8 sons, adicione rótulos e use a soneca (até 3 vezes). Sem download nem cadastro.',
    h1: 'Despertador online',
    lead: 'Escolha um horário, escolha um som e toque em Definir alarme. O alarme toca nesta aba no minuto exato.',
    setTitle: 'Novo alarme',
    timeLabel: 'Horário do alarme',
    labelLabel: 'Rótulo (opcional)',
    labelPlaceholder: 'Acordar',
    setCta: 'Definir alarme',
    quickTitle: 'Cochilo rápido',
    inMinutes: '+{n} min',
    listTitle: 'Seus alarmes',
    steps: [
      'Escolha o horário do alarme no seletor de hora ou toque em um botão de cochilo rápido.',
      'Escolha um som e o volume e toque em “Testar som” para ouvir.',
      'Toque em “Definir alarme”. A contagem regressiva mostra quanto falta para tocar.',
      'Mantenha a aba aberta e o aparelho ativo. Quando tocar, aperte Parar ou Soneca.',
    ],
    facts: [
      '8 sons de alarme, de um sino suave a uma sirene',
      'Vários alarmes com rótulos',
      'Soneca limitada a 3 × 5 minutos',
      'Os alarmes ficam salvos no navegador e continuam após recarregar a página',
      'Mantém a tela ligada quando o navegador permite',
    ],
    contentTitle: 'Um despertador no navegador que realmente tira você da cama',
    content: [
      'O NoMore5Mins é um despertador online grátis que funciona inteiramente no seu navegador. É útil quando o celular está carregando em outro cômodo, quando você trabalha no notebook e precisa de um lembrete, ou quando quer um relógio grande e fácil de ler numa tela sobrando.',
      'O alarme confere a hora exata a cada segundo e continua funcionando em segundo plano. Quando toca, o som aumenta aos poucos, o título da aba pisca e — se você permitiu — aparece uma notificação do sistema.',
      'A soneca é permitida, mas só três vezes. Depois da terceira, o botão some. Essa é a ideia por trás do nome: chega de “só mais 5 minutinhos”.',
    ],
    faq: [
      {
        q: 'Como colocar um alarme online?',
        a: 'Escolha um horário no seletor, escolha um som e toque em “Definir alarme”. Mantenha a página aberta; o alarme toca no minuto escolhido.',
      },
      {
        q: 'O alarme toca se o computador entrar em suspensão?',
        a: 'Não. Um aparelho em suspensão pausa o navegador. Deixe o notebook na tomada e desative a suspensão, ou use o relógio em tela cheia; o NoMore5Mins mantém a tela ligada quando o navegador permite.',
      },
      {
        q: 'Posso definir mais de um alarme?',
        a: 'Sim. Adicione quantos alarmes quiser. Cada um aparece em “Seus alarmes” e pode ser excluído separadamente.',
      },
      {
        q: 'Por que não sai som no meu celular?',
        a: 'Navegadores de celular bloqueiam o áudio até você tocar na página. Se aparecer a barra “ativar o som do alarme”, toque nela uma vez. Confira também se o modo silencioso está desligado.',
      },
      {
        q: 'Como funciona a soneca?',
        a: 'A soneca adia o alarme em 5 minutos. Você pode usá-la até três vezes; depois disso, o alarme insiste para você levantar.',
      },
      {
        q: 'Meus alarmes ficam salvos?',
        a: 'Sim, no armazenamento local do navegador neste aparelho. Eles nunca são enviados para lugar nenhum.',
      },
    ],
  },

  alarmPreset: {
    metaTitle: 'Alarme para as {time} — Despertador Online Grátis | NoMore5Mins',
    metaDescription:
      'Coloque um alarme para as {time} com um clique. Despertador online grátis com 8 sons e soneca. Veja também a hora ideal de dormir para acordar às {time}.',
    h1: 'Colocar alarme para as {time}',
    lead: 'Este alarme já está pronto para as {time}. Escolha um som e toque em Definir alarme — depois deixe esta aba aberta.',
    bedtimeTitle: 'Melhores horários para dormir com alarme às {time}',
    bedtimeLead:
      'O sono acontece em ciclos de cerca de 90 minutos. Acordar no fim de um ciclo é mais fácil, por isso estes horários já incluem 15 minutos para pegar no sono.',
    cycleLine: '{n} ciclos · {hours} de sono',
    recommended: 'Recomendado',
    usesTitle: 'Motivos comuns para colocar um alarme às {time}',
    otherTimes: 'Outros horários de alarme',
    bands: {
      early: {
        intro: '{time} é um começo cedo. Combina com academia, turnos de madrugada, voos e um tempo tranquilo antes de todo mundo acordar.',
        uses: ['Treino ou corrida matinal', 'Turno de trabalho cedo', 'Pegar um voo ou trem cedo', 'Meditar ou estudar antes do dia começar'],
      },
      morning: {
        intro: '{time} é um dos horários mais comuns para acordar em dias de escola e de trabalho.',
        uses: ['Escola ou faculdade', 'Dia de trabalho no escritório', 'Trajeto da manhã', 'Arrumar as crianças'],
      },
      lateMorning: {
        intro: '{time} é um horário tranquilo para acordar nos fins de semana, em turnos mais tarde ou para quem trabalha de casa.',
        uses: ['Dormir até mais tarde no fim de semana, com limite', 'Depois de um plantão noturno', 'Início do home office', 'Compromisso no fim da manhã'],
      },
      afternoon: {
        intro: 'Um alarme às {time} costuma ser um lembrete: fim de um cochilo, uma reunião, buscar alguém ou tomar um remédio.',
        uses: ['Fim de um cochilo rápido', 'Lembrete de reunião ou ligação', 'Buscar as crianças na escola', 'Lembrete de remédio'],
      },
      evening: {
        intro: 'Um alarme às {time} ajuda na rotina da noite: cozinhar, treinar, fazer ligações e assistir a aulas online.',
        uses: ['Lembrete do jantar ou do forno', 'Treino à noite', 'Ligação com outro fuso horário', 'Aula online ou live'],
      },
      night: {
        intro: 'Um alarme às {time} funciona bem como lembrete para ir dormir e garantir horas de sono suficientes.',
        uses: ['Lembrete para ir dormir', 'Hora de desligar as telas', 'Fim de uma sessão de estudo noturna', 'Pausa no plantão noturno'],
      },
    },
    faq: [
      {
        q: 'Como colocar um alarme para as {time}?',
        a: 'Esta página já está definida para as {time}. Toque em “Definir alarme”, mantenha a aba aberta e o aparelho ativo. Ele vai tocar às {time}.',
      },
      {
        q: 'Que horas devo dormir para acordar às {time}?',
        a: 'Para cinco ciclos completos de sono (7,5 horas), deite-se por volta das {bedtime}, o que já inclui cerca de 15 minutos para pegar no sono.',
      },
      {
        q: 'O alarme das {time} toca amanhã se o horário de hoje já passou?',
        a: 'Sim. Se as {time} de hoje já passaram, o alarme fica agendado para amanhã às {time}. A contagem regressiva mostra exatamente quando ele vai tocar.',
      },
      {
        q: 'Posso mudar o som do alarme?',
        a: 'Sim. Escolha qualquer um dos 8 sons e ajuste o volume antes de tocar em “Definir alarme”. Use “Testar som” para ouvir antes.',
      },
    ],
  },

  timer: {
    metaTitle: 'Timer Online — Contagem Regressiva Grátis com Alarme | NoMore5Mins',
    metaDescription:
      'Timer online grátis com contagem regressiva e alarme alto. Defina horas, minutos e segundos ou escolha um atalho. Tela cheia e funciona em segundo plano.',
    h1: 'Timer online',
    lead: 'Defina as horas, os minutos e os segundos e toque em Iniciar. Um alarme toca quando a contagem regressiva chegar a zero.',
    presetsTitle: 'Atalhos',
    steps: [
      'Digite as horas, os minutos e os segundos ou toque em um atalho.',
      'Se quiser, escolha um som de alarme.',
      'Toque em Iniciar (ou na barra de espaço). Pause e continue quando quiser.',
      'Quando o timer chega a zero, o alarme toca até você dispensá-lo.',
    ],
    facts: [
      'Contagem regressiva de até 99 horas',
      'Mantém o tempo preciso em abas em segundo plano',
      'Mostra o tempo restante no título da aba',
      'Modo tela cheia para salas de aula e apresentações',
    ],
    contentTitle: 'Um timer para cozinhar, estudar, treinar e trabalhar',
    content: [
      'Use o timer para tudo que tem prazo: cozinhar ovos, um bloco de estudo de 20 minutos, uma prancha, o tempo de uma apresentação ou a vez de alguém num jogo de tabuleiro.',
      'A contagem regressiva se baseia no relógio do sistema, e não em um contador, então continua precisa mesmo se o navegador desacelerar uma aba em segundo plano. O tempo restante aparece no título da aba para você acompanhar de qualquer lugar.',
      'Para aulas e reuniões, mude para tela cheia: os números crescem até ocupar a tela e dá para ler do fundo da sala.',
    ],
    faq: [
      {
        q: 'Como colocar um timer online?',
        a: 'Digite as horas, os minutos e os segundos (ou toque em um atalho) e toque em Iniciar. O alarme toca quando chegar a zero.',
      },
      {
        q: 'O timer continua rodando em outra aba?',
        a: 'Sim. Ele se baseia no relógio, então continua preciso em segundo plano e o alarme toca normalmente no zero.',
      },
      {
        q: 'Posso pausar o timer?',
        a: 'Sim. Toque em Pausar (ou na barra de espaço) e em Continuar para retomar. Zerar volta ao tempo que você definiu.',
      },
      {
        q: 'Qual é o timer mais longo que posso definir?',
        a: 'Até 99 horas, 59 minutos e 59 segundos.',
      },
    ],
  },

  timerPreset: {
    metaTitle: 'Timer de {duration} — Contagem Regressiva Online | NoMore5Mins',
    metaDescription:
      'Timer de {duration} grátis com alarme. Começa com um clique, continua contando em segundo plano e toca alto no zero. Sem download.',
    h1: 'Timer de {duration}',
    lead: 'Toque em Iniciar e este timer faz a contagem regressiva de {duration}. Um alarme toca quando o tempo acabar.',
    endsAtTitle: 'Se você começar agora, termina às',
    usesTitle: 'Para que serve um timer de {duration}',
    otherTimers: 'Outros timers',
    bands: {
      short: {
        intro: 'Um timer de {duration} é perfeito para momentos curtos e concentrados, em que ficar olhando o relógio atrapalha.',
        uses: ['Intervalos de exercício e prancha', 'Escovar os dentes', 'Deixar o chá em infusão', 'Rodadas de jogos e quizzes'],
      },
      medium: {
        intro: 'Um timer de {duration} é ideal para cozinhar, tarefas rápidas e sessões curtas de foco.',
        uses: ['Cozinhar ovos e macarrão', 'Arrumação relâmpago', 'Meditação curta', 'Cochilo rápido'],
      },
      focus: {
        intro: 'Um timer de {duration} é uma duração clássica para trabalho concentrado, blocos de estudo e treinos.',
        uses: ['Sessão de estudo ou lição de casa', 'Bloco de foco estilo Pomodoro', 'Treino ou aula de yoga', 'Tempo limite de reunião'],
      },
      long: {
        intro: 'Um timer de {duration} ajuda em tarefas longas: provas, bolos e assados, cozimento lento e limite de tempo de tela.',
        uses: ['Simulado de prova', 'Bolos e assados no forno', 'Limite de tempo de tela', 'Lembrete do estacionamento rotativo'],
      },
      veryLong: {
        intro: 'Um timer de {duration} é útil para esperas longas: fermentação de massa, carregamento, marinada ou janelas de jejum.',
        uses: ['Fermentação de massa e marinadas', 'Janela de jejum', 'Pausa em viagem longa ou turno', 'Roupa na máquina e tarefas de casa'],
      },
    },
    faq: [
      {
        q: 'Como iniciar um timer de {duration}?',
        a: 'Toque em Iniciar. A contagem regressiva começa na hora e um alarme toca depois de {duration}.',
      },
      {
        q: 'O timer de {duration} funciona se eu trocar de aba?',
        a: 'Sim. Ele mantém o tempo preciso em segundo plano e o alarme toca no zero. Deixe o navegador aberto e o volume ligado.',
      },
      {
        q: 'Posso pausar o timer de {duration}?',
        a: 'Sim. Toque em Pausar e Continuar quando precisar. Zerar recomeça os {duration}.',
      },
    ],
  },

  stopwatch: {
    metaTitle: 'Cronômetro Online — Grátis, Preciso e com Voltas | NoMore5Mins',
    metaDescription:
      'Cronômetro online grátis com tempos de volta, destaque da volta mais rápida e mais lenta e tela cheia. Precisão de 1/100 s e atalhos de teclado.',
    h1: 'Cronômetro online',
    lead: 'Toque em Iniciar para medir o tempo com precisão de centésimos de segundo. Registre voltas e veja a mais rápida e a mais lenta.',
    lapsTitle: 'Voltas',
    lapCol: 'Volta',
    splitCol: 'Tempo da volta',
    totalCol: 'Total',
    steps: [
      'Toque em Iniciar ou aperte a barra de espaço.',
      'Toque em Volta (ou L) para registrar uma volta sem parar.',
      'Toque em Pausar para parar o relógio; toque em Continuar para retomar.',
      'Toque em Zerar (ou R) para apagar o tempo e todas as voltas.',
    ],
    facts: [
      'Precisão de 1/100 de segundo',
      'Voltas ilimitadas, com a mais rápida e a mais lenta em destaque',
      'Continua rodando em abas em segundo plano',
      'Atalhos de teclado: Espaço, L, R, F',
    ],
    contentTitle: 'Um cronômetro preciso para esporte, ciência e o dia a dia',
    content: [
      'O cronômetro mede o tempo decorrido com o relógio de alta resolução do navegador e o exibe com precisão de centésimos de segundo.',
      'Os tempos de volta facilitam comparar repetições — voltas na corrida, piscinas na natação, ensaios de apresentação ou etapas de laboratório. A volta mais rápida aparece em verde e a mais lenta em vermelho.',
    ],
    faq: [
      {
        q: 'Qual é a precisão do cronômetro online?',
        a: 'Ele usa o relógio de alta resolução do navegador e mostra centésimos de segundo. A precisão só é limitada pelo seu aparelho.',
      },
      {
        q: 'Como registro uma volta?',
        a: 'Toque em Volta ou aperte a tecla L com o cronômetro rodando. Cada volta mostra o próprio tempo e o total.',
      },
      {
        q: 'O cronômetro continua rodando se eu trocar de aba?',
        a: 'Sim. Ele se baseia em marcações de tempo, então o tempo estará correto quando você voltar.',
      },
    ],
  },

  pomodoro: {
    metaTitle: 'Timer Pomodoro — Temporizador de Foco Online Grátis | NoMore5Mins',
    metaDescription:
      'Timer Pomodoro online grátis: sessões de foco de 25 minutos, pausas de 5 e uma pausa longa a cada 4 rodadas. Durações, sons e estatísticas diárias.',
    h1: 'Timer Pomodoro',
    lead: 'Trabalhe em sessões de foco de 25 minutos com pausas curtas entre elas. Depois de quatro sessões, faça uma pausa mais longa.',
    settingsTitle: 'Configurações',
    focusLen: 'Foco (min)',
    shortLen: 'Pausa curta (min)',
    longLen: 'Pausa longa (min)',
    rounds: 'Sessões antes da pausa longa',
    autoStart: 'Iniciar a próxima fase automaticamente',
    skip: 'Pular',
    todayTitle: 'Hoje',
    steps: [
      'Escolha uma tarefa e toque em Iniciar foco.',
      'Trabalhe até o sino tocar — sem e-mail, sem celular.',
      'Faça a pausa de 5 minutos. Levante-se e beba água.',
      'Depois de quatro sessões, faça uma pausa de 15 a 30 minutos.',
    ],
    facts: [
      'Padrão de 25 / 5 / 15 minutos, totalmente ajustável',
      'Troca automática de fase (opcional)',
      'Contagem diária de sessões e minutos de foco',
      'Configurações salvas no seu navegador',
    ],
    contentTitle: 'O que é a Técnica Pomodoro?',
    content: [
      'A Técnica Pomodoro é um método de gestão do tempo criado por Francesco Cirillo no fim dos anos 1980. Você trabalha em intervalos concentrados de 25 minutos, chamados “pomodoros”, separados por pausas curtas.',
      'Intervalos curtos e fixos tornam mais fácil começar tarefas difíceis e mais difícil se perder em distrações. As pausas mantêm sua atenção renovada ao longo do dia.',
    ],
    faq: [
      {
        q: 'Quanto tempo dura um Pomodoro?',
        a: 'Um Pomodoro clássico tem 25 minutos de foco seguidos de uma pausa de 5 minutos. Depois de quatro Pomodoros, você faz uma pausa de 15 a 30 minutos.',
      },
      {
        q: 'Posso mudar as durações?',
        a: 'Sim. Abra as Configurações para mudar a duração do foco, da pausa curta e da pausa longa. Alternativas populares são 50/10 e 90/20.',
      },
      {
        q: 'A Técnica Pomodoro funciona?',
        a: 'Muitos estudantes e profissionais percebem que intervalos fixos reduzem a procrastinação e o cansaço mental. Teste por uma semana e ajuste as durações ao seu ritmo.',
      },
    ],
  },

  clock: {
    metaTitle: 'Que Horas São Agora? — Hora Certa Exata | NoMore5Mins',
    metaDescription:
      'A hora certa e a data exatas do seu fuso horário, com segundos. Relógio grande em tela cheia para usar na mesa ou na cabeceira.',
    h1: 'Hora certa agora',
    lead: 'A hora atual no seu fuso horário, atualizada a cada segundo.',
    zoneLabel: 'Seu fuso horário',
    dateLabel: 'Data',
    weekLabel: 'Semana',
    dayOfYear: 'Dia do ano',
    format24: 'Formato 24 horas',
    showSeconds: 'Mostrar segundos',
    facts: [
      'Usa o relógio e o fuso horário do seu aparelho',
      'Horário de verão ajustado automaticamente',
      'Modo tela cheia para mesa, TV ou cabeceira',
    ],
    contentTitle: 'Um relógio preciso e fácil de ler em qualquer tela',
    content: [
      'Esta página mostra a hora local atual com base no relógio e no fuso horário do seu aparelho. A maioria dos aparelhos sincroniza o relógio pela internet, então a hora costuma ser precisa com margem de frações de segundo.',
      'Toque em Tela cheia para transformar qualquer celular, tablet, notebook ou TV em um relógio grande e sem distrações.',
    ],
    faq: [
      {
        q: 'Qual é a precisão deste relógio?',
        a: 'Ele mostra o relógio do seu aparelho, que normalmente é sincronizado com servidores de hora da internet e é preciso com margem de frações de segundo.',
      },
      {
        q: 'Posso usar como relógio de mesa ou de cabeceira?',
        a: 'Sim. Toque em Tela cheia. Quando o navegador permite, a tela fica ligada enquanto o relógio estiver aberto.',
      },
    ],
  },

  worldClock: {
    metaTitle: 'Relógio Mundial — Hora Atual em Cidades do Mundo | NoMore5Mins',
    metaDescription:
      'Veja a hora atual em Nova York, Londres, Tóquio, Dubai, Sydney e mais. Diferença de fuso, dia/noite e horário de verão ajustados automaticamente.',
    h1: 'Relógio mundial',
    lead: 'A hora local atual nas principais cidades, com a diferença em relação ao seu horário.',
    search: 'Buscar cidade',
    addTitle: 'Adicionar cidade',
    facts: [
      'Horário de verão ajustado automaticamente',
      'Mostra a diferença em relação ao seu horário',
      'Sua lista de cidades fica salva no navegador',
    ],
    contentTitle: 'Planeje ligações e reuniões entre fusos horários',
    content: [
      'O relógio mundial mostra a hora atual de cada cidade usando o banco de dados oficial de fusos horários do seu navegador, então as mudanças de horário de verão são aplicadas automaticamente.',
      'Cada cartão mostra se é dia ou noite e quantas horas aquela cidade está à frente ou atrás de você — prático para reuniões, viagens e para ligar para a família no exterior.',
    ],
    faq: [
      {
        q: 'O relógio mundial considera o horário de verão?',
        a: 'Sim. O banco de dados de fusos horários do navegador aplica automaticamente as regras de horário de verão de cada cidade.',
      },
      {
        q: 'Posso adicionar minhas próprias cidades?',
        a: 'Sim. Use “Adicionar cidade”. Sua lista fica salva neste navegador.',
      },
    ],
  },

  sleep: {
    metaTitle: 'Calculadora do Sono — Que Horas Dormir e Acordar | NoMore5Mins',
    metaDescription:
      'Calculadora do sono grátis baseada em ciclos de 90 minutos. Descubra a melhor hora para dormir e acordar bem, ou quando acordar se deitar agora.',
    h1: 'Calculadora do sono',
    lead: 'Acordar no fim de um ciclo de sono ajuda você a se sentir menos grogue. Escolha um horário para acordar ou vá dormir agora.',
    modeWake: 'Quero acordar às',
    modeNow: 'Vou dormir agora',
    calculate: 'Calcular',
    fallAsleep: 'Minutos para pegar no sono',
    bedtimesTitle: 'Vá dormir em um destes horários',
    waketimesTitle: 'Coloque o alarme para um destes horários',
    steps: [
      'Escolha o horário em que quer acordar ou selecione “Vou dormir agora”.',
      'Ajuste quanto tempo você costuma levar para pegar no sono (15 minutos é o comum).',
      'Escolha um horário da lista. De 5 a 6 ciclos (7,5 a 9 horas) é o ideal para a maioria dos adultos.',
    ],
    facts: [
      'Um ciclo de sono dura cerca de 90 minutos',
      'Adultos precisam de 7 a 9 horas, ou seja, 5 a 6 ciclos',
      'Pegar no sono leva de 10 a 20 minutos',
    ],
    contentTitle: 'Como funcionam os ciclos do sono',
    content: [
      'Durante a noite, você passa pelo sono leve, pelo sono profundo e pelo sono REM em ciclos de aproximadamente 90 minutos. Acordar no sono profundo deixa você grogue; acordar no fim de um ciclo é muito mais fácil.',
      'A calculadora conta para trás (ou para a frente) em etapas de 90 minutos e soma o tempo que você leva para pegar no sono. Cada pessoa é um pouco diferente, então use os resultados como ponto de partida.',
      'Esta ferramenta é apenas informativa e não substitui orientação médica. Se você tem dificuldade para dormir com frequência, procure um médico.',
    ],
    faq: [
      {
        q: 'Quanto tempo dura um ciclo de sono?',
        a: 'Cerca de 90 minutos em média, embora varie entre 70 e 120 minutos de pessoa para pessoa e ao longo da noite.',
      },
      {
        q: 'De quantos ciclos de sono eu preciso?',
        a: 'A maioria dos adultos se sente melhor depois de 5 ou 6 ciclos, ou seja, de 7,5 a 9 horas de sono.',
      },
      {
        q: 'Que horas devo dormir para acordar às 7h?',
        a: 'Para 5 ciclos, deite-se por volta das 23h15; para 6 ciclos, por volta das 21h45. Os dois horários incluem 15 minutos para pegar no sono.',
      },
    ],
  },

  products: {
    title: 'Durma melhor, acorde com mais facilidade',
    titleFocus: 'Itens para foco total',
    subtitle: 'Produtos úteis que recomendamos para o sono, as manhãs e a concentração.',
    cta: 'Ver na Amazon',
    disclosure: 'Links de afiliados: podemos receber uma comissão por compras qualificadas, sem custo extra para você.',
    items: {
      sunrise: { name: 'Despertador simulador de amanhecer', desc: 'Uma luz que clareia aos poucos antes do alarme, como um nascer do sol natural.', query: 'despertador simulador de amanhecer' },
      mask: { name: 'Máscara de dormir de seda', desc: 'Bloqueia totalmente a luz para um sono mais profundo, mesmo depois do amanhecer.', query: 'máscara de dormir de seda' },
      noise: { name: 'Aparelho de ruído branco', desc: 'Abafa o trânsito e o ronco com um som constante e relaxante.', query: 'aparelho de ruído branco' },
      pillow: { name: 'Travesseiro ergonômico', desc: 'Apoio de espuma viscoelástica para o pescoço e os ombros.', query: 'travesseiro ergonômico viscoelástico' },
      blanket: { name: 'Cobertor pesado', desc: 'Uma pressão suave e uniforme que muita gente acha calmante.', query: 'cobertor pesado' },
      loudAlarm: { name: 'Despertador extra-alto', desc: 'Alarme potente com vibrador de cama para quem tem sono pesado.', query: 'despertador alto com vibrador de cama' },
      headphones: { name: 'Fone com cancelamento de ruído', desc: 'Silencia o escritório aberto ou a cafeteria enquanto você se concentra.', query: 'fone de ouvido com cancelamento de ruído' },
      cubeTimer: { name: 'Timer Pomodoro em cubo', desc: 'Vire para iniciar um timer de 5, 15, 25 ou 45 minutos — sem precisar do celular.', query: 'timer cubo pomodoro' },
      glasses: { name: 'Óculos com filtro de luz azul', desc: 'Reduzem o brilho e o cansaço visual em longas horas diante da tela.', query: 'óculos com filtro de luz azul' },
      deskLamp: { name: 'Luminária de mesa LED', desc: 'Luz ajustável e sem cintilação para estudar e trabalhar.', query: 'luminária de mesa led com dimmer' },
    },
  },

  langBanner: {
    text: 'Esta página também está disponível em {language}.',
    switch: 'Mudar',
    dismiss: 'Não, obrigado',
  },

  footer: {
    tagline: 'Ferramentas de tempo grátis que funcionam em qualquer navegador.',
    toolsTitle: 'Ferramentas',
    popularTitle: 'Populares',
    siteTitle: 'NoMore5Mins',
    about: 'Sobre',
    blog: 'Blog (em inglês)',
    contact: 'Contato',
    privacy: 'Política de privacidade',
    terms: 'Termos de uso',
    rights: 'Todos os direitos reservados.',
    languages: 'Idiomas',
  },
};

export default pt;
