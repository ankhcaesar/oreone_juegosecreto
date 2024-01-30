/*ej1
Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", 
muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

    let diaDeLaSemana = prompt("Indica el día de la semana");
    if ((diaDeLaSemana == "Sabado") | (diaDeLaSemana == "Domingo")) {
        alert("¡Buen fin de semana!");

    } else { alert("¡Buena semana!") };
*/

/*ej2
Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.

let numIng = prompt("Ingresa un numero positivo o negativo:");
if (numIng > 0) {
    alert(numIng + " es positivo");
} else if (numIng < 0) {
    alert(numIng + " es negativo");
} else {
    alert("Es " + numIng);
}
*/    

/*ej3
Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, 
muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intenta nuevamente 
para ganar.".

    let puntuacion = 130;
    if(puntuacion >= 100){
        alert("¡Felicidades, has ganado!");
    } else {
        alert("Intenta nuevamente para ganar.");
    }
*/

/*Ej4
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un 
template string para incluir el valor del saldo.
    let saldoCta = 1500;
    alert(`El saldo de la cuenta es ${saldoCta}`);
*/

/*Ej5
Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta 
de bienvenida usando ese nombre.
    let nombreUsr = prompt ("Ingresa tu nombre");
    alert (`Bienvenido ${nombreUsr}`)
*/