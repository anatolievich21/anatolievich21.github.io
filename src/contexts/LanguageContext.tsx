import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'en' | 'uk' | 'ru';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

// Переклади
const translations: Record<Language, Record<string, string>> = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.projects': 'Projects',
        'nav.contacts': 'Contacts',

        // Home page
        'home.greeting': 'Hi, my name is',
        'home.name': 'Vlad',
        'home.title': 'a frontend developer',
        'home.subtitle': 'with passion for learning and creating.',
        'home.downloadCV': 'Download CV',
        'home.viewProjects': 'View Projects',

        // Skills
        'skills.title': 'Skills & Expertise',
        'skills.subtitle': 'Passionate about creating beautiful, functional, and user-friendly web experiences',
        'skills.frontend': 'Frontend',
        'skills.tools': 'Tools & Workflow',
        'skills.learning': 'Currently Learning',

        // Stats
        'stats.experience': 'Years Experience',
        'stats.projects': 'Projects Completed',
        'stats.technologies': 'Technologies',
        'stats.satisfaction': 'Client Satisfaction',

        // Footer
        'footer.connect': "Let's Connect",
        'footer.subtitle': 'Feel free to reach out for collaborations or just a friendly hello!',
        'footer.copyright': 'Made with ❤️ and React',

        // Contacts
        'contacts.title': 'Get In Touch',
        'contacts.subtitle': "I'm always open to discussing new opportunities and interesting projects.",
        'contacts.info': 'Contact Information',
        'contacts.email': 'Email',
        'contacts.phone': 'Phone',
        'contacts.location': 'Location',
        'contacts.available': 'Available for work',
        'contacts.form.title': 'Send Message',
        'contacts.form.name': 'Your Name',
        'contacts.form.email': 'Your Email',
        'contacts.form.message': 'Message',
        'contacts.form.send': 'Send Message',
        'contacts.form.sending': 'Sending...',
        'contacts.form.success': '✅ Message sent successfully! I\'ll get back to you soon.',
        'contacts.form.error': '❌ Failed to send message. Please try again or contact me directly.',

        // Projects
        'projects.title': 'My Projects',
        'projects.subtitle': 'Here are some of my recent projects that showcase my skills and experience in web development',
        'projects.liveDemo': 'Live Demo',
        'projects.status.completed': 'Completed',
        'projects.status.inprogress': 'In Progress',
        'projects.ecommerce.description': 'Modern e-commerce solution with React, Redux, and Stripe integration. Features include user authentication, product catalog, shopping cart, and secure payment processing.',
        'projects.taskmanager.description': 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
        'projects.weather.description': 'Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.',
    },
    uk: {
        // Navigation
        'nav.home': 'Головна',
        'nav.projects': 'Проекти',
        'nav.contacts': 'Контакти',

        // Home page
        'home.greeting': 'Привіт, мене звати',
        'home.name': 'Влад',
        'home.title': 'фронтенд розробник',
        'home.subtitle': 'з пристрастю до навчання та створення.',
        'home.downloadCV': 'Завантажити CV',
        'home.viewProjects': 'Переглянути проекти',

        // Skills
        'skills.title': 'Навички та досвід',
        'skills.subtitle': 'Захоплені створенням красивих, функціональних та користувальницьких веб-досвідів',
        'skills.frontend': 'Фронтенд',
        'skills.tools': 'Інструменти та робочий процес',
        'skills.learning': 'Зараз вивчаю',

        // Stats
        'stats.experience': 'Років досвіду',
        'stats.projects': 'Проектів завершено',
        'stats.technologies': 'Технологій',
        'stats.satisfaction': 'Задоволення клієнтів',

        // Footer
        'footer.connect': "Давайте зв'яжемося",
        'footer.subtitle': 'Не соромтеся звертатися для співпраці або просто привітатися!',
        'footer.copyright': 'Зроблено з ❤️ та React',

        // Contacts
        'contacts.title': "Зв'яжіться зі мною",
        'contacts.subtitle': 'Я завжди відкритий для обговорення нових можливостей та цікавих проектів.',
        'contacts.info': 'Контактна інформація',
        'contacts.email': 'Електронна пошта',
        'contacts.phone': 'Телефон',
        'contacts.location': 'Місцезнаходження',
        'contacts.available': 'Доступний для роботи',
        'contacts.form.title': 'Надіслати повідомлення',
        'contacts.form.name': "Ваше ім'я",
        'contacts.form.email': 'Ваша електронна пошта',
        'contacts.form.message': 'Повідомлення',
        'contacts.form.send': 'Надіслати повідомлення',
        'contacts.form.sending': 'Надсилання...',
        'contacts.form.success': '✅ Повідомлення надіслано успішно! Я зв\'яжуся з вами найближчим часом.',
        'contacts.form.error': '❌ Не вдалося надіслати повідомлення. Будь ласка, спробуйте ще раз або зв\'яжіться зі мною безпосередньо.',

        // Projects
        'projects.title': 'Мої проекти',
        'projects.subtitle': 'Ось деякі з моїх останніх проектів, які демонструють мої навички та досвід у веб-розробці',
        'projects.liveDemo': 'Демо',
        'projects.status.completed': 'Завершено',
        'projects.status.inprogress': 'В процесі',
        'projects.ecommerce.description': 'Сучасне рішення для електронної комерції з React, Redux та інтеграцією Stripe. Включає автентифікацію користувачів, каталог товарів, кошик та безпечну обробку платежів.',
        'projects.taskmanager.description': 'Додаток для спільного управління завданнями з оновленнями в реальному часі, функціональністю перетягування та функціями командної співпраці.',
        'projects.weather.description': 'Красивий додаток погоди з прогнозами на основі місцезнаходження, інтерактивними картами та детальною аналітикою погоди.',
    },
    ru: {
        // Navigation
        'nav.home': 'Главная',
        'nav.projects': 'Проекты',
        'nav.contacts': 'Контакты',

        // Home page
        'home.greeting': 'Привет, меня зовут',
        'home.name': 'Влад',
        'home.title': 'фронтенд разработчик',
        'home.subtitle': 'со страстью к обучению и созданию.',
        'home.downloadCV': 'Скачать CV',
        'home.viewProjects': 'Посмотреть проекты',

        // Skills
        'skills.title': 'Навыки и опыт',
        'skills.subtitle': 'Занимаюсь созданием красивых, функциональных и удобных веб-опытов',
        'skills.frontend': 'Фронтенд',
        'skills.tools': 'Инструменты и рабочий процесс',
        'skills.learning': 'Сейчас изучаю',

        // Stats
        'stats.experience': 'Лет опыта',
        'stats.projects': 'Проектов завершено',
        'stats.technologies': 'Технологий',
        'stats.satisfaction': 'Удовлетворенность клиентов',

        // Footer
        'footer.connect': 'Давайте свяжемся',
        'footer.subtitle': 'Не стесняйтесь обращаться для сотрудничества или просто поздороваться!',
        'footer.copyright': 'Сделано с ❤️ и React',

        // Contacts
        'contacts.title': 'Свяжитесь со мной',
        'contacts.subtitle': 'Я всегда открыт для обсуждения новых возможностей и интересных проектов.',
        'contacts.info': 'Контактная информация',
        'contacts.email': 'Электронная почта',
        'contacts.phone': 'Телефон',
        'contacts.location': 'Местоположение',
        'contacts.available': 'Доступен для работы',
        'contacts.form.title': 'Отправить сообщение',
        'contacts.form.name': 'Ваше имя',
        'contacts.form.email': 'Ваша электронная почта',
        'contacts.form.message': 'Сообщение',
        'contacts.form.send': 'Отправить сообщение',
        'contacts.form.sending': 'Отправка...',
        'contacts.form.success': '✅ Сообщение отправлено успешно! Я свяжусь с вами в ближайшее время.',
        'contacts.form.error': '❌ Не удалось отправить сообщение. Пожалуйста, попробуйте еще раз или свяжитесь со мной напрямую.',

        // Projects
        'projects.title': 'Мои проекты',
        'projects.subtitle': 'Вот некоторые из моих последних проектов, которые демонстрируют мои навыки и опыт в веб-разработке',
        'projects.liveDemo': 'Демо',
        'projects.status.completed': 'Завершен',
        'projects.status.inprogress': 'В процессе',
        'projects.ecommerce.description': 'Современное решение для электронной коммерции с React, Redux и интеграцией Stripe. Включает аутентификацию пользователей, каталог товаров, корзину и безопасную обработку платежей.',
        'projects.taskmanager.description': 'Приложение для совместного управления задачами с обновлениями в реальном времени, функциональностью перетаскивания и возможностями командного сотрудничества.',
        'projects.weather.description': 'Красивое приложение погоды с прогнозами на основе местоположения, интерактивными картами и подробной аналитикой погоды.',
    }
};

interface LanguageProviderProps {
    children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
    const [language, setLanguage] = useState<Language>(() => {
        const savedLanguage = localStorage.getItem('language') as Language;
        if (savedLanguage && ['en', 'uk', 'ru'].includes(savedLanguage)) {
            return savedLanguage;
        }

        // Определяем язык по браузеру
        const browserLang = navigator.language.toLowerCase();
        if (browserLang.startsWith('uk')) return 'uk';
        if (browserLang.startsWith('ru')) return 'ru';
        return 'en';
    });

    useEffect(() => {
        localStorage.setItem('language', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = (key: string): string => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}; 