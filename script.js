// Step 3: Get elements
const addBtn = document.getElementById("addBtn");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

// Step 3: Event listener
addBtn.addEventListener("click", addTask);

// Optional: Press Enter to add
taskInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

// Step 4: Add task function
function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task!");
        return;
    }

    // Create elements
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    span.textContent = taskText;
    deleteBtn.textContent = "Delete";

    // Step 5: Mark complete
    span.addEventListener("click", function() {
        span.classList.toggle("completed");
    });

    // Step 6: Delete task
    deleteBtn.classList.add("delete-btn");
    deleteBtn.addEventListener("click", function() {
        li.remove();
    });

    // Append elements
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // Clear input
    taskInput.value = "";
}