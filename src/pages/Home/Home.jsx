
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import PrimaryButton from '../../components/Button/PrimaryButton'
import SecondaryButton from '../../components/Button/SecondaryButton'
import ALertCard from '../../components/AlertCard/AlertCard'
import Footer from '../../components/Footer/Footer'
import './Home.css'

import { useState } from 'react'

function Home() {

    const [cidade, setCidade] = useState('')
    const [showAlert, setShowAlert] = useState(false)

    const handleSearch = () => {
        if(trim(cidade) === '') {
            alert('Digite o nome de uma cidade para pesquisar')
            return
        }
        console.log(cidade);
        setShowAlert(true);
    }

    return(
        <div className="home">

            <NavBar />

            <main className="home__main">
                <h1 className="home__main-title">Minha cidade está sob alerta?</h1>
                <h3 className="home__main-subtitle">Consulte gratuitamente se existe algum alerta climático oficial</h3>
                <h3 className="home__main-subtitle">para qualquer município brasileiro.</h3>

                <div className="searchBar-container">
                    <SearchBar 
                     value={cidade}
                     onChange={setCidade}
                    />
                </div>

                <div className="button-container">
                    <PrimaryButton text="Pesquisar" onClick={handleSearch}/>
                    <SecondaryButton />
                </div>

            </main>

            {showAlert && <ALertCard cidade={cidade}/>}

            <Footer />

        </div>

      
    )
}

export default Home