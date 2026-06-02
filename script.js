function calcular() {
  let ingreso = document.getElementById("ingreso").value;
  let gasto = document.getElementById("gasto").value;

  let ahorro = ingreso - gasto;

  document.getElementById("resultado").innerText =
    "Tu ahorro es: $" + ahorro;
}