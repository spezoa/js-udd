/*const vacas = 8;

const cantidadVacas = new Promise((resolve,reject) => {
    if (vacas > 10){
        resolve('Tenemos suficientes vacas');
    } else {
        reject ('No tenemos suficientes vacas');
    }
});

cantidadVacas
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((e) => {
        console.error(e);
    })
    .finally(()=> {
        console.log('terminado! Vaca dice: Muuuuuh!');
    });
*/

const miPromesa = new Promise((resolve,reject) => {
    setTimeout(() => {
       resolve('Hola mundo, soy llamado desde una promesa') ;
       reject('No se puede cumplir la promesa')
    }, 4000);
});

miPromesa
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((e) => {
        console.error(e);
    })

    