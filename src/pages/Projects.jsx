import project01 from '../img/projects/1.png';
import project02 from '../img/projects/2.png';
import project03 from '../img/projects/3.png';

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    <li className="project">
                        <a href="#">
                            <img src={project01} alt="Project image" className="project__img" />
                                <h3 className="project__title">Yoga landing</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="#">
                            <img src={project02} alt="Project image" className="project__img" />
                                <h3 className="project__title">Pokedex</h3>
                        </a>
                    </li>
                    <li className="project">
                        <a href="#">
                            <img src={project03} alt="Project image" className="project__img" />
                                <h3 className="project__title">To be continued</h3>
                        </a>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Projects;
    