// imports
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import ALertCard from "../../components/AlertCard/AlertCard";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import { buscarAlerta, buscarCidadePorCoordenadas } from "../../services/api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // estados em controle da home
  const [cidade, setCidade] = useState("");
  const [cidadePesquisada, setCidadePesquisada] = useState("");
  const [message, setMessage] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alerta, setAlerta] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const navigate = useNavigate();

  const handleSearch = async () => {
    if (cidade.trim() === "") {
      setMessage("Digite o nome de uma cidade para pesquisar");
      return;
    }

    setShowAlert(false);
    setMessage("");
    setLoading(true);

    try {
      const alertaEncontrado = await buscarAlerta(cidade);

      if (!alertaEncontrado) {
        setLoading(false);

        setMessage(`Nenhum alerta ativo encontrado para ${cidade}.`);

        return;
      }

      setAlerta(alertaEncontrado);
      setCidadePesquisada(cidade);

      setLoading(false);

      setShowAlert(true);
    } catch (error) {
      console.error(error);
      setLoading(false);
      setShowAlert(true);
      setMessage(
        "Não foi possível consultar os dados do INMET. Tente novamente em alguns minutos",
      );
    }
  };

  const handleDashboard = () => {
    navigate(`/dashboard/${alerta.id}`, {
      state: {
        cidade: cidadePesquisada,
      },
    });
  };

  const handleLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        // console.log(position.coords.latitude);
        // console.log(position.coords.longitude);

        const cidadeGeolocalizadaFormatada = await buscarCidadePorCoordenadas(
          latitude,
          longitude,
        );
        setCidade(cidadeGeolocalizadaFormatada);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
        setMessage("Não foi possível obter sua localização.");
      },
    );
  };

  return (
    <div className="home">
      <NavBar />

      <main className="home__main">
        <h1 className="home__main-title">Minha cidade está sob alerta?</h1>
        <h3 className="home__main-subtitle">
          Consulte gratuitamente se existe algum alerta climático oficial
        </h3>
        <h3 className="home__main-subtitle">
          para qualquer município brasileiro.
        </h3>

        <div className="searchBar-container">
          <SearchBar
            value={cidade}
            onChange={setCidade}
            disabled={loading}
            suggestions={suggestions}
            showSuggestions={showSuggestions}
          />
        </div>

        {message && <Message text={message} />}

        <div className="button-container">
          <PrimaryButton
            text={loading ? "Pesquisando..." : "Pesquisar"}
            onClick={handleSearch}
            disabled={loading}
          />
          <SecondaryButton
            text={loading ? "Obtendo localização" : " Usar minha localização"}
            onClick={handleLocation}
            disabled={loading}
          />
        </div>
      </main>

      {loading && <Loading />}

      {showAlert && (
        <ALertCard
          alerta={alerta}
          cidade={cidadePesquisada}
          onDashboard={handleDashboard}
        />
      )}

      <Footer />
    </div>
  );
}

export default Home;
