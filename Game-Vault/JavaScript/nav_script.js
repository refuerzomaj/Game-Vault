window.onscroll = function() {stickyFunction()};

var navbar = document.getElementById("nav-bar-top");
var sticky = navbar.offsetTop;

function navFunction() {
  if (navbar.className === "nav-bar") {
    navbar.className += " responsive";
    navbar.className += " sticky";
  } else {
    navbar.className = "nav-bar";
  }
}

function stickyFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}