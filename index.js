const tempStr = 'Hi!! i am a web and Mobile app Developer......';
const heroTextEl = document.getElementById('heroText');
let i = 0;


function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255 for the red component
    const g = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255 for the green component
    const b = Math.floor(Math.random() * 256); // Generate a random number between 0 and 255 for the blue component
    const color = `rgb(${r}, ${g}, ${b})`; // Combine the red, green, and blue components into a single color value
    return color;
  }


const intervalId = setInterval(() => {
  if (i < tempStr.length) {
    const x = heroTextEl.innerHTML + tempStr[i];
    console.log(x);
    heroTextEl.innerHTML = x;
    i++;
  } else {
     heroTextEl.innerHTML='';
     i=0;
  }
 
}, 50);

const about=document.getElementById('about');
about.addEventListener("click",(e)=>{
    e.preventDefault();
    scrollToElement();
})
function scrollToElement() {
    const element = document.getElementById("aboutSec");
    element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }



