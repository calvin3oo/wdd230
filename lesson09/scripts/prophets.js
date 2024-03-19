const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";
const cards = document.querySelector("#cards");

async function getProphetData() {
  const response = await fetch(url);
  displayProphets(await response.json());
}

function displayProphets(prophets) {
  prophets["prophets"].forEach((prophet) => {
    let card = document.createElement("section");
    let fullName = document.createElement("h2");
    let birthDate = document.createElement("p");
    let birthPlace = document.createElement("p");
    let portrait = document.createElement("img");

    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "200px");
    portrait.setAttribute("height", "250px");
    portrait.setAttribute(
      "alt",
      `${prophet.name} ${prophet.lastname} - ${prophet.order}`
    );

    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);
    cards.appendChild(card);
  });
}

getProphetData();
