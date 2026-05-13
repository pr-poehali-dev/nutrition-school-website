import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMG = "https://cdn.poehali.dev/projects/44b8fa57-6fcc-4d74-9b5b-10922da375f8/files/9d95226d-42a2-4dc6-94c7-9807d2106663.jpg";
const ABOUT_IMG = "https://cdn.poehali.dev/projects/44b8fa57-6fcc-4d74-9b5b-10922da375f8/files/4804fe9a-1165-498c-bf6a-894d7f685c5f.jpg";
const COURSES_IMG = "https://cdn.poehali.dev/projects/44b8fa57-6fcc-4d74-9b5b-10922da375f8/files/2deb9fb1-f80a-4c02-b2ba-7bbb07d33ba6.jpg";

const specialists = [
  {
    name: "Дмитров Иван Валерьевич",
    title: "Нутрициолог-практик",
    experience: "12 лет опыта",
    courses: ["Нутрициология: основы", "Как распределить БЖУ: основы"],
    bio: "Эксперт в области клинической нутрициологии, автор методики персонализированного питания. Работает с профессиональными спортсменами и людьми с хроническими заболеваниями.",
    emoji: "👨‍⚕️",
    tag: "Клиническое питание",
  },
  {
    name: "Горбачева Алла Алексеевна",
    title: "Диетолог и нутрициолог",
    experience: "9 лет опыта",
    courses: ["Правильное питание — залог здоровья", "Нутрициология: основы"],
    bio: "Специалист по коррекции пищевого поведения и семейному питанию. Помогла более 2000 человек выстроить здоровые отношения с едой без стресса и ограничений.",
    emoji: "👩‍🔬",
    tag: "Пищевое поведение",
  },
  {
    name: "Нечаев Егор Антонович",
    title: "Спортивный нутрициолог",
    experience: "7 лет опыта",
    courses: ["Как распределить БЖУ: основы", "Правильное питание — залог здоровья"],
    bio: "Специализируется на спортивном питании и восстановлении. Консультант федеральных спортивных клубов, разработчик программ питания для соревновательного периода.",
    emoji: "🏋️",
    tag: "Спортивное питание",
  },
];

const courses = [
  {
    title: "Нутрициология: основы",
    description: "Фундаментальный курс для тех, кто хочет понять, как работает питание на уровне клеток и органов. Вы разберётесь в макро- и микронутриентах, узнаете о роли витаминов и минералов.",
    duration: "8 недель",
    lessons: 24,
    level: "Начинающий",
    topics: ["Макронутриенты", "Витамины и минералы", "Пищеварение", "Метаболизм"],
    badge: "🌿",
    price: "9 900 ₽",
    gradientFrom: "hsl(145 30% 94%)",
    gradientTo: "hsl(38 40% 92%)",
  },
  {
    title: "Правильное питание — залог здоровья",
    description: "Практический курс о том, как составить рацион, который поддерживает энергию, иммунитет и долголетие. Без жёстких диет — только осознанный подход к еде.",
    duration: "6 недель",
    lessons: 18,
    level: "Средний",
    topics: ["Планирование рациона", "Сезонное питание", "Иммунитет", "Энергетический баланс"],
    badge: "🥗",
    price: "11 900 ₽",
    gradientFrom: "hsl(38 45% 93%)",
    gradientTo: "hsl(145 25% 90%)",
  },
  {
    title: "Как распределить БЖУ: основы",
    description: "Углублённый курс по расчёту и балансировке белков, жиров и углеводов под конкретные цели — похудение, набор массы или поддержание формы.",
    duration: "5 недель",
    lessons: 15,
    level: "Средний",
    topics: ["Расчёт КБЖУ", "Источники белка", "Качество жиров", "Гликемический индекс"],
    badge: "⚖️",
    price: "8 900 ₽",
    gradientFrom: "hsl(200 30% 92%)",
    gradientTo: "hsl(145 25% 90%)",
  },
];

const stats = [
  { value: "2 400+", label: "выпускников" },
  { value: "3", label: "авторских курса" },
  { value: "98%", label: "довольных студентов" },
  { value: "7 лет", label: "на рынке" },
];

