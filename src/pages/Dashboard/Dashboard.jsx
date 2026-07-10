import { useEffect, useState } from "react";
import "./Dashboard.css";
import { useParams } from "react-router-dom";
import { buscarAlertaPorId } from "../../services/api";

import NavBar from "../../components/NavBar/NavBar";
import Info from "../../assets/Info.png";
import SummaryCard from "../../components/SummaryCard/SummaryCard";

function Dashboard() {
  const { id } = useParams();
  const [alerta, setAlerta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const carregarAlerta = async () => {
    const dados = await buscarAlertaPorId(id);
    setAlerta(dados);
  };

  useEffect(() => {
    carregarAlerta(alerta);
  }, []);

  console.log(alerta);

  return (
    <div className="dashboard-container">
      <NavBar />

      <div className="title-container">
        <h1 className="title-container-text">Panorama Completo</h1>
        <div className="title-conatiner-info">
          <img className="info-img" src={Info} alt="info logo" />
          <p className="info-text">Dados oficiais: INMET</p>
        </div>
      </div>

      <div className="cidade-container">
        <p className="cidade">Cidade</p>
        <div className="circle-separator"></div>
        <p className="uf">UF</p>
      </div>

      <div className="cards-container">
        <SummaryCard />
      </div>
    </div>
  );
}

export default Dashboard;
