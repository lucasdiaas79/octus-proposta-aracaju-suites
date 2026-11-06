/**
 * CONTEÚDO DA PROPOSTA — todos os textos ficam aqui.
 * Trechos entre *asteriscos* recebem destaque em ciano.
 *
 * Modelo de proposta Octus:
 *  - FIXO: hub, DRE, metodologia, próximo passo.
 *  - PERSONALIZADO: capa, oportunidade, onde ganhar mais, alavancas, plano, projeção, implantação.
 */

export const meta = {
  client: 'Aracaju Suites',
  agency: 'Studio Octus',
  place: 'Coroa do Meio · Aracaju · SE',
  year: '2026',
  photoCaption: 'Rooftop Aracaju Suites',
}

/** Capítulos do menu em pílula. `from`/`to` = índices das telas. */
export const chapters = [
  { label: 'Octus', from: 1, to: 2 },
  { label: 'Oportunidade', from: 3, to: 4 },
  { label: 'Estratégia', from: 5, to: 7 },
  { label: 'Execução', from: 8, to: 9 },
]

export const sections = [
  'Capa',
  'O hub Octus',
  'Crescimento no resultado',
  'A oportunidade',
  'Onde o hotel pode ganhar mais',
  'Alavancas',
  'O que vamos fazer',
  'Para onde vamos',
  'Metodologia',
  'Implantação',
  'Próximo passo',
]

export const cover = {
  tag: 'Proposta de crescimento',
  disciplines: ['Estratégia', 'Growth', 'Tecnologia'],
  title: 'Aracaju Suites',
  subtitle: 'Um plano para o hotel faturar mais e lucrar melhor: mais receita por quarto, por hóspede e o ano inteiro.',
}

export const hub = {
  label: 'Quem somos',
  title: 'Um hub de *growth* e aceleração.',
  lead: 'Um time completo para fazer o hotel faturar mais: estratégia, mídia, tecnologia e dados, pensando e executando juntos.',
  stats: [
    { value: '6', label: 'frentes integradas' },
    { value: '360°', label: 'visão de negócio' },
    { value: '1', label: 'time do início ao fim' },
  ],
  center: 'Visão 360° de growth',
  areas: [
    { name: 'Diretor de marketing', text: 'Direção, posicionamento e marca' },
    { name: 'Gestores de tráfego', text: 'Mídia paga que gera reservas' },
    { name: 'Time de tech', text: 'Automações sob medida para o negócio' },
    { name: 'Dados e métricas', text: 'Sistemas que mapeiam cada número' },
    { name: 'Expansão', text: 'Novos públicos e novos mercados' },
    { name: 'Growth 360°', text: 'Estratégia que olha o negócio inteiro' },
  ],
  highlight: 1,
  closing: '',
}

export const dre = {
  label: 'Como medimos',
  title: 'Crescimento que aparece no *resultado*.',
  lead: 'Não medimos curtidas. Medimos o que muda no DRE: quanto entra, quanto sai e quanto fica.',
  cards: [
    { key: 'Faturamento', arrow: '↑', text: 'Mais ocupação, diária certa e consumo extra' },
    { key: 'Custos', arrow: '↓', text: 'Menos comissão e menos trabalho manual' },
    { key: 'Lucro', arrow: '↑', text: 'Mais dinheiro no caixa no fim do mês' },
  ],
}

export const opportunity = {
  label: 'A oportunidade',
  title: 'Aracaju recebe cada vez mais visitantes. O Aracaju Suites pode transformar essa demanda em *faturamento*.',
  stats: [
    { value: '1,38', unit: 'mi', label: 'Passageiros no aeroporto em 2025' },
    { value: '+43', unit: '%', label: 'Crescimento desde 2022' },
    { value: '219', unit: 'mil', label: 'Turistas na Orla no São João' },
  ],
  chart: {
    title: 'Passageiros · Aeroporto de Aracaju',
    bars: [
      { label: '2022', value: 961575 },
      { label: '2025', value: 1377686 },
    ],
  },
  source: 'Fontes: Aena via Prefeitura de Aracaju (jan/2026) · Governo de Sergipe (mai/2026)',
}

