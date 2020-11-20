/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sectionContainers = document.querySelectorAll("section");
const navList = document.querySelector("#navbar__list");
const fragment = document.createDocumentFragment();
const header = document.querySelector(".page__header");
const topButton = document.querySelector(".scrollTop");
let isScrolling;

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i=0; i < sectionContainers.length; i++){
    const element = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.href = `#section${i+1}`;
    element.textContent = `Section ${i+1}`;
    element.className = "menu__link";
    aTag.appendChild(element);
    fragment.appendChild(aTag);
}
navList.appendChild(fragment);

// Add class 'active' to section when near top of viewport
function detect(){
    header.style.visibility = "visible";
    for(let i=0; i<sectionContainers.length; i++){
        
        if(sectionContainers[i].getBoundingClientRect().top >= -30 && sectionContainers[i].getBoundingClientRect().top <= 200){
            const elements = document.querySelectorAll("#navbar__list li");

            for(let i=0; i<sectionContainers.length; i++){
                elements[i].style.color = "black";
                elements[i].style.background = "white";
                sectionContainers[i].className = "";
            }
            elements[i].style.color = "white";
            elements[i].style.background = "#000";
            // Set sections as active
            sectionContainers[i].className = "your-active-class";
        }
        window.clearTimeout( isScrolling );
	  // Set a timeout to run after scrolling ends
	  isScrolling = setTimeout(function() {
		// Run the callback and hide the nav-bar
    header.style.visibility = "hidden";
	}, 2000);
    }
}
window.addEventListener("scroll", detect);


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section smoothly on link click
const links = document.querySelectorAll("#navbar__list a");

for (link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const position = document.querySelector(href).offsetTop;
 
  scroll({
    top: position,
    behavior: "smooth"
  });
}



// scroll top button
function toTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
  }
  
  
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }

  window.onscroll = function() {scrollFunction()};
  