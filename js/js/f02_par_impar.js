document.getElementById("resultado").innerHTML = `
	<form class="input-form" id="formParImpar">
		<label for="numeroParImpar">Ingresa un número entero</label>
		<input id="numeroParImpar" name="numero" type="number" step="1" required>
		<button type="submit">Comprobar</button>
	</form>
	<p id="resultadoParImpar"></p>
`;

document.getElementById("formParImpar").addEventListener("submit", (event) => {
	event.preventDefault();
	const numero = Number(new FormData(event.currentTarget).get("numero"));
	const mensaje = numero % 2 === 0 ? `${numero} es PAR ✅` : `${numero} es IMPAR ❌`;
	document.getElementById("resultadoParImpar").textContent = mensaje;
});