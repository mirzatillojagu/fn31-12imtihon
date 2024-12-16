function createCard(data) {
    return `
      <div id="card">
        <h1>${data.word}</h1>
        <h4>${data.phonetic}</h4>
        <h6>${data.meanings}</h6>
        <h3>${data.meanings}</h3>
        <p>${data.meanings}</p>
        <h2>${data.meanings}</h2>
        <h3>${data.meanings}</h3>
      </div>
    `;
  }


export {createCard}