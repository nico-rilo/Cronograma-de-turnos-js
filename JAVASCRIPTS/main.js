//BASE DE EMPLEADOS

class Empleado {
    constructor(apellido, nombre, legajo, turno){
        this.apellido = apellido;
        this.nombre = nombre;
        this.legajo = legajo;
        this.turno = turno;
    }
}
const empleados = [];    

empleados.push(new Empleado("Fischetti", "Maximiliano", "0001", "Mañana"));
empleados.push(new Empleado("Enclusa", "Marcelo", "0003", "Mañana"));
empleados.push(new Empleado("Moreno", "Carlos", "0006", "Mañana"));
empleados.push(new Empleado("Graver", "Lucas", "0009", "Mañana"));
empleados.push(new Empleado("Jamoix", "Hugo", "0012", "Mañana"));
empleados.push(new Empleado("Lopez", "Leandro", "0015", "Tarde"));
empleados.push(new Empleado("Barroso", "Manuel", "0018", "Tarde"));
empleados.push(new Empleado("Gold", "Teresa", "0021", "Tarde"));
empleados.push(new Empleado("Orode", "Felix", "0024", "Tarde"));
empleados.push(new Empleado("Be Good", "Johnny", "0027", "Tarde"));

//BASE DE DATOS DE TURNOS CON PARAMETROS VACIOS

class Turno {
    constructor(numero, citacionTM, citacionTT){
        this.numero = numero;
        this.citacionTM = citacionTM;
        this.citacionTT = citacionTT;
        this.legajoLunesTM = [];
        this.legajoLunesTT = [];
        this.legajoMartesTM = [];
        this.legajoMartesTT = [];
        this.legajoMiercolesTM = [];
        this.legajoMiercolesTT = [];
        this.legajoJuevesTM = [];
        this.legajoJuevesTT = [];
        this.legajoViernesTM = [];
        this.legajoViernesTT = [];

    }
}
const turnos = [];

turnos.push(new Turno("1", "09:00", "13:00"));
turnos.push(new Turno("2", "13:00", "16:00"));
turnos.push(new Turno("3", "15:00", "18:00"));
turnos.push(new Turno("4", "17:00", "19:00"));
turnos.push(new Turno("5", "18:00", "21:00"));


//CITACIONES (DESDE EL PRIMER EMPLEADO DEL PRIMER TURNO)

class Citacion {
    constructor(primerEmpleado, segundoEmpleado, tercerEmpleado, cuartoEmpleado, quintoEmpleado){
        this.primerEmpleado = primerEmpleado;
        this.segundoEmpleado = segundoEmpleado;
        this.tercerEmpleado = tercerEmpleado;
        this.cuartoEmpleado = cuartoEmpleado;
        this.quintoEmpleado = quintoEmpleado;
            }
}
const citaciones= [];

citaciones.push(new Citacion("1", "2", "3", "4", "5"));
citaciones.push(new Citacion("2", "3", "4", "5", "1"));
citaciones.push(new Citacion("3", "4", "5", "1", "2"));
citaciones.push(new Citacion("4", "5", "1", "2", "3"));
citaciones.push(new Citacion("5", "1", "2", "3", "4"));



getPrimero = Math.floor ((Math.random() * 5 + 1));

const citSemana = citaciones.findIndex((el) => el.primerEmpleado == getPrimero);

let primero;
let segundo;
let tercero;
let cuarto;
let quinto;

// ARRAYS

switch (citSemana){
case 0:
    primero = citaciones[0];
    segundo = citaciones[1];
    tercero = citaciones[2];
    cuarto = citaciones[3];
    quinto = citaciones[4];
break;
case 1:
    primero = citaciones[1];
    segundo = citaciones[2];
    tercero = citaciones[3];
    cuarto = citaciones[4];
    quinto = citaciones[0];
break;
case 2:
    primero = citaciones[2];
    segundo = citaciones[3];
    tercero = citaciones[4];
    cuarto = citaciones[0];
    quinto = citaciones[1];
break;
case 3:
    primero = citaciones[3];
    segundo = citaciones[4];
    tercero = citaciones[0];
    cuarto = citaciones[1];
    quinto = citaciones[2];
break;
case 4:
    primero = citaciones[4];
    segundo = citaciones[0];
    tercero = citaciones[1];
    cuarto = citaciones[2];
    quinto = citaciones[3];
break;
}

let numEmpleado = [primero, segundo, tercero, cuarto, quinto];

 
// RELLENAR PARAMETROS VACIOS 

empleados.forEach ((citacion) => {

    for (i=0; i<numEmpleado.length;i++){

        if (citacion.turno == "Mañana"){
            if (citacion.empleados == numEmpleado[i].primerEmpleado){
                turnos[i].legajoLunesTM.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].segundoEmpleado){
                turnos[i].legajoMartesTM.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].tercerEmpleado){
                turnos[i].legajoMiercolesTM.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].cuartoEmpleado){
                turnos[i].legajoJuevesTM.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].quintoEmpleado){
                turnos[i].legajoViernesTM.push(citacion.legajo);
            }
        }
    }  
    for (i=0; i<numEmpleado.length;i++){

        if (citacion.turno == "Tarde"){
            if (citacion.empleados == numEmpleado[i].primerEmpleado){
                turnos[i].legajoLunesTT.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].segundoEmpleado){
                turnos[i].legajoMartesTT.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].tercerEmpleado){
                turnos[i].legajoMiercolesTT.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].cuartoEmpleado){
                turnos[i].legajoJuevesTT.push(citacion.legajo);
            }
            else if (citacion.empleados == numEmpleado[i].quintoEmpleado){
                turnos[i].legajoViernesTT.push(citacion.legajo);
            }
        }
    } 
})

