function Question(text, choices, answer){ //declared a function, which is allowed to take in 3  variables
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.correctAnswer = function(choices){//.prototype is used to create another function outside the main function 
    return choices == this.answer; //checks choice and the answer
} 