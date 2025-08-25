let taskInput = document.querySelector("#addTask");
let taskBtn = document.querySelector(".addBtn");
let list = document.querySelector(".todo-list");

const addTask = () => {
  const taskValue = taskInput.value;
  const listItem = document.createElement("li");
  const deleteBtn = document.createElement("button");
  listItem.innerText = taskValue;
  list.append(listItem);
  deleteBtn.innerText = "X";
  deleteBtn.classList.add("deleteTask");
  listItem.append(deleteBtn);
  taskInput.value = "";
  deleteBtn.addEventListener("click", () => {
    listItem.remove();
  });
};

taskBtn.addEventListener("click", addTask);
