let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

document.getElementById("resultado").innerHTML = `
    <form class="input-form" id="formAdivina">
        <label for="numeroAdivina">Adivina un número del 1 al 100</label>
        <input id="numeroAdivina" name="numero" type="number" min="1" max="100" step="1" required>
        <button type="submit">Adivinar</button>
        <button id="reiniciarAdivina" type="button" hidden>Jugar de nuevo</button>
    </form>
    <p id="resultadoAdivina" aria-live="polite"></p>
`;

const formulario = document.getElementById("formAdivina");
const campoNumero = document.getElementById("numeroAdivina");
const resultado = document.getElementById("resultadoAdivina");
const botonAdivinar = formulario.querySelector('button[type="submit"]');
const botonReiniciar = document.getElementById("reiniciarAdivina");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    const intento = Number(campoNumero.value);
    intentos++;

    if (intento === numeroSecreto) {
        resultado.textContent = `🎉 ¡Correcto en ${intentos} intentos!`;
        campoNumero.disabled = true;
        botonAdivinar.disabled = true;
        botonReiniciar.hidden = false;
    } else {
        resultado.textContent = intento < numeroSecreto ? "Prueba con un número más alto." : "Prueba con un número más bajo.";
        campoNumero.value = "";
        campoNumero.focus();
    }
});

botonReiniciar.addEventListener("click", () => {
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    formulario.reset();
    campoNumero.disabled = false;
    botonAdivinar.disabled = false;
    botonReiniciar.hidden = true;
    resultado.textContent = "";
    campoNumero.focus();
});