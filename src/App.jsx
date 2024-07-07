import "./styles/main.css"

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Contacts from "./pages/Contacts.jsx";

function App() {

    return (
        <div className="App">
            <Navbar />

            {/*<Home />*/}
            {/*<Projects />*/}
            <Contacts />

            <Footer />
        </div>
    )
}

export default App
