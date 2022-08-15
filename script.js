"use strict";

const input = document.querySelector(".entry-input");
const btn = document.querySelector(".add");
const container = document.querySelector(".container");

// console.log(lists.innerHTML);

btn.addEventListener("click", function () {
  console.log("add button was clicked");

  const inputVal = input.value;

  if (!input.value) {
    alert("Please fill a task");
  } else {
    console.log("Typing");

    const addingTask = document.createElement("div");
    addingTask.classList.add("toDos");

    container.appendChild(addingTask);

    const addingLists = document.createElement("div");
    addingLists.classList.add("lists");

    addingTask.appendChild(addingLists);

    const text = document.createElement("input");
    text.classList.add("text");
    text.type = "text";
    text.value = inputVal;
    text.setAttribute("readonly", "readonly");

    addingLists.appendChild(text);

    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.innerText = " Edit";

    addingTask.appendChild(editButton);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    addingTask.appendChild(deleteButton);
    deleteButton.innerText = " Delete";

    input.value = "";

    editButton.addEventListener("click", function () {
      if (editButton.innerText === "Edit") {
        text.removeAttribute("readonly");
        editButton.innerText = "Save";
      } else {
        text.setAttribute("readonly", "readonly");
        editButton.innerText = "Save";
      }
    });

    deleteButton.addEventListener("click", function () {
      const feedback = prompt("Delete this task permanetly? Y / N");
      if (feedback === "Y") {
        container.removeChild(addingTask);
      } else {
        text.setAttribute("readonly", "readonly");
        editButton.innerText = "Edit";
      }
    });
  }
});
