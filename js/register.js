//   js for registration
const registrationForm = document.getElementById("registration-form");
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
  
    const fullName = event.target.fullname.value;
    const phoneNumber = event.target.phonenumber.value;
    const email = event.target.email.value;
    const password = event.target.pasword.value;
    if (!fullName || !phoneNumber || !email || !password) {
        alert('Please fill in all fields before registering.');
        return; // Stop the function
    }
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    const existingUser = users.find((item) => item.email === email);
  
    if(existingUser)
        {
            alert('This email already exists. Please use a different email.')
        } else {
      const userData = { fullName: fullName,phoneNumber:phoneNumber, email: email, password: password };
      users.push(userData);
      localStorage.setItem("users", JSON.stringify(users));
      alert("User registered successfully!");
      console.log(users)
      event.target.reset();
    }
  });


// function register()
// {
//     const fullName = document.getElementById('fullname').value;
//     const phoneNumber = document.getElementById('phonenumber').value;
//     const email = document.getElementById('email').value;
//     const pasword = document.getElementById('pasword').value;
//     /// Check if the email already exists in local storage
//     if (!fullName || !phoneNumber || !email || !pasword) {
//         alert('Please fill in all fields before registering.');
//         return; // Stop the function
//     }
//     let users = JSON.parse(localStorage.getItem("users")) || []
//     const existingUser = JSON.parse(localStorage.getItem(email));
//     if(existingUser)
//     {
//         alert('This email already exists. Please use a different email.')
//     }
//     else{
//      // Create an object to hold the user data
//      const userData = {
//         fullName: fullName,
//         phoneNumber: phoneNumber,
//         email: email,
//         pasword: pasword
//      }
//      // Store user data in local storage using email as the key

//      localStorage.setItem(email,JSON.stringify(userData));
//         alert('Registration is successful!');
//         console.log("Registered User:",userData)
//     }
// }