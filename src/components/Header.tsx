import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect, useRef } from 'react';
import myAvatar from '../img/my-avatar.png';

const Header = (): JSX.Element => {
    const { t } = useLanguage();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [scrollY, setScrollY] = useState(0);
    const headerRef = useRef<HTMLElement>(null);
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }

            animationFrameRef.current = requestAnimationFrame(() => {
                const rect = headerRef.current?.getBoundingClientRect();
                if (rect) {
                    setMousePosition({
                        x: e.clientX - rect.left,
                        y: e.clientY - rect.top
                    });
                }
            });
        };

        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        const headerElement = headerRef.current;
        if (headerElement) {
            headerElement.addEventListener('mousemove', handleMouseMove, { passive: true });
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            if (headerElement) {
                headerElement.removeEventListener('mousemove', handleMouseMove);
            }
            window.removeEventListener('scroll', handleScroll);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <header
            ref={headerRef}
            className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-gray-800 dark:from-gray-950 dark:via-purple-950 dark:to-gray-900 text-white transition-all duration-500 relative overflow-hidden pt-16"
        >
            {/* Animated geometric background */}
            <div className="absolute inset-0 opacity-10">
                {/* Floating particles */}
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
                <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '2s', animationDuration: '5s' }}></div>
                <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping" style={{ animationDelay: '0.5s', animationDuration: '3.5s' }}></div>
                <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-indigo-400 rounded-full animate-ping" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }}></div>

                {/* Floating geometric shapes */}
                <div className="absolute top-20 left-16 w-16 h-16 border border-purple-400/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
                <div className="absolute top-32 right-20 w-12 h-12 border border-pink-400/30 rounded-full animate-pulse" style={{ animationDuration: '3s' }}></div>
                <div className="absolute bottom-32 left-20 w-20 h-20 border border-blue-400/30 rotate-12 animate-spin" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
                <div className="absolute bottom-20 right-32 w-8 h-8 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rotate-45 animate-pulse" style={{ animationDuration: '4s' }}></div>

                {/* Grid pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="grid grid-cols-12 gap-4 h-full">
                        {Array.from({ length: 48 }, (_, i) => (
                            <div key={i} className="border border-purple-400/20"></div>
                        ))}
                    </div>
                </div>

                {/* Gradient orbs with different animations */}
                <div className="absolute top-1/4 left-1/6 w-64 h-64 bg-gradient-to-r from-purple-600/20 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '6s' }}></div>
                <div className="absolute top-1/2 right-1/6 w-48 h-48 bg-gradient-to-l from-pink-600/20 to-transparent rounded-full filter blur-2xl animate-pulse" style={{ animationDuration: '8s', animationDelay: '2s' }}></div>
                <div className="absolute bottom-1/4 left-1/2 w-56 h-56 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full filter blur-3xl animate-pulse" style={{ animationDuration: '7s', animationDelay: '4s' }}></div>
            </div>

            {/* Animated lines */}
            <div className="absolute inset-0 opacity-20">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="rgb(236, 72, 153)" stopOpacity="0.1" />
                        </linearGradient>
                        <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="rgb(147, 51, 234)" stopOpacity="0.1" />
                        </linearGradient>
                    </defs>
                    <path d="M0,30 Q50,10 100,40" stroke="url(#lineGradient1)" strokeWidth="0.5" fill="none" className="animate-pulse" />
                    <path d="M0,70 Q50,90 100,60" stroke="url(#lineGradient2)" strokeWidth="0.5" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
                    <path d="M20,0 Q40,50 60,100" stroke="url(#lineGradient1)" strokeWidth="0.3" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
                </svg>
            </div>

            {/* Mouse follower effects - оптимізовано для кращої продуктивності */}
            <div
                className="absolute w-80 h-80 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full filter blur-2xl pointer-events-none transition-transform duration-150 ease-out will-change-transform"
                style={{
                    left: mousePosition.x - 160,
                    top: mousePosition.y - 160,
                }}
            />
            <div
                className="absolute w-48 h-48 bg-gradient-to-r from-blue-500/12 to-purple-500/12 rounded-full filter blur-xl pointer-events-none transition-transform duration-100 ease-out will-change-transform"
                style={{
                    left: mousePosition.x - 96,
                    top: mousePosition.y - 96,
                }}
            />

            {/* Scroll indicator - hidden on mobile and when scrolled */}
            <div
                className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden md:block transition-opacity duration-300 ${scrollY > 50 ? 'opacity-0 pointer-events-none' : 'opacity-100'
                    }`}
            >
                <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-pulse"></div>
                </div>
            </div>

            <div className="relative z-10 text-center px-4">
                {/* Avatar */}
                <div className="mb-8 animate-slide-in">
                    <img
                        src={myAvatar}
                        alt="Vladyslav Anatolievich"
                        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto border-4 border-purple-300/50 shadow-2xl shadow-purple-500/20 hover:border-purple-300 transition-all duration-300"
                    />
                </div>
                <h1 className="text-4xl md:text-6xl font-sans font-light mb-8 leading-tight animate-slide-in" style={{ animationDelay: '0.2s' }}>
                    <strong className="font-bold text-white">{t('home.greeting')} <em className="text-purple-300 dark:text-purple-200">{t('home.name')}</em></strong><br />
                    <span className="text-2xl md:text-4xl bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                        {t('home.title')}
                    </span>
                </h1>
                <div className="mb-8 animate-slide-in" style={{ animationDelay: '0.4s' }}>
                    <p className="text-lg md:text-xl text-gray-200 dark:text-gray-300">
                        {t('home.subtitle')}
                    </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-in" style={{ animationDelay: '0.6s' }}>
                    <a
                        href="https://drive.google.com/file/d/1KiTqt3OxbB2ZNAlCt-1mQpZcWwNzNxfO/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-48 h-12 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-base font-medium tracking-wide transition-all duration-300 hover:from-purple-700 hover:to-pink-700 hover:shadow-lg hover:shadow-purple-500/30"
                    >
                        {t('home.downloadCV')}
                    </a>
                    <Link
                        to="/projects"
                        className="flex items-center justify-center w-48 h-12 rounded-lg border-2 border-purple-300 text-purple-200 text-base font-medium tracking-wide transition-all duration-300 hover:bg-purple-600 hover:text-white hover:border-purple-600 shadow-lg"
                    >
                        {t('home.viewProjects')}
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;