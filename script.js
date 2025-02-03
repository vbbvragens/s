// script.js

const answers = {
    1: 'A',
    2: 'A',
    3: 'B',
    4: 'A',
    5: 'B',
    6: 'C',
    7: 'A',
    8: 'B',
    9: 'A',
    10: 'C',
    11: 'A',
    12: 'B',
    13: 'C',
    14: 'B',
    15: 'B',
    16: 'C',
    17: 'B',
    18: 'C',
    19: 'B',
    20: 'C',
    21: 'B',
    22: 'C',
    23: 'C',
    24: 'B',
    25: 'C',
    26: 'C',
    27: 'B',
    28: 'B',
    29: 'B',
    30: 'C',
    31: 'B',
    32: 'B',
    33: 'C',
    34: 'C',
    35: 'A',
    36: 'C',
    37: 'B',
    38: 'C',
    39: 'C',
    40: 'C',
    41: 'B',
    42: 'A',
    43: 'B',
    44: 'B',
    45: 'B',
    46: 'B',
    47: 'B',
    48: 'B',
    49: 'B',
    50: 'B'
};

let correctCount = 0; // Aantal juiste antwoorden
let incorrectCount = 0; // Aantal foute antwoorden
const questionCount = Object.keys(answers).length; // Totaal aantal vragen

