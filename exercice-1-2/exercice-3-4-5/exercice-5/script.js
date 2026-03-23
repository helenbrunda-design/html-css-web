const questionsTab = [
  {
    question: "Quel est le résultat de 2 + 2 ?",
    propositions: [3, 4, 5],
    reponse: 4,
  },
  {
    question: "Quelle est la capitale de la France ?",
    propositions: ["Londres", "Paris", "Berlin"],
    reponse: "Paris",
  },
  {
    question: "Quel est le symbole chimique de l'eau ?",
    propositions: ["H2O", "CO2", "NaCl"],
    reponse: "H2O",
  },
  {
    question: "Combien de planètes dans le système solaire ?",
    propositions: [7, 8, 9],
    reponse: 8,
  },
  {
    question: "Qui a peint la Mona Lisa ?",
    propositions: ["Van Gogh", "Picasso", "Léonard de Vinci"],
    reponse: "Léonard de Vinci",
  },
];

const mainContainer = document.querySelector(".questions-container");

let currentQuestion = 0;

const nextQuestion = () => {
  if (currentQuestion > questionsTab.length) {
    alert("Vous avez répondu à toutes les questions.");
    return;
  }

  generateQuestion(questionsTab[currentQuestion]);
};

const generateQuestion = (question) => {
  question.isAnswered = false;

  const { question: questionLabel, propositions, reponse } = question;

  const questionContainer = document.createElement("article");

  const questionTitle = document.createElement("p");
  questionTitle.textContent = questionLabel;

  const questionAnswersTitle = document.createElement("p");
  questionAnswersTitle.textContent = "Réponses possibles :";

  const questionAnswersContainer = document.createElement("ol");

  const resultMessage = document.createElement("p");

  const answerButtons = [];

  propositions.forEach((proposition) => {
    const questionAnswerItem = document.createElement("li");
    const questionAnswerButton = document.createElement("button");

    answerButtons.push(questionAnswerButton);

    questionAnswerButton.textContent = proposition;

    questionAnswerItem.appendChild(questionAnswerButton);
    questionAnswersContainer.appendChild(questionAnswerItem);
  });

  questionContainer.appendChild(questionTitle);
  questionContainer.appendChild(questionAnswersTitle);
  questionContainer.appendChild(questionAnswersContainer);
  questionContainer.appendChild(resultMessage);

  answerButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const value = event.target.textContent;

      if (!question.isAnswered) {
        if (value != reponse) {
          resultMessage.classList.add("error");
          resultMessage.textContent = "Mauvaise réponse...";
        } else {
          resultMessage.classList.add("success");
          resultMessage.textContent = "Bonne réponse !";
        }

        answerButtons.forEach((button) => {
          button.classList.add("disabled");
          button.setAttribute("disabled", true);
        });

        question.isAnswered = true;
        setTimeout(() => {
          questionContainer.remove();
          currentQuestion++;
          nextQuestion();
        }, 2500);
      }
    });
  });

  mainContainer.appendChild(questionContainer);
};

nextQuestion();