import "./AreaCard.css";

function AreaCard() {
  return (
    <div className="area-card-container">
      <p className="area-card-title">Área de abrangência</p>
      <div className="area-card-descriptions">
        <p className="area-card-description">
          <span className="area-card-label">Região:</span>
        </p>
        <p className="area-card-description">
          <span className="area-card-label">Estados:</span>
        </p>
        <p className="area-card-description">
          <span className="area-card-label">Municípios:</span>
        </p>
      </div>
    </div>
  );
}

export default AreaCard;
