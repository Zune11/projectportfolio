document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
 
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const dob = document.getElementById("dob").value;
    const course = document.getElementById("course").value;
    const termsAccepted = document.getElementById("terms").checked;
 
    if (fullName && email && password && phone && gender && dob && course && termsAccepted) {
        alert("Registration Successfully!");
 
        console.log({
            FullName: fullName,
            Email: email,
            Password: password,
            Phone: phone,
            Gender: gender,
            DateOfBirth: dob,
            Course: course,
            TermsAccepted: termsAccepted
        });
 
        this.reset();
    } else {
        alert("Please fill in all fields and accept the terms.");
    }
});