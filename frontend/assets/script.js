
// MENU RESPONSIVO

const menuToggle = document.getElementById("menuToggle");
const navigation = document.getElementById("navigation");

menuToggle.addEventListener("click", function () {

    navigation.classList.toggle("active");

    const menuAberto = navigation.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", menuAberto);

    menuToggle.setAttribute(
        "aria-label",
        menuAberto ? "Fechar menu" : "Abrir menu"
    );

    menuToggle.textContent = menuAberto ? "✕" : "☰";

});

// FECHAR MENU AO CLICAR EM UM LINK

const navigationLinks = document.querySelectorAll(".navigation a");

navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navigation.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

        menuToggle.setAttribute("aria-label", "Abrir menu");

        menuToggle.textContent = "☰";

    });

});

// BOTÃO DE SAÍDA RÁPIDA

const quickExit = document.getElementById("quickExit");

quickExit.addEventListener("click", function () {

    window.location.replace("https://www.google.com/");

});
