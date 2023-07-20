import companies from "../resources/directory.json" assert { type: "json" };

const gridView = document.getElementById("gridView");
var strToAdd =
  `<table class='grid-table'>
  <tr>
  <th>Name</th>
  <th>Image</th>
  <th class="smallfalse">Address</th>
  <th class="smallfalse">Phone</th>
  <th>Website</th>
  <th>Membership</th>
  </tr>`;

companies.forEach((company) => {
  let imgExtension = "jpg";
  if (company.id == "C" || company.id == "E") imgExtension = "png";

  strToAdd += `<tr>
      <td>${company.name}</td>
      <td><img alt="Company ${company.name}" src="./images/companies/${company.id}.${imgExtension}"></td>
      <td class="smallfalse">${company.address}</td>
      <td class="smallfalse">${company.phone}</td>
      <td><a href="${company.website}" target="_blank">Visit Website</a></td>
      <td>${company.membership}</td>
    </tr>`;
});
strToAdd += "</table>";
gridView.innerHTML = strToAdd;

const listView = document.getElementById("listView");
listView.innerHTML = "";

companies.forEach((company) => {
  let imgExtension = "jpg";
  if (company.id == "C" || company.id == "E") imgExtension = "png";

  listView.innerHTML += `<div class="list-item">
      <img alt="Company ${company.name}" src="./images/companies/${company.id}.${imgExtension}">
      <h2>${company.name}</h2>
      <p><strong>Address:</strong> ${company.address}</p>
      <p><strong>Phone:</strong> ${company.phone}</p>
      <p><strong>Website:</strong> <a href="${company.website}" target="_blank">Visit Website</a></p>
      <p><strong>Membership:</strong> ${company.membership}</p>
    </div>`;
});

function switchToGrid() {
  document.getElementById("gridView").style.display = "block";
  document.getElementById("listView").style.display = "none";
}

function switchToList() {
  document.getElementById("gridView").style.display = "none";
  document.getElementById("listView").style.display = "block";
}

// Initially, show the grid view by default
switchToGrid();

document.getElementById('gridBtn').addEventListener('click', switchToGrid);
document.getElementById('listBtn').addEventListener('click', switchToList);
