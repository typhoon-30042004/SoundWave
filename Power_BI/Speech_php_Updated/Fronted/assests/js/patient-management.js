document.addEventListener('DOMContentLoaded', function () {
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    toggleSidebarButton.addEventListener('click', function () {
        sidebar.classList.toggle('collapsed');
        mainContent.classList.toggle('collapsed');
    });

    // Add other event listeners and dynamic functionalities
    const addPatientForm = document.getElementById('add-patient-form');
    const patientTableBody = document.getElementById('patient-table-body');
    const patientModal = document.getElementById('patient-modal');
    const patientProfile = document.getElementById('patient-profile');

    // Mock data
    const patients = [
        {
            name: "John Doe",
            age: 30,
            dob: "1993-01-10",
            gender: "Male",
            contact: "1234567890",
            address: "123 Street, City",
            therapyPlan: "Plan A"
        },
        // Add more mock patients if needed
    ];

    function loadPatients() {
        patientTableBody.innerHTML = '';
        patients.forEach((patient, index) => {
            const row = document.createElement('tr');

            row.innerHTML = `
                <td>${patient.name}</td>
                <td>${patient.age}</td>
                <td>${patient.dob}</td>
                <td>${patient.gender}</td>
                <td>${patient.contact}</td>
                <td>${patient.address}</td>
                <td>${patient.therapyPlan}</td>
                <td class="actions">
                    <button onclick="editPatient(${index})">Edit</button>
                    <button onclick="deletePatient(${index})">Delete</button>
                </td>
            `;

            patientTableBody.appendChild(row);
        });
    }

    loadPatients();

    addPatientForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const newPatient = {
            name: document.getElementById('patient-name').value,
            age: document.getElementById('patient-age').value,
            dob: document.getElementById('patient-dob').value,
            gender: document.getElementById('patient-gender').value,
            contact: document.getElementById('patient-contact').value,
            address: document.getElementById('patient-address').value,
            therapyPlan: document.getElementById('therapy-plan').value
        };

        patients.push(newPatient);
        loadPatients();
        addPatientForm.reset();
    });

    window.editPatient = function (index) {
        const patient = patients[index];
        document.getElementById('patient-name').value = patient.name;
        document.getElementById('patient-age').value = patient.age;
        document.getElementById('patient-dob').value = patient.dob;
        document.getElementById('patient-gender').value = patient.gender;
        document.getElementById('patient-contact').value = patient.contact;
        document.getElementById('patient-address').value = patient.address;
        document.getElementById('therapy-plan').value = patient.therapyPlan;

        patients.splice(index, 1);
        loadPatients();
    };

    window.deletePatient = function (index) {
        patients.splice(index, 1);
        loadPatients();
    };

    window.closeModal = function () {
        patientModal.style.display = "none";
    };
    
    window.openPatientProfile = function (index) {
        const patient = patients[index];
        patientProfile.innerHTML = `
            <p><strong>Name:</strong> ${patient.name}</p>
            <p><strong>Age:</strong> ${patient.age}</p>
            <p><strong>DOB:</strong> ${patient.dob}</p>
            <p><strong>Gender:</strong> ${patient.gender}</p>
            <p><strong>Contact:</strong> ${patient.contact}</p>
            <p><strong>Address:</strong> ${patient.address}</p>
            <p><strong>Therapy Plan:</strong> ${patient.therapyPlan}</p>
        `;
        patientModal.style.display = "block";
    };

    window.sendReminder = function () {
        alert("Reminder sent!");
    };

    window.generateReport = function () {
        alert("Report generated!");
    };
});