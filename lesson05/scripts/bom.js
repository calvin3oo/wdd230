const input = document.getElementById("favchap");
const button = document.querySelector("button");
const list = document.getElementById("list");

button.addEventListener("click", (e) => {
  if (input.value.length === 0) alert("Please enter a chapter");

  const liElement = document.createElement("li");
  const deleteButton = document.createElement("button");
  liElement.innerHTML = input.value;
  deleteButton.textContent = "❌";
  liElement.appendChild(deleteButton);
  // <li><button></button></li>
  list.appendChild(liElement);
  deleteButton.addEventListener("click", (e) => {
    list.removeChild(liElement);
    input.focus();
  });
  input.value = "";
});
