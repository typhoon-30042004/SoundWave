document.getElementById('forgotPasswordForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;

    fetch('/forgot-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        const messageDiv = document.getElementById('message');
        if (data.success) {
            messageDiv.textContent = 'A password reset link has been sent to your email.';
        } else {
            messageDiv.textContent = 'There was an error. Please try again.';
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
