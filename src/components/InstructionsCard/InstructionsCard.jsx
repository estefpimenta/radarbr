import "./InstructionsCard.css";
import ProtectIcon from "../../assets/Protect.png";

function InstructionsCard() {
  return (
    <div className="instructions-card-container">
      <p className="instructions-card-title">Como se proteger</p>
      <ul className="instructions-card-list">
        <li className="instructions-card-lis-item">
          <img src={ProtectIcon} alt="" /> Evite áreas alagadas
        </li>
      </ul>
    </div>
  );
}

export default InstructionsCard;
