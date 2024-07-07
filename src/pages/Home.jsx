import Header from "../components/header/Header.jsx";

const Home = () => {
    return (
        <>
            <Header />

            <main className="section">
                <div className="container">
                    <h1 className="title-1">Skills</h1>

                    <ul className="content-list">
                        <li className="content-list__item">
                            <h2 className="title-2">Frontend</h2>
                            <p>JavaScript, ReactJS, Redux, React-Router, GraphQL, HTML, CSS, LESS, SASS, BootStrap,
                                MaterialUI, BEM, NPM, Git / GitHub</p>
                        </li>
                        <li className="content-list__item">
                            <h2 className="title-2">Other</h2>
                            <p>Photoshop, Figma, XML, experience with API, OOP</p>
                        </li>
                    </ul>
                </div>
            </main>
        </>
    );
}

export default Home;