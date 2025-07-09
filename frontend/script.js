let carrinho = [];

document.querySelectorAll(".produto").forEach((produtoDiv) => {
    const botao = produtoDiv.querySelector("button");

    botao.addEventListener("click", () => {
        const nome = produtoDiv.querySelector("h2").textContent;
        const preco = produtoDiv.querySelector("strong").textContent;
        
        const produto = {
            nome,
            preco
        };

        carrinho.push(produto);
        atualizarCarrinho();
        
        function atualizarCarrinho() {
            const lista = document.getElementById("lista-carrinho");
            lista.innerHTML = "";

            carrinho.forEach((item) => {
                const li = document.createElement("li");
                li.textContent = `${item.nome} - ${item.preco}`;
                lista.appendChild(li);
            });
        }
    });
});