
// ej1
 let nombreAleatorio = "Pepe";
 let apellidoAleatorio = "Argento";
 let fechaNacimientoAleatorio = "1970-09-12";
 alert(`¡Bienvenida, ${nombreAleatorio} ${apellidoAleatorio}!`);

//ej2
let nombre = prompt("ingresa tu nombre:");
let apellido = prompt("ingresa tu apellido:");
let fechaNacimiento = prompt("ingresa tu fecha de nacimiento (AAAA-MM-DD):");
alert(`¡Bienvenida, ${nombre} ${apellido}!`);

//ej3
let nacimiento = new Date(fechaNacimiento);
let hoy = new Date();
let diferencia = hoy - nacimiento;
let diasVividos = Math.floor(diferencia / (1000 * 60 * 60 * 24));
alert(`viviste aproximadamente ${diasVividos} días desde que naciste.`);
