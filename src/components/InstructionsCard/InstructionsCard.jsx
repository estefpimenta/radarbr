import "./InstructionsCard.css";
import ProtectIcon from "../../assets/Protect.png";

function InstructionsCard({ instrucoes }) {
  return (
    <div className="instructions-card-container">
      <p className="instructions-card-title">Como se proteger</p>
      <div className="list-container">
        <ul className="instructions-card-list">
          {instrucoes.map((item) => (
            <li className="instructions-card-list-item" key={item}>
              <img
                className="instructions-card-list-item-img"
                src={ProtectIcon}
                alt=""
              />{" "}
              <span className="instructions-card-list-item-span">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default InstructionsCard;
