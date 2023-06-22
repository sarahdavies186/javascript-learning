"use strict";

const body = document.body;
const message = document.createElement("div");
const messageText = document.createElement("p");

function showMessage() {
  message.classList.add("heading");
  messageText.textContent = "hello world";
  messageText.setAttribute("id", "message--text");
  message.append(messageText);
  body.append(message);
}

showMessage();

body.append("hello world!");

//exercise 1
const fruitList = ["apple", "banana", "tomato"];

const ulElement = document.querySelector("ul");

fruitList.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.textContent = element;
  ulElement.append(listEl);
});

//exercise 2
const imageSrc = "https://crocoder.dev/icon.png";
const divEl = document.querySelector("div");
const imgEl = document.createElement("img");
divEl.style.maxWidth = "10%";
imgEl.setAttribute("src", imageSrc);
imgEl.style.height = "auto";
imgEl.style.maxWidth = "100%";
divEl.append(imgEl);

//exercise 3
const firstList = document.querySelectorAll("ul > li:first-child");
const lastList = document.querySelectorAll("ul > li:last-child");

firstList.forEach((firstLi) => (firstLi.textContent = "first"));

lastList.forEach((lastLi) => (lastLi.textContent = "last"));
