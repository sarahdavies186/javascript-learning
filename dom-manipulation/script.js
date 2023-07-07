"use strict";

const body = document.body;
const message = document.createElement("div");
const messageText = document.createElement("p");

function showMessage() {
  message.classList.add("heading");
  messageText.textContent = "hello world";
  messageText.setAttribute("id", "message--text");
  message.insertAdjacentElement("afterBegin", messageText);

  // const newMessage = '<p class="message">This is a new message</p>';
  // message.insertAdjacentElement("afterBegin", newMessage);
  // body.append(message);
}

showMessage();

body.prepend("hello world!");

//exercise 1
const fruitList = ["apple", "banana", "tomato"];

const fruitListElement = document.querySelector("ul");

fruitList.forEach((element) => {
  const listEl = document.createElement("li");
  listEl.textContent = element;
  fruitListElement.appendChild(listEl);
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
  console.log(e.target);
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
  imageList.appendChild(list);
  list.appendChild(img);
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

//exercise 10
const yourListDiv = document.querySelector(".your-list");
const yourList = document.createElement("ul");
yourListDiv.append(yourList);

const userNumber = prompt("choose a number");
for (let i = 0; i < userNumber; i++) {
  const newList = document.createElement("li");
  newList.textContent = `${i + 1}`;
  yourList.append(newList);
}

//exercise 11
const namesArr = ["sara", "sar", "sarah"];
const namesList = document.querySelector(".names-list");

namesArr.forEach((name) => {
  const item = document.createElement("li");
  item.textContent = name;
  namesList.append(item);
});

//exercise 12
const box = document.querySelector(".box");
box.style.backgroundColor = "red";
box.textContent = "a red box";

box.addEventListener("click", function (e) {
  console.log(this);
  console.log(e);
});

box.addEventListener("click", (e) => {
  console.log(this);
  console.log(e);
});

/*
//add task
const addToDo = document.querySelector("#addToDo");
const ul = document.querySelector("ul");
console.log(addToDo);
addToDo.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const newToDo = document.createElement("li");
    newToDo.innerHTML = `<span><i class="fa fa-trash"></i></span> ${e.target.value}`;
    ul.prepend(newToDo);
    addToDo.value = "";
  }
});

//delete task

ul.addEventListener("click", function (e) {
  if (e.target.matches("span i.fa-trash")) {
    e.target.parentElement.parentElement.remove();
  }
});

// array in dropdown select
let countries = [
  "USA",
  "France",
  "Italy",
  "Brazil",
  "Colombia",
  "Belize",
  "Venezuela",
];
// your code here
const select = document.querySelector("#mySelect");
countries.forEach((country) => {
  const option = document.createElement("option");
  option.textContent = country;
  select.appendChild(option);
});

select.addEventListener("change", function (e) {
  alert(e.target.value);
});


// append to document body 
 document.body.append(el);
*/

//exercise 13

const container = document.getElementById("container");
const lastElement = container.lastElementChild;
const firstElement = container.firstElementChild;

// Reorder elements by moving the last element to the first position
container.insertBefore(lastElement, firstElement);

// exercise 14
const originalBox = document.querySelector(".orgBox");
const destination = document.getElementById("destination");

const clonedBox = originalBox.cloneNode(true);
clonedBox.textContent = "hello";
console.log(clonedBox);
destination.append(clonedBox);

//exercise 15
const helloList = document.querySelector("#hello");
const helloItems = helloList.getElementsByTagName("li");
// console.log(helloList);
// console.log(helloItems);
const array = [];
for (let i = 0; i < helloItems.length; i++) {
  array.push(helloItems[i].textContent);
}
console.log(array);
