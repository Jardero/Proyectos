// let notas = [10,4,5,8,9,2,7];

// let notasHastaEl100 = notas.map(function(numero){
//     return numero * 10;
// })
// // console.log(notasHastaEl100);

// let notasAprobadas = notas.filter(function(numero){
//     return numero >=7;
// })

// // console.log(notasAprobadas);

// let sumaNotas = notas.reduce(function(estado,numero){
//     return estado + numero;
// })

// // console.log(sumaNotas);

// notas.forEach(function(valor,indice){
//     console.log("En la posicion " + indice +  " tengo el valor " + valor);
// })

let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(aprobados){
    return aprobados >= 7;
})
let desaprobados = estudiantes.filter(function(desaprobados){
    return desaprobados <= 6;
})

console.log(aprobados);