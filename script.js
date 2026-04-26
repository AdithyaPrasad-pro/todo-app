let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  displayTasks();

  input.value = "";
}

function displayTasks() {
  let list = document.getElementById("taskList");
  list.innerHTML = "";

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.innerText = task;

    let btn = document.createElement("button");
    btn.innerText = "X";

    btn.onclick = function (event) {
      event.stopPropagation();
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      displayTasks();
    };

    li.appendChild(btn);
    list.appendChild(li);
  });
}
displayTasks();