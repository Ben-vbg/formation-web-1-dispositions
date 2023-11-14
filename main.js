// Paramètres du graphique
  const ctx = document.getElementById('chart-1');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Red', 'Blue'],
      datasets: [
        {
          label: 'Dataset 1',
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1
        },
        {
          label: 'Dataset 2',
          data: [5, 21, 38, 26, 12, 3],
          borderWidth: 1
        }
    ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Fonction pour calculer le temps de lecture
  function readingTime() {
    const text = document.getElementById("article").innerText;
    const wpm = 225;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wpm);
    document.getElementById("temps").innerText = "~ " + time + " minutes";
  }
  // lancement de la fonction
  readingTime();


  const element = document.getElementById("image-compare");
  const viewer = new ImageCompare(element).mount();
