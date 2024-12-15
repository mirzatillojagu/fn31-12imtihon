const input = document.querySelector("#input");
const button = document.querySelector(".search-img");

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

button && button.addEventListener("click", function () {
  const word = input.value;
  if (!word) return;

  fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    method: "GET"
  
        .then(response => {
          if (response.status === 200) {
            return response.json();
          }
        })
         .then(data => {
           const cardHtml = createCard(data);
          })
         .catch(error => {
           console.error(error);
          });
});



const btn = document.querySelector(".DayNight"); 
const img = document.querySelector('.oval-img');

btn.addEventListener("click", function () {
  const body = document.body; 
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black"; 
  } else {
    body.style.backgroundColor = "black"; 
    body.style.color = "white";
  }
  

  if (img.style.marginRight = '4px') {
    img.style.marginLeft = '4px'
  } else if ( img.style.marginLeft = '4px') {
    img.style.marginRight = '4px'
  }

});



