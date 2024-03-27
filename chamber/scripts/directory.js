const baseURL =
  location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:5500/"
    : "https://calvin3oo.github.io/wdd230/";
const linksURL = baseURL + "chamber/data/members.json";

async function getMembers() {
  const response = await fetch(linksURL);
  return await response.json();
}

async function displayMembers() {
  const members = (await getMembers()).companies;

  const membersContainer = document.getElementById("members-container");
  members.forEach((member) => {
    const memberElement = document.createElement("div");
    memberElement.classList.add("card", "member");

    const nameElement = document.createElement("h3");
    nameElement.textContent = member.name;
    memberElement.appendChild(nameElement);

    const addressElement = document.createElement("p");
    addressElement.textContent = member.address;
    memberElement.appendChild(addressElement);

    const phoneElement = document.createElement("p");
    phoneElement.textContent = member.phone;
    memberElement.appendChild(phoneElement);

    const websiteElement = document.createElement("a");
    websiteElement.href = member.website;
    websiteElement.textContent = "Website Link";
    memberElement.appendChild(websiteElement);

    const imageElement = document.createElement("img");
    imageElement.src = "images/members/" + member.image;
    imageElement.alt = member.name;
    memberElement.appendChild(imageElement);

    const membershipLevelElement = document.createElement("p");
    membershipLevelElement.textContent =
      "Membership Level: " + member.membershipLevel;
    memberElement.appendChild(membershipLevelElement);

    const otherInfoElement = document.createElement("p");
    otherInfoElement.textContent = member.otherInfo;
    memberElement.appendChild(otherInfoElement);

    membersContainer.appendChild(memberElement);
  });
}

// Add event listnener to the view toggle button
document.getElementById("viewToggle").addEventListener("click", function () {
  var mainElement = document.getElementById("members-container");
  mainElement.classList.toggle("grid-view");
});

displayMembers();
