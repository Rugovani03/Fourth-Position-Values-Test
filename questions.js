const questions = [
  // ECONOMIA E STATO
  {
    text: "Lo Stato deve controllare completamente i mezzi di produzione.",
    effects: { "Nazional-Bolscevismo": 2, "Strasserismo": 2, "Socialismo Nazionale Europeo": 2 }
  },
  {
    text: "Una pianificazione economica centralizzata è preferibile al libero mercato.",
    effects: { "Nazional-Bolscevismo": 2, "Eurasianismo": 1, "Socialismo Nazionale Europeo": 2 }
  },
  {
    text: "Le cooperative e le imprese collettivizzate sono superiori al capitalismo privato.",
    effects: { "Strasserismo": 2, "Nazional-Bolscevismo": 1, "Nazional-Sindacalismo": 2 }
  },
  {
    text: "Lo Stato deve intervenire per garantire giustizia economica e dignità a tutti.",
    effects: { "Strasserismo": 2, "Socialismo Patriottico": 2, "Nazional-Bolscevismo": 1 }
  },
  {
    text: "Il lavoro manuale deve essere rivalutato e considerato base della società.",
    effects: { "Nazional-Sindacalismo": 2, "Strasserismo": 1, "Eco-Nazionalismo": 1 }
  },

  // CULTURA E NAZIONE
  {
    text: "La cultura nazionale è sacra e deve essere difesa.",
    effects: { "Eurasianismo": 2, "Nazional-Bolscevismo": 1, "Eco-Nazionalismo": 1 }
  },
  {
    text: "I popoli devono restare fedeli alle loro tradizioni e identità.",
    effects: { "Nazional-Bolscevismo": 1, "Strasserismo": 1, "Eurasianismo": 2 }
  },
  {
    text: "Il multiculturalismo indebolisce la coesione nazionale.",
    effects: { "Eurasianismo": 2, "Strasserismo": 1, "Nazional-Anarchismo": 1 }
  },
  {
    text: "Ogni nazione ha un'anima spirituale unica che va protetta.",
    effects: { "Eurasianismo": 2, "Eco-Nazionalismo": 1, "Nazional-Comunitarismo": 2 }
  },
  {
    text: "L'internazionalismo culturale è un'arma del globalismo.",
    effects: { "Nazional-Bolscevismo": 1, "Eurasianismo": 2, "Anarco-Nazionalismo": 1 }
  },

  // RIVOLUZIONE
  {
    text: "Solo una rivoluzione violenta può cambiare davvero la società.",
    effects: { "Nazional-Bolscevismo": 2, "Strasserismo": 1, "Anarco-Nazionalismo": 2 }
  },
  {
    text: "La borghesia liberale deve essere rovesciata.",
    effects: { "Strasserismo": 2, "Nazional-Bolscevismo": 2, "Nazional-Sindacalismo": 1 }
  },
  {
    text: "Serve una nuova élite spirituale rivoluzionaria.",
    effects: { "Eurasianismo": 2, "Nazional-Comunitarismo": 2, "Eco-Nazionalismo": 1 }
  },
  {
    text: "Non si può riformare il sistema: va distrutto e ricostruito dalle fondamenta.",
    effects: { "Anarco-Nazionalismo": 2, "Nazional-Bolscevismo": 1, "Populismo Rivoluzionario": 2 }
  },
  {
    text: "Serve un nuovo ordine spirituale, oltre il materialismo.",
    effects: { "Eurasianismo": 2, "Nazional-Comunitarismo": 1, "Eco-Nazionalismo": 1 }
  },

  // AUTORITÀ E COMUNITÀ
  {
    text: "La società deve essere fondata su una forte autorità morale e spirituale.",
    effects: { "Eurasianismo": 2, "Nazional-Comunitarismo": 1, "Strasserismo": 1 }
  },
  {
    text: "La comunità viene prima dell'individuo.",
    effects: { "Nazional-Sindacalismo": 2, "Nazional-Comunitarismo": 2, "Socialismo Patriottico": 1 }
  },
  {
    text: "Ogni cittadino deve contribuire al bene comune.",
    effects: { "Nazional-Sindacalismo": 2, "Socialismo Patriottico": 2, "Eco-Nazionalismo": 1 }
  },
  {
    text: "Le élite tecnocratiche hanno distrutto il legame tra popolo e potere.",
    effects: { "Populismo Rivoluzionario": 2, "Strasserismo": 2, "Nazional-Anarchismo": 1 }
  },
  {
    text: "Serve una democrazia organica fondata su comunità locali e sindacati.",
    effects: { "Nazional-Sindacalismo": 2, "Nazional-Comunitarismo": 2, "Strasserismo": 1 }
  },

  // ANTIGLOBALISMO E ANTIIMPERIALISMO
  {
    text: "La globalizzazione è uno strumento del dominio capitalista.",
    effects: { "Nazional-Bolscevismo": 2, "Strasserismo": 2, "Eurasianismo": 2 }
  },
  {
    text: "Le multinazionali devono essere espropriate.",
    effects: { "Nazional-Bolscevismo": 2, "Strasserismo": 2, "Nazional-Sindacalismo": 1 }
  },
  {
    text: "L'Unione Europea è una gabbia tecnocratica e oligarchica.",
    effects: { "Nazional-Bolscevismo": 1, "Eurasianismo": 2, "Populismo Rivoluzionario": 2 }
  },
  {
    text: "La NATO è uno strumento dell’imperialismo angloamericano.",
    effects: { "Nazional-Bolscevismo": 2, "Eurasianismo": 2, "Strasserismo": 1 }
  },
  {
    text: "Il Sud Globale deve allearsi contro il sistema occidentale.",
    effects: { "Eurasianismo": 2, "Nazional-Bolscevismo": 2, "Socialismo Patriottico": 1 }
  },

  // AMBIENTE E SPIRITUALITÀ
  {
    text: "La natura è sacra e deve essere protetta dal consumismo.",
    effects: { "Eco-Nazionalismo": 2, "Nazional-Comunitarismo": 1, "Strasserismo": 1 }
  },
  {
    text: "Il progresso tecnologico cieco è una minaccia per l'umanità.",
    effects: { "Eco-Nazionalismo": 2, "Eurasianismo": 1, "Nazional-Anarchismo": 2 }
  },
  {
    text: "Serve una vita più semplice, rurale e spirituale.",
    effects: { "Eco-Nazionalismo": 2, "Nazional-Comunitarismo": 2, "Nazional-Anarchismo": 1 }
  },
  {
    text: "L’uomo moderno è disconnesso dalle sue radici naturali e spirituali.",
    effects: { "Eurasianismo": 2, "Eco-Nazionalismo": 1, "Strasserismo": 1 }
  },
  {
    text: "La decrescita è necessaria per salvare il pianeta.",
    effects: { "Eco-Nazionalismo": 2, "Nazional-Comunitarismo": 2, "Socialismo Patriottico": 1 }
  },

  // SOVRANITÀ E GUERRA
  {
    text: "Ogni nazione ha diritto alla piena sovranità economica e politica.",
    effects: { "Nazional-Bolscevismo": 2, "Socialismo Patriottico": 2, "Eurasianismo": 1 }
  },
  {
    text: "È legittimo difendere militarmente la propria nazione e identità.",
    effects: { "Nazional-Bolscevismo": 1, "Nazional-Comunitarismo": 1, "Populismo Rivoluzionario": 1 }
  },
  {
    text: "La resistenza armata è giusta contro l’oppressione globale.",
    effects: { "Nazional-Bolscevismo": 2, "Anarco-Nazionalismo": 2, "Strasserismo": 1 }
  },
  {
    text: "Un blocco multipolare è necessario per rompere l’unipolarismo USA.",
    effects: { "Eurasianismo": 2, "Nazional-Bolscevismo": 1 }
  },
  {
    text: "Le guerre moderne sono guerre del capitale contro i popoli.",
    effects: { "Strasserismo": 2, "Nazional-Bolscevismo": 2, "Eco-Nazionalismo": 1 }
  },

  // ORDINE SOCIALE E TRADIZIONE
  {
    text: "I valori tradizionali sono fondamentali per una società sana.",
    effects: { "Eurasianismo": 2, "Nazional-Comunitarismo": 2, "Nazional-Bolscevismo": 1 }
  },
  {
    text: "La famiglia è il nucleo fondamentale della civiltà.",
    effects: { "Socialismo Patriottico": 2, "Eurasianismo": 1, "Nazional-Sindacalismo": 1 }
  },
  {
    text: "Le moderne ideologie woke stanno distruggendo l’identità del popolo.",
    effects: { "Strasserismo": 2, "Nazional-Bolscevismo": 1, "Eurasianismo": 1 }
  },
  {
    text: "Il legame tra generazioni è sacro.",
    effects: { "Nazional-Comunitarismo": 2, "Eco-Nazionalismo": 1 }
  },
  {
    text: "La decadenza morale è un sintomo della fine dell’Occidente.",
    effects: { "Eurasianismo": 2, "Nazional-Bolscevismo": 1, "Nazional-Comunitarismo": 1 }
  },

  // CONCLUSIONI
  {
    text: "Serve una sintesi tra socialismo e patriottismo.",
    effects: { "Socialismo Patriottico": 3, "Strasserismo": 2, "Nazional-Bolscevismo": 1 }
  },
  {
    text: "Destra e sinistra sono superate: serve una nuova sintesi.",
    effects: { "Populismo Rivoluzionario": 2, "Nazional-Bolscevismo": 1, "Anarco-Nazionalismo": 2 }
  },
  {
    text: "Serve una nuova Internazionale dei popoli contro l'élite globalista.",
    effects: { "Nazional-Bolscevismo": 2, "Eurasianismo": 2, "Strasserismo": 1 }
  },
  {
    text: "Il futuro è nella riconquista della nostra identità collettiva.",
    effects: { "Nazional-Comunitarismo": 2, "Eco-Nazionalismo": 1 }
  },
  {
    text: "La Quarta Posizione rappresenta il vero superamento del sistema.",
    effects: { "Nazional-Bolscevismo": 2, "Strasserismo": 2, "Eurasianismo": 2, "Populismo Rivoluzionario": 2 }
  }
];
