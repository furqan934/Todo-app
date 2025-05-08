
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














