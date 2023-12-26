let currentQuestion = 0;

function questionsStart() {
    let endOfQuestion = document.getElementById('nextQuestion');

    document.getElementById('nextQuestion').style.pointerEvents = 'none';
    endOfQuestion.innerHTML = `<button type="button" class="btn btn-primary box-shadow-answer" onclick="nextQuestion()">Next</button>`;

    if (currentQuestion == questions.length - 1) {
        endOfQuestion.innerHTML = '<button type="button" class="btn btn-primary box-shadow-answer" onclick="endQuestion()">End</button>';
    }

    document.getElementById('thisQuestion').innerHTML = currentQuestion + 1;
    document.getElementById('questionLength').innerHTML = questions.length;
    prgressBar();
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

function prgressBar(){
    progressProzent = Math.round(100/questions.length*(currentQuestion+1))+'%';
    document.getElementById('progressBar').style.width = progressProzent;
    document.getElementById('progressBar').innerHTML = progressProzent;

}

function showAnswer(clickAnswer) {
    let right_answer = questions[currentQuestion]['right_answer'];

    if (right_answer == clickAnswer) {
        document.getElementById(`clickAnswer_${clickAnswer}`).style.backgroundColor = 'green';
        document.getElementById(`clickAnswer_${clickAnswer}`).style.color = 'white';
        rightAnswers++;
    } else {
        document.getElementById(`clickAnswer_${clickAnswer}`).style.backgroundColor = 'red';
        document.getElementById(`clickAnswer_${clickAnswer}`).style.color = 'white';
        document.getElementById(`clickAnswer_${right_answer}`).style.backgroundColor = 'green';
        document.getElementById(`clickAnswer_${right_answer}`).style.color = 'white';
    }

    document.getElementById('cards').style.pointerEvents = 'none';
    document.getElementById('nextQuestion').style.pointerEvents = 'visible';
}

function nextQuestion() {
    currentQuestion++;
    resetAnswer();
    questionsStart();
}

function endQuestion(){
    document.getElementById('cards').style.display = 'none';
    document.getElementById('cardsEnd').style.display = 'flex';
    document.getElementById('rightAnswers').innerHTML = rightAnswers;
    document.getElementById('allAnswers').innerHTML = questions.length;

    prozent = 100/questions.length*rightAnswers;
    document.getElementById('prozent').innerHTML = prozent+'%!';

    calcAnswers(prozent);
}

function calcAnswers(prozent){
    if(prozent < 30){
        document.getElementById('training').innerHTML = 'Da musst du noch Trainieren!';
    }else if(prozent < 50){
        document.getElementById('training').innerHTML = 'Da geht noch was!';
    }else if(prozent < 80){
        document.getElementById('training').innerHTML = 'Das ist ein gutes Ergebnis!';
    }else if(prozent < 100){
        document.getElementById('training').innerHTML = 'Das ist sehr gut!';
    }else if(prozent == 100){
        document.getElementById('training').innerHTML = 'Das ist Perfekt, Herzlichen Glückwunsch';
    }
}

function restart(){
    currentQuestion = 0;
    rightAnswers = 0;
    resetAnswer();
    questionsStart();
}

function resetAnswer(){
    document.getElementById('cards').style.display = 'unset';
    document.getElementById('cardsEnd').style.display = 'none';
    document.getElementById('clickAnswer_1').style.backgroundColor = 'unset';
    document.getElementById('clickAnswer_2').style.backgroundColor = 'unset';
    document.getElementById('clickAnswer_3').style.backgroundColor = 'unset';
    document.getElementById('clickAnswer_4').style.backgroundColor = 'unset';
    document.getElementById('clickAnswer_1').style.color = 'unset';
    document.getElementById('clickAnswer_2').style.color = 'unset';
    document.getElementById('clickAnswer_3').style.color = 'unset';
    document.getElementById('clickAnswer_4').style.color = 'unset';
    document.getElementById('cards').style.pointerEvents = 'visible';
    document.getElementById('nextQuestion').style.pointerEvents = 'none';
}