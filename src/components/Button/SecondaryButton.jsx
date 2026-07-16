import "./SecondaryButton.css";
import MapPin from "../../assets/map-pin.svg";

function SecondaryButton({ text, onClick, disabled }) {
  return (
    <button className="secondary-button" onClick={onClick} disabled={disabled}>
      <div className="secondary-button-container">
        <span className="secondary-button-container-text">{text}</span>

        <img
          className="secondary-button__icon"
          src={MapPin}
          alt="Map Pin Icon"
        />
      </div>
    </button>
  );
}

export default SecondaryButton;
