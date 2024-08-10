document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Basic client-side validation
    if (!email || !password) {
      alert("Please fill out all fields.");
      return;
    }

    // Perform the login via fetch API
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        // Check if the response is JSON
        const contentType = response.headers.get("content-type");

        if (contentType && contentType.includes("application/json")) {
          return response.json();
        } else {
          return response.text().then((text) => {
            // Handle non-JSON responses
            throw new Error(text);
          });
        }
      })
      .then((data) => {
        if (data.redirectTo) {
          // Store user's first name in sessionStorage
          sessionStorage.setItem("firstName", data.firstName);
          // Redirect to the specified URL
          window.location.href = data.redirectTo;
        } else if (data.error) {
          // Handle errors returned as JSON
          alert(data.error);
        }
      })
      .catch((error) => {
        // Display error message from server or other errors
        alert(error.message || "An error occurred during login.");
        console.error("Error during login:", error);
      });
  });
});
