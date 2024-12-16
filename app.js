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
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/<word>`, {
      method: "GET" 
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
        })
        .then((data) => {
           wrapper.innerHTML += card
        })

        .catch((error) => {
          console.log(error);
        }),
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


const shriftContainer = document.querySelector(".shrift2");
const shriftText = document.querySelector(".shrift");
const shriftImg = document.querySelector(".shrift-img");

document.addEventListener("DOMContentLoaded", () => {

  const shriftList = document.createElement("ul");
  shriftList.classList.add("shrift-list"); 
  shriftContainer.style.position = "relative";

  const fonts = ["sans-serif", "serif", "cursive"];
  fonts.forEach(v => {
    const listItem = document.createElement("li");
    listItem.textContent = v.charAt(0).toUpperCase() + v.slice(1);
    listItem.classList.add("shrift-item", v);

    listItem.addEventListener("click", () => {
      shriftText.textContent = listItem.textContent;
      document.body.className = "";
      document.body.classList.add(v);   
      shriftList.style.display = "none";
    });

    shriftList.appendChild(listItem);
  });

  shriftImg.addEventListener("click", () => {
    shriftList.style.display = shriftList.style.display === "none" ? "block" : "none";
  });

  shriftContainer.appendChild(shriftList);

  document.addEventListener("click", (event) => {
    if (!shriftContainer.contains(event.target)) {
      shriftList.style.display = "none";
    }
  });
});
