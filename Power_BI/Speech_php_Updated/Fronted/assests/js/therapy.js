function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('active');
}


// Function to handle logout
function logout() {
    window.location.href = "../login.html"; // Adjust the path to your login page
}

// Function to toggle dropdown menus
const dropdowns = document.querySelectorAll('.sidebar ul > li > ul.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.previousElementSibling.addEventListener('click', function() {
        this.nextElementSibling.classList.toggle('show');
    });
});

// Sample data for dashboard sections
const sampleSessions = [
    { time: "10:00 AM", patient: "John Doe", status: "Scheduled" },
    { time: "11:00 AM", patient: "Jane Smith", status: "Completed" },
    { time: "02:00 PM", patient: "Mary Johnson", status: "Scheduled" }
];

const samplePatients = [
    { name: "John Doe", therapyType: "Speech Therapy", lastSession: "2024-08-26" },
    { name: "Jane Smith", therapyType: "Occupational Therapy", lastSession: "2024-08-25" },
    { name: "Mary Johnson", therapyType: "Physical Therapy", lastSession: "2024-08-24" }
];

const sampleTherapyPlans = [
    { plan: "Speech Therapy - Plan A", status: "Pending Approval" },
    { plan: "Occupational Therapy - Plan B", status: "Active" }
];

const sampleReports = [
    { report: "John Doe - Report 1", status: "Submitted" },
    { report: "Jane Smith - Report 2", status: "In Progress" }
];

// Populate the Upcoming Sessions list
function loadSessions() {
    const sessionList = document.getElementById('session-list');
    sampleSessions.forEach(session => {
        const listItem = document.createElement('li');
        listItem.textContent = `${session.time} - ${session.patient} (${session.status})`;
        sessionList.appendChild(listItem);
    });
}

// Populate the Patient Management table
function loadPatients() {
    const patientTable = document.getElementById('patient-table').getElementsByTagName('tbody')[0];
    samplePatients.forEach(patient => {
        const row = patientTable.insertRow();
        row.insertCell(0).textContent = patient.name;
        row.insertCell(1).textContent = patient.therapyType;
        row.insertCell(2).textContent = patient.lastSession;
        const actionsCell = row.insertCell(3);
        actionsCell.innerHTML = '<button onclick="editPatient()">Edit</button> <button onclick="deletePatient()">Delete</button>';
    });
}

// Populate the Therapy Plans list
function loadTherapyPlans() {
    const therapyPlanList = document.getElementById('therapy-plan-list');
    sampleTherapyPlans.forEach(plan => {
        const listItem = document.createElement('li');
        listItem.textContent = `${plan.plan} - ${plan.status}`;
        therapyPlanList.appendChild(listItem);
    });
}

// Populate the Progress Reports list
function loadProgressReports() {
    const progressReportList = document.getElementById('progress-report-list');
    sampleReports.forEach(report => {
        const listItem = document.createElement('li');
        listItem.textContent = `${report.report} - ${report.status}`;
        progressReportList.appendChild(listItem);
    });
}

// Function to simulate patient editing (for example purposes)
function editPatient() {
    alert("Edit patient functionality goes here.");
}

// Function to simulate patient deletion (for example purposes)
function deletePatient() {
    alert("Delete patient functionality goes here.");
}

// Initialize the dashboard content
function initDashboard() {
    loadSessions();
    loadPatients();
    loadTherapyPlans();
    loadProgressReports();
}

// Call the init function once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initDashboard);

