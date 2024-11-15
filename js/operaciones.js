/*
console.log("Hola Mundo");
console.log("Hola a Todos. Esta operación es 4 + 8 = ", 4 + 8);
*/

/*Ejercicio A
Ingresar dos números para realizar operaciones matemáticas.
También ingresar un tercer número para comparar si la suma es mayor, menor o igual a ese número
*/
/*
let v_esnro = true;
let v_num1;
let v_num2;
let v_numCompararSuma;

while (v_esnro == true)
{
  v_num1 = prompt("Ingrese el primer número", "");
  v_esnro = Number.isNaN(parseInt(v_num1));
  if (v_esnro == true)
  {
    console.log("El primer dato ingresado no es un número");
  }
  else
  {
    v_esnro = false;
  }
}

v_esnro = true;
while (v_esnro == true)
{
  v_num2 = prompt("Ingrese el segundo número", "");
  v_esnro = Number.isNaN(parseInt(v_num2));
  if (v_esnro == true)
  {
    console.log("El segundo dato ingresado no es un número");
  }
  else
  {
    v_esnro = false;
  }
}

v_esnro = true;
while (v_esnro == true)
{
  v_numCompararSuma = prompt("Ingrese un número para saber si es mayor, igual o menor a la suma", "");
  v_esnro = Number.isNaN(parseInt(v_numCompararSuma));
  if (v_esnro == true)
  {
    console.log("El segundo dato ingresado no es un número");
  }
  else
  {
    v_esnro = false;
  }
}

console.log("La suma de ambos es: " + (parseInt(v_num1) + parseInt(v_num2)));
if (v_numCompararSuma > (parseInt(v_num1) + parseInt(v_num2)))
{
  console.log(v_numCompararSuma + " es mayor a " + (parseInt(v_num1) + parseInt(v_num2)));
}
else
{
  console.log(v_numCompararSuma + " es menor o igual a " + (parseInt(v_num1) + parseInt(v_num2)));
}
console.log("La resta del primer número y segundo número es: " + (parseInt(v_num1) - parseInt(v_num2)));
console.log("La multiplicación de ambos es: " + (parseInt(v_num1) * parseInt(v_num2)));
console.log("La división de ambos es: " + (parseInt(v_num1) / parseInt(v_num2)));
*/

/*Ejercicio B
Ingresar nombre y edad y verificar si es mayor de edad.
Acá suponemos que ingresa una edad válida (no se hará la verficación)
*/
/*
let v_nombre = prompt("Ingrese el nombre", "");
let v_edad = parseInt(prompt("Ingrese la edad: ", ""));
const v_mayorEdad = 18;

console.log(v_nombre + " tiene " + v_edad + " años");
if (v_edad >= v_mayorEdad)
{
  console.log("La persona es mayor de edad.");
}
else
{
  console.log("La persona no es mayor de edad.");
}

//let v_mensaje = ${v_nombre1} `tiene ` ${v_edad1} ` años`;
//console.log(${v_nombre1} `tiene ` ${v_edad1} ` años`);
*/

/*Ejercicio C
Crear un programa que reciba la edad de una persona y si es miembro VIP.
Si es mayor permitirle el acceso y si además es VIP darle acceso al área exclusiva.
Si no es mayor de edad, denegar el acceso
*/
/*
let v_edad1;
let v_esnro1=true;
let v_miembroVip;
const v_mayorEdad1 = 18;

while (v_esnro1 == true)
{
  v_edad1 = prompt("Ingrese la edad", "");
  v_esnro1 = Number.isNaN(parseInt(v_edad1));
  if (v_esnro1 == true)
  {
    console.log("La edad ingresada no es un número");
  }
  else
  {
    v_esnro1 = false;
  }
}

if (v_edad1 >= v_mayorEdad1)
{
  v_esnro1 = true;
  while (v_esnro1 == true)
  {
    v_miembroVip = prompt("Ingrese si es miembro VIP (Ingrese S ó N): ", "");
    if (v_miembroVip == 'S' || v_miembroVip == 'N')
    {
      v_esnro1 = false;
    }
    else
    {
      console.log("Debe ingresar S ó N");
    }
  }
}

//Se hace de esta manera porque lo pide la consiga, pero se podría hacer más fácil
if (v_edad1 >= v_mayorEdad1 && v_miembroVip == 'S')
{
  console.log("Es mayor de edad y tiene acceso al área exclusiva");
}
else
{
  if (v_edad1 >= v_mayorEdad1 && v_miembroVip == 'N')
  {
    console.log("Es mayor de edad y NO tiene acceso al área exclusiva");
  }
  else
  {
    console.log("No tiene acceso porque es menor de edad.");
  }
}
*/

/*Ejercicio D
Crear una función que reciba como parámetros el nombre y la edad de una persona.
Mostrar mensaje si es mayor o menor de edad.
Y en este último caso también mostrar cuántos años le falta para la myoría de edad.
*/
/*
function mayorEdad(nom, edad)
{
  const mayorEdad1 = 18;
  let anios = 0;
  
  if (edad < mayorEdad1)
  {
    anios = mayorEdad1 - edad;
  }
  return anios;
}

let v_nombre2;
v_nombre2 = prompt("Ingrese el nombre", "");
v_edad2 = prompt("Ingrese la edad", "");
const v_cantAnios = mayorEdad(v_nombre2, v_edad2);
if (v_cantAnios == 0)
{
  console.log("La persona es mayor de edad.")
}
else
{
  console.log("La persona es menor de edad y le faltan " + v_cantAnios + " años para la mayoría de edad.")
}
*/

/*Ejercicio E
Crear una función que reciba el precio de un producto y el porcentaje de IVA (Impuesto al Valor Agregado).
Calcular el precio total con IVA y hacer que el IVA sea opcional con un valor del 21%
*/
function precioTotalProd(precio, IVA=0.21)
{
  let v_total = precio + (precio * IVA);
  return v_total;
}

let v_precio = parseFloat(prompt("Ingrese el precio", ""));

let v_iva = parseFloat(prompt("Ingrese el IVA", ""));
v_total = precioTotalProd(v_precio, v_iva);

//v_total = precioTotalProd(v_precio);
console.log("El precio total del producto es " + v_total);