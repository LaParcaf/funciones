let count = 0;
function renderContador() {
    document.getElementById("resultado").innerHTML = `
        <p style="font-size:40px; font-weight:bold; margin:10px 0;">${count}</p>
        <button data-action="decrement">-</button>
        <button data-action="reset">Reset</button>
        <button data-action="increment">+</button>
    `;
    document.querySelector('[data-action="decrement"]').addEventListener("click", () => {
        count--;
        renderContador();
    });
    document.querySelector('[data-action="reset"]').addEventListener("click", () => {
        count = 0;
        renderContador();
    });
    document.querySelector('[data-action="increment"]').addEventListener("click", () => {
        count++;
        renderContador();
    });
}
renderContador();