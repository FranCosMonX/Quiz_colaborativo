const questao = document.querySelector(".questao");
const respostas = document.querySelector(".respostas");

const quantidades = document.querySelector(".quantidade");
const textoFinal = document.querySelector(".fim span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".fim");
const btnRestart = document.querySelector(".fim button");

import questoes from "./questao.js";

let currentIndex = 0;
let questoesCorrectas = 0;

btnRestart.onclick = () => {
  content.style.display = "";
  contentFinish.style.display = "none";
  currentIndex = 0;
  questoesCorrectas = 0;
  carregarQuestao();
};

function proximaQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questoesCorrectas++;
  }

  if (currentIndex < questoes.length - 1) {
    currentIndex++;
    carregarQuestao();
  } else {
    fim();
  }
}

function fim() {
  textoFinal.innerHTML = `você acertou ${questoesCorrectas} de ${questoes.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
  
  
}

function carregarQuestao() {
  
  quantidades.innerHTML = `${currentIndex + 1}/${questoes.length}`;
  const item = questoes[currentIndex];
  respostas.innerHTML = "";
  questao.innerHTML = item.questao;

  item.respostas.forEach((resposta) => {
    const div = document.createElement("div");

    div.innerHTML = `<button class="resposta" data-correct="${resposta.correct}">
      ${resposta.option}
    </button>
    `;

    respostas.appendChild(div);
  });

  document.querySelectorAll(".resposta").forEach((item) => {
    item.addEventListener("click", proximaQuestion);
  });
}

carregarQuestao();
