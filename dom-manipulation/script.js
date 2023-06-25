"use strict";

const body = document.body;
const message = document.createElement("div");
const messageText = document.createElement("p");

function showMessage() {
  message.classList.add("heading");
  messageText.textContent = "hello world";
  messageText.setAttribute("id", "message--text");
  message.insertAdjacentElement("afterBegin", messageText);
  body.append(message);
}

showMessage();

body.prepend("hello world!");

//exercise 1
const fruitList = ["apple", "banana", "tomato"];

const fruitListElement = document.querySelector("ul");

fruitList.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.textContent = element;
  fruitListElement.append(listEl);
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

//exercise 4
const listApp = document.querySelector("#list-app");

const form = document.createElement("form");
const userInput = document.createElement("input");
const submitBtn = document.createElement("input");
const ulElement = document.createElement("ul");

submitBtn.setAttribute("type", "submit");

form.append(userInput, submitBtn);
listApp.append(ulElement, form);

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  const listElement = document.createElement("li");
  listElement.textContent = userInput.value;
  ulElement.append(listElement);
  userInput.value = "";
});

ulElement.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    const newText = prompt("Enter new text:");
    e.target.textContent = newText;
  }
});
