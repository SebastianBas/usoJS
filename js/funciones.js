// Este es un comentario 

/*
comentario de multiples lineas
otro comentario 
*/

/*
num1 = 1; 
num2 = 2; 

resultado = num1 + num2;
resta  = num1 - num2;
multi = num1 * num2;
divi = num1 / num2;

alert("El resultado de la suma es: " + resultado +
"\n El resultado de la resta es: " + resta+
"\n El resultado de la multiplicacion es: " + multi+
"\n El resultado de la division es: " + divi);
*/


// declaracion de variables con var

var a1 = 20;
var a2 = 30;
alert(a1)
var a1;
alert(a1)

// declarcion de variables let
let num1 = 1; 
let num2 = 2; 

resultado = num1 + num2;
resta  = num1 - num2;
multi = num1 * num2;
divi = num1 / num2;
/*

alert("El resultado de la suma es: " + resultado +
"\n El resultado de la resta es: " + resta+
"\n El resultado de la multiplicacion es: " + multi+
"\n El resultado de la division es: " + divi);
*/


// declaracion de constantes 
const valor = 2000;
alert(valor)

// declaracion de multiplrs variables 
let number1 = 4, number2 = 10, resp;
number1 ++;
number2 --;
alert(number1 + " y "+ number2);

let flat = true;
alert(flat);
alert(!flat);


// creacion de arreglos
const celular = ["Iphone", "Motorola", "Samsung", "GLG", "Nokia"];
alert(celular[0] + "-" + celular[1] + "-" + celular[2] + "-" + celular[3] + "-" + celular[4] );

const colores = new Array("Amarillo", "Azul", "Rojo", "Verde", "Negro");
alert(colores[0] + "-" + colores[1] + "-" + colores[2] + "-" + colores[3] + "-" + colores[4]);

//Longitud del Arreglo
alert("La lomgitud de el arregloes "+ celular.length);

// ordenar el arreglo
celular.sort();
alert(celular[0] + "-" + celular[1] + "-" + celular[2] + "-" + celular[3] + "-" + celular[4] );

//Agregar un elemento al final
celular.push("Xioami");
alert(celular[0] + "-" + celular[1] + "-" + celular[2] + "-" + celular[3] + "-" + celular[4] + "-" + celular[5])

// eliminar el ultimo valor del arreglo 
celular.pop();
alert(celular[0] + "-" + celular[1] + "-" + celular[2] + "-" + celular[3] + "-" + celular[4] )

