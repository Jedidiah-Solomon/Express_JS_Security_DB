document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  const copyYear = document.getElementById("copy-year");

  // Retrieve user's first name from session storage
  const firstName = sessionStorage.getItem("firstName") || "Guest";

  // Get the current time to determine the greeting
  const now = new Date();
  const hours = now.getHours();

  let greeting;
  if (hours < 12) {
    greeting = `Good morning, ${firstName}`;
  } else if (hours < 17) {
    greeting = `Good afternoon, ${firstName}`;
  } else {
    greeting = `Good evening, ${firstName}`;
  }

  // Set the greeting text
  greetingElement.textContent = greeting;

  // Set the current year in the footer
  copyYear.textContent = new Date().getFullYear();
});
