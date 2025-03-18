const sentences = [
    "Den hurtige brune ræv springer over den dovne hund.",
    "Coding er sjovt, når man lærer nye ting.",
    "Javascript gør websider interaktive.",
    "Prøv at skrive dette hurtigt og præcist!"
];

let sentence = sentences[Math.floor(Math.random() * sentences.length)];
document.getElementById("sentence").innerText = sentence;

const inputBox = document.getElementById("inputBox");
const result = document.getElementById("result");

let startTime;
let timerStarted = false;

inputBox.addEventListener("input", function () {
    if (!timerStarted) {
        startTime = new Date();
        timerStarted = true;
    }

    if (inputBox.value === sentence) {
        let endTime = new Date();
        let timeTaken = (endTime - startTime) / 1000;
        let errors = calculateErrors(inputBox.value, sentence);

        result.innerHTML = `Tid: ${timeTaken.toFixed(2)} sekunder<br> Fejl: ${errors}`;
        inputBox.disabled = true;
    }
});

function calculateErrors(input, correct) {
    let errors = 0;
    for (let i = 0; i < correct.length; i++) {
        if (input[i] !== correct[i]) {
            errors++;
        }
    }
    return errors;
}
