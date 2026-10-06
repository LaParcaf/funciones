document.getElementById("resultado").innerHTML = `
	<form class="input-form" id="formPropina">
		<label for="montoCuenta">Monto de la cuenta</label>
		<input id="montoCuenta" name="cuenta" type="number" min="0" step="any" required>
		<label for="porcentajePropina">Porcentaje de propina</label>
		<input id="porcentajePropina" name="porcentaje" type="number" min="0" step="any" required>
		<button type="submit">Calcular</button>
	</form>
	<div id="resultadoPropina"></div>
`;

document.getElementById("formPropina").addEventListener("submit", (event) => {
	event.preventDefault();
	const datos = new FormData(event.currentTarget);
	const cuenta = Number(datos.get("cuenta"));
	const porcentaje = Number(datos.get("porcentaje"));
	const propina = cuenta * porcentaje / 100;
	const total = cuenta + propina;
	document.getElementById("resultadoPropina").innerHTML =
		`<p>Cuenta: $${cuenta.toFixed(2)} | Propina: $${propina.toFixed(2)}</p><p>Total: <strong>$${total.toFixed(2)}</strong> 💰</p>`;
});