import { createCard } from "./function.js";

const input = document.querySelector("#input");
const button = document.querySelector(".search-img");
const wrapper = document.querySelector(".wrapper");

button && button.addEventListener("click", function () {
    let sum = input.value;
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
        let card = createCard;
        wrapper.innerHTML = card;
      })
      .catch((error) => {
        console.log(error.message);
        alert(error);
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
    img.style.marginLeft = "-16px";
    img.style.padding = "1px";
  } else {
    img.style.marginLeft = "4px";
  }
});
