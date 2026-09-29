// ========================================
// QUIZ QUESTIONS
// ========================================

const questions = [

    {
        question: "What does HTML stand for?",

        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],

        correct: 0
    },


    {
        question: "What is CSS mainly used for?",

        answers: [
            "Creating databases",
            "Styling a webpage",
            "Writing Python programs",
            "Managing files"
        ],

        correct: 1
    },


    {
        question: "Which language is used to make a webpage interactive?",

        answers: [
            "HTML",
            "CSS",
            "JavaScript",
            "SQL"
        ],

        correct: 2
    },


    {
        question: "Which language is commonly used for Artificial Intelligence?",

        answers: [
            "Python",
            "HTML",
            "CSS",
            "XML"
        ],

        correct: 0
    },


    {
        question: "Which data structure follows LIFO?",

        answers: [
            "Queue",
            "Array",
            "Stack",
            "Tree"
        ],

        correct: 2
    },


    {
        question: "Which data structure follows FIFO?",

        answers: [
            "Stack",
            "Queue",
            "Tree",
            "Graph"
        ],

        correct: 1
    },


    {
        question: "What does CPU stand for?",

        answers: [
            "Central Processing Unit",
            "Computer Processing User",
            "Central Program Utility",
            "Computer Primary Unit"
        ],

        correct: 0
    },


    {
        question: "Which of the following is a programming language?",

        answers: [
            "Python",
            "HTML",
            "CSS",
            "All of these"
        ],

        correct: 3
    },


    {
        question: "Which symbol is commonly used for comments in JavaScript?",

        answers: [
            "//",
            "##",
            "<!-- -->",
            "**"
        ],

        correct: 0
    },


    {
        question: "Which company developed the JavaScript language?",

        answers: [
            "Microsoft",
            "Netscape",
            "Google",
            "IBM"
        ],

        correct: 1
    },


    {
        question: "Which keyword is used to declare a variable in JavaScript?",

        answers: [
            "variable",
            "var",
            "define",
            "int"
        ],

        correct: 1
    },


    {
        question: "Which HTML tag is used to create a paragraph?",

        answers: [
            "<h1>",
            "<p>",
            "<div>",
            "<para>"
        ],

        correct: 1
    },


    {
        question: "Which CSS property changes the text color?",

        answers: [
            "font-size",
            "background",
            "color",
            "text-style"
        ],

        correct: 2
    },


    {
        question: "What does AI stand for?",

        answers: [
            "Automated Internet",
            "Artificial Intelligence",
            "Advanced Information",
            "Artificial Internet"
        ],

        correct: 1
    },


    {
        question: "Which algorithm is commonly used for classification in Machine Learning?",

        answers: [
            "Random Forest",
            "HTML",
            "CSS",
            "Photoshop"
        ],

        correct: 0
    }

];


// ========================================
// VARIABLES
// ========================================

let currentQuestion = 0;

let score = 0;

let timeLeft = 15;

let timer;


// ========================================
// HTML ELEMENTS
// ========================================

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const resultScreen =
    document.getElementById("result-screen");


const startButton =
    document.getElementById("start-btn");

const nextButton =
    document.getElementById("next-btn");

const restartButton =
    document.getElementById("restart-btn");


const questionElement =
    document.getElementById("question");

const optionButtons =
    document.querySelectorAll(".option");


const questionNumber =
    document.getElementById("question-number");

const timerElement =
    document.getElementById("timer");


const progressBar =
    document.getElementById("progress-bar");


const answerMessage =
    document.getElementById("answer-message");


const scoreElement =
    document.getElementById("score");

const scorePercentage =
    document.getElementById("score-percentage");

const resultMessage =
    document.getElementById("result-message");


// ========================================
// START QUIZ
// ========================================

startButton.addEventListener("click", function () {

    startScreen.style.display = "none";

    quizScreen.style.display = "block";

    currentQuestion = 0;

    score = 0;

    showQuestion();

});


// ========================================
// SHOW QUESTION
// ========================================

function showQuestion() {

    clearInterval(timer);


    const question =
        questions[currentQuestion];


    // Question number

    questionNumber.textContent =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;


    // Question

    questionElement.textContent =
        question.question;


    // Clear message

    answerMessage.textContent = "";


    // Progress bar

    const progress =
        ((currentQuestion) / questions.length) * 100;

    progressBar.style.width =
        progress + "%";


    // Display answers

    optionButtons.forEach(function (button, index) {

        button.textContent =
            question.answers[index];


        button.classList.remove(
            "correct",
            "wrong"
        );


        button.disabled = false;

    });


    // Start timer

    startTimer();

}


// ========================================
// TIMER
// ========================================

function startTimer() {

    timeLeft = 15;

    timerElement.textContent =
        "⏱️ " + timeLeft;


    timer = setInterval(function () {

        timeLeft--;


        timerElement.textContent =
            "⏱️ " + timeLeft;


        if (timeLeft <= 0) {

            clearInterval(timer);

            timeUp();

        }

    }, 1000);

}


// ========================================
// TIME UP
// ========================================

function timeUp() {

    optionButtons.forEach(function (button) {

        button.disabled = true;

    });


    const correctAnswer =
        questions[currentQuestion].correct;


    optionButtons[correctAnswer]
        .classList.add("correct");


    answerMessage.textContent =
        "⏰ Time's up! The correct answer is: " +
        questions[currentQuestion]
            .answers[correctAnswer];


    answerMessage.style.color =
        "#dc3545";

}


// ========================================
// SELECT ANSWER
// ========================================

optionButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        clearInterval(timer);


        const question =
            questions[currentQuestion];


        // Disable all buttons

        optionButtons.forEach(function (btn) {

            btn.disabled = true;

        });


        // Correct answer

        if (index === question.correct) {

            score++;

            button.classList.add("correct");

            answerMessage.textContent =
                "✅ Correct Answer!";

            answerMessage.style.color =
                "#28a745";

        }


        // Wrong answer

        else {

            button.classList.add("wrong");


            // Show correct answer

            optionButtons[
                question.correct
            ].classList.add("correct");


            answerMessage.textContent =
                "❌ Wrong Answer! Correct answer: " +
                question.answers[
                    question.correct
                ];


            answerMessage.style.color =
                "#dc3545";

        }

    });

});


// ========================================
// NEXT QUESTION
// ========================================

nextButton.addEventListener("click", function () {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    }

    else {

        showResult();

    }

});


// ========================================
// SHOW RESULT
// ========================================

function showResult() {

    clearInterval(timer);


    quizScreen.style.display = "none";

    resultScreen.style.display = "block";


    // Calculate percentage

    const percentage =
        Math.round(
            (score / questions.length) * 100
        );


    scorePercentage.textContent =
        percentage + "%";


    scoreElement.textContent =
        "Your Score: " +
        score +
        " / " +
        questions.length;


    // Result message

    if (percentage >= 80) {

        resultMessage.textContent =
            "🌟 Excellent! Great job!";

    }

    else if (percentage >= 50) {

        resultMessage.textContent =
            "👍 Good! Keep improving!";

    }

    else {

        resultMessage.textContent =
            "📚 Keep Practicing! You can do better!";

    }

}


// ========================================
// RESTART QUIZ
// ========================================

restartButton.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;


    resultScreen.style.display = "none";

    quizScreen.style.display = "block";


    showQuestion();

});