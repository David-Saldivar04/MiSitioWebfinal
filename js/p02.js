<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Práctica JavaScript</title>
  <style>
    #parrafo {
      padding: 10px;
      background-color: lightgray;
      transition: background-color 0.3s;
    }
  </style>
</head>
<body>

<header>
  <center>
    <h2>Práctica con JavaScript</h2>
  </center>
</header>

<section>
  <p id="parrafo">
    Este es un párrafo de ejemplo para realizar pruebas con JavaScript.
  </p>

  <hr>

  <button id="btnMayusculas">Convertir a mayúsculas</button>

  <label for="txtTexto">Agregar texto:</label>
  <input type="text" id="txtTexto">
  <button id="btnAgregar">Agregar</button>
</section>

<script>
  // PASO 1: Obtener los elementos
  const parrafo = document.getElementById('parrafo');
  const btnMay = document.getElementById('btnMayusculas');
  const txtTexto = document.getElementById('txtTexto');
  const btnAgregar = document.getElementById('btnAgregar');

  // Guardar estilos originales
  let colorOriginal = parrafo.style.color;
  let tamanoOriginal = parrafo.style.fontSize;
  let fondoOriginal = parrafo.style.background;

  // PASO 2: Funciones

  function cambiarEstilo() {
    parrafo.style.color = 'red';
    parrafo.style.fontSize = '20px';
    parrafo.style.background = 'yellow';
  }

  function estiloNormal() {
    parrafo.style.color = colorOriginal;
    parrafo.style.fontSize = tamanoOriginal;
    parrafo.style.background = fondoOriginal;
  }

  function convertirMayusculas() {
    parrafo.textContent = parrafo.textContent.toUpperCase();
  }

  function agregarTexto() {
    let texto = txtTexto.value;
    parrafo.innerText += texto;
  }

  // PASO 3: Asociar eventos

  parrafo.addEventListener('mouseover', cambiarEstilo);
  parrafo.addEventListener('mouseout', estiloNormal);
  btnMay.addEventListener('click', convertirMayusculas);
  btnAgregar.addEventListener('click', agregarTexto);
</script>

</body>
</html>
