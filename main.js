const URL = "http://localhost:3000/users";
const tbody = document.getElementById("list");

function getUsers() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((user) => {
        let tr = document.createElement("tr");
        tr.innerHTML = `
            <tr>
                <td>${user.name}</td>
                <td>${user.username}</td>
                <td>${user.email}</td>
                <td><button onclick="delUser(${user.id})">delete</button></td>
            </tr>
        `;
        tbody.append(tr);
      });
    });
}
getUsers();

function delUser(id) {
  console.log(id);
  fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
