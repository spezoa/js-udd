// let formaUno = new Array();
// let formaDos = [];
// let formaTres = ['Bárbara', 'Camila', 'Charles', 'Cristian', 'Darío'];

// let datosSueltos = [2, 'Jalisco', true, 'Ortodoncia'];

// console.log(formaTres[0][0]);
// console.log(formaTres[0][1]);
// console.log(formaTres[0][2]);
// console.log(formaTres[0][3]);
// console.log(formaTres[0][4]);
// console.log(formaTres[0][5]);
// console.log(formaTres[0][6]);
// console.log(formaTres[0][7]);
// console.log(formaTres[0][8]);

// console.table(formaTres)

// //agregar un elemento al final del array

// formaTres.push('Dylan');
// console.log(formaTres);

// //agregar una posición al inicio del array

// formaTres.unshift('Victor');
// console.log(formaTres);

// //eliminar la última posición del array

// formaTres.pop();
// console.log(formaTres);

// //eliminar el primer índice de un array

// formaTres.shift();
// console.log(formaTres);

// //agregar y eliminar posiciones en el array

// formaTres.splice(2,0, 'Victor', ['Dylan', 'Nicolás'], 'Paulina');
// console.log(formaTres);
// console.table(formaTres);

// //recorremos con bucle for el array

// for (let index = 0; index < formaTres.length; index++) {
//     console.log(formaTres[index]);
// };

// //arrow function =>
// //son propias de la programación funcional

// let formaCuatro = ['Bárbara', 'Camila', 'Charles', 'Cristian', 'Darío'];

// //forEach, recorre elemento tras elemento, por medio de una función flecha

// formaCuatro.forEach((element, position) => {
//     console.log(element + ' está en la posición ' + position);
// });

// let nuevaForma = formaCuatro.map((element) => {
//     return 'Estudiante ' + element;
// });

// console.log(nuevaForma);
// console.log(formaCuatro);

// //filter permite crear un nuevo array con elementos que cumplan la condición dada
// let formaCinco = ['Bárbara', 'Camila', 'Charles', 'Cristian', 'Darío'];

// let filtrados = formaCinco.filter((element) => {
//     // return element !== 'Camila' && element !== 'Cristian';
//     return element.startsWith('C', 0);
// });

// console.log(filtrados);


// //retorna el primer elemento que coincida con determinada condición
// let encontrado = formaCinco.find((element) => {
//     return element.startsWith('C',0);
// });

// console.log(encontrado);

// //reduce ejecuta un fx reductora en cada elemento

// let valorInicial = 0;
// let concatenar = formaCinco.reduce((previo, actual) => {
//     return previo + ' ' + actual;
// });

// console.log(concatenar);
// console.log(concatenar[21]);

// let valores = [100,200,300,400,500]

// let sumas = valores.reduce((previo,actual) => {
//     return previo + actual;
// });

// console.log(sumas);

// let sumas2 = valores.reduce((previo,actual) => {
//     if (actual > 300) {
//         return previo + actual;
//     } else {
//         return 0;
//     }
// });

// console.log(sumas2);

/*
Crear un método que reciba un array de
calificaciones y obtenga el promedio con
el uso de los métodos de arrays. Si el
promedio es mayor a 70 imprima que
aprobó / si es menor, que no aprobó.

promedio([70, 80, 80, 90, 60]) // Aprobado: 76.
promedio([70, 50, 75, 70, 60]) // No Aprobado:
65.
*/

let grades = [70, 80, 80, 90, 60];

function average (grades) {
    let summation = grades.reduce((prevValue, currValue) => {
        return prevValue + currValue;
    });

    return summation / grades.length;
}

function isApproved (value) {
    if (value > 70) {
        console.log('Aprobado');
    } else {
        console.log('Reprobado');
    };
};

isApproved(average(grades))
console.log(average(grades));

