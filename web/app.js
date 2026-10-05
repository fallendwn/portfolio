const translations = {
  ru: {
    skip: 'К содержимому', navAbout: 'Обо мне', navExperience: 'Опыт', navStack: 'Стек', navProjects: 'Проекты', navContact: 'Контакты', resume: 'Резюме',
    availability: 'Открыт к предложениям на junior backend-позиции', heroTitle: 'Создаю системы,<br><span>которые работают за кадром.</span>', heroIntro: 'Go backend-разработчик. Создаю надёжные API, понятную бизнес-логику и сервисы, устойчивые под нагрузкой.', explore: 'Посмотреть мой стек', talk: 'Связаться в Telegram', basedIn: 'Город', location: 'Астана, Казахстан', coreLanguage: 'Основной язык', focus: 'Фокус', focusValue: 'API и сервисы', coreService: 'основной сервис',
    aboutLabel: 'Обо мне', aboutTitle: 'Превращаю бизнес-правила в <span>понятный и надёжный код.</span>', aboutP1: 'Я junior backend-разработчик с практическим опытом разработки и поддержки сервисов на Go. Уделяю внимание предсказуемым API, безопасным транзакциям, авторизации и наблюдаемости.', aboutP2: 'Работал с REST и gRPC, PostgreSQL, кешированием в Redis, событийным взаимодействием и контейнеризацией.', aboutLink: 'Посмотреть опыт',
    experienceLabel: 'Опыт', experienceTitle: 'Учусь, создавая реальные продукты.', experienceIntro: 'Практический опыт backend-разработки, интеграций, тестирования и процессов поставки.', period: 'Июнь — август 2026', internRole: 'Стажёр Go Backend', nc1: 'Разрабатывал и поддерживал сервисы на Go, Gin, PostgreSQL и GORM.', nc2: 'Реализовывал REST API, валидацию, транзакции и операции с базой данных.', nc3: 'Улучшал ролевую модель доступа и логику авторизации.', nc4: 'Работал с Docker, Linux и CI/CD-процессами.', ag1: 'Разрабатывал backend-функциональность на Go и интегрировал внешние сервисы.', ag2: 'Находил и исправлял ошибки, влияющие на стабильность сервисов.', ag3: 'Проводил сквозное тестирование API для разных сценариев.',
    stackLabel: 'Технологии', stackTitle: 'Основной стек — Go. <span>Инструменты — на весь цикл разработки.</span>', data: 'Data', messaging: 'Messaging', messagingValue: 'NATS · RabbitMQ · событийные потоки', delivery: 'Delivery', observability: 'Observability', education: 'Образование', degree: 'Бакалавриат, программная инженерия',
    projectsLabel: 'Проекты', projectsTitle: 'Системы для реальных задач.', projectsIntro: 'Три backend-проекта: распределённые сервисы, транзакции и бизнес-логика.', project1: 'Микросервисы для аутентификации, управления пользователями и уведомлений с синхронным и событийным взаимодействием.', microservices: 'Микросервисы', cache: 'Инвалидация кеша', project2: 'Логистический backend для управления отправлениями, доставками, операциями и отслеживанием.', dataModeling: 'Моделирование данных', tracking: 'Отслеживание', project3: 'Сервисы для ставок, кошельков, событий и исходов с авторизацией и безопасными транзакциями.', transactions: 'Транзакции', wallet: 'Логика кошелька', validation: 'Валидация',
    contactEyebrow: 'Буду рад обсудить задачи', contactTitle: 'Есть backend-задача,<br>которую стоит решить?', contactCopy: 'Рассматриваю junior Go backend-позиции, стажировки и интересные проекты.', backToTop: 'Наверх'
  },
  en: {
    skip: 'Skip to content', navAbout: 'About', navExperience: 'Experience', navStack: 'Stack', navProjects: 'Projects', navContact: 'Contact', resume: 'Resume',
    availability: 'Available for junior backend roles', heroTitle: 'I build the systems<br><span>behind the screen.</span>', heroIntro: 'Go backend developer focused on dependable APIs, clear business logic, and services that stay reliable under load.', explore: 'Explore my stack', talk: 'Message me on Telegram', basedIn: 'Based in', location: 'Astana, Kazakhstan', coreLanguage: 'Core language', focus: 'Focus', focusValue: 'APIs & services', coreService: 'core service',
    aboutLabel: 'About', aboutTitle: 'Turning business rules into <span>clear, reliable code.</span>', aboutP1: 'I’m a junior backend developer with hands-on experience building and maintaining services in Go. I care about predictable APIs, safe transactions, sensible authorization, and observable systems.', aboutP2: 'My recent work spans REST and gRPC services, PostgreSQL data flows, Redis caching, event-driven communication, and containerized delivery.', aboutLink: 'See my experience',
    experienceLabel: 'Experience', experienceTitle: 'Learning by shipping.', experienceIntro: 'Production-minded experience across backend development, integrations, testing, and delivery workflows.', period: 'Jun — Aug 2026', internRole: 'Go Backend Intern', nc1: 'Developed and maintained services using Go, Gin, PostgreSQL, and GORM.', nc2: 'Implemented REST APIs, validation, transactions, and database operations.', nc3: 'Improved role-based access control and authorization logic.', nc4: 'Worked with Docker, Linux, and CI/CD workflows.', ag1: 'Built Go backend features and integrated external services.', ag2: 'Investigated and resolved bugs affecting service stability.', ag3: 'Performed end-to-end API testing across multiple scenarios.',
    stackLabel: 'Toolbox', stackTitle: 'Built around the Go ecosystem. <span>Ready for the whole lifecycle.</span>', data: 'Data', messaging: 'Messaging', messagingValue: 'NATS · RabbitMQ · event-driven flows', delivery: 'Delivery', observability: 'Observability', education: 'Education', degree: 'Bachelor of Software Engineering',
    projectsLabel: 'Projects', projectsTitle: 'Systems with a job to do.', projectsIntro: 'Three backend projects exploring distributed services, transactions, and real-world domain logic.', project1: 'Microservices for authentication, user management, and notifications, connected through synchronous and event-driven workflows.', microservices: 'Microservices', cache: 'Cache invalidation', project2: 'A logistics backend for managing shipments, delivery data, shipping operations, and tracking-focused business flows.', dataModeling: 'Data modeling', tracking: 'Tracking flows', project3: 'Services for betting, wallets, events, and outcomes with authenticated APIs and transaction-safe business operations.', transactions: 'Transactions', wallet: 'Wallet logic', validation: 'Validation',
    contactEyebrow: 'Let’s build something dependable', contactTitle: 'Have a backend problem<br>worth solving?', contactCopy: 'I’m open to junior Go backend roles, internships, and conversations about interesting systems.', backToTop: 'Back to top'
  }
};

let currentLanguage = 'ru';
const languageToggle = document.getElementById('language-toggle');

function applyLanguage(language) {
  const copy = translations[language];
  document.documentElement.lang = language;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    element.textContent = copy[element.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((element) => {
    element.innerHTML = copy[element.dataset.i18nHtml];
  });
  languageToggle.textContent = language === 'ru' ? 'EN' : 'RU';
  languageToggle.setAttribute('aria-label', language === 'ru' ? 'Switch to English' : 'Переключить на русский');
  document.querySelector('meta[name="description"]').content = language === 'ru'
    ? 'Портфолио Дениса Ли, Go backend-разработчика из Астаны.'
    : 'Portfolio of Denis Li, Go Backend Developer in Astana, Kazakhstan.';
}

languageToggle.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  applyLanguage(currentLanguage);
});

const revealItems = document.querySelectorAll('.reveal');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (reducedMotion || !('IntersectionObserver' in window)) {
  revealItems.forEach((item) => item.classList.add('is-visible'));
} else {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14, rootMargin: '0px 0px -45px' });
  revealItems.forEach((item) => observer.observe(item));
}
