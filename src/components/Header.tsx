import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Header = (): JSX.Element => {
    const { t } = useLanguage();

    return (
        <header className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-950 dark:to-gray-900 text-white transition-all duration-500 relative overflow-hidden pt-16">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow"></div>
                <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-2000"></div>
                <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-bounce-slow animation-delay-4000"></div>
            </div>

            {/* Scroll indicator - moved higher */}
            <div className="absolute bottom-32 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
                <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            <div className="relative z-10 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-sans font-light mb-8 leading-tight animate-slide-in">
                    <strong className="font-bold">{t('home.greeting')} <em className="text-purple-400 dark:text-purple-300">{t('home.name')}</em></strong><br />
                    <span className="text-2xl md:text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        {t('home.title')}
                    </span>
                </h1>
                <div className="mb-8 animate-slide-in" style={{ animationDelay: '0.2s' }}>
                    <p className="text-lg md:text-xl text-gray-300 dark:text-gray-400">
                        {t('home.subtitle')}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in" style={{ animationDelay: '0.4s' }}>
                    <a
                        href="https://drive.google.com/file/d/1KiTqt3OxbB2ZNAlCt-1mQpZcWwNzNxfO/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block h-12 px-7 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-base font-medium tracking-wide transition-all duration-300 hover:opacity-90 hover:shadow-lg hover:shadow-purple-500/25"
                    >
                        {t('home.downloadCV')}
                    </a>
                    <Link
                        to="/projects"
                        className="inline-block h-12 px-7 py-3 rounded-lg border-2 border-purple-500 text-purple-400 text-base font-medium tracking-wide transition-all duration-300 hover:bg-purple-500 hover:text-white shadow-lg"
                    >
                        {t('home.viewProjects')}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;