function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".section-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

const navItems = [
  { id: "home", label: "Главная" },
  { id: "about", label: "О нас" },
  { id: "specialists", label: "Специалисты" },
  { id: "courses", label: "Курсы" },
  { id: "contacts", label: "Контакты" },
];

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  useFadeIn();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const ids = ["contacts", "courses", "specialists", "about", "home"];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: "hsl(42 30% 97%)" }}>
      {/* NAVBAR */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
        style={{ background: "rgba(250, 247, 240, 0.92)", borderBottom: "1px solid hsl(42 20% 88%)" }}
      >
        <div className="container mx-auto px-6 flex items-center justify-between h-16">
          <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="font-display text-xl font-semibold" style={{ color: "hsl(145 40% 28%)" }}>
              Питайся правильно
            </span>
          </button>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`nav-link text-sm ${activeSection === item.id ? "active" : ""}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button className="btn-primary hidden md:inline-block text-sm py-2 px-5" onClick={() => scrollTo("courses")}>
            Начать обучение
          </button>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "hsl(145 40% 28%)" }}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden px-6 pb-5 flex flex-col gap-3" style={{ background: "rgba(250, 247, 240, 0.98)" }}>
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="text-left py-2 nav-link text-sm">
                {item.label}
              </button>
            ))}
            <button className="btn-primary text-sm mt-2" onClick={() => scrollTo("courses")}>
              Начать обучение
            </button>
          </div>
        )}
      </nav>

      {/* ─── HERO ─── */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, hsl(145 40% 28% / 0.06) 0%, hsl(38 65% 58% / 0.05) 100%)" }}
        />
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(145 40% 45% / 0.18) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, hsl(38 65% 58% / 0.14) 0%, transparent 70%)" }}
        />

        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="tag mb-6 inline-block">Онлайн-школа нутрициологии</div>
              <h1
                className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
                style={{ color: "hsl(150 25% 12%)" }}
              >
                Питайся{" "}
                <em style={{ color: "hsl(145 40% 28%)" }}>правильно</em>
                <br />
                <span className="text-4xl md:text-5xl lg:text-6xl font-light">
                  — живи со вкусом
                </span>
              </h1>
              <p className="font-body text-lg leading-relaxed mb-8 max-w-lg" style={{ color: "hsl(150 15% 38%)" }}>
                Онлайн-курсы по нутрициологии от практикующих специалистов. Научитесь выстраивать
                рацион, который даёт энергию, здоровье и радость от еды.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="btn-primary" onClick={() => scrollTo("courses")}>
                  Смотреть курсы
                </button>
                <button className="btn-outline" onClick={() => scrollTo("about")}>
                  Узнать о нас
                </button>
              </div>

              <div className="grid grid-cols-2 gap-6 mt-12 pt-10" style={{ borderTop: "1px solid hsl(42 20% 85%)" }}>
                {stats.map((s) => (
                  <div key={s.value}>
                    <div className="font-display text-3xl font-semibold" style={{ color: "hsl(145 40% 28%)" }}>
                      {s.value}
                    </div>
                    <div className="font-body text-sm mt-0.5" style={{ color: "hsl(150 15% 45%)" }}>
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div
                className="relative rounded-3xl overflow-hidden"
                style={{ boxShadow: "0 40px 100px rgba(30, 80, 40, 0.2)" }}
              >
                <img src={HERO_IMG} alt="Здоровое питание" className="w-full h-[520px] object-cover" />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, transparent 50%, rgba(20, 55, 30, 0.35) 100%)" }}
                />
                <div
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl backdrop-blur-sm"
                  style={{ background: "rgba(250, 247, 240, 0.88)" }}
                >
                  <p className="font-display text-lg font-semibold" style={{ color: "hsl(150 25% 12%)" }}>
                    «Еда — это не враг, это ресурс»
                  </p>
                  <p className="font-body text-sm mt-1" style={{ color: "hsl(150 15% 40%)" }}>
                    Философия нашей школы
                  </p>
                </div>
              </div>
              <div
                className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl flex items-center justify-center text-3xl rotate-6"
                style={{ background: "hsl(38 65% 58%)", boxShadow: "0 10px 30px rgba(180, 120, 40, 0.3)" }}
              >
                🥑
              </div>
              <div
                className="absolute -bottom-4 -right-4 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl -rotate-3"
                style={{ background: "hsl(145 40% 28%)", boxShadow: "0 10px 30px rgba(30, 80, 40, 0.3)" }}
              >
                🌿
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about" className="py-24 relative overflow-hidden" style={{ background: "hsl(145 30% 22%)" }}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="section-fade">
              <div className="relative rounded-3xl overflow-hidden" style={{ boxShadow: "0 30px 80px rgba(0,0,0,0.3)" }}>
                <img src={ABOUT_IMG} alt="О нас" className="w-full h-[460px] object-cover" />
              </div>
            </div>
            <div className="section-fade">
              <div
                className="tag mb-6 inline-block"
                style={{ background: "rgba(255,255,255,0.1)", color: "hsl(38 60% 72%)" }}
              >
                О школе
              </div>
              <h2
                className="font-display text-4xl md:text-5xl font-semibold leading-tight mb-6"
                style={{ color: "hsl(42 40% 92%)" }}
              >
                Мы верим, что
                <br />
                <em>правильное питание</em>
                <br />
                доступно каждому
              </h2>
              <p className="font-body text-base leading-relaxed mb-5" style={{ color: "hsl(145 15% 75%)" }}>
                «Питайся правильно» — онлайн-школа, где нет места мифам и жёстким диетам. Мы
                создаём курсы, основанные на научных данных и живом опыте наших специалистов.
              </p>
              <p className="font-body text-base leading-relaxed mb-8" style={{ color: "hsl(145 15% 75%)" }}>
                За 7 лет работы мы помогли более 2400 студентам изменить своё питание без стресса
                и ограничений. Наш подход — постепенно, осознанно, с удовольствием.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "BookOpen", text: "Научный подход" },
                  { icon: "Heart", text: "Без жёстких диет" },
                  { icon: "Users", text: "Живое сообщество" },
                  { icon: "Star", text: "Сертификаты" },
                ].map((f) => (
                  <div
                    key={f.text}
                    className="flex items-center gap-3 p-3 rounded-xl"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "hsl(38 65% 58% / 0.25)" }}
                    >
                      <Icon name={f.icon} size={18} style={{ color: "hsl(38 65% 72%)" }} />
                    </div>
                    <span className="font-body text-sm font-medium" style={{ color: "hsl(42 30% 88%)" }}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SPECIALISTS ─── */}
      <section id="specialists" className="py-24" style={{ background: "hsl(42 30% 97%)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-fade">
            <div className="tag mb-4 inline-block">Наша команда</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "hsl(150 25% 12%)" }}>
              Специалисты
            </h2>
            <p className="font-body text-base mt-4 max-w-lg mx-auto" style={{ color: "hsl(150 15% 42%)" }}>
              Практикующие эксперты с многолетним опытом в нутрициологии и диетологии
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {specialists.map((s, i) => (
              <div
                key={s.name}
                className="section-fade card-hover rounded-3xl overflow-hidden border"
                style={{ background: "white", borderColor: "hsl(42 20% 88%)", transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="p-8 pb-6"
                  style={{ background: "linear-gradient(135deg, hsl(145 30% 96%) 0%, hsl(38 40% 94%) 100%)" }}
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl mb-4"
                    style={{ background: "white", boxShadow: "0 8px 24px rgba(30, 80, 40, 0.12)" }}
                  >
                    {s.emoji}
                  </div>
                  <div className="tag mb-2 inline-block">{s.tag}</div>
                  <h3 className="font-display text-xl font-semibold mt-2 leading-tight" style={{ color: "hsl(150 25% 12%)" }}>
                    {s.name}
                  </h3>
                  <p className="font-body text-sm mt-1" style={{ color: "hsl(145 35% 38%)" }}>
                    {s.title}
                  </p>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon name="Clock" size={14} style={{ color: "hsl(38 65% 52%)" }} />
                    <span className="font-body text-sm font-semibold" style={{ color: "hsl(38 55% 42%)" }}>
                      {s.experience}
                    </span>
                  </div>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "hsl(150 12% 40%)" }}>
                    {s.bio}
                  </p>
                  <div className="pt-4" style={{ borderTop: "1px solid hsl(42 20% 90%)" }}>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "hsl(150 20% 50%)" }}>
                      Ведёт курсы:
                    </p>
                    <div className="flex flex-col gap-1.5">
                      {s.courses.map((c) => (
                        <div key={c} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "hsl(145 40% 38%)" }} />
                          <span className="font-body text-xs" style={{ color: "hsl(150 20% 30%)" }}>
                            {c}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COURSES ─── */}
      <section id="courses" className="py-24" style={{ background: "hsl(42 25% 93%)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-fade">
            <div className="tag mb-4 inline-block">Обучение</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "hsl(150 25% 12%)" }}>
              Наши курсы
            </h2>
            <p className="font-body text-base mt-4 max-w-lg mx-auto" style={{ color: "hsl(150 15% 42%)" }}>
              От азов нутрициологии до практических инструментов — выберите свой путь
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {courses.map((course, i) => (
              <div
                key={course.title}
                className="section-fade card-hover rounded-3xl overflow-hidden border bg-white"
                style={{ borderColor: "hsl(42 20% 88%)", transitionDelay: `${i * 0.1}s` }}
              >
                <div
                  className="relative h-44 flex items-center justify-center"
                  style={{ background: `linear-gradient(135deg, ${course.gradientFrom} 0%, ${course.gradientTo} 100%)` }}
                >
                  <span className="text-7xl">{course.badge}</span>
                  <div
                    className="absolute top-4 right-4 px-3 py-1 rounded-full font-body text-xs font-semibold"
                    style={{ background: "white", color: "hsl(145 35% 32%)", boxShadow: "0 2px 8px rgba(0,0,0,0.08)" }}
                  >
                    {course.level}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold mb-3 leading-snug" style={{ color: "hsl(150 25% 12%)" }}>
                    {course.title}
                  </h3>
                  <p className="font-body text-sm leading-relaxed mb-5" style={{ color: "hsl(150 12% 42%)" }}>
                    {course.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {course.topics.map((t) => (
                      <span
                        key={t}
                        className="font-body text-xs px-2.5 py-1 rounded-full"
                        style={{ background: "hsl(145 25% 92%)", color: "hsl(145 35% 28%)" }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4 py-4" style={{ borderTop: "1px solid hsl(42 20% 90%)" }}>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Calendar" size={13} style={{ color: "hsl(150 20% 50%)" }} />
                      <span className="font-body text-xs" style={{ color: "hsl(150 15% 42%)" }}>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="PlayCircle" size={13} style={{ color: "hsl(150 20% 50%)" }} />
                      <span className="font-body text-xs" style={{ color: "hsl(150 15% 42%)" }}>{course.lessons} уроков</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-display text-2xl font-semibold" style={{ color: "hsl(145 40% 28%)" }}>
                      {course.price}
                    </span>
                    <button className="btn-primary text-sm py-2.5 px-5">Записаться</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className="section-fade mt-16 rounded-3xl overflow-hidden relative"
            style={{ boxShadow: "0 20px 60px rgba(30, 80, 40, 0.15)" }}
          >
            <img src={COURSES_IMG} alt="Онлайн-обучение" className="w-full h-64 object-cover" />
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, rgba(20, 55, 30, 0.75) 0%, rgba(20, 55, 30, 0.45) 100%)" }}
            >
              <div className="text-center px-6">
                <h3 className="font-display text-3xl md:text-4xl font-semibold mb-3" style={{ color: "hsl(42 40% 93%)" }}>
                  Не знаешь с чего начать?
                </h3>
                <p className="font-body text-sm mb-5" style={{ color: "hsl(145 15% 78%)" }}>
                  Запишитесь на бесплатную консультацию — мы поможем выбрать курс
                </p>
                <button className="btn-primary" onClick={() => scrollTo("contacts")}>
                  Получить консультацию
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTS ─── */}
      <section id="contacts" className="py-24" style={{ background: "hsl(42 30% 97%)" }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 section-fade">
            <div className="tag mb-4 inline-block">Свяжитесь с нами</div>
            <h2 className="font-display text-4xl md:text-5xl font-semibold" style={{ color: "hsl(150 25% 12%)" }}>
              Контакты
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div
              className="section-fade rounded-3xl p-8"
              style={{ background: "white", boxShadow: "0 10px 40px rgba(30, 80, 40, 0.08)" }}
            >
              <h3 className="font-display text-2xl font-semibold mb-6" style={{ color: "hsl(150 25% 12%)" }}>
                Напишите нам
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-body text-sm font-medium mb-1.5 block" style={{ color: "hsl(150 20% 30%)" }}>
                    Ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none"
                    style={{ background: "hsl(42 25% 95%)", border: "1.5px solid hsl(42 20% 88%)", color: "hsl(150 25% 12%)" }}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium mb-1.5 block" style={{ color: "hsl(150 20% 30%)" }}>
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="ivan@example.com"
                    className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none"
                    style={{ background: "hsl(42 25% 95%)", border: "1.5px solid hsl(42 20% 88%)", color: "hsl(150 25% 12%)" }}
                  />
                </div>
                <div>
                  <label className="font-body text-sm font-medium mb-1.5 block" style={{ color: "hsl(150 20% 30%)" }}>
                    Сообщение
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите, чем мы можем помочь..."
                    className="w-full px-4 py-3 rounded-xl font-body text-sm outline-none resize-none"
                    style={{ background: "hsl(42 25% 95%)", border: "1.5px solid hsl(42 20% 88%)", color: "hsl(150 25% 12%)" }}
                  />
                </div>
                <button className="btn-primary w-full text-center mt-2">
                  Отправить сообщение
                </button>
              </div>
            </div>

            <div className="section-fade flex flex-col gap-5">
              {[
                { icon: "Mail", title: "Email", value: "Milka_mimi1@mail.ru", sub: "Ответим в течение 24 часов" },
                { icon: "Phone", title: "Телефон", value: "+7 (966) 063-64-00", sub: "Пн–Пт с 9:00 до 18:00" },
                { icon: "MessageCircle", title: "Telegram", value: "@Milka_mimi1", sub: "Быстрый ответ в мессенджере" },
              ].map((c) => (
                <div
                  key={c.title}
                  className="flex items-start gap-4 p-5 rounded-2xl"
                  style={{ background: "white", boxShadow: "0 4px 20px rgba(30, 80, 40, 0.06)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "hsl(145 30% 92%)" }}
                  >
                    <Icon name={c.icon} size={20} style={{ color: "hsl(145 40% 28%)" }} />
                  </div>
                  <div>
                    <p className="font-body text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: "hsl(150 20% 55%)" }}>
                      {c.title}
                    </p>
                    <p className="font-body text-base font-semibold" style={{ color: "hsl(150 25% 12%)" }}>
                      {c.value}
                    </p>
                    <p className="font-body text-sm mt-0.5" style={{ color: "hsl(150 12% 50%)" }}>
                      {c.sub}
                    </p>
                  </div>
                </div>
              ))}
              <div className="p-6 rounded-2xl" style={{ background: "hsl(145 30% 22%)" }}>
                <p className="font-display text-xl font-semibold italic leading-snug" style={{ color: "hsl(42 40% 90%)" }}>
                  «Твоё здоровье начинается на тарелке»
                </p>
                <p className="font-body text-sm mt-3" style={{ color: "hsl(145 15% 68%)" }}>
                  Присоединяйся к нашему сообществу из 2400+ студентов и сделай первый шаг к осознанному питанию.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10" style={{ background: "hsl(150 25% 12%)" }}>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="text-xl">🌿</span>
              <span className="font-display text-lg font-semibold" style={{ color: "hsl(42 35% 88%)" }}>
                Питайся правильно
              </span>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="font-body text-sm hover:opacity-80 transition-opacity"
                  style={{ color: "hsl(145 12% 62%)" }}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <p className="font-body text-xs" style={{ color: "hsl(145 10% 50%)" }}>
              © 2024 Питайся правильно
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}