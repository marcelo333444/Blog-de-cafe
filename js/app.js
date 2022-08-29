/* funcion query selector */ // retorna de ningun o hasta un elemento

const heading = document.querySelector("#heading"); // 0 a 1 elemento
//heading.textContent = "Que onda Perro"; // modifica el html
console.log(heading);

/* query selector all */

const enlaces = document.querySelectorAll(".navegacion a");// este selecciona todos los elementos con la misma clase
//enlaces[0].textContent = "Enlace nuevo" // se selecciona un elnlace en la posicion indicada y se modifica
//enlaces[0].href = "https://www.google.com" // modifica la direccion del enlace
//enlaces[0].classList.add("Nueva__clase"); // agrega nueva clase al elemento seleccionado
//enlaces[0].classList.remove("Nueva__clase");// elimina la clase

/* get element by id */

//const heading2 = document.getElementById("headin"); // selecciona solo clas con id
//console.log(heading2);

/* modificar html/ generar nuevo enlce */

const nuevoEnlace = document.createElement("A");// crea un nuevo elemento
// agregar href 
nuevoEnlace.href = "nuevo-enlace.html";
// agregar el texto
nuevoEnlace.textContent = "Tienda virtual"
// agregar la clase
nuevoEnlace.classList.add("navegacion__enlace");
// agregarlo al documento
const navegacion = document.querySelector(".navegacion");
navegacion.appendChild(nuevoEnlace);// funcion que nos permite agregar un elemento

console.log(nuevoEnlace);

/* eventos en js */

console.log(1);

window.addEventListener("load", function() { // load esperaque el js y los archivosque dependen del html esten listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
};

document.addEventListener("DOMContentLoaded", function() { //solo espera el html/ no espera el css
    console.log(4);
});

console.log(5);

window.onscroll = function() { // se ejecuta cada ves quese da scroll
    console.log("scrolling...");
};

/* clicks en js / seleccionar elemento y asociarles un evento */

//const btnEnviar = document.querySelector(".boton--primario");
//btnEnviar.addEventListener("click", function(evento) {
    //console.log(evento);
    //evento.preventDefault();
    // validar formulario
    //console.log("enviando formulario");
//});

/* eventos de los inputs y text area */ //148

const datos = {
      nombre: ``,
      email: ``,
      mensaje: ``,
}

const nombreInput = document.querySelector("#nombre"); // queryselector trabaja con un elemento
const emailInput = document.querySelector("#email");
const mensajeInput = document.querySelector("#mensaje");
const formularioInput = document.querySelector(".formulario");

/* forma larga de escribir el codigo */
//nombreInput.addEventListener("input", function(event) { // addEvenlistener para modificar o agregar funcion al elemento
           //console.log(event.target.value);
//});

//emailInput.addEventListener("input", function(event) { 
           //console.log(event.target.value);
//});

//mensajeInput.addEventListener("input", function(event) { 
           //console.log(event.target.value);
//});

/* forma corta de escribir el codigo */

nombreInput.addEventListener("input", leerTexto);
emailInput.addEventListener("input", leerTexto);
mensajeInput.addEventListener("input", leerTexto);

/* el evento en submit / eventos en formularios */

formularioInput.addEventListener("submit", function(event) {
        event.preventDefault(); // previene accion por default

        /* validar formulario/Enviar el formulario */ 

const { nombre, email, mensaje } = datos;

if(nombre === `` || email === `` || mensaje === `` ) {
    mostrarError("Todos los campos son obligatorios");
    return; // corta la ejecucion del codigo
}
    /* crear otra alerta de enviado correctamente */
    mostrarMensaje(`Mensaje enviado correctamente`);

    console.log("Enviando Formulario");
});

function leerTexto(event) {
    console.log(event.target.value);
    datos[event.target.id] = event.target.value;
    console.log(datos);
}

/* funcion de la alerta de que el mje seenvio correctamente */

function mostrarMensaje(mensaje) {
    const alerta = document.createElement(`P`);
    alerta.textContent = mensaje;
    alerta.classList.add(`correcto`);
    formularioInput.appendChild(alerta);

              /* funcion para que la alerta se remueva en tiempo seleccionado */

              setTimeout(() => {
                alerta.remove();
              }, 5000);
};


/* funcion para el aviso de error al enviar form */

function mostrarError(mensaje) {
    const error = document.createElement(`P`);
          error.textContent = mensaje;
          error.classList.add(`error`);

          formularioInput.appendChild( error );

          /* funcion para que la alerta se remueva en tiempo seleccionado */

          setTimeout(() => {
            error.remove();
          }, 5000);
};


/* 150 */







