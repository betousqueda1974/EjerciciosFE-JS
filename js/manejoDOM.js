//Ejercicio 1: Cambiar el texto al apretar el botón
const getButton = document.getElementById("botonCambio");

/* getButton.addEventListener("click", () => {
  const textp = document.getElementById("textoMod");
  textp.textContent = "El texto ha sido modificado con Javascript";
}); */

getButton.addEventListener("click", function() {
  const textp = document.getElementById("textoMod");
  textp.textContent = "El texto ha sido modificado con Javascript";
});


//Ejercicio 2: Tener una lista y agregar un ítem nuevo al presionar el botón y mostrar un mensaje de alerta

const addButton = document.querySelector("#agregar");

/* addButton.addEventListener("click", () => {
  const listaPadre = document.querySelector("#lista");
  const listaItem = document.createElement("li");
  const textList = document.createTextNode("Nuevo Elemento");
  listaItem.append(textList);
  listaPadre.appendChild(listaItem);
  alert("Se ha añadido un nuevo elemento");
}); */


/* addButton.addEventListener("click", () => {
  const listaPadre = document.querySelector("#lista");
  const listaItem = document.createElement("li");
  listaItem.textContent = "Nuevo Elemento";
  listaPadre.appendChild(listaItem);
  alert("Se ha añadido un nuevo elemento");
});
 */

addButton.addEventListener("click", () => {
  const listaPadre = document.querySelector("#lista");
  listaPadre.innerHTML = `
    <li>Nuevo Elmento</li>
  `
  alert("Se ha añadido un nuevo elemento");
});
