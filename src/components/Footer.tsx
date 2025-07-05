import phone from "../img/icons/phone.svg";
import telegram from "../img/icons/telegram.svg";
import github from "../img/icons/github.svg";
import linkedin from "../img/icons/linkedin.svg";

const Footer = (): JSX.Element => {
    return (
        <footer className="mt-auto py-16 bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col items-center space-y-10">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Let's Connect
                        </h3>
                        <p className="text-gray-400 dark:text-gray-500 mb-8">
                            Feel free to reach out for collaborations or just a friendly hello!
                        </p>
                    </div>

                    <ul className="flex items-center space-x-8">
                        <li>
                            <a
                                href="tel:+380960843062"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-12 h-12 p-2 rounded-full bg-gray-800 dark:bg-gray-700 transition-all duration-300 hover:opacity-80 hover:scale-110 hover:bg-purple-600 group"
                                title="Phone"
                            >
                                <img src={phone} alt="PhoneNumber" className="w-full h-full group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://t.me/anatolievich21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-12 h-12 p-2 rounded-full bg-gray-800 dark:bg-gray-700 transition-all duration-300 hover:opacity-80 hover:scale-110 hover:bg-blue-600 group"
                                title="Telegram"
                            >
                                <img src={telegram} alt="Telegram" className="w-full h-full group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/anatolievich21"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-12 h-12 p-2 rounded-full bg-gray-800 dark:bg-gray-700 transition-all duration-300 hover:opacity-80 hover:scale-110 hover:bg-gray-600 group"
                                title="GitHub"
                            >
                                <img src={github} alt="GitHub" className="w-full h-full group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/vladyslav-pastushenko-54b217274/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block w-12 h-12 p-2 rounded-full bg-gray-800 dark:bg-gray-700 transition-all duration-300 hover:opacity-80 hover:scale-110 hover:bg-blue-700 group"
                                title="LinkedIn"
                            >
                                <img src={linkedin} alt="LinkedIn" className="w-full h-full group-hover:brightness-0 group-hover:invert transition-all duration-300" />
                            </a>
                        </li>
                    </ul>

                    <div className="text-center border-t border-gray-700 dark:border-gray-600 pt-8 w-full">
                        <p className="text-gray-400 dark:text-gray-500">
                            © 2024 <span className="text-purple-400">anatolievich21</span>. Made with ❤️ and React
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;