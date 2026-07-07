
export async function buscarAlerta(cidade) {
    
    const response =  await fetch('https://apiprevmet3.inmet.gov.br/avisos/ativos')

    const dados = await response.json()

    const alertaEncontrado = dados.hoje.find(
        aviso =>
            aviso.municipios
                .toLowerCase()
                .includes(cidade.trim().toLowerCase())
    )
    
    return alertaEncontrado;
}