document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.querySelector('#taskInput');
    const addTaskButton = document.querySelector('#addTaskButton'); 
    const taskList = document.querySelector('#taskList');//seleccionar el elemento addTaskButton taskList
  
    addTaskButton.addEventListener("click", function () {
      const taskText = taskInput.value.trim();
  
      if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        taskList.appendChild(newTask);

        newTask.addEventListener("click", function () {
          newTask.classList.toggle("completed");
        });
  
        newTask.addEventListener("dblclick", function () {
          taskList.removeChild(newTask);
            //remover elemento de la taskList
          
        });
          
        taskInput.value="";
      
      }
    });
  });