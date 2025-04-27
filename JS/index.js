function Calcular() {
  let NumberA = parseFloat(document.getElementById("valorA").value);
  let NumberB = parseFloat(document.getElementById("valorB").value);
  let NumberC = parseFloat(document.getElementById("valorC").value);

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
      alert("El numero A no puede ser 0");
    } else {
      let discriminante = NumberB ** 2 - 4 * NumberA * NumberC;
      if (NumberB ** 2 - 4 * NumberA * NumberC < 0) {
        alert(`El discriminante no puede ser negativo: ${discriminante}`);
      }
    }
  }
}
