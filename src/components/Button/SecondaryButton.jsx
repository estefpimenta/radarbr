import "./SecondaryButton.css";
import MapPin from "../../assets/map-pin.svg";

function SecondaryButton({ onClick, disabled }) {
  return (
    <button className="secondary-button" onClick={onClick} disabled={disabled}>
      <div className="secondary-button-container">
        <span className="secondary-button-container-text">
          Usar minha localização
        </span>

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
