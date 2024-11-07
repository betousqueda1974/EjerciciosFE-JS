console.log("Hola Mundo");
console.log("Hola a Todos. Esta operación es 4 + 8 = ", 4 + 8);

let v_num1 = prompt("Ingrese el primer número", "");
let v_num2 = prompt("Ingrese el segundo número", "");

console.log("La suma de ambos es: " + (parseInt(v_num1) + parseInt(v_num2)));
console.log("La resta del primer número y segundo número es: " + (parseInt(v_num1) - parseInt(v_num2)));
console.log("La multiplicación de ambos es: " + (parseInt(v_num1) * parseInt(v_num2)));
console.log("La división de ambos es: " + (parseInt(v_num1) / parseInt(v_num2)));

let v_nombre1 = prompt("Ingrese el nombre", "");
let v_edad1 = prompt("Ingrese la edad: ", "");
console.log(v_nombre1 + " tiene " + parseInt(v_edad1) + " años");


//let v_mensaje = ${v_nombre1} `tiene ` ${v_edad1} ` años`;
//console.log(${v_nombre1} `tiene ` ${v_edad1} ` años`);