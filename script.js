
const button = document.getElementById("welcomeButton");
const message = document.getElementById("welcomeMessage");

button.addEventListener("click", function () {
  message.textContent = "مرحبًا بك! لقد عملت JavaScript بنجاح.";
});

const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

addTaskButton.addEventListener("click", function () {
  const task = taskInput.value.trim();

  if (task === "") {
    alert("اكتب مهمة أولًا!");
    return;
  }


const listItem = document.createElement("li");
listItem.textContent = task + " ";

const deleteButton = document.createElement("button");
deleteButton.textContent = "حذف";
deleteButton.type = "button";

deleteButton.addEventListener("click", function () {
  listItem.remove();
});

listItem.appendChild(deleteButton);
taskList.appendChild(listItem);

taskInput.value = "";

