function gerarCorAleatoria() {
    var letrasHex = "0123456789ABCDEF";
    var cor = "#";
    for (var i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
}

function trocarCor() {
    var novaCor = gerarCorAleatoria();
    document.body.style.backgroundColor = novaCor;

    var corAtualElement = document.getElementById('corHexa')
    corAtualElement.textContent = 'Cor atual: '+ novaCor
}

