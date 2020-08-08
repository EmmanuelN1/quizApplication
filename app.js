window.onload= initAll;

function initAll(){
    function populate(){ 
        if (quiz.isEnded()){ //checks the isEnded function
            showScores(); 
        }
        else{
            //showQuestion;
            var element = document.getElementById("question");
            element.innerHTML=quiz.getQuestionIndex().text;// channges the Html content of the selected Id
            //show Choices
            var choices = quiz.getQuestionIndex().choices;
            for (var i=0; i<choices.length; i++){ //loops through the choices
                var element = document.getElementById("choice"+i);
                element.innerHTML = choices[i]; 
                guess("btn"+i, choices[i]); //calls guess function and parse two parameters to it;
            }
            showProgress();
    }
    };

    function guess(id, guess){
        var button = document.getElementById(id);
        button.onclick = function(){
            quiz.guess(guess);
            populate();
        }
    }
    function showProgress(){
        var currentQuestionNumber = quiz.questionIndex + 1; //increases the number of questionIndex and stores it currentQuestionNumber
        var element = document.getElementById("progress");
        element.innerHTML = "Question"+ currentQuestionNumber+" of "+ quiz.questions.length;

    }
    function showScores(){
        var gameOverHtml = "<h1> Result</h1>"; //creates an header
        gameOverHtml+= "<h2 id='score'> Your scores: " +quiz.score +" of  "+ questions.length+ "</h2>"; //creates and another header
        var replace = document.getElementById("quiz").innerHTML= gameOverHtml;   //replaces the content in the div tag
      
    }
    //this is where the questions are stored
    var questions = [
        new Question("Which is not an object oriented language?", ["java", "c#", "c++", "c"], "c"),
        new Question("Which language is used foor styling web pages?", ["html", "jQuery", "Xml", "css"],"css"),
        new Question("There are _____ main component of object oriented programming .", ["1", "2", "3","4"],"4"),
        new Question("Which language is used for web app",["PHP", "Javascript", "Python", "All"],"All"),
        new Question("NYC is a ___________", ["Library", "Framework", "Language","Script"],"Framework")
    ];

    var quiz = new Quiz(questions); //creates an object of Quiz in the other js File
    populate();
} 