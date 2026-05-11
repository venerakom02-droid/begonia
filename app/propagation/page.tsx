import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Размножение бегоний — BegoNia | Руководство по размножению",
  description:
    "Полное руководство по размножению бегоний: детки, листовые и стеблевые черенки, семена. Пошаговые инструкции с советами от опытного коллекционера.",
};

const TIPS = [
  {
    icon: "✦",
    title: "Лучший сезон",
    text: "Весна и начало лета (март — июнь) — оптимальное время для размножения. Растения активно растут, световой день увеличивается, а укоренение происходит быстрее.",
  },
  {
    icon: "❋",
    title: "Инструменты",
    text: "Острый стерильный нож или лезвие, порошок активированного угля, прозрачные контейнеры с крышками, перлит, мох сфагнум, пульверизатор с мелким распылением.",
  },
  {
    icon: "✿",
    title: "Частые ошибки",
    text: "Избыточная влага приводит к загниванию. Не закапывайте лист слишком глубоко, не ставьте черенки под прямое солнце и не открывайте тепличку раньше времени.",
  },
];

export default function PropagationPage() {
  return (
    <div className="pt-24 pb-20">
      {/* ── Hero ── */}
      <section className="mx-auto max-w-5xl px-6 text-center mb-20">
        <p
          className="text-gold uppercase tracking-[3px] mb-4"
          style={{ fontSize: "11px" }}
        >
          Руководство
        </p>
        <h1
          className="text-cream text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Размножение{" "}
          <span className="text-gold">бегоний</span>
        </h1>
        <p className="text-cream/50 max-w-2xl mx-auto leading-relaxed">
          Декоративнолиственные бегонии размножаются удивительно разнообразно:
          детками, листовыми и стеблевыми черенками, а иногда и семенами.
          Разберём каждый способ — от подготовки до первых самостоятельных листьев.
        </p>
        <div className="gold-line mt-10" />
      </section>

      {/* ── 01 Детки ── */}
      <section className="bg-forest py-20 mb-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mb-10">
            <span
              className="absolute -top-8 -left-2 text-[120px] leading-none text-cream/[0.03] pointer-events-none select-none"
              style={{ fontFamily: "var(--font-display)" }}
            >
              01
            </span>
            <p
              className="text-gold uppercase tracking-[3px] mb-3"
              style={{ fontSize: "11px" }}
            >
              Способ первый
            </p>
            <h2
              className="text-cream text-3xl sm:text-4xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Размножение <span className="text-gold">детками</span>
            </h2>
          </div>
          <div className="space-y-4 text-cream/60 leading-relaxed text-sm max-w-3xl">
            <p>
              Многие ризомные бегонии (Begonia rex, B. masoniana и другие)
              образуют прикорневые отростки — так называемые{" "}
              <span className="text-cream">детки</span>. Это миниатюрные
              клоны материнского растения, которые развиваются из спящих почек
              на ризоме. Как правило, детки появляются у здорового, хорошо
              укоренённого растения в период активного роста — весной и летом.
            </p>
            <p>
              Отделять детку стоит, когда она сформировала{" "}
              <span className="text-cream">2–3 собственных листа</span> и
              достигла высоты хотя бы 4–5 см. Слишком раннее отделение снижает
              шансы на выживание — у детки должна быть собственная корневая
              система, пусть даже небольшая.
            </p>
          </div>
          <div className="mt-10 border border-leaf/20 rounded-sm p-6 sm:p-8">
            <h3
              className="text-gold-light text-lg mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Пошаговый процесс
            </h3>
            <ol className="space-y-4 text-cream/60 text-sm leading-relaxed list-decimal list-inside">
              <li>
                <span className="text-cream">Подготовьте инструменты:</span>{" "}
                острый нож или лезвие, обработанное спиртом, порошок
                активированного угля, небольшой горшок с рыхлым субстратом
                (перлит + торф 1:1).
              </li>
              <li>
                <span className="text-cream">Извлеките материнское растение</span>{" "}
                из горшка и аккуратно освободите корни от грунта, чтобы видеть
                точку крепления детки к ризоме.
              </li>
              <li>
                <span className="text-cream">Отрежьте детку</span> чистым
                движением, захватив часть ризомы с корешками. Срез должен быть
                ровным, без «жёваных» краёв.
              </li>
              <li>
                <span className="text-cream">Обработайте срезы</span> толчёным
                углём — и на материнском растении, и на детке. Это предотвращает
                грибковые инфекции.
              </li>
              <li>
                <span className="text-cream">Посадите детку</span> в
                увлажнённый субстрат, не заглубляя ризому. Поместите в тепличку
                или накройте прозрачным контейнером для поддержания влажности
                70–80%.
              </li>
            </ol>
          </div>
          <div className="mt-8 text-cream/60 text-sm leading-relaxed max-w-3xl">
            <p>
              Первые 2–3 недели держите детку в полутени при температуре 22–25 °C,
              регулярно проветривая тепличку. Когда появится новый лист — растение
              укоренилось и готово к постепенной адаптации к обычным условиям.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 Листовые черенки ── */}
      <section className="mx-auto max-w-5xl px-6 mb-20">
        <div className="relative mb-10">
          <span
            className="absolute -top-8 -left-2 text-[120px] leading-none text-cream/[0.03] pointer-events-none select-none"
            style={{ fontFamily: "var(--font-display)" }}
          >
            02
          </span>
          <p
            className="text-gold uppercase tracking-[3px] mb-3"
            style={{ fontSize: "11px" }}
          >
            Способ второй
          </p>
          <h2
            className="text-cream text-3xl sm:text-4xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Листовые <span className="text-gold">черенки</span>
          </h2>
        </div>
        <div className="space-y-4 text-cream/60 leading-relaxed text-sm max-w-3xl">
          <p>
            Листовое черенкование — самый продуктивный способ размножения для{" "}
            <span className="text-cream">Rex-бегоний</span> и других
            декоративнолиственных видов. Из одного крупного листа можно получить
            до 10–15 молодых растений. Существуют два основных метода:
            целым листом с черешком и фрагментами листовой пластины.
          </p>
          <p>
            Выбирайте зрелый, здоровый лист без повреждений и признаков
            болезней. Слишком молодые листья содержат мало питательных веществ
            для формирования деток, а старые — хуже укореняются.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
          {/* Method A */}
          <div className="border border-leaf/20 rounded-sm p-6 sm:p-8">
            <h3
              className="text-gold-light text-lg mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Метод A: целый лист с черешком
            </h3>
            <ol className="space-y-3 text-cream/60 text-sm leading-relaxed list-decimal list-inside">
              <li>
                Срежьте лист с черешком длиной 3–4 см.
              </li>
              <li>
                На нижней стороне листа сделайте надрезы поперёк крупных
                жилок (через каждые 2–3 см).
              </li>
              <li>
                Положите лист нижней стороной на влажный субстрат (перлит +
                сфагнум) и прижмите шпильками или камешками.
              </li>
              <li>
                Накройте прозрачной крышкой. Через 3–6 недель из надрезов
                появятся крошечные розетки.
              </li>
            </ol>
          </div>

          {/* Method B */}
          <div className="border border-leaf/20 rounded-sm p-6 sm:p-8">
            <h3
              className="text-gold-light text-lg mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Метод B: фрагменты листа
            </h3>
            <ol className="space-y-3 text-cream/60 text-sm leading-relaxed list-decimal list-inside">
              <li>
                Разрежьте лист на треугольные фрагменты так, чтобы каждый
                содержал часть центральной или крупной боковой жилки.
              </li>
              <li>
                Воткните фрагменты вертикально в увлажнённый перлит
                заострённым концом вниз на глубину 1–1,5 см.
              </li>
              <li>
                Поместите в тепличку с влажностью 80–90%. Проветривайте
                ежедневно по 10–15 минут.
              </li>
              <li>
                Через 4–8 недель у основания фрагментов образуются детки.
                Когда у них будет 2–3 листа, пересадите в отдельные горшочки.
              </li>
            </ol>
          </div>
        </div>

        <div className="mt-8 text-cream/60 text-sm leading-relaxed max-w-3xl">
          <p>
            <span className="text-gold-light">Совет:</span> для листовых
            черенков критически важна стабильная влажность без застоя воды.
            Идеальная температура — 22–26 °C. Используйте фитолампу при
            недостатке естественного света, но избегайте прямых солнечных лучей —
            они вызовут ожоги на ослабленных тканях.
          </p>
        </div>
      </section>

      {/* ── 03 Стеблевые черенки ── */}
      {/* placeholder:section-03 */}

      {/* ── 04 Семена ── */}
      {/* placeholder:section-04 */}

      {/* ── Tips ── */}
      {/* placeholder:tips */}

      {/* ── CTA ── */}
      {/* placeholder:cta */}
    </div>
  );
}
