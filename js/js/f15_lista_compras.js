let lista = JSON.parse(localStorage.getItem('miLista')) || [];

function renderLista() {
    localStorage.setItem('miLista', JSON.stringify(lista));
    let htmlL = lista.map((it, ix) => `<li>${it} <button onclick="delItem(${ix})">✕</button></li>`).join("");
    document.getElementById("resultado").innerHTML = `
        <div style="display:flex; width:100%;">
            <input type="text" id="inpLista" placeholder="Nuevo item..." onkeypress="if(event.key==='Enter') addItem()">
            <button onclick="addItem()">+</button>
        </div>
        <ul id="ulLista">${htmlL}</ul>`;
}

window.addItem = function() {
    let inp = document.getElementById("inpLista");
    if(inp.value.trim()) { lista.push(inp.value.trim()); renderLista(); }
};

window.delItem = function(i) {
    lista.splice(i, 1); renderLista();
};

renderLista();