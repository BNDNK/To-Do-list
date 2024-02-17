// Set up a click event listener for the button with the id 'push'
document.querySelector('#push').onclick = function(){
    // Check if the input field with id 'newtask' is empty
    if(document.querySelector('#newtask input').value.length == 0){
        // If it's empty, show an alert and ask the user to enter a task
        alert("Please Enter a Task");
    }
    else{
        // If the input field is not empty, add a new task to the tasks list
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        // Get delete and set up click event listeners
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            //  delete button is clicked remove it  task
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        // Get all elements with  task and put click event listeners
        var tasks = document.querySelectorAll(".task");
        for(var i=0; i<tasks.length; i++){
            // When a task is clicked, toggle the 'completed' class to mark it as completed or not
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }

        // Clear after a new task
        document.querySelector("#newtask input").value = "";
    }
}
