import "./SummaryCard.css";

function SummaryCard() {
  return (
    <div className="summary-card-container">
      <div className="summary-card-text">
        <p className="summary-card-description">
          <span className="summary-card-label">Tipo:</span> chuvas intensas
        </p>
        <p className="summary-card-description">
          <span className="summary-card-label">Vigência:</span> 01/07 / 08:00 -
          17:00
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
