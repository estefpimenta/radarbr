import './SecondaryButton.css'
import topRightArrow from '../../assets/top-right-arrow.png'

function SecondaryButton() {

    return(
        <button className="secondary-button">
            Usar minha localização
            <img className='secondary-button__icon' src={topRightArrow} alt="Top right arrow icon" />
        </button>
    )
}

export default SecondaryButton