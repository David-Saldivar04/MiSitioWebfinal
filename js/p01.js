// Seleccionamos los elementos
const value = document.getElementById("valor");
const btnIncrement = document.getElementById("incrementar");
const btnDecrement = document.getElementById("disminuir");
const btnReset = document.getElementById("reiniciar");

// Inicializamos el contador
let counter = 0;

// Funciones
function increment() {
  counter++;
  value.textContent = counter;
}

function decrement() {
  counter--;
  value.textContent = counter;
}

function reset() {
  counter = 0;
  value.textContent = counter;
}

// Eventos
btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
btnReset.addEventListener("click", reset);