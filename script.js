const dmode = document.querySelector(".dmode");

dmode.addEventListener("click", () => {
  document.getElementsByTagName("body")[0].classList.toggle("dmode");
});

const questions = [
  {
    question: "Q1 : Which is the best Programming Language in the world ?",
    a: "C++",
    b: "JavaScript",
    c: "Python",
    d: "JAVA",
    ans: "ans2",
  },
  {
    question: "Q2 : CSS stands for - ",
    a: "Customize Style Sheet",
    b: "Casting Style Sheet",
    c: "Cascading Super Shhet",
    d: "Cascading Style Sheet",
    ans: "ans4",
  },
  {
    question: "Q3 : Android is based on which language ?",
    a: "JAVA",
    b: "C#",
    c: "PHP",
    d: "Ruby",
    ans: "ans1",
  },
  {
    question: "What is the full form of HTTP ?",
    a: "Hypertext Transform Protocol",
    b: "Hypertest Transfer Protocol",
    c: "Hypertext Transfer Protocol",
    d: "Hypertext Transfer Product",
    ans: "ans3",
  },
];

const question = document.querySelector(".question");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const submit = document.querySelector(".btn-success");
const answers = document.querySelectorAll(".answer");
const showScore = document.querySelector(".showscore");

let nextQuestion = 0;
let score = 0;

const renderQuestion = () => {
  const questionList = questions[nextQuestion];

  question.innerText = questionList.question;

  option1.innerText = questionList.a;
  option2.innerText = questionList.b;
  option3.innerText = questionList.c;
  option4.innerText = questionList.d;
};

renderQuestion();

let answer;
const optionSelected = () => {
  answers.forEach((currentAns) => {
    if (currentAns.checked) {
      answer = currentAns.id;
    }
  });
  return answer;
};

const deselectAll = () => {
  answers.forEach((currentAns) => (currentAns.checked = false));
};

submit.addEventListener("click", () => {
  const getOptionSelected = optionSelected();
  console.log(getOptionSelected);

  if (getOptionSelected === questions[nextQuestion].ans) {
    score++;
    console.log(score);
  }

  nextQuestion++;

  deselectAll();

  if (nextQuestion < questions.length) {
    renderQuestion();
  } else {
    showScore.innerHTML = `<p class="marks"> You Scored ${score}/${questions.length} Marks </p><br><button type="button" class="btn btn-primary" onClick="window.location.reload()">Restart</button>`;
    console.log("score", score);
    showScore.classList.remove("scoreArea");
  }
});
