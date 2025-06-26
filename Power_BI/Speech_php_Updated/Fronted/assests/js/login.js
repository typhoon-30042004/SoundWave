document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const role = document.getElementById('role').value;

        // Send the data to the Flask server using fetch API
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                role: role
            })
        })
        .then(response => response.json()) // Expecting JSON response from the Flask server
        .then(data => {
            if (data.success) {
                // Redirect based on the role
                switch (data.role) {
                    case 'Admin':
                        window.location.href = "/Fronted/views/admin.html";
                        break;
                    case 'Supervisor':
                        window.location.href = "/Fronted/views/supervisor.html";
                        break;
                    case 'Therapist':
                        window.location.href = "/Fronted/views/dashboard.html";
                        break;
                    default:
                        alert('Invalid role');
                }
            } else {
                alert('Login failed. ' + data.message);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during login. Please try again.');
        });
    });
});
