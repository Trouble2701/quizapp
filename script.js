let currentQuestion = 0;

function questionsStart() {
    let endOfQuestion = document.getElementById('nextQuestion');
    let thisQuestion = document.getElementById('thisQuestion');
    let questionLength = document.getElementById('questionLength');
    let nextQuestion = document.getElementById('nextQuestion');
    nextQuestion.style.pointerEvents = 'none';
    endOfQuestion.innerHTML = `<button type="button" class="btn btn-primary box-shadow-answer" onclick="nextQuestion(${currentQuestion + 1})">Next</button>`;

    if (currentQuestion == questions.length - 1) {
        endOfQuestion.innerHTML = '<button type="button" class="btn btn-primary box-shadow-answer" onclick="endQuestion()">End</button>';
    }

    thisQuestion.innerHTML = currentQuestion + 1;
    questionLength.innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {
    let question = questions[currentQuestion]['question'];
    let answer_1 = questions[currentQuestion]['answer_1'];
    let answer_2 = questions[currentQuestion]['answer_2'];
    let answer_3 = questions[currentQuestion]['answer_3'];
    let answer_4 = questions[currentQuestion]['answer_4'];

    document.getElementById('question').innerHTML = question;
    document.getElementById('answer_1').innerHTML = answer_1;
    document.getElementById('answer_2').innerHTML = answer_2;
    document.getElementById('answer_3').innerHTML = answer_3;
    document.getElementById('answer_4').innerHTML = answer_4;
}

function showAnswer(clickAnswer) {
    let right_answer = questions[currentQuestion]['right_answer'];
    let chooseRightAnswer = document.getElementById(`clickAnswer_${right_answer}`)
    let chooseAnswer = document.getElementById(`clickAnswer_${clickAnswer}`);
    let answers = document.getElementById('cards');
    let nextQuestion = document.getElementById('nextQuestion');

    if (right_answer == clickAnswer) {
        chooseAnswer.style.boxShadow = '0 0 8px rgb(0, 151, 0)';
    } else {
        chooseRightAnswer.style.boxShadow = '0 0 8px rgb(0, 151, 0)';
        chooseAnswer.style.boxShadow = '0 0 8px rgb(168, 0, 0)';
    }

    answers.style.pointerEvents = 'none';
    nextQuestion.style.pointerEvents = 'visible';
}

function nextQuestion(i) {
    currentQuestion = i;
    let answer_1 = document.getElementById('clickAnswer_1');
    let answer_2 = document.getElementById('clickAnswer_2');
    let answer_3 = document.getElementById('clickAnswer_3');
    let answer_4 = document.getElementById('clickAnswer_4');
    let answers = document.getElementById('cards');
    let nextQuestion = document.getElementById('nextQuestion');
    answer_1.style.boxShadow = 'none';
    answer_2.style.boxShadow = 'none';
    answer_3.style.boxShadow = 'none';
    answer_4.style.boxShadow = 'none';
    answers.style.pointerEvents = 'visible';
    nextQuestion.style.pointerEvents = 'none';
    questionsStart();
}

function endQuestion(){
    let cardStart = document.getElementById('cards');
    let cardEnd = document.getElementById('cardsEnd');

    cardStart.style.display = 'none';
    cardEnd.style.display = 'unset';
}