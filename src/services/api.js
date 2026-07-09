// Função para buscar um alerta ativo para a cidade pesquisada
export async function buscarAlerta(cidade) {
  const response = await fetch(
    "https://apiprevmet3.inmet.gov.br/avisos/ativos",
  );

  const dados = await response.json();

  const alertaEncontrado = dados.hoje.find((aviso) => {
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

// Função para buscar os detalhes do alerta ativo para a cidade pesquisada anteriormente

export async function buscarAlertaPorId(id) {
  const response = await fetch(
    `https://apiprevmet3.inmet.gov.br/aviso/getByID/${id}`,
  );

  const dados = await response.json();
  console.log(dados);
}
