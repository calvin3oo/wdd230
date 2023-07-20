import companies from "../resources/directory.json" assert { type: "json" };


const randomCompanies = []
const qualifiedCompanies = companies.filter((company) => company.membership == "Gold" || company.membership == "Silver");

for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * qualifiedCompanies.length);
    randomCompanies.push(qualifiedCompanies[randomIndex]);
    qualifiedCompanies.splice(randomIndex, 1);
}

document.querySelectorAll(".spotlight").forEach((spotlight, index) => {
    const company = randomCompanies[index];
    let imgExtension = "jpg";
    if (company.id == "C" || company.id == "E") imgExtension = "png";

    spotlight.innerHTML = `<h3>${company.name}</h3>
    <img class="spotlight-logo" src="./images/companies/${company.id}.${imgExtension}" alt="${company.name} logo">
    <hr>

    <h4>Phone</h4> 
    <small>${company.phone}</small>

    <h4>Address</h4>
    <small>${company.address}</small>`
});