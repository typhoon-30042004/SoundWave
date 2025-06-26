document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById("sidebar");
    const mainContent = document.getElementById("mainContent");
    const sidebarToggle = document.getElementById("sidebarToggle");

    sidebarToggle.addEventListener("click", function() {
        sidebar.classList.toggle("closed");
        mainContent.classList.toggle("shifted");
    });

    // Initialize Charts
    const ctxProgress = document.getElementById("progressChart").getContext("2d");
    const ctxSessionCount = document.getElementById("sessionCountChart").getContext("2d");
    const ctxGoals = document.getElementById("goalsChart").getContext("2d");

    const progressChart = new Chart(ctxProgress, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Patient Progress (%)',
                data: [65, 59, 80, 81, 56, 55, 40],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const sessionCountChart = new Chart(ctxSessionCount, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: '# of Sessions',
                data: [12, 19, 3, 5, 2, 3, 7],
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const goalsChart = new Chart(ctxGoals, {
        type: 'pie',
        data: {
            labels: ['Achieved', 'In Progress', 'Pending'],
            datasets: [{
                label: 'Therapy Goals',
                data: [10, 20, 30],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
});

// Add New Task
function addTask() {
    const taskList = document.getElementById("taskList");
    const newTaskInput = document.getElementById("newTaskInput");
    const newTaskText = newTaskInput.value.trim();

    if (newTaskText !== "") {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox"> ${newTaskText} <button onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        newTaskInput.value = ""; // Clear the input field after adding
    }
}

// Delete Task
function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