// Açıklama fonksiyonu
function getExplanation(questionNumber) {
    switch (questionNumber) {
        case 1:
            return "De juiste drie factoren voor verbranding zijn brandbare stof, zuurstof en ontbrandingstemperatuur.";
        case 2:
            return "De primaire verantwoordelijkheid van beveiligers is het direct evacueren van het personeel om hun veiligheid te waarborgen.";
        case 3:
            return "Manbeveiliging verwijst naar menselijke waakzaamheid, wat cruciaal is voor het tijdig detecteren van brand.";
        case 4:
            return "Brandblussers zijn technische hulpmiddelen die effectief helpen bij brandpreventie.";
        case 5:
            return "Bewegingsmelders detecteren beweging die kan wijzen op brandgevaar.";
        case 6:
            return "Het is verplicht om bij een brandmelding de alarmcentrale te contacteren voor hulp.";
        case 7:
            return "Klantgericht handelen betekent klanten informeren over veilig evacueren tijdens een brand.";
        case 8:
            return "Bij een storing in een brandalarmsysteem is het essentieel om deze te rapporteren.";
        case 9:
            return "De gemiddeld responstijd voor een alarmcentrale is onmiddellijk, wat essentieel is tijdens brandmeldingen.";
        case 10:
            return "Bij agressief gedrag tijdens een evacuatie is het belangrijk om jezelf en anderen in veiligheid te brengen.";
        case 11:
            return "Onzekerheid of paniek is vaak een oorzaak van agressief gedrag bij bezoekers tijdens een brand.";
        case 12:
            return "Onderhoud van brandblussers is een belangrijke preventieve maatregel tegen brand.";
        case 13:
            return "Duidelijke protocollen voor evacuatie zijn essentieel voor een effectief beveiligingsbeleid.";
        case 14:
            return "Bij een beveiligingssituatie is het belangrijk om te luisteren naar zorgen van klanten.";
        case 15:
            return "Een vriendelijke houding helpt bij het verzamelen van informatie en verbetert de communicatie.";
        case 16:
            return "Effectieve communicatie tussen beveiligers zorgt ervoor dat iedereen op de hoogte is van hun verantwoordelijkheden.";
        case 17:
            return "Bij een verzoek van een collega moet je de zorgen bevestigen en adequaat reageren.";
        case 18:
            return "Rookmelders en temperatuurgevoelige sensoren zijn essentieel voor branddetectie.";
        case 19:
            return "Drones kunnen helpen met een veiligheidsinspectie op grote evenementen voor brandpreventie.";
        case 20:
            return "Evalueren van procedures na een incident helpt bij het leren van fouten en het verbeteren van de veiligheid.";
        case 21:
            return "Het uitvoeren van een risicoanalyse is cruciaal voordat een risicobeheerplan kan worden geïmplementeerd.";
        case 22:
            return "De brandweer zorgt voor brandpreventie en reageert snel op incidenten tijdens evenementen.";
        case 23:
            return "Regelmatige branddrills zijn essentieel voor personeel en bezoekers om goed te reageren op brand.";
        case 24:
            return "Een duidelijke risicoanalyse helpt om een effectief beveiligingsbeleid te definiëren.";
        case 25:
            return "Trainingen verbeteren de teamwork vaardigheden en responscapaciteit van medewerkers.";
        case 26:
            return "De belangrijkste taak van een persoonlijke beveiliger is om de persoon te beschermen.";
        case 27:
            return "Het organiseren van veiligheidsprotocollen is een preventieve maatregel die risico's vermindert.";
        case 28:
            return "In drukke omgevingen is structuur belangrijk bij evacuatie om chaos te voorkomen.";
        case 29:
            return "Bij grote evenementen is toezicht houden en incidenten monitoren cruciaal voor de veiligheid.";
        case 30:
            return "Slechte communicatie kan chaos creëren in noodsituaties en moet worden vermeden.";
        case 31:
            return "Een goede samenwerking bevordert kennisuitwisseling en effectieve brandpreventie.";
        case 32:
            return "Beveiligers moeten vertrouwd raken met procedures om adequaat te reageren in crises.";
        case 33:
            return "De eerste stap in brandveiligheidsplannen is het uitvoeren van een brandrisicobeoordeling.";
        case 34:
            return "Classificering van noodsituaties is belangrijk voor het alarmdetectiesysteem.";
        case 35:
            return "Eenduidige voorwaarden en protocollen helpen bij schadepreventie.";
        case 36:
            return "Open communicatielijnen zijn essentieel voor effectieve conflictoplossing.";
        case 37:
            return "Rapporteren van potentiële overtredingen is cruciaal voor veiligheid.";
        case 38:
            return "Persoonlijke accounts moeten worden gesloten bij onbevoegd gebruik van wachtwoorden.";
        case 39:
            return "Specifieke protocollen in de beveiliging zorgen voor duidelijkheid en veiligheid.";
        case 40:
            return "Een criminele achtervolging is gericht op het reduceren van schade in gevaarlijke situaties.";
        case 41:
            return "Operationele planning zorgt voor structuur en vermindert verwarring.";
        case 42:
            return "Management is verantwoordelijk voor het beheersen van ongewenste situaties en veiligheid.";
        case 43:
            return "Een goed veiligheidsbeleid helpt risico's te identificeren en te beheersen.";
        case 44:
            return "Differentiële beveiliging is belangrijk voor het afhandelen van persoonlijke misverstanden.";
        case 45:
            return "Virtuele beveiliging identificeert en reageert op dreigingen in netwerken.";
        case 46:
            return "Digitale beveiliging voorkomt ongewenste toegang tot gegevens en waarborgt integriteit.";
        case 47:
            return "Effectief toegangsmanagement vereist identificatie en classificatie van bezoekers.";
        case 48:
            return "Proactieve beveiliging omvat inspecties en onderhoudsprogramma's.";
        case 49:
            return "Het rapporteren van dreigingen aan teamleiders is cruciaal voor veiligheid.";
        case 50:
            return "Nauwe communicatielijnen zijn essentieel voor een adequaat antwoord.";
        default:
            return "";
    }
}

// Cevabı kontrol etme fonksiyonu
function checkAnswer(questionNumber, selectedAnswer, clickedButton) {
    const resultDiv = document.getElementById(`result${questionNumber}`);
    const numberDiv = document.querySelector(`#numberContainer .number:nth-child(${questionNumber})`);

    const buttons = clickedButton.parentElement.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.remove('selected');
        if (button !== clickedButton) {
            button.classList.add('fade');
        }
    });

    clickedButton.classList.add('selected');
    const correctAnswer = answers[questionNumber];

    // Arka plan rengi sınıflarını uygulayın
    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = `<div class="true-result">Correct! ${getExplanation(questionNumber)}</div>`;
        correctCount++;
        numberDiv.classList.add('correct-solved'); // Doğru cevap için sınıf
    } else {
        resultDiv.innerHTML = `<div class="false-result">Fout! Het juiste antwoord is ${correctAnswer}. <br> Verklaring: ${getExplanation(questionNumber)}</div>`;
        incorrectCount++;
        numberDiv.classList.add('incorrect-solved'); // Yanlış cevap için sınıf
    }

    // Çözülen sorunun stilini güncelleyin
    numberDiv.classList.add('solved');

    displayScore();
}

