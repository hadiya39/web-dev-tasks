const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  if (input.value.trim() === "") return;

  const li = document.createElement("li");
  li.textContent = input.value;

  // Mark complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete button
  const del = document.createElement("button");
  del.textContent = "delete";
  del.style.marginLeft = "10px";

  del.addEventListener("click", (e) => {
    e.stopPropagation();
    li.remove();
  });

  li.appendChild(del);
  taskList.appendChild(li);

  input.value = "";
}
