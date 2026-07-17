import { useEffect, useState } from "react";
import "./Dashboard.css";
import { useParams, useLocation } from "react-router-dom";
import { buscarAlertaPorId } from "../../services/api";

import NavBar from "../../components/NavBar/NavBar";
import Info from "../../assets/Info.png";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import RiskCard from "../../components/RiskCard/RiskCard";
import AreaCard from "../../components/AreaCard/AreaCard";
import InstructionsCard from "../../components/InstructionsCard/InstructionsCard";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const { id } = useParams();
  const location = useLocation();
  const [alerta, setAlerta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const navigateToHome = useNavigate();

  const returnHome = () => {
    navigateToHome("/");
  };

  const carregarAlerta = async () => {
    const dados = await buscarAlertaPorId(id);
    setAlerta(dados);
  };

  useEffect(() => {
    carregarAlerta(alerta);
  }, []);

  if (!alerta) {
    return null;
  }

  console.log(alerta);
  const cidadeUF = location.state.cidade.split(" - ");
  const cidade = cidadeUF[0];
  const UF = cidadeUF[1];

  // Manipulação dos dados da API
  // dados para AreaCard
  const estadosAPI = alerta.estados.split(",");
  const estadosTratados = estadosAPI.join(" • ");

  const regioesAPI = alerta.regioes.split(",");
  const regioesTratadas = regioesAPI.join(" • ");

  const municipiosAPI = alerta.municipios.split(",");

  // dados para RiskCard
  const riscosAPI = alerta.riscos;

  // dados para InstructionsCard
  const instrucoesAPI = alerta.instrucoes;

  return (
    <div className="dashboard-container">
      <NavBar />

      <div className="title-container">
        <div className="title-content-left">
          <h1 className="title-container-text">Panorama Completo</h1>
          <div className="title-container-info">
            <img className="info-img" src={Info} alt="info logo" />
            <p className="info-text">Dados oficiais: INMET</p>
          </div>
        </div>
        <div className="title-content-right">
          <button onClick={returnHome} className="return-button">
            ← Voltar a pesquisa
          </button>
        </div>
      </div>

      <div className="cidade-container">
        <p className="cidade">{cidade}</p>
        <div className="circle-separator"></div>
        <p className="uf">{UF}</p>
      </div>

      <div className="cards-container">
        <SummaryCard alerta={alerta} />

        <div className="other-cards-container">
          <div className="risk-and-area-container">
            <RiskCard riscos={riscosAPI} />
            <AreaCard
              estados={estadosTratados}
              regioes={regioesTratadas}
              municipios={municipiosAPI}
            />
          </div>
          <InstructionsCard instrucoes={instrucoesAPI} />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
