import './Message.css'
import Error from '../../assets/Error.png'

function Message ({text}) {

    return(
        <div className="message-container">
            <img className='message-container-img' src={Error} alt="Error Icon" />
            <p className='message-container-text'>{text}</p>
        </div>
    )
}

export default Message