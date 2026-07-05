import './Loading.css'
import loading from '../../assets/loading.png'


function Loading() {


    return(
        <div className="loading-container">
            <div className="loading-spinner">
                <img src={loading} alt="Carregando..." />
            </div>
            <p className="loading-text">Consultando dados oficiais do INMET...</p>
        </div>
    )
}

export default Loading