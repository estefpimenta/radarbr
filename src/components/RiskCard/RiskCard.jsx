import "./RiskCard.css";

function RiskCard({ riscos }) {
  console.log(riscos);
  return (
    <div className="risk-card-container">
      <p className="risk-card-title">Riscos</p>
      <p className="risk-card-description">{riscos}</p>
    </div>
  );
}

export default RiskCard;
