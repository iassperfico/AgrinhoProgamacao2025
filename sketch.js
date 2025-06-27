function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let perguntas = [

  {

    texto: "A sede do município, formada por casas, ruas, prédios, praças,\né classificada como CIDADE?",

    respostaCorreta: "Verdadeiro"

  },

  {

    texto: "O campo e a cidade são espaços isolados um do outro,\nnão existindo relação entre as atividades desenvolvidas nos dois espaços.",

    respostaCorreta: "Falso"

  },

  {

    texto: "Agropecuária é a reunião das atividades de agricultura e pecuária\nque são realizadas na cidade.",

    respostaCorreta: "Falso"

  },

  {

    texto: "Extrativismo consiste em extrair (coletar) produtos da natureza\npara serem comercializados ou industrializados.",

    respostaCorreta: "Verdadeiro"

  }

];

let perguntaAtual = 0;

let resultado = "";

let botaoVerdadeiro, botaoFalso;

function setup() {

  createCanvas(800, 400);

  textSize(18);

  textAlign(CENTER, CENTER);

  botaoVerdadeiro = createButton('Verdadeiro');

  botaoVerdadeiro.position(width / 2 - 120, 300);

  botaoVerdadeiro.mousePressed(() => verificarResposta("Verdadeiro"));

  botaoFalso = createButton('Falso');

  botaoFalso.position(width / 2 + 40, 300);

  botaoFalso.mousePressed(() => verificarResposta("Falso"));

}

function draw() {

  background(220);

  fill(0);

  text("Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length, width / 2, 50);

  text(perguntas[perguntaAtual].texto, width / 2, 150);

  fill(resultado === "Correto!" ? "green" : "red");

  text(resultado, width / 2, 220);

}

function verificarResposta(respostaUsuario) {

  let correta = perguntas[perguntaAtual].respostaCorreta;

  if (respostaUsuario === correta) {

    resultado = "Correto!";

  } else {

    resultado = "Errado!";

  }

  setTimeout(() => {

    resultado = "";

    perguntaAtual++;

    if (perguntaAtual >= perguntas.length) {

      perguntaAtual = 0;

    }

  }, 1500);

}