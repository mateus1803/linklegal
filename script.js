const motivos = [
    { text: "Motivo 1: Vou rir de qualquer coisa que fizer ou disser!", image: "img/bdia.jpg" },
    { text: "Motivo 2: Eu sei dançar e podemos nos divertir muito!", image: "img/mano.jpg" },
    { text: "Motivo 3: Tenho as melhores histórias para contar!", image: "img/domigo.png" },
    { text: "Motivo 4: Adoro fazer surpresas especiais!", image: "img/romantico.png" },
    { text: "Motivo 5: A noite será inesquecível ao seu lado!", image: "img/alicmg.png", link: "https://music.youtube.com/watch?v=70e44gsZIjM&si=C_UXMEAmrStXw-9m&t=72" },
    { text: "MOTIVO 6: Compartilhe com 5 pessoas e não quebre a corrente!", image: "img/corrente.png" }
];  

let currentIndex = 0;

document.getElementById("next-btn").addEventListener("click", () => {
    currentIndex++;
    if (currentIndex >= motivos.length) {
        currentIndex = 0; // Volta para o início se chegar ao final
    }
    updateContent();
});

document.getElementById("prev-btn").addEventListener("click", () => {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = motivos.length - 1; // Vai para o último se estiver no início
    }
    updateContent();
});

function updateContent() {
    const motivoText = document.getElementById("motivo-text");
    const motivoImg = document.getElementById("motivo-img");
    const linkButton = document.getElementById("link-btn");

    motivoText.textContent = motivos[currentIndex].text;
    motivoImg.src = motivos[currentIndex].image;

    // Verifica se é o Motivo 5 para exibir o botão com link
    if (motivos[currentIndex].link) {
        linkButton.style.display = "inline-block";
        linkButton.href = motivos[currentIndex].link; // Define o link
    } else {
        linkButton.style.display = "none";
    }
}
