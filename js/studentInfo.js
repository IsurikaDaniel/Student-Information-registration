function saveStudentInfo() {
    const student = {
        name: document.getElementById('student-name').value,
        contact: document.getElementById('student-contact').value,
        birthday: document.getElementById('student-birthday').value,
        age: document.getElementById('student-age').value,
        email: document.getElementById('student-email').value,
        course: document.getElementById('student-course').value
    };

    // Save student info to localStorage
    localStorage.setItem('studentInfo', JSON.stringify(student));

    // Redirect to the Guardian Info page
    window.location.href = 'guardianInfo.html';
}


