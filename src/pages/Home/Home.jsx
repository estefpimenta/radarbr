
import NavBar from '../../components/NavBar/NavBar'
import SearchBar from '../../components/SearchBar/SearchBar'
import PrimaryButton from '../../components/Button/PrimaryButton'
import SecondaryButton from '../../components/Button/SecondaryButton'
import Loading from '../../components/Loading/Loading'
import ALertCard from '../../components/AlertCard/AlertCard'
import Footer from '../../components/Footer/Footer'
import './Home.css'
import { buscarAlerta } from '../../services/api'

import { useState } from 'react'

function Home() {

    const [cidade, setCidade] = useState('')
    const [showAlert, setShowAlert] = useState(false)
    const [loading, setLoading] = useState(false)
    const [alerta, setAlerta] = useState(null)

    const handleSearch = async () => {
        if(cidade.trim() === '') {
            alert('Digite o nome de uma cidade para pesquisar')
            return
        }

        setShowAlert(false)
        setLoading(true)

        await buscarAlerta(cidade)
        setTimeout(() => {

          setAlerta({
            cidade,
            tipo: 'Chuvas intensas',
            validade: '18hrs',
            fonte: 'INMET',
            nivel: 'Grande Perigo'
            })

          setLoading(false) 
          setShowAlert(true); 
        }, 3000)
        
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
                     disabled={loading}
                    />
                </div>

                <div className="button-container">
                    <PrimaryButton text={loading ? "Pesquisando..." : "Pesquisar"} onClick={handleSearch} disabled={loading} />
                    <SecondaryButton />
                </div>

            </main>

            {loading && <Loading />}

            {showAlert && <ALertCard alerta={alerta}/>}

            <Footer />

        </div>

      
    )
}

export default Home