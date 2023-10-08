function encontrarMayor() {
    // Obtener los valores de los tres números ingresados por el usuario
    const num1 = parseInt(document.getElementById("numero1").value);
    const num2 = parseInt(document.getElementById("numero2").value);
    const num3 = parseInt(document.getElementById("numero3").value);

    // Encontrar el número mayor usando operadores condicionales
    let mayor = num1;
    if (num2 > mayor) {
        mayor = num2;
    }
    if (num3 > mayor) {
        mayor = num3;
    }

    // Mostrar el resultado en la página
    document.getElementById("resultado").textContent = mayor;
}
