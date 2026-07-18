import "./AlertCard.css";
import PrimaryButton from "../Button/PrimaryButton";

function AlertCard({ alerta, cidade, onDashboard, onShare }) {
  // Badge color change logic
  let alertCardBadgeClassColor = "";

  if (alerta.severidade === "Grande Perigo") {
    alertCardBadgeClassColor = "alert-card-badge-critical";
  } else if (alerta.severidade === "Perigo") {
    alertCardBadgeClassColor = "alert-card-badge-danger";
  } else if (alerta.severidade === "Perigo Potencial") {
    alertCardBadgeClassColor = "alert-card-badge-warning";
  }

  const dataApiFim = alerta.data_fim;
  const dataApiFimToObject = new Date(dataApiFim);
  const dataFormatadaFim = dataApiFimToObject.toLocaleDateString("pt-BR");

  return (
    <div className="alert-card-container">
      <p className="alert-card-title">
        {cidade} possui um alerta oficial ativo
      </p>
      <div className="alert-card-content">
        <div className="alert-card-content-text">
          <p className="alert-card-description">
            <span className="alert-card-label">Tipo:</span> {alerta.descricao}
          </p>
          <p className="alert-card-description">
            <span className="alert-card-label">Válido até:</span>{" "}
            {dataFormatadaFim}
          </p>
          <p className="alert-card-description">
            <span className="alert-card-label">Fonte:</span> INMET
          </p>
        </div>
        <div className="alert-card-content-badge">
          <div className={`alert-card-badge ${alertCardBadgeClassColor}`}></div>
          <div className="alert-card-badge-text">{alerta.severidade}</div>
        </div>
      </div>
      <div className="alert-card-button-container">
        <div className="alert-card-button-wrapper">
          <PrimaryButton text="Ver panorama completo →" onClick={onDashboard} />
          <PrimaryButton text="Compartilhar ⎙" onClick={onShare} />
        </div>
      </div>
    </div>
  );
}

export default AlertCard;
