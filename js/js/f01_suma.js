document.getElementById("resultado").innerHTML = `
	<form class="input-form" id="formSuma">
		<label for="numero1">Primer número</label>
		<input id="numero1" name="numero1" type="number" step="any" required>
		<label for="numero2">Segundo número</label>
		<input id="numero2" name="numero2" type="number" step="any" required>
		<button type="submit">Sumar</button>
	</form>
	<p id="resultadoSuma"></p>
`;

document.getElementById("formSuma").addEventListener("submit", (event) => {
	event.preventDefault();
	const datos = new FormData(event.currentTarget);
	const numero1 = Number(datos.get("numero1"));
	const numero2 = Number(datos.get("numero2"));
	document.getElementById("resultadoSuma").innerHTML =
		`${numero1} + ${numero2} = <strong>${numero1 + numero2}</strong>`;
});