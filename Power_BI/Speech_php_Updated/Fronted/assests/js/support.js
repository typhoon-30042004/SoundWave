// Function to handle form submission
document.getElementById('supportForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from submitting normally

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Placeholder for form submission logic (e.g., sending data to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);
    document.getElementById('supportForm').reset(); // Clear form fields
});

// Placeholder function for live chat
function startChat() {
    alert('Live chat is not yet available. Please contact us via the form.');
}
