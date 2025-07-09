document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const lista = document.getElementById("lista-carrinho");
    const totalDiv = document.getElementById("total-carrinho");

    let total = 0;

    carrinho.forEach((item, index) => {
        const div = document.createElement("div");
        div.className = "item-carrinho";
        div.innerHTML = `<strong>${item.nome}</strong> - R$ ${item.preco.toFixed(2)}</br>
        <button data-index="${index}" class="remover">Remover</button> <hr>`;
        lista.appendChild(div);
        total += item.preco;
    });

    totalDiv.textContent = `Total: R$ ${total.toFixed(2)}`;

    document.querySelectorAll(".remover").forEach(btn => {
        btn.addEventListener("click", () => {
            const index = btn.dataset.index;
            carrinho.splice(index, 1);
            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            location.reload();
        });
    });

    document.getElementById("finalizar").addEventListener("click", () => {
        alert("Compra Finalizada!");
        localStorage.removeItem("carrinho");
        location.reload();
    });
});