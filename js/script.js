{
  const tasks = [];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });
    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toggleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButton, index) => {
      toggleDoneButton.addEventListener("click", () => {
        toggleTaskDone(index);
      });
    });

    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });
  }

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          <li class="task__item">
              <button class="task__button task__button--done js-done">
                ${task.done ? "✔" : ""}
              </button>
              <span class="task__content${task.done ? " task__content--done" : ""}">${task.content}</span>
              <button class="task__button task__button--remove js-remove">🗑️</button>
          </li>
        `;
    }

    document.querySelector(".js-task").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskItem = document.querySelector(".js-newTask");
    const newTaskContent = newTaskItem.value.trim();

    if (newTaskContent !== "") {
      addNewTask(newTaskContent);
      newTaskItem.value = "";
    }

    newTaskItem.focus();
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}