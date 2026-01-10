// Select required elements
const input = document.querySelector("#itemInput");
const addButton = document.querySelector("#addButton");
const itemList = document.querySelector("#itemList");

// Add item on button click
addButton.addEventListener("click", () => {
  const taskText = input.value.trim();

  // Prevent adding empty tasks
  if (taskText === "") return;

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskText;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // Delete only this task on click
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  // Append delete button to list item
  li.appendChild(deleteBtn);

  // Append list item to the list
  itemList.appendChild(li);

  // Clear input field
  input.value = "";
});
