/* standard jquery format:

$("selector").method();

*/

/*$(document).ready(function() {
    // all custom jQuery will go here
)}
*/




/*Function for skills list toggle*/

function toggleList() {
    //get the list
    const myList = document.querySelector(".skill-list");

    //get the value of lists display property
    const displaySetting = myList.style.display;

    //also get the list button so we can change what it says
    const listButton = document.getElementById('listButton');

    // now toggle the list and button text, depending on current state
    if (displaySetting == 'block') {
        //clock is visible. hide it
        myList.style.display = 'none';
        //change button text
        listButton.innerHTML = 'See my skills so far';
        }
        else {
            //clock is hidden. show it
            myList.style.display = 'block';
            //change button text
            listButton.innerHTML = 'Hide my skills';
        }
}


/* Function for Light/Dark Mode Toggle button */
function toggleModeButton(){
const checkbox = document.querySelector("input[type='checkbox']");

const body = document.querySelector(".main-body");

const navbar_fixed = document.querySelector(".navbar-fixed-top");

const button_text = document.querySelector(".btn-type");

const nav_item = document.querySelector(".nav-item");

const logo = document.querySelector(".fa-sun");

const logo_list = document.querySelector(".btn-logo");

const header_one = document.querySelectorAll("h1");

let main_img = document.querySelectorAll("main-img");

let toggle = false; 





checkbox.addEventListener("click", () => {

body.classList.toggle("bg-dark");

navbar_fixed.classList.toggle("text-color-dark");

button_text.classList.toggle("btn-type-dark");

logo_list.classList.toggle("btn-type-dark");

logo.classList.toggle("text-color-dark");

header_one.classList.toggle("h1-dark");


if (checkbox.checked) {
logo.classList.remove("fa-sun");
logo.classList.add("fa-moon");
button_text.textContent = "Dark Mode";
} 

else {
logo.classList.remove("fa-moon");
logo.classList.add("fa-sun");
button_text.textContent = "Light Mode";
}
});
}

/* 
// Top nav button

var nav = document.getElementById('access_nav'),
    body = document.body;

nav.addEventListener('click', function(e) {
    body.className = body.className? '' : 'with_nav';
    e.preventDefault();
}); */