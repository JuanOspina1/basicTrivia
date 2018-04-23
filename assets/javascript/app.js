var number = 60;
var intervalId;
var myListofQuestions = [
     {
         question: "Which fruit is red?",
         choices: ["Strawberry", "Watermelon", "Orange", "Avocado"],
        correctChoice: "Strawberry"
    },
    {
         question: "Which animal lives in the ocean?",
         choices: ["Dolphin", "Dog", "Armadillo", "Tiger"],
         correctChoice: "Dolphin"
     },
     {
         question: "Which is the Sunshine State?",
         choices: ["Nebraska", "Texas", "California", "Florida"],
         correctChoice: "Florida"
     },
    {
        question: "What's the capital of California?",
        choices: ["San Francisco", "Los Angeles", "San Jose", "Sacramento"],
        correctChoice: "Sacramento"
    }
];
 
 
function startGame () {
    $("#startGameButton").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");
 

    myQuestion = "";
 

    myListofQuestions.forEach(function(obj,idx) {
 
        myQuestion = myQuestion + "<p class='bold'>" + obj.question + "</p>";
 
        obj.choices.forEach(function(choice) {
            myQuestion = myQuestion + "<input type='radio' name=" + idx + " value=" + choice + ">" + choice + "<br>";
 
            console.log(myQuestion);
 
        })
 
    })
 
    $("#myForm").append(myQuestion);
 
    run();
 
}
 
function gradeMe () {
 
    stop();
 
    var numCorrectAnswers = 0;
    var unanswered = 0;
    var incorrect = 0;
 
  
    for (var i = 0; i < myListofQuestions.length; i ++) {
 
        var isItChecked = $("input[name =" + i+"]:checked").val();
   
 
        if (isItChecked === myListofQuestions[i].correctChoice) {
            numCorrectAnswers++;
        } else if (isItChecked === "undefined"){
            unanswered++;
        } else {
            incorrect++;
        }
    }
 
 
    $("#correct").html(numCorrectAnswers);
    $("#incorrect").html(incorrect);
    $("#unanswered").html(unanswered);
    $("#resultsWrapper").toggleClass("hidden");
    $("#gameWrapper").toggleClass("hidden");
 
}
 
 
 
 
function run() {
    intervalId = setInterval(decrement, 1000);
}
 
function decrement() {
    number--;
 
    $("#showNumber").html(number);
    if (number === 0) {
        gradeMe();
    }
}
 
function stop() {
    clearInterval(intervalId);
}