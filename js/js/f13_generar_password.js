let ch = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%&*";
document.getElementById("resultado").innerHTML = `
	<p>Contraseña generada:</p>
	<p style="font-size:22px; letter-spacing:2px;"><strong id="passwordGenerada"></strong></p>
	<button id="nuevaPassword" type="button">Cambiar contraseña</button>
	<button id="copiarPassword" type="button">Copiar</button>
	<p id="estadoCopia" aria-live="polite"></p>
`;

let pass = "";
const passwordGenerada = document.getElementById("passwordGenerada");
const estadoCopia = document.getElementById("estadoCopia");

function generarPassword() {
	pass = "";
	for (let i = 0; i < 12; i++) pass += ch.charAt(Math.floor(Math.random() * ch.length));
	passwordGenerada.textContent = pass;
	estadoCopia.textContent = "";
}

document.getElementById("nuevaPassword").addEventListener("click", generarPassword);
document.getElementById("copiarPassword").addEventListener("click", async () => {
	try {
		await navigator.clipboard.writeText(pass);
		estadoCopia.textContent = "Copiada al portapapeles.";
	} catch {
		estadoCopia.textContent = "No se pudo copiar; selecciona la contraseña para copiarla manualmente.";
	}
});

generarPassword();