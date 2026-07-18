import "./MunicipiosModal.css";

function MunicipiosModal({ close, municipios }) {
  console.log(municipios);
  return (
    <div className="municipios-modal-overlay" onClick={close}>
      <div
        className="municipios-modal-container"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="municipios-list-container">
          <p className="municipios-list-title">Lista de Municípios</p>
          <div className="municipios-list-content">
            <ul className="lista-municipios">
              {municipios.map((item) => (
                <li key={item}>{item.split("(")[0]}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="button-list-container">
          <button className="button-municipios-list" onClick={close}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}

export default MunicipiosModal;
