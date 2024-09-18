// Async/Await con múltiples promesas

// Definir una función que simula la descarga de un archivo
function descargarArchivo(callback) {
    return new Promise((resolve) => {
        
        setTimeout(() => {
            callback();
            resolve(); // Resuelve la promesa cuando la descarga está completa
        }, 1000); // Ajusta el tiempo según solicite la descarga
    });
}

async function descargarSecuencialmente() {
    console.log("Descargando archivos...");
    await descargarArchivo(() => console.log("Archivo 1 descargado"));
    await descargarArchivo(() => console.log("Archivo 2 descargado"));
    console.log("Descarga completada.");
}

descargarSecuencialmente();
