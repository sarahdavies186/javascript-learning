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

// firstList.forEach((firstLi) => (firstLi.textContent = "first"));

// lastList.forEach((lastLi) => (lastLi.textContent = "last"));

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

//exercise 5

const imageList = document.querySelector(".image-list");
imageList.style.listStyle = "none";

for (let i = 0; i < 10; i++) {
  const list = document.createElement("li");
  const img = document.createElement("img");
  img.src = "https://picsum.photos/200";
  imageList.append(list);
  list.append(img);
}

//exercise 6

const userText = document.querySelector(".user-text");

const userInputForm = document.createElement("input");
const userInputSubmitBtn = document.createElement("input");
userInputSubmitBtn.setAttribute("type", "submit");

userText.append(userInputForm, userInputSubmitBtn);

userInputSubmitBtn.addEventListener("click", function (e) {
  const userInputText = document.createElement("p");
  userInputText.textContent = userInputForm.value;
  userText.append(userInputText);
  userInputForm.value = "";
});

//exercise 7

const buttonDiv = document.querySelector(".button");
const button = document.createElement("button");
button.textContent = "Click";
buttonDiv.append(button);

button.addEventListener("click", function () {
  button.textContent = "Clicked!";
});

//exercise 8
const paragraph = document.createElement("p");
paragraph.textContent = "hello my name is Sarah";
const newButton = document.createElement("button");
newButton.textContent = "submit";

buttonDiv.append(paragraph, newButton);

newButton.addEventListener("click", function () {
  paragraph.textContent = "text updated!";
});

//exercise 9
const myText = document.querySelector(".my-text");

const textButton = document.createElement("button");
textButton.textContent = "click me";
myText.append(textButton);

textButton.addEventListener("click", function () {
  const randomInt = (min, max) =>
    Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = () =>
    `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
  myText.style.backgroundColor = randomColor();
});