//A TRAVES DEL LEGAJO SE INFORMA EL HORARIO

let informarLegajo;

let menu;

do{
    menu = (parseInt(prompt ("CONSULTA CITACIONES POR EMPLEADO (INGRESE 1) / CONSULTA CITACIONES POR LEGAJO (INGRESE 2)")));
    
    if (menu == "1" || menu == "2"){
        if (menu == 1){
            document.write ("TURNO - CIT TM - CIT TT - LUNES - MARTES - MIERCOLES - JUEVES - VIERNES" + "<br>" + "---- 1 ------ 09:00 ----- 13:00 " + "-------"+ numEmpleado [0].primerEmpleado + " --------- " + numEmpleado [0].segundoEmpleado + " -------------- " + numEmpleado [0].tercerEmpleado + " -------------- " + numEmpleado [0].cuartoEmpleado + " ----------- " + numEmpleado [0].quintoEmpleado + "<br>" + "---- 2 ------ 13:00 " + "------ 16:00 " + "-------"+ numEmpleado [1].primerEmpleado + " --------- " + numEmpleado [1].segundoEmpleado + " -------------- " + numEmpleado [1].tercerEmpleado + " -------------- " + numEmpleado [1].cuartoEmpleado  + " ----------- " + numEmpleado [1].quintoEmpleado + "<br>" + "---- 3 ------ 15:00 ----- 18:00 "+ "-------" + numEmpleado [2].primerEmpleado + " --------- " + numEmpleado [2].segundoEmpleado + " -------------- " + numEmpleado [2].tercerEmpleado + " -------------- " + numEmpleado [2].cuartoEmpleado + " ----------- " + numEmpleado [2].quintoEmpleado + "<br>" + "---- 4 ------ 17:00 ----- 19:00 " + "-------"+ numEmpleado [3].primerEmpleado + " --------- " + numEmpleado [3].segundoEmpleado + " -------------- " + numEmpleado [3].tercerEmpleado + " -------------- " + numEmpleado [3].cuartoEmpleado + " ----------- " + numEmpleado [3].quintoEmpleado + "<br>" + "---- 5 ------ 18:00 ----- 21:00 " + "-------"+ numEmpleado [4].primerEmpleado + " --------- " + numEmpleado [4].segundoEmpleado + " -------------- " + numEmpleado [4].tercerEmpleado + " -------------- " + numEmpleado [4].cuartoEmpleado + " ----------- " + numEmpleado [4].quintoEmpleado + "<br>");
            break;
        } else if (menu == 2){
            do{
                informarLegajo = (parseInt(prompt ("Cuál es su legajo? Legajos disponibles: 0001 - 0003 - 0006 - 0009 - 0012 - 0015 - 0018 - 0021 - 0024 - 0027")));
                
                if (empleados.some ((el) => el.legajo == informarLegajo)==true){
                    const indexLegajo = empleados.findIndex ((el) => el.legajo == informarLegajo);

                    const citLunes = turnos.findIndex ((el) => el.legajoLunesTM == informarLegajo || el.legajoLunesTT == informarLegajo);
                    const citMartes = turnos.findIndex ((el) => el.legajoMartesTM == informarLegajo || el.legajoMartesTT == informarLegajo);
                    const citMiercoles = turnos.findIndex ((el) => el.legajoMiercolesTM == informarLegajo || el.legajoMiercolesTT == informarLegajo);
                    const citJueves = turnos.findIndex ((el) => el.legajoJuevesTM == informarLegajo || el.legajoJuevesTT == informarLegajo);
                    const citViernes = turnos.findIndex ((el) => el.legajoViernesTM == informarLegajo || el.legajoViernesTT == informarLegajo);

                    const findTurno = empleados.some ((el) => el.turno == "Mañana" && el.legajo == informarLegajo);

                    if (findTurno == true){
                    document.write ("Bienvenido " + empleados[indexLegajo].nombre + " " + empleados[indexLegajo].apellido + "<br>"); 
                    document.write ("citacion Lunes: " + turnos[citLunes].citacionTM + "<br>");
                    document.write ("citacion Martes: " + turnos[citMartes].citacionTM + "<br>");
                    document.write ("citacion Miercoles: " + turnos[citMiercoles].citacionTM + "<br>");
                    document.write ("citacion Jueves: " + turnos[citJueves].citacionTM + "<br>");
                    document.write ("citacion Viernes: " + turnos[citViernes].citacionTM + "<br>");
                    } else if (findTurno == false){
                    document.write ("Bienvenido " + empleados[indexLegajo].nombre + " " + empleados[indexLegajo].apellido + "<br>"); 
                    document.write ("citacion Lunes: " + turnos[citLunes].citacionTT + "<br>");
                    document.write ("citacion Martes: " + turnos[citMartes].citacionTT + "<br>");
                    document.write ("citacion Miercoles: " + turnos[citMiercoles].citacionTT + "<br>");
                    document.write ("citacion Jueves: " + turnos[citJueves].citacionTT + "<br>");
                    document.write ("citacion Viernes: " + turnos[citViernes].citacionTT + "<br>");
                    }; 
                    break;
                } else{
                    alert ("El legajo que ingresó no se encuentra en nuestra base de datos. Intente nuevamente.");
                }
            } while (empleados.some ((el) => el.legajo == informarLegajo) == false);
            break;
        } else {
            alert ("Error. Seleccione una opción del menú.");
        }
    }
}while (menu != "1" || menu != "2");