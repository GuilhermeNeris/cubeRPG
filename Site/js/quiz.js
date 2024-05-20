const questions = [
    {
        question: "O que significa RPG?",
        options: ["Role Playing Game", "Role Playing", "Game Playing Role", "Role Game"],
        answer: "Role Playing Game"
    },
    {
        question: "Quem conduz a história em um RPG?",
        options: ["O Jogador", "O Mestre", "Os Monstros", "O vilão"],
        answer: "O Mestre"
    },
    {
        question: "O que os dados são usados para fazer em um RPG?",
        options: ["todas as alternativas estão corretas", "determinar se você recebeu dano", "determinar a força de um ataque", "determinar resultados aleatórios"],
        answer: "todas as alternativas estão corretas"
    },
    {
        question: "Qual desses não é uma classe de RPG?",
        options: ["Guerreiro", "Mago", "Bárbaro", "Elfo"],
        answer: "Elfo"
    },
    {
        question: "O que os jogadores fazem em um RPG?",
        options: ["Assistem aos NPCs", "Escrevem a história", "Interpretam personagens", "Assistem ao mestre do jogo"],
        answer: "Interpretam personagens"
    },
    {
        question: "O que é um inventário em um RPG?",
        options: ["Lista de encontros", "Ferramentas do mestre de jogo", "Lista de personagens jogáveis", "Itens e equipamentos do personagem"],
        answer: "Itens e equipamentos do personagem"
    },
    {
        question: "O que são classes e raças em um RPG?",
        options: ["Locais de encontro", "Tipos de dados", "Categorias de personagens", "Métodos de batalha"],
        answer: "Categorias de personagens"
    },
    {
        question: "Qual destes não é um elemento básico de um personagem de RPG?",
        options: ["Raça", "Classe", "Habilidade", "Tecnologia"],
        answer: "Tecnologia"
    },
    {
        question: "Em um RPG, o que é XP?",
        options: ["Expertise Points", "Extra Power", "Experience Points", "Excellent Performance"],
        answer: "Experience Points"
    },
    {
        question: "O que significa NPC em um RPG?",
        options: ["Novo Personagem Criado", "Nenhum Poder de Combate", "Non-Player Character", "Novo Poder de Cura"],
        answer: "Non-Player Character"
    }


];

var currentQuestionIndex = 0;
var score = 0;

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(function(option, index) {
        var button = document.createElement("button");
        button.textContent = option;
        button.onclick = function() {
            checkAnswer(option);
        };
        optionsElement.appendChild(button);
    });
}


function checkAnswer(selectedOption) {
    var currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
        score++;
        alert("Resposta correta!");
    } else {
        alert("Resposta incorreta. A resposta correta é: " + currentQuestion.answer);
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        alert("Quiz finalizado. Sua pontuação é: " + score + "/" + questions.length);
    }

}

displayQuestion();