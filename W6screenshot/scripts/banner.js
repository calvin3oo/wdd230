const banner = document.createElement("div");
banner.classList.add("banner");
banner.innerHTML = `🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`;

const closebutton = document.createElement("button");
closebutton.classList.add("close-button");
closebutton.innerHTML = `&times;`;
closebutton.onclick = () => {
    banner.style.display = "none";
}


// Check if today is Monday or Tuesday  
const today = new Date().getDay();
if(today == 1 || today == 2) {
    // If so, add the banner to the main element
    const main = document.querySelector("main");
    main.appendChild(banner);
    banner.appendChild(closebutton);

    // Set the banner to fade away after 10 seconds
    setTimeout(() => {
        fadeElement(banner, 2000, 1, 0)
    }, 10_000);
}

function fadeElement(element, time, from, to){
    let numSteps = time / 30;
    let timeForEachStep = time / numSteps;

    element.style.opacity = from;
    for(let i = 1; i <= numSteps; i++){
        setTimeout(() => {
            element.style.opacity = from + (to - from) * (i / numSteps);
        }, timeForEachStep * i);
    }
}