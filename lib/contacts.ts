/* ──────────────────────────────────────────────
 * БегоНия Venus — Контакты и реквизиты продавца
 * Изменения здесь применятся по всему сайту
 * ────────────────────────────────────────────── */

export const CONTACTS = {
  // Телефон в международном формате (без знака +)
  phone: "79619141180",
  phoneDisplay: "+7 (961) 914-11-80",

  // Email
  email: "venerakom02@gmail.com",

  // Куда уходят заявки (личный TG владельца)
  orderTelegram: "VenusUspekh",
};

export const SOCIAL_LINKS = {
  telegram: "https://t.me/+DS_Sxn3X2ow0ZGUy",
  youtube: "https://www.youtube.com/@vdochnovenie-qo8jc1ul9x",
  whatsapp: `https://wa.me/${CONTACTS.phone}`,
  // Max — пока без публичной ссылки, диплинк по номеру
  max: `https://max.ru/u/${CONTACTS.phone}`,
};

// ── Реквизиты продавца (самозанятая, НПД) ──
export const SELLER = {
  legalForm: "Самозанятый",
  fullName: "Комиссарова Венера Гареевна",
  inn: "560501014704",
  taxRegime: "Налог на профессиональный доход (НПД)",
  // Краткая строка для футера / шапки страниц
  short: "Самозанятая Комиссарова В. Г., ИНН 560501014704",
};
