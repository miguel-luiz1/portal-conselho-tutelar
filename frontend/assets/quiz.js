
// BANCO DE PERGUNTAS DO QUIZ

const questions = [

    {
        question: "O que significa a sigla ECA?",

        answers: [
            "Estatuto da Criança e do Adolescente",
            "Estatuto de Controle do Adolescente",
            "Escola de Cuidado e Aprendizagem",
            "Estatuto Comunitário de Assistência"
        ],

        correct: 0,

        explanation:
            "ECA significa Estatuto da Criança e do Adolescente, instituído pela Lei Federal nº 8.069, de 13 de julho de 1990."
    },

    {
        question: "Segundo o ECA, quem é considerado criança?",

        answers: [
            "Pessoa com até 10 anos completos",
            "Pessoa com até 12 anos incompletos",
            "Pessoa entre 12 e 16 anos",
            "Pessoa com até 14 anos completos"
        ],

        correct: 1,

        explanation:
            "De acordo com o artigo 2º do ECA, considera-se criança a pessoa até 12 anos de idade incompletos."
    },

    {
        question: "Qual é a principal finalidade do Conselho Tutelar?",

        answers: [
            "Aplicar penas criminais aos responsáveis",
            "Substituir o trabalho das escolas",
            "Zelar pelo cumprimento dos direitos da criança e do adolescente",
            "Realizar julgamentos judiciais"
        ],

        correct: 2,

        explanation:
            "Conforme o artigo 131 do ECA, o Conselho Tutelar é um órgão permanente e autônomo, não jurisdicional, encarregado de zelar pelo cumprimento dos direitos da criança e do adolescente."
    },

    {
        question: "Quem tem responsabilidade pela garantia dos direitos das crianças e adolescentes?",

        answers: [
            "Somente os pais",
            "Apenas o Conselho Tutelar",
            "Somente as escolas",
            "Família, sociedade e poder público"
        ],

        correct: 3,

        explanation:
            "O artigo 4º do ECA estabelece que é dever da família, da comunidade, da sociedade em geral e do poder público assegurar os direitos com absoluta prioridade."
    },

    {
        question: "Qual direito é garantido pelo ECA?",

        answers: [
            "Direito à educação, saúde, dignidade e convivência familiar",
            "Direito de trabalhar em qualquer atividade",
            "Direito de abandonar a escola",
            "Direito de não receber cuidados de saúde"
        ],

        correct: 0,

        explanation:
            "O ECA assegura diversos direitos fundamentais, incluindo educação, saúde, dignidade, respeito e convivência familiar e comunitária."
    },

    {
        question: "Em qual situação o Conselho Tutelar pode ser procurado?",

        answers: [
            "Para aplicar multas de trânsito",
            "Quando houver ameaça ou violação dos direitos de crianças e adolescentes",
            "Para resolver conflitos comerciais",
            "Para substituir o atendimento médico"
        ],

        correct: 1,

        explanation:
            "O Conselho Tutelar pode atuar quando os direitos de crianças e adolescentes estiverem ameaçados ou violados, observadas as atribuições previstas no ECA."
    },

    {
        question: "O ECA permite o trabalho de qualquer criança?",

        answers: [
            "Sim, desde que tenha autorização dos pais",
            "Sim, em qualquer atividade",
            "Não. O trabalho é proibido antes dos 16 anos, salvo na condição de aprendiz a partir dos 14 anos",
            "Sim, desde que seja durante as férias"
        ],

        correct: 2,

        explanation:
            "A Constituição Federal e o ECA protegem crianças e adolescentes contra o trabalho infantil. A idade mínima geral é de 16 anos, salvo aprendizagem a partir dos 14 anos, observadas as restrições legais."
    },

    {
        question: "O Conselho Tutelar é um órgão do Poder Judiciário?",

        answers: [
            "Sim, é um tribunal especializado",
            "Sim, é responsável por julgar processos",
            "Sim, substitui os juízes em casos envolvendo crianças",
            "Não. É um órgão permanente, autônomo e não jurisdicional"
        ],

        correct: 3,

        explanation:
            "O artigo 131 do ECA define o Conselho Tutelar como órgão permanente e autônomo, não jurisdicional. Ele não exerce a função de julgar processos judiciais."
    }

];


// ELEMENTOS DA PÁGINA

const questionCounter = document.getElementById("questionCounter");

const scoreCounter = document.getElementById("scoreCounter");

const progressBar = document.getElementById("progressBar");

const progressContainer = document.getElementById("progressContainer");

const questionText = document.getElementById("questionText");

const answersArea = document.getElementById("answersArea");

const feedback = document.getElementById("feedback");

const feedbackTitle = document.getElementById("feedbackTitle");

const feedbackText = document.getElementById("feedbackText");

const nextButton = document.getElementById("nextButton");

const questionArea = document.getElementById("questionArea");

