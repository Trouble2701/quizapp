let currentQuestion = 0;

function questionsStart(){
    let endOfQuestion = document.getElementById('nextQuestion');
    let thisQuestion = document.getElementById('thisQuestion');
    let questionLength = document.getElementById('questionLength');
    endOfQuestion.innerHTML = '<button type="button" class="btn btn-primary box-shadow-answer">Next</button>';

    if(currentQuestion == questions.length-1){
        endOfQuestion.innerHTML = '<button type="button" class="btn btn-primary box-shadow-answer">End</button>';
    }

    thisQuestion.innerHTML = currentQuestion+1;
    questionLength.innerHTML = questions.length;

    showQuestion();
}

function showQuestion(){
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