function generateForm() {
  templateDiv.innerHTML = template;

}

window.onload = function(e) {
  const form = document.querySelector('form');
  const templateDiv = getElementById("templateDiv");
  console.log(form);
  generateForm(form);

  const addQuestionButton = document.getElementById('addButton');
  const dataArray = [];
  // const textarea = document area

  addQuestionButton.addEventListener('click', function (e) {
    // insert new html form elements
    e.preventDefault();
    var data = new FormData(form);
    dataArray.push(data);
    console.log(data);
    // console.log(dataArray);

    // const textarea = document.createElement('textarea')


  })


  form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("7980")
    // localstorage.add(wordsArray)
  })

}

console.log("ayyyy")

// // form creation
// const mainDiv = document.createElement("div");
// const document.createElement("label");

const template =
  `<label for="question">
    Question Text *
    <br />
    <textarea id="question" name="question" placeholder="Example: 'What is 1+2?'"></textarea>
  </label>
  <label>
    Answers *
  </label>
  <div>
    <input type="radio" name="answer" value="1" />
    <input type="text" name="answerText1" placeholder="7" />
  </div>
  <div>
    <input type="radio" name="answer" value="2" />
    <input type="text" name="answerText2" placeholder="potato" />
  </div>
  <br />
`;

form.innerHTML += template;