// Cevabı kontrol etme fonksiyonu
function checkAnswer(questionNumber, selectedAnswer, clickedButton) {
    const resultDiv = document.getElementById(`result${questionNumber}`);
    const numberDiv = document.querySelector(`#numberContainer .number:nth-child(${questionNumber})`);

    const buttons = clickedButton.parentElement.querySelectorAll('.button');
    buttons.forEach(button => {
        button.disabled = true;
        button.classList.remove('selected');
        if (button !== clickedButton) {
            button.classList.add('fade');
        }
    });

    clickedButton.classList.add('selected');
    const correctAnswer = answers[questionNumber];

    // Arka plan rengi sınıflarını uygulayın
    if (selectedAnswer === correctAnswer) {
        resultDiv.innerHTML = `<div class="true-result">Correct! ${getExplanation(questionNumber)}</div>`;
        correctCount++;
        numberDiv.classList.add('correct-solved'); // Doğru cevap için sınıf
    } else {
        resultDiv.innerHTML = `<div class="false-result">Fout! Het juiste antwoord is ${correctAnswer}. <br> Verklaring: ${getExplanation(questionNumber)}</div>`;
        incorrectCount++;
        numberDiv.classList.add('incorrect-solved'); // Yanlış cevap için sınıf
    }

    // Çözülen sorunun stilini güncelleyin
    numberDiv.classList.add('solved');

    displayScore();
}

// Score gösterme fonksiyonu
function displayScore() {
    const scoreDiv = document.getElementById('score');
    const totalScore = (correctCount / questionCount) * 10;
    scoreDiv.innerHTML = `Je score is ${correctCount} van de ${questionCount} vragen. <br> Foute antwoorden: ${incorrectCount}. <br> Totale score: ${totalScore.toFixed(1)} /10 `;
    displayNumbers();
}

function navigateToQuestion(index) {
    const questions = document.querySelectorAll('.question');
    questions.forEach((question, i) => {
        question.style.display = (i === index) ? 'block' : 'none';
    });
    // Scroll naar de geselecteerde vraag
    questions[index].scrollIntoView({ behavior: "smooth" });
}

// Numara görüntüleme fonksiyonu
function displayNumbers() {
    const numberContainer = document.getElementById('numberContainer');
    numberContainer.innerHTML = '';

    for (let i = 1; i <= questionCount; i++) {
        const numberDiv = document.createElement('div');
        numberDiv.className = 'number';
        numberDiv.innerText = i;

        // Numaraya tıklama olayını ekle
        numberDiv.addEventListener('click', (e) => {
            console.log(`Number ${i} clicked`);  // Tıklama olayını kontrol etmek için
            const questions = document.querySelectorAll('.question');
            questions.forEach((q, index) => {
                q.style.display = (index + 1 === i) ? 'block' : 'none';
            });
            // Soruya kaydırma
            const questionElement = document.querySelector(`.question:nth-child(${i})`);
            if (questionElement) questionElement.scrollIntoView({ behavior: "smooth" });
        });

        // Çözülen sorular için stil ekle
        if (document.getElementById(`result${i}`).innerHTML !== '') {
            numberDiv.classList.add('solved');
        }

        numberContainer.appendChild(numberDiv);
    }
}

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
});

// Tüm soruları gösterme fonksiyonu
function showAllQuestions() {
    const questions = document.querySelectorAll('.question');
    questions.forEach(question => {
        question.style.display = 'block'; // Tüm soruları göstermek için stil ayarı
    });
}

// Yan paneli açıp kapayan fonksiyon
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('show'); // 'show' sınıfını ekle veya kaldır
}

// Event listener ekleme
document.getElementById('toggleSidebar').addEventListener('click', toggleSidebar);
document.getElementById('showAllQuestions').addEventListener('click', showAllQuestions);

// Dark mode toggle
document.getElementById('toggleButton').addEventListener('click', () => {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Buton metnini güncelle
    const isDarkMode = body.classList.contains('dark-mode');
    document.getElementById('toggleButton').textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
});

// Sayfa yüklendikten sonra numaraları göster
document.addEventListener('DOMContentLoaded', () => {
    displayNumbers();
    // Vragenlijst butonuna tıklama olayı ekleniyor
    document.querySelector('#vragenlijst').addEventListener('click', () => {
        console.log('Vragenlijst tuşuna tıklanmış'); // Konsol çıktısı
        showAllQuestions(); // Tüm soruları göster
    });
});
