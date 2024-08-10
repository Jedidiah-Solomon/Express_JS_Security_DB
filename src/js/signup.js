document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signup-form");

  form.addEventListener("submit", (event) => {
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const password = document.getElementById("password").value.trim();

    // Capitalize first letter of first name and last name
    if (firstName) {
      document.getElementById("first_name").value =
        capitalizeFirstLetter(firstName);
    }

    if (lastName) {
      document.getElementById("last_name").value =
        capitalizeFirstLetter(lastName);
    }

    // Validate phone number
    const phonePattern = /^\d{11}$/;
    if (!phonePattern.test(phone)) {
      alert("Phone number must be exactly 11 digits.");
      event.preventDefault(); // Prevent form submission
    }

    // Validate password
    const passwordPattern =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordPattern.test(password)) {
      alert(
        "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
      );
      event.preventDefault(); // Prevent form submission
    }
  });

  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
});

const copyYear = document.getElementById("copy-year");
copyYear.textContent = new Date().getFullYear();
