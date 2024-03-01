const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = "";

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div class = "todoName">${name}</div>
    <div class = "todoDate">${dueDate}</div>
    <input type = "checkbox" name = "" class = "checkBox">
     <button class="delete-todo-button js-delete-button">Delete</button>
    `;

    todoListHTML += html;
  });

  document.querySelector(".js-todo-list").innerHTML = todoListHTML;

  document
    .querySelectorAll(".js-delete-button")
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener("click", () => {
        todoList.splice(index, 1);
        renderTodoList();
      });

      document.querySelectorAll(".checkBox").forEach((checkBox, index) => {
        checkBox.addEventListener("change", () => {
          const todoName = document.querySelectorAll(".todoName")[index];
          if (checkBox.checked) {
            todoName.classList.add("todoDone");
          } else {
            todoName.classList.remove("todoDone");
          }
        });
      });
    });
}

document.querySelector(".js-add-todo").addEventListener("click", () => {
  addTodo();
});

function addTodo() {
  const inputElement = document.querySelector(".js-name-input");
  const name = inputElement.value;

  const dateInputElement = document.querySelector(".js-due-date-input");
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name,
    dueDate,
  });
  inputElement.value = "";

  renderTodoList();
}
