var foods;

async function main(){
    await setFoods();

    console.dir(foods);

    let foodsHTML = `<option value="0">Nothing</option>`;

    foods.forEach((food) => {
        foodsHTML += `<option value="${food.id}">${food.name}</option>`;
    });

    document.querySelectorAll('.fruit-options').forEach((element) => {
        element.innerHTML = foodsHTML;
    });

    document.getElementById('drink-form').addEventListener('submit', (event) => {
        event.preventDefault();

        console.dir(event);
        const formData = new FormData(event.target);
        const data = [...formData.entries()];
        console.log(data);

        // Add to the local storage, and make it if it doesn't exist
        if (!localStorage.getItem('totalSubmitted')) {
            localStorage.setItem('totalSubmitted', 1);
        } else {
            localStorage.setItem('totalSubmitted', parseInt(localStorage.getItem('totalSubmitted')) + 1);
        }

        document.getElementById('drink-form-container').hidden = true;

        var strToAdd = `<h1>Your Drink: </h1>
        <h2>Order Information:</h2>`

        var nutrients = {
            "carbohydrates": 0,
            "protein": 0,
            "fat": 0,
            "sugar": 0,
            "calories": 0,
        };
        data.forEach(item => {
            var fixedStr = fixStr(item[0]);
            var value;
            if (item[0].includes("fruit")) {
                if(item[1] == 0) return;
                const fruit = foods.find(food => food.id === parseInt(item[1]));
                value = fruit.name;
                Object.keys(nutrients).forEach(nutrient => {
                    nutrients[nutrient] += fruit.nutritions[nutrient];
                });
            } else {
                value = item[1];
            }

            strToAdd += `<p>${fixedStr}: ${value}</p>`;
        })

        strToAdd += `<p>Order Date: ${getCurrentDate()}</p>
        <br>
        <h2>Nutrition Information:</h2>`;

        Object.keys(nutrients).forEach(nutrient => {
            strToAdd += `<p>${nutrient}: ${nutrients[nutrient]}</p>`;
        });
        
        document.getElementById('drink-reciept').innerHTML = strToAdd;
        document.getElementById('drink-reciept').hidden = false;

    });

}
async function setFoods(){
    await fetch("https://brotherblazzard.github.io/canvas-content/fruit.json")
    .then(response => response.json())
    .then(data => {
        foods = data;
    });
}
function fixStr(str) {
    const stringWithSpaces = str.replace(/-/g, ' ');
  
    const wordsArray = stringWithSpaces.split(' ');
    const capitalizedWords = wordsArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  
    const fixedString = capitalizedWords.join(' ');
  
    return fixedString;
  }
  function getCurrentDate() {
    const currentDate = new Date();
  
    const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(currentDate.getDate()).padStart(2, '0');
    const year = currentDate.getFullYear();

    const formattedDate = `${month}/${day}/${year}`;
  
    return formattedDate;
  }















main();