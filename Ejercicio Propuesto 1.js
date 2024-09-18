//  Crear una promesa encadenada con dos operaciones


    function verificarArchivo() { 
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const archivoExiste = Math.random() > 0.5; 
                if (archivoExiste) {
                    resolve("Archivo encontrado");
                } else {
                    reject("Archivo no encontrado");
                }
            }, 2000);
        });
    }
    
    function leerArchivo() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Contenido del archivo");
            }, 1000);
        });
    }
    
    async function manejarArchivo() {
        try {
            console.log("Verificando archivo...");
            await verificarArchivo();
            console.log("Archivo encontrado. Obteniendo datos...");
            let respuesta = await leerArchivo();
            console.log(respuesta);
        } catch (error) {
            console.error(error);
        }
    }
    manejarArchivo();
    