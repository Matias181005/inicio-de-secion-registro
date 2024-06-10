function calcularEdadFormula() {
    const edadHumana = parseInt(prompt("Ingresa la edad de tu mascota en años:"));
    if (!isNaN(edadHumana)) {
        const edadPerroFormula = calcularEdadPerroFormula(edadHumana);
        document.getElementById("resultado").innerText = "Edad calculada por fórmula: " + edadPerroFormula;
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

function calcularEdadRegla() {
    const edadHumana = parseInt(prompt("Ingresa la edad de tu mascota en años:"));
    if (!isNaN(edadHumana)) {
        const edadPerroRegla = calcularEdadPerroRegla(edadHumana);
        document.getElementById("resultado").innerText = "Edad calculada por regla de los 7 años: " + edadPerroRegla;
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}

function calcularEdadPerroFormula(edadHumana) {
    if (edadHumana === 1) {
        return 15;
    } else if (edadHumana === 2) {
        return 24;
    } else {
        return 24 + (edadHumana - 2) * 4;
    }
}

function calcularEdadPerroRegla(edadHumana) {
    return edadHumana * 7;
}
