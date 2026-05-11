import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/order
 *
 * Принимает форму предзаказа и пересылает её в Telegram
 * через бота. Для работы нужны переменные окружения:
 *
 *   TELEGRAM_BOT_TOKEN  — токен бота из @BotFather
 *   TELEGRAM_CHAT_ID    — числовой ID чата (личка владельца)
 *
 * Без них API всё равно отвечает 200, чтобы клиент видел подтверждение,
 * но в логи Vercel падает предупреждение. Заявка тогда теряется —
 * настройте переменные в Vercel: Project Settings → Environment Variables.
 */

interface OrderPayload {
  name: string;
  phone: string;
  contactMethod: "telegram" | "whatsapp" | "max" | "phone";
  contactHandle?: string;
  products: string;
  city: string;
  address?: string;
  comment?: string;
}

const CONTACT_LABELS: Record<OrderPayload["contactMethod"], string> = {
  telegram: "Telegram",
  whatsapp: "WhatsApp",
  max: "Max",
  phone: "Звонок",
};

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatMessage(payload: OrderPayload): string {
  const lines: string[] = [];
  lines.push("🌿 <b>Новая заявка с сайта Бегония Venus</b>");
  lines.push("");
  lines.push(`<b>Имя:</b> ${escapeHtml(payload.name)}`);
  lines.push(`<b>Телефон:</b> ${escapeHtml(payload.phone)}`);
  lines.push(`<b>Способ связи:</b> ${CONTACT_LABELS[payload.contactMethod]}`);
  if (payload.contactHandle) {
    lines.push(`<b>Контакт:</b> ${escapeHtml(payload.contactHandle)}`);
  }
  lines.push("");
  lines.push(`<b>Что хочет:</b>`);
  lines.push(escapeHtml(payload.products));
  lines.push("");
  lines.push(`<b>Город:</b> ${escapeHtml(payload.city)}`);
  if (payload.address) {
    lines.push(`<b>Адрес:</b> ${escapeHtml(payload.address)}`);
  }
  if (payload.comment) {
    lines.push("");
    lines.push(`<b>Комментарий:</b>`);
    lines.push(escapeHtml(payload.comment));
  }
  return lines.join("\n");
}

export async function POST(req: NextRequest) {
  let payload: OrderPayload;
  try {
    payload = (await req.json()) as OrderPayload;
  } catch {
    return NextResponse.json({ error: "Некорректный запрос" }, { status: 400 });
  }

  if (!payload.name || !payload.phone || !payload.products || !payload.city) {
    return NextResponse.json(
      { error: "Заполните имя, телефон, сорта и город" },
      { status: 400 }
    );
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  const message = formatMessage(payload);

  if (!token || !chatId) {
    console.warn(
      "[api/order] TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID не настроены. Заявка:\n" +
        message
    );
    return NextResponse.json({ ok: true, warning: "telegram-not-configured" });
  }

  try {
    const tgRes = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
      }
    );

    if (!tgRes.ok) {
      const errorBody = await tgRes.text();
      console.error("[api/order] Telegram API ошибка:", tgRes.status, errorBody);
      return NextResponse.json(
        { error: "Не удалось доставить заявку. Напишите нам напрямую в Telegram." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[api/order] Сбой при отправке в Telegram:", err);
    return NextResponse.json(
      { error: "Сервис временно недоступен. Напишите нам напрямую в Telegram." },
      { status: 502 }
    );
  }
}
