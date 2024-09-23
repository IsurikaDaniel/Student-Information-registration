 //----------------- Redirecting to the Create a account page ---------------------
function LoginIn() {
    window.location.href = "studentInfo.html";
}

function SingUp() {
    window.location.href = "studentInfo.html";
}

function Next() {
    window.location.href = "guardianInfo.html";
}

function Clear() {
    // type alate msg .................
}

function Register() {
    // window.location.href = "studentInfo.html";
}

// Reference the table body
let tableBody = document.getElementById("tblStuDetails").querySelector('tbody');

// Variable to hold table rows
let body = "";

// Fetch data from the API
fetch("http://localhost:8080/StudentInfo/get")
.then(res => res.json())
.then(data => {
    data.forEach(element => {
        // Build table row for each element
        body += `
            <tr>
                <td data-label="ID">${element.id}</td>
                <td data-label="Name">${element.name}</td>
                <td data-label="Contact">${element.contact}</td>
                <td data-label="DOB">${element.dob}</td>
                <td data-label="Age">${element.age}</td>
                <td data-label="Email">${element.email}</td>
                <td data-label="Course">${element.course}</td>
            </tr>`;
    });
    // Set the inner HTML of the table body
    tableBody.innerHTML = body;
})
.catch(error => console.error('Error fetching data:', error));


function login() {
    // Get the values from the form
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    // Ensure the fields are not empty
    if (!email || !password) {
        alert("Please fill in both email and password fields.");
        return;
    }

    // Send a GET request to fetch student data
    fetch('http://localhost:8080/StudentInfo/get')
    .then(response => {
        if (response.ok) {
            return response.json(); // Parse the response data
        } else {
            throw new Error('Failed to fetch student info.');
        }
    })
    .then(data => {
        // Assuming data is an array of student info
        const student = data.find(student => student.email === email && student.password === password);
        
        if (student) {
            // Successful login, load studentInfo.html
            console.log('Login successful:', student);
            window.location.href = "/studentInfo.html"; // Redirect to studentInfo.html
        } else {
            // Login failed, show error message
            alert('Invalid email or password.');
        }
    })
    .catch(error => {
        // Handle any other errors
        console.error('Error:', error);
        alert(error.message);
    });
}

