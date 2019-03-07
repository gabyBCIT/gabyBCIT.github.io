const quiz = JSON.parse(localStorage.getItem('quiz'));
const answerKey = [];
let correctAnswers = 0;
let totalAnswers = 0;

window.onload = function(e) {
  const quizDiv = document.getElementById('quizId');
  populateQuiz(quizDiv);

  // Adds the event listener for the submit button
  const form = document.querySelector('form');
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Loops through the quiz to check the correct answers
    for (var i = 0; i < quiz.length; i++) {
      let title = document.getElementById(`question${i}`);
      const radio = document.getElementsByName(i);

      for (var k = 0; k < radio.length; k++) {
        // Checks the right answer, and turns that answer green.
        if (radio[k].value == answerKey[i]) {
          const rightAnswer = document.getElementById(`q${i}a${k}`);
          rightAnswer.style["background-color"] = "palegreen";
          // Checks the answer and tallies it beside the name.
          if (radio[k].checked) {
            correctAnswers++;
            title.innerHTML += '&emsp;1/1';
          }
        } else if (radio[k].checked) {
          const wrongAnswer = document.getElementById(`q${i}a${k}`);
          wrongAnswer.style["background-color"] = "salmon"
          title.innerHTML += '&emsp;0/1';
        }
      }
    }
    // Shows the total at the top of the page
    let quizName = document.querySelector('h1');
    quizName.innerHTML += `&emsp;${correctAnswers}/${totalAnswers}`;
    quizName.innerHTML += `&emsp;${(correctAnswers/totalAnswers)*100}%`;
  })
}

// console.log(quizDiv)
const populateQuiz = function(quizDiv) {

  for (var i = 0; i < quiz.length; i++) {
    const questionObject = quiz[i];
    const question = questionObject.question;
    console.log(question);
    if (question) {
      totalAnswers++;
      // Adds question to form
      const questionName = document.createElement('h3');
      questionName.setAttribute("id", `question${i}`);
      questionName.innerHTML = question;
      quizDiv.appendChild(questionName);

      const quizAnswers = questionObject.answers;
      for (var a = 0; a < quizAnswers.length; a++) {

        //Adds radio buttons to quiz
        const radioDiv = document.createElement("div");
        radioDiv.setAttribute("id", `q${i}a${a}`);
        const radio = document.createElement("input");
        radio.setAttribute("type", "radio");
        radio.setAttribute("name", i);
        radio.setAttribute("value", a);
        radioDiv.appendChild(radio);

        // Adds text to question
        radioDiv.appendChild(document.createTextNode(quizAnswers[a]));
        radioDiv.appendChild(document.createElement("br"));
        quizDiv.appendChild(radioDiv);
      }
      //Saves the answer key for this question in an array
      answerKey.push(questionObject.answerKey);
      console.log(answerKey);
    }
  }
}