export const gains = {
  label: 'Onde o hotel pode ganhar mais',
  title: 'Quatro oportunidades de *faturamento* já na mesa.',
  items: [
    {
      icon: 'wine',
      title: 'Rooftop com vista para o mar',
      today: 'Ativo raro na cidade, usado em eventos pontuais.',
      action: 'Eventos e novas formas de monetização, sugeridos e promovidos por nós.',
      impact: ['↑ Receita por hóspede', '↑ Faturamento'],
    },
    {
      icon: 'key',
      title: 'Reservas diretas',
      today: 'No site, as diárias aparecem como "a partir de R$ 0,00".',
      action: 'Preços visíveis, motor de reserva otimizado e remarketing.',
      impact: ['↓ Comissões', '↑ Margem'],
    },
    {
      icon: 'calendar',
      title: 'Trabalho e estadias longas',
      today: 'Quartos com mesa e cooktop, sem comunicação dirigida.',
      action: 'Tarifas e pacotes para empresas, eventos e estadias longas.',
      impact: ['↑ Ocupação', '↑ Faturamento'],
    },
    {
      icon: 'zap',
      title: 'Vitrine digital',
      today: 'Site com informações desatualizadas e feed do Instagram fora do ar.',
      action: 'Site novo, fotos e conteúdo que vendem a experiência.',
      impact: ['↑ Conversão', '↑ Reservas'],
    },
  ],
  todayLabel: 'Ponto de partida',
  actionLabel: 'O que faremos',
  note: 'Levantamento a partir da análise externa do hotel. Validamos cada ponto no diagnóstico.',
}

export type LeverChart = 'occupancy' | 'revpar' | 'ticket' | 'time'

export const levers = {
  label: 'Estratégia',
  title: 'Três alavancas de faturamento e uma base de eficiência.',
  ticketParts: ['Diária', 'Consumo', 'Eventos e rooftop'],
  items: [
    {
      tab: 'Ocupação',
      title: 'Quartos ocupados o ano inteiro',
      points: ['Mapa de sazonalidade e picos', 'Campanhas para lazer, trabalho e eventos', 'Tarifas para empresas e estadias longas'],
      insight: 'Entre a 13 de Julho e a Atalaia, o hotel atende lazer e trabalho. Sergipe teve 2.157 eventos no calendário de 2025.',
      tags: ['↑ Faturamento'],
      chart: 'occupancy' as LeverChart,
      chartLabel: 'Ocupação ao longo do ano',
      photo: 'hero',
    },
    {
      tab: 'Receita por quarto',
      title: 'Cada diária no preço certo',
      points: ['Preço dinâmico guiado pela demanda', 'Reserva direta com preços visíveis', 'Upgrade para quartos com vista para o mar'],
      insight: 'Os quartos com varanda e vista para o mar são o upgrade natural a oferecer em cada reserva.',
      tags: ['↑ Faturamento', '↑ Margem'],
      chart: 'revpar' as LeverChart,
      chartLabel: 'Receita por quarto disponível',
      photo: 'room',
    },
    {
      tab: 'Receita por hóspede',
      title: 'Mais valor em cada estadia',
      points: ['Eventos no rooftop, sugeridos e promovidos por nós', 'Novas formas de monetização do rooftop', 'Consumo e experiências durante a estadia'],
      insight: 'O rooftop com vista para o mar e o rio é um ativo raro em Aracaju. Hoje gera receita só em datas pontuais.',
      tags: ['↑ Receita por hóspede'],
      chart: 'ticket' as LeverChart,
      chartLabel: 'Composição da receita por hóspede',
      photo: 'secondary',
    },
    {
      tab: 'Operação leve',
      title: 'Menos atrito, menos custo',
      points: ['Check-in online', 'Atendimento automatizado no WhatsApp', 'Pagamentos e cobranças automáticos'],
      insight: 'Menos tarefa manual na recepção, mais tempo para receber bem e vender mais.',
      tags: ['↓ Custos', '↑ Lucro'],
      chart: 'time' as LeverChart,
      chartLabel: 'Tempo da equipe em tarefas manuais',
      photo: 'view',
    },
  ],
}

