// quiz.js

let currentQuestion = 0;

// Inizializza TUTTE le ideologie a 0
const ideologyScores = {
  "Strasserismo": 0,
  "Nazional‑Bolscevismo": 0,
  "Nazional‑Sindacalismo": 0,
  "Nazional‑Anarchismo": 0,
  "Comunismo Nazionale": 0,
  "Eurasiatismo": 0,
  "Falangismo": 0,
  "Integralismo": 0,
  "Rexismo": 0,
  "Terza Via": 0,
  "Eco‑fascismo": 0,
  "Giustizia Sociale Italiana": 0,
  "Nativismo Reazionario": 0,
  "Songun Nazionale": 0,
  "Ba’athismo": 0,
  "Nasserismo": 0,
  "Peronismo": 0,
  "Kemalismo": 0,
  "Islamo‑fascismo": 0,
  "Hindutva radicale": 0,
  "Zionismo revisionista": 0,
  "Synarchismo": 0,
  "Nouvelle Droite": 0,
  "Movimento Nazionale‑Rivoluzionario Tedesco (NR)": 0,
  "Afrikaner Volkstaat Movement": 0,
  "Pan‑Germanic Socialism": 0,
  "Pan‑Asianismo rivoluzionario": 0,
  "Pan‑Slavismo corporativo": 0,
  "Revisionismo storico nazional‑sociale": 0,
  "Nazional‑socialismo culturale": 0,
  "Chavismo patriottico": 0,
  "Identitarismo paneuropeo": 0,
  "Eco‑nazionalismo": 0,
  "Nationalrevolutionäre Bewegung (Germania anni ’20–’30)": 0,
  "Movimento Nazionale‑Sindacalista Spagnolo (JONS)": 0,
  "Crocianesimo corporativista": 0,
  "Integralismo lusitano": 0,
  "Rexismo belga": 0,
  "Fascismo mussoliniano post‑moderno": 0,
  "Nazionalismo neopagano nordico": 0,
  "Black Metal Nationalism": 0,
  "Nazional‑socialismo cristiano": 0,
  "Nazional‑anarchismo guerrigliero": 0,
  "Strasserismo notte fonda": 0,
  "Nazional‑Bolscevismo clandestino": 0
};

// Riferimenti DOM
const startBtn   = document.getElementById('start-btn');
const intro      = document.getElementById('intro');
const quizC      = document.getElementById('quiz-container');
const questionEl = document.getElementById('question-text');
const answerBtns = document.querySelectorAll('.answer-btn');

// Avvia il quiz
startBtn.addEventListener('click', () => {
  intro.style.display = 'none';
  quizC.style.display  = 'block';
  showQuestion();
});

// Gestione delle risposte
answerBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const val = parseInt(btn.dataset.value, 10);
    const eff = questions[currentQuestion].effects;
    for (let [ide, weight] of Object.entries(eff)) {
      if (ideologyScores.hasOwnProperty(ide)) {
        ideologyScores[ide] += weight * val;
      }
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion();
    } else {
      // Salva e vai ai risultati
      sessionStorage.setItem('ideologyScores', JSON.stringify(ideologyScores));
      window.location.href = 'results.html';
    }
  });
});

// Mostra la domanda corrente
function showQuestion() {
  questionEl.textContent = questions[currentQuestion].text;
}
