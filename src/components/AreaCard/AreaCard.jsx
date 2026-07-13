import { useState } from "react";
import "./AreaCard.css";
import MunicipiosModal from "../MunicipiosModal/MunicipiosModal";

function AreaCard({ estados, regioes, municipios }) {
  // Manipulação de modal de Lista dos Munnicípios
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
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
            <span className="area-card-label">Municípios:</span> {""}
            {municipios.length}
            <button
              className="area-card-city-list-button"
              onClick={handleModal}
            >
              {" "}
              ver lista completa
            </button>
          </p>
        </div>
      </div>

      {isModalOpen && <MunicipiosModal close={handleCloseModal} />}
    </>
  );
}

export default AreaCard;
