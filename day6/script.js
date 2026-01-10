//change its text
const paragraph = document.querySelector("p");
paragraph.textContent = "Hello from JavaScript!";

// Change its background color
const box = document.querySelector("div");
box.style.backgroundColor = "lightblue";

// Select the button
const button = document.querySelector("button");

// On button click, create and append a new paragraph inside the div
button.addEventListener("click", () => {
  const newParagraph = document.createElement("p");
  newParagraph.textContent = "New paragraph added";
  box.appendChild(newParagraph);
});
