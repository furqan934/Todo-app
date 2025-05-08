// //  js for login
// const loginForm = document.getElementById("login-form");

// loginForm.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const email = event.target.email.value;
//   const password = event.target.pasword.value;
//       // Check if email and password fields are filled
//  if (!email || !pasword) {
//    alert('Please fill in both fields.');
//    return;
// }
//   const users = JSON.parse(localStorage.getItem("users")) || [];

//   const foundUser = users.find(
//     (item) => item.email === email && item.password === password
//   );

//   if (foundUser) {
//     const currentUser = {
//       fullName: foundUser.fullName,
//       email: foundUser.email,
//     };
//     localStorage.setItem("currentUser", JSON.stringify(currentUser));
//     alert("User logged in successfully!");
//     event.target.reset();
//     window.location.href = "./pages/home.html";
//   } else {
//     alert("Invalid credentials!");
//   }
// });


const loginForm = document.getElementById("login-form");
const fullName = document.getElementById("fullname");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  
  const email = event.target.email.value.trim();
  const password = event.target.pasword.value.trim();

  // Check if email and password fields are filled
  if (!email || !password) {
    alert('Please fill in both fields.');
    return;
  }

  // Retrieve users array from local storage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Find a user matching email and password
  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (foundUser) {
    // Store current user data
    const currentUser = {
      fullName:foundUser.fullName,
      email: foundUser.email,
      password:foundUser.password,

    };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));

    alert("User logged in successfully!");
    event.target.reset();
    window.location.href = "./pages/home.html"; // adjust path as needed

  } else {
    alert("Invalid email or password!");
  }
  if(!foundUser){
    alert("user not exsist!.register first.")
  }
});
