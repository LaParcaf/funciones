// Usamos la variable global del index para poder detenerlo al cambiar de función
function updReloj() {
    let d = new Date();
    document.getElementById("resultado").innerHTML = `<p style="font-size:36px; font-family:monospace; font-weight:bold;">${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}</p>`;
}
updReloj();
window.relojInterval = setInterval(updReloj, 1000);