document.getElementById("resultado").innerHTML = `
	<form class="input-form" id="formTemperatura">
		<label for="celsius">Temperatura en °C</label>
		<input id="celsius" name="celsius" type="number" step="any" required>
		<button type="submit">Convertir</button>
	</form>
	<p id="resultadoTemperatura"></p>
`;

document.getElementById("formTemperatura").addEventListener("submit", (event) => {
	event.preventDefault();
	const celsius = Number(new FormData(event.currentTarget).get("celsius"));
	const fahrenheit = (celsius * 9 / 5) + 32;
	document.getElementById("resultadoTemperatura").innerHTML =
		`${celsius}°C = <strong>${fahrenheit.toFixed(1)}°F</strong>`;
});