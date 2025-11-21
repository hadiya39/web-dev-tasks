function validateForm() {
  // Get the values entered in each field
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

 //all fields mendatory
  if (!name || !email || !phone || !password || !confirmPassword) {
    alert("All fields are mandatory!");
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address!");
    return false; 
  }

  const phoneRegex = /^\d{10}$/;   //ph no must contain 10 digits
  if (!phoneRegex.test(phone)) {
    alert("Phone number must be exactly 10 digits!");
    return false;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }

  alert("Form submitted successfully!");
  return true;
}