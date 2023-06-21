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
