function submitStudentAndGuardianInfo() {

    const student = JSON.parse(localStorage.getItem('studentInfo'));

    // Check if student data is available
    if (!student) {
        alert('No student information found in local storage.');
        return;
    }

    // guardian info from
    const guardian = {
        name: document.getElementById('guardian-name').value,
        contact: document.getElementById('guardian-contact').value,
        email: document.getElementById('guardian-email').value,
        address: document.getElementById('guardian-address').value
    };

    const data = {
        name: student.name,
        contact: student.contact,
        dob: student.dob,
        course: student.course,
        age: student.age,
        email: student.email,
        gurname: guardian.name,
        gurcontact: guardian.contact,
        guremail: guardian.email,
        guraddress: guardian.address
    };

    console.log('Data being sent:', JSON.stringify(data));

    // API request student and guardian info
    fetch('http://localhost:8080/StudentInfo/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(errData => {
                throw new Error(`Failed to submit: ${errData.message || 'Unknown error'}`);
            });
        }
        return response.json(); // Expecting a JSON response
    })
    .then(data => {
        alert('Registration successful!');
        localStorage.removeItem('studentInfo');
        window.location.href = 'success.html'; 
    })
    .catch(error => {
        alert('Error: ' + error.message);
    });
}
