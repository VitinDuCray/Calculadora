let ligado = true;
let resultadoMostrado = false;

function ToggleLigado() {
    ligado = !ligado;

    const visor = document.getElementById("visor");
    const botaoLigar = document.getElementById("botao-ligar");

    const botoes = document.querySelectorAll("#calculadora button:not(#botao-ligar)");

    if (ligado) {
        visor.innerText = "0";
        botoes.forEach(btn => btn.disabled = false);
    } else {
        visor.innerText = "";
        botoes.forEach(btn => btn.disabled = true);
        botaoLigar.disabled = false;
    }

    resultadoMostrado = false;
}


function AdicionarNumero(valor) {
    const visor = document.getElementById("visor");

    if (resultadoMostrado || visor.innerText === "0") {
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
    visor.innerText = "0";
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

function toggleTheme() {
  const html = document.documentElement;
  html.classList.toggle('light-theme');

  const isLight = html.classList.contains('light-theme');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    document.documentElement.classList.add('light-theme');
  }
});

function mostrarOverlay() {
  document.getElementById('overlay').style.display = 'flex';
}

function fecharOverlay() {
  document.getElementById('overlay').style.display = 'none';
}