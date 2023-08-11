//Traer la variable del HTML
var formulario = document.querySelector("form")
let txtName = document.getElementById("name");
let txtAge = document.getElementById("age");
let nationality = document.getElementById("nationality");
let valid = true;
//Se crea un formulario el cual hará las validaciones para el nombre y la edad
formulario.onsubmit = function(e) {

  e.preventDefault();
  //Se declaran las variables las cuales nos servirán para hacer las validaciones y que sean concorde a lo que necesite el festejado
  var n = formulario.elements[0]
  var e = formulario.elements[1]
  var na = formulario.elements[2]

  var nombre = n.value
  var edad = edad = e.value

  var i = na.selectedIndex
  var nacionalidad = na.options[i].value
  console.log(nombre, edad)
  console.log(nacionalidad)
//Condicionales para validaciones
  if (nombre.length === 0) {
    n.classList.add("error")
  }else {
    txtName.classList.remove("error");
  }
  if (edad <= 18 || edad > 120) {
    e.classList.add("error")
  }else {
    txtAge.classList.remove("error");
  }
if (nombre.length > 0 && (edad > 18 
    && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad)
  }
}
//Creacion de botones para eliminar invitado


function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina"
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana"
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana"
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana"
  }

var lista = document.getElementById("lista-de-invitados")
//Creación de un div en el cual se mostrarán los invitados 
var elementoLista = document.createElement("div")
elementoLista.classList.add("elemento-lista")
lista.appendChild(elementoLista)

var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
var spanNombre = document.createElement("span")
var inputNombre = document.createElement("input")
var espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

//crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


var botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
var corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
 //this.parentNode.style.display = 'none';
botonBorrar.parentNode.remove()
  }
}