
setTimeout(() => {
    console.log('Hello World');
}, 1000);

console.log('Adiós');

function suma(n1, n2) {
    return n1 + n2;
}

function resta(n1, n2) {
    return n1 - n2;
}
function mult(n1, n2) {
    return n1 * n2;
}

function div(n1, n2) {
    return n1 / n2;
}

function calcular(n1, n2, callback) {
    return callback(n1, n2);
}

console.log(calcular(2, 3, suma));
console.log(calcular(2, 3, resta));
console.log(calcular(2, 3, mult));
console.log(calcular(2, 3, div));

/*const numeros = [1,2,3,4,5,6,7,8,9,0];
const duplicar = x=>x*2;
const numeros_resultados = map(numeros, duplicar);
console.table(numeros_resultados);

function map(nums, callback) {
    const resultado = [];
    for (let index = 0; index < numeros.length; index++) {
        resultado.push(
            callback(nums[index])
        );
    }
    return resultado;
}*/

/*setTimeout(() => {
    console.log('Hello World');
}, 1000);*/


function saludar(saludo, callback) {
    setTimeout(() => {
        callback(saludo.toUpperCase());
    }, 4000);  
}

function print(saludo) {
    console.log(saludo);
}

saludar('wena choro!', print)
console.log('final');