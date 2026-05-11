import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Уход за бегониями — Бегония Venus | Полное руководство",
  description:
    "Подробное руководство по уходу за декоративнолиственными бегониями: освещение, полив, температура, влажность, грунт, пересадка, болезни и вредители. Советы от коллекционера с 7-летним опытом.",
};

/* ───────── Data ───────── */

const TOC = [
  { id: "light", num: "01", title: "Освещение" },
  { id: "watering", num: "02", title: "Полив" },
  { id: "temperature", num: "03", title: "Температура" },
  { id: "humidity", num: "04", title: "Влажность" },
  { id: "soil", num: "05", title: "Грунт и субстрат" },
  { id: "repotting", num: "06", title: "Пересадка" },
  { id: "pests", num: "07", title: "Болезни и вредители" },
];

/* ───────── Helpers ───────── */

function SectionNumber({ num }: { num: string }) {
  return (
    <span className="block font-display text-gold/[0.08] text-[120px] sm:text-[160px] leading-none select-none pointer-events-none absolute -top-8 -left-2 sm:-left-6">
      {num}
    </span>
  );
}

function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 border border-gold/20 bg-gold/[0.04] rounded-sm px-6 py-5">
      <p className="text-gold text-[10px] uppercase tracking-[3px] mb-2">
        Совет коллекционера
      </p>
      <div className="text-cream/70 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 border border-terra/40 bg-terra/[0.06] rounded-sm px-6 py-5">
      <p className="text-blush text-[10px] uppercase tracking-[3px] mb-2">
        Важно
      </p>
      <div className="text-cream/70 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

/* ───────── Page ───────── */

