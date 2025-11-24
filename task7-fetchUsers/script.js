const userContainer = document.getElementById("userContainer");
const reloadBtn = document.getElementById("reloadBtn");

function loadUsers() {
    userContainer.innerHTML = "Loading users...";

    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => {
            userContainer.innerHTML = "";

            users.forEach(user => {
                const card = document.createElement("div");
                card.classList.add("user-card");

                card.innerHTML = `
                    <h3>${user.name}</h3>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                `;

                userContainer.appendChild(card);
            });
        })
        .catch(() => {
            userContainer.innerHTML = "Failed to fetch users. Check your internet.";
        });
}

loadUsers();

reloadBtn.addEventListener("click", loadUsers);
