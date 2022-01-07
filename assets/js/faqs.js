var Faqs = [
  {
    id: 1,
    question: "How to contact with riders emergency?",
    answers:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
  {
    id: 2,
    question: "App installation failed, how to update system information?",
    answers:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
  {
    id: 3,
    question: "Website reponse taking time, how to improve?",
    answers:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
  {
    id: 4,
    question: "New update fixed all bug and issues",
    answers:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
  {
    id: 5,
    question: "How to contact with riders emergency?",
    answers:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
  },
];

var newQuestions = Faqs.map((Faq) => {
  return `
      <div class="question-item">
          <div class="question-heading question-heading${Faq.id}">
              <h3 class="">${Faq.question}</h3>
              <div class="minus-plus">
                  <i class="fas fa-plus faq-plus"></i>
                  <i class="fas fa-minus faq-minus"></i>
              </div>
          </div>
          <div class="answers active" id="answer${Faq.id}">
              <span>${Faq.answers}</span>
          </div>
      </div>
      `;
});

document.getElementById("Faqs-body").innerHTML = newQuestions.join("");

const questions1 = document.querySelector(".question-heading1");
const questions2 = document.querySelector(".question-heading2");
const questions3 = document.querySelector(".question-heading3");
const questions4 = document.querySelector(".question-heading4");
const questions5 = document.querySelector(".question-heading5");
const answers1 = document.querySelector("#answer1");
const answers2 = document.querySelector("#answer2");
const answers3 = document.querySelector("#answer3");
const answers4 = document.querySelector("#answer4");
const answers5 = document.querySelector("#answer5");
const questionClick = document.querySelectorAll(".question-heading");
const answerOpen = document.querySelectorAll(".answer");
const minus = document.querySelectorAll(".faq-minus");
const plus = document.querySelectorAll(".faq-plus");

function openAnswer1() {
  if (answers1.style.display !== "block") {
    answers1.style.display = "block";
  } else {
    answers1.style.display = "none ";
  }
  answers4.style.display = "none";
  answers3.style.display = "none";
  answers2.style.display = "none";
  answers5.style.display = "none";
}

function openAnswer2() {
  if (answers2.style.display !== "block") {
    answers2.style.display = "block";
  } else {
    answers2.style.display = "none ";
  }

  answers4.style.display = "none";
  answers3.style.display = "none";
  answers5.style.display = "none";
  answers1.style.display = "none";
}

function openAnswer3() {
  if (answers3.style.display !== "block") {
    answers3.style.display = "block";
  } else {
    answers3.style.display = "none ";
  }
  answers4.style.display = "none";
  answers5.style.display = "none";
  answers2.style.display = "none";
  answers1.style.display = "none";
}

function openAnswer4() {
  if (answers4.style.display !== "block") {
    answers4.style.display = "block";
  } else {
    answers4.style.display = "none ";
  }
  answers5.style.display = "none";
  answers3.style.display = "none";
  answers2.style.display = "none";
  answers1.style.display = "none";
}

function openAnswer5() {
  if (answers5.style.display !== "block") {
    answers5.style.display = "block";
  } else {
    answers5.style.display = "none ";
  }
  answers4.style.display = "none";
  answers3.style.display = "none";
  answers2.style.display = "none";
  answers1.style.display = "none";
}

questions1.addEventListener("click", openAnswer1);
questions2.addEventListener("click", openAnswer2);
questions3.addEventListener("click", openAnswer3);
questions4.addEventListener("click", openAnswer4);
questions5.addEventListener("click", openAnswer5);
