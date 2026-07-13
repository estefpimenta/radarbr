import "./MunicipiosModal.css";

function MunicipiosModal({ close }) {
  return (
    <div className="municipios-modal-overlay">
      <div className="municipios-modal-container">
        <div className="list-container">
          <p className="list-title">Lista de Municípios</p>
          <ul></ul>
        </div>
        <div className="button-list-container">
          <button className="button-list" onClick={close}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default MunicipiosModal;
