let dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
document.getElementById("resultado").innerHTML = `<p>Hoy es <strong>${dias[new Date().getDay()]}</strong> 📅</p>`;