export default function CarePage() {
  return (
    <div className="pt-24">
      {/* ══════════ HERO ══════════ */}
      <section className="relative bg-forest overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-night/60 via-transparent to-night pointer-events-none" />
        <div className="absolute top-[10%] right-[8%] w-[260px] h-[260px] rounded-full border border-gold/[0.06] pointer-events-none hidden lg:block" />
        <div className="absolute bottom-[15%] left-[5%] w-[180px] h-[180px] rounded-full border border-gold/[0.06] pointer-events-none hidden lg:block" />

        <div className="relative mx-auto max-w-5xl px-6 pt-20 pb-24 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="block w-8 h-px bg-gold" />
            <span className="text-[10px] text-gold tracking-[4px] uppercase">
              Руководство по уходу
            </span>
            <span className="block w-8 h-px bg-gold" />
          </div>

          <h1
            className="font-display font-light text-cream leading-[1.1] mb-6"
            style={{ fontSize: "clamp(40px, 7vw, 80px)" }}
          >
            Уход за{" "}
            <em className="text-gold-light not-italic italic">бегониями</em>
          </h1>

          <p className="font-display italic text-cream/50 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Полное руководство по содержанию декоративнолиственных бегоний
            в домашних условиях — от освещения и полива до лечения болезней.
            Основано на 7-летнем опыте коллекционирования.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/catalog" className="btn-primary">
              Каталог растений&ensp;&rarr;
            </Link>
            <Link href="/contacts" className="btn-ghost">
              Задать вопрос
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ TABLE OF CONTENTS ══════════ */}
      <section className="bg-night py-16">
        <div className="mx-auto max-w-3xl px-6">
          <p className="text-gold text-[10px] uppercase tracking-[4px] mb-6 text-center">
            Содержание
          </p>
          <div className="gold-line mb-8" />
          <nav className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4">
            {TOC.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="group flex items-center gap-4 py-2 border-b border-cream/[0.06] transition-colors hover:border-gold/30"
              >
                <span className="font-display text-gold/30 text-xl group-hover:text-gold transition-colors">
                  {item.num}
                </span>
                <span className="text-cream/70 text-sm tracking-wide group-hover:text-cream transition-colors">
                  {item.title}
                </span>
              </a>
            ))}
          </nav>
          <div className="gold-line mt-8" />
        </div>
      </section>

      {/* ══════════ 01 · ОСВЕЩЕНИЕ ══════════ */}
      <section id="light" className="relative bg-forest py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 relative">
          <SectionNumber num="01" />

          <p className="text-gold text-[10px] uppercase tracking-[4px] mb-4">
            Раздел первый
          </p>
          <h2 className="font-display text-cream text-3xl sm:text-4xl lg:text-5xl mb-8">
            Освещение
          </h2>
          <div className="gold-line mb-10" />

          <div className="space-y-5 text-cream/70 text-sm sm:text-base leading-relaxed">
            <p>
              Декоративнолиственные бегонии — растения подлеска тропических лесов
              Юго-Восточной Азии и Центральной Америки. В природе они произрастают
              под пологом крупных деревьев, получая рассеянный свет, отфильтрованный
              кронами. Именно поэтому прямые солнечные лучи губительны для большинства
              видов: они вызывают ожоги листовых пластин, обесцвечивание рисунка
              и потерю характерного металлического блеска.
            </p>
            <p>
              Оптимальное расположение —{" "}
              <span className="text-cream">восточное или северо-восточное окно</span>,
              где растение получает мягкий утренний свет. На южных и западных окнах
              обязательно используйте рассеивающую плёнку или тюль. Бегонии группы{" "}
              <span className="font-latin italic">Rex Cultorum</span> особенно
              чувствительны к избыточному свету — их листья с серебристым напылением
              могут терять окраску. Ризоматозные виды, такие как{" "}
              <span className="font-latin italic">Begonia bowerae</span> и{" "}
              <span className="font-latin italic">B. imperialis</span>, адаптированы
              к ещё более низкой освещённости и прекрасно чувствуют себя в глубине
              комнаты.
            </p>
            <p>
              Тростниковые бегонии (<span className="font-latin italic">Cane-like begonias</span>),
              напротив, нуждаются в более ярком свете для формирования крепких
              стеблей и обильного ветвления. Им подойдёт яркий рассеянный свет
              в течение 10–12 часов. В зимнее время, когда световой день сокращается
              до 7–8 часов, рекомендуется досветка фитолампой полного спектра
              мощностью 20–40 Вт на расстоянии 30–40 см от верхушек растений.
            </p>
          </div>

          <Tip>
            Простой тест на достаточность света: если новые листья мельчают,
            черешки вытягиваются, а рисунок бледнеет — растению не хватает
            освещения. Поворачивайте горшок на 90° каждую неделю для равномерного
            развития кроны.
          </Tip>
        </div>
      </section>

      {/* ══════════ 02 · ПОЛИВ ══════════ */}
      <section id="watering" className="relative bg-night py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 relative">
          <SectionNumber num="02" />

          <p className="text-gold text-[10px] uppercase tracking-[4px] mb-4">
            Раздел второй
          </p>
          <h2 className="font-display text-cream text-3xl sm:text-4xl lg:text-5xl mb-8">
            Полив
          </h2>
          <div className="gold-line mb-10" />

          <div className="space-y-5 text-cream/70 text-sm sm:text-base leading-relaxed">
            <p>
              Режим полива — главный фактор успеха или неудачи в содержании бегоний.
              Эти растения обладают поверхностной корневой системой с тонкими,
              нежными корнями, которые крайне чувствительны к переувлажнению.
              Основное правило:{" "}
              <span className="text-cream">
                верхний слой грунта (2–3 см) должен просохнуть
              </span>{" "}
              между поливами. Для проверки погрузите палец или деревянную палочку
              в субстрат — если на глубине 2 см грунт ещё влажный, отложите полив.
            </p>
            <p>
              Частота полива зависит от сезона и условий: летом, при температуре
              22–26 °C и хорошей вентиляции, полив обычно требуется каждые 4–6 дней.
              Зимой, когда обменные процессы замедляются, интервал увеличивается
              до 7–12 дней. В пластиковых горшках грунт сохнет медленнее, чем
              в керамических, — учитывайте это при составлении графика.
            </p>
            <p>
              Качество воды имеет значение. Бегонии предпочитают{" "}
              <span className="text-cream">мягкую, отстоянную воду</span>{" "}
              комнатной температуры (20–24 °C). Холодная вода из-под крана
              вызывает стресс корневой системы и может спровоцировать развитие
              корневой гнили. Если в вашем регионе жёсткая вода, используйте
              фильтрованную или дождевую. Полив осуществляется строго под корень —
              попадание воды на листья приводит к появлению пятен и развитию
              грибковых заболеваний, особенно у видов с бархатистой текстурой
              листовой пластины.
            </p>
          </div>

          <Warning>
            Признаки переувлажнения: потемнение оснований черешков, мягкие
            полупрозрачные участки на стеблях, неприятный запах от грунта,
            появление мелких грибных мушек (сциарид). При первых симптомах
            просушите грунт, удалите повреждённые части и обработайте фунгицидом.
          </Warning>

          <Tip>
            Метод нижнего полива идеально подходит для бегоний: поставьте горшок
            в поддон с водой на 15–20 минут, затем слейте излишки. Так корни
            получают влагу равномерно, а поверхность грунта остаётся сухой,
            что снижает риск грибковых инфекций.
          </Tip>
        </div>
      </section>

      {/* ══════════ 03 · ТЕМПЕРАТУРА ══════════ */}
      <section id="temperature" className="relative bg-forest py-20 md:py-28 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6 relative">
          <SectionNumber num="03" />

          <p className="text-gold text-[10px] uppercase tracking-[4px] mb-4">
            Раздел третий
          </p>
          <h2 className="font-display text-cream text-3xl sm:text-4xl lg:text-5xl mb-8">
            Температура
          </h2>
          <div className="gold-line mb-10" />

          <div className="space-y-5 text-cream/70 text-sm sm:text-base leading-relaxed">
            <p>
              Бегонии — теплолюбивые тропические растения, не имеющие выраженного
              периода покоя при содержании в комнатных условиях. Оптимальный
              диапазон температур для активного роста —{" "}
              <span className="text-cream">20–25 °C</span>. Большинство
              декоративнолиственных видов и гибридов комфортно себя чувствуют
              при обычной комнатной температуре и не требуют специальных условий
              для зимовки, в отличие от клубневых бегоний.
            </p>
            <p>
              Критическая нижняя граница для большинства рексов и ризоматозных
              видов —{" "}
              <span className="text-cream">16 °C</span>. При температуре ниже этого
              порога замедляется метаболизм, корневая система перестаёт активно
              поглощать воду, что при сохранении прежнего режима полива неизбежно
              приводит к загниванию. Некоторые видовые бегонии, например{" "}
              <span className="font-latin italic">Begonia darthvaderiana</span>{" "}
              и <span className="font-latin italic">B. chloroneura</span>,
              ещё более теплолюбивы и требуют не ниже 18–20 °C круглый год.
            </p>
            <p>
              Резкие перепады температур — главный враг бегоний. Сквозняки от
              открытых окон зимой, потоки холодного воздуха от кондиционера летом,
              близость к горячим батареям отопления — всё это вызывает стресс,
              сбрасывание листьев и ослабление иммунитета. При проветривании
              помещения зимой убирайте растения с подоконника или защищайте
              их экраном. Летом избегайте размещения под прямым потоком кондиционера.
            </p>
          </div>

          <Tip>
            Если зимой подоконник холодный, подложите под горшки лист пенополистирола
            или пробковую подставку толщиной 1–2 см. Это создаст теплоизоляцию
            и защитит корни от переохлаждения. Особенно актуально для коллекций
            на старых деревянных рамах.
          </Tip>
        </div>
      </section>

      {/* SECTION 04: HUMIDITY */}
      {/* placeholder:section-04 */}

      {/* SECTION 05: SOIL */}
      {/* placeholder:section-05 */}

      {/* SECTION 06: REPOTTING */}
      {/* placeholder:section-06 */}

      {/* SECTION 07: PESTS */}
      {/* placeholder:section-07 */}

      {/* BACK TO TOP */}
      {/* placeholder:footer-cta */}
    </div>
  );
}
