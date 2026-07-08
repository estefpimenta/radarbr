
export async function buscarAlerta(cidade) {
    
    const response =  await fetch('https://apiprevmet3.inmet.gov.br/avisos/ativos')

    const dados = await response.json()

    const alertaEncontrado = dados.hoje.find(aviso => {

                const municipios = aviso.municipios
                .split(",")

                const encontrouMunicipio = municipios.some(municipio =>
                    municipio.split("(")[0].trim().toLowerCase() === cidade.trim().toLowerCase()
                )
                return encontrouMunicipio
            }
            
        )
        
    
    return alertaEncontrado;

    
}