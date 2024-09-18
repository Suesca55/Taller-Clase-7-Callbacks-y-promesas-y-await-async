//Async/Await - Obtener datos desde una API

async function obtenerDatos() {
 try {
 console.log("Obteniendo datos...");
 let respuesta = await leerArchivo(); // Usamos la promesa de leerArchivo
 console.log(respuesta);
 } catch (error) {
 console.log("Error:", error);
 }
}
obtenerDatos();
