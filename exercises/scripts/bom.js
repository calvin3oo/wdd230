const newElementText = document.getElementById('favchap');
const button = document.getElementById('btn');
const list = document.getElementById('list');

button.addEventListener('click', function () {
    const newElement = document.createElement('li');
        const paragraph = document.createElement('p');
        paragraph.textContent = newElementText.value;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () {
            list.removeChild(newElement);
            newElementText.focus();
        });
    newElement.appendChild(paragraph);
    newElement.appendChild(removeButton);

    list.appendChild(newElement);
    newElementText.value = '';
    }
);
