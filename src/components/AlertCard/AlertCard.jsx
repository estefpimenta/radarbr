import './AlertCard.css'
import PrimaryButton from '../Button/PrimaryButton'

function AlertCard() {

    return(
        <div className="alert-card-container">
            <p className='alert-card-title'>Cidade possui um alerta oficial ativo</p>
            <div className='alert-card-content'>
                <div className="alert-card-content-text">
                    <p className='alert-card-description'><span className='alert-card-label'>Tipo:</span> Chuvas intensas</p>
                    <p className='alert-card-description'><span className='alert-card-label'>Válido até:</span> 18hrs</p>
                    <p className='alert-card-description'><span className='alert-card-label'>Fonte:</span> INMET</p>
                </div>
                <div className="alert-card-content-badge">
                    <div className="badge"></div>
                    <div className="badge-text">Grande Perigo</div>
                </div>
            </div>
            <div className="alert-card-button-container">
                <PrimaryButton />
            </div>
        </div>
    )
}

export default AlertCard