document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const course = document.getElementById('course').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    if (!name || !email || !phone || !course || !gender) {
        alert("All fields are required!");
        return;
    }
    console.log({
        name: name,
        email: email,
        phone: phone,
        course: course,
        gender: gender,
    });
    alert("Registration successful!");
    document.getElementById('registrationForm').reset();
});
