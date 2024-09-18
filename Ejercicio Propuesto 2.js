//Implementar async/await para múltiples operaciones asíncronas



// Función async para obtener datos de una API real
async function obtenerDatosDeApi(url) {
    try {
        const respuesta = await fetch(url);
        if (!respuesta.ok) {
            throw new Error(`Error en la solicitud: ${respuesta.statusText}`);
        }
        const datos = await respuesta.json();
        return datos;
    } catch (error) {
        console.error("Error durante la descarga de datos:", error);
        throw error;
    }
}

// función async para manejar la descarga secuencial de datos de la PokeAPI
async function descargarDatosPokeApiSecuenciales() {
    try {
        console.log("Iniciando descarga de datos...");

       
        const urlApi1 = 'https://pokeapi.co/api/v2/pokemon/ditto';
        console.log("Descargando datos de API 1...");
        let datosApi1 = await obtenerDatosDeApi(urlApi1);
        console.log("Respuesta API 1:", datosApi1);

        const urlApi2 = 'https://pokeapi.co/api/v2/pokemon/pikachu';
        console.log("Descargando datos de API 2...");
        let datosApi2 = await obtenerDatosDeApi(urlApi2);
        console.log("Respuesta API 2:", datosApi2);

        const urlApi3 = 'https://pokeapi.co/api/v2/pokemon/bulbasaur';
        console.log("Descargando datos de API 3...");
        let datosApi3 = await obtenerDatosDeApi(urlApi3);
        console.log("Respuesta API 3:", datosApi3);

        console.log("Todos los datos han sido descargados.");
    } catch (error) {
        console.error("Error durante la descarga de datos:", error);
    }
}

// ejecutar la función async
descargarDatosPokeApiSecuenciales();
