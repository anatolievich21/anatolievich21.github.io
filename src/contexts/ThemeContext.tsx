import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState<Theme>(() => {
        // Перевіряємо localStorage та системні налаштування
        const savedTheme = localStorage.getItem('theme') as Theme;
        if (savedTheme) {
            return savedTheme;
        }

        // Перевіряємо системні налаштування
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }

        return 'light';
    });

    useEffect(() => {
        // Зберігаємо тему в localStorage
        localStorage.setItem('theme', theme);

        // Додаємо/видаляємо клас dark з HTML елемента
        const htmlElement = document.documentElement;

        if (theme === 'dark') {
            htmlElement.classList.add('dark');
            console.log('Dark mode enabled - added class');
        } else {
            htmlElement.classList.remove('dark');
            console.log('Light mode enabled - removed class');
        }

        // Додаємо data-theme атрибут для додаткової перевірки
        htmlElement.setAttribute('data-theme', theme);

        console.log('Current HTML classes:', htmlElement.className);
        console.log('Current theme:', theme);
    }, [theme]);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        console.log('Toggling theme from', theme, 'to', newTheme);
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}; 