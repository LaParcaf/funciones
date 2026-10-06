document.getElementById("resultado").innerHTML = `
	<form class="input-form" id="formEdad">
		<label for="edad">¿Cuántos años tienes?</label>
		<input id="edad" name="edad" type="number" min="0" max="130" step="1" required>
		<button type="submit">Comprobar</button>
	</form>
	<p id="resultadoEdad"></p>
`;

document.getElementById("formEdad").addEventListener("submit", (event) => {
	event.preventDefault();
	const edad = Number(new FormData(event.currentTarget).get("edad"));
	document.getElementById("resultadoEdad").textContent =
		edad >= 18 ? "✅ Eres mayor de edad" : "❌ Eres menor de edad";
});