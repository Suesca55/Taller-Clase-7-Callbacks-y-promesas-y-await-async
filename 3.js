// Async/Await en JavaScript

async function obtenerDatos() {
    try {
    let respuesta = await fetch('https://api.example.com/datos');
    let datos = await respuesta.json();
    console.log(datos);
    } catch (error) {
    console.log("Error:", error);
    }
   }
   obtenerDatos();