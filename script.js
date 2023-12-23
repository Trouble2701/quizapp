function questionsStart(thisQuestion){
    let contentQuestion = document.getElementById('question');
    endOfQuestion = 'Next';

    contentQuestion.innerHTML = '';

    if(thisQuestion == questions.length-1){
        endOfQuestion = 'End';
    }
    contentQuestion.innerHTML = generateContent(questions[thisQuestion]['question'], questions[thisQuestion]['answer_1'], questions[thisQuestion]['answer_2'], questions[thisQuestion]['answer_3'], questions[thisQuestion]['answer_4'], thisQuestion+1, endOfQuestion);
}

function generateContent(question, answer_1, answer_2, answer_3, answer_4, aquestion, endOfQuestion){
    return /*html*/`
    <h5 class="card-title text-center mb-3">${question}</h5>
        <div class="card mb-3">
          <div class="card-body box-shadow-answer">
          ${answer_1}
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body box-shadow-answer">
          ${answer_2}
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body box-shadow-answer">
          ${answer_3}
          </div>
        </div>
        <div class="card mb-3">
          <div class="card-body box-shadow-answer">
          ${answer_4}
          </div>
        </div>
        <div class="question-footer">
          <div>
            <b>${aquestion}</b> von <b>${questions.length}</b> Fragen
          </div>
          <div>
            <button type="button" class="btn btn-primary box-shadow-answer" id="endOfQuestion">${endOfQuestion}</button>
          </div>
        </div>
        `;
}