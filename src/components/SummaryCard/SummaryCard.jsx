import "./SummaryCard.css";

function SummaryCard() {
  return (
    <div className="summary-card-container">
      <div className="summary-card-text">
        <p className="summary-card-description">
          <span className="summary-card-label">Tipo:</span>
        </p>
        <p className="summary-card-description">
          <span className="summary-card-label">Vigência:</span>
        </p>
      </div>

      <div className="summary-card-badge">
        <div className="badge"></div>
        <div className="badge-text">TEXT</div>
      </div>
    </div>
  );
}

export default SummaryCard;
