import "./style.css";

import phone from "../../img/icons/phone.svg";
import telegram from "../../img/icons/telegram.svg";
import github from "../../img/icons/github.svg";
import linkedin from "../../img/icons/linkedin.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="tel:+380960843062" target="_blank"
                                                        rel="noopener noreferrer"><img src={phone}
                                                                                       alt="PhoneNumber"/></a></li>
                        <li className="social__item"><a href="https://t.me/anatolievich21" target="_blank"
                                                        rel="noopener noreferrer"><img src={telegram}
                                                                                       alt="Telegram"/></a></li>
                        <li className="social__item"><a href="https://github.com/anatolievich21" target="_blank"
                                                        rel="noopener noreferrer"><img src={github}
                                                                                       alt="GitHub"/></a></li>
                        <li className="social__item"><a
                            href="https://www.linkedin.com/in/vladyslav-pastushenko-54b217274/" target="_blank"
                            rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2024 anatolievich21</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;