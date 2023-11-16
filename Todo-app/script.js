const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

// Retrieve todos from local storage or initialize an empty array
const todos = JSON.parse(localStorage.getItem("todos")) || [];

// Populate the initial todos
if (todos) {
    todos.forEach((todo) => {
        addTodo(todo);
    });
}

// Add submit event listener to the form
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Pass input value to addTodo function
    addTodo();
});

// Function to add a new todo
function addTodo(todo) {
    let todoText = input.value;

    // Use existing todo text if provided
    if (todo) {
        todoText = todo.text;
    }

    if (todoText) {
        const todoEl = document.createElement("li");

        // Add completed class if todo is completed
        if (todo && todo.completed) {
            todoEl.classList.add("completed");
        }

        todoEl.innerText = todoText;

        // Toggle completed class on click
        todoEl.addEventListener("click", () => {
            todoEl.classList.toggle("completed");
            updateLS();
        });

        // Remove todo on right-click
        todoEl.addEventListener("contextmenu", (e) => {
            e.preventDefault();
            todoEl.remove();
            updateLS();
        });

        // Append the new todo to the list
        todosUL.appendChild(todoEl);

        // Clear input field
        input.value = "";

        // Update local storage
        updateLS();
    }
}

// Function to update local storage with current todos
function updateLS() {
    const todosEl = document.querySelectorAll("li");
    const updatedTodos = [];

    // Iterate through todos and update the array
    todosEl.forEach((todoEl) => {
        updatedTodos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed"),
        });
    });

    // Save the updated array to local storage
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
}
