if (document.getElementById("wordForm")) {
    document.getElementById("wordForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const word = word.value.trim();
      const meaning = meaning.value.trim();
      const example = example.value.trim();
      await db.collection("words").add({ word, meaning, example });
      location.reload();
    });
  
    db.collection("words").onSnapshot((snapshot) => {
      const list = document.getElementById("wordList");
      list.innerHTML = '';
      snapshot.forEach(doc => {
        const data = doc.data();
        const li = document.createElement("li");
        li.innerHTML = `<strong>${data.word}</strong>: ${data.meaning} ${data.example ? `<br><em>${data.example}</em>` : ''}`;
        list.appendChild(li);
      });
    });
  }
  
  // Quiz logic
  async function startTest() {
    const length = parseInt(document.getElementById("testLength").value);
    const snapshot = await db.collection("words").get();
    const words = snapshot.docs.map(doc => doc.data());
    if (words.length < 4) return alert("Not enough words to start test!");
  
    const quizWords = words.sort(() => 0.5 - Math.random()).slice(0, length);
    const container = document.getElementById("quizContainer");
    container.innerHTML = '';
  
    quizWords.forEach((item, index) => {
      let options = [item.meaning];
      while (options.length < 4) {
        const random = words[Math.floor(Math.random() * words.length)].meaning;
        if (!options.includes(random)) options.push(random);
      }
      options = options.sort(() => 0.5 - Math.random());
      const qDiv = document.createElement("div");
      qDiv.innerHTML = `<p><strong>${index + 1}. ${item.word}</strong></p>` +
        options.map(opt =>
          `<label><input type="radio" name="q${index}" value="${opt}"> ${opt}</label><br>`
        ).join('');
      container.appendChild(qDiv);
    });
  }