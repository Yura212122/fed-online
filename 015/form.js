window.onload = function(){


document.getElementById('currencyForm').addEventListener('submit', function(event) {
    event.preventDefault();  
 
    const amount = parseFloat(document.getElementById('amount').value);
    const exchangeRate = parseFloat(document.getElementById('exchangeRate').value);
 
    if (isNaN(amount) || isNaN(exchangeRate) || amount <= 0 || exchangeRate <= 0) {
        document.getElementById('result').textContent = "Будь ласка, введіть коректні значення.";
        return;
    }
 
    const convertedAmount = amount * exchangeRate;

  
    document.getElementById('result').textContent = `Результат: ${convertedAmount.toFixed(2)}`;
});
function addTask() {
   
    const taskInput = document.getElementById('taskInput');
    const taskName = taskInput.value.trim();

   
    if (taskName !== '') {
        
        const taskList = document.getElementById('taskList');

         
        const li = document.createElement('li');

      
        li.textContent = taskName;
 
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Видалити';
        deleteButton.className = 'delete-btn';

        
        deleteButton.onclick = function() {
            taskList.removeChild(li);
        };

       
        li.appendChild(deleteButton);
 
        taskList.appendChild(li);

       
        taskInput.value = '';
    } else {
        alert('Будь ласка, введіть назву задачі!');
    }
}
 
}
