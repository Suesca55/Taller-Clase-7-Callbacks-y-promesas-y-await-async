// Callbacks - Simulación de descarga de archivos

function descargarArchivo(callback) {
    console.log("Descargando archivo...");
    setTimeout(function() {
    console.log("Archivo descargado");
    callback();
    }, 3000); // Simula 3 segundos de descarga
   }
   function procesarArchivo() {
    console.log("Procesando archivo...");
   }
   descargarArchivo(procesarArchivo);