export const plan = {
  label: 'O que vamos fazer',
  title: 'O plano de execução, frente por frente.',
  lead: 'Cada entrega tem um objetivo claro no resultado do hotel.',
  fronts: [
    {
      name: 'Aquisição',
      goal: '↑ Ocupação',
      team: 'Gestores de tráfego · Diretor de marketing',
      items: ['Mapa de sazonalidade', 'Calendário de campanhas', 'Tráfego pago para lazer e empresas', 'Parcerias com empresas e eventos', 'Conteúdo do hotel e do rooftop'],
    },
    {
      name: 'Receita',
      goal: '↑ Faturamento por quarto',
      team: 'Dados e métricas · Growth 360°',
      items: ['Revisão de tarifas e preço dinâmico', 'Motor de reserva com preços visíveis', 'Pacotes e upgrade para vista mar', 'Monitoramento de ocupação, ADR e RevPAR'],
    },
    {
      name: 'Experiência',
      goal: '↑ Receita por hóspede',
      team: 'Diretor de marketing · Expansão',
      items: ['Agenda de eventos no rooftop', 'Novas formas de monetização', 'Consumo durante a estadia', 'Pós-estadia e avaliações'],
    },
    {
      name: 'Tecnologia',
      goal: '↓ Custos · ↑ Lucro',
      team: 'Time de tech · Dados e métricas',
      items: ['Site novo com reserva direta', 'Automação de WhatsApp', 'Check-in online', 'Painel de indicadores e DRE'],
    },
  ],
}

export const projection = {
  label: 'Para onde vamos',
  title: 'Novas fontes de receita somadas a uma operação mais *eficiente*.',
  layers: ['Diárias', 'Reservas diretas', 'Consumo', 'Eventos e rooftop'],
  profit: 'Lucro',
  x: ['Hoje', 'Ciclo 1', 'Ciclo 2', 'Ciclo 3'],
  note: 'Cenário ilustrativo. Metas e números são definidos no diagnóstico, a partir do DRE do hotel.',
}

export const method = {
  label: 'Metodologia',
  title: 'Do diagnóstico à *escala*.',
  steps: [
    { name: 'Diagnosticar', text: 'Raio-X da operação, dos canais e do DRE' },
    { name: 'Estruturar', text: 'Plano, metas e indicadores' },
    { name: 'Ativar', text: 'Campanhas, consumo e automações no ar' },
    { name: 'Otimizar', text: 'Ajustes semanais guiados por dados' },
    { name: 'Escalar', text: 'Mais do que funciona, novos mercados' },
  ],
}

export const rollout = {
  label: 'Implantação',
  title: 'Roteiro de implantação em ciclos.',
  lead: 'Cada ciclo entrega resultado e prepara o próximo.',
  cycles: [
    { name: 'Ciclo 1', sub: 'Diagnóstico', items: ['Auditoria da operação', 'DRE e indicadores base', 'Mapa de sazonalidade'], kpi: 'Linha de base definida' },
    { name: 'Ciclo 2', sub: 'Ativação', items: ['Site novo e reserva direta', 'Campanhas e parcerias', 'Agenda de eventos no rooftop'], kpi: 'Ocupação e receita por hóspede em alta' },
    { name: 'Ciclo 3', sub: 'Escala', items: ['Preço dinâmico', 'Novas monetizações', 'Novos públicos e mercados'], kpi: 'Margem e lucro em alta' },
  ],
}

export const closing = {
  title: 'O próximo estágio do Aracaju Suites começa com uma operação *mais inteligente*.',
  next: 'Próximo passo',
  nextText: 'Diagnóstico da operação e do DRE.',
  receives: ['Raio-X da operação e do DRE', 'Mapa de oportunidades priorizadas', 'Plano de ação com metas'],
  signature: 'Studio Octus × Aracaju Suites',
}
