document.addEventListener("DOMContentLoaded", () => {
  fetch("/users")
    .then((response) => response.json())
    .then((users) => {
      const usersContainer = document.getElementById("users-container");
      users.forEach((user) => {
        const userCard = document.createElement("div");
        userCard.className = "user-card";
        userCard.innerHTML = `
            <img src="/uploads/${user.photo}" alt="${user.fullName}'s photo">
            <div class="user-card-content">
              <h3>${user.fullName}</h3>
              <p>Gender: ${user.gender}</p>
              <p>State: ${user.state}</p>
            </div>
          `;
        usersContainer.appendChild(userCard);
      });
    })
    .catch((error) => {
      console.error("Error fetching users:", error);
    });
});
