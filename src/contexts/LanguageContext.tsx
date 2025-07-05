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
        'skills.frontend': 'Frontend',
        'skills.tools': 'Tools & Workflow',
        'skills.learning': 'Currently Learning',

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

        // Projects
        'projects.title': 'My Projects',
        'projects.subtitle': 'Here are some of the projects I\'ve worked on',
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
        'skills.frontend': 'Фронтенд',
        'skills.tools': 'Інструменти та робочий процес',
        'skills.learning': 'Зараз вивчаю',

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

        // Projects
        'projects.title': 'Мої проекти',
        'projects.subtitle': 'Ось деякі з проектів, над якими я працював',
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
        'skills.frontend': 'Фронтенд',
        'skills.tools': 'Инструменты и рабочий процесс',
        'skills.learning': 'Сейчас изучаю',

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

        // Projects
        'projects.title': 'Мои проекты',
        'projects.subtitle': 'Вот некоторые из проектов, над которыми я работал',
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