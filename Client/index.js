document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:5000/getAll")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      loadHTMLTable(data);
    });
});

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
