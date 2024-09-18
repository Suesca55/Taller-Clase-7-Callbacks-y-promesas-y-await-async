// Encadenar Promesas

function conectarBaseDeDatos() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Conexión establecida");
    }, 1000);
    });
   }
   function procesarDatos() {
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    resolve("Datos procesados");
    }, 1000);
    });
   }
   conectarBaseDeDatos()
    .then((mensaje) => {
    console.log(mensaje); // Conexión establecida
    return procesarDatos();
    })
    .then((mensaje) => {
    console.log(mensaje); // Datos procesados
    });