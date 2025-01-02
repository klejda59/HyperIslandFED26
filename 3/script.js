document.addEventListener('DOMContentLoaded', function() {
    // Change label texts
    document.querySelector('label[for="name"]').textContent = "Full Name:";
    document.querySelector('label[for="email"]').textContent = "Email Address:";
    document.querySelector('label[for="phone"]').textContent = "Phone Number:";
    document.querySelector('label[for="message"]').textContent = "Your Message:";
    document.querySelector('label[for="options"]').textContent = "Select an Option:";

    // Add event listener to the form
    document.querySelector('form').addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form from submitting

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        const option = document.getElementById('options').value;
        const radioSelection = document.querySelector('input[name="radioGroup"]:checked').value;

        // Log form data (you can replace this with your own logic)
        console.log('Form submitted with the following data:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Message:', message);
        console.log('Selected Option:', option);
        console.log('Radio Selection:', radioSelection);

        // Optional: Clear form after submission
        this.reset();
    });
});
