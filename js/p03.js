document.addEventListener('DOMContentLoaded', function () {
  const selectOperaciones = document.getElementById('opciones'); // Cambié el nombre de la variable
  const txtNum1 = document.getElementById('txtNum1');
  const txtNum2 = document.getElementById('txtNum2');
  const resultado = document.getElementById('resultado');
  const lblOperador = document.getElementById('lblOperador');
  const btnCalcular = document.getElementById('btnCalcular'); // Declaración correcta para el botón de calcular

  function cambiarOperador() {
    let opcion = selectOperaciones.value;

    switch (Number(opcion)) {
      case 1:
        lblOperador.textContent = '+';
        break;
      case 2:
        lblOperador.textContent = '-';
        break;
      case 3:
        lblOperador.textContent = '*';
        break;
      case 4:
        lblOperador.textContent = '/';
        break;
    }
  }

  function realizarOperacion() {
    let num1 = Number(txtNum1.value);
    let num2 = Number(txtNum2.value);
    let res = 0;

    if (isNaN(num1) || isNaN(num2)) {
      resultado.textContent = 'Por favor, ingresa números válidos';
      return;
    }

    let opcion = selectOperaciones.value;

    switch (Number(opcion)) {
      case 1:
        res = num1 + num2;
        break;
      case 2:
        res = num1 - num2;
        break;
      case 3:
        res = num1 * num2;
        break;
      case 4:
        if (num2 !== 0) {
          res = num1 / num2;
        } else {
          res = 'Error: División por 0';
        }
        break;
    }

    resultado.textContent = res;
  }

  // Eventos
  selectOperaciones.addEventListener('change', cambiarOperador);
  btnCalcular.addEventListener('click', realizarOperacion);
});
