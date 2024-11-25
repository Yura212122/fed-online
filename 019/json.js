window.onload = function(){
    document.querySelector(`#save`).addEventListener(`click`, function(){
let textel  = document.querySelector(`#text`).value;
window.sessionStorage.setItem(`myText`, textel);
    });
    document.querySelector(`#show`).addEventListener(`click`, function(){
let showEl = window.sessionStorage.getItem(`myText`);
document.querySelector(`#output`).textContent = showEl;
    });


 
 
 
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        document.getElementById('backgroundColor').value = savedColor;
    }


    document.getElementById('settingsForm').addEventListener('submit', function(event) {
        event.preventDefault();  

        const selectedColor = document.getElementById('backgroundColor').value;
       
        localStorage.setItem('backgroundColor', selectedColor);

      
        document.body.style.backgroundColor = selectedColor;
    });
    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Функція для завантаження завдань з localStorage
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return tasks;
    }
 
    function renderTasks() {
        const tasks = loadTasks();
        const taskList = document.getElementById('taskList');
        taskList.innerHTML = '';   
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;

            
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Видалити';
            deleteButton.classList.add('delete');
            deleteButton.onclick = function() {
                tasks.splice(index, 1);   
                saveTasks(tasks);         
                renderTasks();             
            };
            li.appendChild(deleteButton);

            taskList.appendChild(li);
        });
    }

     
    document.getElementById('addTaskButton').addEventListener('click', function() {
        const taskInput = document.getElementById('taskInput');
        const taskText = taskInput.value.trim();
        if (taskText) {
            const tasks = loadTasks();
            tasks.push(taskText);  
            saveTasks(tasks);      
            taskInput.value = '';  
            renderTasks();         
        }
    });

    
    console.log(JSON.stringify ([jsonString], { type: 'application/json' }));
   
   


}