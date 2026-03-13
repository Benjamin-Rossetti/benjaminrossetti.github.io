const Game = document.getElementById("Game");
const text = document.getElementById("text");

const texte = document.getElementById("texte");
const btn = document.getElementById("btn");

const backToTopBtn = document.getElementById("backToTop");

if (Game && text) {
    Game.addEventListener("click", () => {
        text.textContent = "Le jeu se lance";
    });
}

if (btn && texte) {
    btn.addEventListener("click", () => {
        texte.textContent = ":)";
    });
}

if (backToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add("show");
        } else {
            backToTopBtn.classList.remove("show");
        }
    });

    backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}