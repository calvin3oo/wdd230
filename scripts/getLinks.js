const baseURL =
  location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:5500/"
    : "https://calvin3oo.github.io/wdd230/";
const linksURL =
  location.hostname === "127.0.0.1"
    ? "http://127.0.0.1:5500/data/links.json"
    : "https://calvin3oo.github.io/wdd230/data/links.json";

async function getLinks() {
  const response = await fetch(linksURL);
  const data = await response.json();
  displayLessons(data);
}

function displayLessons(data) {
  // Format the data in HTML like the following:
  // <li>Week 02: <a href=link1> title1 </a> | <a href=link2> title2 </a> </li>
  const lessons = data["lessons"];
  document.getElementById("links").innerHTML = lessons
    .map((lesson) => {
      const links = lesson["links"];

      const linksHTML = links
        .map((link) => {
          const url = link.url;
          if (link.url.substring(0, 6) === "https") url = baseURL + url;

          return `<a href="${url}" target="_blank">${link.title}</a>`;
        })
        .join(" | ");

      return `<li>Week ${lesson.lesson}: ${linksHTML}</li>`;
    })
    .join("");
}

getLinks();
