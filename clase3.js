// Se trabaja con objetos y como crearlos.

let estudiante = {
    name: 'Marcela',
    lastName: 'Quezada',
    gender: 'female',
    age: 25,
    address: 'Americo Vespucio 50',
    email: 'marcela@quezada.cl',
    rrss: ['twitter','instagram','facebook','reddit','tik-tok'],
};

//console.log(estudiante);


//Funcion para saludar
function saludar (persona) {
    if (persona.gender == 'female') {
        console.log(`Bienvenida ${persona.name}`);
    } else if (persona.gender == 'male') {
        console.log(`Bienvenido ${persona.name}`);
    } else {
        console.log(`Bienvenide ${persona.name}`);
    };  
};

saludar(estudiante);

//cambiar un atributo de un objeto.
estudiante.address = 'Matucana 100';

//console.log(estudiante);

// console.log(Object.keys(estudiante));
//console.log(Object.getOwnPropertyNames(estudiante));
//console.log(Object.entries(estudiante));
//console.log(Object.getOwnPropertyDescriptors(estudiante));

function changeData (obj) {
    let props = Object.keys(obj);

    props.forEach (p => {
        obj[p] = 'nuevo dato';
    });
}

changeData(estudiante);
console.log(estudiante);
