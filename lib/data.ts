/* ──────────────────────────────────────────────
 * Бегония Venus — Mock data & TypeScript types
 * ────────────────────────────────────────────── */

// ── Product type ──

export interface Product {
  id: string;
  slug: string;
  nameRu: string;
  nameLatin: string;
  series: string;
  type: 'rex' | 'rhizomatous' | 'cane' | 'shrub' | 'species' | 'trailing';
  format: 'baby' | 'leaf' | 'cutting' | 'adult';
  price: number;
  oldPrice?: number;
  stock: number;
  status: 'in-stock' | 'preorder' | 'out-of-stock';
  preorderDate?: string;
  difficulty: 'easy' | 'medium' | 'hard';
  light: string;
  water: string;
  humidity: string;
  temperature: string;
  petSafe: boolean;
  isNew: boolean;
  isRare: boolean;
  iridescent: boolean;
  terrarium: boolean;
  mini: boolean;
  images: string[];
  description: string;
  careInstructions: string;
  bonusPoints: number;
}

// ── Category type ──

export interface Category {
  slug: string;
  name: string;
  nameLatin: string;
  count: number;
  icon: string;
}

// ── Blog post type ──

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
}

// ── Review type ──

export interface Review {
  id: string;
  name: string;
  city: string;
  text: string;
  product: string;
  rating: number;
}

