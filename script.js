document.getElementById("formIMC").addEventListener("submit", function(event) {
    event.preventDefault();
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value) / 100; // Convertir altura a metros
    const imc = peso / (altura * altura);
    let mensaje = "Tu IMC es: " + imc.toFixed(2) + ". ";
    if (imc < 18.5) {
        mensaje += "Estás desnutrido.";
    } else if (imc >= 18.5 && imc < 25) {
        mensaje += "Tienes un peso normal.";
    } else {
        mensaje += "Tienes sobrepeso.";
    }
    document.getElementById("resultado").innerText = mensaje;
});
