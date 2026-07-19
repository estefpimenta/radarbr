import "./InfoInmetModal.css";

function InfoInmetModal({ close }) {
  return (
    <div className="info-inmet-modal-container">
      <p className="inmet-modal-container-p">
        Os alertas exibidos pelo RadarBR são obtidos a partir dos serviços
        oficiais do Instituto Nacional de Meteorologia (INMET), órgão
        responsável pelo monitoramento e emissão de alertas meteorológicos no
        Brasil.
      </p>
      <a
        className="inmet-modal-container-link"
        href="https://portal.inmet.gov.br/"
        target="_blank"
      >
        CONSULTE O PORTAL OFICIAL 🔗
      </a>

      <div className="info-inmet-modal-button-container">
        <button className="info-inmet-modal-button" onClick={close}>
          Fechar
        </button>
      </div>
    </div>
  );
}

export default InfoInmetModal;
