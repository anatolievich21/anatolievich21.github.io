import Header from "../components/Header";
import { useLanguage } from "../contexts/LanguageContext";

const Home = (): JSX.Element => {
    const { t } = useLanguage();

    const skills = [
        {
            category: t('skills.frontend'),
            items: ["JavaScript", "TypeScript", "React", "Redux", "React Router", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "SASS", "LESS", "BEM", "Bootstrap", "Material UI"],
            icon: "💻"
        },
        {
            category: t('skills.tools'),
            items: ["Git", "GitHub", "Bitbucket", "NPM", "PNPM", "Vite", "Webpack", "Trello", "Figma", "Photoshop"],
            icon: "🛠️"
        },
        {
            category: t('skills.learning'),
            items: ["Tailwind CSS", "Node.js", "Express", "GraphQL", "MongoDB", "React Native", "Three.js"],
            icon: "📚"
        }
    ];

    return (
        <>
            <Header />

            <main className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300" id="skills">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-16 animate-fade-in">
                        <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                            Skills & Expertise
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Passionate about creating beautiful, functional, and user-friendly web experiences
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {skills.map((skillGroup, index) => (
                            <div
                                key={skillGroup.category}
                                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in border border-gray-200 dark:border-gray-700"
                                style={{ animationDelay: `${index * 0.2}s` }}
                            >
                                <div className="text-center mb-6">
                                    <div className="text-4xl mb-3">{skillGroup.icon}</div>
                                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        {skillGroup.category}
                                    </h2>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {skillGroup.items.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm font-medium transition-colors duration-200 hover:bg-purple-200 dark:hover:bg-purple-800/40"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Stats section */}
                    <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: "2+", label: "Years Experience" },
                            { number: "10+", label: "Projects Completed" },
                            { number: "5+", label: "Technologies" },
                            { number: "100%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
                            <div
                                key={stat.label}
                                className="animate-fade-in"
                                style={{ animationDelay: `${1 + index * 0.1}s` }}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-purple-500 dark:text-purple-400 mb-2">
                                    {stat.number}
                                </div>
                                <div className="text-gray-600 dark:text-gray-400 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;