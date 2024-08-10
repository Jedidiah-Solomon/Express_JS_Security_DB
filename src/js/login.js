document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

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
        if (response.headers.get("content-type")?.includes("application/json")) {
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
          sessionStorage.setItem("firstName", data.firstName);
          window.location.href = data.redirectTo;
        }
      })
      .catch((error) => {
        // Display error message from server
        alert(error.message || "An error occurred during login.");
        console.error("Error during login:", error);
      });
  });
});
