const Projects = (): JSX.Element => {
    const projects = [
        {
            id: 1,
            title: "E-commerce Platform",
            description: "Modern e-commerce solution with React, Redux, and Stripe integration. Features include user authentication, product catalog, shopping cart, and secure payment processing.",
            image: "/src/img/projects/1.png",
            technologies: ["React", "Redux", "TypeScript", "Tailwind CSS", "Stripe"],
            status: "Completed",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/username/project"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
            image: "/src/img/projects/2.png",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
            status: "In Progress",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/username/project"
        },
        {
            id: 3,
            title: "Weather Dashboard",
            description: "Beautiful weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
            image: "/src/img/projects/3.png",
            technologies: ["React", "OpenWeather API", "Chart.js", "CSS3"],
            status: "Completed",
            liveUrl: "https://example.com",
            githubUrl: "https://github.com/username/project"
        }
    ];

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 pt-16">
            <div className="container mx-auto px-4 py-20 max-w-6xl">
                <div className="text-center mb-16 animate-fade-in">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent mb-6">
                        My Projects
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Here are some of my recent projects that showcase my skills and experience in web development
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in border border-gray-200 dark:border-gray-700"
                            style={{ animationDelay: `${index * 0.2}s` }}
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === 'Completed'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                                        : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                                        }`}>
                                        {project.status}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded text-xs font-medium"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex space-x-3">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 px-4 rounded-lg text-sm font-medium text-center transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex-1 border-2 border-purple-500 text-purple-500 py-2 px-4 rounded-lg text-sm font-medium text-center transition-all duration-300 hover:bg-purple-500 hover:text-white"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;
