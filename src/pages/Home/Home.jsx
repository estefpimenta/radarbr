// imports
import NavBar from "../../components/NavBar/NavBar";
import SearchBar from "../../components/SearchBar/SearchBar";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SecondaryButton from "../../components/Button/SecondaryButton";
import Loading from "../../components/Loading/Loading";
import Message from "../../components/Message/Message";
import SuggestionsList from "../../components/SuggestionsList/SuggestionsList";
import ALertCard from "../../components/AlertCard/AlertCard";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import {
  buscarAlerta,
  buscarCidadePorCoordenadas,
  buscarMunicipios,
} from "../../services/api";
import { useState, useEffect } from "react";
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
  const [municipios, setMunicipios] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [isSelectingSuggestion, setIsSelectingSuggestion] = useState(false);

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

  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate(`/dashboard/${alerta.id}`, {
      state: {
        cidade: cidadePesquisada,
      },
    });
  };

  // Função para compartilhamento do alerta
  const handleShare = async () => {
    if (!navigator.share) {
      setMessage("Seu navegador não suporta compartilhamento.");
      return;
    }

    const mensagem = `⚠ Alerta climático oficial
    ${cidadePesquisada} possui um alerta oficial ativo.
    • Tipo: ${alerta.descricao}
    • Severidade: ${alerta.severidade}
    • Válido até: ${alerta.fim}

      Fonte: INMET

      Consulta realizada pelo RadarBR
      
      Consulte para mais detalhes e outros alertas em:: https://estefpimenta.github.io/radarbr/`;

    try {
      await navigator.share({
        title: "RadarBR - Alerta Climático",
        text: mensagem,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleLocation = () => {
    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

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

  // Função para selecionar a cidade clicada ou pressionada via enter e inserila na SearchBar
  const handleSuggestion = (cidadeSelecionada) => {
    setIsSelectingSuggestion(true);
    setCidade(cidadeSelecionada);
    setShowSuggestions(false);
  };

  // Função para capturar tecla pressionada na navegação por seta da SearchBar
  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown" && selectedIndex < suggestions.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else if (event.key === "ArrowUp" && selectedIndex > -1) {
      setSelectedIndex(selectedIndex - 1);
    } else if (event.key === "Enter" && selectedIndex >= 0) {
      handleSuggestion(suggestions[selectedIndex]);
    }
  };

  // useEffect para buscar municipios do IBGE ao renderizar a Home e guradar no estado municipos via setMunicipios
  useEffect(() => {
    const carregarMunicipios = async () => {
      const dados = await buscarMunicipios();

      setMunicipios(dados);
    };

    carregarMunicipios();
  }, []);

  // useEffect Executa sempre que o texto digitado / cidade ou a lista de municípios mudar, filtrando  os municípios que começam com o texto digitado / cidade, atualiza a lista e a exibe
  useEffect(() => {
    if (isSelectingSuggestion) {
      setIsSelectingSuggestion(false);
      return;
    }

    if (cidade.length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      setSelectedIndex(-1);
      return;
    }

    const resultado = municipios.filter((item) => {
      return item.toLowerCase().startsWith(cidade.toLowerCase());
    });

    setSuggestions(resultado);

    setShowSuggestions(resultado.length > 0);
    setSelectedIndex(-1);
  }, [cidade, municipios]);

  return (
    <div className="page">
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
              onKeyDown={handleKeyDown}
            />

            {showSuggestions && (
              <SuggestionsList
                suggestions={suggestions}
                onSelect={handleSuggestion}
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
              />
            )}
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
            onShare={handleShare}
          />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
