//if ternario
let fruta = 'Naranja';

let resultado = fruta == 'Manzana' ? 'buenisimo,me gustan las manzanas' : 'Ufa, yo queria manzana';
console.log(resultado);

let semaforo = '';

switch(semaforo){
    case 'Verde':
        console.log('Puedo cruzar');
        break;
    case 'Amarillo':
        console.log('Precaución');
        break;
    case 'Rojo':
        console.log('No cruces, hay que esperar');
        break;
    default:
        console.log('No funciona el semaforo');
        break;
    }

