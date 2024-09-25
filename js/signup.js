function SignUp(event) {
    event.preventDefault(); // Prevent form from submitting

    // Get input values by their IDs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const data = {
        email: email,
        password: password
    };

    fetch('http://localhost:8080/AccountInfo/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            // Check if there is a response body to parse
            return response.text().then(text => {
                if (text) {
                    return JSON.parse(text);
                } else {
                    throw new Error('Empty response from server');
                }
            });
        }
        // Check if there is a response body for successful responses
        return response.text().then(text => text ? JSON.parse(text) : {});
    })
    .then(data => {
        // Handle success
        alert('Sign up successful! Redirecting...');
        window.location.href = 'studentInfo.html';
    })
    .catch(error => {
        // Handle errors
        alert(`Sign up failed: ${error.message}`);
        console.error('Error:', error);
    });
}
