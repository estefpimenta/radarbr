import "./AreaCard.css";

function AreaCard({ estados, regioes }) {
  return (
    <div className="area-card-container">
      <p className="area-card-title">Área de abrangência</p>
      <div className="area-card-descriptions">
        <p className="area-card-description">
          <span className="area-card-label">Região:</span> {regioes}
        </p>
        <p className="area-card-description">
          <span className="area-card-label">Estados:</span> {estados}
        </p>
        <p className="area-card-description">
          <span className="area-card-label">Municípios:</span> 54
          <span className="area-card-city-list"> ver lista completa</span>
        </p>
      </div>
    </div>
  );
}

export default AreaCard;
