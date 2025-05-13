// results.js

const ideologyScores = JSON.parse(sessionStorage.getItem('ideologyScores') || '{}');
const sorted = Object.entries(ideologyScores).sort((a,b) => b[1] - a[1]);
const [topIdeology, topScore] = sorted[0] || ['Nessuna ideologia', 0];

document.getElementById('results').innerHTML = `
  <h2>Ideologia più vicina a te:</h2>
  <h3 style="color: #c62828;">🔥 ${topIdeology} 🔥</h3>
  <p>Punteggio: <strong>${topScore}</strong></p>
`;
