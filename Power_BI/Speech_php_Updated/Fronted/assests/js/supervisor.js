// Simulate fetching the total number of patients and pending approvals
document.addEventListener('DOMContentLoaded', function() {
    // Assuming these values are fetched from a backend or API
    const totalPatients = 150;
    const pendingApprovals = 35;

    // Displaying the fetched values
    document.getElementById('total-patients').textContent = totalPatients;
    document.getElementById('pending-approvals').textContent = pendingApprovals;
});

/**
 * Filters the list of pending reviews based on patient name, therapist name, or date.
 */
function filterReviews() {
    const patientFilter = document.getElementById('filter-patient').value.toLowerCase();
    const therapistFilter = document.getElementById('filter-therapist').value.toLowerCase();
    const dateFilter = document.getElementById('filter-date').value;

    const reviews = document.querySelectorAll('#review-list li');

    reviews.forEach(review => {
        const patient = review.getAttribute('data-patient').toLowerCase();
        const therapist = review.getAttribute('data-therapist').toLowerCase();
        const date = review.getAttribute('data-date');

        const isVisible = (patient.includes(patientFilter) || !patientFilter) &&
                          (therapist.includes(therapistFilter) || !therapistFilter) &&
                          (date === dateFilter || !dateFilter);
        
        review.style.display = isVisible ? '' : 'none';
    });
}

/**
 * Displays detailed view of the selected review.
 * @param {HTMLElement} element - The clicked review element.
 */
function viewReview(element) {
    const reviewDetails = document.getElementById('review-details');
    reviewDetails.style.display = 'block';

    // Fetching and displaying the corresponding patient and therapist details
    document.getElementById('patient-info').innerText = element.getAttribute('data-patient');
    document.getElementById('therapist-info').innerText = element.getAttribute('data-therapist');
    document.getElementById('therapy-plan-details').innerText = 'Therapy plan details for the selected case go here.';
}

/**
 * Approves the therapy plan.
 */
function approvePlan() {
    alert('The therapy plan has been approved.');
}

/**
 * Rejects the therapy plan.
 */
function rejectPlan() {
    alert('The therapy plan has been rejected.');
}

/**
 * Shows the feedback section for the supervisor to provide feedback.
 */
function provideFeedback() {
    const feedbackSection = document.getElementById('feedback-section');
    feedbackSection.style.display = 'block';
}

/**
 * Submits the feedback provided by the supervisor.
 */
function submitFeedback() {
    const feedbackText = document.getElementById('feedback-text').value;

    if (feedbackText) {
        alert('Feedback submitted: ' + feedbackText);
        document.getElementById('feedback-text').value = ''; // Clear the feedback input
        document.getElementById('feedback-section').style.display = 'none'; // Hide feedback section
    } else {
        alert('Please enter your feedback before submitting.');
    }
}

/**
 * Sends a message to the therapist.
 */
function sendMessage() {
    const message = document.getElementById('chat-message').value;

    if (message) {
        alert('Message sent: ' + message);
        document.getElementById('chat-message').value = ''; // Clear the chat input
    }
}
