const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Kyiv, Ukraine</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / Phone Number</h2>
                        <p><a href="tel:+380960843062">+38 (096) 084-30-62</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:pastushenkovladislav21@gmail.com">pastushenkovladislav21@gmail.com</a></p>
                    </li>
                </ul>
            </div>
        </main>
    );
}

export default Contacts;
