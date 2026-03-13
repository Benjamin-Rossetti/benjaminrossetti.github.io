const Game = document.getElementById("Game");
const text = document.getElementById("text");

const texte = document.getElementById("texte");
const btn = document.getElementById("btn");

Game.addEventListener("click", () => {
    text.textContent = "Le jeu se lance";
});

btn.addEventListener("click", () => {
    texte.textContent = ":)";
});