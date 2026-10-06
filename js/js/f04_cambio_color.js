const colores = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff"];
let idx = 0;
document.getElementById("resultado").innerHTML = '<button id="cambiarColor">Cambiar Color 🎨</button>';
document.getElementById("cambiarColor").addEventListener("click", () => {
    document.body.style.backgroundColor = colores[idx++ % colores.length];
});