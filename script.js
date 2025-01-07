const answers = {
    1: 'A',
    2: 'A',
    3: 'B'
};

let correctCount = 0; // Aantal juiste antwoorden
let incorrectCount = 0; // Aantal foute antwoorden
const questionCount = Object.keys(answers).length; // Totaal aantal vragen

function getExplanation(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "De juiste drie factoren voor verbranding zijn brandbare stof, zuurstof en ontbrandingstemperatuur.";
        case 2:
            return "De primaire verantwoordelijkheid van beveiligers is het direct evacueren van het personeel om hun veiligheid te waarborgen.";
        case 3:
            return "Nauwe communicatielijnen zijn essentieel voor een adequaat antwoord.";
        default:
            return "Geen verklaring beschikbaar.";
    }
}

// Controleer het antwoord
function checkAnswer(questionNumber, selectedAnswer, clickedButton) {
    const resultDiv = document.getElementById(`result${questionNumber}`);

    // Deactiveer de knoppen
    const buttons = clickedButton.parentElement.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true; // Deactiveer de knoppen
        button.classList.remove('selected'); // Verwijder selectie
        if (button !== clickedButton) {
            button.classList.add('fade'); // Vervagen voor andere knoppen
        }
    });

    // Voeg de 'selected' klasse toe aan de geselecteerde knop
    clickedButton.classList.add('selected');

    // Controleer het antwoord
    const correctAnswer = answers[questionNumber];

    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = `<div class="true-result">Correct! ${getExplanation(questionNumber)}</div>`;
        correctCount++;
    } else {
        resultDiv.innerHTML = `<div class="false-result">Fout! Het juiste antwoord is ${correctAnswer}. <br> Verklaring: ${getExplanation(questionNumber)}</div>`;
        incorrectCount++;
    }

    // Toon de score
    displayScore();
}

// Bereken en toon de score
function displayScore() {
    const scoreDiv = document.getElementById('score');
    const totalScore = (correctCount / questionCount) * 10; // Puanı 10 üzerinden hesapla
    scoreDiv.innerHTML = `Je score is ${correctCount} van de ${questionCount} vragen. <br> Foute antwoorden: ${incorrectCount}. <br> Totale score: ${totalScore.toFixed(1)} / 10`;
    
    // Sayıları göster
    displayNumbers();
}

// Sayıları göster
function displayNumbers() {
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.innerHTML = ''; // Önceki içerikleri temizle

    for (let i = 1; i <= questionCount; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.innerText = i;

        // Doğru veya yanlış kontrolü
        if (answers[i] === 'A' && correctCount >= i) {
            numberDiv.classList.add('correct');
        } else {
            numberDiv.classList.add('incorrect');
        }

        numberContainer.appendChild(numberDiv);
    }
}

// Knoop voor het in- en uitschakelen van de donkere modus
document.getElementById('toggleButton').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