// ── PRODUCTS (placeholder — filled via edits) ──
export const products: Product[] = [
  {
    id: 'p1',
    slug: 'fireworks',
    nameRu: 'Фейерверк',
    nameLatin: "Begonia rex 'Fireworks'",
    series: '',
    type: 'rex',
    format: 'baby',
    price: 890,
    stock: 3,
    status: 'in-stock',
    difficulty: 'medium',
    light: 'Яркий рассеянный свет',
    water: 'Умеренный, по мере просыхания верхнего слоя',
    humidity: '60-80%',
    temperature: '18-24 °C',
    petSafe: false,
    isNew: false,
    isRare: true,
    iridescent: false,
    terrarium: false,
    mini: false,
    images: ['/images/fireworks-1.jpg', '/images/fireworks-2.jpg'],
    description:
      'Эффектная рексовая бегония с серебристо-лавандовыми листьями и контрастными тёмно-зелёными прожилками. При боковом освещении рисунок напоминает вспышки фейерверка — отсюда и название сорта.',
    careInstructions:
      'Предпочитает яркий рассеянный свет без прямых лучей. Полив умеренный, между поливами верхний слой грунта должен просохнуть на 1-2 см. Опрыскивание не рекомендуется — лучше использовать поддон с керамзитом.',
    bonusPoints: 89,
  },
  {
    id: 'p2',
    slug: 'iron-cross',
    nameRu: 'Железный Крест',
    nameLatin: "Begonia masoniana 'Iron Cross'",
    series: '',
    type: 'species',
    format: 'baby',
    price: 750,
    stock: 5,
    status: 'in-stock',
    difficulty: 'medium',
    light: 'Полутень — рассеянный свет',
    water: 'Умеренный',
    humidity: '50-70%',
    temperature: '18-26 °C',
    petSafe: false,
    isNew: true,
    isRare: false,
    iridescent: false,
    terrarium: false,
    mini: false,
    images: ['/images/iron-cross-1.jpg', '/images/iron-cross-2.jpg'],
    description:
      'Легендарная бегония Мэсона с текстурными бугристыми листьями ярко-зелёного цвета и характерным тёмно-коричневым рисунком в форме мальтийского креста. Настоящая классика коллекции.',
    careInstructions:
      'Любит стабильные условия без сквозняков. Грунт лёгкий, воздухопроницаемый. Полив после просыхания верхних 2 см почвы. Не переносит залив — корневища легко загнивают.',
    bonusPoints: 75,
  },
  {
    id: 'p3',
    slug: 'escargot',
    nameRu: 'Эскарго',
    nameLatin: "Begonia rex 'Escargot'",
    series: '',
    type: 'rex',
    format: 'baby',
    price: 620,
    stock: 1,
    status: 'in-stock',
    difficulty: 'medium',
    light: 'Рассеянный свет',
    water: 'Умеренный',
    humidity: '60-75%',
    temperature: '18-24 °C',
    petSafe: false,
    isNew: false,
    isRare: false,
    iridescent: false,
    terrarium: false,
    mini: false,
    images: ['/images/escargot-1.jpg', '/images/escargot-2.jpg'],
    description:
      'Знаменитая «улиточная» бегония — листья закручиваются у основания плотной спиралью, напоминая раковину улитки. Серебристо-зелёная листва с тёмным спиральным рисунком.',
    careInstructions:
      'Стандартный уход для рексов. Избегайте попадания воды на листья. Пересаживайте ежегодно весной в неглубокий широкий горшок. Хорошо отзывается на подкормку в период роста.',
    bonusPoints: 62,
  },
  {
    id: 'p4',
    slug: 'luxurians',
    nameRu: 'Люксурианс',
    nameLatin: 'Begonia luxurians',
    series: '',
    type: 'species',
    format: 'baby',
    price: 490,
    stock: 7,
    status: 'in-stock',
    difficulty: 'easy',
    light: 'Яркий рассеянный — полутень',
    water: 'Обильный летом, умеренный зимой',
    humidity: '50-70%',
    temperature: '16-26 °C',
    petSafe: false,
    isNew: false,
    isRare: false,
    iridescent: false,
    terrarium: false,
    mini: false,
    images: ['/images/luxurians-1.jpg', '/images/luxurians-2.jpg'],
    description:
      'Необычная пальмовидная бегония с узкими пальчатыми листьями, собранными в зонтик на верхушке стебля. Внешне напоминает миниатюрную пальму. Быстрорастущий вид, в комнатных условиях достигает 1 м.',
    careInstructions:
      'Неприхотлива в уходе. Любит обильный полив летом и хороший дренаж. Зимой полив сокращают. Легко размножается стеблевыми черенками.',
    bonusPoints: 49,
  },
  {
    id: 'p5',
    slug: 'brevirimosa',
    nameRu: 'Бревиримоза',
    nameLatin: 'Begonia brevirimosa',
    series: '',
    type: 'species',
    format: 'baby',
    price: 1200,
    stock: 2,
    status: 'in-stock',
    difficulty: 'hard',
    light: 'Рассеянный свет',
    water: 'Регулярный, без пересыхания',
    humidity: '70-90%',
    temperature: '20-26 °C',
    petSafe: false,
    isNew: false,
    isRare: true,
    iridescent: false,
    terrarium: true,
    mini: false,
    images: ['/images/brevirimosa-1.jpg', '/images/brevirimosa-2.jpg'],
    description:
      'Роскошная видовая бегония из Папуа — Новой Гвинеи с крупными удлинёнными листьями, покрытыми ярко-розовыми пятнами на тёмно-зелёном фоне. Настоящий коллекционный экземпляр.',
    careInstructions:
      'Требует высокой влажности — идеально для террариума или флорариума. Субстрат всегда слегка влажный, без застоя воды. Не переносит сухой воздух и сквозняки.',
    bonusPoints: 120,
  },
  {
    id: 'p6',
    slug: 'ds-lunnyj-svet',
    nameRu: 'DS-Лунный свет',
    nameLatin: "Begonia rex 'DS-Lunnyj Svet'",
    series: 'DS',
    type: 'rex',
    format: 'baby',
    price: 350,
    stock: 12,
    status: 'in-stock',
    difficulty: 'easy',
    light: 'Рассеянный свет — полутень',
    water: 'Умеренный',
    humidity: '50-65%',
    temperature: '18-24 °C',
    petSafe: false,
    isNew: false,
    isRare: false,
    iridescent: false,
    terrarium: false,
    mini: false,
    images: ['/images/ds-lunnyj-svet-1.jpg', '/images/ds-lunnyj-svet-2.jpg'],
    description:
      'Серия DS от российского селекционера Дмитрия Сафонова. Крупные серебристо-белые листья с нежным перламутровым отливом и тонкой зелёной каймой. Очень нарядный и при этом устойчивый сорт.',
    careInstructions:
      'Отлично подходит для начинающих коллекционеров. Стандартный уход для рексов, легко прощает ошибки. Быстро разрастается, образуя пышный кустик.',
    bonusPoints: 35,
  },
  {
    id: 'p7',
    slug: 'silver-limbo',
    nameRu: 'Сильвер Лимбо',
    nameLatin: "Begonia rex 'Silver Limbo'",
    series: '',
    type: 'rex',
    format: 'baby',
    price: 580,
    stock: 4,
    status: 'in-stock',
    difficulty: 'medium',
    light: 'Яркий рассеянный свет',
    water: 'Умеренный',
    humidity: '60-75%',
    temperature: '18-24 °C',
    petSafe: false,
    isNew: false,
    isRare: false,
    iridescent: true,
    terrarium: false,
    mini: true,
    images: ['/images/silver-limbo-1.jpg', '/images/silver-limbo-2.jpg'],
    description:
      'Компактная рексовая бегония с мерцающими серебристыми листьями. При изменении угла освещения поверхность листа играет перламутровыми переливами от розового до голубого. Миниатюрный сорт — идеален для полок.',
    careInstructions:
      'Компактный рост — горшок 8-10 см. Не допускайте пересыхания, но и залив губителен. Подкормка половинной дозой раз в две недели в сезон роста.',
    bonusPoints: 58,
  },
  {
    id: 'p8',
    slug: 'maculata',
    nameRu: 'Макулата',
    nameLatin: "Begonia maculata 'Wightii'",
    series: '',
    type: 'cane',
    format: 'baby',
    price: 420,
    stock: 8,
    status: 'in-stock',
    difficulty: 'easy',
    light: 'Яркий рассеянный свет',
    water: 'Регулярный',
    humidity: '45-65%',
    temperature: '18-26 °C',
    petSafe: false,
    isNew: false,
    isRare: false,
    iridescent: false,
    terrarium: false,
    mini: false,
    images: ['/images/maculata-1.jpg', '/images/maculata-2.jpg'],
    description:
      'Бегония в горошек — один из самых узнаваемых сортов в мире. Удлинённые листья с серебристыми крапинками на тёмно-зелёном фоне и эффектной бордовой изнанкой. Тростниковый тип — растёт вертикально.',
    careInstructions:
      'Простая в уходе. Любит яркий рассеянный свет, регулярный полив и периодическую обрезку для формирования куста. Легко размножается стеблевыми черенками в воде.',
    bonusPoints: 42,
  },
  {
    id: 'p9',
    slug: 'listada',
    nameRu: 'Листада',
    nameLatin: 'Begonia listada',
    series: '',
    type: 'rhizomatous',
    format: 'baby',
    price: 950,
    stock: 2,
    status: 'in-stock',
    difficulty: 'medium',
    light: 'Полутень',
    water: 'Умеренный',
    humidity: '70-85%',
    temperature: '20-26 °C',
    petSafe: false,
    isNew: false,
    isRare: true,
    iridescent: false,
    terrarium: true,
    mini: true,
    images: ['/images/listada-1.jpg', '/images/listada-2.jpg'],
    description:
      'Миниатюрная ризоматозная бегония с бархатистыми тёмно-зелёными листьями и яркой салатовой полосой по центральной жилке. Идеальный кандидат для террариумов и флорариумов.',
    careInstructions:
      'Лучше всего чувствует себя в террариуме с высокой влажностью. В открытом содержании нуждается в регулярном опрыскивании. Субстрат рыхлый, на основе мха и коры.',
    bonusPoints: 95,
  },
  {
    id: 'p10',
    slug: 'ds-ognennyj-zakat',
    nameRu: 'DS-Огненный закат',
    nameLatin: "Begonia rex 'DS-Ognennyj Zakat'",
    series: 'DS',
    type: 'rex',
    format: 'baby',
    price: 450,
    stock: 6,
    status: 'in-stock',
    difficulty: 'easy',
    light: 'Рассеянный свет',
    water: 'Умеренный',
    humidity: '50-65%',
    temperature: '18-24 °C',
    petSafe: false,
    isNew: true,
    isRare: false,
    iridescent: false,
    terrarium: false,
    mini: false,
    images: ['/images/ds-ognennyj-zakat-1.jpg', '/images/ds-ognennyj-zakat-2.jpg'],
    description:
      'Новинка серии DS — яркие листья с переходом от огненно-красного центра к малиновому краю через оранжевые и розовые тона. Каждый лист уникален, как настоящий закат.',
    careInstructions:
      'Сорт DS-серии, адаптированный к комнатным условиям. Стандартный уход для рексов. Яркость окраски зависит от уровня освещения — при недостатке света листья бледнеют.',
    bonusPoints: 45,
  },
  {
    id: 'p11',
    slug: 'darthvaderiana',
    nameRu: 'Дартвадериана',
    nameLatin: 'Begonia darthvaderiana',
    series: '',
    type: 'species',
    format: 'baby',
    price: 3500,
    stock: 1,
    status: 'preorder',
    preorderDate: '2026-06-01',
    difficulty: 'hard',
    light: 'Полутень',
    water: 'Регулярный, без пересыхания',
    humidity: '75-90%',
    temperature: '20-28 °C',
    petSafe: false,
    isNew: false,
    isRare: true,
    iridescent: false,
    terrarium: true,
    mini: false,
    images: ['/images/darthvaderiana-1.jpg', '/images/darthvaderiana-2.jpg'],
    description:
      'Одна из самых дорогих и желанных бегоний в мире. Крупные почти чёрные бархатные листья с контрастными светлыми прожилками. Открыта на Борнео в 2013 году и до сих пор крайне редка в культуре.',
    careInstructions:
      'Требует террариумного содержания с высокой влажностью и стабильной температурой. Чувствительна к перепадам условий. Рекомендуется только опытным коллекционерам.',
    bonusPoints: 350,
  },
  {
    id: 'p12',
    slug: 'pavlinij-hvost',
    nameRu: 'Павлиний хвост',
    nameLatin: "Begonia rex 'Pavlinij Hvost'",
    series: '',
    type: 'rex',
    format: 'baby',
    price: 380,
    stock: 9,
    status: 'in-stock',
    difficulty: 'easy',
    light: 'Рассеянный свет — полутень',
    water: 'Умеренный',
    humidity: '50-65%',
    temperature: '18-24 °C',
    petSafe: false,
    isNew: false,
    isRare: false,
    iridescent: true,
    terrarium: false,
    mini: false,
    images: ['/images/pavlinij-hvost-1.jpg', '/images/pavlinij-hvost-2.jpg'],
    description:
      'Рексовая бегония с радужными переливами — зелёные, серебристые, розовые и фиолетовые зоны чередуются, как перья павлина. Неприхотливый сорт, отлично подходит для первого знакомства с бегониями.',
    careInstructions:
      'Идеальна для начинающих. Выносит кратковременное пересыхание и пониженную влажность. Стандартный грунт для бегоний, полив по мере просыхания.',
    bonusPoints: 38,
  },
];

