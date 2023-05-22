var body = document.getElementById("body");
var img = document.getElementById("img");
var isMoon = false;

document.getElementById("botao-alterar-tema").addEventListener("click", function() {
    alterarTema();
    alterarImagem("img", "./src/imagens/moon.png");
});

function alterarTema(){
    body.classList.toggle("modo-escuro")
}

function alterarImagem(){
    if (isMoon) {
        img.src = "./src/imagens/sun.png";
        isMoon = false;
    } else {
        img.src = "./src/imagens/moon.png";
        isMoon = true;
    }
}