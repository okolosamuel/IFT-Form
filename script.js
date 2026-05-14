document.getElementById('registrationForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const errors = {};
    const fullName = document.getElementById('fullName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const genderElems = document.getElementsByName('gender');
    const dob = document.getElementById('dob').value;
    const course = document.getElementById('course').value;

    // Clear previous errors
    document.querySelectorAll('.error').forEach(el => el.remove());

    // Helper validation functions
    function isNotEmpty(value) { return value !== ''; }
    function isValidEmail(email) {
        // Basic email format check
        return email.includes('@') && email.includes('.');
    }


    // Full Name validation
    if (!fullName) errors.fullName = 'Full Name is required';

    // Password validation
    if (password.length < 6) errors.password = 'Password must be at least 6 characters';
    // Confirm Password validation
    if (confirmPassword !== password) errors.confirmPassword = 'Passwords do not match';
    // Gender validation
    const selectedGender = Array.from(genderElems).find(el => el.checked);
    if (!selectedGender) {
        errors.gender = 'Please select a gender';
    }
    // DOB validation
    if (!dob) errors.dob = 'Date of Birth is required';
    // Course validation
    if (!course) errors.course = 'Please select a course of study';

    // Display errors next to fields
    function showError(element, message) {
        const errDiv = document.createElement('div');
        errDiv.className = 'error';
        errDiv.innerText = message;
        element.parentNode.appendChild(errDiv);
    }
    Object.entries(errors).forEach(([field, msg]) => {
        const input = document.getElementById(field) || document.querySelector(`[name="${field}"]`);
        if (input) showError(input, msg);
    });

    const messageDiv = document.getElementById('message');
    if (Object.keys(errors).length === 0) {
        messageDiv.style.color = '#48bb78';
        messageDiv.innerText = 'Registration Successful!';
        document.getElementById('registrationForm').reset();
    } else {
        messageDiv.style.color = '#b10a0aff';
        messageDiv.innerText = 'Please fix the highlighted errors.';
    }
});
