
  window.onload = function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) {
      alert("Please login first.");
      window.location.href = "../index.html";
      return;
    }
//  const fullName = document.getElementById("fullname");
    // Personalize heading
    const heading = document.querySelector('.todo-container h2');
    heading.textContent = `Welcome ${currentUser.fullName}, to your To-Do List`;

    const todosKey = currentUser.email + "_tasks";
    let tasks = JSON.parse(localStorage.getItem(todosKey)) || [];

    const todoForm = document.getElementById("todo-form");
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");

    // Render existing tasks
    tasks.forEach(addTaskToDOM);

    // Add new task
    todoForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const taskText = todoInput.value.trim();
      if (taskText === "") return;

      const newTask = {
        task: taskText,
        createdBy: currentUser,
        isTaskCompleted: false,
      };

      tasks.push(newTask);
      localStorage.setItem(todosKey, JSON.stringify(tasks));
      addTaskToDOM(newTask);
      todoInput.value = "";
    });

    // Function to add task to the DOM
    function addTaskToDOM(task) {
      const li = document.createElement("li");
      li.textContent = task.task;

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.onclick = function () {
        todoList.removeChild(li);
        tasks = tasks.filter(t => t.task !== task.task);
        localStorage.setItem(todosKey, JSON.stringify(tasks));
      };

      li.appendChild(deleteBtn);
      todoList.appendChild(li);
    }
  };

  // Logout function
  function logout() {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  }
















// const todoForm = document.getElementById("todo-task");
// const username = document.getElementById("username");
// const logoutBtn = document.getElementById("logout-btn");

// const currentUser = JSON.parse(localStorage.getItem("currentUser"));

// username.innerText = currentUser.fullName;

// logoutBtn.addEventListener("click", function () {
//   localStorage.removeItem("currentUser");
//   window.location.href = "../index.html";
// });

// todoForm.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const task = event.target.task.value;

//   const todo = {
//     task: task,
//     createdBy: {
//       ...currentUser,
//     },
//     isTaskCompleted: false,
//   };

//   const todos = JSON.parse(localStorage.getItem("todos")) || [];

//   todos.push(todo);

//   localStorage.setItem("todos", JSON.stringify(todos));
//   alert("Task created successfully");
//   event.target.reset();
// });




// // todo-js
// // Check if user is logged in
// window.onload = function () {
//     const currentUser = localStorage.getItem('currentUser');
//     if (!currentUser && window.location.pathname.includes('home.html')) {
//         alert('Please login first.');
//         window.location.href = 'login.html';
//     } else if (currentUser) {
//         const user = JSON.parse(localStorage.getItem(currentUser));
//         const heading = document.querySelector('.todo-container h2');
//         heading.textContent = `Welcome ${user.fullName}, to your To-Do List`;
//     }
// };

// // Logout function
// function logout() {
//     localStorage.removeItem('currentUser');
//     window.location.href = 'login.html';
// }

// // To-Do list logic
// document.addEventListener("DOMContentLoaded", () => {
//     const todoForm = document.getElementById("todo-form");
//     const todoInput = document.getElementById("todo-input");
//     const todoList = document.getElementById("todo-list");

//     const currentUser = localStorage.getItem("currentUser");
//     if (!currentUser) return;

//     // Load tasks from localStorage
//     let tasks = JSON.parse(localStorage.getItem(currentUser + "_tasks")) || [];
//     tasks.forEach(task => addTaskToDOM(task));

//     // Add task
//     todoForm.addEventListener("submit", function (e) {
//         e.preventDefault();
//         const task = todoInput.value.trim();
//         if (task !== "") {
//             tasks.push(task);
//             localStorage.setItem(currentUser + "_tasks", JSON.stringify(tasks));
//             addTaskToDOM(task);
//             todoInput.value = "";
//         }
//     });

//     // Add task to DOM
//     function addTaskToDOM(task) {
//         const li = document.createElement("li");
//         li.textContent = task;

//         const deleteBtn = document.createElement("button");
//         deleteBtn.textContent = "Delete";
//         deleteBtn.onclick = function () {
//             todoList.removeChild(li);
//             tasks = tasks.filter(t => t !== task);
//             localStorage.setItem(currentUser + "_tasks", JSON.stringify(tasks));
//         };
//         li.appendChild(deleteBtn);
//         todoList.appendChild(li);
//     }
// });