// ── CATEGORIES ──
export const categories: Category[] = [
  { slug: 'rex', name: 'Рексовые', nameLatin: 'Rex Cultorum', count: 48, icon: '\u{1F33F}' },
  { slug: 'rhizomatous', name: 'Ризоматозные', nameLatin: 'Rhizomatous', count: 24, icon: '\u{1F343}' },
  { slug: 'cane', name: 'Тростниковые', nameLatin: 'Cane-like', count: 18, icon: '\u{1F331}' },
  { slug: 'species', name: 'Видовые', nameLatin: 'Species', count: 15, icon: '\u{1FAB4}' },
  { slug: 'rare', name: 'Редкие', nameLatin: 'Rare Collection', count: 12, icon: '\u{1F48E}' },
  { slug: 'terrarium', name: 'Для террариумов', nameLatin: 'Terrarium', count: 9, icon: '\u{1F3FA}' },
  { slug: 'easy', name: 'Для начинающих', nameLatin: 'Easy Care', count: 22, icon: '\u2728' },
];

// ── BLOG POSTS ──
export const blogPosts: BlogPost[] = [
  {
    id: 'b1',
    slug: 'zimnyj-uhod-za-begoniyami',
    title: 'Зимний уход за бегониями: 5 главных правил',
    excerpt:
      'Как сохранить яркую окраску листьев и не допустить гибели растений в отопительный сезон. Разбираем типичные ошибки и простые решения.',
    date: '2026-03-15',
    author: 'Венера Султанова',
    image: '/images/blog-winter-care.jpg',
    tags: ['уход', 'зима', 'советы'],
  },
  {
    id: 'b2',
    slug: 'top-10-reksov-dlya-nachinayushchih',
    title: 'Топ-10 сортов Rex-бегоний для начинающих',
    excerpt:
      'Подборка самых неприхотливых и эффектных сортов, которые простят вам ошибки в уходе и порадуют яркой листвой с первого дня.',
    date: '2026-02-28',
    author: 'Венера Султанова',
    image: '/images/blog-top-rex.jpg',
    tags: ['рексы', 'подборка', 'начинающим'],
  },
  {
    id: 'b3',
    slug: 'razmnozhenie-listovymi-cherenkami',
    title: 'Размножение бегоний листовыми черенками',
    excerpt:
      'Пошаговое руководство с фотографиями: от выбора листа до укоренения и пересадки молодого растения в постоянный горшок.',
    date: '2026-01-20',
    author: 'Венера Султанова',
    image: '/images/blog-propagation.jpg',
    tags: ['размножение', 'руководство', 'черенки'],
  },
];

// ── REVIEWS ──
export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Анастасия',
    city: 'Москва',
    text: 'Получила детку Эскарго в идеальном состоянии! Упаковка — произведение искусства, каждый листик бережно защищён. Через месяц уже дала два новых листика. Буду заказывать ещё!',
    product: 'Эскарго',
    rating: 5,
  },
  {
    id: 'r2',
    name: 'Елена',
    city: 'Санкт-Петербург',
    text: 'Заказываю на сайте Бегония Venus уже третий раз. Качество растений неизменно высокое, а редкие сорта просто невозможно найти где-то ещё. Бревиримоза приехала шикарная — ни одного повреждения.',
    product: 'Бревиримоза',
    rating: 5,
  },
  {
    id: 'r3',
    name: 'Марина',
    city: 'Екатеринбург',
    text: 'Доставка до Екатеринбурга за 3 дня — и ни одного повреждённого листа. Макулата прижилась моментально и уже радует цветением. Рекомендую магазин всем знакомым цветоводам.',
    product: 'Макулата',
    rating: 5,
  },
];
