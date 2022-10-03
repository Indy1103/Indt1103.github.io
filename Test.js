// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

function Scrollfunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}


function ScrollfunctionCert() {
    var element = document.querySelector("#Cert");


    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}

function ScrollfunctionEd() {
    var element = document.querySelector("#Education");


    element.scrollIntoView({ behavior: 'smooth', block: 'start'});
}





