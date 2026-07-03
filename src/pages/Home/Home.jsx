
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import PrimaryButton from '../../components/Button/PrimaryButton'
import SecondaryButton from '../../components/Button/SecondaryButton'
import Footer from '../../components/Footer/Footer'
import './Home.css'

function Home() {


    return(
        <div className="home">

            <NavBar />

            <main className="home__main">
                <h1 className="home__main-title">Minha cidade está sob alerta?</h1>
                <h3 className="home__main-subtitle">Consulte gratuitamente se existe algum alerta climático oficial para qualquer município brasileiro.</h3>

                <div className="searchBar-container">
                    <SearchBar />
                </div>

                <div className="button-container">
                    <PrimaryButton />
                    <SecondaryButton />
                </div>

            </main>

            <Footer />

        </div>

    )
}

export default Home