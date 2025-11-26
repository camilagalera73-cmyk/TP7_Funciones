// TP 7 - Funciones en JavaScript

// 1) saludarAUser - función declarada
function saludarAUser(nombre) {
    return `¡Hola, ${nombre}! Bienvenido.`;
}

// 2) calcularArea - función expresada
const calcularArea = function(base, altura) {
    return base * altura;
};

// 3) esPar - función con if/else
function esPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 4) presentarEdad - con valores por defecto
function presentarEdad(edad = 0, nombre = "Anónimo") {
    return `Nombre: ${nombre} | Edad: ${edad}`;
}

// 5) hacerTacos - repetir emoji
function hacerTacos(cantidad) {
    return "🌮".repeat(cantidad);
}

// 6) obtenerIVA
function obtenerIVA(precio) {
    return precio * 0.21;
}
let ivaEjemplo = obtenerIVA(100);

// 7) saludo - flecha sin parámetros
const saludo = () => "¡Hola Coders!";

// 8) tripleDe - flecha un parámetro
const tripleDe = num => num * 3;

// 9) restar - flecha dos parámetros
const restar = (a, b) => a - b;

// 10) estaAprobado - flecha con comparación
const estaAprobado = nota => nota >= 7;

// 11) aMayusculas
const aMayusculas = mensaje => mensaje.toUpperCase();

// 12) horaActual - flecha con varias líneas
const horaActual = () => {
    const fecha = new Date();
    return fecha.toLocaleTimeString();
};

// Ejecuciones de prueba
console.log(saludarAUser("Lucía"));
console.log(calcularArea(5, 10));
console.log(esPar(4));
console.log(presentarEdad());
console.log(hacerTacos(3));
console.log("IVA de 100:", ivaEjemplo);
console.log(saludo());
console.log(tripleDe(7));
console.log(restar(10, 4));
console.log(estaAprobado(9));
console.log(aMayusculas("hola mundo"));
console.log("Hora actual:", horaActual());
