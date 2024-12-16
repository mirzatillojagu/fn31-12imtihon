import { createCard } from "./function.js";

const input = document.querySelector("#input");
const button = document.querySelector(".search-img");
const wrapper = document.querySelector(".wrapper");
const body = document.body;
const fontSelector = document.querySelector("#font-selector");

fontSelector.addEventListener("change", function () {
    const selectedFont = fontSelector.value; 
    body.style.fontFamily = selectedFont;
});

button && button.addEventListener("click", function () {
    let sum = input.value;

    if (sum === "") {
      alert("Iltimos, qidirish uchun so'z kiriting.");
      return;
    }

    const isValidWord = /^[a-zA-Z]+$/.test(sum);
    if (!isValidWord) {
      alert("Iltimos, toʻgʻri soʻz kiriting (faqat harflar).");
      return;
    }

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${sum}`, {
      method: "GET",
    })
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        } else {
          throw new Error("Maʼlumotlarni olib boʻlmadi");
        }
      })
      .then((data) => {
        console.log(data);
        let card = createCard(data);
        wrapper.innerHTML = card;
      })
      .catch((error) => {
        console.log(error.message);
        alert("So'z topilmadi yoki xatolik yuz berdi.");
      });
  });

const btn = document.querySelector(".DayNight");
const img = document.querySelector(".oval-img");

btn.addEventListener("click", function () {
  if (body.style.backgroundColor === "black") {
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
  }

  if (img.style.marginLeft === "4px") {
    img.style.marginLeft = "-16px
