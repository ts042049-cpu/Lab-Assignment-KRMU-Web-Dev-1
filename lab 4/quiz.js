
let questions = [
    "Capital of india?",
    "15*2?",
    "2+2?",
    "Language used to style web pages?",
    "first Prime Minister of India ?"
];

let answers = [
    "delhi",
    "30",
    "4",
    "css",
    "Jawaharlal Nehru"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i]);
    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === answers[i]) {
        alert("Correct!");
        score++;
    } else {
        alert("Wrong! Correct answer: " + answers[i]);
    }
}

alert("Final Score: " + score + " / " + questions.length);