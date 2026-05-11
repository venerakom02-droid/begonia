# BegoNia — AI agent инструкция

## Что это
Интернет-магазин коллекционных декоративнолиственных бегоний (редкие сорта, доставка по России). Сайт-визитка + каталог + форма предзаказа.

## Стек
- **Frontend / Backend:** Next.js 16 (App Router) + React 19 + TypeScript
- **Стили:** Tailwind CSS v4
- **Шрифты:** Cormorant Garamond (заголовки), Tenor Sans (текст), EB Garamond (латынь)
- **Палитра:** тёмно-зелёная ночь (`#0e1410`) + золото (`#c9a44a`) + крем (`#f0ead8`)
- **Деплой:** Vercel
- **Заявки:** форма → `/api/order` → Telegram-бот → личка владельца (`@VenusUspekh`)

## Структура папок
```
app/
  layout.tsx          — глобальный layout (Navbar + Footer)
  page.tsx            — главная (3 фото + collections)
  api/order/route.ts  — приём формы предзаказа, отправка в Telegram
  cart/page.tsx       — форма предзаказа (бывшая корзина)
  catalog/            — каталог + страницы 12 сортов
  about, blog, care, consultation, contacts, delivery,
  faq, guarantees, privacy, propagation
components/
  Navbar.tsx          — шапка (фикс, scroll-aware)
  Footer.tsx          — подвал
lib/
  data.ts             — каталог товаров, категории, отзывы, блог-посты (mock)
  contacts.ts         — телефон, email, ссылки на соцсети (общий источник правды)
public/
  collection-*.png    — фотографии для главной
```

## Правила кода
- Импорты — сверху, используем `import type` для типов
- Все цвета/шрифты — через CSS variables в `app/globals.css`
- Контакты не дублируем — берём из `lib/contacts.ts` (`CONTACTS`, `SOCIAL_LINKS`)
- Тексты на русском, в комментариях — тоже русский (но кратко)
- Стили — utility-классы Tailwind. Кастомные классы (.btn-primary, .form-input, .gold-line) — в `globals.css`
- Никаких новых зависимостей без необходимости (всё, что есть, достаточно)

## Переменные окружения (Vercel)
```
TELEGRAM_BOT_TOKEN=<токен_бота_от_BotFather>
TELEGRAM_CHAT_ID=<числовой_chat_id_владельца>
```
Без них `/api/order` принимает заявку и логирует её в Vercel logs, но в TG не отправляет.

## Как настроить Telegram-бота (один раз)
1. В Telegram написать [@BotFather](https://t.me/BotFather) → `/newbot` → дать имя → получить токен (формат `123456:ABC-DEF...`)
2. Написать своему боту любое сообщение (`/start`)
3. Открыть `https://api.telegram.org/bot<ТОКЕН>/getUpdates` в браузере, найти `chat.id` (число)
4. В Vercel → Project → Settings → Environment Variables → добавить `TELEGRAM_BOT_TOKEN` и `TELEGRAM_CHAT_ID`
5. Redeploy

## Важные детали
- Сайт **статичный**, кроме `/api/order` (динамический). 28 страниц prerender в build.
- Главная — `app/page.tsx` (520 строк, длинный лендинг)
- Карточка товара — `app/catalog/[slug]/page.tsx` + `ProductDetailClient.tsx`
- Кнопка «Заказать» на странице товара ведёт на `/cart?product=...` (форма с префилом)
- Корзины как таковой нет — клиент пишет, что хочет, в текстовом поле формы
- TG-канал, YouTube, WhatsApp, Max — настоящие ссылки, в `lib/contacts.ts`
- Кнопка «Аккаунт» из шапки убрана (нет регистрации пока)
- Соцсеть VK / Instagram — пока нет, можно добавить позже в `SOCIAL_LINKS`
