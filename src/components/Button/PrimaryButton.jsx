import './PrimaryButton.css'

function PrimaryButton({text, onClick, disabled}) {


    return(
        <button className="primary-button" onClick={onClick} disabled={disabled}>
            {text}
        </button>
    )
}

export default PrimaryButton