
// SELECIONA TODOS OS CARDS DO GUIA

const cards = document.querySelectorAll(".eca-card");

// PERCORRE CADA CARD

cards.forEach(function (card) {

    const button = card.querySelector(".card-button");
    const details = card.querySelector(".card-details");
    const symbol = button.querySelector("span");

    // ADICIONA O EVENTO DE CLIQUE

    button.addEventListener("click", function () {

        // VERIFICA SE O CARD ESTÁ ABERTO

        const isExpanded =
            button.getAttribute("aria-expanded") === "true";

        // INVERTE O ESTADO DO CARD

        button.setAttribute(
            "aria-expanded",
            String(!isExpanded)
        );

        // MOSTRA OU ESCONDE AS INFORMAÇÕES

        details.hidden = isExpanded;

        // ALTERA O TEXTO DO BOTÃO

        if (isExpanded) {

            button.firstChild.textContent = "Saiba mais ";

            symbol.textContent = "＋";

        } else {

            button.firstChild.textContent = "Mostrar menos ";

            symbol.textContent = "−";

        }

    });

});

// BOTÃO DE SAÍDA RÁPIDA

const quickExit = document.getElementById("quickExit");

if (quickExit) {

    quickExit.addEventListener("click", function () {

        window.location.replace("https://www.google.com/");

    });

}
