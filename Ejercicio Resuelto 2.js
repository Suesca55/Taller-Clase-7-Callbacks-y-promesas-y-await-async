// Promesas - Simulación de lectura de archivos

function leerArchivo() {
    return new Promise(function(resolve, reject) {
    console.log("Leyendo archivo...");
    setTimeout(function() {
    let exito = true; // Simula éxito o error
    if (exito) {
    resolve("Archivo leído correctamente");
    } else {
    reject("Error al leer el archivo");
    }
    }, 2000);
    });
   }
   leerArchivo().then(function(resultado) {
    console.log(resultado);
   }).catch(function(error) {
    console.log(error);
   });