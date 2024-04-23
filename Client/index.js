document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/getAll")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      loadHTMLTable(data);
    });
});
const addBtn = document.querySelector("#add-name-btn");

addBtn.onclick = function () {
  const nameInput = document.querySelector("#name-input");
  const name = nameInput.value;
  nameInput.value = "";

  fetch("http://localhost:5000/insert", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // Optionally, you can handle the response here
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle any errors that occur during the fetch operation
    });
};

function loadHTMLTable(data) {
  const table = document.querySelector("table tbody");

  if (data.length === 0) {
    table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";
  } else {
    table.innerHTML = ""; // Clear any existing rows
    data.forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.id}</td>
        <td>${row.name}</td>
        <td>${row.date_added}</td>
        <td><button class="delete-row-btn">Delete</button></td>
        <td><button class="edit-row-btn">Edit</button></td>
      `;
      table.appendChild(tr);
    });
  }
}
