const opciones = ["piedra", "papel", "tijera"];
const etiquetas = { piedra: "🪨 Piedra", papel: "📄 Papel", tijera: "✂️ Tijera" };

document.getElementById("resultado").innerHTML = `
    <form class="input-form" id="formPiedraPapelTijera">
        <label for="jugada">Elige tu jugada</label>
        <select id="jugada" name="jugada" required>
            <option value="" selected disabled>Selecciona una opción</option>
            <option value="piedra">🪨 Piedra</option>
            <option value="papel">📄 Papel</option>
            <option value="tijera">✂️ Tijera</option>
        </select>
        <button type="submit">Jugar</button>
    </form>
    <div id="resultadoJuego"></div>
`;

document.getElementById("formPiedraPapelTijera").addEventListener("submit", (event) => {
    event.preventDefault();
    const jugada = new FormData(event.currentTarget).get("jugada");
    const computadora = opciones[Math.floor(Math.random() * opciones.length)];
    const empate = jugada === computadora;
    const gana = (jugada === "piedra" && computadora === "tijera") ||
        (jugada === "papel" && computadora === "piedra") ||
        (jugada === "tijera" && computadora === "papel");
    const mensaje = empate ? "Empate 🤝" : gana ? "Ganaste ✅" : "Perdiste";
    document.getElementById("resultadoJuego").innerHTML =
        `<p>Tú: ${etiquetas[jugada]} | PC: ${etiquetas[computadora]}</p><p><strong>${mensaje}</strong></p>`;
});