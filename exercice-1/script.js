const form = document.getElementById("taskForm"); // document.querySelector('#form');
const taskInput = document.getElementById("taskInput");
const errorMessage = document.querySelector(".text-error");
const tasksContainer = document.querySelector(".tasksContainer");

let newTaskData = "";

taskInput.addEventListener("input", (event) => {
  const value = event.target.value;
  newTaskData = value;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  errorMessage.style.display = "none";

  if (!newTaskData.trim().length) {
    errorMessage.style.display = "block";
    return;
  }

  const task = document.createElement('li');
  task.textContent = newTaskData.trim();
  task.addEventListener('click', () => {
    task.classList.toggle('done');
  });

  // elementParent.appendChild(nouvelElement);
  tasksContainer.appendChild(task);

  newTaskData = "";
  form.reset();
});
