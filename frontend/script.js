document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const sidebar = document.getElementById("sidebar");

    menuBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
    });

    const botoes = document.querySelectorAll(".add-carrinho");

    botoes.forEach(botao => {
        botao.addEventListener("click", () => {
            const nome = botao.dataset.nome;
            const preco = parseFloat(botao.dataset.preco);

            const carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
            carrinho.push({nome, preco});

            localStorage.setItem("carrinho", JSON.stringify(carrinho));
            alert(`"${nome}" Adicionado ao carrinho!`);
        });
    });
});

