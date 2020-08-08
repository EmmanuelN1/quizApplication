function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;

}
Quiz.prototype.getQuestionIndex = function(){ // a function was created in the quiz function outside it and was  named getQuestionIndex
    return this.questions[this.questionIndex]; //it returns questions[questionIndex]
}

Quiz.prototype.isEnded = function(){  // a function was created inside the quiz and named isEnded 
    return this.questions.length===this.questionIndex; //it checks if if the questionLength = questionIndex;
}
Quiz.prototype.guess = function(answer){ //creates a  function called guess
    if  (this.getQuestionIndex().correctAnswer(answer)){ 
        this.score++;//increments the score;
    }
    this.questionIndex++; //move  to the nnext question
}   