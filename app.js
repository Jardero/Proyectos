function Curso(cantidadDeAlumnos,docentes,horario){
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}

let cursoDeProgramacion1A = new Curso(50,['Javier','Gerardo'],'de 19 a 21 hs');
let cursoDeProgramacion1B = new Curso(45,['Diego','Damian'],'de 15 a 17 hs');
let cursoDeProgramacion2A = new Curso(35,['Dario','Marcos'],'de 10 a 12 hs');
let cursoDeProgramacion2B = new Curso(49,['Jorge','Ricardo'],'de 8 a 10 hs');
