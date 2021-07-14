
questions = [
    {
        "id" : 1, 
    "question" : "Who was the first President of the United States?",
    "option1" : "George Washington", 
    "option2" : "Thomas Jefferson",
    "option3" : "Thomas Edison",
    "option4" :  "I don't know",
    "answer" : "option1" 
    },

    {
        "id" : 2, 
      "question": "The Central Rice Research Station is situated in?",
      "option1": "Chennai",
      "option2": "Bangalore",
      "option3": "Cuttack",
      "option4": "Quilon",
        "answer" : "option3" 
    },

    {
        "id" : 3, 
      "question": "Who among the following wrote Sanskrit grammar?",
      "option1": "Kalidas",
      "option2": "Charak",
      "option3": "Panini",
      "option4": "Aryabhatt",
        "answer" : "option3" 
    }
]

const container = document.querySelector('.container');

async function makeCard(question, noOfQuestions) {
    const que_main = document.createElement('div');
    que_main.classList.add('que-main');

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `<h2>Awesome Quiz</h2>`;

    const quest = document.createElement('p');
    quest.classList.add('question');
    quest.innerHTML = `${question.id}. ${question.question}`;

    card.appendChild(quest);

    const options = document.createElement('div');
    options.classList.add('options');

    for (let i = 0; i < 4; i++) {
        const option = document.createElement('button');
        option.classList.add('option');
        option.innerHTML = question[`option${i+1}`];

        // event listener for checking if the clicked option is correct
        option.addEventListener('click', (e) => {
            check(question, `option${i+1}`, option);
        })
        options.appendChild(option);
    }
    card.appendChild(options);

    // next question button 
    const next_que = document.createElement('button');
    next_que.innerHTML = "Next Question";
    next_que.classList.add('next');

    // event listener for next question
    card.appendChild(next_que);

    que_main.appendChild(card);
    const footer = document.createElement('p');
    footer.innerHTML = `Question ${question.id} of ${noOfQuestions}`;
    que_main.appendChild(footer);
    container.appendChild(que_main);
}

for (const question of questions) {
   makeCard(question, questions.length);

}

// function for verifying if the answer is correct
function check(question, option, button) {
    if (question[option] === question[question.answer]) {
        button.style.backgroundColor = 'green';
        button.style.color = 'white';
    } else {
        button.style.backgroundColor = 'red';
        button.style.color = 'white';
    }
}