document.getElementById("resultado").innerHTML = `
	<form class="input-form" id="formTabla">
		<label for="numeroTabla">Número para la tabla</label>
		<input id="numeroTabla" name="numero" type="number" step="1" required>
		<button type="submit">Generar tabla</button>
	</form>
	<div id="resultadoTabla"></div>
`;

document.getElementById("formTabla").addEventListener("submit", (event) => {
	event.preventDefault();
	const numero = Number(new FormData(event.currentTarget).get("numero"));
	const filas = Array.from({ length: 10 }, (_, indice) =>
		`<p>${numero} x ${indice + 1} = ${numero * (indice + 1)}</p>`
	).join("");
	document.getElementById("resultadoTabla").innerHTML = filas;
});