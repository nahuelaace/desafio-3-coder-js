// Inicializacion de variables
let entrada = parseInt(prompt("Aqui podemos sumar manguitos! \nIngresa un numero para empezar a acumular manguitos")) ;
let mangos = 0;


while (parseInt(entrada)) {
    // Muestra por consola la cantidad de mangos acumulados
    mangos = entrada;
    console.log("Mangos acumulados: "+ mangos);
    // Muestra los mangos acumulados y pide un nuevo ingreso
    entrada = mangos + parseInt(prompt("Hasta ahora tenemos " + entrada + " manguitos!! \nSi quieres puedes ingresar mas!"));

};

// Muestra mensaje de fin de acumulacion de mangos si la entrada no es un numero
alert("El valor ingresado no es valido, asi que hasta aqui llego el juego! \nLlegaste a acumular " + mangos + " manguitos!");
