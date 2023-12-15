document.addEventListener('DOMContentLoaded', function () {
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');
    var clearCompletedBtn = document.getElementById('clearCompletedBtn');
    var filterSelect = document.getElementById('filterSelect');
  
    addTaskBtn.addEventListener('click', function () {
      addTask();
    });
  
    clearCompletedBtn.addEventListener('click', function () {
      clearCompletedTasks();
    });
  
    filterSelect.addEventListener('change', function () {
      filterTasks();
    });
  
    function addTask() {
      if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
      }
  
      var newTask = document.createElement('li');
      newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <button class="completeBtn">Complete</button>
        <button class="deleteBtn">Delete</button>
      `;
  
      var completeBtn = newTask.querySelector('.completeBtn');
      completeBtn.addEventListener('click', function () {
        newTask.classList.toggle('completed');
      });
  
      var deleteBtn = newTask.querySelector('.deleteBtn');
      deleteBtn.addEventListener('click', function () {
        newTask.remove();
      });
  
      taskList.appendChild(newTask);
      taskInput.value = ''; 
    }
  
    function clearCompletedTasks() {
      var completedTasks = document.querySelectorAll('.completed');
      completedTasks.forEach(function (task) {
        task.remove();
      });
    }
  
    function filterTasks() {
      var filterValue = filterSelect.value;
      var tasks = document.querySelectorAll('#taskList li');
  
      tasks.forEach(function (task) {
        if (filterValue === 'all' || 
            (filterValue === 'active' && !task.classList.contains('completed')) ||
            (filterValue === 'completed' && task.classList.contains('completed'))) {
          task.style.display = 'flex';
        } else {
          task.style.display = 'none';
        }
      });
    }
  });
  