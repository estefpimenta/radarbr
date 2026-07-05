import './AlertCard.css'
import PrimaryButton from '../Button/PrimaryButton'

function AlertCard({cidade, alerta}) {

    return(
        <div className="alert-card-container">
                <p className='alert-card-title'>{alerta.cidade} possui um alerta oficial ativo</p>
            <div className='alert-card-content'>
                <div className="alert-card-content-text">
                    <p className='alert-card-description'><span className='alert-card-label'>Tipo:</span> {alerta.tipo}</p>
                    <p className='alert-card-description'><span className='alert-card-label'>Válido até:</span> {alerta.validade}</p>
                    <p className='alert-card-description'><span className='alert-card-label'>Fonte:</span> {alerta.fonte}</p>
                </div>
                <div className="alert-card-content-badge">
                    <div className="badge"></div>
                    <div className="badge-text">{alerta.nivel}</div>
                </div>
            </div>
            <div className="alert-card-button-container">
                <div className="alert-card-button-wrapper">
                    <PrimaryButton text="Ver panorama completo →"/>
                </div>
            </div>
        </div>
    )
}

export default AlertCard