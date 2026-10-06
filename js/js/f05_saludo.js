document.getElementById("resultado").innerHTML = `
	<form class="input-form" id="formSaludo">
		<label for="nombreSaludo">Tu nombre</label>
		<input id="nombreSaludo" name="nombre" type="text" maxlength="60" required>
		<button type="submit">Saludar</button>
	</form>
	<p id="resultadoSaludo"></p>
`;

document.getElementById("formSaludo").addEventListener("submit", (event) => {
	event.preventDefault();
	const nombre = new FormData(event.currentTarget).get("nombre").toString().trim();
	const hora = new Date().getHours();
	const saludo = hora < 12 ? "Buenos días" : hora < 18 ? "Buenas tardes" : "Buenas noches";
	document.getElementById("resultadoSaludo").textContent = `${saludo}, ${nombre} 👋`;
});