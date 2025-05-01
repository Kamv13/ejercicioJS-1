function Calcular() {
  let NumberA, NumberB, NumberC;
    try {
      NumberA = _getRequiredIntValueById("valorA");
      NumberB = _getRequiredIntValueById("valorB");
      NumberC = _getRequiredIntValueById("valorC");
    } catch (error) {
        alert(error.toString())
    }

  if (NumberA !== 0 && NumberB ** 2 - 4 * NumberA * NumberC >= 0) {
    let inputX1 =
      (-NumberB + Math.sqrt(NumberB ** 2 - 4 * NumberA * NumberC)) /
      (2 * NumberA);
    let inputX2 =
      (-NumberB - Math.sqrt(NumberB ** 2 - 4 * NumberA * NumberC)) /
      (2 * NumberA);

    document.getElementById("valorX1").value = inputX1.toFixed(2);
    document.getElementById("valorX2").value = inputX2.toFixed(2);
  } else {
    if (NumberA == 0) {
      Swal.fire({
        title: "El numero A no puede ser cero",
        icon: "error",
        draggable: true
      });
    } else {
      let discriminante = NumberB ** 2 - 4 * NumberA * NumberC;
      if (NumberB ** 2 - 4 * NumberA * NumberC < 0) {
        Swal.fire({
          title: (`La ecuacion no tiene solucion en numeros reales, el discriminante es: ${discriminante}`),
          icon: "error",
          draggable: true
        });
      }
    }
  }
}

function Limpiar() {
  let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
}

function _getRequiredIntValueById(id) {
  const value = document.getElementById(id).value;
  if (!value) {
      throw new Error("Campo requerido vacio: " + id);
  }

  return parseFloat(value);
}