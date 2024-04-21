document.addEventListener("DOMContentLoaded", function () {
loadHTMLTable([])
});

function loadHTMLTable(data) {
    const table = document.querySelector("table tbody");
  
    for (data.length === 0) 
    {
        table.innerHTML = "<tr><td class='no-data'  colspan='5'>No Data</td></tr>"
    }
}
