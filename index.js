
/*-------------------------Variables are initialized that are to be used in the functions----------------------------*/
let answer_array = ["d", "a", "c", "a", "a"];
let score_board = 0;
let num = 0;
let count = 0;

/*------------------------The Time functions that will count down from five minutes to zero---------------------------*/
function countdown(minutes) {
    let seconds = 60;
    let m = minutes

    function tick() {

        let counter = document.getElementById("time");


        let current_minutes = m - 1
        seconds--;
        counter.innerHTML = current_minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        if (seconds > 0) {
            setTimeout(tick, 1000);
        } else {
            if (m > 1) {
                countdown(m - 1);
            }
        }

    }

    tick();
}


/*-------------The Quiz start button  event listener handler also hides the welcome sign--------------*/

function quiz_start() {
    document.getElementById("quiz_rules_notice").style.visibility = "visible";
    document.getElementById("start_quiz").style.visibility = "hidden";

}

/*------------------------The hide notice button event click handler--------------------------*/

/*--------------------The button also initiates the timer, main write-function as well hide the
rule notice--------------------*/
function hide_notice() {
    document.getElementById("quiz_rules_notice").style.visibility = "hidden";
    document.getElementById("section").style.visibility = "visible";
    document.getElementById("answer_box").style.visibility = "visible";
    document.getElementById("question_space").style.visibility = "visible";
    document.getElementById("multiple_choices").style.visibility = "visible";

    countdown(1);
    setTimeout(function () {
        document.getElementById("form_fill_in").style.visibility = "visible";
        }, 60000);
        write_question();






}

/*----------------------The main function that selects the question to be displayed and stores the score in a variable
--------------*/
function write_question() {

    let questions_array = ["1. Which of the following is an advantage of using JavaScript?",
        "2. Which of the " +
    "following type of variable is visible everywhere in your JavaScript code?",
        "3. Which built-in method adds one or more elements to the end of an array and returns the new " +
        "length of the array?", "4. Which built-in method returns the calling string value converted to lower" +
        " case?","5.  Which of the following function of String object returns the character" +
        " at the specified index?"];
    let multiple_choices_array_a = ["(A) Less server interaction", "(A) global variable", "(A) last()",
        "(A) toLowerCase()", "(A)charAt() "];
    let multiple_choices_array_b = ["(B) Immediate feedback to the visitors", "(B) local variable",
        "(B) put()", "(B) toLower()", "(B) charCodeAt() "];
    let multiple_choices_array_c = ["(C) Increased interactivity", "(C) Both of the above", "(C) push()",
        "(C)  changeCase(case)", "(C) concat()"];
    let multiple_choices_array_d = ["(D) All of the above", "(D) none of the above", "(D) none of the above",
        "(D) None of the above.", "(D) indexOf() "];
    /*-------------------------html functions which display the questions and multiple choices synchronously-----------*/
   if(num === 5)
   {
       document.getElementById("form_fill_in").style.visibility = "visible";

   }
   else
   {
       document.getElementById("write_question").innerHTML = questions_array[num];
       document.getElementById("a").innerHTML = multiple_choices_array_a[num];
       document.getElementById("b").innerHTML = multiple_choices_array_b[num];
       document.getElementById("c").innerHTML = multiple_choices_array_c[num];
       document.getElementById("d").innerHTML = multiple_choices_array_d[num];
       document.getElementById("a").style.backgroundColor = "transparent";
       document.getElementById("b").style.backgroundColor = "transparent";
       document.getElementById("c").style.backgroundColor = "transparent";
       document.getElementById("d").style.backgroundColor = "transparent";
       document.getElementById("answer_box").innerHTML = "Answer = ";

   }


}

/*-----------------------These are the four event listener that handle all the activity that takes place with
the multiple choice by selecting the right color background for correct and wrong answers as well as
 displaying playing game messages-----------------------*/
/*-------------------Score are collected and the functions promptly display the next question to the user with a
slight delay that is programmed in each ---------------*/

let click_a = document.getElementById("a");
click_a.addEventListener("click", function () {

    if ("a" !== answer_array[num]) {
        document.getElementById("a").style.backgroundColor = "red";
        document.getElementById("answer_box").innerHTML = "Wrong Answer the right answer is " + answer_array[num];
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);

    }
    else {
        document.getElementById("a").style.backgroundColor = "green";
        document.getElementById("answer_box").innerHTML = " Correct Answer " + answer_array[num];
        score_board = score_board + 1;
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);
    }
});

let click_b = document.getElementById("b");
click_b.addEventListener("click", () => {

    if (answer_array[num] !== "b") {
        document.getElementById("b").style.backgroundColor = "red";
        document.getElementById("answer_box").innerHTML = "Wrong Answer the right answer is " + answer_array[num];
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);
    }
    else {
        document.getElementById("b").style.backgroundColor = "green";
        document.getElementById("answer_box").innerHTML = " Correct Answer  " + answer_array[num];
        score_board = score_board + 1;
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);
    }
});

let click_c = document.getElementById("c");
click_c.addEventListener("click", () => {

    if ("c" !== answer_array[num]) {
        document.getElementById("c").style.backgroundColor = "red";
        document.getElementById("answer_box").innerHTML = "Wrong Answer the right answer is " + answer_array[num];
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);
    }

    else {
        document.getElementById("c").style.backgroundColor = "green";
        document.getElementById("answer_box").innerHTML = " Correct Answer  " + answer_array[num];
        score_board = score_board + 1;
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);
    }

});

let click_d = document.getElementById("d");
click_d.addEventListener("click", () => {

    if ("d" !== answer_array[num]) {
        document.getElementById("d").style.backgroundColor = "red";
        document.getElementById("answer_box").innerHTML = "Wrong Answer the right answer is " + answer_array[num];
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);
    }

    else {
        document.getElementById("d").style.backgroundColor = "green";
        score_board = score_board + 1;
        document.getElementById("answer_box").innerHTML = " Correct Answer  " + answer_array[num];
        document.getElementById("score").innerHTML = "Your Score " + score_board;
        setTimeout(function () {
            num++;
            count = num;
            //console.log(num);
            write_question();
        }, 1000);
    }
});




