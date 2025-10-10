let ligado = true;
let resultadoMostrado = false;

function ToggleLigado() {
    ligado = !ligado;

    const visor = document.getElementById("visor");
    const botaoLigar = document.getElementById("botao-ligar");

    // Seleciona todos os botões, exceto o de ligar/desligar
    const botoes = document.querySelectorAll("button:not(#botao-ligar)");

    if (ligado) {
        visor.innerText = "";
        botoes.forEach(btn => btn.disabled = false);
        botaoLigar.innerText = "OFF"; // botão agora desliga
    } else {
        visor.innerText = "";
        botoes.forEach(btn => btn.disabled = true);
        botaoLigar.disabled = false; // mantém botão de ligar funcionando
        botaoLigar.innerText = "ON"; // botão agora liga
    }

    resultadoMostrado = false;
}

function AdicionarNumero(valor) {
    const visor = document.getElementById("visor");

    if (resultadoMostrado) {
        visor.innerText = "";
        resultadoMostrado = false;
    }

    visor.innerText += valor;
}

function CalcularResultado() {
    const visor = document.getElementById("visor");
    try {
        const expressao = visor.innerText;
        const resultado = eval(expressao);
        visor.innerText = resultado;
        resultadoMostrado = true;
    } catch (erro) {
        visor.innerText = "Erro";
        resultadoMostrado = true;
    }
}

function LimparVisor() {
    const visor = document.getElementById("visor");
    visor.innerText = "";
    resultadoMostrado = false;
}

function ApagarUltimo() {
    const visor = document.getElementById("visor");

    if (resultadoMostrado) {
        visor.innerText = "";
        resultadoMostrado = false;
    } else {
        visor.innerText = visor.innerText.slice(0, -1);
    }
}
