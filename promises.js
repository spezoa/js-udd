const vacas = 8;

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
    })
