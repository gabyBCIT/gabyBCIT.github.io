var count = 0;
const MAX_ANSWERS = 4;

const addQuestionToForm = function(templateDiv) {
  const template =
    `<label for="question">
      Question ${count + 1}*
      <br />
      <textarea id="question${count}" placeholder="Example: 'What is 1+2?'"></textarea>
    </label>
    <label>
      Answers *
    </label>
    <div>
      <input type="radio" name="answer${count}" value="0" />
      <input type="text" id="q${count}a0" placeholder="7" />
    </div>
    <div>
      <input type="radio" name="answer${count}" value="1" />
      <input type="text" id="q${count}a1" placeholder="four" />
    </div>
    <div>
      <input type="radio" name="answer${count}" value="2" />
      <input type="text" id="q${count}a2" placeholder="x" />
    </div>
    <div>
      <input type="radio" name="answer${count}" value="3" />
      <input type="text" id="q${count}a3" placeholder="4.1" />
    </div>
    <br />
    <hr />
  `;

  const div = document.createElement('div');
  div.innerHTML = template;
  templateDiv.appendChild(div);
    count++;
    console.log(count);
}

window.onload = function(e) {
  const form = document.querySelector('form');
  const templateDiv = document.getElementById("templateDiv");

  addQuestionToForm(templateDiv);

  const addQuestionButton = document.getElementById('addButton');

// Listener for "Add" button
  addQuestionButton.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("BAP")
    addQuestionToForm(templateDiv);
  })

  // Listener for "Save" button
  // This is the shape of the data
  // [
  //   {
  //     question: "are u bob",
  //     answers: [ "i", "no"],
  //     answerKey: 1
  //   }
  // ]
  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Array to store the questions for local storage
    const questionsArray = [];

    // loops through all the forms
    for (let i = 0; i < count; i++) {
      let questionObject = {};
      questionObject["question"] = document.getElementById(`question${i}`).value;
      let answerArray = [];
      const radioElements = document.getElementsByName(`answer${i}`);

      // loops through the answers and gets values and answerKey
      for (let a = 0; a < MAX_ANSWERS; a++) {
        let answerElement = document.getElementById(`q${i}a${a}`);
        let answerValue = answerElement.value;
        answerArray.push(answerValue);
        let radio = radioElements[a];
        if (radio.checked){
          questionObject["answerKey"] = radio.value;
        }
        // answerArray.push(document.getElementById(`q${i}a${a}`).value);
      }
      questionObject["answers"] = answerArray;
      console.log(questionObject);
      console.log(document.getElementById(`question${i}`).value);

      questionsArray.push(questionObject)
    }
    console.log("7980")
    // localstorage.add(wordsArray)
    localStorage.setItem('fuckers', JSON.stringify(questionsArray));
    const fucker = JSON.parse(localStore.getItem('fuckers'))
    console.log(fucker)
  })

}
