import { Link, useLocation } from 'react-router-dom';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage, Language } from '../contexts/LanguageContext';

const Navbar = (): JSX.Element => {
    const location = useLocation();
    const { theme, toggleTheme } = useTheme();
    const { language, setLanguage, t } = useLanguage();
    const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const isActive = (path: string) => location.pathname === path;

    const handleLanguageChange = (lang: Language) => {
        setLanguage(lang);
        setIsLanguageDropdownOpen(false);
    };

    const languages = [
        { code: 'en', name: 'English', flag: '🇺🇸' },
        { code: 'uk', name: 'Українська', flag: '🇺🇦' },
        { code: 'ru', name: 'Русский', flag: '🇷🇺' }
    ];

    const currentLanguage = languages.find(lang => lang.code === language) || languages[0];

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLanguageDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 transition-all duration-300">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                        Vlad.dev
                    </Link>

                    {/* Navigation Links */}
                    <div className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors duration-200 hover:text-purple-500 ${isActive('/')
                                ? 'text-purple-500 dark:text-purple-400'
                                : 'text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {t('nav.home')}
                        </Link>
                        <Link
                            to="/projects"
                            className={`text-sm font-medium transition-colors duration-200 hover:text-purple-500 ${isActive('/projects')
                                ? 'text-purple-500 dark:text-purple-400'
                                : 'text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {t('nav.projects')}
                        </Link>
                        <Link
                            to="/contacts"
                            className={`text-sm font-medium transition-colors duration-200 hover:text-purple-500 ${isActive('/contacts')
                                ? 'text-purple-500 dark:text-purple-400'
                                : 'text-gray-700 dark:text-gray-300'
                                }`}
                        >
                            {t('nav.contacts')}
                        </Link>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-4">
                        {/* Language Selector */}
                        <div className="relative" ref={dropdownRef}>
                            <button
                                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
                                className="flex items-center space-x-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:border-purple-500 dark:hover:border-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
                            >
                                <span className="font-medium">{currentLanguage.code.toUpperCase()}</span>
                                <svg
                                    className={`w-4 h-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>

                            {/* Dropdown Menu */}
                            {isLanguageDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 overflow-hidden animate-fade-in">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang.code as Language)}
                                            className={`w-full flex items-center space-x-3 px-4 py-3 text-sm text-left transition-colors duration-200 ${language === lang.code
                                                ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400'
                                                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                                                }`}
                                        >
                                            <span className="text-lg">{lang.flag}</span>
                                            <span className="font-medium">{lang.name}</span>
                                            {language === lang.code && (
                                                <svg className="w-4 h-4 ml-auto text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Theme Toggle */}
                        <button
                            onClick={toggleTheme}
                            className="relative w-14 h-7 bg-gray-200 dark:bg-gray-700 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
                            aria-label="Toggle theme"
                            title={`Current theme: ${theme}, Click to switch to ${theme === 'dark' ? 'light' : 'dark'}`}
                        >
                            <div className={`w-5 h-5 bg-white dark:bg-gray-300 rounded-full shadow-lg transform transition-transform duration-300 flex items-center justify-center ${theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
                                }`}>
                                {theme === 'dark' ? (
                                    <svg className="w-3 h-3 text-gray-800" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                ) : (
                                    <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                )}
                            </div>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button className="text-gray-700 dark:text-gray-300 hover:text-purple-500 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;