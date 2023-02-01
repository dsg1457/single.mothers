import { Link } from 'react-router-dom'

const Public = () => {
    const content = (
        <section className="public">
            <header>
                <h1>Welcome to <span className="nowrap">Single Moms Unite!</span></h1>
            </header>
            <main className="public__main">
                <p>Here to bring you resources and suport. There is so much for us to share and do life together.</p>
                <address className="public__addr">
                    Based out of Colorado<br />
                    Friends all over<br />
                    Room to Grow!<br />
                    <a href="tel:+15555555555">(555) 555-5555</a>
                </address>
                <br />
                <p>Owner: Danielle Gaymon</p>
            </main>
            <footer>
                <Link to="/login">Member Login</Link>
            </footer>
        </section>

    )
    return content
}