let resultadoMostrado = false; // flag de controle

function AdicionarNumero(valor) {
    const visor = document.getElementById("visor");

    // Se o último resultado foi mostrado, limpe o visor antes de adicionar
    if (resultadoMostrado) {
        visor.innerText = "";
        resultadoMostrado = false; // resetar a flag
    }

    visor.innerText += valor;
}

function CalcularResultado() {
    const visor = document.getElementById("visor");
    try {
        const expressao = visor.innerText;
        const resultado = eval(expressao);
        visor.innerText = resultado;
        resultadoMostrado = true; // define que o resultado foi mostrado
    } catch (erro) {
        visor.innerText = "Erro";
        resultadoMostrado = true;
    }
}