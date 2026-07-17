// Função para buscar um alerta ativo para a cidade pesquisada
export async function buscarAlerta(cidade) {
  const response = await fetch(
    "https://apiprevmet3.inmet.gov.br/avisos/ativos",
  );

  const dados = await response.json();

  const alertaEncontrado = dados.futuro.find((aviso) => {
    const municipios = aviso.municipios.split(",");

    const encontrouMunicipio = municipios.some(
      (municipio) =>
        municipio.split("(")[0].trim().toLowerCase() ===
        cidade.trim().toLowerCase(),
    );
    return encontrouMunicipio;
  });

  return alertaEncontrado;
}

// Função para buscar os detalhes do alerta ativo para a cidade pesquisada anteriormente (via id)
export async function buscarAlertaPorId(id) {
  const response = await fetch(
    `https://apiprevmet3.inmet.gov.br/aviso/getByID/${id}`,
  );

  const dados = await response.json();
  return dados;
}

// Função para buscar uma Cidade - UF via coordenadas de latitude e longitude
export async function buscarCidadePorCoordenadas(latitude, longitude) {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
  );

  const dados = await response.json();

  const cidade = dados.address.city;
  const uf = dados.address["ISO3166-2-lvl4"].split("-")[1];
  const cidadeFormatada = `${cidade} - ${uf}`;

  return cidadeFormatada;
}

// Função para buscar Cidade - UF da API do IBGE e abstecer nossa SuggestionList
export async function buscarMunicipios() {
  const response = await fetch(
    "https://servicodados.ibge.gov.br/api/v1/localidades/municipios",
  );
  const dados = await response.json();

  const municipiosTratados = dados.map((item) => {
    return `${item.nome} - ${item["regiao-imediata"]["regiao-intermediaria"].UF.sigla}`;
  });

  return municipiosTratados;
}
