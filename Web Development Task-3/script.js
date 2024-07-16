document.addEventListener('DOMContentLoaded', () => {
    // Form validation
    const form = document.getElementById('contact-form');
    const formResponse = document.getElementById('form-response');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        if (!name || !email || !message) {
            formResponse.textContent = 'Please fill in all fields.';
            formResponse.style.color = 'red';
        } else if (!validateEmail(email)) {
            formResponse.textContent = 'Please enter a valid email address.';
            formResponse.style.color = 'red';
        } else {
            formResponse.textContent = 'Thank you for your message!';
            formResponse.style.color = 'green';
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Interactive menu
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        });
    });
});
