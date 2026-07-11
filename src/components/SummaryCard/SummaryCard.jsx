import "./SummaryCard.css";

function SummaryCard({ alerta }) {
  if (!alerta) {
    return null;
  }

  const dataApiInicio = alerta.data_inicio;
  const dataApiInicioToObject = new Date(dataApiInicio);
  const dataFormatadaInicio = dataApiInicioToObject.toLocaleDateString("pt-BR");

  const dataApiFim = alerta.data_fim;
  const dataApiFimToObject = new Date(dataApiFim);
  const dataFormatadaFim = dataApiFimToObject.toLocaleDateString("pt-BR");

  console.log(alerta);

  return (
    <div className="summary-card-container">
      <div className="summary-card-text">
        <p className="summary-card-description">
          <span className="summary-card-label">Tipo:</span> {alerta.descricao}
        </p>
        <div className="summary-card-dates">
          <p className="summary-card-description">
            <span className="summary-card-label">Inicío: </span>
            {dataFormatadaInicio} - {alerta.hora_inicio}
          </p>
          <p className="summary-card-description">
            <span className="summary-card-label">Fim: </span>
            {dataFormatadaFim} - {alerta.hora_fim}
          </p>
        </div>
      </div>

      <div className="summary-card-badge">
        <div className="summary-badge"></div>
        <div className="summary-badge-text">{alerta.severidade}</div>
      </div>
    </div>
  );
}

export default SummaryCard;
