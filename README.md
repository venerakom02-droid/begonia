# BegoNia 🌿

Интернет-магазин коллекционных декоративнолиственных бегоний.

**Стек:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

## Быстрый старт

```bash
npm install
npm run dev     # http://localhost:3000
```

## Команды

| Команда | Что делает |
| --- | --- |
| `npm run dev` | Локальный dev-сервер |
| `npm run build` | Production-сборка |
| `npm start` | Запуск production-сборки |

## Деплой на Vercel

1. Импортируй репо в [vercel.com/new](https://vercel.com/new)
2. Добавь переменные окружения (Project Settings → Environment Variables):
   - `TELEGRAM_BOT_TOKEN` — токен бота из [@BotFather](https://t.me/BotFather)
   - `TELEGRAM_CHAT_ID` — числовой chat ID владельца
3. Deploy

См. подробности в [CLAUDE.md](./CLAUDE.md).

## Структура

- `app/` — страницы (Next.js App Router)
- `components/` — Navbar, Footer
- `lib/data.ts` — каталог товаров (mock)
- `lib/contacts.ts` — единый источник контактов и соцсетей
- `public/` — фото и иконки
