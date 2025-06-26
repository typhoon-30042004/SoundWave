// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get the form and input elements
    const signupForm = document.getElementById('signupForm');
    const usernameInput = document.getElementById('username');
    const phoneInput = document.getElementById('phone');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirm-password');
    
    // Error display function
    function showError(input, message) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = message;
        input.style.borderColor = 'red';
    }

    // Function to clear error messages
    function clearError(input) {
        const formGroup = input.parentElement;
        const errorMessage = formGroup.querySelector('.error-message');
        errorMessage.innerText = '';
        input.style.borderColor = '#ddd';
    }

    // Validate email format
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Validate phone number (basic pattern: digits only)
    function validatePhone(phone) {
        const re = /^[0-9]{10}$/;
        return re.test(phone);
    }

    // Check if passwords match
    function checkPasswordsMatch() {
        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, 'Passwords do not match');
            return false;
        }
        clearError(confirmPasswordInput);
        return true;
    }

    // Form submission event
    signupForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission for validation

        let isValid = true;

        // Username validation
        if (usernameInput.value.trim() === '') {
            showError(usernameInput, 'Username is required');
            isValid = false;
        } else {
            clearError(usernameInput);
        }

        // Phone validation
        if (!validatePhone(phoneInput.value)) {
            showError(phoneInput, 'Invalid phone number');
            isValid = false;
        } else {
            clearError(phoneInput);
        }

        // Email validation
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, 'Invalid email address');
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Password validation
        if (passwordInput.value.length < 6) {
            showError(passwordInput, 'Password must be at least 6 characters');
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        // Confirm password validation
        if (!checkPasswordsMatch()) {
            isValid = false;
        }

        // Submit form if all validations pass
        if (isValid) {
            signupForm.submit(); // Or handle the form data as needed
        }
    });

    // Additional event listeners for real-time validation
    passwordInput.addEventListener('input', checkPasswordsMatch);
    confirmPasswordInput.addEventListener('input', checkPasswordsMatch);
});
