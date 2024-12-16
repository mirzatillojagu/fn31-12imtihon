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
  let sum=input.value;
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${sum}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status == 200) {
          return response.json();
        }
      })
      .then((data) => {
        console.log(data);
        let card = createCard(data);
        wrapper.innerHTML = card;
      })
      .catch((error) => {
        console.log(error.message);
      });
  });


const btn = document.querySelector(".DayNight");
const img = document.querySelector(".oval-img");
const body = document.body;

btn.addEventListener("click", function () {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }

  if (img.style.marginLeft === "4px") {
    img.style.marginLeft = "-15px";
  } else {
    img.style.marginLeft = "4px";
  }
});

         