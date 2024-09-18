//Callbacks en JavaScript

function saludar(nombre, callback) {
    console.log("Hola, " + nombre);
    callback();
   }
   function despedir() {
    console.log("Adiós");
   }
   saludar("Alice", despedir); // Imprime: Hola, Alice seguido de Adiós