const resultArea = document.getElementById("resultArea");

const resultTitle = document.getElementById("resultTitle");

const resultMessage = document.getElementById("resultMessage");

const finalScore = document.getElementById("finalScore");

const resultPercentage = document.getElementById("resultPercentage");

const restartButton = document.getElementById("restartButton");

const quizCard = document.getElementById("quizCard");


// VARIÁVEIS DO QUIZ

let currentQuestion = 0;

let score = 0;

let answered = false;


// MOSTRAR PERGUNTA

function showQuestion() {

    answered = false;

    const question = questions[currentQuestion];

    // Atualiza o contador

    questionCounter.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    scoreCounter.textContent =
        `Acertos: ${score}`;

    // Atualiza o progresso

    const progress = (currentQuestion / questions.length) * 100;

    progressBar.style.width = `${progress}%`;

    progressContainer.setAttribute(
        "aria-valuenow",
        currentQuestion
    );

    // Mostra o enunciado

    questionText.textContent = question.question;

    // Limpa as alternativas anteriores

    answersArea.innerHTML = "";

    // Esconde o feedback

    feedback.hidden = true;

    feedback.className = "feedback";

    nextButton.hidden = true;

    // Cria os botões das alternativas

    question.answers.forEach(function (answer, index) {

        const button = document.createElement("button");

        button.type = "button";

        button.className = "answer-button";

        button.textContent =
            `${String.fromCharCode(65 + index)}) ${answer}`;

        button.addEventListener("click", function () {

            checkAnswer(index, button);

        });

        answersArea.appendChild(button);

    });

}


// VERIFICAR RESPOSTA

function checkAnswer(selectedAnswer, selectedButton) {

    // Impede que o visitante responda duas vezes

    if (answered) {
        return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const buttons = answersArea.querySelectorAll(".answer-button");

    const isCorrect = selectedAnswer === question.correct;

    // Desabilita todas as alternativas

    buttons.forEach(function (button) {

        button.disabled = true;

    });

    // Verifica se acertou

    if (isCorrect) {

        score++;

        selectedButton.classList.add("correct");

        feedbackTitle.textContent = "Resposta correta!";

        feedback.classList.add("correct-feedback");

    } else {

        selectedButton.classList.add("incorrect");

        buttons[question.correct].classList.add("correct");

        feedbackTitle.textContent = "Resposta incorreta!";

        feedback.classList.add("incorrect-feedback");

    }

    // Atualiza a pontuação

    scoreCounter.textContent = `Acertos: ${score}`;

    // Mostra a explicação

    feedbackText.textContent = question.explanation;

    feedback.hidden = false;

    // Mostra o botão de próxima pergunta

    nextButton.hidden = false;

    // Altera o texto na última pergunta

    if (currentQuestion === questions.length - 1) {

        nextButton.textContent = "Ver resultado";

    } else {

        nextButton.textContent = "Próxima pergunta →";

    }

}


// PRÓXIMA PERGUNTA

nextButton.addEventListener("click", function () {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


// MOSTRAR RESULTADO FINAL

function showResult() {

    questionArea.hidden = true;

    resultArea.hidden = false;

    const percentage = Math.round(
        (score / questions.length) * 100
    );

    finalScore.textContent = score;

    resultPercentage.textContent =
        `Você acertou ${percentage}% das perguntas.`;

    progressBar.style.width = "100%";

    progressContainer.setAttribute(
        "aria-valuenow",
        questions.length
    );

    questionCounter.textContent = "Questionário concluído";

    scoreCounter.textContent =
        `Acertos: ${score}`;

    // Mensagens conforme o desempenho

    if (score === questions.length) {

        resultTitle.textContent = "Excelente!";

        resultMessage.textContent =
            "Parabéns! Você demonstrou ótimo conhecimento sobre o ECA e os direitos das crianças e adolescentes.";

    } else if (score >= 5) {

        resultTitle.textContent = "Muito bem!";

        resultMessage.textContent =
            "Você demonstrou um bom conhecimento. Continue aprendendo e compartilhando essas informações.";

    } else {

        resultTitle.textContent = "Continue aprendendo!";

        resultMessage.textContent =
            "Não desanime! Consulte nosso Guia Interativo do ECA e tente novamente para ampliar seus conhecimentos.";

    }

    quizCard.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


// REINICIAR QUIZ

restartButton.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;

    answered = false;

    questionArea.hidden = false;

    resultArea.hidden = true;

    nextButton.textContent = "Próxima pergunta →";

    showQuestion();

    quizCard.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});


// BOTÃO DE SAÍDA RÁPIDA

const quickExit = document.getElementById("quickExit");

if (quickExit) {

    quickExit.addEventListener("click", function () {

        window.location.replace("https://www.google.com/");

    });

}


// INICIAR O QUIZ

showQuestion();
